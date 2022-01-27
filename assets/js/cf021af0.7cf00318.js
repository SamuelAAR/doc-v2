(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{259:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return s}));var t=n(3),c=n(7),a=(n(0),n(312)),i=["components"],o={custom_edit_url:null,title:"clear_display()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"clear_display()"},l={unversionedId:"zumi/Screen/clear-display",id:"zumi/Screen/clear-display",isDocsHomePage:!1,title:"clear_display()",description:"Description",source:"@site/docs/zumi/06-Screen/03-clear-display.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/clear-display",permalink:"/doc-v2/docs/zumi/Screen/clear-display",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"clear_display()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"clear_display()"},sidebar:"someSidebar",previous:{title:"blink()",permalink:"/doc-v2/docs/zumi/Screen/blink"},next:{title:"clear_drawing()",permalink:"/doc-v2/docs/zumi/Screen/clear-drawing"}},u=[],p={toc:u};function s(e){var r=e.components,n=Object(c.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Clears everything on the OLED by drawing a black rectangle."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"clear_display()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.util.screen import Screen\nimport time\n\nscreen=Screen()\nscreen.print("Hello")\nscreen.clear_display()\n\n')))}s.isMDXComponent=!0},312:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),c=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),p=function(e){var r=c.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=p(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=t,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?c.a.createElement(m,o(o({ref:r},u),{},{components:n})):c.a.createElement(m,o({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);