(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68750],{93993:(e,r,t)=>{"use strict";t.d(r,{rv:()=>n,TN:()=>o,R_:()=>a,Ry:()=>i,un:()=>u,Yc:()=>l,Sp:()=>c,VT:()=>s,YT:()=>f,xz:()=>p,J6:()=>v,P1:()=>d,Nr:()=>y,HI:()=>b,SF:()=>m,Rf:()=>g,Oi:()=>O,XR:()=>h,nu:()=>S,wc:()=>E,Jl:()=>w,cf:()=>P,fU:()=>j,tn:()=>T,nk:()=>A,Hg:()=>R,t_:()=>_,rr:()=>k});var n="GEONODE_SEARCH:SEARCH_RESOURCES",o="GEONODE_SEARCH:UPDATE_RESOURCES",a="GEONODE_SEARCH:LOADING_RESOURCES",i="GEONODE_SEARCH:REQUEST_RESOURCE",u="GEONODE_SEARCH:UPDATE_RESOURCES_METADATA",l="GEONODE:SET_FEATURED_RESOURCES",c="GEONODE_SEARCH:UPDATE_FEATURED_RESOURCES",s="GEONODE_REDUCE_TOTAL_COUNT",f="GEONODE_INCREASE_TOTAL_COUNT",p="GEONODE_SET_SEARCH_CONFIG",v="GEONODE:GET_FACET_ITEMS",d="GEONODE:SET_FACET_ITEMS",y="GEONODE:GET_FACET_FILTERS",b="SET_FILTERS";function m(e,r,t){return{type:n,params:e,pathname:r,reset:t}}function g(e,r){return{type:o,resources:e,reset:r}}function O(e){return{type:u,metadata:e}}function h(e){return{type:a,loading:e}}function S(e,r){return{type:i,pk:e,ctype:r}}function E(e){return{type:l,data:e}}function w(e){return{type:c,action:e,pageSize:arguments.length>1&&void 0!==arguments[1]?arguments[1]:4}}function P(){return{type:s}}function j(){return{type:f}}function T(e){return{type:p,config:e}}function A(e){return{type:v,query:e}}function R(e){return{type:d,facetItems:e}}function _(e){return{type:y,facets:e}}function k(e){return{type:b,filters:e}}},864818:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>ne});var n=t(49977),o=t(618446),a=t.n(o),i=t(441609),u=t.n(i),l=t(701469),c=t.n(l),s=t(414293),f=t.n(s),p=t(478718),v=t.n(p),d=t(545578),y=t.n(d),b=t(984596),m=t.n(b),g=t(337326),O=t(93993),h=t(643892),S=t(275982),E=t(472500),w=t.n(E),P=t(227361),j=t.n(P),T=t(737275),A=t(322843),R=t(770058);function _(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var k=function(e){var r=(0,A.bh)(e,(0,T.u8)("monitorState")),t=(0,T.u8)("geoNodeCustomFilters"),n=function(e){return j()(r,e)},o=(0,R.BK)((function(e){return(0,A.CU)(n,{},e)}))(t||{});return Object.keys(o).reduce((function(e,r){return[].concat(function(e){if(Array.isArray(e))return _(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return _(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{id:r,query:o[r]}]);var t}),[])},N=t(138334),C=t(12530),D=t(274621),I=t(76907),U=t(455877),F=t.n(U),M=t(776342),x=t(72466),G=t(653488),H=["page"],q=["page"];function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function L(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,r)||X(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,r){if(e){if("string"==typeof e)return J(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,r):void 0}}function J(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Q(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function W(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?W(Object(t),!0).forEach((function(r){$(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function $(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==z(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===z(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Z="GEONODE_SEARCH:UPDATE_RESOURCES_REQUEST",B=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["d"];return Object.keys(e).filter((function(e){return!r.includes(e)})).reduce((function(r,t){return e[t]&&0!==e[t].length?Y(Y({},r),{},$({},t,c()(e[t])?e[t].map((function(e){return e+""})):e[t]+"")):r}),{})},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,n=t.defaultPage,o=void 0===n?1:n,a=t.pagination,i=t.exclude,u=w().parse(e||"",!0).query,l=(u.page,Q(u,H)),c=B(Y(Y({},r),a?u:l),i),s=c.page;return[Q(c,q),s?parseFloat(s):o]},ee=function(e,r){var t,o,a=e.params,i=e.pageSize,u=e.reset,l=e.location,c=r.getState(),s=k(c),f=B(Y(Y({},a),null==c||null===(t=c.gnsearch)||void 0===t||null===(o=t.config)||void 0===o?void 0:o.defaultQuery));return n.Observable.defer((function(){return(0,g.jh)(Y(Y({},f),{},{pageSize:i,customFilters:s}))})).switchMap((function(e){var r,t=e.resources,o=e.total,i=e.isNextPageAvailable,s=(0,D.np)(c),f=null==s||null===(r=s.info)||void 0===r?void 0:r.preferred_username,p=(0,C.VC)(t,f);return n.Observable.of.apply(n.Observable,V(p.map((function(e){return(0,N.tv)(e)}))).concat([(0,O.Rf)(t,u),(0,O.Oi)({isNextPageAvailable:i,params:a,locationSearch:l.search,locationPathname:l.pathname,total:o}),(0,O.XR)(!1)]))})).catch((function(){return n.Observable.of((0,O.Rf)([],!0),(0,O.Oi)({isNextPageAvailable:!1,params:a,locationSearch:l.search,locationPathname:l.pathname,total:0,error:!0}),(0,O.XR)(!1))})).startWith((0,O.XR)(!0))},re=function(e){return"/"!==e&&x.Jd.filter((function(e){return e.shouldNotRequestResources})).some((function(r){return r.path.some((function(r){var t;return null===(t=(0,M.LX)(e,r))||void 0===t?void 0:t.isExact}))}))},te=function e(r,t){return Array.isArray(t)?t.some((function(t){return e(r,t)})):r===("string"==typeof r?t:Number(t))};const ne={gnsSearchResourcesEpic:function(e,r){return e.ofType(O.rv).switchMap((function(e){var t,o,i,u,l,c,s,f,p=e.pathname,v=void 0===p?"/":p,d=e.params,y=e.reset,b=r.getState(),m=!(null==b||null===(t=b.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),g=B(null==b||null===(i=b.gnsearch)||void 0===i?void 0:i.params,[]),O=B(d,[]),h=m?[]:["page"],E=Object.keys(O).reduce((function(e,r){return h.includes(r)?e:Y(Y({},e),{},$({},r,O[r]))}),{}),P=((null===(u=b.router)||void 0===u||null===(l=u.location)||void 0===l?void 0:l.pathname)||"/")===v,j=!a()(g,O),T=(null==b||null===(c=b.gnsearch)||void 0===c?void 0:c.locationSearch)||"",A=w().format({query:E});return T===A&&P?y||j?n.Observable.of((f={action:"PUSH",params:O,location:null==b||null===(s=b.router)||void 0===s?void 0:s.location},{type:Z,payload:f,reset:void 0})):n.Observable.empty():n.Observable.of((0,S.VF)(Y(Y({},v&&!P&&{pathname:v}),{},{search:A})))}))},gnsSearchResourcesOnLocationChangeEpic:function(e,r){return e.ofType(S.nk,Z).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t,o,i,u,l=r.getState(),c=!(null==l||null===(t=l.gnsearch)||void 0===t||null===(o=t.config)||void 0===o||!o.pagination),s=null==l||null===(i=l.gnsearch)||void 0===i||null===(u=i.config)||void 0===u?void 0:u.pageSize;if(!s)return n.Observable.empty();var f,p=e.payload||{},v=p.isFirstRendering,d=p.location,y=l.gnsearch.nextParams,b=L(K(l.gnsearch.locationSearch,l.gnsearch.params,{pagination:c}),2),m=b[0],g=b[1],O=L(K(d.search,y||{},{pagination:c}),2),h=O[0],S=O[1],E=e.payload.location.pathname;if(!y||e.reset||re(E)){var w,P=c?S:1,j=Y(Y({},h),{},{page:P}),T=c?a()(Y(Y({},m),{},{page:g}),Y(Y({},h),{},{page:S})):a()(m,h);return!re(E)&&(null!=l&&null!==(w=l.gnsearch)&&void 0!==w&&w.isFirstRequest||v||!T||e.reset)?ee({params:j,pageSize:s,reset:!0,location:d},r):n.Observable.empty()}var A=!1;if(c){var R;f=null!=l&&null!==(R=l.gnsearch)&&void 0!==R&&R.isFirstRequest||a()(m,h)?S:1,A=!0}else{var _,k=(null===(_=l.gnsearch)||void 0===_?void 0:_.resources.length)||0,N=Math.floor(k/s),C=S===g+1&&S===N+1;f=(A=v||!a()(m,h)||!C)?1:S}var D=Y(Y({},h),{},{page:f});return ee({params:D,pageSize:s,reset:A,location:d},r)}))},gnsSelectResourceEpic:function(e,r){return e.ofType(O.Ry).switchMap((function(e){var t,o;if(f()(e.pk))return n.Observable.of((0,h.DF)(null));var a=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).find((function(r){var t=r.pk,n=r.resource_type;return t===e.pk&&e.ctype===n}));return(o=n.Observable.defer((function(){return(0,g.yi)(e.ctype,e.pk)})).switchMap((function(e){return n.Observable.of((0,h.DF)(Y(Y({},e),{},{"@ms-detail":!0})))})).catch((function(e){return n.Observable.of((0,h.mN)(e.data||e.message))}))).startWith.apply(o,V(a?[(0,h.DF)(Y(Y({},a),{},{"@ms-detail":!0}),!0)]:[(0,h.Q$)()]))}))},getFeaturedResourcesEpic:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(O.Sp).switchMap((function(e){var r=e.action,t=e.pageSize,a=function(e,r){var t,n,o,a,i,u;if(!e)return 1;var l=(null===(t=r.gnsearch)||void 0===t||null===(n=t.featuredResources)||void 0===n?void 0:n.page)||1,c=null===(o=r.gnsearch)||void 0===o||null===(a=o.featuredResources)||void 0===a?void 0:a.isNextPageAvailable;return"next"===e&&c?l+1:(null===(i=r.gnsearch)||void 0===i||null===(u=i.featuredResources)||void 0===u?void 0:u.isPreviousPageAvailable)?l-1:1}(r,o());return n.Observable.defer((function(){return(0,g.B5)(a,t)})).switchMap((function(e){var r;return n.Observable.of((0,O.wc)(Y(Y({},e),{},{isNextPageAvailable:!(null==e||null===(r=e.links)||void 0===r||!r.next),isPreviousPageAvailable:!(null==e||!e.links.previous),loading:!1})))})).catch((function(e){return n.Observable.of((0,h.mN)(e.data||e.message),(0,O.wc)({loading:!1}))})).startWith((0,O.wc)({loading:!0}))}))},gnWatchStopCopyProcessOnSearch:function(e,r){return e.ofType(N.v).filter((function(e){var r;return(null==e||null===(r=e.payload)||void 0===r?void 0:r.processType)===C.zj.COPY_RESOURCE})).flatMap((function(e){var t,o,a,i,u,l,c,s,f,p;if((null==e||null===(t=e.payload)||void 0===t?void 0:t.error)||(null==e||null===(o=e.payload)||void 0===o||null===(a=o.output)||void 0===a?void 0:a.status)===C.N5.FAILED)return n.Observable.empty();var v=null==e||null===(i=e.payload)||void 0===i||null===(u=i.output)||void 0===u||null===(l=u.output_params)||void 0===l||null===(c=l.output)||void 0===c?void 0:c.uuid;if(void 0===v)return n.Observable.empty();var d=null==e||null===(s=e.payload)||void 0===s||null===(f=s.output)||void 0===f||null===(p=f.input_params)||void 0===p?void 0:p.instance;return n.Observable.defer((function(){return(0,g.LS)(v)})).switchMap((function(e){var t,o=((null===(t=r.getState().gnsearch)||void 0===t?void 0:t.resources)||[]).reduce((function(r,t){return t.pk==="".concat(d)?[].concat(V(r),[Y(Y({},e),{},{"@temporary":!0,pk2:F()()}),t]):[].concat(V(r),[t])}),[]);return n.Observable.of((0,O.Rf)(o,!0))}))}))},gnsRequestResourceOnLocationChange:function(e,r){return e.ofType(S.nk).filter((function(e){var r=e.payload;return"PUSH"===r.action||"POP"===r.action})).switchMap((function(e){var t=r.getState(),o=(e.payload||{}).location,a=w().parse((null==o?void 0:o.search)||"",!0).query,i=(0,I.yK)(t)||{pk:"",resource_type:""},u=L(((null==a?void 0:a.d)||"").split(";"),2),l=u[0],c=u[1];return"".concat(null==i?void 0:i.pk)===l&&"".concat(null==i?void 0:i.resource_type)===c?n.Observable.empty():n.Observable.of((0,O.nu)(l||void 0,c))}))},gnGetFacetItems:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(O.J6).switchMap((function(){var e=k(o());return n.Observable.defer((function(){return(0,g.nk)(e)})).switchMap((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.Observable.of((0,O.t_)(e))}))}))},gnSetFacetFilter:function(e,r){var t=r.getState,o=void 0===t?function(){}:t;return e.ofType(O.Nr,S.nk).filter((function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).facets;return!u()(e)||(0,G.ak)(o())})).switchMap((function(){var e,r,t,a,i,l,c,s=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).facets,f=k(o()),p=null===(e=o())||void 0===e||null===(r=e.router)||void 0===r?void 0:r.location,d=w().parse((null==p?void 0:p.search)||"",!0).query,b=(0,G.ak)(o()),h=Object.values(null!==(t=null===(a=o())||void 0===a||null===(i=a.gnsearch)||void 0===i?void 0:i.filters)&&void 0!==t?t:[]),S=s||b,E=v()(d,Object.keys(d).filter((function(e){return S.map((function(e){return e.filter})).includes(e)}))),P=null!==(l=null==S||null===(c=S.filter((function(e){return!u()(E[e.filter])&&function(e){var r,t,n,o=e.facet,a=e.queryFilters,i=e.topicQuery;if("accordion"===(null==o||null===(r=o.config)||void 0===r?void 0:r.type))return(null===(n=JSON.parse(window.localStorage.getItem("accordionsExpanded")))||void 0===n?void 0:n.map((function(e){return e}))).includes(o.name);var l=null==a||null===(t=a.filter((function(e){var r,t,n,a;return null===(r=m()(null!==(n=null==i?void 0:i[o.filter])&&void 0!==n?n:[]))||void 0===r||null===(t=r.map((function(e){return isNaN(Number(e))?e:Number(e)})))||void 0===t?void 0:t.includes(null!==(a=e.key)&&void 0!==a?a:isNaN(Number(e.filterValue))?e.filterValue:Number(e.filterValue))})))||void 0===t?void 0:t.map((function(e){return e.facetName}));return!!u()(a)||(null==l?void 0:l.includes(o.name))}({facet:e,topicQuery:E,queryFilters:h})})))||void 0===c?void 0:c.map((function(e){return{facet:e.name,key:E[e.filter]}})))&&void 0!==l?l:[],j=Y(Y({},(0,g.vl)(d,f)),{},{include_topics:!0});return n.Observable.forkJoin(P.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.facet,t=e.key;return n.Observable.defer((function(){return(0,g.CG)(r,Y(Y({},j),{},{key:t}))}))}))).switchMap((function(e){var r,t,o={},a=null===(r=null!=e?e:[])||void 0===r?void 0:r.reduce((function(e,r){var t;return null==r||null===(t=r.items)||void 0===t?void 0:t.concat(e)}),[]);return u()(a)||(a=y()(a,"key")),(null==S||null===(t=S.map((function(e){return{filter:e.filter,value:null==d?void 0:d[e.filter]}})))||void 0===t?void 0:t.filter((function(e){return!u()(e.value)}))).forEach((function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.filter,n=r.value;null===(e=a)||void 0===e||e.forEach((function(e){var r=te(e.key,n)&&e;u()(r)||(o[t+r.key]=Y(Y({},r),{},{count:r.count||0}))}))})),n.Observable.of((0,O.rr)(o))})).concat(u()(b)?n.Observable.of((0,O.Hg)(S)):n.Observable.empty())}))}}},331869:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>P});var n,o=t(49977),a=t(375875),i=t.n(a),u=t(178598),l=t(138334),c=t(12530),s=t(452992),f=t(337326),p=t(643892),v=t(93993),d=t(782904),y=t(275982),b=t(197395);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){E(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r,t){return(r=function(e){var r=function(e,r){if("object"!==m(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var w=(E(n={},c.zj.DELETE_RESOURCE,f.fg),E(n,c.zj.COPY_RESOURCE,f.T5),n);const P={gnMonitorAsyncProcesses:function(e,r){return e.ofType(l.oc).flatMap((function(e){var t,n,a,u,f=((null==e||null===(t=e.payload)||void 0===t?void 0:t.output)||{}).status_url;return!f||null!=e&&null!==(n=e.payload)&&void 0!==n&&n.error?null!=e&&null!==(u=e.payload)&&void 0!==u&&u.error?o.Observable.of((0,l.iC)(S(S({},e.payload),{},{completed:!0})),(0,b.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):o.Observable.of((0,l.iC)(S(S({},e.payload),{},{completed:!0}))):o.Observable.interval(c.nN[null==e||null===(a=e.payload)||void 0===a?void 0:a.processType]||1e3).takeWhile((function(){return!(0,s.jp)(r.getState(),e.payload)})).exhaustMap((function(){return(0,s.jp)(r.getState(),e.payload)?o.Observable.empty():o.Observable.defer((function(){return i().get(f).then((function(e){return e.data})).catch((function(e){var r;return{error:(null==e||null===(r=e.data)||void 0===r?void 0:r.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(r){var t,n;return r.error||r.status===c.N5.FINISHED||r.status===c.N5.FAILED?o.Observable.of.apply(o.Observable,[(0,l.iC)(S(S({},e.payload),{},{output:r,completed:!0}))].concat(g((null==e||null===(t=e.payload)||void 0===t?void 0:t.processType)!==c.zj.DELETE_RESOURCE||null!=e&&null!==(n=e.payload)&&void 0!==n&&n.resource["@temporary"]?[]:[(0,v.cf)()]))):o.Observable.of((0,l.iF)(S(S({},e.payload),{},{output:r})))}))}))}))},gnProcessResources:function(e){return e.ofType(p.Pv).flatMap((function(e){return o.Observable.defer((function(){return i().all(e.resources.map((function(r){return w[e.processType](r).then((function(t){return{resource:r,output:t,processType:e.processType}})).catch((function(t){var n;return{resource:r,error:(null==t||null===(n=t.data)||void 0===n?void 0:n.detail)||(null==t?void 0:t.statusText)||(null==t?void 0:t.message)||!0,processType:e.processType}}))})))})).switchMap((function(r){return o.Observable.of.apply(o.Observable,[(0,d.Xg)(e.processType,"loading",!1),(0,d.Xg)(e.processType,"value",void 0)].concat(g(r.map((function(e){return(0,l.tv)(e)}))),g(e.redirectTo?[(0,y.VF)(e.redirectTo)]:[])))})).startWith((0,d.Xg)(e.processType,"loading",!0))}))},gnDownloadResource:function(e){return e.ofType(p.IH).switchMap((function(e){var r=null==e?void 0:e.resource;return o.Observable.defer((function(){return(0,f.Rk)(r).then((function(e){var t=e.output,n=e.headers;return(0,u.saveAs)(new Blob([t],{type:null==n?void 0:n["content-type"]}),r.title),{resource:r}})).catch((function(e){var t;return{resource:r,error:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e?void 0:e.statusText)||(null==e?void 0:e.message)||!0}}))})).switchMap((function(e){return(e||{}).error?o.Observable.of((0,p.V1)(S({},e.resource)),(0,b.vU)({title:"gnviewer.invalidUploadMessageError",message:"gnviewer.cannotPerfomAction"})):o.Observable.of((0,p.V1)(S({},e.resource)))}))}))}}},805207:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(414293),o=t.n(n),a=t(93993),i=t(643892);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){var n,o,a;n=e,o=r,a=t[r],(o=function(e){var r=function(e,r){if("object"!==u(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p={resources:[],params:{},previousParams:{},isFirstRequest:!0,featuredResources:{resources:[]}};const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.rv:return f(f({},e),{},{nextParams:r.params});case a.TN:return f(f({},e),{},{isFirstRequest:!1,resources:r.reset?l(r.resources):[].concat(l(e.resources),l(r.resources))});case i.Oq:var t=e.resources.map((function(e){var t;return e.pk===(null==r||null===(t=r.data)||void 0===t?void 0:t.pk)?null==r?void 0:r.data:e}));return f(f({},e),{},{isFirstRequest:!1,resources:l(t)});case a.un:return f(f(f(f({},e),{},{total:r.metadata.total,isNextPageAvailable:r.metadata.isNextPageAvailable,error:r.metadata.error},r.metadata.params&&{params:r.metadata.params,previousParams:e.params,nextParams:null}),!o()(r.metadata.locationSearch)&&{locationSearch:r.metadata.locationSearch}),!o()(r.metadata.locationPathname)&&{locationPathname:r.metadata.locationPathname});case a.R_:return f(f({},e),{},{loading:r.loading},r.loading&&{error:!1});case a.Yc:return f(f({},e),{},{featuredResources:f(f({},e.featuredResources),r.data)});case a.VT:return f(f({},e),{},{total:e.total-1});case a.YT:return f(f({},e),{},{total:e.total+1});case a.xz:return f(f({},e),{},{config:r.config});case a.P1:return f(f({},e),{},{facetItems:r.facetItems});case a.HI:return f(f({},e),{},{filters:f(f({},e.filters),r.filters)});default:return e}}},555168:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});var n=t(138334),o=t(643892);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){var n,o,i;n=e,o=r,i=t[r],(o=function(e){var r=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(r)?r:String(r)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s={processes:[],downloads:[]};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.Pv:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){return!r.resources.find((function(t){var n;return(null==e||null===(n=e.resource)||void 0===n?void 0:n.pk)===(null==t?void 0:t.pk)&&(null==e?void 0:e.processType)===r.processType}))}))),i(r.resources.map((function(e){return{resource:e,processType:r.processType}}))))});case n.oc:return c(c({},e),{},{processes:[].concat(i(e.processes.filter((function(e){var t,n,o,a;return!((null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType))}))),[r.payload])});case n.v:case n.jo:return c(c({},e),{},{processes:e.processes.map((function(e){var t,n,o,a;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.payload)||void 0===n||null===(o=n.resource)||void 0===o?void 0:o.pk)&&(null==e?void 0:e.processType)===(null==r||null===(a=r.payload)||void 0===a?void 0:a.processType)?r.payload:e}))});case o.IH:return c(c({},e),{},{downloads:[].concat(i(e.downloads),[r.resource])});case o.e3:return c(c({},e),{},{downloads:i(e.downloads.filter((function(e){var t,n;return(null==e||null===(t=e.resource)||void 0===t?void 0:t.pk)===(null==r||null===(n=r.resource)||void 0===n?void 0:n.pk)})))});default:return e}}}}]);