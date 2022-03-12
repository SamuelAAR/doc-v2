(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{372:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(397)),c=["components"],a={custom_edit_url:null,id:"04-flip",title:"flip()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Movement/04-flip",id:"codrone-edu/python/Flight-Commands-Movement/04-flip",isDocsHomePage:!1,title:"flip()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/04-flip.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/04-flip",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/04-flip",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"04-flip",title:"flip()"},sidebar:"codroneEduSideBar",previous:{title:"detect_wall()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/03-detect_wall"},next:{title:"hover()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Movement/05-hover"}},p=[],d={toc:p};function u(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,'Calls sendFlip() command to flip the drone in desired direction.\nOptions are: "front", "back", "left", and "right"'),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"flip()"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"flip(direction)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),': optional parameter that is the direction the drone will flip. default is "back"'),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.flip("front")\ndrone.land()\ndrone.close()\n')))}u.isMDXComponent=!0},397:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?o.a.createElement(f,a(a({ref:n},p),{},{components:t})):o.a.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);