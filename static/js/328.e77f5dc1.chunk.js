(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[328],{888:function(e,t,r){"use strict";var n=r(9047);function c(){}function o(){}o.resetWarningCache=c,e.exports=function(){function e(e,t,r,c,o,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:c};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6355:function(e,t,r){"use strict";r.d(t,{rHK:function(){return c}});var n=r(9983);function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"}}]})(e)}},5862:function(){},7231:function(e,t,r){"use strict";r.d(t,{y:function(){return h},Z:function(){return f}});var n=r(9439);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=r(2791),l=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=["children"],p=u.createContext({});function f(e){for(var t,r,c,o=e.count,s=void 0===o?1:o,f=e.wrapper,h=e.className,v=e.containerClassName,y=e.containerTestId,d=e.circle,b=void 0!==d&&d,m=e.style,O=a(e,l),g=u.useContext(p),w=i({},O),j=0,P=Object.entries(O);j<P.length;j++){var k=(0,n.Z)(P[j],2),E=k[0];"undefined"===typeof k[1]&&delete w[E]}var _=i(i(i({},g),w),{},{circle:b}),C=i(i({},m),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,c=e.height,o=e.borderRadius,i=e.circle,a=e.direction,u=e.duration,l=e.enableAnimation,s=void 0===l||l,p={};return"rtl"===a&&(p["--animation-direction"]="reverse"),"number"===typeof u&&(p["--animation-duration"]="".concat(u,"s")),s||(p["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(p.width=n),"string"!==typeof c&&"number"!==typeof c||(p.height=c),"string"!==typeof o&&"number"!==typeof o||(p.borderRadius=o),i&&(p.borderRadius="50%"),"undefined"!==typeof t&&(p["--base-color"]=t),"undefined"!==typeof r&&(p["--highlight-color"]=r),p}(_)),T="react-loading-skeleton";h&&(T+=" ".concat(h));for(var x=null!==(t=_.inline)&&void 0!==t&&t,z=[],H=Math.ceil(s),R=0;R<H;R++){var S=C;if(H>s&&R===H-1){var I=null!==(r=S.width)&&void 0!==r?r:"100%",N=s%1,D="number"===typeof I?I*N:"calc(".concat(I," * ").concat(N,")");S=i(i({},S),{},{width:D})}var V=u.createElement("span",{className:T,style:S,key:R},"\u200c");x?z.push(V):z.push(u.createElement(u.Fragment,{key:R},V,u.createElement("br",null)))}return u.createElement("span",{className:v,"data-testid":y,"aria-live":"polite","aria-busy":null===(c=_.enableAnimation)||void 0===c||c},f?z.map((function(e,t){return u.createElement(f,{key:t},e)})):z)}function h(e){var t=e.children,r=a(e,s);return u.createElement(p.Provider,{value:r},t)}}}]);
//# sourceMappingURL=328.e77f5dc1.chunk.js.map