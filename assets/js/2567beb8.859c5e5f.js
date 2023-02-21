(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(588)),a=["components"],c={custom_edit_url:null,title:"get_drone_temp()",taxonomy:{category:["sensors"],tag:["CDM-library"]},menu:"get_drone_temp()"},p={unversionedId:"codrone-mini/python/Sensors/get-drone-temp",id:"codrone-mini/python/Sensors/get-drone-temp",isDocsHomePage:!1,title:"get_drone_temp()",description:"Description",source:"@site/docs/codrone-mini/python/07-Sensors/04-get-drone-temp.md",sourceDirName:"codrone-mini/python/07-Sensors",slug:"/codrone-mini/python/Sensors/get-drone-temp",permalink:"/docs/codrone-mini/python/Sensors/get-drone-temp",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,title:"get_drone_temp()",taxonomy:{category:["sensors"],tag:["CDM-library"]},menu:"get_drone_temp()"},sidebar:"cdmSideBar",previous:{title:"get_battery_percentage()",permalink:"/docs/codrone-mini/python/Sensors/get-battery-percentage"},next:{title:"get_height()",permalink:"/docs/codrone-mini/python/Sensors/get-height"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This is a getter function gets the drone's ",Object(i.b)("strong",{parentName:"p"},"temperature")," from the barometer.",Object(i.b)("br",null),"\nThe sensor reads the drone\u2019s temperature, not the air around it."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get_drone_temp()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"The temperature in Celsius as an integer."),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\n# print the temperature\ntime.sleep(1) # to prevent skipping for an accurate reading\ntemperature  = drone.get_drone_temp()\nprint(temperature)\ndrone.close()\n")))}l.isMDXComponent=!0},588:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,b=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);