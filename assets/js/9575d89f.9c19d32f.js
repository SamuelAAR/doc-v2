(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(312)),a=["components"],c={custom_edit_url:null,id:"headless-on",title:"headless_on()"},s={unversionedId:"codrone-mini/Flight-Commands-Start-Stop/headless-on",id:"codrone-mini/Flight-Commands-Start-Stop/headless-on",isDocsHomePage:!1,title:"headless_on()",description:"Description",source:"@site/docs/codrone-mini/02-Flight-Commands-Start-Stop/03-headless-on.md",sourceDirName:"codrone-mini/02-Flight-Commands-Start-Stop",slug:"/codrone-mini/Flight-Commands-Start-Stop/headless-on",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/headless-on",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,id:"headless-on",title:"headless_on()"},sidebar:"cdmSideBar",previous:{title:"headless_off()",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/headless-off"},next:{title:"land()",permalink:"/doc-v2/docs/codrone-mini/Flight-Commands-Start-Stop/land"}},d=[],l={toc:d};function p(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function turns on headless mode, meaning that no matter in which direction the drone is facing, it will fly in the directions relative to you. This is ideal for long range drones."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"headless_on()")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.\n\ndrone.takeoff()\ndrone.set_yaw(20)\ndrone.move(1)\ndrone.set_yaw(0)\ndrone.set_pitch(40)\ndrone.move(1)\n\ndrone.land()\n")))}p.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return t?o.a.createElement(f,c(c({ref:n},d),{},{components:t})):o.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);