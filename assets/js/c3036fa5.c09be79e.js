(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{244:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return f}));var r=t(3),o=t(7),i=(t(0),t(312)),c=["components"],a={custom_edit_url:null,title:"turn_off_LED()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"turn_off_LED()"},u={unversionedId:"codrone-mini/LED/turn-off-led",id:"codrone-mini/LED/turn-off-led",isDocsHomePage:!1,title:"turn_off_LED()",description:"Description",source:"@site/docs/codrone-mini/05-LED/05-turn-off-led.md",sourceDirName:"codrone-mini/05-LED",slug:"/codrone-mini/LED/turn-off-led",permalink:"/doc-v2/docs/codrone-mini/LED/turn-off-led",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"turn_off_LED()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"turn_off_LED()"},sidebar:"cdmSideBar",previous:{title:"reset_LED()",permalink:"/doc-v2/docs/codrone-mini/LED/reset-led"},next:{title:"get_altitude()",permalink:"/doc-v2/docs/codrone-mini/Sensors/get-altitude"}},l=[],p={toc:l};function f(e){var n=e.components,t=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function turns off the LED."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"turn_off_LED()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.turn_off_LED()\n")))}f.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),s=r,b=f["".concat(c,".").concat(s)]||f[s]||d[s]||i;return t?o.a.createElement(b,a(a({ref:n},l),{},{components:t})):o.a.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);