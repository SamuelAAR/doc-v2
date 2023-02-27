(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),c=(n(0),n(612)),o=["components"],a={custom_edit_url:null,id:"02-set-pitch",title:"set_pitch()"},u={unversionedId:"codrone-mini/blockly/Senior/Flight-Variables/02-set-pitch",id:"codrone-mini/blockly/Senior/Flight-Variables/02-set-pitch",isDocsHomePage:!1,title:"set_pitch()",description:"Block",source:"@site/docs/codrone-mini/blockly/Senior/02-Flight-Variables/02-set-pitch.md",sourceDirName:"codrone-mini/blockly/Senior/02-Flight-Variables",slug:"/codrone-mini/blockly/Senior/Flight-Variables/02-set-pitch",permalink:"/docs/codrone-mini/blockly/Senior/Flight-Variables/02-set-pitch",editUrl:null,version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,id:"02-set-pitch",title:"set_pitch()"}},l=[],b={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"block"},"Block"),Object(c.b)("p",null,Object(c.b)("img",{alt:"set pitch image",src:n(879).default})),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"Sets the pitch value of the CoDrone mini."),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"power"),": Integer between -100 and 100 ",Object(c.b)("br",null)," "),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("img",{alt:"set pitch example",src:n(880).default})))}s.isMDXComponent=!0},612:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},A=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=b(n),A=r,d=s["".concat(o,".").concat(A)]||s[A]||p[A]||c;return n?i.a.createElement(d,a(a({ref:t},l),{},{components:n})):i.a.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=A;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<c;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},879:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},880:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/set_pitch_example-4cb09a2158074ec1296646e0785d7549.png"}}]);