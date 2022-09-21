(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return m})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(501)),i=["components"],c={custom_edit_url:null,title:"start_camera()",menu:"start_camera()",taxonomy:{tag:"zumi-library",category:"camera"}},m={unversionedId:"zumi/python/Camera/start-camera",id:"zumi/python/Camera/start-camera",isDocsHomePage:!1,title:"start_camera()",description:"Description",source:"@site/docs/zumi/python/05-Camera/06-start-camera.md",sourceDirName:"zumi/python/05-Camera",slug:"/zumi/python/Camera/start-camera",permalink:"/docs/zumi/python/Camera/start-camera",editUrl:null,version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:null,title:"start_camera()",menu:"start_camera()",taxonomy:{tag:"zumi-library",category:"camera"}},sidebar:"someSidebar",previous:{title:"show_image()",permalink:"/docs/zumi/python/Camera/show-image"},next:{title:"predict()",permalink:"/docs/zumi/python/Camera/predict"}},u=[],p={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"description"},"Description"),Object(o.b)("p",null,"Turns on the camera"),Object(o.b)("h5",{id:"syntax"},"Syntax"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"start_camera()"),Object(o.b)("br",null)),Object(o.b)("h5",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"returns"},"Returns"),Object(o.b)("p",null,"None"),Object(o.b)("h5",{id:"example-code"},"Example Code"),Object(o.b)("h6",{id:"python"},"Python"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom zumi.util.camera import Camera\nimport cv2\nimport IPython.display\nimport PIL.Image\nfrom io import BytesIO\nimport time\n\n# you can change the resolution of the camera\n# using the image_w = image width \n# and the   image_h = image heigth \n#camera = Camera(image_w=1280,image_h=960)\n#camera = Camera(image_w=1024,image_h=768)\n#camera = Camera(image_w=128,image_h=64)\ncamera = Camera(image_w=60,image_h=32)\n\ncamera.start_camera()\n\ntime_start = time.time()\ntry: \n    for i in range(30):\n        frame = camera.capture()\n\n        img = PIL.Image.fromarray(frame, "RGB")\n        buffer = BytesIO()\n        img.save(buffer,format="JPEG") \n        \n        IPython.display.display(IPython.display.Image(data=buffer.getvalue()))\n\n        IPython.display.clear_output(wait=True) \n        \nfinally:\n    print(30/(time.time()-time_start))\n')))}l.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),l=p(r),y=n,b=l["".concat(i,".").concat(y)]||l[y]||s[y]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);