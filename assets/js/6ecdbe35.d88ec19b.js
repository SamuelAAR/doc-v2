(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(404)),a=["components"],c={custom_edit_url:null,title:"get_orientation()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"get_orientation()"},l={unversionedId:"zumi/python/MPU/get-orientation",id:"zumi/python/MPU/get-orientation",isDocsHomePage:!1,title:"get_orientation()",description:"Description",source:"@site/docs/zumi/python/01-MPU/03-get-orientation.md",sourceDirName:"zumi/python/01-MPU",slug:"/zumi/python/MPU/get-orientation",permalink:"/docs/zumi/python/MPU/get-orientation",editUrl:null,version:"current",sidebarPosition:3,frontMatter:{custom_edit_url:null,title:"get_orientation()",published:!0,taxonomy:{category:["sensors","MPU"],tag:["zumi-library"]},menu:"get_orientation()"},sidebar:"someSidebar",previous:{title:"calibrate_MPU()",permalink:"/docs/zumi/python/MPU/calibrate-mpu"},next:{title:"read_x_angle()",permalink:"/docs/zumi/python/MPU/read-x-angle"}},u=[],b={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity)."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"get_orientation()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"Integer denoting orientation state.",Object(i.b)("br",null)),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Orientation state")," ",Object(i.b)("br",null),"\n-1 = unknown",Object(i.b)("br",null),"\n0 = probably falling or moving between states",Object(i.b)("br",null),"\n1 = camera straight up",Object(i.b)("br",null),"\n2 = camera facing down",Object(i.b)("br",null),"\n3 = on right side",Object(i.b)("br",null),"\n4 = on left side",Object(i.b)("br",null),"\n5 = wheels on floor",Object(i.b)("br",null),"\n6 = wheels facing up (upside down)",Object(i.b)("br",null),"\n7 = accelerating faster than 1g",Object(i.b)("br",null)),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nimport time\n\nzumi = Zumi()\n\n#grab zumi and place it on any side \n#example: upside down, on its nose etc.\nfor i in range(20):\n    orientation = zumi.get_orientation()\n    print(orientation)\n    time.sleep(0.5)\nprint(" done ")\n\n')))}p.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);