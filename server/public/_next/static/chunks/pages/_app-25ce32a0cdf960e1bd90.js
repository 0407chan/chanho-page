_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?i=!1:(l.add(f),r[s]=l)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},B5Ud:function(e,t,n){"use strict";var r=n("o0o1"),o=n("lwsE"),i=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),s=n("yXPU");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var l=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var p=l(n("q1tI")),d=n("g/15");function h(e){return y.apply(this,arguments)}function y(){return(y=s(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(e){a(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:v(t)}))}}]),n}(p.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=b,b.origGetInitialProps=h,b.getInitialProps=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,y=e.replace,b=e.shallow,v=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var m=i.Children.only(h),x=m&&"object"===typeof m&&m.ref,j=(0,u.useIntersection)({rootMargin:"200px"}),w=r(j,2),O=w[0],_=w[1],k=i.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,i.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof g?g:n&&n.locale,o=s[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(n,p,d,{locale:r})}),[d,p,_,g,t,n]);var P={ref:k,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,p,d,y,b,v,g)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(n,p,d,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(P.href=(0,a.addBasePath)((0,a.addLocale)(d,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(m,P)};t.default=l},cha2:function(e,t,n){"use strict";n.r(t);var r=n("rePB");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=n("nKUr"),l=(n("zPlV"),n("8Bbg")),p=n.n(l),d=n("q1tI"),h=n("vOnD"),y=n("YFqc"),b=n.n(y),v=h.a.div.withConfig({displayName:"DayNightCheckBox__Container",componentId:"sc-1vi85jj-0"})([".switch{position:relative;display:inline-block;width:42px;height:24px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#808080;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:'';height:28px;width:28px;left:-4px;bottom:-2px;background-color:white;-webkit-transition:0.4s;transition:0.4s;}input:checked + .slider{background-color:#2196f3;}input:focus + .slider{box-shadow:0 0 1px #2196f3;}input:checked + .slider:before{-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}"]),g=function(e){var t=e.isNight,n=e.toggleDayNight;return Object(f.jsx)(v,{children:Object(f.jsxs)("label",{className:"switch",children:[Object(f.jsx)("input",{type:"checkbox",checked:t,onChange:function(){return n()}}),Object(f.jsx)("span",{className:"slider round"})]})})},m="rgb(23, 24, 41)",x=h.a.div.withConfig({displayName:"Menybar__Container",componentId:"sc-1o4yu4d-0"})(["display:flex;width:100%;height:100%;transition:background-color 200ms ease;background-color:",";justify-content:space-between;.router-wrapper{display:flex;.router{display:flex;justify-content:center;font-weight:600;align-items:center;margin:0px 10px;color:",";cursor:pointer;&:hover{color:",";}}}"],(function(e){return e.isNight?m:"rgb(244, 235, 225)"}),(function(e){return e.isNight?"#ffffff":m}),(function(e){return e.isNight?"#acacac":"rgb(172, 163, 153)"})),j=function(e){var t=e.isNight,n=e.toggleDayNight;return Object(f.jsxs)(x,{isNight:t,children:[Object(f.jsxs)("span",{className:"router-wrapper",children:[Object(f.jsx)(b.a,{href:"/",children:Object(f.jsx)("span",{className:"router",children:"Home"})}),Object(f.jsx)(b.a,{href:"/work",children:Object(f.jsx)("span",{className:"router",children:"Work"})}),Object(f.jsx)(b.a,{href:"/study",children:Object(f.jsx)("span",{className:"router",children:"Study"})})]}),Object(f.jsx)(g,{isNight:t,toggleDayNight:n})]})},w=n("g4pe"),O=n.n(w),_="rgb(23, 24, 41)",k=h.a.div.withConfig({displayName:"Layout__Container",componentId:"wc0be1-0"})(["display:flex;flex-direction:column;align-items:center;transition:background-color 200ms ease;background-color:",";.header{display:flex;width:100%;justify-content:center;align-items:center;padding:16px 32px;min-height:62px;}.body{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:calc(100vh - 62px);.text-header{margin:20px 0px;font-size:30px;transition:color 200ms ease;color:",";}.text{margin:10px 0px;font-size:15px;transition:color 200ms ease;color:",";}.img-wrapper{display:flex;flex-direction:row;justify-content:center;margin:20px 0px;width:100%;}}"],(function(e){return e.isNight?_:"rgb(244, 235, 225)"}),(function(e){return e.isNight?"#ffffff":_}),(function(e){return e.isNight?"#ffffff":_})),P=function(e){var t=e.children,n=(e.title,Object(d.useState)(!0)),r=n[0],o=n[1];return Object(f.jsx)(k,{isNight:r,children:Object(f.jsxs)("div",{className:"layout",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)("title",{children:"ChrisRhee"}),Object(f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(f.jsx)("div",{className:"header",children:Object(f.jsx)(j,{isNight:r,toggleDayNight:function(){o(!r)}})}),Object(f.jsx)("div",{className:"body",children:t})]})})};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(u,e);var t,n,r,c=C(u);function u(){return o(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Object(f.jsx)(P,{children:Object(f.jsx)(t,N({},n))})}}])&&i(t.prototype,n),r&&i(t,r),u}(p.a);t.default=S},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,i.useRef)(),s=(0,i.useState)(!1),f=r(s,2),l=f[0],p=f[1],d=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,i.useEffect)((function(){c||l||(0,a.default)((function(){return p(!0)}))}),[l]),[d,l]};var i=n("q1tI"),a=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map},zPlV:function(e,t,n){}},[[0,0,1,2,3]]]);