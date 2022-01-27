(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return m})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(312)),i=["components"],c={custom_edit_url:null,title:"show_image()",published:!0,taxonomy:{category:["camera"],tag:["zumi-library"]},menu:"show_image()"},m={unversionedId:"zumi/Camera/show-image",id:"zumi/Camera/show-image",isDocsHomePage:!1,title:"show_image()",description:"Description",source:"@site/docs/zumi/05-Camera/05-show-image.md",sourceDirName:"zumi/05-Camera",slug:"/zumi/Camera/show-image",permalink:"/doc-v2/docs/zumi/Camera/show-image",editUrl:null,version:"current",sidebarPosition:5,frontMatter:{custom_edit_url:null,title:"show_image()",published:!0,taxonomy:{category:["camera"],tag:["zumi-library"]},menu:"show_image()"},sidebar:"someSidebar",previous:{title:"save_photo()",permalink:"/doc-v2/docs/zumi/Camera/save-photo"},next:{title:"start_camera()",permalink:"/doc-v2/docs/zumi/Camera/start-camera"}},u=[],l={toc:u};function p(e){var r=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Displays an image taken from Zumi's camera."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"show_image(frame)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"frame: An image array "),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\n\nfrom zumi.util.camera import Camera\nimport time\n\ncamera=Camera()\ncamera.start_camera()\n\nframe = camera.capture()\ncamera.show_image(frame)\ncamera.close()\n")))}p.isMDXComponent=!0},312:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,d=p["".concat(i,".").concat(b)]||p[b]||s[b]||o;return t?a.a.createElement(d,c(c({ref:r},u),{},{components:t})):a.a.createElement(d,c({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var m in r)hasOwnProperty.call(r,m)&&(c[m]=r[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);