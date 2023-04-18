(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return A})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(637)),l=["components"],a={custom_edit_url:null,id:"04-set-throttle",title:"set_throttle()"},c={unversionedId:"codrone-mini/blockly/Senior/Flight-Variables/04-set-throttle",id:"codrone-mini/blockly/Senior/Flight-Variables/04-set-throttle",isDocsHomePage:!1,title:"set_throttle()",description:"Block",source:"@site/docs/codrone-mini/blockly/Senior/02-Flight-Variables/04-set-throttle.md",sourceDirName:"codrone-mini/blockly/Senior/02-Flight-Variables",slug:"/codrone-mini/blockly/Senior/Flight-Variables/04-set-throttle",permalink:"/docs/codrone-mini/blockly/Senior/Flight-Variables/04-set-throttle",editUrl:null,version:"current",sidebarPosition:4,frontMatter:{custom_edit_url:null,id:"04-set-throttle",title:"set_throttle()"}},A=[],s={toc:A};function u(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"block"},"Block"),Object(i.b)("p",null,Object(i.b)("img",{alt:"set throttle image",src:r(782).default})),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function sets the throttle direction variable but will not send a move command. Negative values will move the drone downward and positive values will move the drone upward.\n",Object(i.b)("img",{alt:"pitch directions for CoDrone Mini",src:r(783).default})),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"power"),": integer between -100 and 100 ",Object(i.b)("br",null)," "),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("img",{alt:"set throttle example",src:r(784).default})))}u.isMDXComponent=!0},637:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=o.a.createContext({}),s=function(e){var t=o.a.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(A.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,A=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,d=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return r?o.a.createElement(d,a(a({ref:t},A),{},{components:r})):o.a.createElement(d,a({ref:t},A))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var A=2;A<i;A++)l[A]=r[A];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},782:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"},783:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/cdm_throttle-1771813ebde0feb624a6b6aa985bb63d.png"},784:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/set_throttle_example-57035d87cf98fd16fbff2beaec620aff.png"}}]);