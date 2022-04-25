(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(404)),c=["components"],i={custom_edit_url:null,title:"rotate180()",menu:"rotate180()",taxonomy:null,category:"flight-command-movement"},l={unversionedId:"codrone-pro/python/flight-commands-movement/rotate-180",id:"codrone-pro/python/flight-commands-movement/rotate-180",isDocsHomePage:!1,title:"rotate180()",description:"Description",source:"@site/docs/codrone-pro/python/05-flight-commands-movement/05-rotate-180.md",sourceDirName:"codrone-pro/python/05-flight-commands-movement",slug:"/codrone-pro/python/flight-commands-movement/rotate-180",permalink:"/docs/codrone-pro/python/flight-commands-movement/rotate-180",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"rotate180()",menu:"rotate180()",taxonomy:null,category:"flight-command-movement"},sidebar:"codroneProSideBar",previous:{title:"hover()",permalink:"/docs/codrone-pro/python/flight-commands-movement/hover"},next:{title:"turn_degree()",permalink:"/docs/codrone-pro/python/flight-commands-movement/turn-degree"}},p=[],m={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone rotate 180 degrees. Only rotates in a random direction, because this is a pre-set flight event in the firmware."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"rotate180()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\ndrone.rotate180()\n\ndrone.land()\ndrone.close(\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//not yet\n")))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),s=r,b=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);