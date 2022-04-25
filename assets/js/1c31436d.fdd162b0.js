(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(404)),i=["components"],l={custom_edit_url:null,title:"update_angles()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},c={unversionedId:"zumi/python/Sensors/update-angles",id:"zumi/python/Sensors/update-angles",isDocsHomePage:!1,title:"update_angles()",description:"Description",source:"@site/docs/zumi/python/02-Sensors/19-update-angles.md",sourceDirName:"zumi/python/02-Sensors",slug:"/zumi/python/Sensors/update-angles",permalink:"/docs/zumi/python/Sensors/update-angles",editUrl:null,version:"current",sidebarPosition:19,frontMatter:{custom_edit_url:null,title:"update_angles()",taxonomy:{category:["Sensors","sensors"],tag:["zumi-library"]},menu:"get_IR_data()"},sidebar:"someSidebar",previous:{title:"reset_gyro()",permalink:"/docs/zumi/python/Sensors/reset-gyro"},next:{title:"circle_left()",permalink:"/docs/zumi/python/Driving/circle-left"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"Reads angular speeds and updates the list of angles:\nThe first 3 are angles produced from the gyroscope readings.",Object(a.b)("br",null),"\nX angle, Y angle and Z angle in degrees.",Object(a.b)("br",null),"\nThe next 2 angles are produced by finding the tilt with respect to gravity.",Object(a.b)("br",null),"\nX and Y acceleration angles in degrees. Work well if Zumi's wheels point to the floor",Object(a.b)("br",null),"\nThe next 2 angles are the complementary filtered angles are produced by combining both gyroscope and accelerometer angles for the x and y axis.",Object(a.b)("br",null),"\nThe next 3 are the rotation angles which are produced using the accelerometer.",Object(a.b)("br",null),"\nrotation along X, Y and Z with respect to gravity.",Object(a.b)("br",null),"\nThe last one is the tilt state.",Object(a.b)("br",null)),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"update_angles()"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"List ","[Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\n\n\nfor i in range(0,100):\n    angles = zumi.update_angles()\n    z_angle = angles[2]\n    print(z_angle)\nprint(" done ")\n\n')))}p.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);