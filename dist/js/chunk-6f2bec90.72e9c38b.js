(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f2bec90"],{"167d":function(e,t,r){"use strict";r("e61f")},"206c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"route-wrapper"},[r("div",{staticClass:"route-head"},[r("Breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("BreadcrumbItem",[e._v("权限测试")])],1)],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"route-content"},[r("h1",[e._v("管理员权限页面")]),r("p",[e._v("只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。")])])}],i=(r("0fb7"),r("450d"),r("f529")),a=r.n(i),u=r("5530"),c=(r("b84d"),r("c216")),s=r.n(c),f=(r("8f24"),r("76b9")),l=r.n(f),p=(r("b0c0"),r("ac1f"),r("5319"),r("2f62")),d={name:"Permission",components:{Breadcrumb:l.a,BreadcrumbItem:s.a},computed:Object(u["a"])({},Object(p["d"])("loginAbout",["userInfo"])),beforeMount:function(){var e=this;"admin"!==this.userInfo.name&&(setTimeout((function(){e.$router.replace("/dashboard")}),3e3),a()({type:"warning",message:"暂无权限，3秒后跳转"}))}},b=d,y=(r("167d"),r("2877")),v=Object(y["a"])(b,n,o,!1,null,"50427cd2",null);t["default"]=v.exports},"4de4":function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"76b9":function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=97)}({0:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,u){var c,s="function"===typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(e,t){return c.call(t),f(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:s}}r.d(t,"a",(function(){return n}))},97:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-breadcrumb",attrs:{"aria-label":"Breadcrumb",role:"navigation"}},[e._t("default")],2)},o=[];n._withStripped=!0;var i={name:"ElBreadcrumb",props:{separator:{type:String,default:"/"},separatorClass:{type:String,default:""}},provide:function(){return{elBreadcrumb:this}},mounted:function(){var e=this.$el.querySelectorAll(".el-breadcrumb__item");e.length&&e[e.length-1].setAttribute("aria-current","page")}},a=i,u=r(0),c=Object(u["a"])(a,n,o,!1,null,null,null);c.options.__file="packages/breadcrumb/src/breadcrumb.vue";var s=c.exports;s.install=function(e){e.component(s.name,s)};t["default"]=s}})},8122:function(e,t,r){"use strict";t.__esModule=!0,t.isEmpty=t.isEqual=t.arrayEquals=t.looseEqual=t.capitalize=t.kebabCase=t.autoprefixer=t.isFirefox=t.isEdge=t.isIE=t.coerceTruthyValueToArray=t.arrayFind=t.arrayFindIndex=t.escapeRegexpString=t.valueEquals=t.generateId=t.getValueByPath=void 0;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.noop=s,t.hasOwn=f,t.toObject=p,t.getPropByPath=d,t.rafThrottle=g,t.objToArray=_;var o=r("2b0e"),i=u(o),a=r("a742");function u(e){return e&&e.__esModule?e:{default:e}}var c=Object.prototype.hasOwnProperty;function s(){}function f(e,t){return c.call(e,t)}function l(e,t){for(var r in t)e[r]=t[r];return e}function p(e){for(var t={},r=0;r<e.length;r++)e[r]&&l(t,e[r]);return t}t.getValueByPath=function(e,t){t=t||"";for(var r=t.split("."),n=e,o=null,i=0,a=r.length;i<a;i++){var u=r[i];if(!n)break;if(i===a-1){o=n[u];break}n=n[u]}return o};function d(e,t,r){var n=e;t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");for(var o=t.split("."),i=0,a=o.length;i<a-1;++i){if(!n&&!r)break;var u=o[i];if(!(u in n)){if(r)throw new Error("please transfer a valid prop path to form item!");break}n=n[u]}return{o:n,k:o[i],v:n?n[o[i]]:null}}t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(e,t){if(e===t)return!0;if(!(e instanceof Array))return!1;if(!(t instanceof Array))return!1;if(e.length!==t.length)return!1;for(var r=0;r!==e.length;++r)if(e[r]!==t[r])return!1;return!0},t.escapeRegexpString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var b=t.arrayFindIndex=function(e,t){for(var r=0;r!==e.length;++r)if(t(e[r]))return r;return-1},y=(t.arrayFind=function(e,t){var r=b(e,t);return-1!==r?e[r]:void 0},t.coerceTruthyValueToArray=function(e){return Array.isArray(e)?e:e?[e]:[]},t.isIE=function(){return!i.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},t.isEdge=function(){return!i.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},t.isFirefox=function(){return!i.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},t.autoprefixer=function(e){if("object"!==("undefined"===typeof e?"undefined":n(e)))return e;var t=["transform","transition","animation"],r=["ms-","webkit-"];return t.forEach((function(t){var n=e[t];t&&n&&r.forEach((function(r){e[r+t]=n}))})),e},t.kebabCase=function(e){var t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()},t.capitalize=function(e){return(0,a.isString)(e)?e.charAt(0).toUpperCase()+e.slice(1):e},t.looseEqual=function(e,t){var r=(0,a.isObject)(e),n=(0,a.isObject)(t);return r&&n?JSON.stringify(e)===JSON.stringify(t):!r&&!n&&String(e)===String(t)}),v=t.arrayEquals=function(e,t){if(e=e||[],t=t||[],e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!y(e[r],t[r]))return!1;return!0},m=(t.isEqual=function(e,t){return Array.isArray(e)&&Array.isArray(t)?v(e,t):y(e,t)},t.isEmpty=function(e){if(null==e)return!0;if("boolean"===typeof e)return!1;if("number"===typeof e)return!e;if(e instanceof Error)return""===e.message;switch(Object.prototype.toString.call(e)){case"[object String]":case"[object Array]":return!e.length;case"[object File]":case"[object Map]":case"[object Set]":return!e.size;case"[object Object]":return!Object.keys(e).length}return!1});function g(e){var t=!1;return function(){for(var r=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];t||(t=!0,window.requestAnimationFrame((function(n){e.apply(r,o),t=!1})))}}function _(e){return Array.isArray(e)?e:m(e)?[]:[e]}},"8f24":function(e,t,r){},a742:function(e,t,r){"use strict";t.__esModule=!0,t.isDefined=t.isUndefined=t.isFunction=void 0;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isString=u,t.isObject=c,t.isHtmlElement=s;var o=r("2b0e"),i=a(o);function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return"[object String]"===Object.prototype.toString.call(e)}function c(e){return"[object Object]"===Object.prototype.toString.call(e)}function s(e){return e&&e.nodeType===Node.ELEMENT_NODE}var f=function(e){var t={};return e&&"[object Function]"===t.toString.call(e)};"object"===("undefined"===typeof Int8Array?"undefined":n(Int8Array))||!i.default.prototype.$isServer&&"function"===typeof document.childNodes||(t.isFunction=f=function(e){return"function"===typeof e||!1}),t.isFunction=f;t.isUndefined=function(e){return void 0===e},t.isDefined=function(e){return void 0!==e&&null!==e}},b84d:function(e,t,r){},c216:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=98)}({0:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,u){var c,s="function"===typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(e,t){return c.call(t),f(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:s}}r.d(t,"a",(function(){return n}))},98:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"el-breadcrumb__item"},[r("span",{ref:"link",class:["el-breadcrumb__inner",e.to?"is-link":""],attrs:{role:"link"}},[e._t("default")],2),e.separatorClass?r("i",{staticClass:"el-breadcrumb__separator",class:e.separatorClass}):r("span",{staticClass:"el-breadcrumb__separator",attrs:{role:"presentation"}},[e._v(e._s(e.separator))])])},o=[];n._withStripped=!0;var i={name:"ElBreadcrumbItem",props:{to:{},replace:Boolean},data:function(){return{separator:"",separatorClass:""}},inject:["elBreadcrumb"],mounted:function(){var e=this;this.separator=this.elBreadcrumb.separator,this.separatorClass=this.elBreadcrumb.separatorClass;var t=this.$refs.link;t.setAttribute("role","link"),t.addEventListener("click",(function(t){var r=e.to,n=e.$router;r&&n&&(e.replace?n.replace(r):n.push(r))}))}},a=i,u=r(0),c=Object(u["a"])(a,n,o,!1,null,null,null);c.options.__file="packages/breadcrumb/src/breadcrumb-item.vue";var s=c.exports;s.install=function(e){e.component(s.name,s)};t["default"]=s}})},dbb4:function(e,t,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),u=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),o=u.f,s=i(n),f={},l=0;while(s.length>l)r=o(n,t=s[l++]),void 0!==r&&c(f,t,r);return f}})},e439:function(e,t,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,u=r("83ab"),c=o((function(){a(1)})),s=!u||c;n({target:"Object",stat:!0,forced:s,sham:!u},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},e61f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-6f2bec90.72e9c38b.js.map