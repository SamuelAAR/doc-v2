(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(484)),i=["components"],c={custom_edit_url:null,id:"13-controller_draw_string_align",title:"controller_draw_string_align()"},l={unversionedId:"codrone-edu/python/Screen/13-controller_draw_string_align",id:"codrone-edu/python/Screen/13-controller_draw_string_align",isDocsHomePage:!1,title:"controller_draw_string_align()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/13-controller_draw_string_align.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/13-controller_draw_string_align",permalink:"/docs/codrone-edu/python/Screen/13-controller_draw_string_align",editUrl:null,version:"current",sidebarPosition:13,frontMatter:{custom_edit_url:null,id:"13-controller_draw_string_align",title:"controller_draw_string_align()"}},p=[],s={toc:p};function d(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions"),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"controller_draw_string_align(x_start, x_end, y, string, alignment, string_font, pixel_color)")," ",Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"x_start"),": starting x position\n",Object(a.b)("strong",{parentName:"p"},"x_end"),": ending x position\n",Object(a.b)("strong",{parentName:"p"},"y"),": y position\n",Object(a.b)("strong",{parentName:"p"},"string"),": the string to write\n",Object(a.b)("strong",{parentName:"p"},"alignment"),": optional parameter that is the alignment between x_start and x_end. can align Left, Right, or Center. default value is Center\n",Object(a.b)("strong",{parentName:"p"},"string_font"),": optional parameter that is the font of the string to be written. default value is LiberationMono5x8\n",Object(a.b)("strong",{parentName:"p"},"pixel_color"),": optional parameter that is the pixel color of the written string. default value is Black"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.controller_clear_screen()\n\ndrone.sendDisplayDrawStringAlign(0, 70, 0, "Hello, world!")\n\ndrone.close()\n\n')))}d.isMDXComponent=!0},484:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);