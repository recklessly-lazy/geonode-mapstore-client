(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7832],{911766:(e,t,r)=>{"use strict";r.d(t,{H:()=>P,Z:()=>E});var n=r(124852),o=r.n(n),i=r(983717),c=r(513218),a=r.n(c),l=r(717621),u=r.n(l),s=r(480681),f=r(38560),p=r(725288),d=r(145869),m=r(805346),y=r(615402),b=r(815135),v=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=(0,b.Z)(f.Z);function j(e){var t=e.themeStyle,r=e.disableBackgroundPicker,c=void 0!==r&&r,a=e.disableBackgroundAlpha,l=e.disableTextColor,f=e.disableShadow,b=e.onChange,g=void 0===b?function(){}:b,h=e.onOpen,S=void 0===h?function(){}:h,j=e.placement,P=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,C=null==t?void 0:t.color,k=!l&&E&&C&&!u().isReadable(C,E)?u().mostReadable(E,[C,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!c&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(i.Z,{placement:j,key:E,onOpen:S,color:E,format:a?"hex":"rgb",disableAlpha:a,presetColors:[],onChangeColor:function(e){var r=u()(e).isLight()?u()(e).darken(10).toHexString():u()(e).lighten(15).toHexString(),n=!l&&!(null!=t&&t.color)&&{color:u().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};g(O(O({},t),{},{backgroundColor:e,borderColor:r},!l&&n))}}))),!l&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(p.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(P.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:k}}),o().createElement(w,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;g(O(O({},t),{},{color:k})),null===(e=P.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(m.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},k&&o().createElement(w,{className:"square-button-md no-border",style:{display:k?"block":"none"}},o().createElement(s.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(i.Z,{placement:j,key:C,color:C,onOpen:S,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){g(O(O({},t),{},{color:e}))}}))),!f&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(d.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,v));g(r?O({},n):O(O({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function P(e){var t=e.selected,r=e.value,n=e.storyTheme,i=e.onUpdate,c=e.onActive,l=e.disableBackgroundAlpha,u=e.disableTextColor,f=e.disableShadow,p=function(e,n){var o=a()(t)&&t;return i("theme",O(O({},o),{},n?S({value:e},r,O({},n)):{value:e}))},d=n||{},y=d.color,b=d.backgroundColor,v=b&&{backgroundColor:b},g=O(O({},!u&&y&&{color:y}),v),h=(null==t?void 0:t.value)===r,P=(null==t?void 0:t[r])||g;return o().createElement(o().Fragment,null,h?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(w,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),p("")}},o().createElement(s.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(s.MenuItem,{active:h,onClick:function(){return p(r,P)}},o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),h&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(j,{disableBackgroundAlpha:l,disableTextColor:u,disableShadow:f,themeStyle:P,onChange:function(e){return p(r,e)},onOpen:c})))}const E=j},725288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),a=r(480681),l=r(737275);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,n,i,c=(n=y,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(i){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function y(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(p(e=c.call.apply(c,[this].concat(r))),"getContainerNode",(function(t){return t?document.body:e.parentNode||document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=y,(r=[{key:"render",value:function(){var e=this,t=this.getContainerNode(this.props.useBody);return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(a.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:t,placement:this.props.placement,rootClose:!0,overlay:o().createElement(a.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(o().Component);m(b,"propTypes",{id:c().string,style:c().object,className:c().string,popoverClassName:c().string,placement:c().string,title:c().node,content:c().node,useBody:c().bool}),m(b,"defaultProps",{id:"",useBody:!1});const v=b},625311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(590937),c=r(867076),a=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}};const p=(0,c.branch)((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isDraggable}),(0,c.compose)((0,i.Ej)("row",f,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,i.GR)("row",{drop:function(e,t){var r=t.getItem();r.sortId!==e.sortId&&e.onSort(e.sortId,r.sortId,{id:e.id,containerId:e.containerId},{id:r.id,containerId:r.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var r=t.connectDragSource,n=t.connectDragPreview,i=t.connectDropTarget,c=t.isDragging,l=t.isOver,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),f=s.draggingItem&&s.draggingItem.sortId<s.sortId,p=s.draggingItem&&s.draggingItem.containerId===s.containerId,d=p&&c?" ms-dragging":"",m=p&&l?" ms-over":"",y=p&&f?" ms-above":" ms-below";return n(i(o().createElement("div",{className:"ms-dragg".concat(d).concat(m," ").concat(y)},o().createElement("div",null,o().createElement(e,u({},s,{connectDragSource:r,isDragging:c,isOver:l,onDrop:function(e){return e.stopPropagation()}}))))))}})))},245567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(124852),o=r.n(n),i=r(867076);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var a=["onSort","isDraggable","items","containerId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const f=(0,i.compose)((0,i.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var r=t.onSort,n=t.isDraggable,i=t.items,c=void 0===i?[]:i,u=t.containerId,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),p=c.map((function(e,t){return s(s({},e),{},{onSort:r,isDraggable:n,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,l({},s(s({},f),{},{isDraggable:n}),{items:p}))}})))},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(f,e);var t,r,n,i,c=(n=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(i){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),c.apply(this,arguments)}return t=f,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o().Component);f(d,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),f(d,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const m=d},983717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(675263),c=r.n(i),a=r(480681),l=r(24198),u=r(717621),s=r.n(u),f=r(290702);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){var t,r,i=e.value,c=e.format,a=e.onChangeColor,u=e.text,m=e.line,y=e.disabled,b=e.pickerProps,v=e.containerNode,g=e.onOpen,h=e.placement,O=(t=(0,n.useState)(),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=O[0],w=O[1],j=s()(i).toString();(0,n.useEffect)((function(){var e=S&&s()(S).toString();e&&j&&j!==e&&w(i)}),[j]);var P=(0,n.useRef)();P.current=function(e){g(e),e||y||!S||a(c?s()(S).toString(c):S)};var E,C,k=y?" ms-disabled":"";return o().createElement(f.Z,{disabled:y,onOpen:function(e){return P.current(e)},placement:h,containerNode:v,content:o().createElement(l.xS,p({},b,{className:"ms-sketch-picker",styles:{picker:{width:200,padding:"10px 10px 0",boxSizing:"initial"}},color:s()(S||i).toRgb(),onChange:function(e){return w(e.rgb)}}))},o().createElement("div",{className:"ms-color-picker".concat(k)},o().createElement("div",{className:"ms-color-picker-swatch",style:(E=S||i||"transparent",C=s()(E).toRgbString(),m?{boxSizing:"border-box",border:"4px solid ".concat(C),backgroundColor:"transparent"}:{color:"transparent"===E?"#000000":s().mostReadable(C,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:C})},u)))}m.propTypes={value:c().oneOfType([c().string,c().shape({r:c().number,g:c().number,b:c().number,a:c().number})]),format:c().string,onChangeColor:c().func,text:c().string,line:c().bool,disabled:c().bool,pickerProps:c().object,containerNode:c().oneOfType([c().node,c().func]),onOpen:c().function,placement:c().string},m.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){}};const y=m;function b(e){var t=e.color,r=e.format,n=e.line,i=e.onChangeColor,c=e.disableAlpha,l=e.containerNode,u=e.onOpen,s=e.disabled,f=e.presetColors,p=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(y,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:i,pickerProps:{disableAlpha:c,presetColors:f},containerNode:l,disabled:s,onOpen:u,placement:p}))}b.propTypes={color:c().oneOfType([c().string,c().shape({r:c().number,g:c().number,b:c().number,a:c().number})]),format:c().string,line:c().bool,onChangeColor:c().func,disableAlpha:c().bool,containerNode:c().node,disabled:c().bool,onOpen:c().func,presetColors:c().array,placement:c().string},b.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const v=b},290702:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(180307),c=r(974691),a=r.n(c),l=r(737275),u=r(623560),s=r.n(u);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["open","onOpen"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],l=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){var t=e.containerNode,r=void 0===t?function(){return document.querySelector("."+((0,l.u8)("themePrefix")||"ms2")+" > div")||document.body}:t,c=e.placement,u=e.content,f=e.children,p=e.open,d=e.onOpen,m=void 0===d?function(){}:d,v=e.disabled,g=10,h=s()(r)?r():r,O=(0,n.useRef)({picker:{opacity:0},arrow:{opacity:0},overlay:{}}),S=b((0,n.useState)(O.current),2),w=S[0],j=S[1],P=(0,n.useRef)(),E=(0,n.useRef)(),C=(0,n.useRef)(),k=(0,n.useCallback)((function(){var e,t,r,n,o,i;if(!p)return O.current;var l={picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};if("center"===c)return l;var u=null==P||null===(e=P.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),s=null==E||null===(r=E.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),f=null==C||null===(o=C.current)||void 0===o||null===(i=o.getBoundingClientRect)||void 0===i?void 0:i.call(o);if(u&&s&&f){var d,m,y,b,v=f.width,h=f.height,S=s.top,w=s.left,j=s.width,k=s.height,x=u.top,I=u.left,T=u.width,D=u.height,N=v+20<j,R=h+20<k,A={top:{filter:function(){return N&&x-S>h+g},styles:function(){var e=I+T/2-v/2-w;return{picker:{position:"absolute",top:x-h-g-S,left:a()(e,w+g,w+j-v-g)},overlay:{},arrow:{top:x+2,left:I+T/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return R&&w+j-(I+T)>v+g},styles:function(){var e=x-h/2-S+D/2,t=I+T+g-w;return{picker:{position:"absolute",top:a()(e,S+g,S+k-h-g),left:t},overlay:{},arrow:{top:x+D/2,left:I+T-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return N&&S+k-(x+D)>h+g},styles:function(){var e=I+T/2-v/2-w;return{picker:{position:"absolute",top:x+D+g-S,left:a()(e,w+g,w+j-v-g)},overlay:{},arrow:{top:x+D-2,left:I+T/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return R&&I-w>v+g},styles:function(){var e=x-h/2-S+D/2,t=I-v-g-w;return{picker:{position:"absolute",top:a()(e,S+g,S+k-h-g),left:t},overlay:{},arrow:{top:x+D/2,left:I+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=A&&null!==(d=A[c])&&void 0!==d&&null!==(m=d.filter)&&void 0!==m&&m.call(d))return null==A||null===(y=A[c])||void 0===y||null===(b=y.styles)||void 0===b?void 0:b.call(y);if("top"!==c&&A.top.filter())return A.top.styles();if("right"!==c&&A.right.filter())return A.right.styles();if("bottom"!==c&&A.bottom.filter())return A.bottom.styles();if("left"!==c&&A.left.filter())return A.left.styles()}return l}),[c,p]);(0,n.useEffect)((function(){j(k());var e=function(){return j(k())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[k]);var x=(0,n.useRef)();return x.current={open:p},(0,n.useEffect)((function(){function e(e){var t=C.current,r=P.current,n=e.target&&(t&&t.contains(e.target)||r&&r.contains(e.target));if(x.current.open&&!n){var o,i,c=e.clientX,a=e.clientY,l=(null==C||null===(o=C.current)||void 0===o||null===(i=o.getBoundingClientRect)||void 0===i?void 0:i.call(o))||{},u=l.left,s=l.top,f=l.width,p=l.height;void 0!==c&&void 0!==a&&!(c>=u&&c<=u+f&&a>=s&&a<=s+p)&&m(!1)}}return window.addEventListener("click",e,!0),window.addEventListener("wheel",e,!0),window.addEventListener("scroll",e,!0),function(){window.removeEventListener("click",e,!0),window.removeEventListener("wheel",e,!0),window.removeEventListener("scroll",e,!0)}}),[]),o().createElement(o().Fragment,null,o().createElement("div",{className:"ms-popover",ref:P},(0,n.cloneElement)(f,{onClick:function(e){v||(e.stopPropagation(),m(!p))}})),h&&p?(0,i.createPortal)(o().createElement("div",{className:"ms-popover-overlay",ref:E,style:y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none"},null==w?void 0:w.overlay)},o().createElement("div",{style:{position:"absolute",width:"100%",height:"100%",top:0,left:0}}),o().createElement("div",{ref:C,style:y({pointerEvents:"auto"},null==w?void 0:w.picker)},u),o().createElement("div",{className:"ms-popover-arrow",style:y({position:"absolute",borderTop:"".concat(12,"px solid transparent"),borderBottom:"".concat(12,"px solid transparent"),borderRight:"".concat(12,"px solid #ffffff"),filter:"drop-shadow(-4px 2px 4px rgba(0, 0, 0, 0.2))"},null==w?void 0:w.arrow)})),h):null)}const h=function(e){var t=e.open,r=e.onOpen,i=void 0===r?function(){}:r,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p),a=b((0,n.useState)(t),2),l=a[0],u=a[1];return o().createElement(g,d({},c,{open:l,onOpen:function(e){u(e),i(e)}}))}},166190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(227361),o=r.n(n),i=r(747037),c=r.n(i),a=r(281763),l=r.n(a),u=r(630998),s=r.n(u),f=r(313311),p=r.n(f),d=r(968630),m=r.n(d),y=r(701469),b=r.n(y),v=r(984596),g=r.n(v),h=r(545578),O=r.n(h),S=r(761868),w=r(192579),j=r(134990);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==P(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===P(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function e(t,r,n){var o=n.contents,i=n.background,c=n.id,a=n.resourceId,l=[],u=r+'{"id": "'.concat(c,'"}]');return a===t?[u]:(i&&i.resourceId===t&&l.push(u+".background"),o?o.reduce((function(r,n){return[].concat(x(r),x(e(t,u+".contents[",n)))}),l):l)},D={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.D7:var r=t.id,n=t.path,i=t.position,a=t.element,u=(0,w.Ll)("currentStory.".concat(n),e),f=o()(e,u,[]),d=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),c()(t)?n=s()(e,{id:t})+1:l()(t)&&(n=Math.min(t,e.length)),n}(f,i),y=f.slice();return y.splice(d,0,C({id:r},a)),(0,S.t8)(u,y,e);case j.mN:var v=t.id,h=t.mediaType,P=t.data;return(0,S.t8)("currentStory.resources",O()([{id:v,type:h,data:P}].concat(x(e.currentStory&&e.currentStory.resources||[])),"id"),e);case j.vb:return(0,S.t8)("mode",t.mode,e);case j.QK:var E=t.id,I=t.mediaType,N=t.data,R=(0,S.cc)("currentStory.resources",{id:E,type:I,data:N},{id:E},e);return I===w.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==w.ID.CAROUSEL})).reduce((function(e,t){return[].concat(x(e),x(T(E,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".map"),e);R=(0,S.t8)(r,void 0,R)})),R;case j.Ro:var A=t.id,Z=t.mediaType,B=(0,S.z6)("currentStory.resources",{id:A},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(x(e),x(T(A,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".resourceId"),e);if(B=(0,S.zN)(r,B),Z===w.Tr.MAP){var n=(0,w.Ll)("currentStory.".concat(t,".map"),e);B=(0,S.zN)(n,B)}})),B;case j.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case j.Dq:var L=t.path,z=(0,w.Ll)("currentStory.".concat(L),e),_=x(z),F=_.pop(),M=o()(e,_);return b()(M)?(c()(F)&&(F=parseInt(F,10)),(0,S.t8)(_,[].concat(x(M.slice(0,F)),x(M.slice(F+1))),e)):(0,S.zN)(z,e);case j.ij:var q,U,H,X,G,K=e.defaultSettings||{},W=t.story.settings||K,$=(null===(q=W)||void 0===q||null===(U=q.theme)||void 0===U?void 0:U.fontFamilies)||[],Y=null===(H=e.currentStory)||void 0===H||null===(X=H.settings)||void 0===X||null===(G=X.theme)||void 0===G?void 0:G.fontFamilies;return Y&&Y.length>0&&(W=(0,S.t8)("theme.fontFamilies",O()([].concat(x(Y),x($)),"family"),W)),(0,S.t8)("currentStory",C(C({},t.story),{},{settings:W}),e);case j.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case j.IY:var Q=t.control,J=t.value;return(0,S.t8)("controls.".concat(Q),J,e);case j.Zf:var V=t.resource,ee=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",V),(0,S.t8)("currentStory.settings.storyTitle",ee.storyTitle||V.name))(e);case j.si:case j.KT:return(0,S.zN)("errors.save",e);case j.SW:return(0,S.t8)("errors.save",g()(t.error),e);case j.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case j.NZ:var te=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!te,e);case j.c:var re=!e.isSettingsEnabled,ne=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",re),(0,S.t8)("oldSettings",re?ne:{}),(0,S.t8)("currentStory.settings",re?C({},ne):t.withSave?ne:e.oldSettings))(e);case j.wb:var oe=t.path,ie=t.mode,ce=t.options,ae=t.element,le=(0,w.Ll)("currentStory.".concat(oe),e),ue=o()(e,le);return m()(ue)&&m()(ae)&&"merge"===ie&&(ae=C(C({},ue),ae)),b()(ue)&&b()(ae)&&"merge"===ie&&(ae=null!=ce&&ce.uniqueByKey?O()([].concat(x(ue),x(ae)),ce.uniqueByKey):[].concat(x(ue),x(ae))),(0,S.t8)(le,ae,e);case j.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case j.un:if(t.columnId){var se=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.columnId})}));return se&&p()(se.contents,{id:t.columnId})?(0,S.t8)("currentPage",C(C({},e.currentPage),{},{columns:C(C({},e.currentPage.columns),{},k({},se.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",C(C({},e.currentPage),{},{sectionId:t.sectionId}),e);case j.Cx:var fe=t.status,pe=t.target,de=t.selector,me=void 0===de?"":de,ye=t.hideContent,be=void 0!==ye&&ye,ve=t.path,ge=fe?{target:pe,selector:me,hideContent:be,path:ve}:void 0;return(0,S.t8)("focusedContent",ge,e);case j.jr:return(0,S.t8)("pendingChanges",t.value,e);case j.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case j.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case j.W$:if(t.sectionId){var he=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.showContentId})}));return he&&p()(he.contents,{id:t.showContentId})?(0,S.t8)("currentStory",C(C({},e.currentStory),{},{sections:(0,w.eI)(e.currentStory.sections,t)}),e):e}return e;case j.mk:return(0,S.t8)("drawOptions",t.drawOptions,e);default:return e}}},531398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(197395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,i=void 0===o?6:o,c=e.position,a=void 0===c?"tc":c,l=e.message,u=void 0===l?"Error":l;return(0,n.vU)({title:r,autoDismiss:i,position:a,message:u})}}}]);