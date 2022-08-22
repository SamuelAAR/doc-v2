(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{410:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),c=(r(0),r(484)),l=["components"],a={custom_edit_url:null,id:"10-controller_draw_polygon",title:"controller_draw_polygon()"},i={unversionedId:"codrone-edu/python/Screen/10-controller_draw_polygon",id:"codrone-edu/python/Screen/10-controller_draw_polygon",isDocsHomePage:!1,title:"controller_draw_polygon()",description:"Description",source:"@site/docs/codrone-edu/python/09-Screen/10-controller_draw_polygon.md",sourceDirName:"codrone-edu/python/09-Screen",slug:"/codrone-edu/python/Screen/10-controller_draw_polygon",permalink:"/docs/codrone-edu/python/Screen/10-controller_draw_polygon",editUrl:null,version:"current",sidebarPosition:10,frontMatter:{custom_edit_url:null,id:"10-controller_draw_polygon",title:"controller_draw_polygon()"}},p=[],u={toc:p};function d(e){var n=e.components,r=Object(o.a)(e,l);return Object(c.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"The polygon outline consists of straight lines between the given coordinates, plus a straight line between the last and the first coordinate."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"controller_draw_polygon(point_list)")," ",Object(c.b)("br",null)),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"point_list"),": the list of coordinates"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n\ndrone.controller_clear_screen()\n\npoint_list_square = ((10, 10), (30, 10), (30, 30), (10, 30)) # creating a list of coordinates\n\ndrone.controller_draw_polygon(point_list_square)\n\ndrone.close()\n\n")))}d.isMDXComponent=!0},484:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,y=d["".concat(l,".").concat(b)]||d[b]||s[b]||c;return r?o.a.createElement(y,a(a({ref:n},p),{},{components:r})):o.a.createElement(y,a({ref:n},p))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,l=new Array(c);l[0]=b;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var p=2;p<c;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);