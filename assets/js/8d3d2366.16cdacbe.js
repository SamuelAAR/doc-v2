(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),c=(n(0),n(404)),l=["components"],i={custom_edit_url:null,id:"01-controller_LED_off",title:"controller_LED_off()"},a={unversionedId:"codrone-edu/python/LED/01-controller_LED_off",id:"codrone-edu/python/LED/01-controller_LED_off",isDocsHomePage:!1,title:"controller_LED_off()",description:"Description",source:"@site/docs/codrone-edu/python/05-LED/01-controller_LED_off.md",sourceDirName:"codrone-edu/python/05-LED",slug:"/codrone-edu/python/LED/01-controller_LED_off",permalink:"/docs/codrone-edu/python/LED/01-controller_LED_off",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"01-controller_LED_off",title:"controller_LED_off()"},sidebar:"codroneEduSideBar",previous:{title:"turn_right()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/22-turn_right"},next:{title:"drone_LED_off()",permalink:"/docs/codrone-edu/python/LED/02-drone_LED_off"}},u=[],p={toc:u};function d(e){var r=e.components,n=Object(o.a)(e,l);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Turns off the controller LEDs."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"controller_LED_off()"),Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.controller_LED_off()\ndrone.close()\n")))}d.isMDXComponent=!0},404:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),s=t,b=d["".concat(l,".").concat(s)]||d[s]||f[s]||c;return n?o.a.createElement(b,i(i({ref:r},u),{},{components:n})):o.a.createElement(b,i({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=s;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var u=2;u<c;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);