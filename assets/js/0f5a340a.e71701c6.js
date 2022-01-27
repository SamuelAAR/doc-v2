(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{312:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(312)),i=["components"],c={custom_edit_url:null,title:"read_z_angle()",published:!0,taxonomy:{category:["MPU","sensors"],tag:["zumi-library"]},menu:"read_z_angle()"},l={unversionedId:"zumi/MPU/read-z-angle",id:"zumi/MPU/read-z-angle",isDocsHomePage:!1,title:"read_z_angle()",description:"Description",source:"@site/docs/zumi/01-MPU/06-read-z-angle.md",sourceDirName:"zumi/01-MPU",slug:"/zumi/MPU/read-z-angle",permalink:"/doc-v2/docs/zumi/MPU/read-z-angle",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"read_z_angle()",published:!0,taxonomy:{category:["MPU","sensors"],tag:["zumi-library"]},menu:"read_z_angle()"},sidebar:"someSidebar",previous:{title:"read_y_angle()",permalink:"/doc-v2/docs/zumi/MPU/read-y-angle"},next:{title:"reset_drive()",permalink:"/doc-v2/docs/zumi/MPU/reset-drive"}},u=[],p={toc:u};function d(e){var n=e.components,t=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Calls ",Object(o.b)("inlineCode",{parentName:"p"},"update_angles()")," and returns only the z-angle."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"read_z_angle()"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"float: current z-angle"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#Python code\nfrom zumi.zumi import Zumi\nimport IPython.display\n\nzumi = Zumi()\n\nfor i in range(100):\n    print(zumi.read_z_angle())\n    IPython.display.clear_output(wait=True) \nprint("done")\n\n')))}d.isMDXComponent=!0}}]);