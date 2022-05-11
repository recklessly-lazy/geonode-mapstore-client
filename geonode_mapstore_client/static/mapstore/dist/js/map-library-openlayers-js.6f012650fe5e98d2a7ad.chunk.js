/*! For license information please see map-library-openlayers-js.6f012650fe5e98d2a7ad.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[16037,31351],{389912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=n(124852),i=n(843033);const a=function(e){var t=e.map,n=e.onBoxEnd,a=e.status;return(0,o.useEffect)((function(){"start"===a?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===a&&t.removeInteraction(r)}),[a]),(0,o.useEffect)((function(){r&&r.on("boxend",(function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.pointerEvent.ctrlKey,metaKey:e.mapBrowserEvent.pointerEvent.metaKey}})}))}),[a]),null}},126105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(124852),o=n.n(r),i=n(180307),a=n.n(i),u=n(675263),s=n.n(u),p=n(193409),c=n(747037),l=n.n(c),f=n(925064),m=n(821751);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function O(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver((function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))}));return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r},M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(s,e);var t,n,r,i,u=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(i){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function s(){var e;h(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return E(P(e=u.call.apply(u,[this].concat(n))),"onPopupClose",(function(t){e.props.onPopupClose(t)})),E(P(e),"renderPopups",(function(){return e.preparePopups().map((function(t){var n,r=t.popup,i=t.id,u=t.component,s=t.content,p=t.props,c=t.containerStyle,d=r.getElement(),v=l()(u)&&m.default[u]||u;return v?n=o().isValidElement(v)&&v||o().createElement(v,p):s&&(n=f.FP(s)?o().createElement("div",{dangerouslySetInnerHTML:{__html:s}}):s),d&&a().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:c},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)}))})),E(P(e),"update",(function(){(e._popups||[]).map((function(e){var t=e.popup;t.setElement(t.getElement())}))})),E(P(e),"convertToClick",(function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)})),E(P(e),"preparePopups",(function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach((function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)})),e._popups=r.map((function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,a=e.position.coordinates,u=e.className,s=e.maxWidth,c=void 0===s?t:s,l=e.maxHeight,m=void 0===l?n:l,d=e.autoPan,v=void 0!==d&&d,h=e.autoPanMargin,b=void 0===h?20:h,g=e.offset,O=void 0===g?[0,0]:g,P=e.autoPanAnimation,w=void 0===P?{duration:200}:P,E=c>t?t:c,M=m>n?n:m,j=f.fH(r,u),S=new p.Z({id:r,element:j,autoPan:v,offset:O,autoPanMargin:b,autoPanAnimation:w,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:a});return o.addOverlay(S),y({popup:S,observer:q(S,j,{coordinates:a}),containerStyle:{maxWidth:E,maxHeight:M}},e)})),e._popups})),E(P(e),"stopPropagationOnPointerMove",(function(e){e.stopPropagation()})),e}return t=s,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o().Component);E(M,"propTypes",{map:s().object,popups:s().arrayOf(s().object),onPopupClose:s().func}),E(M,"defaultProps",{popups:[],onPopupClose:function(){}})},434637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(){return n(103498).default,{Map:n(790596).Z,Layer:n(145697).Z,Feature:n(130072).Z,MeasurementSupport:n(505904).Z,Overview:n(722404).Z,ScaleBar:n(809056).Z,DrawSupport:n(706909).Z,PopupSupport:n(126105).Z,BoxSelectionSupport:n(389912).Z}}},821751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDENTIFY_POPUP:()=>w,default:()=>E});var r=n(124852),o=n.n(r),i=n(173014),a=n(11196),u=n(867076),s=n(171703),p=n(22222),c=n(307877),l=n(921914),f=n(542872),m=n(701469),d=n.n(m),v=n(352353),y=n.n(v),h=n(979870),b=n(800827),g=(0,u.compose)((0,s.connect)((0,p.P1)(c.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,u.defaultProps)({index:0,responses:[]})),O=(0,p.P1)([c.q7,c.o9,c.OK,c.us,c.x0,b.hp,c.vR],(function(e,t,n,r,o,i,a){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:a}}));const P=(0,u.compose)((0,s.connect)(O),(0,u.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,d()(n)&&n[t]||n)},header:h.Z}),g,a.Yy,a.mI,(0,i.Z)((function(e){var t=e.loaded;return y()(t)})))(f.Z);var w="identify";const E={identify:P}},532425:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(675263),o=n.n(r),i=n(124852),a=n.n(i);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){return e>100?"full":e>40?"medium":"small"},l=function(e){var t=e.size,n=e.style,r=void 0===n?{}:n,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},r)},!i&&a().createElement("div",{className:"mapstore-".concat(c(t),"-size-loader")}))};l.propTypes={size:o().number,className:o().string,style:o().object};const f=l},808797:(e,t,n)=>{"use strict";n.d(t,{rp:()=>s,Ov:()=>c,wd:()=>l,L0:()=>f}),n(701469);var r=n(91175),o=n.n(r),i=n(807654),a=n.n(i);function u(e){var t=Math.floor(e),n=60*(e-t),r=Math.floor(n),o=60*(n-r);return t+"° "+r+"' "+Math.floor(o)+"'' "}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.measureTrueBearing,r=void 0!==n&&n,o=t.fractionDigits,i=void 0===o?0:o,a="";if(r){var s="";e>=0&&e<10?s="00":e>10&&e<100&&(s="0");var p=i>0?e.toFixed(i):Math.floor(e);a=s+p+"°"}else e>=0&&e<90?a="N "+u(e)+"E":e>90&&e<=180?a="S "+u(180-e)+"E":e>180&&e<270?a="S "+u(e-180)+"W":e>=270&&e<=360&&(a="N "+u(360-e)+"W");return a}var p={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return p[t]&&p[t][n]?e*p[t][n]:e}var l=function(e){return!a()(parseFloat(e[0]))&&!a()(parseFloat(e[1]))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.type,r=t;if("LineString"===n){if((r=t.filter(l)).length<2)return[]}else if("Polygon"===n){if((r=o()(t).filter(l)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},925064:(e,t,n)=>{"use strict";n.d(t,{fH:()=>i,FP:()=>a,R3:()=>u});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},u=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else a(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},423923:(e,t,n)=>{"use strict";n.d(t,{A4:()=>s,u3:()=>p});var r=n(623560),o=n.n(r);function i(e,t,n){var r=void 0!==n?e.toFixed(n):""+e,o=r.indexOf(".");return(o=-1===o?r.length:o)>t?r:new Array(1+t-o).join("0")+r}var a={standard:function(e){return function(t){return"EPSG:4326"===t?(n="x"===e?"EW":"NS",function(e){var t,r=(360*(t=(e+180)%360)<0?t+360:t)-180,o=Math.abs(3600*r),a=Math.floor(o/3600),u=Math.floor((o-3600*a)/60),s=o-3600*a-60*u;return(s=Math.ceil(s))>=60&&(s=0,u+=1),u>=60&&(u=0,a+=1),a+"° "+i(u,2)+"′ "+i(s,2,0)+"″"+(0===r?"":" "+n.charAt(r<0?1:0))}):function(e){return String(Math.round(e))};var n}}};function u(e,t,n){return o()(n)?n(e,t):a[n||"standard"](t)(e)}function s(e,t){return u(e,"x",t)}function p(e,t){return u(e,"y",t)}},680645:(e,t)=>{t.read=function(e,t,n,r,o){var i,a,u=8*o-r-1,s=(1<<u)-1,p=s>>1,c=-7,l=n?o-1:0,f=n?-1:1,m=e[t+l];for(l+=f,i=m&(1<<-c)-1,m>>=-c,c+=u;c>0;i=256*i+e[t+l],l+=f,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=r;c>0;a=256*a+e[t+l],l+=f,c-=8);if(0===i)i=1-p;else{if(i===s)return a?NaN:1/0*(m?-1:1);a+=Math.pow(2,r),i-=p}return(m?-1:1)*a*Math.pow(2,i-r)},t.write=function(e,t,n,r,o,i){var a,u,s,p=8*i-o-1,c=(1<<p)-1,l=c>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,m=r?0:i-1,d=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),(t+=a+l>=1?f/s:f*Math.pow(2,1-l))*s>=2&&(a++,s/=2),a+l>=c?(u=0,a=c):a+l>=1?(u=(t*s-1)*Math.pow(2,o),a+=l):(u=t*Math.pow(2,l-1)*Math.pow(2,o),a=0));o>=8;e[n+m]=255&u,m+=d,u/=256,o-=8);for(a=a<<o|u,p+=o;p>0;e[n+m]=255&a,m+=d,a/=256,p-=8);e[n+m-d]|=128*v}},389179:(e,t,n)=>{var r=n(555639),o=n(640554),i=n(14841),a=n(479833),u=r.isFinite,s=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=i(e),(n=null==n?0:s(o(n),292))&&u(e)){var r=(a(e)+"e").split("e"),p=t(r[0]+"e"+(+r[1]+n));return+((r=(a(p)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},59854:(e,t,n)=>{var r=n(389179)("round");e.exports=r},393386:(e,t,n)=>{var r=n(121078),o=n(105976),i=n(345652),a=n(229246),u=o((function(e){return i(r(e,1,a,!0))}));e.exports=u}}]);