(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(404)),i=["components"],c={custom_edit_url:null,title:"set_yaw()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_yaw()"},l={unversionedId:"codrone-mini/python/Flight-Variables/set-yaw",id:"codrone-mini/python/Flight-Variables/set-yaw",isDocsHomePage:!1,title:"set_yaw()",description:"Description",source:"@site/docs/codrone-mini/python/04-Flight-Variables/09-set-yaw.md",sourceDirName:"codrone-mini/python/04-Flight-Variables",slug:"/codrone-mini/python/Flight-Variables/set-yaw",permalink:"/docs/codrone-mini/python/Flight-Variables/set-yaw",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,title:"set_yaw()",taxonomy:{category:["flight-variables"],tag:["CDM-library"]},menu:"set_yaw()"},sidebar:"cdmSideBar",previous:{title:"set_throttle()",permalink:"/docs/codrone-mini/python/Flight-Variables/set-throttle"},next:{title:"LED_color()",permalink:"/docs/codrone-mini/python/LED/led-color"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This is a setter function that allows you to set the ",Object(a.b)("strong",{parentName:"p"},"yaw")," variable. Once you set yaw, you have to use ",Object(a.b)("inlineCode",{parentName:"p"},"move()")," to actually execute the movement. The yaw variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to yaw again."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"set_yaw(power)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"power"),": An int from -100 to 100 that sets the yaw variable.  The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right."),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.takeoff()\n\n# Drone turns right for 1 second with 50% power\ndrone.set_yaw(50)\ndrone.move(1)           #use move() to execute the movement for 1 second\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(i,".").concat(y)]||p[y]||b[y]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);