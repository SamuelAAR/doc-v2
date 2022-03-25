(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(404)),c=["components"],i={custom_edit_url:null,id:"07-get_front_range",title:"get_front_range()"},u={unversionedId:"codrone-edu/python/Sensors/07-get_front_range",id:"codrone-edu/python/Sensors/07-get_front_range",isDocsHomePage:!1,title:"get_front_range()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/07-get_front_range.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/07-get_front_range",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/07-get_front_range",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,id:"07-get_front_range",title:"get_front_range()"},sidebar:"codroneEduSideBar",previous:{title:"get_flow_y()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/06-get_flow_y"},next:{title:"get_pos_x()",permalink:"/doc-v2/docs/codrone-edu/python/Sensors/08-get_pos_x"}},s=[],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a getter function which returns the current ",Object(a.b)("strong",{parentName:"p"},"Range")," from the front range sensor. The default unit of measurement is centimeters. ",Object(a.b)("br",null),"\nThis function uses the front range sensor to measure distance from the drone to the surface in front of the drone. ",Object(a.b)("br",null)),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"get_front_range()"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},'get_front_range(unit="<cm, in, mm, m>)"'),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"unit"),': The unit of measurement that is chosen for the range distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.'),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"The current range calculated by the front range sensor (cm default)."),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.hover(3)\ndistance = drone.get_front_range()\nprint(distance)\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},404:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:n},s),{},{components:t})):o.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);