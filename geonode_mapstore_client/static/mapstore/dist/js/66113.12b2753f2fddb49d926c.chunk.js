(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[66113],{866113:(t,n,r)=>{"use strict";r.d(n,{$F:()=>E,eg:()=>A,Kg:()=>j,PR:()=>D,eK:()=>P,pu:()=>C,Lu:()=>M,W5:()=>k,TQ:()=>L,KR:()=>U,sY:()=>T,vv:()=>_,jq:()=>F,Tr:()=>K,w:()=>N,CK:()=>V,u5:()=>q,z7:()=>B,FW:()=>G,GC:()=>H,yL:()=>W,_O:()=>x,JM:()=>z,bU:()=>J,mm:()=>Q,X6:()=>X,NR:()=>Y,I0:()=>Z,eB:()=>tt,HB:()=>nt});var e=r(227361),o=r.n(e),u=r(313311),i=r.n(u),c=r(630998),f=r.n(c),s=r(618446),a=r.n(s),l=r(944908),y=r.n(l),d=r(264721),p=r.n(d),g=r(192579),v=r(274621),b=r(324684);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function I(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return S(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function O(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function h(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach((function(n){w(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function w(t,n,r){var e;return e=function(t,n){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=m(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n),(n="symbol"==m(e)?e:String(e))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var E=function(t){return function(n){return o()(n,(0,g.Ll)("geostory.currentStory.".concat(t),n),"")}},A=function(t){return o()(t,"geostory.isCollapsed",!1)},j=function(t){return o()(t,"geostory.currentStory")},D=function(t){return o()(t,"geostory.currentPage",{})},P=function(t){return o()(t,"geostory.mode")},C=function(t){return function(t){return o()(function(t){return o()(t,"geostory.resource")}(t),"canEdit",!1)}(t)||(0,v.qg)(t)},R=function(t){return o()(j(t),"sections",[])},M=function(t){return R(t).length>0},k=function(t){return o()(t,"geostory.isSettingsEnabled",!1)},L=function(t){var n=o()(j(t),"settings",{}),r=R(t).filter((function(t){var n=t.type;return p()([g.ID.CAROUSEL,g.ID.IMMERSIVE],n)})),e=n.checked||[],u=y()(e.map((function(t){return(0,g.Un)(r,t)})).filter((function(t){return t})));return h(h({},n),{},{expanded:u})},U=function(t){return!a()(o()(j(t),"settings",{}),function(t){return o()(t,"geostory.oldSettings",{})}(t))},T=function(t){return o()(t,"geostory.selectedCard","")},_=function(t){return function(n){return E("".concat(t,".resourceId"))(n)}},F=function(t){return o()(j(t),"resources",[])},K=function(t){return function(n){return i()(F(n),{id:t})}},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.withImmersiveSection,r=void 0!==n&&n,e=t.includeAlways,u=void 0===e||e;return function(t){var n=R(t),e=function(t){return o()(L(t),"checked",[]).reduce((function(t,n){return h(h({},t),{},w({},n,!0))}),{})}(t);return n.reduce((function(t,n){if(n.type===g.ID.TITLE&&(u||e[n.id]))return[].concat(I(t),[n]);if(n.type===g.ID.PARAGRAPH&&(u||e[n.id]))return[].concat(I(t),[n]);if(n.type===g.ID.BANNER&&(u||e[n.id]))return[].concat(I(t),[n]);if(n.type===g.ID.CAROUSEL&&(u||e[n.id]))return[].concat(I(t),[n]);if(n.type===g.ID.IMMERSIVE){var o=n.contents&&n.contents.reduce((function(t,n){return u||e[n.id]?[].concat(I(t),[h(h({},n),{},{sectionId:t.id})]):t}),[])||[];return r?[].concat(I(t),[n],I(o)):[].concat(I(t),I(o))}return t}),[])}},V=function(t){return N({includeAlways:!0})(t).length},q=function(t){var n=function(t){var n=D(t);return f()(N({includeAlways:!0})(t),{id:n.columns&&n.columns[n.sectionId]?n.columns[n.sectionId]:n.sectionId||""})}(t);return-1!==n?n:f()(N({includeAlways:!0})(t),{id:D(t).sectionId})},B=function(t){return void 0!==o()(t,"geostory.focusedContent.target")},G=function(t){return o()(t,"geostory.focusedContent")},H=function(t){return E(o()(t,"geostory.focusedContent.path",""))(t)},W=function(t){return R(t).reduce((function(t,n){if(p()([g.ID.IMMERSIVE,g.ID.CAROUSEL],n.type)){var r=n.contents&&n.contents.map((function(t){return{label:t.title||"",value:t.id}}))||[];return[].concat(I(t),[h({label:n.title||"",value:n.id},n.type===g.ID.IMMERSIVE&&{children:r})])}return[].concat(I(t),[{label:n.title||"",value:n.id}])}),[])},$=function t(n,r){var e=r.contents,o=r.background;return r.resourceId===n||!(!o||o.resourceId!==n)||!!e&&!!i()(e,(function(r){return t(n,r)}))},x=function(t,n){return!!i()(R(t),(function(t){return $(n,t)}))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,b.F)(t).includes("geostory/shared")},J=function(t){return o()(t,"geostory.updateUrlOnScroll",!1)},Q=function(t){return o()(t,"geostory.currentStory.settings.theme.fontFamilies",[])},X=function(t){return o()(t,"geostory.mediaEditorSettings")},Y=function(t){var n;return((null===(n=j(t))||void 0===n?void 0:n.sections)||[]).filter((function(t){return t.type===g.ID.CAROUSEL}))},Z=function(t){return function(n){return!!i()(Y(n),{id:t})}},tt=function(t){return function(n){var r=i()(Y(n)||[],{id:t});return(null==r?void 0:r.contents)||[]}},nt=function(t){var n;return!(null==t||null===(n=t.geostory)||void 0===n||!n.drawOptions)}},274621:(t,n,r)=>{"use strict";r.d(n,{np:()=>e,L3:()=>o,jl:()=>u,y8:()=>i,qg:()=>c}),r(727418),r(227361);var e=function(t){return t&&t.security&&t.security.user},o=function(t){return e(t)&&e(t).role},u=function(t){return t&&t.security&&t.security.user},i=function(t){return t.security&&t.security.token},c=function(t){return"ADMIN"===o(t)}}}]);