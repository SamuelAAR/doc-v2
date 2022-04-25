(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(404)),a=["components"],c={custom_edit_url:null,id:"headless-off",title:"headless_off()"},s={unversionedId:"codrone-mini/python/Flight-Commands-Start-Stop/headless-off",id:"codrone-mini/python/Flight-Commands-Start-Stop/headless-off",isDocsHomePage:!1,title:"headless_off()",description:"Description",source:"@site/docs/codrone-mini/python/02-Flight-Commands-Start-Stop/02-headless-off.md",sourceDirName:"codrone-mini/python/02-Flight-Commands-Start-Stop",slug:"/codrone-mini/python/Flight-Commands-Start-Stop/headless-off",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/headless-off",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"headless-off",title:"headless_off()"},sidebar:"cdmSideBar",previous:{title:"emergency_stop()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop"},next:{title:"headless_on()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/headless-on"}},l=[],d={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,'This function turns off headless mode. In this mode, the drone is keeping track of which direction it\'s facing and will fly relative to which direction it is facing. Remember that the "front" is denoted by the red line on the shell.'),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"headless_off()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.\n\ndrone.takeoff()\ndrone.set_yaw(20)\ndrone.move(1)\ndrone.set_yaw(0)\ndrone.set_pitch(40)\ndrone.move(1)\n\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},404:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,m=p["".concat(a,".").concat(u)]||p[u]||f[u]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);