(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{506:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),i=(t(0),t(588)),a=["components"],s={custom_edit_url:null,title:"get_pressure()",taxonomy:{tag:"CDM-library",category:"sensors"},menu:"get_pressure()"},c={unversionedId:"codrone-mini/python/Sensors/get-pressure",id:"codrone-mini/python/Sensors/get-pressure",isDocsHomePage:!1,title:"get_pressure()",description:"Description",source:"@site/docs/codrone-mini/python/07-Sensors/06-get-pressure.md",sourceDirName:"codrone-mini/python/07-Sensors",slug:"/codrone-mini/python/Sensors/get-pressure",permalink:"/docs/codrone-mini/python/Sensors/get-pressure",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"get_pressure()",taxonomy:{tag:"CDM-library",category:"sensors"},menu:"get_pressure()"},sidebar:"cdmSideBar",previous:{title:"get_height()",permalink:"/docs/codrone-mini/python/Sensors/get-height"},next:{title:"get_trim()",permalink:"/docs/codrone-mini/python/Sensors/get-trim"}},p=[],u={toc:p};function l(e){var r=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a getter function that returns the data from the barometer. The function returns a value in the unit Pascals. ",Object(i.b)("strong",{parentName:"p"},"Note:")," 1atm = 101325 Pa"),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get_pressure()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Float that represents air pressure in Pascals."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n# print the pressure\npressure = drone.get_pressure()\nprint(pressure)\ndrone.close()\n")))}l.isMDXComponent=!0},588:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),d=n,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return t?o.a.createElement(b,s(s({ref:r},p),{},{components:t})):o.a.createElement(b,s({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);