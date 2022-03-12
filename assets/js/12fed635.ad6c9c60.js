(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{375:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,b=u["".concat(a,".").concat(m)]||u[m]||s[m]||i;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(375)),a=["components"],c={custom_edit_url:null,id:"03-reset_trim",title:"reset_trim()"},d={unversionedId:"codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim",id:"codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim",isDocsHomePage:!1,title:"reset_trim()",description:"Description",source:"@site/docs/codrone-edu/python/02-Flight-Commands-Start-Stop/03-reset_trim.md",sourceDirName:"codrone-edu/python/02-Flight-Commands-Start-Stop",slug:"/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,id:"03-reset_trim",title:"reset_trim()"},sidebar:"codroneEduSideBar",previous:{title:"land()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/02-land"},next:{title:"set_trim()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/04-set_trim"}},p=[],l={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"You can reset the roll and pitch trim of the drone in case your drone is drifting. This function will reset the roll and pitch trim values back to zero."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"reset_trim()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.set_trim(5,0)\nprint(drone.get_trim())\ndrone.takeoff()\ndrone.hover(3)\ndrone.land()\ndrone.reset_trim()\nprint(drone.get_trim())\ndrone.close()\n")))}u.isMDXComponent=!0}}]);