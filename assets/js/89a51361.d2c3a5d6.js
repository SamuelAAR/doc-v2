(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{291:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),a=(n(0),n(484)),c=["components"],l={custom_edit_url:null,id:"12-controller_draw_square",title:"controller_draw_square()"},i={unversionedId:"codrone-edu/python/Screen/12-controller_draw_square",id:"codrone-edu/python/Screen/12-controller_draw_square",isDocsHomePage:!1,title:"controller_draw_square()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/12-controller_draw_square.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/12-controller_draw_square",permalink:"/docs/codrone-edu/python/Screen/12-controller_draw_square",editUrl:null,version:"current",sidebarPosition:12,frontMatter:{custom_edit_url:null,id:"12-controller_draw_square",title:"controller_draw_square()"}},p=[],u={toc:p};function d(e){var r=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"   width\n    (x,y)|------|\n         |      | width\n         |______|\n    \n    draws a square on the controller screen starting from point (x,y) and will extend to the given width\n")),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"controller_draw_square(x, y, width, pixel, fill, line_type)")," ",Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"x"),": top left corner x coordinate\n",Object(a.b)("strong",{parentName:"p"},"y"),": top left corner y coordinate\n",Object(a.b)("strong",{parentName:"p"},"width"),": width of square\n",Object(a.b)("strong",{parentName:"p"},"pixel"),": optional parameter that changes the pixel color of the line. default value is Black\n",Object(a.b)("strong",{parentName:"p"},"fill"),": optional parameter to fill in the square or not. default value is False\n",Object(a.b)("strong",{parentName:"p"},"line_type"),": optional parameter that is the type of line drawn. default is Solid"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.controller_clear_screen()\n\ndrone.controller_draw_square(10, 10, 25)\n\ndrone.close()\n\n")))}d.isMDXComponent=!0},484:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(f,l(l({ref:r},p),{},{components:n})):o.a.createElement(f,l({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);