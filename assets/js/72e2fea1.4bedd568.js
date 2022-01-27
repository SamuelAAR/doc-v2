(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),o=(r(0),r(312)),u=["components"],a={custom_edit_url:null,title:"right_u_turn()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"right_u_turn()"},c={unversionedId:"zumi/Driving/right-u-turn",id:"zumi/Driving/right-u-turn",isDocsHomePage:!1,title:"right_u_turn()",description:"Description",source:"@site/docs/zumi/03-Driving/26-right-u-turn.md",sourceDirName:"zumi/03-Driving",slug:"/zumi/Driving/right-u-turn",permalink:"/doc-v2/docs/zumi/Driving/right-u-turn",editUrl:null,version:"current",sidebarPosition:26,frontMatter:{custom_edit_url:null,title:"right_u_turn()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"right_u_turn()"},sidebar:"someSidebar",previous:{title:"reverse()",permalink:"/doc-v2/docs/zumi/Driving/reverse"},next:{title:"speed_calibration()",permalink:"/doc-v2/docs/zumi/Driving/speed-calibration"}},l=[],p={toc:l};function s(e){var t=e.components,r=Object(i.a)(e,u);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Drives Zumi in a right u-turn."),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"right_u_turn()"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"right_u_turn(speed=30, step=4, delay=0.02)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"speed: Positive value for forward speed between 0 and 80",Object(o.b)("br",null),"\nstep: The angle step size (decrease for wider turns, increase for tighter turns)",Object(o.b)("br",null),"\ndelay: The time delay between each angle step.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\nimport time\nzumi = Zumi()\nzumi.right_u_turn(speed=20)\ntime.sleep(1)\nzumi.right_u_turn(delay=0.04)\n\n")))}s.isMDXComponent=!0},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(u,".").concat(m)]||s[m]||b[m]||o;return r?i.a.createElement(d,a(a({ref:t},l),{},{components:r})):i.a.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var l=2;l<o;l++)u[l]=r[l];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);