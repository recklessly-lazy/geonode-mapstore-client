(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49528],{70646:(n,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>N});var t=e(93379),o=e.n(t),i=e(89010);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=e(27418),p=e.n(a),c=e(71703),s=e(22222),u=e(75263),l=e.n(u),f=e(24852),b=e.n(f),d=e(72986),m=e.n(d);function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function y(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,j(t.key),t)}}function h(n,r,e){return r=w(r),function(n,r){if(r&&("object"===g(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,v()?Reflect.construct(r,e||[],w(n).constructor):r.apply(n,e))}function v(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(v=function(){return!!n})()}function w(n){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},w(n)}function x(n,r){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},x(n,r)}function O(n,r,e){return(r=j(r))in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function j(n){var r=function(n,r){if("object"!=g(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!=g(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==g(r)?r:String(r)}e.e(79509).then(e.bind(e,79509));var P=function(n){function r(){return function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),h(this,r,arguments)}var e,t;return function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&x(n,r)}(r,n),e=r,(t=[{key:"render",value:function(){return this.props.loading?b().createElement("div",{className:this.props.className,id:this.props.id},b().createElement(m(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),r}(b().Component);O(P,"propTypes",{id:l().string,loading:l().bool,className:l().string,spinner:l().string}),O(P,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const _=P;var k=e(75110),S=(0,s.P1)([k.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),E=(0,c.connect)(S)(_);const N={MapLoadingPlugin:p()(E,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},89010:(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var t=e(23645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".msgapi #mapstore-globalspinner  {\r\n    width: 28px;\r\n    height: 28px;\r\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\r\n    background-color: white;\r\n    background-size: 80px 80px;\r\n    background-repeat: no-repeat;\r\n    border-radius: 4px;\r\n    border: 1px solid #999;\r\n    z-index: 10;\r\n    top: 90px;\r\n    left: 2px;\r\n    position: absolute;\r\n    margin: 8px;\r\n}\r\n\r\n.msgapi #mapstore-globalspinner .circle-wrapper {\r\n    margin-left: 2px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\r\n    position: static;\r\n    width: 42px;\r\n    margin: 0;\r\n    margin-top: 0;\r\n    height: 35px;\r\n    box-shadow: none;\r\n}\r\n\r\n.msgapi .ms2-loading .sk-circle-wrapper {\r\n     width: 30px;\r\n     height: 30px;\r\n }\r\n",""]);const i=o}}]);