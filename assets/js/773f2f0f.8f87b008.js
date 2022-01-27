(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(312)),c=["components"],l={custom_edit_url:null,title:"reset_default_led()",menu:"reset_default_led() / resetDefaultLED()",tag:"codrone-library",taxonomy:null,category:"LED"},i={unversionedId:"codrone-pro/led/reset-default-led",id:"codrone-pro/led/reset-default-led",isDocsHomePage:!1,title:"reset_default_led()",description:"Description",source:"@site/docs/codrone-pro/07-led/13-reset-default-led.md",sourceDirName:"codrone-pro/07-led",slug:"/codrone-pro/led/reset-default-led",permalink:"/doc-v2/docs/codrone-pro/led/reset-default-led",editUrl:null,version:"current",sidebarPosition:13,frontMatter:{custom_edit_url:null,title:"reset_default_led()",menu:"reset_default_led() / resetDefaultLED()",tag:"codrone-library",taxonomy:null,category:"LED"},sidebar:"codroneProSideBar",previous:{title:"eye_strobe()",permalink:"/doc-v2/docs/codrone-pro/led/eye-strobe"},next:{title:"is_flying()",permalink:"/doc-v2/docs/codrone-pro/status-checkers/is-fliying"}},d=[],u={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function sets the LED color of the eyes and arms back to red and sets the mode to SOLID, which is the original default color."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"Python: ",Object(a.b)("inlineCode",{parentName:"p"},"reset_default_led()"),Object(a.b)("br",null),"\nArduino: ",Object(a.b)("inlineCode",{parentName:"p"},"resetDefaultLED()")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone\n\ndef main():\n    drone = CoDrone.CoDrone()\n    drone.pair()\n\n    drone.reset_default_led()\n    \nif __name__ == '__main__':\n    main()\n\n")),Object(a.b)("h6",{id:"arduino"},"Arduino"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},"//Arduino code\n#include<CoDrone.h>     //header\n\nvoid setup(){\n    //open serial and connect\n    CoDrone.begin(115200);\n    CoDrone.pair(Nearest);\n\n    // Reset Drone\u2019s LED to holding the Red color \n    CoDrone.resetDefaultLED();  \n}\n\nvoid loop(){\n    \n}\n\n")))}s.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),u=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||p[b]||a;return t?o.a.createElement(f,l(l({ref:n},d),{},{components:t})):o.a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var d=2;d<a;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);