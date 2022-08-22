(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(492)),c=["components"],i={custom_edit_url:null,id:"28-append_color_data",title:"append_color_data()"},l={unversionedId:"codrone-edu/python/Sensors/28-append_color_data",id:"codrone-edu/python/Sensors/28-append_color_data",isDocsHomePage:!1,title:"append_color_data()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/28-append_color_data.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/28-append_color_data",permalink:"/docs/codrone-edu/python/Sensors/28-append_color_data",editUrl:null,version:"current",sidebarPosition:28,frontMatter:{custom_edit_url:null,id:"28-append_color_data",title:"append_color_data()"},sidebar:"codroneEduSideBar",previous:{title:"new_color_data()",permalink:"/docs/codrone-edu/python/Sensors/27-new_color_data"}},p=[],d={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"append_color_data() is a function that adds onto an existing dataset of custom color prediction data.\nthe dataset parameter must already exist in order to use this function."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"new_color_data(label, data, dataset)"),Object(a.b)("br",null)),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"label"),": String label name that will be used for the filename.",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"data"),": List of HSV data samples",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"dataset"),": String folder name where the text file will be stored.",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\nimport time\ndrone = Drone()\ndrone.pair()\ndataset = "color_data"\ncolors = ["green", "purple", "red", "lightblue", "blue", "yellow", "black", "white"]\nfor color in colors:\n    data = []\n    samples = 500\n    for i in range(1):\n        print("Sample: ", i+1)\n        next = input("Press enter to calibrate " + color)\n        print("0% ", end="")\n        for j in range(samples):\n            color_data = drone.get_color_data()[0:9]\n            data.append(color_data)\n            time.sleep(0.005)\n            if j % 10 == 0:\n                print("-", end="")\n        print(" 100%")\n    drone.append_color_data(color, data, dataset)\nprint("Done calibrating.")\n')))}s.isMDXComponent=!0},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);