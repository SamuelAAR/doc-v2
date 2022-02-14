(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),o=n(7),a=(n(0),n(317)),c=["components"],i={custom_edit_url:null,title:"angry()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"angry()"},u={unversionedId:"zumi/Screen/angry",id:"zumi/Screen/angry",isDocsHomePage:!1,title:"angry()",description:"Description",source:"@site/docs/zumi/06-Screen/01-angry.md",sourceDirName:"zumi/06-Screen",slug:"/zumi/Screen/angry",permalink:"/doc-v2/docs/zumi/Screen/angry",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"angry()",published:!0,taxonomy:{category:["screen"],tag:["zumi-library"]},menu:"angry()"},sidebar:"someSidebar",previous:{title:"start_camera()",permalink:"/doc-v2/docs/zumi/Camera/start-camera"},next:{title:"blink()",permalink:"/doc-v2/docs/zumi/Screen/blink"}},l=[],p={toc:l};function s(e){var r=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Draws Zumi's angry eyes on the screen."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"angry()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.util.screen import Screen \nscreen = Screen()\n\nscreen.angry()\n")))}s.isMDXComponent=!0},317:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return y}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=t,y=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(y,i(i({ref:r},l),{},{components:n})):o.a.createElement(y,i({ref:r},l))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);