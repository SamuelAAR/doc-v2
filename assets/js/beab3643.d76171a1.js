(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return m})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(312)),o=["components"],c={custom_edit_url:null,title:"start_camera()",menu:"start_camera()",taxonomy:{tag:"zumi-library",category:"camera"}},m={unversionedId:"zumi/Camera/start-camera",id:"zumi/Camera/start-camera",isDocsHomePage:!1,title:"start_camera()",description:"Description",source:"@site/docs/zumi/05-Camera/06-start-camera.md",sourceDirName:"zumi/05-Camera",slug:"/zumi/Camera/start-camera",permalink:"/doc-v2/docs/zumi/Camera/start-camera",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"start_camera()",menu:"start_camera()",taxonomy:{tag:"zumi-library",category:"camera"}},sidebar:"someSidebar",previous:{title:"show_image()",permalink:"/doc-v2/docs/zumi/Camera/show-image"},next:{title:"angry()",permalink:"/doc-v2/docs/zumi/Screen/angry"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(n.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"description"},"Description"),Object(i.b)("p",null,"Turns on the camera"),Object(i.b)("h5",{id:"syntax"},"Syntax"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"start_camera()"),Object(i.b)("br",null)),Object(i.b)("h5",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"returns"},"Returns"),Object(i.b)("p",null,"None"),Object(i.b)("h5",{id:"example-code"},"Example Code"),Object(i.b)("h6",{id:"python"},"Python"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.util.camera import Camera\nimport cv2\nimport IPython.display\nimport PIL.Image\nfrom io import BytesIO\nimport time\n\n# you can change the resolution of the camera\n# using the image_w = image width \n# and the   image_h = image heigth \n#camera = Camera(image_w=1280,image_h=960)\n#camera = Camera(image_w=1024,image_h=768)\n#camera = Camera(image_w=128,image_h=64)\ncamera = Camera(image_w=60,image_h=32)\n\ncamera.start_camera()\n\ntime_start = time.time()\ntry: \n    for i in range(30):\n        frame = camera.capture()\n\n        img = PIL.Image.fromarray(frame, "RGB")\n        buffer = BytesIO()\n        img.save(buffer,format="JPEG") \n        \n        IPython.display.display(IPython.display.Image(data=buffer.getvalue()))\n\n        IPython.display.clear_output(wait=True) \n        \nfinally:\n    print(30/(time.time()-time_start))\n')))}p.isMDXComponent=!0},312:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,f=p["".concat(o,".").concat(b)]||p[b]||s[b]||i;return r?n.a.createElement(f,c(c({ref:t},u),{},{components:r})):n.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);