(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[75531],{20640:(t,e,o)=>{"use strict";var n=o(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var o,i,a,s,l,c,u=!1;e||(e={}),o=e.debug||!1;try{if(a=n(),s=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=t,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[e.format]||r.default;window.clipboardData.setData(i,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),i=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,t)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return u}},74691:(t,e,o)=>{var n=o(29750),r=o(14841);t.exports=function(t,e,o){return void 0===o&&(o=e,e=void 0),void 0!==o&&(o=(o=r(o))==o?o:0),void 0!==e&&(e=(e=r(e))==e?e:0),n(r(t),e,o)}},23279:(t,e,o)=>{var n=o(13218),r=o(7771),i=o(14841),a=Math.max,s=Math.min;t.exports=function(t,e,o){var l,c,u,p,f,d,h=0,g=!1,y=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var o=l,n=c;return l=c=void 0,h=e,p=t.apply(n,o)}function m(t){var o=t-d;return void 0===d||o>=e||o<0||y&&t-h>=u}function x(){var t=r();if(m(t))return b(t);f=setTimeout(x,function(t){var o=e-(t-d);return y?s(o,u-(t-h)):o}(t))}function b(t){return f=void 0,v&&l?_(t):(l=c=void 0,p)}function k(){var t=r(),o=m(t);if(l=arguments,c=this,d=t,o){if(void 0===f)return function(t){return h=t,f=setTimeout(x,e),g?_(t):p}(d);if(y)return clearTimeout(f),f=setTimeout(x,e),_(d)}return void 0===f&&(f=setTimeout(x,e)),p}return e=i(e)||0,n(o)&&(g=!!o.leading,u=(y="maxWait"in o)?a(i(o.maxWait)||0,e):u,v="trailing"in o?!!o.trailing:v),k.cancel=function(){void 0!==f&&clearTimeout(f),h=0,l=d=c=f=void 0},k.flush=function(){return void 0===f?p:b(r())},k}},7771:(t,e,o)=>{var n=o(55639);t.exports=function(){return n.Date.now()}},18369:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var n=o(30006),r=o(29639);function i(t){var e=!1;if(t.type==n.Z.DBLCLICK){var o=t.originalEvent,i=t.map,a=t.coordinate,s=o.shiftKey?-this.delta_:this.delta_,l=i.getView();(0,r.FW)(l,s,a,this.duration_),t.preventDefault(),e=!0}return!e}const a=function(t){function e(e){t.call(this,{handleEvent:i});var o=e||{};this.delta_=o.delta?o.delta:1,this.duration_=void 0!==o.duration?o.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(r.ZP)},15565:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});var n=o(98185),r=o(78288),i=function(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new n.default({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:r.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding};i.prototype.clone=function(){return new i({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0})},i.prototype.getOverflow=function(){return this.overflow_},i.prototype.getFont=function(){return this.font_},i.prototype.getMaxAngle=function(){return this.maxAngle_},i.prototype.getPlacement=function(){return this.placement_},i.prototype.getOffsetX=function(){return this.offsetX_},i.prototype.getOffsetY=function(){return this.offsetY_},i.prototype.getFill=function(){return this.fill_},i.prototype.getRotateWithView=function(){return this.rotateWithView_},i.prototype.getRotation=function(){return this.rotation_},i.prototype.getScale=function(){return this.scale_},i.prototype.getStroke=function(){return this.stroke_},i.prototype.getText=function(){return this.text_},i.prototype.getTextAlign=function(){return this.textAlign_},i.prototype.getTextBaseline=function(){return this.textBaseline_},i.prototype.getBackgroundFill=function(){return this.backgroundFill_},i.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},i.prototype.getPadding=function(){return this.padding_},i.prototype.setOverflow=function(t){this.overflow_=t},i.prototype.setFont=function(t){this.font_=t},i.prototype.setMaxAngle=function(t){this.maxAngle_=t},i.prototype.setOffsetX=function(t){this.offsetX_=t},i.prototype.setOffsetY=function(t){this.offsetY_=t},i.prototype.setPlacement=function(t){this.placement_=t},i.prototype.setFill=function(t){this.fill_=t},i.prototype.setRotation=function(t){this.rotation_=t},i.prototype.setScale=function(t){this.scale_=t},i.prototype.setStroke=function(t){this.stroke_=t},i.prototype.setText=function(t){this.text_=t},i.prototype.setTextAlign=function(t){this.textAlign_=t},i.prototype.setTextBaseline=function(t){this.textBaseline_=t},i.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},i.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},i.prototype.setPadding=function(t){this.padding_=t};const a=i},78288:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});const n={POINT:"point",LINE:"line"}},74300:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CopyToClipboard=void 0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),i=s(o(24852)),a=s(o(20640));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}e.CopyToClipboard=function(t){function e(){var t,o,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return o=n=l(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),n.onClick=function(t){var e=n.props,o=e.text,r=e.onCopy,s=e.children,l=e.options,c=i.default.Children.only(s),u=(0,a.default)(o,l);r&&r(o,u),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)},l(n,o)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this.props,e=(t.text,t.onCopy,t.options,t.children),o=function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["text","onCopy","options","children"]),r=i.default.Children.only(e);return i.default.cloneElement(r,n({},o,{onClick:this.onClick}))}}]),e}(i.default.PureComponent)},74855:(t,e,o)=>{"use strict";var n=o(74300).CopyToClipboard;t.exports=n},11742:t=>{t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||o.forEach((function(e){t.addRange(e)})),e&&e.focus()}}}}]);