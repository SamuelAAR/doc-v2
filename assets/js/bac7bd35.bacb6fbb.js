(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{318:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),a=(t(0),t(404)),c=["components"],i={custom_edit_url:null,id:"changelog",title:"CoDrone Mini Library Changelog"},l={unversionedId:"codrone-mini/python/changelog",id:"codrone-mini/python/changelog",isDocsHomePage:!1,title:"CoDrone Mini Library Changelog",description:"Aug 14, 2018",source:"@site/docs/codrone-mini/python/python-changelog.md",sourceDirName:"codrone-mini/python",slug:"/codrone-mini/python/changelog",permalink:"/docs/codrone-mini/python/changelog",editUrl:null,version:"current",frontMatter:{custom_edit_url:null,id:"changelog",title:"CoDrone Mini Library Changelog"},sidebar:"cdmSideBar",previous:{title:"CoDrone Mini Library Reference",permalink:"/docs/codrone-mini/python/reference/library"},next:{title:"pair()",permalink:"/docs/codrone-mini/python/Connection/01-pair"}},u=[],p={toc:u};function b(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Aug 14, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone mini Version 1.1.3")),Object(a.b)("p",null,"New Function:",Object(a.b)("br",null),"\npair() : Updated to a new function for pairing with the CoDrone. Pair will pair with the nearest, then save your drone info to your project folder and use the next time you pair with no parameters.",Object(a.b)("br",null),"\ncalibrate() : you can reset and calibrate drone programmatically.",Object(a.b)("br",null)),Object(a.b)("p",null,"move() function updated.  It can take 4 parameters move(roll,pitch,yaw,throttle) to move indefinitely"),Object(a.b)("hr",null),Object(a.b)("h5",{id:"may-21-2018"},"May 21, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.2")),Object(a.b)("p",null,"Print port name and drone name at the start of the program."),Object(a.b)("p",null,"Solve setAllRGB() function error (couldn't change the colors when repeated it too fast)."),Object(a.b)("hr",null),Object(a.b)("h5",{id:"mar-28-2018"},"Mar 28, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.1")),Object(a.b)("p",null,"Change the Mode name"),Object(a.b)("p",null,"Change the default value in flight command"),Object(a.b)("p",null,"Add some error messages for debugging mode"),Object(a.b)("hr",null),Object(a.b)("h5",{id:"mar-16-2018"},"Mar 16, 2018"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 1.1.0")),Object(a.b)("p",null,'Remove "time." in protocol.py'),Object(a.b)("p",null,"Add legacy functions"),Object(a.b)("p",null,"Fix functions about degrees."),Object(a.b)("hr",null),Object(a.b)("h5",{id:"dec-16-2017"},"Dec 16, 2017"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CoDrone Version 0.2")),Object(a.b)("p",null,"The first CoDrone library release for the Python Package Index"),Object(a.b)("hr",null))}b.isMDXComponent=!0},404:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return t?o.a.createElement(m,i(i({ref:n},u),{},{components:t})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);