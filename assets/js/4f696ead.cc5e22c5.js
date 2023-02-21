(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{234:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(588)),c=["components"],a={custom_edit_url:null,title:"get_trim()",taxonomy:{category:["sensors"],tag:["CDM-library"]},menu:"get_trim()"},s={unversionedId:"codrone-mini/python/Sensors/get-trim",id:"codrone-mini/python/Sensors/get-trim",isDocsHomePage:!1,title:"get_trim()",description:"Description",source:"@site/docs/codrone-mini/python/07-Sensors/07-get-trim.md",sourceDirName:"codrone-mini/python/07-Sensors",slug:"/codrone-mini/python/Sensors/get-trim",permalink:"/docs/codrone-mini/python/Sensors/get-trim",editUrl:null,version:"current",sidebarPosition:7,frontMatter:{custom_edit_url:null,title:"get_trim()",taxonomy:{category:["sensors"],tag:["CDM-library"]},menu:"get_trim()"},sidebar:"cdmSideBar",previous:{title:"get_pressure()",permalink:"/docs/codrone-mini/python/Sensors/get-pressure"}},p=[],u={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function gets the current trim values of the drone."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get_trim()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"It returns a Trim class in Python"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n# print the pressure\ntrim  = drone.get_trim()\nprint(trim)\nprint(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)\ndrone.close()\n")))}l.isMDXComponent=!0},588:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return r?o.a.createElement(b,a(a({ref:t},p),{},{components:r})):o.a.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);