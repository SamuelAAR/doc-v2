(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{228:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(404)),i=["components"],c={custom_edit_url:null,id:"01-pair",title:"pair()"},p={unversionedId:"codrone-mini/python/Connection/01-pair",id:"codrone-mini/python/Connection/01-pair",isDocsHomePage:!1,title:"pair()",description:"Description",source:"@site/docs/codrone-mini/python/01-Connection/01-pair.md",sourceDirName:"codrone-mini/python/01-Connection",slug:"/codrone-mini/python/Connection/01-pair",permalink:"/docs/codrone-mini/python/Connection/01-pair",editUrl:null,version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:null,id:"01-pair",title:"pair()"},sidebar:"cdmSideBar",previous:{title:"CoDrone Mini Library Changelog",permalink:"/docs/codrone-mini/python/changelog"},next:{title:"emergency_stop()",permalink:"/docs/codrone-mini/python/Flight-Commands-Start-Stop/01-emergency-stop"}},u=[],l={toc:u};function s(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"This function connects your controller with the program. You can set debug equal to True if you want to see helpful print statements that can help you debug your code. We recommend setting this to True to check if commands are being skipped. You can also set the specific USB port name."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"pair()"),"  ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"pair(port_name)")," ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"pair(debug=False)")," ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"pair(debug=False, port_name)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"port_name:")," A string containing the port name or number.\n",Object(a.b)("strong",{parentName:"p"},"debug:")," Boolean that is default to False. "),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nimport CoDrone_mini\n\n\ndrone = CoDrone_mini.CoDrone()\ndrone.pair()   # pair automatically, may not always work\n# drone.pair(debug=True) # sets the debug statements to True\n# drone.pair(port_name = 'COM3')    # pair with a specific port\n\ndrone.takeoff()\ndrone.hover(3)\ndrone.land()\ndrone.close()\n")))}s.isMDXComponent=!0},404:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);