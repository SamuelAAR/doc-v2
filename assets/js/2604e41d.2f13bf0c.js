(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(404)),a=["components"],c={custom_edit_url:null,title:"LED_color()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"LED_color()"},l={unversionedId:"codrone-mini/python/LED/led-color",id:"codrone-mini/python/LED/led-color",isDocsHomePage:!1,title:"LED_color()",description:"Description",source:"@site/docs/codrone-mini/python/05-LED/01-led-color.md",sourceDirName:"codrone-mini/python/05-LED",slug:"/codrone-mini/python/LED/led-color",permalink:"/docs/codrone-mini/python/LED/led-color",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"LED_color()",taxonomy:{category:["LED"],tag:["CDM-library"]},menu:"LED_color()"},sidebar:"cdmSideBar",previous:{title:"set_yaw()",permalink:"/docs/codrone-mini/python/Flight-Variables/set-yaw"},next:{title:"LED_pattern()",permalink:"/docs/codrone-mini/python/LED/led-pattern"}},p=[],b={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function sets the LED color of the CoDrone Mini's LED using RGB values and their brightness with a value from 1 - 100. ",Object(i.b)("strong",{parentName:"p"},"NOTE:")," If you're setting the LED right before a takeoff, make sure to add a ",Object(i.b)("inlineCode",{parentName:"p"},"time.sleep(1)")," before the ",Object(i.b)("inlineCode",{parentName:"p"},"takeoff()"),", otherwise the take off might be skipped."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python:",Object(i.b)("br",null),"\n",Object(i.b)("inlineCode",{parentName:"p"},"LED_color(red, green, blue, brightness)"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"red:")," int value from 0 to 255",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"green"),": int value from 0 to 255",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"blue"),": int value from 0 to 255",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"brightness"),": int value from 0 to 100, which represents the brightness of the light",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\nimport time\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()\n\ndrone.LED_color(255, 0, 0, 100)        # set LED color to red using RGB\n\ntime.sleep(1)       # Add a time.sleep(1) before takeoff if you're planning to set the LED cover before takeoff, otherwise the takeoff might get missed\ndrone.takeoff()\ndrone.land()\ndrone.close()\n")))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||s[d]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);