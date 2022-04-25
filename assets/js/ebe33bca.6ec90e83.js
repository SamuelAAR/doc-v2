(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{382:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),s=(n(0),n(404)),a=["components"],i={custom_edit_url:null,title:"get_pressure()",menu:"get_pressure() / getPressure()",taxonomy:null,category:"sensors"},c={unversionedId:"codrone-pro/python/sensors/get-pressure",id:"codrone-pro/python/sensors/get-pressure",isDocsHomePage:!1,title:"get_pressure()",description:"Description",source:"@site/docs/codrone-pro/python/09-sensors/09-get-pressure.md",sourceDirName:"codrone-pro/python/09-sensors",slug:"/codrone-pro/python/sensors/get-pressure",permalink:"/docs/codrone-pro/python/sensors/get-pressure",editUrl:null,version:"current",sidebarPosition:9,frontMatter:{custom_edit_url:null,title:"get_pressure()",menu:"get_pressure() / getPressure()",taxonomy:null,category:"sensors"},sidebar:"codroneProSideBar",previous:{title:"get_opt_flow_position()",permalink:"/docs/codrone-pro/python/sensors/get-opt-flow-position"},next:{title:"get_state()",permalink:"/docs/codrone-pro/python/sensors/get-state"}},p=[],u={toc:p};function l(e){var r=e.components,n=Object(o.a)(e,a);return Object(s.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("h5",{id:"description"},"Description"),Object(s.b)("p",null,"This is a getter function gets the data from the barometer sensor."),Object(s.b)("h5",{id:"syntax"},"Syntax"),Object(s.b)("p",null,"Python: ",Object(s.b)("inlineCode",{parentName:"p"},"getPressure()"),Object(s.b)("br",null),"\nArduino: ",Object(s.b)("inlineCode",{parentName:"p"},"getPressure()")),Object(s.b)("h5",{id:"parameters"},"Parameters"),Object(s.b)("p",null,"None"),Object(s.b)("h5",{id:"returns"},"Returns"),Object(s.b)("p",null,"The barometer\u2019s air pressure in milibars at (0.13 resolution)."),Object(s.b)("h5",{id:"example-code"},"Example Code"),Object(s.b)("h6",{id:"python"},"Python"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-python"},"Python code\nimport CoDrone\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\n\n# print the pressure\npressure = drone.get_pressure()\nprint(pressure)\ndrone.close()\n")),Object(s.b)("h6",{id:"arduino"},"Arduino"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-c"},'//Arduino code\n//Code for print request data to serial monitor\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);  \n}\n\nvoid loop(){\n    int pressure;\n\n    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active\n    pressure = CoDrone.getPressure();                       //save request data\n    delay(100);\n\n    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute\n    delay(100);\n\n    Serial.println("");\n    Serial.println("--------- Now -----------");\n    Serial.print("pressure : \\t");\n    Serial.println(pressure);   \n}\n')))}l.isMDXComponent=!0},404:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=t,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||s;return n?o.a.createElement(m,i(i({ref:r},p),{},{components:n})):o.a.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);