(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),o=(n(0),n(312)),a=["components"],c={custom_edit_url:null,title:"move_centimeters()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"move_centimeters()"},l={unversionedId:"zumi/Driving/move-centimeters",id:"zumi/Driving/move-centimeters",isDocsHomePage:!1,title:"move_centimeters()",description:"Description",source:"@site/docs/zumi/03-Driving/15-move-centimeters.md",sourceDirName:"zumi/03-Driving",slug:"/zumi/Driving/move-centimeters",permalink:"/doc-v2/docs/zumi/Driving/move-centimeters",editUrl:null,version:"current",sidebarPosition:15,frontMatter:{custom_edit_url:null,title:"move_centimeters()",published:!0,taxonomy:{category:["driving","Driving"],tag:["zumi-library"]},menu:"move_centimeters()"},sidebar:"someSidebar",previous:{title:"line_follow_gyro_assist()",permalink:"/doc-v2/docs/zumi/Driving/line-follow-gyro-assist"},next:{title:"move_inches()",permalink:"/doc-v2/docs/zumi/Driving/move-inches"}},u=[],s={toc:u};function m(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"This method uses a best fit linear approximation of the distance traveled over time.\nIt uses the equation y = mx + b, where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"y is the distance traveled"),Object(o.b)("li",{parentName:"ul"},"m is the predicted speed in centimeters per second"),Object(o.b)("li",{parentName:"ul"},"x is the time elapsed"),Object(o.b)("li",{parentName:"ul"},"b is the slope intercept")),Object(o.b)("p",null,"If the PID values are not set the internal default values will be set."),Object(o.b)("p",null,"If the angle is not input Zumi will drive to whatever angle it is currently facing. "),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"move_centimeters(distance, angle)"),Object(o.b)("br",null),"\n",Object(o.b)("inlineCode",{parentName:"p"},"move_centimeters(distance, angle=None, k_p=None, k_i=None, k_d=None)"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"distance: the distance in centimeters you want to travel",Object(o.b)("br",null),"\nangle: heading (0 degrees is defined when the Zumi object is created.) Default to None",Object(o.b)("br",null),"\nk_p: P-gain. Default to None.",Object(o.b)("br",null),"\nk_i: I-gain. Default to None.",Object(o.b)("br",null),"\nk_d: D-gain. Default to None.",Object(o.b)("br",null)),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom zumi.zumi import Zumi\n\nzumi = Zumi()\n\nzumi.move_centimeters(10)\nzumi.move_centimeters(10,90)\nzumi.move_centimeters(15,0)\n")))}m.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,d=m["".concat(a,".").concat(p)]||m[p]||b[p]||o;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);