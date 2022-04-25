(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(404)),i=["components"],l={custom_edit_url:null,title:"set_throttle()",menu:"set_throttle() / setThrottle()",taxonomy:null,category:"flight-variables"},c={unversionedId:"codrone-pro/python/flight-variables/set-throttle",id:"codrone-pro/python/flight-variables/set-throttle",isDocsHomePage:!1,title:"set_throttle()",description:"Description",source:"@site/docs/codrone-pro/python/06-flight-variables/08-set-throttle.md",sourceDirName:"codrone-pro/python/06-flight-variables",slug:"/codrone-pro/python/flight-variables/set-throttle",permalink:"/docs/codrone-pro/python/flight-variables/set-throttle",editUrl:null,version:"current",sidebarPosition:8,frontMatter:{custom_edit_url:null,title:"set_throttle()",menu:"set_throttle() / setThrottle()",taxonomy:null,category:"flight-variables"},sidebar:"codroneProSideBar",previous:{title:"set_roll()",permalink:"/docs/codrone-pro/python/flight-variables/set-roll"},next:{title:"set_yaw()",permalink:"/docs/codrone-pro/python/flight-variables/set-yaw"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a setter function that allows you to set the throttle variable."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"set_throttle(power)"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"setThrottle(power)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends."),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\n# Drone goes up for 1 second with 50 power\ndrone.set_throttle(50)\ndrone.move(1)\n\ndrone.land()\ndrone.close()\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.setThrottle(60);    // set throttle power for 60%\n    CoDrone.move(5);            // move drone for 5 seconds\n    CoDrone.land();\n}\n\nvoid loop(){\n\n}\n")))}u.isMDXComponent=!0},404:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(h,l(l({ref:t},s),{},{components:r})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);