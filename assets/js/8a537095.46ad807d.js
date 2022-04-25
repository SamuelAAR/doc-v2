(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(404)),a=["components"],c={custom_edit_url:null,id:"10-sendControl",title:"sendControl()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Movement/10-sendControl",id:"codrone-edu/python/Flight-Commands-Movement/10-sendControl",isDocsHomePage:!1,title:"sendControl()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/10-sendControl.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/10-sendControl",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/10-sendControl",editUrl:null,version:"current",sidebarPosition:10,frontMatter:{custom_edit_url:null,id:"10-sendControl",title:"sendControl()"},sidebar:"codroneEduSideBar",previous:{title:"reset_move()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/09-reset_move"},next:{title:"sendControlWhile()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/11-sendControlWhile"}},s=[],d={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Send roll, pitch, yaw, and throttle values to the drone."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sendControl(roll, pitch, yaw, throttle)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"roll"),": An int from -100 to 100 that sets the roll variable. negative is left, positive is right\n",Object(i.b)("strong",{parentName:"p"},"pitch"),": An int from -100 to 100 that sets the pitch variable. negative is backwards, positive is forwards\n",Object(i.b)("strong",{parentName:"p"},"yaw"),": An int from -100 to 100 that sets the yaw variable. negative is left, positive is right\n",Object(i.b)("strong",{parentName:"p"},"throttle"),": An int from -100 to 100 that sets the throttle variable. negative is down, positive is up"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"#TODO"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.sendControl(0, 30, 0, 0) # setting pitch to 30\ntime.sleep(1) # wait for 1 second while the drone is moving forward\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);