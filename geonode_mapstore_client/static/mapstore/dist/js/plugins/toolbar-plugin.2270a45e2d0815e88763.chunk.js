(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22794],{921914:(e,t,r)=>{"use strict";r.d(t,{XL:()=>o,km:()=>u,Ih:()=>i,Xw:()=>a,Pn:()=>c,DZ:()=>l,e8:()=>f,E0:()=>s,F9:()=>p,X_:()=>y,pb:()=>b,qb:()=>d,Re:()=>g,ih:()=>O,xy:()=>v,jL:()=>m,oz:()=>h,ph:()=>E,lF:()=>P,gG:()=>j,cb:()=>_,GI:()=>T,B1:()=>I,fv:()=>w,gc:()=>S,zX:()=>F,ZF:()=>N,Zb:()=>R,DW:()=>D,Xp:()=>A,Fm:()=>q,sV:()=>C,Mn:()=>G,LU:()=>M,XP:()=>L,WU:()=>k,JB:()=>x,g:()=>U,ws:()=>Y,HP:()=>z,aN:()=>V,Pg:()=>W,u0:()=>K,TM:()=>B,PM:()=>Z,lK:()=>X,sv:()=>Q,MO:()=>J,oO:()=>$,Mc:()=>ee,Zw:()=>te,RA:()=>re,am:()=>ne,ZM:()=>oe,wm:()=>ue,Y$:()=>ie,Qu:()=>ae,kT:()=>ce});var n=r(647310),o="LOAD_FEATURE_INFO",u="ERROR_FEATURE_INFO",i="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",g="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",v="FEATURE_INFO_CLICK",m="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",E="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",j="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",T="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",w="IDENTIFY:EDIT_LAYER_FEATURES",S="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",F="IDENTIFY:SET_MAP_TRIGGER",N="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",R="IDENTIFY:SET_SHOW_IN_MAP_POPUP",D="IDENTIFY:IDENTIFY_IS_MOUNTED",A="IDENTIFY:INIT_PLUGIN";function q(e,t,r,n,u){return{type:o,data:t,reqId:e,requestParams:r,layerMetadata:n,layer:u}}function C(e,t,r,n){return{type:u,error:t,reqId:e,requestParams:r,layerMetadata:n}}function G(e,t,r,n){return{type:i,reqId:e,exceptions:t,requestParams:r,layerMetadata:n}}function M(){return{type:g}}function L(){return{type:O}}function k(e,t){return{type:c,reqId:e,request:t}}function x(e,t,r,n){return{type:d,layer:e,request:t,metadata:r,queryableLayers:n}}function U(){return{type:l}}function Y(e){return{type:f,infoFormat:e}}function z(){return{type:s}}function V(){return{type:p}}function H(e){return{type:y,reverseGeocodeData:e.data}}function W(e){return function(t){n.Z.reverseGeocode(e).then((function(e){t(H(e))})).catch((function(e){t(H(e))}))}}function K(){return{type:b}}function B(){return{type:E}}function Z(e){return{type:P,status:e}}function X(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:v,point:e,layer:t,filterNameList:r,overrideParams:n,itemId:o}}function Q(e){return{type:m,point:e}}function J(e){return{type:h,enabled:e}}function $(e){return{type:j,index:e}}var ee=function(){return{type:_}},te=function(e){return{type:T,format:e}},re=function(e){return{type:I,showCoordinateEditor:e}},ne=function(e){return{type:w,layer:e}},oe=function(e){return{type:S,query:e}},ue=function(e){return{type:F,trigger:e}},ie=function(e){return{type:R,value:e}},ae=function(e){return{type:D,isMounted:e}},ce=function(e){return{type:A,cfg:e}}},647310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(375875),o=r.n(n),u=r(608575),i=r(727418),a=r.n(i),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(e,t){var r=a()({q:e},c,t||{}),n=u.format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},c),n=u.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},683520:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var n=r(667294),o=r.n(n),u=r(675263),i=r.n(u),a=r(533664),c=r(264317),l=r(731255),f=r(55105),s=r(22222),p=r(727418),y=r.n(p),b=r(658252);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var g=["children"],O=["children"];function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var o=F(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var N=function(e){_(r,e);var t=I(r);function r(){return E(this,r),t.apply(this,arguments)}return j(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=h(e,g);return o().createElement(c.CSSTransitionGroup,m({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),t)}}]),r}(o().Component),R=function(e){_(r,e);var t=I(r);function r(){return E(this,r),t.apply(this,arguments)}return j(r,[{key:"render",value:function(){var e=this.props,t=e.children,r=h(e,O);return o().createElement("div",r,t)}}]),r}(o().Component),D=function(e){_(r,e);var t=I(r);function r(){var e;E(this,r);for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return v(S(e=t.call.apply(t,[this].concat(o))),"getPanel",(function(e){return!0===e.panel?e.plugin:e.panel})),v(S(e),"getPanels",(function(){return e.getTools().filter((function(e){return e.panel})).map((function(t){return{name:t.name,title:t.title,cfg:t.cfg,panel:e.getPanel(t),items:t.items,wrap:t.wrap||!1}}))})),v(S(e),"getTools",(function(){var t=e.props.items.filter((function(e){return!e.alwaysVisible}))||[];return e.props.items.filter((function(r){return r.alwaysVisible||1===t.length||e.props.allVisible})).filter((function(t){return!t.showWhen||t.showWhen(e.props)})).map((function(e,t){return y()({},e,{position:e.position||t})})).sort((function(e,t){return e.position-t.position}))})),e}return j(r,[{key:"render",value:function(){var e=this.props.disableAnimation?R:N;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:e,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);v(D,"propTypes",{id:i().string,tools:i().array,mapType:i().string,style:i().object,panelStyle:i().object,panelClassName:i().string,disableAnimation:i().bool,active:i().string,items:i().array,allVisible:i().bool,layout:i().string,stateSelector:i().string,buttonStyle:i().string,buttonSize:i().string,pressedButtonStyle:i().string,btnConfig:i().object}),v(D,"contextTypes",{messages:i().object,router:i().object}),v(D,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});var A=function(e){return(0,s.P1)([function(t){return t.controls&&t.controls[e]&&t.controls[e].active},function(t){return t.controls&&t.controls[e]&&t.controls[e].expanded},l.Rd,function(e){return(0,f.ic)(e,{right:!0,bottom:!0})}],(function(t,r,n,o){return{active:t,allVisible:r,stateSelector:e,layout:n?"horizontal":"vertical",style:o}}))};const q={ToolbarPlugin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,a.connect)(A(e))(D)},reducers:{controls:r(925108).Z}}},925108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(782904),o=r(727418),u=r.n(o),i=r(921914);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return u()({},e,l({},t.control,u()({},e[t.control],l({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?u()({},e,l({},t.control,u()({},e[t.control],l({},t.property,void 0)))):u()({},e,l({},t.control,u()({},e[t.control],l({},t.property,t.value))));case n.dc:return u()({},e,l({},t.control,u()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),a=o.reduce((function(t,r){return u()(t,l({},r,u()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return u()({},e,a);case i.DW:return c(c({},e),{},{info:c(c({},e.info),{},{available:t.isMounted})});default:return e}}},731255:(e,t,r)=>{"use strict";r.d(t,{u$:()=>P,_w:()=>j,eO:()=>_,kG:()=>T,P3:()=>I,bq:()=>F,LB:()=>N,b4:()=>R,M0:()=>D,Li:()=>A,Rd:()=>q,g5:()=>C,Sj:()=>G,o:()=>M,eK:()=>L,jY:()=>k,ND:()=>x,OK:()=>U,tU:()=>Y,ou:()=>z,DK:()=>V,Gl:()=>H,uz:()=>W,Ci:()=>K,Ae:()=>B,gz:()=>Z,He:()=>X,P4:()=>Q,kd:()=>J,TC:()=>$,nq:()=>ee,Vf:()=>te,lg:()=>re});var n=r(91175),o=r.n(n),u=r(227361),i=r.n(u),a=r(513218),c=r.n(a),l=r(675110),f=r(378889),s=r(308316),p=r(552259),y=r(196958),b=r(285148),d=r(274621),g=r(93152),O=r(824260);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=l.CA,P=function(e){return i()(e,"featuregrid.selectedLayer")},j=function(e){return e&&e.featuregrid&&e.featuregrid.select},_=function(e){return e&&e.featuregrid&&e.featuregrid.changes},T=function(e){return e&&e.featuregrid&&e.featuregrid.newFeatures},I=function(e){return o()(j(e))},w=function(e){var t=(0,O.Qs)(e);if(t){var r=(0,f.findGeometryProperty)(t);return r&&r.localType}return null},S=["Geometry","GeometryCollection"],F=function(e){return!o()(S.filter((function(t){return w(e)===t})))},N=function(e){return _(e)&&_(e).length>0},R=function(e){return T(e)&&T(e).length>0},D=function(e){return e&&e.featuregrid&&e.featuregrid.filters},A=function(e){return E(e,P(e))},q=function(e){return e&&e.featuregrid&&e.featuregrid.open},C=function(e,t){return i()(D(e),t)},G=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.title||e.name}(E(e,P(e)));return c()(t)?t[(0,s.Pz)(e)]||t.default||"":t},M=function(e){return((0,O.L)(e)||[]).map((function(t){var r=function(e,t){return i()(e,"featuregrid.attributes[".concat(t.name||t.attribute,"]"))}(e,t);return r?m(m({},t),r):t}))},L=function(e){return e&&e.featuregrid&&e.featuregrid.mode},k=function(e){return(j(e)||[]).length},x=function(e){return(0,y.rK)(_(e))},U=function(e){return function(e){var t=I(e);if(t){var r=(0,y.rK)(_(e));return!((!r[t.id]||null===r[t.id].geometry)&&(r[t.id]&&null===r[t.id].geometry||t._new&&o()(T(e))&&null===o()(T(e)).geometry||(!t._new||!o()(T(e))||null===o()(T(e)).geometry)&&null===t.geometry))}return!1}(e)},Y=function(e){return i()(e,"featuregrid.showAgain",!1)},z=function(e){if(i()(e,"featuregrid.showTimeSync",!1)){var t=P(e);return(0,b.jo)({id:t},"time")(e)}return null},V=function(e){return i()(e,"featuregrid.timeSync",!1)},H=function(e){return i()(e,"featuregrid.showPopoverSync",!0)},W=function(e){return e&&e.featuregrid&&e.featuregrid.saving},K=function(e){return e&&e.featuregrid&&e.featuregrid.saved},B=function(e){return e&&e.featuregrid&&e.featuregrid.drawing},Z=function(e){return i()(e,"featuregrid.multiselect",!1)},X=function(e){return(0,p.isSimpleGeomType)(w(e))},Q=function(e){return e.featuregrid&&e.featuregrid.dockSize},J=function(e){var t=E(e,P(e));return t&&t.name||""},$=function(e){var t=function(e){return i()(E(e,P(e)),"params")}(e);return{viewParams:t&&(t.VIEWPARAMS||t.viewParams||t.viewparams),cqlFilter:t&&(t.CQL_FILTER||t.cqlFilter||t.cql_filter)}},ee=function(e){var t=(0,d.L3)(e),r=function(e){return i()(e,"featuregrid.editingAllowedRoles",["ADMIN"])}(e)||["ADMIN"],n=function(e){return e&&e.featuregrid&&e.featuregrid.canEdit}(e);return(-1!==r.indexOf(t)||n)&&!(0,g.c0)(e)},te=function(e){return i()(e,"featuregrid.pagination")},re=function(e){return i()(e,"featuregrid.useLayerFilter",!0)}},55105:(e,t,r)=>{"use strict";r.d(t,{Nr:()=>s,ic:()=>p,Jz:()=>b,VM:()=>d,CF:()=>g});var n=r(91175),o=r.n(n),u=r(800827),i=r(552259);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return e.maplayout&&e.maplayout.layout||{}},s=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=f(e);return r&&Object.keys(r).filter((function(e){return t[e]})).reduce((function(e,t){return c(c({},e),{},l({},t,r[t]))}),{})||{}},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=f(e),n=!!o()(t.filter((function(e){return r[e.key]})).map((function(e){return"not"===e.type?r[e.key]!==e.value&&r[e.key]:r[e.key]===e.value})));return n},b=function(e){return y(e,[{key:"right",value:658}])},d=function(e){return y(e,[{key:"bottom",value:30,type:"not"}])},g=function(e){var t=(0,u.Od)(e),r=s(e);return r&&t&&t.size&&{left:(0,i.parseLayoutValue)(r.left,t.size.width),bottom:(0,i.parseLayoutValue)(r.bottom,t.size.height),right:(0,i.parseLayoutValue)(r.right,t.size.width),top:(0,i.parseLayoutValue)(r.top,t.size.height)}}},824260:(e,t,r)=>{"use strict";r.d(t,{qj:()=>v,Bu:()=>m,UM:()=>h,X1:()=>E,L:()=>P,HY:()=>j,Mz:()=>_,F0:()=>T,dc:()=>I,b0:()=>w,hk:()=>S,Qs:()=>F,gy:()=>N,M7:()=>R,VD:()=>D});var n=r(414293),o=r.n(n),u=r(227361),i=r.n(u),a=r(91175),c=r.n(a),l=r(701469),f=r.n(l),s=r(630998),p=r.n(s);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return i()(e,"query.filterObj.featureTypeName")},O=function(e){return function(t){return i()(t,'query.featureTypes["'.concat(e,'"]'))}},v=function(e,t){return i()(O(t)(e),"original")},m=function(e){return e&&e.query&&e.query.searchUrl},h=function(e){return e&&e.query&&e.query.url},E=function(e){return e&&e.query&&e.query.filterObj},P=function(e){return i()(O(g(e))(e),"attributes")},j=function(e){return i()(e,"query.typeName")},_=function(e){return i()(e,"query.result.features")},T=function(e){var t=i()(e,"query.result");return b(b({},t),{},{features:(t&&t.features||[]).filter((function(e){return!o()(e.geometry)}))})},I=function(e,t){var r=e&&e.query&&e.query.result&&e.query.result.features;return c()(r.filter((function(e){return e.id===t})))},w={startIndex:function(e){return i()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return i()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return i()(e,"query.result.features.length")},totalFeatures:function(e){return i()(e,"query.result.totalFeatures")}},S=function(e,t){var r=O(t)(e);return!!(r&&r.attributes&&r.geometry&&r.original)},F=function(e){return v(e,g(e))},N=function(e){return i()(e,"query.featureLoading")},R=function(e){return i()(e,"query.syncWmsFilter",!1)},D=function(e){var t=i()(e,"query.filterObj.crossLayerFilter"),r=i()(e,"query.filterObj.spatialField"),n=i()(e,"query.filterObj.filterFields");return!!(n&&c()(n)||r&&(r.method&&r.operation&&r.geometry||f()(r)&&p()(r,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||t&&t.collectGeometries&&t.operation)}},887157:(e,t,r)=>{var n=r(640554),o=r(588958);e.exports=function(e,t,r,u){var i=e.length;for((r=n(r))<0&&(r=-r>i?0:i+r),(u=void 0===u||u>i?i:n(u))<0&&(u+=i),u=r>u?0:o(u);r<u;)e[r++]=t;return e}},819873:(e,t,r)=>{var n=r(887157),o=r(816612);e.exports=function(e,t,r,u){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&o(e,t,r)&&(r=0,u=i),n(e,t,r,u)):[]}},588958:(e,t,r)=>{var n=r(829750),o=r(640554);e.exports=function(e){return e?n(o(e),0,4294967295):0}},264317:(e,t,r)=>{"use strict";var n=u(r(1174)),o=u(r(692381));function u(e){return e&&e.__esModule?e:{default:e}}e.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}}}]);