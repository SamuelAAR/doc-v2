(window.webpackJsonp=window.webpackJsonp||[]).push([[25,242],{309:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(312),i=t(16),o=t(28),l=t(321),s=t(3),u=t(7),d=t(314),b=t(313),m=t(344),p=t(348),h=t(349),f=t(347),v=t(316),E=t(333),O=t(350),j=function(e){return c.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),c.a.createElement("g",{fill:"#7a7a7a"},c.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),c.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=t(352),C=t(315),k=t(92),N=t.n(k),S=["items"],_=["item","onItemClick","collapsible","activePath"],x=["item","onItemClick","activePath","collapsible"];var I=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))},y=Object(n.memo)((function(e){var a=e.items,t=Object(u.a)(e,S);return a.map((function(e,a){return c.a.createElement(T,Object(s.a)({key:a,item:e},t))}))}));function T(e){return"category"===e.item.type?c.a.createElement(w,e):c.a.createElement(B,e)}function w(e){var a,t,r,i=e.item,o=e.onItemClick,l=e.collapsible,b=e.activePath,m=Object(u.a)(e,_),p=i.items,h=i.label,f=I(i,b),v=(t=f,r=Object(n.useRef)(t),Object(n.useEffect)((function(){r.current=t}),[t]),r.current),E=Object(n.useState)((function(){return!!l&&(!f&&i.collapsed)})),O=E[0],j=E[1],g=Object(n.useRef)(null),C=Object(n.useState)(void 0),k=C[0],S=C[1],x=function(e){var a;void 0===e&&(e=!0),S(e?(null===(a=g.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!v&&O&&j(!1)}),[f,v,O]);var T=Object(n.useCallback)((function(e){e.preventDefault(),k||x(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[k]);return 0===p.length?null:c.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":O})},c.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(a={"menu__link--sublist":l,"menu__link--active":l&&f},a[N.a.menuLinkText]=!l,a)),onClick:l?T:void 0,href:l?"#!":void 0},m),h),c.a.createElement("ul",{className:"menu__list",ref:g,style:{height:k},onTransitionEnd:function(){O||x(!1)}},c.a.createElement(y,{items:p,tabIndex:O?"-1":"0",onItemClick:o,collapsible:l,activePath:b})))}function B(e){var a,t=e.item,n=e.onItemClick,r=e.activePath,i=(e.collapsible,Object(u.a)(e,x)),o=t.href,l=t.label,b=I(t,r);return c.a.createElement("li",{className:"menu__list-item",key:l},c.a.createElement(v.a,Object(s.a)({className:Object(d.a)("menu__link",(a={"menu__link--active":b},a[N.a.menuLinkExternal]=!Object(E.a)(o),a)),to:o},Object(E.a)(o)&&{isNavLink:!0,exact:!0,onClick:n},i),l))}function R(e){var a=e.onClick;return c.a.createElement("button",{type:"button",title:Object(C.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(C.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:a},c.a.createElement(j,{className:N.a.collapseSidebarButtonIcon}))}function P(e){var a=e.responsiveSidebarOpened,t=e.onClick;return c.a.createElement("button",{"aria-label":a?Object(C.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(C.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:t},a?c.a.createElement("span",{className:Object(d.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement(g.a,{className:N.a.sidebarMenuIcon,height:24,width:24}))}var A=function(e){var a,t,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,s=e.onCollapse,u=e.isHidden,v=function(){var e=Object(m.a)().isAnnouncementBarClosed,a=Object(n.useState)(!e),t=a[0],c=a[1];return Object(f.a)((function(a){var t=a.scrollY;e||c(0===t)})),t}(),E=Object(b.useThemeConfig)(),j=E.navbar.hideOnScroll,g=E.hideableSidebar,C=Object(m.a)().isAnnouncementBarClosed,k=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];Object(p.a)(a);var c=Object(h.a)();return Object(n.useEffect)((function(){c===h.b.desktop&&t(!1)}),[c]),{showResponsiveSidebar:a,closeResponsiveSidebar:Object(n.useCallback)((function(e){e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:Object(n.useCallback)((function(){t((function(e){return!e}))}),[t])}}(),S=k.showResponsiveSidebar,_=k.closeResponsiveSidebar,x=k.toggleResponsiveSidebar;return c.a.createElement("div",{className:Object(d.a)(N.a.sidebar,(a={},a[N.a.sidebarWithHideableNavbar]=j,a[N.a.sidebarHidden]=u,a))},j&&c.a.createElement(O.a,{tabIndex:-1,className:N.a.sidebarLogo}),c.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(t={"menu--show":S},t[N.a.menuWithAnnouncementBar]=!C&&v,t))},c.a.createElement(P,{responsiveSidebarOpened:S,onClick:x}),c.a.createElement("ul",{className:"menu__list"},c.a.createElement(y,{items:i,onItemClick:_,collapsible:l,activePath:r}))),g&&c.a.createElement(R,{onClick:s}))},L=t(331),M=t(339),H=t(23),D=t(96),F=t.n(D);function W(e){var a,t,o,s,u,m=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=Object(i.default)(),v=f.siteConfig,E=f.isClient,O=p.pluginId,g=p.permalinkToSidebar,k=p.docsSidebars,N=p.version,S=g[m.path],_=k[S],x=Object(n.useState)(!1),I=x[0],y=x[1],T=Object(n.useState)(!1),w=T[0],B=T[1],R=Object(n.useCallback)((function(){w&&B(!1),y(!I)}),[w]);return c.a.createElement(l.a,{key:E,wrapperClassName:b.ThemeClassNames.wrapper.docPages,pageClassName:b.ThemeClassNames.page.docPage,searchMetadatas:{version:N,tag:Object(b.docVersionSearchTag)(O,N)}},c.a.createElement("div",{className:F.a.docPage},_&&c.a.createElement("div",{className:Object(d.a)(F.a.docSidebarContainer,(a={},a[F.a.docSidebarContainerHidden]=I,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(F.a.docSidebarContainer)&&I&&B(!0)},role:"complementary"},c.a.createElement(A,{key:S,sidebar:_,path:m.path,sidebarCollapsible:null===(t=null===(o=v.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===t||t,onCollapse:R,isHidden:w}),w&&c.a.createElement("div",{className:F.a.collapsedDocSidebar,title:Object(C.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(C.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},c.a.createElement(j,{className:F.a.expandSidebarButtonIcon}))),c.a.createElement("main",{className:Object(d.a)(F.a.docMainContainer,(s={},s[F.a.docMainContainerEnhanced]=I||!_,s))},c.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",F.a.docItemWrapper,(u={},u[F.a.docItemWrapperEnhanced]=I,u))},c.a.createElement(r.a,{components:L.a},h)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,r=a.find((function(e){return Object(H.matchPath)(n.pathname,e)}));return r?c.a.createElement(W,{currentDocRoute:r,versionMetadata:t},Object(o.a)(a)):c.a.createElement(M.default,e)}},319:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(320),i=t.n(r),o=t(23),l=t(16);a.a=function(e){var a=Object(n.useRef)(!1),r=Object(n.useRef)(null),s=Object(o.useHistory)(),u=Object(l.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,b=function(){a.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(241),t.e(243)]).then(t.bind(null,326)),t.e(157).then(t.t.bind(null,325,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,s.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},m=Object(n.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:m,onBlur:m,ref:r}))}},339:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(321),i=t(315);a.default=function(){return c.a.createElement(r.a,{title:"Page Not Found"},c.a.createElement("main",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},c.a.createElement(i.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),c.a.createElement("p",null,c.a.createElement(i.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);