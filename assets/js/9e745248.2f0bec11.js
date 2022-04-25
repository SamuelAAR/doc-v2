(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(404)),i=["components"],a={custom_edit_url:null,id:"02-circle",title:"circle()"},l={unversionedId:"codrone-edu/python/Flight-Commands-Movement/02-circle",id:"codrone-edu/python/Flight-Commands-Movement/02-circle",isDocsHomePage:!1,title:"circle()",description:"Description",source:"@site/docs/codrone-edu/python/03-Flight-Commands-Movement/02-circle.md",sourceDirName:"codrone-edu/python/03-Flight-Commands-Movement",slug:"/codrone-edu/python/Flight-Commands-Movement/02-circle",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/02-circle",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-circle",title:"circle()"},sidebar:"codroneEduSideBar",previous:{title:"avoid_wall()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/01-avoid_wall"},next:{title:"detect_wall()",permalink:"/docs/codrone-edu/python/Flight-Commands-Movement/03-detect_wall"}},d=[],p={toc:d};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Flies the drone in the shape of a circle."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"circle()"),"\n",Object(c.b)("inlineCode",{parentName:"p"},"circle(speed, direction)")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"speed"),": optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 75.\n",Object(c.b)("strong",{parentName:"p"},"direction"),": optional parameter that determines the direction of the circle. 1 is right, -1 is left. default value is 1."),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\n# default circle parameters (75, 1)\ndrone.circle()\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||s[m]||c;return n?o.a.createElement(b,a(a({ref:t},d),{},{components:n})):o.a.createElement(b,a({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<c;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);