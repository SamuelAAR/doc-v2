(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{393:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return d})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(404)),a=["components"],c={custom_edit_url:null,title:"turn_degree()",menu:"turn_degree() / turnDegree()",taxonomy:null,category:"flight-command-movement"},d={unversionedId:"codrone-pro/python/flight-commands-movement/turn-degree",id:"codrone-pro/python/flight-commands-movement/turn-degree",isDocsHomePage:!1,title:"turn_degree()",description:"Description",source:"@site/docs/codrone-pro/python/05-flight-commands-movement/06-turn-degree.md",sourceDirName:"codrone-pro/python/05-flight-commands-movement",slug:"/codrone-pro/python/flight-commands-movement/turn-degree",permalink:"/docs/codrone-pro/python/flight-commands-movement/turn-degree",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"turn_degree()",menu:"turn_degree() / turnDegree()",taxonomy:null,category:"flight-command-movement"},sidebar:"codroneProSideBar",previous:{title:"rotate180()",permalink:"/docs/codrone-pro/python/flight-commands-movement/rotate-180"},next:{title:"turn()",permalink:"/docs/codrone-pro/python/flight-commands-movement/turn"}},u=[],l={toc:u};function p(e){var n=e.components,r=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"A Senior level function that yaws by a given degree in a given direction. ",Object(i.b)("br",null),"\nThis function takes an input degree in an input direction, and turns until it reaches the given degree. In some instances, the drone may turn past the given degree and need to rotate all the way around again before reaching the correct degree."),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Python: ",Object(i.b)("inlineCode",{parentName:"p"},"turn_degree(direction, degree)"),Object(i.b)("br",null),"\nArduino: ",Object(i.b)("inlineCode",{parentName:"p"},"turnDegree(direction, degree)")),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"direction"),"\t: a string that\u2019s either left or right",Object(i.b)("br",null),"\n",Object(i.b)("strong",{parentName:"p"},"degree")," \t\t: a constant in Arduino and enum in Python. The degree the drone will turn to the right, with its starting position representing 0 degrees,Degree.ANGLE_30, Degree.ANGLE_45, Degree.ANGLE_60, Degree.ANGLE_90, Degree.ANGLE_120, Degree.ANGLE_135, Degree.ANGLE_150, Degree.ANGLE_180, Degree.ANGLE_210, Degree.ANGLE_225, Degree.ANGLE_240, Degree.ANGLE_270, Degree.ANGLE_300, Degree.ANGLE_315, Degree.ANGLE_330"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\nfrom CoDrone import Direction,Degree\n\ndrone = CoDrone.CoDrone()\ndrone.pair()\ndrone.takeoff()\n\ndrone.turn_degree(Direction.LEFT, Degree.ANGLE_45)  # Turn left 45 degrees\ndrone.land()\ndrone.close()\n")),Object(i.b)("h6",{id:"arduino"},"Arduino"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    CoDrone.takeoff();\n    CoDrone.turnDegree(LEFT, ANGLE_45);         // Turn left 45 degrees\n}\n\nvoid loop(){\n\n}\n")))}p.isMDXComponent=!0},404:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(r),s=t,g=p["".concat(a,".").concat(s)]||p[s]||m[s]||i;return r?o.a.createElement(g,c(c({ref:n},u),{},{components:r})):o.a.createElement(g,c({ref:n},u))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);