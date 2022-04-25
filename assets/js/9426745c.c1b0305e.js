(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(404)),i=["components"],c={custom_edit_url:null,id:"02-land",title:"land()"},d={unversionedId:"codrone-edu/python/Flight-Commands-Start-Stop/02-land",id:"codrone-edu/python/Flight-Commands-Start-Stop/02-land",isDocsHomePage:!1,title:"land()",description:"Description",source:"@site/docs/codrone-edu/python/02-Flight-Commands-Start-Stop/02-land.md",sourceDirName:"codrone-edu/python/02-Flight-Commands-Start-Stop",slug:"/codrone-edu/python/Flight-Commands-Start-Stop/02-land",permalink:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/02-land",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-land",title:"land()"},sidebar:"codroneEduSideBar",previous:{title:"emergency_stop()",permalink:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/01-emergency_stop"},next:{title:"reset_trim()",permalink:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. ",Object(a.b)("strong",{parentName:"p"},"NOTE:")," If you want to take off and immediately land, it is recommended to run a ",Object(a.b)("inlineCode",{parentName:"p"},"hover()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"time.sleep()")," in between the ",Object(a.b)("inlineCode",{parentName:"p"},"takeoff()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"land()"),", because the CoDrone EDU may miss the land command otherwise."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"land()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\ndrone.takeoff()\ndrone.hover(3) # include a hover() or time.sleep() to prevent land() from skipping\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);