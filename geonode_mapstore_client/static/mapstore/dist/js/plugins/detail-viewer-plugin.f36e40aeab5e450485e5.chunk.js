(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[95121,2095],{76329:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(24852),o=r.n(n),i=r(98611),a=r.n(i),u=r(22843);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const m=function(e){var t=e.items,r=e.loadedPlugins,i=e.loaderComponent,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=(0,n.useRef)({});l.current={items:t,loadedPlugins:r,loaderComponent:i};var d=a()(Object.keys(r||{}),","),m=(0,n.useMemo)((function(){return function(e){return f(e.items).sort((function(e,t){return e.position>t.position?1:-1})).map((function(t){return s(s({},t),{},{Component:t.Component||(0,u.KB)(t,e.loadedPlugins,e.loaderComponent||o().createElement("div",null))})}))||[]}(l.current)}),[d].concat(f(c)));return m}},94228:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var n=r(24852),o=r.n(n),i=r(22843),a=r(71703),u=r(22222),c=r(37275),l=r(98288),s=r(74621),f=r(43892),d=r(52992),m=r(17594),p=r(25108),y=r(82904),v=r(72036),b=r(76907),g=r(3744);var h=r(824),O=r(25635),j=r(77593),P=r(5346),w=r(75110),S=r(827),_=r(70058),C=r(7461),E=r(76329),A=["hide"];function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var T=(0,a.connect)((0,u.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.favorite)||!1},function(e){var t;return(null==e||null===(t=e.gnsave)||void 0===t?void 0:t.savingThumbnailMap)||!1},w.l2,b.km,b.Bs,S.Od,function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.showMapThumbnail)||!1},d.WB],(function(e,t,r,n,o,i,a,u,c,l){return{layers:o,resource:e,loading:t,savingThumbnailMap:n,favorite:r,isThumbnailChanged:i,resourceThumbnailUpdating:a,initialBbox:null==u?void 0:u.bbox,enableMapViewer:c,downloading:l,resourceId:e.pk}})),{closePanel:y.Xg.bind(null,"rightOverlay","enabled",!1),onFavorite:f.gw,onMapThumbnail:f.CB,onResourceThumbnail:f.e5,onClose:f.qs,onSetExtent:f.rg})(l.Z),N=(0,a.connect)((0,u.P1)([b.V$,b.fg],(function(e,t){return{hide:e||!t}})),{onClick:y.Xg.bind(null,"rightOverlay","enabled","DetailViewer")})((function(e){var t=e.onClick,r=e.hide,n=e.variant,i=e.size,a=e.showMessage;return r?null:o().createElement(g.Z,{variant:n,size:i,onClick:function(){t()}},a?o().createElement(P.Z,{msgId:"gnviewer.viewInfo"}):o().createElement(m.Z,{name:"info-circle"}))}));function G(e,t){var r=e.location,i=e.enabled,a=e.onEditResource,u=e.onEditAbstractResource,c=e.onEditThumbnail,l=e.canEdit,s=e.user,f=e.onClose,d=e.monitoredState,m=e.queryPathname,p=void 0===m?"/":m,y=e.tabs,v=void 0===y?[]:y,b=e.items,g=e.resourceId,O=(0,_._y)(d,{tabs:v}),P=function(e){var t=e.disabled,r=e.onClickOut,o=(0,n.useRef)();return(0,n.useEffect)((function(){function e(e){var n;!t&&(null==o||null===(n=o.current)||void 0===n?void 0:n.contains)&&!o.current.contains(e.target)&&r()}return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}),[t,o,r]),o}({disabled:!i,onClickOut:function(){f()}}),w=t.loadedPlugins,S=(0,E.Z)({items:b,loadedPlugins:w},[g]).filter((function(e){return"toolbar"===e.target}));return o().createElement(h.Z,{enabled:i,ref:P,className:"gn-overlay-wrapper"},o().createElement(T,{editTitle:function(e){a(e)},editAbstract:function(e){u(e)},editThumbnail:function(e){c(e,!0)},activeEditMode:i&&l,enableFavorite:!!s,formatHref:function(e){return(0,j.nz)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=x(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==x(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({location:r},e))},tabs:O.tabs,pathname:p,toolbarItems:S}))}var I=(0,a.connect)((0,u.P1)([function(e){var t,r;return"DetailViewer"===(null==e||null===(t=e.controls)||void 0===t||null===(r=t.rightOverlay)||void 0===r?void 0:r.enabled)},b.il,b.V$,b.fg,s.np,function(e){return(0,i.bh)(e,(0,c.u8)("monitorState"))},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null}],(function(e,t,r,n,o,i,a){return{enabled:e,canEdit:t,hide:r||!n,user:o,monitoredState:i,resourceId:null==a?void 0:a.pk}})),{onEditResource:f.Br,onEditAbstractResource:f.bI,onEditThumbnail:f.U5,onClose:y.Xg.bind(null,"rightOverlay","enabled",!1)})((0,O.EN)((function(e){var t=e.hide,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,A);return t?null:o().createElement(G,r)})));const D=(0,i.rx)("DetailViewer",{component:I,containers:{ActionNavbar:{name:"DetailViewerButton",Component:N}},epics:C.Z,reducers:{gnresource:v.Z,controls:p.Z}})},72036:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(18446),o=r.n(n),i=r(41609),a=r.n(i),u=r(43892),c=r(35721),l=["data"],s=["features"],f=["features"],d=["features"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==m(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={selectedLayerPermissions:[],data:{},permissions:[]};const g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case u.$X:return b;case u.ql:return v(v({},t),{},{configError:void 0,loadingResourceConfig:r.loading});case u.nS:return v(v({},t),{},{loading:!1,configError:r.message});case u.W:return v(v({},t),{},{loading:!0});case u.Zf:var n,i,m=r.data||{},y=(m.data,v({},p(m,l))),g=null===(n=t.data)||void 0===n?void 0:n.linkedResources;return a()(g)||y.pk!==(null===(i=t.data)||void 0===i?void 0:i.pk)||(y.linkedResources=g),v(v({},t),{},{error:null,initialResource:v({},r.data),data:y,loading:!1,isNew:!1});case u.Eu:return v(v({},t),{},{initialResource:null,data:null,error:r.error,loading:!1});case u.Vy:return v(v({},t),{},{data:v(v({},t.data),r.properties)});case u.YB:return v(v({},t),{},{type:r.resourceType});case u.xm:return v(v({},b),{},{isNew:!0});case u._f:return v(v({},t),{},{id:r.id});case u.ek:return v(v({},t),{},{permissions:r.permissions});case u.cd:return v(v({},t),{},{data:v(v({},null==t?void 0:t.data),{},{title:null==r?void 0:r.title,name:null==r?void 0:r.title})});case u.pt:return v(v({},t),{},{data:v(v({},null==t?void 0:t.data),{},{abstract:null==r?void 0:r.abstract})});case u.ww:return v(v({},t),{},{data:v(v({},null==t?void 0:t.data),{},{thumbnail_url:null==r?void 0:r.thumbnailUrl,thumbnailChanged:null==r?void 0:r.thumbnailChanged})});case u._Z:return v(v({},t),{},{data:v(v({},null==t?void 0:t.data),{},{updatingThumbnail:!0})});case u.dh:return v(v({},t),{},{showMapThumbnail:r.enabled});case u.p2:return v(v({},t),{},{selectedLayerPermissions:r.permissions});case u.ih:return v(v({},t),{},{initialCompactPermissions:r.compactPermissions,compactPermissions:r.compactPermissions,isCompactPermissionsChanged:!1,geoLimits:[]});case u.J5:return v(v({},t),{},{compactPermissions:r.compactPermissions,isCompactPermissionsChanged:!o()((0,c.go)(t.initialCompactPermissions),(0,c.go)(r.compactPermissions)),geoLimits:(0,c.vB)(r.compactPermissions)});case u.uA:if(t.compactPermissions){var h=t.compactPermissions,O=h.users,j=h.organizations,P=h.groups;return v(v({},t),{},{compactPermissions:{users:O.map((function(e){return e.features,p(e,s)})),organizations:j.map((function(e){return e.features,p(e,f)})),groups:P.map((function(e){return e.features,p(e,d)}))},geoLimits:[]})}return t;case u.Y0:return v(v({},t),{},{data:v(v({},t.data),{},{extent:v(v({},null===(e=t.data)||void 0===e?void 0:e.extent),{},{coords:r.coords})})});default:return t}}},70058:(e,t,r)=>{"use strict";r.d(t,{gj:()=>d,QH:()=>m,mk:()=>p,BK:()=>y,bH:()=>v,_y:()=>b});var n=r(27361),o=r.n(n),i=r(14293),a=r.n(i),u=r(22843),c=r(68523);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t,r){var n=t?t.filter((function(e){return e.type===r})):void 0;return void 0===n||n&&0===n.length||n&&n.some((function(t){return e&&e.includes(null==t?void 0:t.value)}))}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=t.split(r).map((function(t){return function(e,t){return 0===(null==t?void 0:t.indexOf("${"))?o()(e,t.replace(/^\$\{(.*)\}$/,"$1")):t}(e,t)}));return n.join(r)}var p=function(e){return!(""===e||a()(e))},y=function(e){return function t(r){return r&&"object"===f(r)?Array.isArray(r)?r.map(t):Object.fromEntries(Object.entries(r).map((function(e){var r=l(e,2),n=r[0],o=r[1];return[n,t(o)]}))):e(r)}},v=function e(t,r){return t&&t.reduce((function(t,n){var o=n;return Object.entries(n).forEach((function(t){var i=l(t,2),a=i[0],u=i[1];Array.isArray(u)&&(o[a]=e(n[a],r))})),r(o)&&t.push(o),t}),[])},b=function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).filterFunc,n=void 0===r?function(e){return!e.disableIf}:r;return l(v([y((function(t){return(0,u.CU)((function(t){return o()(e,t)}),(0,c.z)(),t)}))(t)],n),1)[0]}},87157:(e,t,r)=>{var n=r(40554),o=r(88958);e.exports=function(e,t,r,i){var a=e.length;for((r=n(r))<0&&(r=-r>a?0:a+r),(i=void 0===i||i>a?a:n(i))<0&&(i+=a),i=r>i?0:o(i);r<i;)e[r++]=t;return e}},80760:(e,t,r)=>{var n=r(89881);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},41761:(e,t,r)=>{var n=r(44239),o=r(37005);e.exports=function(e){return o(e)&&"[object Date]"==n(e)}},89179:(e,t,r)=>{var n=r(55639),o=r(40554),i=r(14841),a=r(79833),u=n.isFinite,c=Math.min;e.exports=function(e){var t=Math[e];return function(e,r){if(e=i(e),(r=null==r?0:c(o(r),292))&&u(e)){var n=(a(e)+"e").split("e"),l=t(n[0]+"e"+(+n[1]+r));return+((n=(a(l)+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}},19873:(e,t,r)=>{var n=r(87157),o=r(16612);e.exports=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,i=a),n(e,t,r,i)):[]}},63105:(e,t,r)=>{var n=r(34963),o=r(80760),i=r(67206),a=r(1469);e.exports=function(e,t){return(a(e)?n:o)(e,i(t,3))}},47960:(e,t,r)=>{var n=r(41761),o=r(7518),i=r(31167),a=i&&i.isDate,u=a?o(a):n;e.exports=u},13880:(e,t,r)=>{var n=r(79833);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},59854:(e,t,r)=>{var n=r(89179)("round");e.exports=n},88958:(e,t,r)=>{var n=r(29750),o=r(40554);e.exports=function(e){return e?n(o(e),0,4294967295):0}},23068:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(38906),o=r(13002),i=r(73381),a=r(58493);const u=function(e){function t(t){if(e.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,(0,o.oL)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),t)if("function"==typeof t.getSimplifiedGeometry){var r=t;this.setGeometry(r)}else{var n=t;this.setProperties(n)}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.clone=function(){var e=new t(this.getProperties());e.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&e.setGeometry(r.clone());var n=this.getStyle();return n&&e.setStyle(n),e},t.prototype.getGeometry=function(){return this.get(this.geometryName_)},t.prototype.getId=function(){return this.id_},t.prototype.getGeometryName=function(){return this.geometryName_},t.prototype.getStyle=function(){return this.style_},t.prototype.getStyleFunction=function(){return this.styleFunction_},t.prototype.handleGeometryChange_=function(){this.changed()},t.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&((0,o.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);var e=this.getGeometry();e&&(this.geometryChangeKey_=(0,o.oL)(e,i.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()},t.prototype.setGeometry=function(e){this.set(this.geometryName_,e)},t.prototype.setStyle=function(e){var t,r;this.style_=e,this.styleFunction_=e?"function"==typeof(t=e)?t:(Array.isArray(t)?r=t:((0,n.h)("function"==typeof t.getZIndex,41),r=[t]),function(){return r}):void 0,this.changed()},t.prototype.setId=function(e){this.id_=e,this.changed()},t.prototype.setGeometryName=function(e){(0,o.Ev)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=e,(0,o.oL)(this,(0,a.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},t}(a.ZP)},34007:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}}}]);