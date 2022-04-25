(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),c=(r(0),r(404)),a=["components"],i={custom_edit_url:null,title:"get_accelerometer()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_accelerometer() / getAccelerometer()"},l={unversionedId:"codrone-pro/python/sensors/get-accelerometer",id:"codrone-pro/python/sensors/get-accelerometer",isDocsHomePage:!1,title:"get_accelerometer()",description:"Description",source:"@site/docs/codrone-pro/python/09-sensors/01-get-accelerometer.md",sourceDirName:"codrone-pro/python/09-sensors",slug:"/codrone-pro/python/sensors/get-accelerometer",permalink:"/docs/codrone-pro/python/sensors/get-accelerometer",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,title:"get_accelerometer()",taxonomy:{category:["sensors"],tag:["codrone-library"]},menu:"get_accelerometer() / getAccelerometer()"},sidebar:"codroneProSideBar",previous:{title:"on_low_battery()",permalink:"/docs/codrone-pro/python/status-checkers/on-low-battery"},next:{title:"get_angular_speed()",permalink:"/docs/codrone-pro/python/sensors/get-angular-speed"}},s=[],p={toc:s};function u(e){var n=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"description"},"Description"),Object(c.b)("p",null,"This function gets the accelerometer sensor data, which returns x, y, and z.",Object(c.b)("br",null)," It outputs to the UI in Blockly and as a class in Python as a struct in Arduino."),Object(c.b)("h5",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"Python: ",Object(c.b)("inlineCode",{parentName:"p"},"get_accelerometer()"),Object(c.b)("br",null),"\nArduino: ",Object(c.b)("inlineCode",{parentName:"p"},"getAccelerometer()")),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"None"),Object(c.b)("h5",{id:"returns"},"Returns"),Object(c.b)("p",null,"Outputs to visual UI. In code, it returns a class in Python and struct in Arduino."),Object(c.b)("h5",{id:"example-code"},"Example Code"),Object(c.b)("h6",{id:"python"},"Python"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# print the acceleration of drone\nacceleration = drone.get_accelerometer()\nprint(acceleration.X, acceleration.Y, acceleration.Z)\ndrone.close()\n")),Object(c.b)("h6",{id:"arduino"},"Arduino"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    // Struct for get accelerometer data\n    acceldata accel;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    accel = CoDrone.getAccelerometer();     //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("accel x : \\t");\n    Serial.println(accel.x);\n    Serial.print("accel y : \\t");\n    Serial.println(accel.y);\n    Serial.print("accel z : \\t");\n    Serial.println(accel.z);    \n}\n')))}u.isMDXComponent=!0},404:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||c;return r?o.a.createElement(m,i(i({ref:n},s),{},{components:r})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);