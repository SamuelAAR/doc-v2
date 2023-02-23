(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{333:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),i=(t(0),t(588)),a=["components"],c={custom_edit_url:null,id:"13-drive-over-markers",title:"drive over markers"},l={unversionedId:"zumi/blockly/Senior/Driving/13-drive-over-markers",id:"zumi/blockly/Senior/Driving/13-drive-over-markers",isDocsHomePage:!1,title:"drive over markers",description:"Block",source:"@site/docs/zumi/blockly/Senior/01-Driving/13-drive-over-markers.md",sourceDirName:"zumi/blockly/Senior/01-Driving",slug:"/zumi/blockly/Senior/Driving/13-drive-over-markers",permalink:"/docs/zumi/blockly/Senior/Driving/13-drive-over-markers",editUrl:null,version:"current",sidebarPosition:13,frontMatter:{custom_edit_url:null,id:"13-drive-over-markers",title:"drive over markers"},sidebar:"zumiBlocklySeniorSideBar",previous:{title:"speed calibration",permalink:"/docs/zumi/blockly/Senior/Driving/12-speed-calibration"}},s=[],u={toc:s};function b(e){var r=e.components,c=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(n.a)({},u,c,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"block"},"Block"),Object(i.b)("p",null,Object(i.b)("img",{alt:"drive over markers block image",src:t(647).default})),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"This function was designed for the ",Object(i.b)("a",{parentName:"p",href:"https://www.robolink.com/products/zumitown-mat"},"Zumitown Mat"),". Zumi will drive over the specified number of alternating black and white horizontal lines at least 2 centimeters wide. Zumi will stop when the number of markers have been crossed or if the timeout ends, whichever is first. (Avoid making the speed very high, zumi will most likely overshoot since it has a lot of speed)"),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"markers"),": An integer number of road markers to drive over",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"speed"),": Positive integer value between 0 and 80",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"IR_threshold"),": An integer IR threshold value 0-255 for the bottom left IR sensors to detect black or white.",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"time_out"),": A float value for the timeout in seconds",Object(i.b)("br",null)),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example"},"Example"),Object(i.b)("p",null,"Drive over 5 markers with a timeout of 3 seconds.\n",Object(i.b)("img",{alt:"drive over markers example",src:t(647).default})))}b.isMDXComponent=!0},588:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),p=n,d=b["".concat(a,".").concat(p)]||b[p]||m[p]||i;return t?o.a.createElement(d,c(c({ref:r},s),{},{components:t})):o.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},647:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/drive_over_markers-223b2b580c700726e08543881c5f2286.png"}}]);