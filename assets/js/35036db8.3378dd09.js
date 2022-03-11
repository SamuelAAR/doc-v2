(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(377)),i=["components"],c={custom_edit_url:null,id:"headless-off",title:"headless_off()"},d={unversionedId:"codrone-edu/python/Flight-Commands-Start-Stop/headless-off",id:"codrone-edu/python/Flight-Commands-Start-Stop/headless-off",isDocsHomePage:!1,title:"headless_off()",description:"Description",source:"@site/docs/codrone-edu/python/02-Flight-Commands-Start-Stop/02-headless-off.md",sourceDirName:"codrone-edu/python/02-Flight-Commands-Start-Stop",slug:"/codrone-edu/python/Flight-Commands-Start-Stop/headless-off",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/headless-off",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"headless-off",title:"headless_off()"},sidebar:"codroneEduSideBar",previous:{title:"emergency_stop()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/emergency_stop"},next:{title:"headless_on()",permalink:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/headless-on"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,'This function turns off headless mode. In this mode, the drone is keeping track of which direction it\'s facing and will fly relative to which direction it is facing. Remember that the "front" is denoted by the red line on the shell.'),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"headless_off()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.\n\ndrone.takeoff()\ndrone.set_yaw(20)\ndrone.move(1)\ndrone.set_yaw(0)\ndrone.set_pitch(40)\ndrone.move(1)\n\ndrone.land()\ndrone.close()\n")))}p.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);