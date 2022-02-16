(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{204:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return b}));var o=n(3),t=n(7),c=(n(0),n(323)),a=["components"],l={custom_edit_url:null,title:"CoDrone Changelog",menu:"CoDrone Library Changelog",id:"codrone-pro-changelog",taxonomy:null,category:"changelog"},i={unversionedId:"codrone-pro/home/codrone-pro-changelog",id:"codrone-pro/home/codrone-pro-changelog",isDocsHomePage:!1,title:"CoDrone Changelog",description:"Aug 14, 2018",source:"@site/docs/codrone-pro/home/02-python-changelog.md",sourceDirName:"codrone-pro/home",slug:"/codrone-pro/home/codrone-pro-changelog",permalink:"/doc-v2/docs/codrone-pro/home/codrone-pro-changelog",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,title:"CoDrone Changelog",menu:"CoDrone Library Changelog",id:"codrone-pro-changelog",taxonomy:null,category:"changelog"},sidebar:"codroneProSideBar",previous:{title:"CoDrone Pro Library Reference",permalink:"/doc-v2/docs/codrone-pro/home/arduino-ref"},next:{title:"CoDrone Pro Library Reference",permalink:"/doc-v2/docs/codrone-pro/blockly/reference_blockly"}},u=[],p={toc:u};function b(e){var r=e.components,n=Object(t.a)(e,a);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Aug 14, 2018"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CoDrone Version 1.1.3")),Object(c.b)("p",null,"New Function:",Object(c.b)("br",null),"\npair() : Updated to a new function for pairing with the CoDrone. Pair will pair with the nearest, then save your drone info to your project folder and use the next time you pair with no parameters.",Object(c.b)("br",null),"\ncalibrate() : you can reset and calibrate drone programmatically.",Object(c.b)("br",null)),Object(c.b)("p",null,"move() function updated.  It can take 4 parameters move(roll,pitch,yaw,throttle) to move indefinitely"),Object(c.b)("hr",null),Object(c.b)("h5",{id:"may-21-2018"},"May 21, 2018"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CoDrone Version 1.1.2")),Object(c.b)("p",null,"Print port name and drone name at the start of the program."),Object(c.b)("p",null,"Solve setAllRGB() function error (couldn't change the colors when repeated it too fast)."),Object(c.b)("hr",null),Object(c.b)("h5",{id:"mar-28-2018"},"Mar 28, 2018"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CoDrone Version 1.1.1")),Object(c.b)("p",null,"Change the Mode name"),Object(c.b)("p",null,"Change the default value in flight command"),Object(c.b)("p",null,"Add some error messages for debugging mode"),Object(c.b)("hr",null),Object(c.b)("h5",{id:"mar-16-2018"},"Mar 16, 2018"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CoDrone Version 1.1.0")),Object(c.b)("p",null,'Remove "time." in protocol.py'),Object(c.b)("p",null,"Add legacy functions"),Object(c.b)("p",null,"Fix functions about degrees."),Object(c.b)("hr",null),Object(c.b)("h5",{id:"dec-16-2017"},"Dec 16, 2017"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CoDrone Version 0.2")),Object(c.b)("p",null,"The first CoDrone library release for the Python Package Index"),Object(c.b)("hr",null))}b.isMDXComponent=!0},323:function(e,r,n){"use strict";n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return m}));var o=n(0),t=n.n(o);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=t.a.createContext({}),p=function(e){var r=t.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},b=function(e){var r=p(e.components);return t.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},s=t.a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),s=o,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||c;return n?t.a.createElement(m,l(l({ref:r},u),{},{components:n})):t.a.createElement(m,l({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=s;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);