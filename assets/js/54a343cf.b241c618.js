(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{244:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),i=(t(0),t(586)),c=["components"],u={custom_edit_url:null,id:"11-reset-pid-error",title:"reset pid error"},a={unversionedId:"zumi/blockly/Senior/Driving/11-reset-pid-error",id:"zumi/blockly/Senior/Driving/11-reset-pid-error",isDocsHomePage:!1,title:"reset pid error",description:"Block",source:"@site/docs/zumi/blockly/Senior/01-Driving/11-reset-pid-error.md",sourceDirName:"zumi/blockly/Senior/01-Driving",slug:"/zumi/blockly/Senior/Driving/11-reset-pid-error",permalink:"/docs/zumi/blockly/Senior/Driving/11-reset-pid-error",editUrl:null,version:"current",sidebarPosition:11,frontMatter:{custom_edit_url:null,id:"11-reset-pid-error",title:"reset pid error"}},l=[],s={toc:l};function b(e){var r=e.components,u=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},s,u,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"block"},"Block"),Object(i.b)("p",null,Object(i.b)("img",{alt:"reset PID error block image",src:t(644).default})),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Resets the sum of the gyro error and integral error that accumulated over. Reset the PID error after using ",Object(i.b)("inlineCode",{parentName:"p"},"forward_step()")," to drive more accurately. This does not reset the P, I, and D values of the Zumi PID control. To set those parameters use ",Object(i.b)("inlineCode",{parentName:"p"},"set_PID()"),"."),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None "),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"reset PID error example",src:t(644).default})," "))}b.isMDXComponent=!0},586:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,g=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return t?o.a.createElement(g,u(u({ref:r},l),{},{components:t})):o.a.createElement(g,u({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},644:function(e,r,t){"use strict";t.r(r),r.default="data:image/png;base64,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"}}]);