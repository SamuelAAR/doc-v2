(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(e,o,t){"use strict";t.d(o,"a",(function(){return l})),t.d(o,"b",(function(){return f}));var r=t(0),n=t.n(r);function c(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function d(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?d(Object(t),!0).forEach((function(o){c(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),b=function(e){var o=n.a.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},l=function(e){var o=b(e.components);return n.a.createElement(i.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},p=n.a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(t),p=r,f=l["".concat(d,".").concat(p)]||l[p]||h[p]||c;return t?n.a.createElement(f,a(a({ref:o},i),{},{components:t})):n.a.createElement(f,a({ref:o},i))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var c=t.length,d=new Array(c);d[0]=p;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,d[1]=a;for(var i=2;i<c;i++)d[i]=t[i];return n.a.createElement.apply(null,d)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},81:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return a})),t.d(o,"metadata",(function(){return s})),t.d(o,"toc",(function(){return i})),t.d(o,"default",(function(){return l}));var r=t(3),n=t(7),c=(t(0),t(413)),d=["components"],a={custom_edit_url:null,id:"library",title:"CoDrone EDU Library Reference",hide_table_of_contents:!0},s={unversionedId:"codrone-edu/python/reference/library",id:"codrone-edu/python/reference/library",isDocsHomePage:!1,title:"CoDrone EDU Library Reference",description:"version 0.1.3 (Changelog)",source:"@site/docs/codrone-edu/python/reference/00-home.md",sourceDirName:"codrone-edu/python/reference",slug:"/codrone-edu/python/reference/library",permalink:"/doc-v2/docs/codrone-edu/python/reference/library",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{custom_edit_url:null,id:"library",title:"CoDrone EDU Library Reference",hide_table_of_contents:!0},sidebar:"codroneEduSideBar",next:{title:"CoDrone Mini Library Changelog",permalink:"/doc-v2/docs/codrone-edu/python/changelog"}},i=[],b={toc:i};function l(e){var o=e.components,t=Object(n.a)(e,d);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:o,mdxType:"MDXLayout"}),Object(c.b)("h3",{class:"homeDocLandingVersion"},"version 0.1.3 (",Object(c.b)("a",{class:"orange-link",href:"/doc-v2/docs/codrone-mini/python/changelog"},"Changelog"),")"),"These are the functions that you can use to control the CoDrone EDU. The functions are available in Python library. Example code is provided in each function definition.",Object(c.b)("div",{class:"boxLanding"},Object(c.b)("div",{class:"parentContainer"},Object(c.b)("div",{class:"box-reference-shadow"},Object(c.b)("h3",null,"Connection"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Connection/01-pair"},"pair()"),Object(c.b)("br",null)),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Flight Commands (Start/Stop)"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/01-emergency_stop"},"emergency_stop()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/02-land"},"land()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim/"},"reset_trim()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/04-set_trim"},"set_trim()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Flight-Commands-Start-Stop/05-take_off"},"takeoff()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Flight Commands (Movement)"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/flip"},"flip()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/fly-sequence"},"fly_sequence()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/go"},"go()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/hover"},"hover()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Commands-Movement/turn"},"turn()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Buzzer"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Buzzer/01-controller_buzzer/"},"controller_buzzer()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Buzzer/02-drone_buzzer/"},"drone_buzzer()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"LED"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/LED/01-controller_LED_off"},"controller_LED_off()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/LED/02-drone_LED_off"},"drone_LED_off()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/LED/03-set_controller_LED"},"set_controller_LED()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/LED/04-set_drone_LED"},"set_drone_LED()"))),Object(c.b)("div",{class:"parentContainer"},Object(c.b)("div",{class:"boxLanding"},Object(c.b)("div",{class:"box-reference-shadow"},Object(c.b)("h3",null," Flight Variables"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-roll"},"get_roll()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-throttle"},"get_throttle()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-yaw"},"get_yaw()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/move"},"move()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-pitch"},"set_pitch()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/set-roll"},"set_roll()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-throttle"},"set_throttle()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-mini/python/Flight-Variables/get-yaw"},"set_yaw()"))),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Sensor"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/01-get_battery"},"get_battery()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/02-get_bottom_range"},"get_bottom_range()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/03-get_drone_temp"},"get_drone_temp()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/05-get_flow_x"},"get_flow_x()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/06-get_flow_y"},"get_flow_y()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/07-get_front_range"},"get_front_range()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/08-get_pos_x"},"get_pos_x()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/09-get_pos_y"},"get_pos_y()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/10-get_pos_z"},"get_pos_z()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/11-get_position_data"},"get_position_data()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/12-get_pressure"},"get_pressure()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/13-get_trim"},"get_trim()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/14-get_x_accel"},"get_x_accel()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/15-get_x_angle"},"get_x_angle()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/16-get_y_accel"},"get_y_accel()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/17-get_y_angle"},"get_y_angle()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/18-get_z_accel"},"get_z_accel()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/19-get_z_angle"},"get_z_angle()"),Object(c.b)("a",{href:"/doc-v2/docs/codrone-edu/python/Sensors/20-get_height"},"get_height()")))),Object(c.b)("div",{class:"boxLanding marginTop25"}))}l.isMDXComponent=!0}}]);