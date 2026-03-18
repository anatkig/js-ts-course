function pd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dl={exports:{}},xo={},ql={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),hd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Td=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),ca=Symbol.iterator;function Sd(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var _l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ll=Object.assign,zl={};function yn(e,t,n){this.props=e,this.context=t,this.refs=zl,this.updater=n||_l}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wl(){}Wl.prototype=yn.prototype;function fs(e,t,n){this.props=e,this.context=t,this.refs=zl,this.updater=n||_l}var hs=fs.prototype=new Wl;hs.constructor=fs;Ll(hs,yn.prototype);hs.isPureReactComponent=!0;var da=Array.isArray,Fl=Object.prototype.hasOwnProperty,ms={current:null},Bl={key:!0,ref:!0,__self:!0,__source:!0};function $l(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Fl.call(t,r)&&!Bl.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ar,type:e,key:i,ref:s,props:o,_owner:ms.current}}function Ed(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pa=/\/+/g;function Bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cd(""+e.key):t.toString(36)}function Ur(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ar:case hd:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Bo(s,0):r,da(o)?(n="",e!=null&&(n=e.replace(pa,"$&/")+"/"),Ur(o,t,n,"",function(u){return u})):o!=null&&(ys(o)&&(o=Ed(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(pa,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",da(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Bo(i,a);s+=Ur(i,t,n,l,o)}else if(l=Sd(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Bo(i,a++),s+=Ur(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yr(e,t,n){if(e==null)return e;var r=[],o=0;return Ur(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Ad(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Mr={transition:null},jd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ms};function Hl(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=yn;I.Fragment=md;I.Profiler=gd;I.PureComponent=fs;I.StrictMode=yd;I.Suspense=kd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;I.act=Hl;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ll({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Fl.call(t,l)&&!Bl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ar,type:e.type,key:o,ref:i,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};I.createElement=$l;I.createFactory=function(e){var t=$l.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xd,render:e}};I.isValidElement=ys;I.lazy=function(e){return{$$typeof:bd,_payload:{_status:-1,_result:e},_init:Ad}};I.memo=function(e,t){return{$$typeof:Td,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};I.unstable_act=Hl;I.useCallback=function(e,t){return ce.current.useCallback(e,t)};I.useContext=function(e){return ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};I.useEffect=function(e,t){return ce.current.useEffect(e,t)};I.useId=function(){return ce.current.useId()};I.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ce.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};I.useRef=function(e){return ce.current.useRef(e)};I.useState=function(e){return ce.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ce.current.useTransition()};I.version="18.3.1";ql.exports=I;var k=ql.exports;const Vl=fd(k),Pd=pd({__proto__:null,default:Vl},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=k,Rd=Symbol.for("react.element"),Od=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Ud=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Md={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Id.call(t,r)&&!Md.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rd,type:e,key:i,ref:s,props:o,_owner:Ud.current}}xo.Fragment=Od;xo.jsx=Kl;xo.jsxs=Kl;Dl.exports=xo;var c=Dl.exports,yi={},Gl={exports:{}},Te={},Ql={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,N){var O=C.length;C.push(N);e:for(;0<O;){var V=O-1>>>1,Y=C[V];if(0<o(Y,N))C[V]=N,C[O]=Y,O=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],O=C.pop();if(O!==N){C[0]=O;e:for(var V=0,Y=C.length,hr=Y>>>1;V<hr;){var St=2*(V+1)-1,Fo=C[St],Et=St+1,mr=C[Et];if(0>o(Fo,O))Et<Y&&0>o(mr,Fo)?(C[V]=mr,C[Et]=O,V=Et):(C[V]=Fo,C[St]=O,V=St);else if(Et<Y&&0>o(mr,O))C[V]=mr,C[Et]=O,V=Et;else break e}}return N}function o(C,N){var O=C.sortIndex-N.sortIndex;return O!==0?O:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],m=1,h=null,y=3,w=!1,g=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=C)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function v(C){if(x=!1,f(C),!g)if(n(l)!==null)g=!0,zo(S);else{var N=n(u);N!==null&&Wo(v,N.startTime-C)}}function S(C,N){g=!1,x&&(x=!1,p(P),P=-1),w=!0;var O=y;try{for(f(N),h=n(l);h!==null&&(!(h.expirationTime>N)||C&&!ge());){var V=h.callback;if(typeof V=="function"){h.callback=null,y=h.priorityLevel;var Y=V(h.expirationTime<=N);N=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(l)&&r(l),f(N)}else r(l);h=n(l)}if(h!==null)var hr=!0;else{var St=n(u);St!==null&&Wo(v,St.startTime-N),hr=!1}return hr}finally{h=null,y=O,w=!1}}var A=!1,j=null,P=-1,z=5,R=-1;function ge(){return!(e.unstable_now()-R<z)}function wn(){if(j!==null){var C=e.unstable_now();R=C;var N=!0;try{N=j(!0,C)}finally{N?xn():(A=!1,j=null)}}else A=!1}var xn;if(typeof d=="function")xn=function(){d(wn)};else if(typeof MessageChannel<"u"){var ua=new MessageChannel,dd=ua.port2;ua.port1.onmessage=wn,xn=function(){dd.postMessage(null)}}else xn=function(){T(wn,0)};function zo(C){j=C,A||(A=!0,xn())}function Wo(C,N){P=T(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,zo(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(y){case 1:case 2:case 3:var N=3;break;default:N=y}var O=y;y=N;try{return C()}finally{y=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=y;y=C;try{return N()}finally{y=O}},e.unstable_scheduleCallback=function(C,N,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=O+Y,C={id:m++,callback:N,priorityLevel:C,startTime:O,expirationTime:Y,sortIndex:-1},O>V?(C.sortIndex=O,t(u,C),n(l)===null&&C===n(u)&&(x?(p(P),P=-1):x=!0,Wo(v,O-V))):(C.sortIndex=Y,t(l,C),g||w||(g=!0,zo(S))),C},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(C){var N=y;return function(){var O=y;y=N;try{return C.apply(this,arguments)}finally{y=O}}}})(Jl);Ql.exports=Jl;var Dd=Ql.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=k,ke=Dd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yl=new Set,Fn={};function Lt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Fn[e]=t,e=0;e<t.length;e++)Yl.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gi=Object.prototype.hasOwnProperty,_d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};function Ld(e){return gi.call(ha,e)?!0:gi.call(fa,e)?!1:_d.test(e)?ha[e]=!0:(fa[e]=!0,!1)}function zd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wd(e,t,n,r){if(t===null||typeof t>"u"||zd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var gs=/[\-:]([a-z])/g;function vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gs,vs);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gs,vs);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gs,vs);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ws(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wd(t,n,o,r)&&(n=null),r||o===null?Ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),xs=Symbol.for("react.strict_mode"),vi=Symbol.for("react.profiler"),Xl=Symbol.for("react.provider"),Zl=Symbol.for("react.context"),ks=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),ma=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,$o;function Pn(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Ho=!1;function Vo(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Fd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Bt:return"Portal";case vi:return"Profiler";case xs:return"StrictMode";case wi:return"Suspense";case xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zl:return(e.displayName||"Context")+".Consumer";case Xl:return(e._context.displayName||"Context")+".Provider";case ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:ki(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return ki(e(t))}catch{}}return null}function Bd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ki(t);case 8:return t===xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=$d(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&ws(e,"checked",t,!1)}function bi(e,t){ru(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Si(e,t.type,n):t.hasOwnProperty("defaultValue")&&Si(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Si(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Nn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Nn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function ou(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function ji(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,nn=null,rn=null;function xa(e){if(e=cr(e)){if(typeof Ni!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Eo(t),Ni(e.stateNode,e.type,t))}}function uu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function cu(){if(nn){var e=nn,t=rn;if(rn=nn=null,xa(e),t)for(e=0;e<t.length;e++)xa(t[e])}}function du(e,t){return e(t)}function pu(){}var Ko=!1;function fu(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return du(e,t,n)}finally{Ko=!1,(nn!==null||rn!==null)&&(pu(),cu())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ri=!1;if(Ge)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Ri=!1}function Kd(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Un=!1,Kr=null,Gr=!1,Oi=null,Gd={onError:function(e){Un=!0,Kr=e}};function Qd(e,t,n,r,o,i,s,a,l){Un=!1,Kr=null,Kd.apply(Gd,arguments)}function Jd(e,t,n,r,o,i,s,a,l){if(Qd.apply(this,arguments),Un){if(Un){var u=Kr;Un=!1,Kr=null}else throw Error(b(198));Gr||(Gr=!0,Oi=u)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ka(e){if(zt(e)!==e)throw Error(b(188))}function Yd(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ka(o),e;if(i===r)return ka(o),t;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function mu(e){return e=Yd(e),e!==null?yu(e):null}function yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yu(e);if(t!==null)return t;e=e.sibling}return null}var gu=ke.unstable_scheduleCallback,Ta=ke.unstable_cancelCallback,Xd=ke.unstable_shouldYield,Zd=ke.unstable_requestPaint,K=ke.unstable_now,ep=ke.unstable_getCurrentPriorityLevel,Ss=ke.unstable_ImmediatePriority,vu=ke.unstable_UserBlockingPriority,Qr=ke.unstable_NormalPriority,tp=ke.unstable_LowPriority,wu=ke.unstable_IdlePriority,ko=null,ze=null;function np(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:ip,rp=Math.log,op=Math.LN2;function ip(e){return e>>>=0,e===0?32:31-(rp(e)/op|0)|0}var xr=64,kr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Rn(a):(i&=s,i!==0&&(r=Rn(i)))}else s=n&~o,s!==0?r=Rn(s):i!==0&&(r=Rn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),o=1<<n,r|=e[n],t&=~o;return r}function sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ue(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=sp(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function lp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ue(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,Cs,bu,Su,Eu,Ui=!1,Tr=[],at=null,lt=null,ut=null,Hn=new Map,Vn=new Map,nt=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ba(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function bn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cp(e,t,n,r,o){switch(t){case"focusin":return at=bn(at,e,t,n,r,o),!0;case"dragenter":return lt=bn(lt,e,t,n,r,o),!0;case"mouseover":return ut=bn(ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hn.set(i,bn(Hn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Vn.set(i,bn(Vn.get(i)||null,e,t,n,r,o)),!0}return!1}function Cu(e){var t=Pt(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=hu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){bu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pi=r,n.target.dispatchEvent(r),Pi=null}else return t=cr(n),t!==null&&Cs(t),e.blockedOn=n,!1;t.shift()}return!0}function Sa(e,t,n){Dr(e)&&n.delete(t)}function dp(){Ui=!1,at!==null&&Dr(at)&&(at=null),lt!==null&&Dr(lt)&&(lt=null),ut!==null&&Dr(ut)&&(ut=null),Hn.forEach(Sa),Vn.forEach(Sa)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ui||(Ui=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,dp)))}function Kn(e){function t(o){return Sn(o,e)}if(0<Tr.length){Sn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&Sn(at,e),lt!==null&&Sn(lt,e),ut!==null&&Sn(ut,e),Hn.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&nt.shift()}var on=Xe.ReactCurrentBatchConfig,Yr=!0;function pp(e,t,n,r){var o=M,i=on.transition;on.transition=null;try{M=1,As(e,t,n,r)}finally{M=o,on.transition=i}}function fp(e,t,n,r){var o=M,i=on.transition;on.transition=null;try{M=4,As(e,t,n,r)}finally{M=o,on.transition=i}}function As(e,t,n,r){if(Yr){var o=Mi(e,t,n,r);if(o===null)oi(e,t,r,Xr,n),ba(e,r);else if(cp(o,e,t,n,r))r.stopPropagation();else if(ba(e,r),t&4&&-1<up.indexOf(e)){for(;o!==null;){var i=cr(o);if(i!==null&&Tu(i),i=Mi(e,t,n,r),i===null&&oi(e,t,r,Xr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else oi(e,t,r,null,n)}}var Xr=null;function Mi(e,t,n,r){if(Xr=null,e=bs(r),e=Pt(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ep()){case Ss:return 1;case vu:return 4;case Qr:case tp:return 16;case wu:return 536870912;default:return 16}default:return 16}}var ot=null,js=null,qr=null;function ju(){if(qr)return qr;var e,t=js,n=t.length,r,o="value"in ot?ot.value:ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Ea(){return!1}function be(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?br:Ea,this.isPropagationStopped=Ea,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=be(gn),ur=B({},gn,{view:0,detail:0}),hp=be(ur),Qo,Jo,En,To=B({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Qo=e.screenX-En.screenX,Jo=e.screenY-En.screenY):Jo=Qo=0,En=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),Ca=be(To),mp=B({},To,{dataTransfer:0}),yp=be(mp),gp=B({},ur,{relatedTarget:0}),Yo=be(gp),vp=B({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),wp=be(vp),xp=B({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=be(xp),Tp=B({},gn,{data:0}),Aa=be(Tp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ep={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ep[e])?!!t[e]:!1}function Ns(){return Cp}var Ap=B({},ur,{key:function(e){if(e.key){var t=bp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=be(Ap),Pp=B({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=be(Pp),Np=B({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Rp=be(Np),Op=B({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=be(Op),Up=B({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=be(Up),Dp=[9,13,27,32],Rs=Ge&&"CompositionEvent"in window,Mn=null;Ge&&"documentMode"in document&&(Mn=document.documentMode);var qp=Ge&&"TextEvent"in window&&!Mn,Pu=Ge&&(!Rs||Mn&&8<Mn&&11>=Mn),Pa=" ",Na=!1;function Nu(e,t){switch(e){case"keyup":return Dp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function _p(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(Na=!0,Pa);case"textInput":return e=t.data,e===Pa&&Na?null:e;default:return null}}function Lp(e,t){if(Ht)return e==="compositionend"||!Rs&&Nu(e,t)?(e=ju(),qr=js=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pu&&t.locale!=="ko"?null:t.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zp[e.type]:t==="textarea"}function Ou(e,t,n,r){uu(r),t=Zr(t,"onChange"),0<t.length&&(n=new Ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Gn=null;function Wp(e){Bu(e,0)}function bo(e){var t=Gt(e);if(nu(t))return e}function Fp(e,t){if(e==="change")return t}var Iu=!1;if(Ge){var Xo;if(Ge){var Zo="oninput"in document;if(!Zo){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),Zo=typeof Oa.oninput=="function"}Xo=Zo}else Xo=!1;Iu=Xo&&(!document.documentMode||9<document.documentMode)}function Ia(){Dn&&(Dn.detachEvent("onpropertychange",Uu),Gn=Dn=null)}function Uu(e){if(e.propertyName==="value"&&bo(Gn)){var t=[];Ou(t,Gn,e,bs(e)),fu(Wp,t)}}function Bp(e,t,n){e==="focusin"?(Ia(),Dn=t,Gn=n,Dn.attachEvent("onpropertychange",Uu)):e==="focusout"&&Ia()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Gn)}function Hp(e,t){if(e==="click")return bo(t)}function Vp(e,t){if(e==="input"||e==="change")return bo(t)}function Kp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Kp;function Qn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!gi.call(t,o)||!De(e[o],t[o]))return!1}return!0}function Ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=Ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ua(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e){var t=Du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Os(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ma(n,i);var s=Ma(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=Ge&&"documentMode"in document&&11>=document.documentMode,Vt=null,Di=null,qn=null,qi=!1;function Da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qi||Vt==null||Vt!==Vr(r)||(r=Vt,"selectionStart"in r&&Os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&Qn(qn,r)||(qn=r,r=Zr(Di,"onSelect"),0<r.length&&(t=new Ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},ei={},qu={};Ge&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function So(e){if(ei[e])return ei[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qu)return ei[e]=t[n];return e}var _u=So("animationend"),Lu=So("animationiteration"),zu=So("animationstart"),Wu=So("transitionend"),Fu=new Map,qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Fu.set(e,t),Lt(t,[e])}for(var ti=0;ti<qa.length;ti++){var ni=qa[ti],Jp=ni.toLowerCase(),Yp=ni[0].toUpperCase()+ni.slice(1);vt(Jp,"on"+Yp)}vt(_u,"onAnimationEnd");vt(Lu,"onAnimationIteration");vt(zu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Wu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function _a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;_a(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;_a(o,a,u),i=l}}}if(Gr)throw e=Oi,Gr=!1,Oi=null,e}function q(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function ri(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Er]){e[Er]=!0,Yl.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||ri(n,!1,e),ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,ri("selectionchange",!1,t))}}function $u(e,t,n,r){switch(Au(t)){case 1:var o=pp;break;case 4:o=fp;break;default:o=As}n=o.bind(null,t,n,e),o=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function oi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Pt(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}fu(function(){var u=i,m=bs(n),h=[];e:{var y=Fu.get(e);if(y!==void 0){var w=Ps,g=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":w=jp;break;case"focusin":g="focus",w=Yo;break;case"focusout":g="blur",w=Yo;break;case"beforeblur":case"afterblur":w=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Rp;break;case _u:case Lu:case zu:w=wp;break;case Wu:w=Ip;break;case"scroll":w=hp;break;case"wheel":w=Mp;break;case"copy":case"cut":case"paste":w=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ja}var x=(t&4)!==0,T=!x&&e==="scroll",p=x?y!==null?y+"Capture":null:y;x=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=$n(d,p),v!=null&&x.push(Yn(d,v,f)))),T)break;d=d.return}0<x.length&&(y=new w(y,g,null,n,m),h.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==Pi&&(g=n.relatedTarget||n.fromElement)&&(Pt(g)||g[Qe]))break e;if((w||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=u,g=g?Pt(g):null,g!==null&&(T=zt(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(x=Ca,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=ja,v="onPointerLeave",p="onPointerEnter",d="pointer"),T=w==null?y:Gt(w),f=g==null?y:Gt(g),y=new x(v,d+"leave",w,n,m),y.target=T,y.relatedTarget=f,v=null,Pt(m)===u&&(x=new x(p,d+"enter",g,n,m),x.target=f,x.relatedTarget=T,v=x),T=v,w&&g)t:{for(x=w,p=g,d=0,f=x;f;f=Ft(f))d++;for(f=0,v=p;v;v=Ft(v))f++;for(;0<d-f;)x=Ft(x),d--;for(;0<f-d;)p=Ft(p),f--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=Ft(x),p=Ft(p)}x=null}else x=null;w!==null&&La(h,y,w,x,!1),g!==null&&T!==null&&La(h,T,g,x,!0)}}e:{if(y=u?Gt(u):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var S=Fp;else if(Ra(y))if(Iu)S=Vp;else{S=$p;var A=Bp}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(S=Hp);if(S&&(S=S(e,u))){Ou(h,S,n,m);break e}A&&A(e,y,u),e==="focusout"&&(A=y._wrapperState)&&A.controlled&&y.type==="number"&&Si(y,"number",y.value)}switch(A=u?Gt(u):window,e){case"focusin":(Ra(A)||A.contentEditable==="true")&&(Vt=A,Di=u,qn=null);break;case"focusout":qn=Di=Vt=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Da(h,n,m);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Da(h,n,m)}var j;if(Rs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ht?Nu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pu&&n.locale!=="ko"&&(Ht||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ht&&(j=ju()):(ot=m,js="value"in ot?ot.value:ot.textContent,Ht=!0)),A=Zr(u,P),0<A.length&&(P=new Aa(P,e,null,n,m),h.push({event:P,listeners:A}),j?P.data=j:(j=Ru(n),j!==null&&(P.data=j)))),(j=qp?_p(e,n):Lp(e,n))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(m=new Aa("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=j))}Bu(h,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$n(e,n),i!=null&&r.unshift(Yn(e,i,o)),i=$n(e,t),i!=null&&r.push(Yn(e,i,o))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=$n(n,i),l!=null&&s.unshift(Yn(n,l,a))):o||(l=$n(n,i),l!=null&&s.push(Yn(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Zp=/\r\n?/g,ef=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(Zp,`
`).replace(ef,"")}function Cr(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(b(425))}function eo(){}var _i=null,Li=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(rf)}:Wi;function rf(e){setTimeout(function(){throw e})}function ii(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Kn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Le="__reactFiber$"+vn,Xn="__reactProps$"+vn,Qe="__reactContainer$"+vn,Fi="__reactEvents$"+vn,of="__reactListeners$"+vn,sf="__reactHandles$"+vn;function Pt(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fa(e);e!==null;){if(n=e[Le])return n;e=Fa(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Le]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Eo(e){return e[Xn]||null}var Bi=[],Qt=-1;function wt(e){return{current:e}}function _(e){0>Qt||(e.current=Bi[Qt],Bi[Qt]=null,Qt--)}function D(e,t){Qt++,Bi[Qt]=e.current,e.current=t}var gt={},ae=wt(gt),he=wt(!1),Ut=gt;function un(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function to(){_(he),_(ae)}function Ba(e,t,n){if(ae.current!==gt)throw Error(b(168));D(ae,t),D(he,n)}function Hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,Bd(e)||"Unknown",o));return B({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Ut=ae.current,D(ae,e),D(he,he.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Hu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,_(he),_(ae),D(ae,e)):_(he),D(he,n)}var Be=null,Co=!1,si=!1;function Vu(e){Be===null?Be=[e]:Be.push(e)}function af(e){Co=!0,Vu(e)}function xt(){if(!si&&Be!==null){si=!0;var e=0,t=M;try{var n=Be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,Co=!1}catch(o){throw Be!==null&&(Be=Be.slice(e+1)),gu(Ss,xt),o}finally{M=t,si=!1}}return null}var Jt=[],Yt=0,ro=null,oo=0,Se=[],Ee=0,Mt=null,$e=1,He="";function Ct(e,t){Jt[Yt++]=oo,Jt[Yt++]=ro,ro=e,oo=t}function Ku(e,t,n){Se[Ee++]=$e,Se[Ee++]=He,Se[Ee++]=Mt,Mt=e;var r=$e;e=He;var o=32-Ue(r)-1;r&=~(1<<o),n+=1;var i=32-Ue(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,$e=1<<32-Ue(t)+o|n<<o|r,He=i+e}else $e=1<<i|n<<o|r,He=e}function Is(e){e.return!==null&&(Ct(e,1),Ku(e,1,0))}function Us(e){for(;e===ro;)ro=Jt[--Yt],Jt[Yt]=null,oo=Jt[--Yt],Jt[Yt]=null;for(;e===Mt;)Mt=Se[--Ee],Se[Ee]=null,He=Se[--Ee],Se[Ee]=null,$e=Se[--Ee],Se[Ee]=null}var xe=null,we=null,L=!1,Ie=null;function Gu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ha(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,we=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:$e,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,we=null,!0):!1;default:return!1}}function $i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hi(e){if(L){var t=we;if(t){var n=t;if(!Ha(e,t)){if($i(e))throw Error(b(418));t=ct(n.nextSibling);var r=xe;t&&Ha(e,t)?Gu(r,n):(e.flags=e.flags&-4097|2,L=!1,xe=e)}}else{if($i(e))throw Error(b(418));e.flags=e.flags&-4097|2,L=!1,xe=e}}}function Va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Ar(e){if(e!==xe)return!1;if(!L)return Va(e),L=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=we)){if($i(e))throw Qu(),Error(b(418));for(;t;)Gu(e,t),t=ct(t.nextSibling)}if(Va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=xe?ct(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=we;e;)e=ct(e.nextSibling)}function cn(){we=xe=null,L=!1}function Ms(e){Ie===null?Ie=[e]:Ie.push(e)}var lf=Xe.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ka(e){var t=e._init;return t(e._payload)}function Ju(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=ht(p,d),p.index=0,p.sibling=null,p}function i(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,v){return d===null||d.tag!==6?(d=fi(f,p.mode,v),d.return=p,d):(d=o(d,f),d.return=p,d)}function l(p,d,f,v){var S=f.type;return S===$t?m(p,d,f.props.children,v,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ka(S)===d.type)?(v=o(d,f.props),v.ref=Cn(p,d,f),v.return=p,v):(v=Hr(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,d,f),v.return=p,v)}function u(p,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=hi(f,p.mode,v),d.return=p,d):(d=o(d,f.children||[]),d.return=p,d)}function m(p,d,f,v,S){return d===null||d.tag!==7?(d=It(f,p.mode,v,S),d.return=p,d):(d=o(d,f),d.return=p,d)}function h(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fi(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return f=Hr(d.type,d.key,d.props,null,p.mode,f),f.ref=Cn(p,null,d),f.return=p,f;case Bt:return d=hi(d,p.mode,f),d.return=p,d;case et:var v=d._init;return h(p,v(d._payload),f)}if(Nn(d)||kn(d))return d=It(d,p.mode,f,null),d.return=p,d;jr(p,d)}return null}function y(p,d,f,v){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(p,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:return f.key===S?l(p,d,f,v):null;case Bt:return f.key===S?u(p,d,f,v):null;case et:return S=f._init,y(p,d,S(f._payload),v)}if(Nn(f)||kn(f))return S!==null?null:m(p,d,f,v,null);jr(p,f)}return null}function w(p,d,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,a(d,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gr:return p=p.get(v.key===null?f:v.key)||null,l(d,p,v,S);case Bt:return p=p.get(v.key===null?f:v.key)||null,u(d,p,v,S);case et:var A=v._init;return w(p,d,f,A(v._payload),S)}if(Nn(v)||kn(v))return p=p.get(f)||null,m(d,p,v,S,null);jr(d,v)}return null}function g(p,d,f,v){for(var S=null,A=null,j=d,P=d=0,z=null;j!==null&&P<f.length;P++){j.index>P?(z=j,j=null):z=j.sibling;var R=y(p,j,f[P],v);if(R===null){j===null&&(j=z);break}e&&j&&R.alternate===null&&t(p,j),d=i(R,d,P),A===null?S=R:A.sibling=R,A=R,j=z}if(P===f.length)return n(p,j),L&&Ct(p,P),S;if(j===null){for(;P<f.length;P++)j=h(p,f[P],v),j!==null&&(d=i(j,d,P),A===null?S=j:A.sibling=j,A=j);return L&&Ct(p,P),S}for(j=r(p,j);P<f.length;P++)z=w(j,p,P,f[P],v),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?P:z.key),d=i(z,d,P),A===null?S=z:A.sibling=z,A=z);return e&&j.forEach(function(ge){return t(p,ge)}),L&&Ct(p,P),S}function x(p,d,f,v){var S=kn(f);if(typeof S!="function")throw Error(b(150));if(f=S.call(f),f==null)throw Error(b(151));for(var A=S=null,j=d,P=d=0,z=null,R=f.next();j!==null&&!R.done;P++,R=f.next()){j.index>P?(z=j,j=null):z=j.sibling;var ge=y(p,j,R.value,v);if(ge===null){j===null&&(j=z);break}e&&j&&ge.alternate===null&&t(p,j),d=i(ge,d,P),A===null?S=ge:A.sibling=ge,A=ge,j=z}if(R.done)return n(p,j),L&&Ct(p,P),S;if(j===null){for(;!R.done;P++,R=f.next())R=h(p,R.value,v),R!==null&&(d=i(R,d,P),A===null?S=R:A.sibling=R,A=R);return L&&Ct(p,P),S}for(j=r(p,j);!R.done;P++,R=f.next())R=w(j,p,P,R.value,v),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?P:R.key),d=i(R,d,P),A===null?S=R:A.sibling=R,A=R);return e&&j.forEach(function(wn){return t(p,wn)}),L&&Ct(p,P),S}function T(p,d,f,v){if(typeof f=="object"&&f!==null&&f.type===$t&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:e:{for(var S=f.key,A=d;A!==null;){if(A.key===S){if(S=f.type,S===$t){if(A.tag===7){n(p,A.sibling),d=o(A,f.props.children),d.return=p,p=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&Ka(S)===A.type){n(p,A.sibling),d=o(A,f.props),d.ref=Cn(p,A,f),d.return=p,p=d;break e}n(p,A);break}else t(p,A);A=A.sibling}f.type===$t?(d=It(f.props.children,p.mode,v,f.key),d.return=p,p=d):(v=Hr(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,d,f),v.return=p,p=v)}return s(p);case Bt:e:{for(A=f.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=o(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=hi(f,p.mode,v),d.return=p,p=d}return s(p);case et:return A=f._init,T(p,d,A(f._payload),v)}if(Nn(f))return g(p,d,f,v);if(kn(f))return x(p,d,f,v);jr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,f),d.return=p,p=d):(n(p,d),d=fi(f,p.mode,v),d.return=p,p=d),s(p)):n(p,d)}return T}var dn=Ju(!0),Yu=Ju(!1),io=wt(null),so=null,Xt=null,Ds=null;function qs(){Ds=Xt=so=null}function _s(e){var t=io.current;_(io),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){so=e,Ds=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(so===null)throw Error(b(308));Xt=e,so.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Nt=null;function Ls(e){Nt===null?Nt=[e]:Nt.push(e)}function Xu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ls(t)):(n.next=o.next,o.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Je(e,n)}return o=r.interleaved,o===null?(t.next=t,Ls(r)):(t.next=o.next,o.next=t),r.interleaved=t,Je(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var o=e.updateQueue;tt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==s&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=l))}if(i!==null){var h=o.baseState;s=0,m=u=l=null,a=i;do{var y=a.lane,w=a.eventTime;if((r&y)===y){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,x=a;switch(y=t,w=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(w,h,y);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,y=typeof g=="function"?g.call(w,h,y):g,y==null)break e;h=B({},h,y);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[a]:y.push(a))}else w={eventTime:w,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=w,l=h):m=m.next=w,s|=y;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;y=a,a=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(m===null&&(l=h),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qt|=s,e.lanes=s,e.memoizedState=h}}function Qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var dr={},We=wt(dr),Zn=wt(dr),er=wt(dr);function Rt(e){if(e===dr)throw Error(b(174));return e}function Ws(e,t){switch(D(er,t),D(Zn,e),D(We,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ci(t,e)}_(We),D(We,t)}function pn(){_(We),_(Zn),_(er)}function ec(e){Rt(er.current);var t=Rt(We.current),n=Ci(t,e.type);t!==n&&(D(Zn,e),D(We,n))}function Fs(e){Zn.current===e&&(_(We),_(Zn))}var W=wt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function Bs(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var zr=Xe.ReactCurrentDispatcher,li=Xe.ReactCurrentBatchConfig,Dt=0,F=null,Q=null,X=null,uo=!1,_n=!1,tr=0,uf=0;function oe(){throw Error(b(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Hs(e,t,n,r,o,i){if(Dt=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?ff:hf,e=n(r,o),_n){i=0;do{if(_n=!1,tr=0,25<=i)throw Error(b(301));i+=1,X=Q=null,t.updateQueue=null,zr.current=mf,e=n(r,o)}while(_n)}if(zr.current=co,t=Q!==null&&Q.next!==null,Dt=0,X=Q=F=null,uo=!1,t)throw Error(b(300));return e}function Vs(){var e=tr!==0;return tr=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?F.memoizedState=X=e:X=X.next=e,X}function Pe(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=X===null?F.memoizedState:X.next;if(t!==null)X=t,Q=e;else{if(e===null)throw Error(b(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?F.memoizedState=X=e:X=X.next=e}return X}function nr(e,t){return typeof t=="function"?t(e):t}function ui(e){var t=Pe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Q,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var m=u.lane;if((Dt&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,F.lanes|=m,qt|=m}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,De(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,F.lanes|=i,qt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ci(e){var t=Pe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);De(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tc(){}function nc(e,t){var n=F,r=Pe(),o=t(),i=!De(r.memoizedState,o);if(i&&(r.memoizedState=o,fe=!0),r=r.queue,Ks(ic.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,rr(9,oc.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(b(349));Dt&30||rc(n,t,o)}return o}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oc(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&ac(e)}function ic(e,t,n){return n(function(){sc(t)&&ac(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ac(e){var t=Je(e,1);t!==null&&Me(t,e,1,-1)}function Ja(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,F,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lc(){return Pe().memoizedState}function Wr(e,t,n,r){var o=_e();F.flags|=e,o.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var o=Pe();r=r===void 0?null:r;var i=void 0;if(Q!==null){var s=Q.memoizedState;if(i=s.destroy,r!==null&&$s(r,s.deps)){o.memoizedState=rr(t,n,i,r);return}}F.flags|=e,o.memoizedState=rr(1|t,n,i,r)}function Ya(e,t){return Wr(8390656,8,e,t)}function Ks(e,t){return Ao(2048,8,e,t)}function uc(e,t){return Ao(4,2,e,t)}function cc(e,t){return Ao(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pc(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,dc.bind(null,t,e),n)}function Gs(){}function fc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mc(e,t,n){return Dt&21?(De(n,t)||(n=xu(),F.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function cf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=li.transition;li.transition={};try{e(!1),t()}finally{M=n,li.transition=r}}function yc(){return Pe().memoizedState}function df(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))vc(t,n);else if(n=Xu(e,t,n,r),n!==null){var o=ue();Me(n,e,r,o),wc(n,t,r)}}function pf(e,t,n){var r=ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))vc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,De(a,s)){var l=t.interleaved;l===null?(o.next=o,Ls(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Xu(e,t,o,r),n!==null&&(o=ue(),Me(n,e,r,o),wc(n,t,r))}}function gc(e){var t=e.alternate;return e===F||t!==null&&t===F}function vc(e,t){_n=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Es(e,n)}}var co={readContext:je,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},ff={readContext:je,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=df.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Ja,useDebugValue:Gs,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Ja(!1),t=e[0];return e=cf.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,o=_e();if(L){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ee===null)throw Error(b(349));Dt&30||rc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ya(ic.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,oc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_e(),t=ee.identifierPrefix;if(L){var n=He,r=$e;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hf={readContext:je,useCallback:fc,useContext:je,useEffect:Ks,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:hc,useReducer:ui,useRef:lc,useState:function(){return ui(nr)},useDebugValue:Gs,useDeferredValue:function(e){var t=Pe();return mc(t,Q.memoizedState,e)},useTransition:function(){var e=ui(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:yc,unstable_isNewReconciler:!1},mf={readContext:je,useCallback:fc,useContext:je,useEffect:Ks,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:hc,useReducer:ci,useRef:lc,useState:function(){return ci(nr)},useDebugValue:Gs,useDeferredValue:function(e){var t=Pe();return Q===null?t.memoizedState=e:mc(t,Q.memoizedState,e)},useTransition:function(){var e=ci(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:yc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ki(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),i=Ke(r,o);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,o),t!==null&&(Me(t,e,o,r),Lr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),i=Ke(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,o),t!==null&&(Me(t,e,o,r),Lr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),o=Ke(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(Me(t,e,r,n),Lr(t,e,r))}};function Xa(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(o,i):!0}function xc(e,t,n){var r=!1,o=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=me(t)?Ut:ae.current,r=t.contextTypes,i=(r=r!=null)?un(e,o):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Gi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=me(t)?Ut:ae.current,o.context=un(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&jo.enqueueReplaceState(o,o.state,null),ao(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Fd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function di(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function kc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,is=r),Qi(e,t)},n}function Tc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Qi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qi(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function el(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function tl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var gf=Xe.ReactCurrentOwner,fe=!1;function le(e,t,n,r){t.child=e===null?Yu(t,null,n,r):dn(t,e.child,n,r)}function rl(e,t,n,r,o){n=n.render;var i=t.ref;return sn(t,o),r=Hs(e,t,n,r,i,o),n=Vs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(L&&n&&Is(t),t.flags|=1,le(e,t,r,o),t.child)}function ol(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!na(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bc(e,t,i,r,o)):(e=Hr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(s,r)&&e.ref===t.ref)return Ye(e,t,o)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function bc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ye(e,t,o)}return Ji(e,t,n,r,o)}function Sc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(en,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(en,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(en,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(en,ve),ve|=r;return le(e,t,o,n),t.child}function Ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,o){var i=me(n)?Ut:ae.current;return i=un(t,i),sn(t,o),n=Hs(e,t,n,r,i,o),r=Vs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ye(e,t,o)):(L&&r&&Is(t),t.flags|=1,le(e,t,n,o),t.child)}function il(e,t,n,r,o){if(me(n)){var i=!0;no(t)}else i=!1;if(sn(t,o),t.stateNode===null)Fr(e,t),xc(t,n,r),Gi(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=je(u):(u=me(n)?Ut:ae.current,u=un(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Za(t,s,r,u),tt=!1;var y=t.memoizedState;s.state=y,ao(t,r,s,o),l=t.memoizedState,a!==r||y!==l||he.current||tt?(typeof m=="function"&&(Ki(t,n,m,r),l=t.memoizedState),(a=tt||Xa(t,n,a,r,y,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zu(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Re(t.type,a),s.props=u,h=t.pendingProps,y=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=je(l):(l=me(n)?Ut:ae.current,l=un(t,l));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||y!==l)&&Za(t,s,r,l),tt=!1,y=t.memoizedState,s.state=y,ao(t,r,s,o);var g=t.memoizedState;a!==h||y!==g||he.current||tt?(typeof w=="function"&&(Ki(t,n,w,r),g=t.memoizedState),(u=tt||Xa(t,n,u,r,y,g,l)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Yi(e,t,n,r,i,o)}function Yi(e,t,n,r,o,i){Ec(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&$a(t,n,!1),Ye(e,t,i);r=t.stateNode,gf.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):le(e,t,a,i),t.memoizedState=r.state,o&&$a(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?Ba(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ba(e,t.context,!1),Ws(e,t.containerInfo)}function sl(e,t,n,r,o){return cn(),Ms(o),t.flags|=256,le(e,t,n,r),t.child}var Xi={dehydrated:null,treeContext:null,retryLane:0};function Zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,n){var r=t.pendingProps,o=W.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(W,o&1),e===null)return Hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ro(s,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Zi(n),t.memoizedState=Xi,e):Qs(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return vf(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ht(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=ht(a,i):(i=It(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Zi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Xi,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&Ms(r),dn(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=di(Error(b(422))),Pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ro({mode:"visible",children:r.children},o,0,null),i=It(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dn(t,e.child,null,s),t.child.memoizedState=Zi(s),t.memoizedState=Xi,i);if(!(t.mode&1))return Pr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=di(i,r,void 0),Pr(e,t,s,r)}if(a=(s&e.childLanes)!==0,fe||a){if(r=ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Je(e,o),Me(r,e,o,-1))}return ta(),r=di(Error(b(421))),Pr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rf.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,we=ct(o.nextSibling),xe=t,L=!0,Ie=null,e!==null&&(Se[Ee++]=$e,Se[Ee++]=He,Se[Ee++]=Mt,$e=e.id,He=e.overflow,Mt=t),t=Qs(t,r.children),t.flags|=4096,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function pi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function jc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(le(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pi(t,!0,n,null,i);break;case"together":pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:Cc(t),cn();break;case 5:ec(t);break;case 1:me(t.type)&&no(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Ac(e,t,n):(D(W,W.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Sc(e,t,n)}return Ye(e,t,n)}var Pc,es,Nc,Rc;Pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};es=function(){};Nc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rt(We.current);var i=null;switch(n){case"input":o=Ti(e,o),r=Ti(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=Ei(e,o),r=Ei(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Ai(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Rc=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!L)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(Us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&to(),ie(t),null;case 3:return r=t.stateNode,pn(),_(he),_(ae),Bs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(ls(Ie),Ie=null))),es(e,t),ie(t),null;case 5:Fs(t);var o=Rt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)Nc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return ie(t),null}if(e=Rt(We.current),Ar(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Le]=t,r[Xn]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<On.length;o++)q(On[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":ya(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":va(r,i),q("invalid",r)}Ai(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,a,e),o=["children",""+a]):Fn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":vr(r),ga(r,i,!0);break;case"textarea":vr(r),wa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Le]=t,e[Xn]=r,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(s=ji(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<On.length;o++)q(On[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":ya(e,r),o=Ti(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),q("invalid",e);break;case"textarea":va(e,r),o=Ei(e,r),q("invalid",e);break;default:o=r}Ai(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?lu(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&su(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bn(e,l):typeof l=="number"&&Bn(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&q("scroll",e):l!=null&&ws(e,i,l,s))}switch(n){case"input":vr(e),ga(e,r,!1);break;case"textarea":vr(e),wa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Rc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Rt(er.current),Rt(We.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Le]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Le]=t,t.stateNode=r}return ie(t),null;case 13:if(_(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(L&&we!==null&&t.mode&1&&!(t.flags&128))Qu(),cn(),t.flags|=98560,i=!1;else if(i=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[Le]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ie!==null&&(ls(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?J===0&&(J=3):ta())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return pn(),es(e,t),e===null&&Jn(t.stateNode.containerInfo),ie(t),null;case 10:return _s(t.type._context),ie(t),null;case 17:return me(t.type)&&to(),ie(t),null;case 19:if(_(W),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)An(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=lo(e),s!==null){for(t.flags|=128,An(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>hn&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304)}else{if(!r)if(e=lo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!L)return ie(t),null}else 2*K()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return ea(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function kf(e,t){switch(Us(t),t.tag){case 1:return me(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),_(he),_(ae),Bs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(_(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(W),null;case 4:return pn(),null;case 10:return _s(t.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var Nr=!1,se=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,E=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function ts(e,t,n){try{n()}catch(r){$(e,t,r)}}var ll=!1;function bf(e,t){if(_i=Yr,e=Du(),Os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,m=0,h=e,y=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=s+o),h!==i||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(w=h.firstChild)!==null;)y=h,h=w;for(;;){if(h===e)break t;if(y===n&&++u===o&&(a=s),y===i&&++m===r&&(l=s),(w=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},Yr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,T=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Re(t.type,x),T);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){$(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return g=ll,ll=!1,g}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ts(t,n,i)}o=o.next}while(o!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ns(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Oc(e){var t=e.alternate;t!==null&&(e.alternate=null,Oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Le],delete t[Xn],delete t[Fi],delete t[of],delete t[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ic(e){return e.tag===5||e.tag===3||e.tag===4}function ul(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}var te=null,Oe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Uc(e,t,n),n=n.sibling}function Uc(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:se||Zt(n,t);case 6:var r=te,o=Oe;te=null,Ze(e,t,n),te=r,Oe=o,te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Oe?(e=te,n=n.stateNode,e.nodeType===8?ii(e.parentNode,n):e.nodeType===1&&ii(e,n),Kn(e)):ii(te,n.stateNode));break;case 4:r=te,o=Oe,te=n.stateNode.containerInfo,Oe=!0,Ze(e,t,n),te=r,Oe=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ts(n,t,s),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!se&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,Ze(e,t,n),se=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function cl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Tf),t.forEach(function(r){var o=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Oe=!1;break e;case 3:te=a.stateNode.containerInfo,Oe=!0;break e;case 4:te=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(te===null)throw Error(b(160));Uc(i,s,o),te=null,Oe=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){$(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),qe(e),r&4){try{Ln(3,e,e.return),Po(3,e)}catch(x){$(e,e.return,x)}try{Ln(5,e,e.return)}catch(x){$(e,e.return,x)}}break;case 1:Ne(t,e),qe(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Ne(t,e),qe(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var o=e.stateNode;try{Bn(o,"")}catch(x){$(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ru(o,i),ji(a,s);var u=ji(a,i);for(s=0;s<l.length;s+=2){var m=l[s],h=l[s+1];m==="style"?lu(o,h):m==="dangerouslySetInnerHTML"?su(o,h):m==="children"?Bn(o,h):ws(o,m,h,u)}switch(a){case"input":bi(o,i);break;case"textarea":ou(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?tn(o,!!i.multiple,w,!1):y!==!!i.multiple&&(i.defaultValue!=null?tn(o,!!i.multiple,i.defaultValue,!0):tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Xn]=i}catch(x){$(e,e.return,x)}}break;case 6:if(Ne(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){$(e,e.return,x)}}break;case 3:if(Ne(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(x){$(e,e.return,x)}break;case 4:Ne(t,e),qe(e);break;case 13:Ne(t,e),qe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xs=K())),r&4&&cl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||m,Ne(t,e),se=u):Ne(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(h=E=m;E!==null;){switch(y=E,w=y.child,y.tag){case 0:case 11:case 14:case 15:Ln(4,y,y.return);break;case 1:Zt(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){$(r,n,x)}}break;case 5:Zt(y,y.return);break;case 22:if(y.memoizedState!==null){pl(h);continue}}w!==null?(w.return=y,E=w):pl(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=au("display",s))}catch(x){$(e,e.return,x)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){$(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ne(t,e),qe(e),r&4&&cl(e);break;case 21:break;default:Ne(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ic(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Bn(o,""),r.flags&=-33);var i=ul(e);os(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ul(e);rs(e,a,s);break;default:throw Error(b(161))}}catch(l){$(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){E=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Nr;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||se;a=Nr;var u=se;if(Nr=s,(se=l)&&!u)for(E=o;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?fl(o):l!==null?(l.return=s,E=l):fl(o);for(;i!==null;)E=i,Dc(i),i=i.sibling;E=o,Nr=a,se=u}dl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,E=i):dl(e)}}function dl(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qa(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qa(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Kn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}se||t.flags&512&&ns(t)}catch(y){$(t,t.return,y)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function pl(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function fl(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(l){$(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){$(t,o,l)}}var i=t.return;try{ns(t)}catch(l){$(t,i,l)}break;case 5:var s=t.return;try{ns(t)}catch(l){$(t,s,l)}}}catch(l){$(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Ef=Math.ceil,po=Xe.ReactCurrentDispatcher,Js=Xe.ReactCurrentOwner,Ae=Xe.ReactCurrentBatchConfig,U=0,ee=null,G=null,ne=0,ve=0,en=wt(0),J=0,or=null,qt=0,No=0,Ys=0,zn=null,pe=null,Xs=0,hn=1/0,Fe=null,fo=!1,is=null,pt=null,Rr=!1,it=null,ho=0,Wn=0,ss=null,Br=-1,$r=0;function ue(){return U&6?K():Br!==-1?Br:Br=K()}function ft(e){return e.mode&1?U&2&&ne!==0?ne&-ne:lf.transition!==null?($r===0&&($r=xu()),$r):(e=M,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function Me(e,t,n,r){if(50<Wn)throw Wn=0,ss=null,Error(b(185));lr(e,n,r),(!(U&2)||e!==ee)&&(e===ee&&(!(U&2)&&(No|=n),J===4&&rt(e,ne)),ye(e,r),n===1&&U===0&&!(t.mode&1)&&(hn=K()+500,Co&&xt()))}function ye(e,t){var n=e.callbackNode;ap(e,t);var r=Jr(e,e===ee?ne:0);if(r===0)n!==null&&Ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ta(n),t===1)e.tag===0?af(hl.bind(null,e)):Vu(hl.bind(null,e)),nf(function(){!(U&6)&&xt()}),n=null;else{switch(ku(r)){case 1:n=Ss;break;case 4:n=vu;break;case 16:n=Qr;break;case 536870912:n=wu;break;default:n=Qr}n=$c(n,qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qc(e,t){if(Br=-1,$r=0,U&6)throw Error(b(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Jr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var o=U;U|=2;var i=Lc();(ee!==e||ne!==t)&&(Fe=null,hn=K()+500,Ot(e,t));do try{jf();break}catch(a){_c(e,a)}while(!0);qs(),po.current=i,U=o,G!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(o=Ii(e),o!==0&&(r=o,t=as(e,o))),t===1)throw n=or,Ot(e,0),rt(e,r),ye(e,K()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cf(o)&&(t=mo(e,r),t===2&&(i=Ii(e),i!==0&&(r=i,t=as(e,i))),t===1))throw n=or,Ot(e,0),rt(e,r),ye(e,K()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:At(e,pe,Fe);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Xs+500-K(),10<t)){if(Jr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wi(At.bind(null,e,pe,Fe),t);break}At(e,pe,Fe);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Ue(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=Wi(At.bind(null,e,pe,Fe),r);break}At(e,pe,Fe);break;case 5:At(e,pe,Fe);break;default:throw Error(b(329))}}}return ye(e,K()),e.callbackNode===n?qc.bind(null,e):null}function as(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=mo(e,t),e!==2&&(t=pe,pe=n,t!==null&&ls(t)),e}function ls(e){pe===null?pe=e:pe.push.apply(pe,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!De(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ys,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function hl(e){if(U&6)throw Error(b(327));an();var t=Jr(e,0);if(!(t&1))return ye(e,K()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Ii(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=or,Ot(e,0),rt(e,t),ye(e,K()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,pe,Fe),ye(e,K()),null}function Zs(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(hn=K()+500,Co&&xt())}}function _t(e){it!==null&&it.tag===0&&!(U&6)&&an();var t=U;U|=1;var n=Ae.transition,r=M;try{if(Ae.transition=null,M=1,e)return e()}finally{M=r,Ae.transition=n,U=t,!(U&6)&&xt()}}function ea(){ve=en.current,_(en)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:pn(),_(he),_(ae),Bs();break;case 5:Fs(r);break;case 4:pn();break;case 13:_(W);break;case 19:_(W);break;case 10:_s(r.type._context);break;case 22:case 23:ea()}n=n.return}if(ee=e,G=e=ht(e.current,null),ne=ve=t,J=0,or=null,Ys=No=qt=0,pe=zn=null,Nt!==null){for(t=0;t<Nt.length;t++)if(n=Nt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Nt=null}return e}function _c(e,t){do{var n=G;try{if(qs(),zr.current=co,uo){for(var r=F.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(Dt=0,X=Q=F=null,_n=!1,tr=0,Js.current=null,n===null||n.return===null){J=1,or=t,G=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=tl(s);if(w!==null){w.flags&=-257,nl(w,s,a,i,t),w.mode&1&&el(i,u,t),t=w,l=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(l),t.updateQueue=x}else g.add(l);break e}else{if(!(t&1)){el(i,u,t),ta();break e}l=Error(b(426))}}else if(L&&a.mode&1){var T=tl(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),nl(T,s,a,i,t),Ms(fn(l,a));break e}}i=l=fn(l,a),J!==4&&(J=2),zn===null?zn=[i]:zn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=kc(i,l,t);Ga(i,p);break e;case 1:a=l;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Tc(i,a,t);Ga(i,v);break e}}i=i.return}while(i!==null)}Wc(n)}catch(S){t=S,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Lc(){var e=po.current;return po.current=co,e===null?co:e}function ta(){(J===0||J===3||J===2)&&(J=4),ee===null||!(qt&268435455)&&!(No&268435455)||rt(ee,ne)}function mo(e,t){var n=U;U|=2;var r=Lc();(ee!==e||ne!==t)&&(Fe=null,Ot(e,t));do try{Af();break}catch(o){_c(e,o)}while(!0);if(qs(),U=n,po.current=r,G!==null)throw Error(b(261));return ee=null,ne=0,J}function Af(){for(;G!==null;)zc(G)}function jf(){for(;G!==null&&!Xd();)zc(G)}function zc(e){var t=Bc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Wc(e):G=t,Js.current=null}function Wc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=xf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function At(e,t,n){var r=M,o=Ae.transition;try{Ae.transition=null,M=1,Pf(e,t,n,r)}finally{Ae.transition=o,M=r}return null}function Pf(e,t,n,r){do an();while(it!==null);if(U&6)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lp(e,i),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,$c(Qr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var s=M;M=1;var a=U;U|=4,Js.current=null,bf(e,n),Mc(n,e),Gp(Li),Yr=!!_i,Li=_i=null,e.current=n,Sf(n),Zd(),U=a,M=s,Ae.transition=i}else e.current=n;if(Rr&&(Rr=!1,it=e,ho=o),i=e.pendingLanes,i===0&&(pt=null),np(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=is,is=null,e;return ho&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===ss?Wn++:(Wn=0,ss=e):Wn=0,xt(),null}function an(){if(it!==null){var e=ku(ho),t=Ae.transition,n=M;try{if(Ae.transition=null,M=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ho=0,U&6)throw Error(b(331));var o=U;for(U|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Ln(8,m,i)}var h=m.child;if(h!==null)h.return=m,E=h;else for(;E!==null;){m=E;var y=m.sibling,w=m.return;if(Oc(m),m===u){E=null;break}if(y!==null){y.return=w,E=y;break}E=w}}}var g=i.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,E=p;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){s=E;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,E=f;else e:for(s=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(S){$(a,a.return,S)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(U=o,xt(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{M=n,Ae.transition=t}}return!1}function ml(e,t,n){t=fn(n,t),t=kc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(lr(e,1,t),ye(e,t))}function $(e,t,n){if(e.tag===3)ml(e,e,n);else for(;t!==null;){if(t.tag===3){ml(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=fn(n,e),e=Tc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(lr(t,1,e),ye(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>K()-Xs?Ot(e,0):Ys|=n),ye(e,t)}function Fc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(lr(e,t,n),ye(e,n))}function Rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Fc(e,n)}var Bc;Bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,wf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,L&&t.flags&1048576&&Ku(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var o=un(t,ae.current);sn(t,n),o=Hs(null,t,r,e,o,n);var i=Vs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,no(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zs(t),o.updater=jo,t.stateNode=o,o._reactInternals=t,Gi(t,r,e,n),t=Yi(null,t,r,!0,i,n)):(t.tag=0,L&&i&&Is(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Uf(r),e=Re(r,e),o){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=il(null,t,r,e,n);break e;case 11:t=rl(null,t,r,e,n);break e;case 14:t=ol(null,t,r,Re(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Ji(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),il(e,t,r,o,n);case 3:e:{if(Cc(t),e===null)throw Error(b(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zu(e,t),ao(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fn(Error(b(423)),t),t=sl(e,t,r,n,o);break e}else if(r!==o){o=fn(Error(b(424)),t),t=sl(e,t,r,n,o);break e}else for(we=ct(t.stateNode.containerInfo.firstChild),xe=t,L=!0,Ie=null,n=Yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===o){t=Ye(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&Hi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,zi(r,o)?s=null:i!==null&&zi(r,i)&&(t.flags|=32),Ec(e,t),le(e,t,s,n),t.child;case 6:return e===null&&Hi(t),null;case 13:return Ac(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),rl(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,D(io,r._currentValue),r._currentValue=s,i!==null)if(De(i.value,s)){if(i.children===o.children&&!he.current){t=Ye(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ke(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Vi(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(b(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Vi(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=je(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),ol(e,t,r,o,n);case 15:return bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Fr(e,t),t.tag=1,me(r)?(e=!0,no(t)):e=!1,sn(t,n),xc(t,r,o),Gi(t,r,o,n),Yi(null,t,r,!0,e,n);case 19:return jc(e,t,n);case 22:return Sc(e,t,n)}throw Error(b(156,t.tag))};function $c(e,t){return gu(e,t)}function If(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new If(e,t,n,r)}function na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uf(e){if(typeof e=="function")return na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ks)return 11;if(e===Ts)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")na(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return It(n.children,o,i,t);case xs:s=8,o|=8;break;case vi:return e=Ce(12,n,t,o|2),e.elementType=vi,e.lanes=i,e;case wi:return e=Ce(13,n,t,o),e.elementType=wi,e.lanes=i,e;case xi:return e=Ce(19,n,t,o),e.elementType=xi,e.lanes=i,e;case eu:return Ro(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xl:s=10;break e;case Zl:s=9;break e;case ks:s=11;break e;case Ts:s=14;break e;case et:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ce(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function hi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ra(e,t,n,r,o,i,s,a,l){return e=new Mf(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(i),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hc(e){if(!e)return gt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(me(n))return Hu(e,n,t)}return t}function Vc(e,t,n,r,o,i,s,a,l){return e=ra(n,r,!0,e,o,i,s,a,l),e.context=Hc(null),n=e.current,r=ue(),o=ft(n),i=Ke(r,o),i.callback=t??null,dt(n,i,o),e.current.lanes=o,lr(e,o,r),ye(e,r),e}function Oo(e,t,n,r){var o=t.current,i=ue(),s=ft(o);return n=Hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,s),e!==null&&(Me(e,o,s,i),Lr(e,o,s)),s}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){yl(e,t),(e=e.alternate)&&yl(e,t)}function qf(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Io.prototype.render=ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Oo(e,t,null,null)};Io.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){Oo(null,e,null,null)}),t[Qe]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Cu(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gl(){}function _f(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=yo(s);i.call(u)}}var s=Vc(t,r,e,0,null,!1,!1,"",gl);return e._reactRootContainer=s,e[Qe]=s.current,Jn(e.nodeType===8?e.parentNode:e),_t(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=yo(l);a.call(u)}}var l=ra(e,0,!1,null,null,!1,!1,"",gl);return e._reactRootContainer=l,e[Qe]=l.current,Jn(e.nodeType===8?e.parentNode:e),_t(function(){Oo(t,l,n,r)}),l}function Mo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=yo(s);a.call(l)}}Oo(t,s,e,o)}else s=_f(n,t,e,o,r);return yo(s)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(Es(t,n|1),ye(t,K()),!(U&6)&&(hn=K()+500,xt()))}break;case 13:_t(function(){var r=Je(e,1);if(r!==null){var o=ue();Me(r,e,1,o)}}),oa(e,1)}};Cs=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}oa(e,134217728)}};bu=function(e){if(e.tag===13){var t=ft(e),n=Je(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}oa(e,t)}};Su=function(){return M};Eu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ni=function(e,t,n){switch(t){case"input":if(bi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(b(90));nu(r),bi(r,o)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};du=Zs;pu=_t;var Lf={usingClientEntryPoint:!1,Events:[cr,Gt,Eo,uu,cu,Zs]},jn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{ko=Or.inject(zf),ze=Or}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(b(200));return Df(e,t,null,n)};Te.createRoot=function(e,t){if(!sa(e))throw Error(b(299));var n=!1,r="",o=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ra(e,1,!1,null,null,n,!1,r,o),e[Qe]=t.current,Jn(e.nodeType===8?e.parentNode:e),new ia(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return _t(e)};Te.hydrate=function(e,t,n){if(!Uo(t))throw Error(b(200));return Mo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Vc(t,null,e,1,n??null,o,!1,i,s),e[Qe]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Io(t)};Te.render=function(e,t,n){if(!Uo(t))throw Error(b(200));return Mo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(b(40));return e._reactRootContainer?(_t(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};Te.unstable_batchedUpdates=Zs;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Mo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Gl.exports=Te;var Wf=Gl.exports,vl=Wf;yi.createRoot=vl.createRoot,yi.hydrateRoot=vl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const wl="popstate";function Ff(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:l=""}=Wt(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),us("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof i=="string"?i:go(i))}function r(o,i){Do(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return $f(t,n,r,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Do(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bf(){return Math.random().toString(36).substr(2,8)}function xl(e,t){return{usr:e.state,key:e.key,idx:t}}function us(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wt(t):t,{state:n,key:t&&t.key||r||Bf()})}function go(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $f(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=st.Pop,l=null,u=m();u==null&&(u=0,s.replaceState(ir({},s.state,{idx:u}),""));function m(){return(s.state||{idx:null}).idx}function h(){a=st.Pop;let T=m(),p=T==null?null:T-u;u=T,l&&l({action:a,location:x.location,delta:p})}function y(T,p){a=st.Push;let d=us(x.location,T,p);n&&n(d,T),u=m()+1;let f=xl(d,u),v=x.createHref(d);try{s.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(v)}i&&l&&l({action:a,location:x.location,delta:1})}function w(T,p){a=st.Replace;let d=us(x.location,T,p);n&&n(d,T),u=m();let f=xl(d,u),v=x.createHref(d);s.replaceState(f,"",v),i&&l&&l({action:a,location:x.location,delta:0})}function g(T){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof T=="string"?T:go(T);return d=d.replace(/ $/,"%20"),H(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return a},get location(){return e(o,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(wl,h),l=T,()=>{o.removeEventListener(wl,h),l=null}},createHref(T){return t(o,T)},createURL:g,encodeLocation(T){let p=g(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:w,go(T){return s.go(T)}};return x}var kl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kl||(kl={}));function Hf(e,t,n){return n===void 0&&(n="/"),Vf(e,t,n)}function Vf(e,t,n,r){let o=typeof t=="string"?Wt(t):t,i=mn(o.pathname||"/",n);if(i==null)return null;let s=Qc(e);Kf(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=oh(i);a=nh(s[l],u)}return a}function Qc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(H(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mt([r,l.relativePath]),m=n.concat(l);i.children&&i.children.length>0&&(H(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qc(i.children,t,m,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:eh(u,i.index),routesMeta:m})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Jc(i.path))o(i,s,l)}),t}function Jc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Jc(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:th(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gf=/^:[\w-]+$/,Qf=3,Jf=2,Yf=1,Xf=10,Zf=-2,Tl=e=>e==="*";function eh(e,t){let n=e.split("/"),r=n.length;return n.some(Tl)&&(r+=Zf),t&&(r+=Jf),n.filter(o=>!Tl(o)).reduce((o,i)=>o+(Gf.test(i)?Qf:i===""?Yf:Xf),r)}function th(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nh(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=cs({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},m),y=l.route;if(!h)return null;Object.assign(o,h.params),s.push({params:o,pathname:mt([i,h.pathname]),pathnameBase:uh(mt([i,h.pathnameBase])),route:y}),h.pathnameBase!=="/"&&(i=mt([i,h.pathnameBase]))}return s}function cs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,m,h)=>{let{paramName:y,isOptional:w}=m;if(y==="*"){let x=a[h]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const g=a[h];return w&&!g?u[y]=void 0:u[y]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function rh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Do(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function oh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Do(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sh=e=>ih.test(e);function ah(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Wt(e):e,i;if(n)if(sh(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Do(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=bl(n.substring(1),"/"):i=bl(n,t)}else i=t;return{pathname:i,search:ch(r),hash:dh(o)}}function bl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function mi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yc(e,t){let n=lh(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Wt(e):(o=ir({},e),H(!o.pathname||!o.pathname.includes("?"),mi("?","pathname","search",o)),H(!o.pathname||!o.pathname.includes("#"),mi("#","pathname","hash",o)),H(!o.search||!o.search.includes("#"),mi("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let y=s.split("/");for(;y[0]==="..";)y.shift(),h-=1;o.pathname=y.join("/")}a=h>=0?t[h]:"/"}let l=ah(o,a),u=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||m)&&(l.pathname+="/"),l}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),uh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ch=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zc=["post","put","patch","delete"];new Set(Zc);const fh=["get",...Zc];new Set(fh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}const qo=k.createContext(null),ed=k.createContext(null),kt=k.createContext(null),_o=k.createContext(null),Tt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),td=k.createContext(null);function hh(e,t){let{relative:n}=t===void 0?{}:t;pr()||H(!1);let{basename:r,navigator:o}=k.useContext(kt),{hash:i,pathname:s,search:a}=Lo(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:mt([r,s])),o.createHref({pathname:l,search:a,hash:i})}function pr(){return k.useContext(_o)!=null}function fr(){return pr()||H(!1),k.useContext(_o).location}function nd(e){k.useContext(kt).static||k.useLayoutEffect(e)}function aa(){let{isDataRoute:e}=k.useContext(Tt);return e?Ah():mh()}function mh(){pr()||H(!1);let e=k.useContext(qo),{basename:t,future:n,navigator:r}=k.useContext(kt),{matches:o}=k.useContext(Tt),{pathname:i}=fr(),s=JSON.stringify(Yc(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return nd(()=>{a.current=!0}),k.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=Xc(u,JSON.parse(s),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:mt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,s,i,e])}function rd(){let{matches:e}=k.useContext(Tt),t=e[e.length-1];return t?t.params:{}}function Lo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(kt),{matches:o}=k.useContext(Tt),{pathname:i}=fr(),s=JSON.stringify(Yc(o,r.v7_relativeSplatPath));return k.useMemo(()=>Xc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function yh(e,t){return gh(e,t)}function gh(e,t,n,r){pr()||H(!1);let{navigator:o}=k.useContext(kt),{matches:i}=k.useContext(Tt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=fr(),m;if(t){var h;let T=typeof t=="string"?Wt(t):t;l==="/"||(h=T.pathname)!=null&&h.startsWith(l)||H(!1),m=T}else m=u;let y=m.pathname||"/",w=y;if(l!=="/"){let T=l.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(T.length).join("/")}let g=Hf(e,{pathname:w}),x=Th(g&&g.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:mt([l,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:mt([l,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),i,n,r);return t&&x?k.createElement(_o.Provider,{value:{location:sr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:st.Pop}},x):x}function vh(){let e=Ch(),t=ph(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const wh=k.createElement(vh,null);class xh extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Tt.Provider,{value:this.props.routeContext},k.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kh(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(qo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Tt.Provider,{value:t},r)}function Th(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let m=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||H(!1),s=s.slice(0,Math.min(s.length,m+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let h=s[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=m),h.route.id){let{loaderData:y,errors:w}=n,g=h.route.loader&&y[h.route.id]===void 0&&(!w||w[h.route.id]===void 0);if(h.route.lazy||g){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((m,h,y)=>{let w,g=!1,x=null,T=null;n&&(w=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||wh,l&&(u<0&&y===0?(jh("route-fallback"),g=!0,T=null):u===y&&(g=!0,T=h.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,y+1)),d=()=>{let f;return w?f=x:g?f=T:h.route.Component?f=k.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=m,k.createElement(kh,{match:h,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?k.createElement(xh,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(od||{}),id=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(id||{});function bh(e){let t=k.useContext(qo);return t||H(!1),t}function Sh(e){let t=k.useContext(ed);return t||H(!1),t}function Eh(e){let t=k.useContext(Tt);return t||H(!1),t}function sd(e){let t=Eh(),n=t.matches[t.matches.length-1];return n.route.id||H(!1),n.route.id}function Ch(){var e;let t=k.useContext(td),n=Sh(),r=sd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ah(){let{router:e}=bh(od.UseNavigateStable),t=sd(id.UseNavigateStable),n=k.useRef(!1);return nd(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,sr({fromRouteId:t},i)))},[e,t])}const Sl={};function jh(e,t,n){Sl[e]||(Sl[e]=!0)}function Ph(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jt(e){H(!1)}function Nh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=st.Pop,navigator:i,static:s=!1,future:a}=e;pr()&&H(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:i,static:s,future:sr({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=Wt(r));let{pathname:m="/",search:h="",hash:y="",state:w=null,key:g="default"}=r,x=k.useMemo(()=>{let T=mn(m,l);return T==null?null:{location:{pathname:T,search:h,hash:y,state:w,key:g},navigationType:o}},[l,m,h,y,w,g,o]);return x==null?null:k.createElement(kt.Provider,{value:u},k.createElement(_o.Provider,{children:n,value:x}))}function Rh(e){let{children:t,location:n}=e;return yh(ds(t),n)}new Promise(()=>{});function ds(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,ds(r.props.children,i));return}r.type!==jt&&H(!1),!r.props.index||!r.props.children||H(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ds(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}function ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Oh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ih(e,t){return e.button===0&&(!t||t==="_self")&&!Oh(e)}const Uh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Dh="6";try{window.__reactRouterVersion=Dh}catch{}const qh=k.createContext({isTransitioning:!1}),_h="startTransition",El=Pd[_h];function Lh(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Ff({window:o,v5Compat:!0}));let s=i.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},m=k.useCallback(h=>{u&&El?El(()=>l(h)):l(h)},[l,u]);return k.useLayoutEffect(()=>s.listen(m),[s,m]),k.useEffect(()=>Ph(r),[r]),k.createElement(Nh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:m,viewTransition:h}=t,y=ad(t,Uh),{basename:w}=k.useContext(kt),g,x=!1;if(typeof u=="string"&&Wh.test(u)&&(g=u,zh))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),S=mn(v.pathname,w);v.origin===f.origin&&S!=null?u=S+v.search+v.hash:x=!0}catch{}let T=hh(u,{relative:o}),p=Bh(u,{replace:s,state:a,target:l,preventScrollReset:m,relative:o,viewTransition:h});function d(f){r&&r(f),f.defaultPrevented||p(f)}return k.createElement("a",vo({},y,{href:g||T,onClick:x||i?r:d,ref:n,target:l}))}),Ir=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,viewTransition:u,children:m}=t,h=ad(t,Mh),y=Lo(l,{relative:h.relative}),w=fr(),g=k.useContext(ed),{navigator:x,basename:T}=k.useContext(kt),p=g!=null&&$h(y)&&u===!0,d=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,f=w.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(f=f.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&T&&(v=mn(v,T)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let A=f===d||!s&&f.startsWith(d)&&f.charAt(S)==="/",j=v!=null&&(v===d||!s&&v.startsWith(d)&&v.charAt(d.length)==="/"),P={isActive:A,isPending:j,isTransitioning:p},z=A?r:void 0,R;typeof i=="function"?R=i(P):R=[i,A?"active":null,j?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ge=typeof a=="function"?a(P):a;return k.createElement(Ve,vo({},h,{"aria-current":z,className:R,ref:n,style:ge,to:l,viewTransition:u}),typeof m=="function"?m(P):m)});var ps;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ps||(ps={}));var Cl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cl||(Cl={}));function Fh(e){let t=k.useContext(qo);return t||H(!1),t}function Bh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=aa(),u=fr(),m=Lo(e,{relative:s});return k.useCallback(h=>{if(Ih(h,n)){h.preventDefault();let y=r!==void 0?r:go(u)===go(m);l(e,{replace:y,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,m,r,o,n,e,i,s,a])}function $h(e,t){t===void 0&&(t={});let n=k.useContext(qh);n==null&&H(!1);let{basename:r}=Fh(ps.useViewTransitionState),o=Lo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=mn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=mn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return cs(o.pathname,s)!=null||cs(o.pathname,i)!=null}const ld="js-ts-course-progress",wo={attempts:0,correct:0,bestStreak:0},ud={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null,randomQuestionStats:{...wo},quickLineStats:{...wo}};function Hh(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TOPIC":return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:!0,taskCompleted:!0}}};case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RECORD_RANDOM_QUESTION":{const n=e.randomQuestionStats??wo;return{...e,randomQuestionStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RECORD_QUICK_LINE":{const n=e.quickLineStats??wo;return{...e,quickLineStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RESET":return ud;default:return e}}function Vh(){try{const e=localStorage.getItem(ld);if(e)return JSON.parse(e)}catch{}return ud}const cd=k.createContext(null);function Kh({children:e}){const[t,n]=k.useReducer(Hh,void 0,Vh);return k.useEffect(()=>{localStorage.setItem(ld,JSON.stringify(t))},[t]),c.jsx(cd.Provider,{value:{progress:t,dispatch:n},children:e})}function bt(){const e=k.useContext(cd);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const Gh={id:"mod-1",title:"JavaScript Engine & Execution Context",description:"How the JavaScript engine works: parsing, compilation, execution contexts, the call stack, and memory management.",topics:[{id:"mod1-t1",title:"How JS Engines Work",explanation:`## The JavaScript Engine Pipeline

Every JavaScript engine (V8, SpiderMonkey, JavaScriptCore) follows a similar pipeline:

### 1. Parsing

\`\`\`
Source Code → Tokenizer → Tokens → Parser → AST
\`\`\`

- **Tokenizer/Lexer**: Breaks code into tokens (\`let\`, \`x\`, \`=\`, \`5\`, \`;)\`
- **Parser**: Builds an **Abstract Syntax Tree** (AST)

### 2. Compilation (JIT)

Modern engines use **Just-In-Time** compilation:

\`\`\`
AST → Interpreter (Ignition in V8) → Bytecode
     → Hot code detected → Optimizing Compiler (TurboFan) → Machine Code
     → Deoptimization if assumptions are wrong → Back to Bytecode
\`\`\`

### 3. Key Concepts

| Phase | V8 Component | Purpose |
|-------|-------------|--------|
| Parse | Parser | Source → AST |
| Interpret | Ignition | AST → Bytecode (fast startup) |
| Optimize | TurboFan | Bytecode → Machine Code (fast execution) |
| Deoptimize | — | Machine Code → Bytecode (if types change) |

### Why This Matters

\`\`\`javascript
// TurboFan will optimize this because types are consistent
function add(a, b) {
  return a + b;
}
add(1, 2);     // number + number — V8 profiles this and creates an optimized "number-only" fast path
add(3, 4);     // number + number — stays on the optimized path, runs as fast machine code

// This causes DEOPTIMIZATION — V8 assumed number-only inputs, now receives strings:
add("hello", "world"); // string! TurboFan must bail out, falls back to slower bytecode
// After deopt, V8 re-interprets via Ignition. It may re-optimize later, but the deopt cost is real.
\`\`\`

### Common Mistakes

\`\`\`javascript
// Mistake 1: mixing types in the same function
function process(input) {
  return input + 1; // Is input a number? a string? V8 can\\'t predict
}
process(5);       // number → optimized
process("5");     // string → deopt! V8\\'s assumption was wrong

// Mistake 2: changing object shapes after creation
const obj = { x: 1 };
obj.y = 2;  // Adding properties changes the "hidden class" → potential deopt

// Better: define all properties upfront so V8 assigns a stable hidden class
const obj2 = { x: 1, y: 2 }; // Stable shape from the start
\`\`\`

> Keep your types consistent to help the JIT compiler optimize your code.`,task:{description:"Write a function that will stay optimized by V8. Then write an example that would cause deoptimization. Explain WHY in comments.",starterCode:`// OPTIMIZABLE: Write a function that handles one type consistently
function multiply(a, b) {
  // TODO
}

// Call it with consistent types

// DEOPTIMIZATION: Show what would break the optimization`,solution:`// OPTIMIZABLE: Consistent types let TurboFan generate efficient machine code
function multiply(a, b) {
  return a * b;
}

// Consistent number calls - V8 creates optimized machine code
multiply(2, 3);   // → 6
multiply(10, 5);  // → 50 (stays optimized)
multiply(7, 8);   // → 56 (stays optimized)

// DEOPTIMIZATION: Passing a different type forces TurboFan to deoptimize
// multiply("2", "3"); // string! TurboFan bails, falls back to bytecode
// multiply(null, undefined); // also causes deopt`,hints:['V8 uses "hidden classes" and "inline caches" for optimization',"Consistent argument types help the JIT compiler","Type changes break optimizing assumptions and trigger deoptimization"]}},{id:"mod1-t2",title:"Execution Contexts & Call Stack",explanation:`## Execution Context

An **Execution Context** (EC) is the environment in which JavaScript code is evaluated.

### Types of Execution Contexts

1. **Global Execution Context (GEC)** — Created when the script starts
2. **Function Execution Context (FEC)** — Created each time a function is called
3. **Eval Execution Context** — Created inside \`eval()\` (avoid using)

### Two Phases of Each EC

\`\`\`javascript
// Phase 1: CREATION (Memory Allocation)
// - Variables declared with var → undefined
// - Variables declared with let/const → uninitialized (TDZ)
// - Functions → stored entirely in memory
// - 'this' is determined

// Phase 2: EXECUTION (Code Runs)
// - Assignments happen
// - Code executes line by line
\`\`\`

### The Call Stack

\`\`\`javascript
function first() {
  console.log("first");
  second();
  console.log("back to first");
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first();

// Call Stack progression:
// [GEC]
// [GEC, first()]
// [GEC, first(), second()]
// [GEC, first(), second(), third()]
// [GEC, first(), second()]          ← third() pops off
// [GEC, first()]                    ← second() pops off
// [GEC]                             ← first() pops off
\`\`\`

### Stack Overflow

\`\`\`javascript
function overflow() {
  overflow(); // No base case → infinite recursion
}
overflow(); // RangeError: Maximum call stack size exceeded
\`\`\`

> JavaScript is single-threaded: one call stack, one thing at a time.`,task:{description:"Trace the call stack for the following code. Write comments showing the stack state at each step, and identify what value each variable has during creation vs execution phase.",starterCode:`var x = 10;

function outer() {
  var y = 20;
  function inner() {
    var z = 30;
    return x + y + z;
  }
  return inner();
}

var result = outer();
// Trace the creation and execution phases
// What is x during creation phase? 
// What is result during creation phase?`,solution:`var x = 10;

function outer() {
  var y = 20;
  function inner() {
    var z = 30;
    return x + y + z;
  }
  return inner();
}

var result = outer();

// === CREATION PHASE (GEC) ===
// x → undefined (var hoisted)
// outer → function (fully hoisted)
// result → undefined (var hoisted)

// === EXECUTION PHASE (GEC) ===
// x = 10
// outer() is called → new FEC pushed

// === CREATION PHASE (outer FEC) ===
// y → undefined
// inner → function (fully hoisted)

// === EXECUTION PHASE (outer FEC) ===
// y = 20
// inner() called → new FEC pushed

// === CREATION PHASE (inner FEC) ===
// z → undefined

// === EXECUTION PHASE (inner FEC) ===
// z = 30
// return 10 + 20 + 30 = 60
// inner FEC pops off
// outer returns 60, outer FEC pops off
// result = 60`,hints:["var declarations are hoisted as undefined during creation","Function declarations are fully hoisted","Each function call creates a new Execution Context"]}},{id:"mod1-t3",title:"Memory: Heap & Stack",explanation:`## Memory Model

### Stack vs Heap

\`\`\`javascript
// STACK: Primitives (fixed size, fast access)
let age = 25;          // number → stack
let name = "Alice";    // string → stack (pointer to heap for large strings)
let isActive = true;   // boolean → stack

// HEAP: Objects (dynamic size, slower access)
let user = { name: "Alice" };  // object → heap (reference on stack)
let arr = [1, 2, 3];           // array → heap (reference on stack)
\`\`\`

### Copy by Value vs Reference

\`\`\`javascript
// Primitives: Copy by VALUE
let a = 10;
let b = a;     // b gets a COPY of 10
b = 20;
console.log(a); // 10 (unchanged!)

// Objects: Copy by REFERENCE
let obj1 = { x: 1 };
let obj2 = obj1;    // obj2 points to SAME object
obj2.x = 99;
console.log(obj1.x); // 99 (CHANGED because same reference!)
\`\`\`

### Garbage Collection

V8 uses a **generational garbage collector**:

- **Minor GC (Scavenger)**: Cleans young generation (short-lived objects)
- **Major GC (Mark-Sweep-Compact)**: Cleans old generation

\`\`\`javascript
// Memory leak example:
const cache = [];
function leaky() {
  cache.push(new Array(10000)); // Never cleaned up!
}
setInterval(leaky, 100); // Growing memory forever

// Fix: Use WeakRef or clear old entries
\`\`\``,task:{description:"Demonstrate the difference between copy by value and copy by reference. Show a case where modifying a copy unexpectedly changes the original, then show how to properly create an independent copy.",starterCode:`// 1. Show copy by value (primitives)

// 2. Show copy by reference (objects) causing unexpected mutation

// 3. Fix it with a proper copy technique`,solution:`// 1. Copy by value (primitives)
let score = 100;
let savedScore = score;
savedScore = 0;
console.log(score);      // 100 — not affected

// 2. Copy by reference (objects) — unexpected mutation
let config = { theme: "dark", lang: "en" };
let backup = config;      // Both point to same object!
backup.theme = "light";
console.log(config.theme); // "light" — MUTATED!

// 3. Proper copies:
// Shallow copy (spread)
let config2 = { theme: "dark", lang: "en" };
let backup2 = { ...config2 };
backup2.theme = "light";
console.log(config2.theme); // "dark" — safe!

// Deep copy (structuredClone for nested objects)
let nested = { user: { name: "Alice", settings: { dark: true } } };
let deepCopy = structuredClone(nested);
deepCopy.user.settings.dark = false;
console.log(nested.user.settings.dark); // true — safely independent`,hints:["Primitives (number, string, boolean) are copied by value","Objects and arrays are copied by reference (pointer)","Use spread {...obj} for shallow copy, structuredClone() for deep copy"]}}],test:[{id:"mod1-q1",question:'What does the JIT compiler do when it detects "hot" code?',options:["Deletes it","Compiles bytecode to optimized machine code","Sends it to the server","Converts it to WebAssembly"],correctAnswer:1,explanation:'JIT (Just-In-Time) compiles frequently-run bytecode into optimized machine code. In V8, the TurboFan optimizing compiler profiles "hot" code (frequently executed), applies type-based optimizations, and generates fast machine code specific to the observed types.'},{id:"mod1-q2",question:"During the creation phase, what value does a var variable have?",options:["null","undefined","Its assigned value","ReferenceError"],correctAnswer:1,explanation:"During the creation phase (memory allocation), var declarations are hoisted to the top of their scope and initialized to undefined. The actual assignment (= value) only happens during the execution phase when that line of code runs."},{id:"mod1-q3",question:"What happens when you copy an object with `let b = a`?",options:["A deep copy is created","Both variables point to the same object in the heap","A stack copy is made","It throws an error"],correctAnswer:1,explanation:"Objects are assigned by reference, not by value. Both a and b hold the same pointer to the same memory location on the heap. Modifying the object through either variable affects the other. Use spread ({...a}), Object.assign, or structuredClone() to create independent copies."},{id:"mod1-q4",question:"What causes a Stack Overflow?",options:["Too many variables","Infinite recursion without a base case","Too many objects on the heap","Using eval()"],correctAnswer:1,explanation:"Each function call pushes a new execution context (frame) onto the call stack. Without a base case, recursion never stops and keeps adding frames until the engine's stack size limit is reached — throwing RangeError: Maximum call stack size exceeded."},{id:"mod1-q5",question:"What is structuredClone() used for?",options:["Cloning DOM elements","Creating a deep copy of an object","Cloning functions","Cloning class definitions"],correctAnswer:1,explanation:"structuredClone() creates a deep copy of objects, recursively cloning all nested structures. Unlike spread ({...obj}) which only does a shallow copy, structuredClone handles nested objects, arrays, Maps, Sets, Dates, and more. Note: it cannot clone functions or DOM nodes."}]},Qh={id:"mod-2",title:"Scope, Closures & Hoisting",description:"Master lexical scope, the scope chain, closures, and the complete rules of hoisting in JavaScript.",topics:[{id:"mod2-t1",title:"Lexical Scope & Scope Chain",explanation:`## Lexical Scope

JavaScript uses **lexical (static) scoping** — scope is determined by where code is *written*, not where it's *called*.

\`\`\`javascript
let global = "I'm global";

function outer() {
  let outerVar = "I'm outer"; // Declared in outer's function scope

  function inner() {
    let innerVar = "I'm inner"; // Declared in inner's function scope
    console.log(innerVar);   // ✓ Own scope — found immediately
    console.log(outerVar);   // ✓ Parent scope — JS walks up the scope chain
    console.log(global);     // ✓ Global scope — top of the chain
  }

  inner();
  // console.log(innerVar); // ✗ ReferenceError — inner scope is not visible here
}
\`\`\`

### Three Types of Scope

| Scope | Declared With | Block-Scoped? |
|-------|--------------|---------------|
| Global | \`var\`, \`let\`, \`const\` | — |
| Function | \`var\`, \`let\`, \`const\` | \`var\` = function-scoped |
| Block | \`let\`, \`const\` | Yes |

### Block Scope Trap

\`\`\`javascript
if (true) {
  var a = 1;   // function-scoped → leaks out!
  let b = 2;   // block-scoped → stays inside
  const c = 3; // block-scoped → stays inside
}
console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
\`\`\``,task:{description:"Create a function that demonstrates the scope chain by accessing variables from three different scope levels. Show that inner scopes can access outer scopes but not vice versa.",starterCode:`// Define variables at global, function, and block scope
// Show which scopes can access which variables`,solution:`const globalVar = "global";

function outerFn() {
  const outerVar = "outer";

  function innerFn() {
    const innerVar = "inner";
    // Inner can access all three:
    console.log(globalVar); // "global" ✓
    console.log(outerVar);  // "outer"  ✓
    console.log(innerVar);  // "inner"  ✓
  }

  innerFn();
  // Can access global and own
  console.log(globalVar); // "global" ✓
  console.log(outerVar);  // "outer"  ✓
  // console.log(innerVar); // ReferenceError ✗
}

outerFn();
console.log(globalVar); // "global" ✓
// console.log(outerVar); // ReferenceError ✗
// console.log(innerVar); // ReferenceError ✗`,hints:["Variables are resolved by walking up the scope chain","Inner scopes have access to outer scopes","Outer scopes cannot see variables declared in inner scopes"]}},{id:"mod2-t2",title:"Closures",explanation:`## What is a Closure?

A **closure** is when a function "remembers" the variables from its lexical scope, even after the outer function has returned.

\`\`\`javascript
function createCounter() {
  let count = 0; // This variable is "enclosed" — private to this scope

  return {
    increment: () => ++count,  // These inner functions "close over" count
    decrement: () => --count,  // They retain access even after createCounter returns
    getCount: () => count,     // count lives in the closure, invisible outside
  };
}

const counter = createCounter();
counter.increment();  // count goes from 0 → 1 (inside the closure)
counter.increment();  // count goes from 1 → 2
console.log(counter.getCount()); // 2 — reads the enclosed variable
// count is not accessible directly — it's truly private!
\`\`\`

### Classic Interview Trap

\`\`\`javascript
// Bug: All buttons alert 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 5, 5, 5, 5, 5
// WHY? var is function-scoped — there's only ONE i variable.
// By the time the callbacks fire (100ms later), the loop has finished and i === 5.

// Fix 1: Use let (block-scoped — creates a NEW i for each iteration)
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2, 3, 4 — each callback closes over its own copy of i

// Fix 2: IIFE closure — manually capture each value of i
for (var i = 0; i < 5; i++) {
  ((j) => {  // j is a new variable in the IIFE scope, bound to the current i
    setTimeout(() => console.log(j), 100);
  })(i);
}
\`\`\`

### Practical Uses

\`\`\`javascript
// 1. Data privacy
function createUser(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (n) => { _name = n; },
  };
}

// 2. Memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    return cache[key] = fn(...args);
  };
}
\`\`\``,task:{description:"Create a memoization function using closures. It should cache results of expensive function calls and return cached results on subsequent calls with the same arguments.",starterCode:`function memoize(fn) {
  // TODO: Create a cache using closure
  // Return a function that checks cache before calling fn
}

// Test with:
const expensiveAdd = memoize((a, b) => {
  console.log("Computing...");
  return a + b;
});

// expensiveAdd(1, 2) → "Computing..." → 3
// expensiveAdd(1, 2) → 3 (no "Computing..." — cached!)`,solution:`function memoize(fn) {
  const cache = new Map(); // Enclosed in closure

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const expensiveAdd = memoize((a, b) => {
  console.log("Computing...");
  return a + b;
});

console.log(expensiveAdd(1, 2)); // "Computing..." → 3
console.log(expensiveAdd(1, 2)); // 3 (cached!)
console.log(expensiveAdd(3, 4)); // "Computing..." → 7`,hints:["The cache variable lives in the closure — private to the wrapper","JSON.stringify converts arguments to a string key","Use Map instead of plain object for better key handling"]}},{id:"mod2-t3",title:"Hoisting Deep Dive",explanation:`## Hoisting Rules

### var Hoisting

\`\`\`javascript
console.log(x); // undefined (NOT ReferenceError)
var x = 5;

// JS sees it as:
var x;           // Declaration hoisted
console.log(x);  // undefined
x = 5;           // Assignment stays
\`\`\`

### let/const: Temporal Dead Zone (TDZ)

\`\`\`javascript
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// The variable EXISTS but is in the TDZ
// from the start of the block until the declaration line
\`\`\`

### Function Hoisting

\`\`\`javascript
// Function DECLARATIONS are fully hoisted
sayHello(); // Works!
function sayHello() {
  console.log("Hello!");
}

// Function EXPRESSIONS are NOT
// greet(); // TypeError: greet is not a function
var greet = function() {
  console.log("Hi!");
};
\`\`\`

### Hoisting Priority

\`\`\`javascript
var foo = "bar";
function foo() { return "baz"; }

console.log(typeof foo); // "string"
// Function declarations hoist ABOVE var declarations
// But the var assignment overwrites during execution
\`\`\`

### Complete Hoisting Order

1. Function declarations (highest priority)
2. var declarations (initialized as undefined)
3. let/const (exist but TDZ until declaration)`,task:{description:"Predict the output of the following code WITHOUT running it. Then add comments explaining WHY for each line.",starterCode:`// Predict the output:
console.log(a);       // ?
console.log(b);       // ?
console.log(c);       // ?
console.log(d());     // ?
console.log(e);       // ?

var a = 1;
let b = 2;
const c = 3;
function d() { return 4; }
var e = function() { return 5; };`,solution:`// Predictions:
console.log(a);       // undefined — var hoisted, initialized to undefined
// console.log(b);    // ReferenceError — let is in TDZ
// console.log(c);    // ReferenceError — const is in TDZ
console.log(d());     // 4 — function declaration fully hoisted
console.log(e);       // undefined — var e hoisted, but function not assigned yet

var a = 1;
let b = 2;
const c = 3;
function d() { return 4; }
var e = function() { return 5; };

// Note: Lines with b and c will crash the program.
// In practice, only a, d(), and e would execute.
// b and c throw ReferenceError due to TDZ.`,hints:["var is hoisted and initialized to undefined","let and const are hoisted but NOT initialized (TDZ)","Function declarations are fully hoisted; function expressions follow var rules"]}}],test:[{id:"mod2-q1",question:"What does lexical scope mean?",options:["Scope is determined at runtime","Scope is determined by where code is written","Scope changes with each call","Scope is always global"],correctAnswer:1,explanation:"Lexical (static) scope means variable access is determined by where the code is physically written in the source file, not where or how the function is called. This is why inner functions can access outer variables — the scope chain is built at parse time based on code nesting."},{id:"mod2-q2",question:"What is a closure?",options:["A way to close a function","A function that remembers variables from its lexical scope after the outer function returns","A global variable","An IIFE"],correctAnswer:1,explanation:'A closure is formed when a function "closes over" its surrounding lexical scope, retaining access to those variables even after the outer function has returned. This enables powerful patterns: data privacy (private variables), memoization caches, factory functions, and callback state preservation.'},{id:"mod2-q3",question:"What is the TDZ (Temporal Dead Zone)?",options:["A time-based error","The period between entering a scope and the let/const declaration being reached","A deprecated feature","A type of closure"],correctAnswer:1,explanation:"The TDZ (Temporal Dead Zone) is the region between entering a block scope and the line where let/const is declared. During this window, the variable exists (it's hoisted) but is uninitialized — any access throws ReferenceError. This prevents the confusing behavior of var where hoisted variables silently return undefined."},{id:"mod2-q4",question:"console.log(x); var x = 5; — What is logged?",options:["5","undefined","ReferenceError","null"],correctAnswer:1,explanation:"var declarations are hoisted to the top of their scope and initialized to undefined during the creation phase. So the engine sees: var x; console.log(x); x = 5; — the log runs before the assignment, printing undefined. With let/const this would throw ReferenceError due to the TDZ."},{id:"mod2-q5",question:"Why does for(var i...) with setTimeout print the same number?",options:["setTimeout is broken","var is function-scoped, so all callbacks share the same i","It's a browser bug","setTimeout runs synchronously"],correctAnswer:1,explanation:"var is function-scoped, not block-scoped, so there's only ONE i variable shared by all loop iterations. By the time the setTimeout callbacks execute (after the loop finishes), i has already reached its final value. Fix: use let (block-scoped, creates a new i per iteration) or an IIFE to capture each value."}]},Jh={id:"mod-3",title:"The this Keyword",description:"Understand all the rules of this: default binding, implicit binding, explicit binding, new binding, and arrow functions.",topics:[{id:"mod3-t1",title:"Four Rules of this",explanation:`## The \`this\` Rules (in priority order)

### Rule 1: new Binding (Highest Priority)

\`\`\`javascript
function User(name) {
  this.name = name; // this = newly created object
}
const user = new User("Alice"); // { name: "Alice" }
\`\`\`

### Rule 2: Explicit Binding (call, apply, bind)

\`\`\`javascript
function greet() {
  console.log(\`Hello, \${this.name}\`);
}

const obj = { name: "Bob" };
greet.call(obj);    // "Hello, Bob"
greet.apply(obj);   // "Hello, Bob"

const bound = greet.bind(obj);
bound();             // "Hello, Bob"
\`\`\`

### Rule 3: Implicit Binding

\`\`\`javascript
const person = {
  name: "Charlie",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // "Charlie" — this = person (object before the dot)
\`\`\`

### Rule 4: Default Binding (Lowest Priority)

\`\`\`javascript
function standalone() {
  console.log(this);
}
standalone(); // window (non-strict) or undefined (strict mode)
\`\`\`

### Binding Priority

\`\`\`
new > explicit (call/apply/bind) > implicit (dot) > default (global/undefined)
\`\`\``,task:{description:"Write examples demonstrating all four rules of `this` binding. Show how each rule determines what `this` refers to.",starterCode:`// Rule 1: new binding

// Rule 2: Explicit binding (call/apply/bind)

// Rule 3: Implicit binding

// Rule 4: Default binding`,solution:`// Rule 1: new binding
function Car(make) {
  this.make = make;
}
const myCar = new Car("Toyota");
console.log(myCar.make); // "Toyota"

// Rule 2: Explicit binding
function introduce() {
  return \`I am \${this.name}, age \${this.age}\`;
}
const data = { name: "Alice", age: 30 };
console.log(introduce.call(data));  // "I am Alice, age 30"
console.log(introduce.apply(data)); // "I am Alice, age 30"
const boundFn = introduce.bind(data);
console.log(boundFn());             // "I am Alice, age 30"

// Rule 3: Implicit binding
const user = {
  name: "Bob",
  sayName() { return this.name; },
};
console.log(user.sayName()); // "Bob"

// Rule 4: Default binding
function showThis() {
  "use strict";
  return this; // undefined in strict mode
}
console.log(showThis()); // undefined`,hints:["new creates a brand-new object and sets this to it","call/apply invoke immediately; bind returns a new function","The object before the dot determines this in implicit binding"]}},{id:"mod3-t2",title:"Arrow Functions & this Traps",explanation:`## Arrow Functions Don't Have Their Own \`this\`

Arrow functions inherit \`this\` from the enclosing lexical scope.

\`\`\`javascript
const team = {
  name: "Alpha",
  members: ["Alice", "Bob"],

  // Regular function: this = team
  listMembers() {
    this.members.forEach(function(member) {
      console.log(\`\${this.name}: \${member}\`); // this = undefined (strict) or window!
    });
  },

  // Arrow function: this = inherited from listMembers
  listMembersFixed() {
    this.members.forEach((member) => {
      console.log(\`\${this.name}: \${member}\`); // this = team ✓
    });
  },
};
\`\`\`

### Common Traps

\`\`\`javascript
// Trap 1: Method shorthand loss
const obj = {
  value: 42,
  getValue: () => this.value, // ✗ Arrow in object literal — this = global!
};
console.log(obj.getValue()); // undefined

// Fix: Use regular method
const objFixed = {
  value: 42,
  getValue() { return this.value; }, // ✓ this = objFixed
};

// Trap 2: Event handlers
class Button {
  constructor() {
    this.count = 0;
  }
  // ✗ Regular function loses this in event
  handleClickBad() {
    this.count++; // this is NOT the Button instance!
  }
  // ✓ Arrow function retains this
  handleClickGood = () => {
    this.count++; // this = Button instance
  };
}

// Trap 3: Cannot use call/apply/bind on arrows
const arrow = () => this;
arrow.call({ x: 1 }); // Still global this, not { x: 1 }
\`\`\``,task:{description:"Fix the broken this references in the code below. Each console.log should output the correct value.",starterCode:`const timer = {
  seconds: 0,
  start() {
    setInterval(function() {
      this.seconds++; // BUG: this is not timer!
      console.log(this.seconds);
    }, 1000);
  }
};

const calculator = {
  value: 0,
  add: (n) => {          // BUG: arrow function here
    this.value += n;
    return this;
  },
};`,solution:`const timer = {
  seconds: 0,
  start() {
    // FIX: Use arrow function to inherit this from start()
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};

const calculator = {
  value: 0,
  // FIX: Use regular method — arrow in object literal doesn't bind to object
  add(n) {
    this.value += n;
    return this;
  },
};

calculator.add(5).add(3);
console.log(calculator.value); // 8`,hints:["Arrow functions inherit this from their enclosing scope","Regular methods in object literals get this from the calling object","setInterval callbacks lose this unless you use arrow functions or bind"]}}],test:[{id:"mod3-q1",question:"What is the highest priority `this` binding?",options:["Default","Implicit","Explicit","new"],correctAnswer:3,explanation:"The priority order from highest to lowest is: new > explicit (call/apply/bind) > implicit (dot notation) > default (global/undefined). When you use new, JavaScript creates a brand-new object and sets this to it — this cannot be overridden by any other binding."},{id:"mod3-q2",question:"What does an arrow function's `this` refer to?",options:["The object it's called on","The enclosing lexical scope's this","Always window","Always undefined"],correctAnswer:1,explanation:"Arrow functions have no own this binding. They permanently inherit this from the enclosing lexical scope at the time they are defined. This makes them ideal for callbacks inside methods (e.g., array methods, setTimeout), but they should NOT be used as object methods since they won't bind to the object."},{id:"mod3-q3",question:"What is the difference between call() and apply()?",options:["No difference","call takes args individually, apply takes an array","apply is deprecated","call is for objects, apply for arrays"],correctAnswer:1,explanation:"Both immediately invoke the function with a specified this. The only difference is argument passing: call takes arguments individually — fn.call(ctx, a, b) — while apply takes them as an array — fn.apply(ctx, [a, b]). Memory trick: Apply = Array. In modern JS, you can use call with spread: fn.call(ctx, ...args)."},{id:"mod3-q4",question:"const obj = { x: 1, getX: () => this.x }; obj.getX() returns?",options:["1","undefined","Error","null"],correctAnswer:1,explanation:"Arrow functions in object literals inherit this from the outer scope (global or module scope), NOT from the object. Here getX is an arrow function defined at the top level, so this refers to the global object (or undefined in strict mode / modules), not obj. Use a regular method — getX() { return this.x; } — to bind this correctly."},{id:"mod3-q5",question:"Can you change an arrow function's this with bind?",options:["Yes","No","Only with call","Only in strict mode"],correctAnswer:1,explanation:"Arrow functions permanently capture this from their lexical scope at definition time. Unlike regular functions, call(), apply(), and bind() cannot override an arrow function's this — the argument is simply ignored. This is by design: arrow functions provide a predictable, non-rebindable this."}]},Yh={id:"mod-4",title:"Prototypes & Inheritance",description:"Prototypal inheritance, the prototype chain, Object.create, ES6 classes, and how they relate under the hood.",topics:[{id:"mod4-t1",title:"Prototype Chain",explanation:`## Prototypal Inheritance

Every object in JavaScript has an internal \`[[Prototype]]\` link (accessible via \`__proto__\` or \`Object.getPrototypeOf\`).

\`\`\`javascript
const animal = {
  alive: true,
  breathe() { return "breathing..."; },
};

const dog = Object.create(animal);
dog.bark = function() { return "Woof!"; };

console.log(dog.bark());    // "Woof!" — own property
console.log(dog.breathe()); // "breathing..." — found on prototype
console.log(dog.alive);     // true — found on prototype
console.log(dog.fly);       // undefined — not in chain
\`\`\`

### The Chain

\`\`\`
dog → animal → Object.prototype → null
\`\`\`

### Property Lookup

\`\`\`javascript
console.log(dog.hasOwnProperty("bark"));    // true
console.log(dog.hasOwnProperty("breathe")); // false (on prototype)
console.log("breathe" in dog);               // true (in finds prototype props)
\`\`\`

### Constructor Functions

\`\`\`javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

const alice = new Person("Alice");
console.log(alice.greet()); // "Hi, I'm Alice"

// alice → Person.prototype → Object.prototype → null
\`\`\``,task:{description:"Create a prototype chain with three levels: Shape → Rectangle → Square. Each level should add methods. Show that Square instances can access all inherited methods.",starterCode:`// Create Shape with an area() method
// Create Rectangle inheriting from Shape
// Create Square inheriting from Rectangle`,solution:`const Shape = {
  type: "shape",
  describe() {
    return \`I am a \${this.type}\`;
  },
};

const Rectangle = Object.create(Shape);
Rectangle.type = "rectangle";
Rectangle.init = function(w, h) {
  this.width = w;
  this.height = h;
  return this;
};
Rectangle.area = function() {
  return this.width * this.height;
};

const Square = Object.create(Rectangle);
Square.type = "square";
Square.initSquare = function(side) {
  return this.init(side, side);
};

const sq = Object.create(Square).initSquare(5);
console.log(sq.area());     // 25 — from Rectangle
console.log(sq.describe()); // "I am a square" — from Shape
console.log(sq.type);       // "square" — own/Square level

// Chain: sq → Square → Rectangle → Shape → Object.prototype → null`,hints:["Use Object.create() to set up the prototype chain","Each level adds its own methods/properties","Property lookup walks up the chain until found or null"]}},{id:"mod4-t2",title:"ES6 Classes (Syntactic Sugar)",explanation:`## Classes Under the Hood

ES6 classes are just syntactic sugar over prototypal inheritance.

\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name; // Instance property
  }

  speak() { // Goes on Animal.prototype
    return \`\${this.name} makes a noise.\`;
  }

  static create(name) { // On the class itself, not instances
    return new Animal(name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Must call super before using this!
    this.breed = breed;
  }

  speak() { // Override
    return \`\${this.name} barks!\`;
  }

  parentSpeak() {
    return super.speak(); // Call parent method
  }
}

const rex = new Dog("Rex", "Lab");
console.log(rex.speak());       // "Rex barks!"
console.log(rex.parentSpeak()); // "Rex makes a noise."
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
\`\`\`

### What Classes Really Are

\`\`\`javascript
// This class:
class Foo {
  constructor(x) { this.x = x; }
  getX() { return this.x; }
}

// Is equivalent to:
function Foo(x) { this.x = x; }
Foo.prototype.getX = function() { return this.x; };

// Proof:
console.log(typeof Foo); // "function"
\`\`\`

### Private Fields (ES2022)

\`\`\`javascript
class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acct = new BankAccount();
acct.deposit(100);
console.log(acct.balance); // 100
// console.log(acct.#balance); // SyntaxError: private field
\`\`\``,task:{description:"Refactor the constructor function pattern into an ES6 class with inheritance, a static method, and a private field.",starterCode:`// Convert to ES6 class:
function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}
Vehicle.prototype.describe = function() {
  return this.make + " " + this.year;
};

// Add: ElectricVehicle extends Vehicle
// Add: private #batteryLevel
// Add: static compare(ev1, ev2)`,solution:`class Vehicle {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }

  describe() {
    return \`\${this.make} \${this.year}\`;
  }
}

class ElectricVehicle extends Vehicle {
  #batteryLevel = 100;

  constructor(make, year, range) {
    super(make, year);
    this.range = range;
  }

  charge() {
    this.#batteryLevel = 100;
  }

  drive(km) {
    const drain = Math.round((km / this.range) * 100);
    this.#batteryLevel = Math.max(0, this.#batteryLevel - drain);
  }

  get battery() {
    return this.#batteryLevel;
  }

  static compare(ev1, ev2) {
    return ev1.range - ev2.range;
  }
}

const tesla = new ElectricVehicle("Tesla", 2024, 400);
const rivian = new ElectricVehicle("Rivian", 2024, 500);
console.log(tesla.describe()); // "Tesla 2024"
tesla.drive(100);
console.log(tesla.battery); // 75
console.log(ElectricVehicle.compare(tesla, rivian)); // -100`,hints:["Use extends for inheritance, super() in constructor","Private fields use # prefix","Static methods are called on the class, not instances"]}}],test:[{id:"mod4-q1",question:"What is at the end of every prototype chain?",options:["Object","undefined","null","Function"],correctAnswer:2,explanation:"Every prototype chain terminates with null. Object.prototype sits at the top of most chains, and its [[Prototype]] is null: Object.getPrototypeOf(Object.prototype) === null. When a property lookup walks the chain and reaches null, it returns undefined — indicating the property doesn't exist anywhere in the chain."},{id:"mod4-q2",question:"What does Object.create(proto) do?",options:["Copies proto","Creates a new object with proto as its prototype","Freezes proto","Clones proto deeply"],correctAnswer:1,explanation:"Object.create(proto) creates a brand-new empty object whose internal [[Prototype]] link points to proto. This is the purest way to set up prototypal inheritance without using constructors. The new object inherits all properties and methods from proto through the prototype chain, but owns none of them initially."},{id:"mod4-q3",question:"ES6 classes are syntactic sugar over what?",options:["Java classes","Constructor functions and prototypes","Factory functions","Modules"],correctAnswer:1,explanation:`ES6 classes are syntactic sugar over JavaScript's existing constructor function + prototype pattern. Under the hood: class methods go on the prototype, the constructor becomes the function body, extends sets up the prototype chain, and typeof MyClass === "function". Understanding this helps debug inheritance issues and explains why classes behave differently from traditional OOP languages.`},{id:"mod4-q4",question:"What does super() do in a child constructor?",options:["Creates a new scope","Calls the parent constructor","Returns the parent object","Skips the parent"],correctAnswer:1,explanation:"super() calls the parent class constructor, allowing it to initialize inherited properties on the new instance. It MUST be called before using this in a child constructor — otherwise JavaScript throws ReferenceError. This is because the child constructor doesn't create its own this; it relies on the parent to do so."},{id:"mod4-q5",question:"How are private fields denoted in ES2022?",options:["_name","private name","#name","@name"],correctAnswer:2,explanation:`ES2022 private class fields use the # prefix: #balance, #password, etc. They are truly private — not accessible from outside the class, not even through Object.keys() or JSON.stringify(). This is much stronger than the _name convention which is just a naming hint with no enforcement. Private fields are checked at the class level, so they cannot be accessed even via bracket notation (obj["#field"] doesn't work).`}]},Xh={id:"mod-5",title:"Type Coercion & Equality Traps",description:"Abstract vs strict equality, implicit type coercion, truthy/falsy values, and all the weird edge cases you need to know.",topics:[{id:"mod5-t1",title:"Implicit Coercion Rules",explanation:`## Type Coercion

JavaScript automatically converts types in certain operations.

### String Coercion (+ with a string)

\`\`\`javascript
"5" + 3     // "53" — number coerced to string
"5" + true  // "5true"
"5" + null  // "5null"
"5" + undefined // "5undefined"
\`\`\`

### Numeric Coercion (-, *, /, comparison)

\`\`\`javascript
"5" - 3     // 2 — string coerced to number
"5" * "2"   // 10
true + 1    // 2 (true → 1)
false + 1   // 1 (false → 0)
null + 1    // 1 (null → 0)
undefined + 1 // NaN (undefined → NaN)
\`\`\`

### Boolean Coercion

\`\`\`javascript
// Falsy values (everything else is truthy):
Boolean(false)     // false
Boolean(0)         // false
Boolean(-0)        // false
Boolean(0n)        // false (BigInt zero)
Boolean("")        // false (empty string)
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false

// Truthy surprises:
Boolean("0")       // true! (non-empty string)
Boolean("false")   // true! (non-empty string)
Boolean([])        // true! (empty array)
Boolean({})        // true! (empty object)
\`\`\`

### Weird Edge Cases

\`\`\`javascript
[] + []        // "" (both coerced to "")
[] + {}        // "[object Object]"
{} + []        // 0 (browser: {} is empty block, +[] is 0)
NaN === NaN    // false! Use Number.isNaN()
null == undefined  // true
null === undefined // false
\`\`\``,task:{description:"Predict the result of each expression below. Write the answer and explain the coercion that happens.",starterCode:`// Predict each result:
"10" - 5        // ?
true + true     // ?
"" == false     // ?
[] == false     // ?
null == 0       // ?
null == undefined // ?
NaN == NaN      // ?
"1" == 1        // ?`,solution:`// Results with explanations:
"10" - 5         // 5 — "-" triggers numeric coercion: "10" → 10
true + true      // 2 — "+" triggers numeric: true → 1, so 1 + 1
"" == false       // true — both coerce to 0: "" → 0, false → 0
[] == false       // true — [] → "" → 0, false → 0
null == 0         // false! — null only loosely equals undefined
null == undefined  // true — special rule in the spec
NaN == NaN        // false — NaN is not equal to anything, even itself
"1" == 1          // true — "1" coerced to number 1`,hints:["The - operator always triggers numeric coercion","null only equals undefined with ==, not 0","NaN !== NaN — use Number.isNaN() to check for NaN"]}},{id:"mod5-t2",title:"== vs === and Object Comparison",explanation:`## Strict vs Loose Equality

### == (Loose / Abstract Equality)

Performs type coercion before comparing:

\`\`\`javascript
1 == "1"       // true (string coerced to number)
0 == false     // true (false coerced to 0)
"" == false    // true (both coerce to 0)
null == undefined // true (special rule)
\`\`\`

### === (Strict Equality)

No type coercion — types must match:

\`\`\`javascript
1 === "1"      // false (different types)
0 === false    // false (number vs boolean)
null === undefined // false (different types)
\`\`\`

### Object Comparison

\`\`\`javascript
// Objects compare by REFERENCE, not value
const a = { x: 1 };
const b = { x: 1 };
const c = a;

a === b; // false (different objects in memory)
a === c; // true (same reference)

// Arrays too:
[1, 2] === [1, 2]; // false (different array objects)
\`\`\`

### Best Practices

\`\`\`javascript
// Always use === unless you specifically need coercion
if (value === null || value === undefined) { ... }

// Or use == only for null/undefined check:
if (value == null) { ... } // Checks both null and undefined

// For NaN:
Number.isNaN(NaN);  // true ✓
NaN === NaN;        // false ✗

// For -0:
Object.is(-0, 0);   // false ✓
-0 === 0;           // true ✗
\`\`\``,task:{description:"Write a deepEqual function that compares two values for structural equality, handling primitives, arrays, objects, null, NaN, and -0.",starterCode:`function deepEqual(a, b) {
  // TODO: Handle all cases
}`,solution:`function deepEqual(a, b) {
  // Handle identical references and primitives
  if (Object.is(a, b)) return true;

  // If either is not an object (or is null), they're not equal
  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  // Handle arrays
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual(a[key], b[key]));
}

// Tests:
console.log(deepEqual(1, 1));               // true
console.log(deepEqual(NaN, NaN));           // true (Object.is handles this)
console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual([1, [2]], [1, [2]])); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false`,hints:["Object.is handles NaN and -0 correctly","Compare keys length first as a quick check","Recursively compare all property values"]}}],test:[{id:"mod5-q1",question:'What does "5" - 3 evaluate to?',options:['"53"',"2","NaN","Error"],correctAnswer:1,explanation:'The minus operator (-) always triggers numeric coercion — it has no string overload, unlike (+). So "5" is converted to the number 5, then 5 - 3 = 2. Compare with "5" + 3 which gives "53" because + prefers string concatenation when one operand is a string.'},{id:"mod5-q2",question:"Is [] truthy or falsy?",options:["Falsy","Truthy","Neither","Depends on context"],correctAnswer:1,explanation:'Empty arrays [] are truthy in boolean context! JavaScript has exactly 8 falsy values: false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN. Everything else — including empty arrays [], empty objects {}, the string "0", and the string "false" — is truthy. Be careful: [] is truthy, but [] == false is true (due to type coercion, not truthiness).'},{id:"mod5-q3",question:"What is null == undefined?",options:["false","true","TypeError","null"],correctAnswer:1,explanation:'This is a special rule in the ECMAScript specification: null and undefined are loosely equal to each other, and to nothing else — not even 0, false, or "". This makes "value == null" a handy idiom that checks for both null and undefined in a single expression, which is one of the few legitimate uses of ==.'},{id:"mod5-q4",question:"Why does NaN === NaN return false?",options:["Bug","NaN represents an unknown value, so it can't equal anything","Type mismatch","Memory issue"],correctAnswer:1,explanation:'NaN (Not a Number) represents an undefined or unrepresentable numeric result — e.g., 0/0, parseInt("abc"), Math.sqrt(-1). Since the actual underlying value is unknown, IEEE 754 specifies that NaN is not equal to anything, including itself. To check for NaN, use Number.isNaN(x) (preferred) or x !== x (since NaN is the only value where this is true).'},{id:"mod5-q5",question:"How should objects be compared for equality?",options:["Using ===","Using ==","By reference with === or by deep comparison","Using toString()"],correctAnswer:2,explanation:"Both == and === compare objects by reference (memory address), not by structure or content. Two objects with identical properties are NOT equal unless they are the same object in memory. For structural comparison, you need a deep equality function (like Lodash's _.isEqual) or JSON.stringify() for simple cases. Note: JSON.stringify fails with circular refs, undefined values, and functions."}]},Zh={id:"mod-6",title:"ES6+ Features Deep Dive",description:"Destructuring, spread/rest, template literals, optional chaining, nullish coalescing, and modern syntax patterns.",topics:[{id:"mod6-t1",title:"Destructuring & Spread/Rest",explanation:`## Destructuring

### Object Destructuring

\`\`\`javascript
const user = { name: "Alice", age: 30, role: "admin" };

// Basic
const { name, age } = user;

// Rename
const { name: userName, age: userAge } = user;

// Default values
const { name, country = "US" } = user; // country = "US"

// Nested
const { address: { city } } = { address: { city: "NYC" } };

// Rest
const { name, ...rest } = user; // rest = { age: 30, role: "admin" }
\`\`\`

### Array Destructuring

\`\`\`javascript
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
// first = 1, second = 2, remaining = [3, 4, 5]

// Skip elements
const [, , third] = [1, 2, 3]; // third = 3

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
\`\`\`

### Spread Operator

\`\`\`javascript
// Arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Objects
const defaults = { theme: "dark", lang: "en" };
const prefs = { ...defaults, lang: "fr" }; // { theme: "dark", lang: "fr" }

// Function arguments
function sum(...nums) { // Rest parameter
  return nums.reduce((a, b) => a + b, 0);
}
const numbers = [1, 2, 3];
sum(...numbers); // Spread into arguments
\`\`\``,task:{description:"Use destructuring and spread to merge user profiles from multiple sources, with later sources overriding earlier ones. Handle nested objects properly.",starterCode:`const defaults = {
  theme: "light",
  notifications: { email: true, sms: false },
  lang: "en",
};

const userPrefs = {
  theme: "dark",
  notifications: { sms: true },
};

// TODO: Merge so that nested objects are properly merged
// (not just overwritten by the later source)`,solution:`const defaults = {
  theme: "light",
  notifications: { email: true, sms: false },
  lang: "en",
};

const userPrefs = {
  theme: "dark",
  notifications: { sms: true },
};

// Deep merge specific nested objects
const merged = {
  ...defaults,
  ...userPrefs,
  notifications: {
    ...defaults.notifications,
    ...userPrefs.notifications,
  },
};

console.log(merged);
// {
//   theme: "dark",        ← from userPrefs
//   notifications: {
//     email: true,         ← from defaults (preserved!)
//     sms: true,           ← from userPrefs (overridden)
//   },
//   lang: "en",           ← from defaults
// }

// Destructure the result
const { theme, notifications: { email, sms }, lang } = merged;
console.log(theme, email, sms, lang); // "dark" true true "en"`,hints:["Spread only does a shallow merge","Nested objects need to be spread separately","Later properties in spread override earlier ones"]}},{id:"mod6-t2",title:"Optional Chaining & Nullish Coalescing",explanation:`## Optional Chaining (?.) 

\`\`\`javascript
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
  },
};

// Without optional chaining:
const zip = user && user.address && user.address.zip; // undefined

// With optional chaining:
const zip2 = user?.address?.zip; // undefined (no error!)

// Works with methods:
const result = user?.getProfile?.(); // undefined if getProfile doesn't exist

// Works with arrays:
const first = users?.[0]?.name;

// Works with dynamic properties:
const key = "name";
const val = user?.[key]; // "Alice"
\`\`\`

## Nullish Coalescing (??)

\`\`\`javascript
// || treats ALL falsy values as "missing"
0 || "default"       // "default" (0 is falsy!)
"" || "default"      // "default" (empty string is falsy!)
false || "default"   // "default" (false is falsy!)

// ?? only treats null/undefined as "missing"
0 ?? "default"       // 0 ✓
"" ?? "default"      // "" ✓
false ?? "default"   // false ✓
null ?? "default"    // "default"
undefined ?? "default" // "default"
\`\`\`

### ?? vs || Decision Guide

| Use || when | Use ?? when |
|------------|------------|
| 0, "", false are invalid | 0, "", false are valid values |
| You want any falsy → default | You only want null/undefined → default |
| \`count \\|\\| 1\` | \`count ?? 0\` |`,task:{description:"Refactor the code to use optional chaining and nullish coalescing. Identify cases where ?? is more appropriate than ||.",starterCode:`function getUserDisplayName(user) {
  // Old style with && and ||
  var name;
  if (user && user.profile && user.profile.displayName) {
    name = user.profile.displayName;
  } else if (user && user.name) {
    name = user.name;
  } else {
    name = "Anonymous";
  }
  
  // Bug: score of 0 should be valid, not replaced with "N/A"
  var score = (user && user.stats && user.stats.score) || "N/A";
  
  return { name: name, score: score };
}`,solution:`function getUserDisplayName(user) {
  // Clean with optional chaining and nullish coalescing
  const name = user?.profile?.displayName
    ?? user?.name
    ?? "Anonymous";

  // ?? preserves 0 as a valid score (|| would replace 0 with "N/A")
  const score = user?.stats?.score ?? "N/A";

  return { name, score };
}

// Tests:
console.log(getUserDisplayName({ profile: { displayName: "Alice" } }));
// { name: "Alice", score: "N/A" }

console.log(getUserDisplayName({ name: "Bob", stats: { score: 0 } }));
// { name: "Bob", score: 0 } — 0 is preserved with ??

console.log(getUserDisplayName(null));
// { name: "Anonymous", score: "N/A" }`,hints:["?. returns undefined if any part of the chain is null/undefined",'?? only falls through on null/undefined, preserving 0, "", and false',"|| falls through on ALL falsy values"]}}],test:[{id:"mod6-q1",question:"What does const { a: b } = { a: 1 } assign?",options:["a = 1","b = 1","Both a and b = 1","Error"],correctAnswer:1,explanation:'In destructuring, { a: b } means "take property a and assign it to variable b". The part before the colon (a) is the property key to read; the part after (b) is the variable name to create. So b = 1, and no variable named a is declared. This pattern is useful when property names conflict with existing variables.'},{id:"mod6-q2",question:"What does ...rest do in function parameters?",options:["Spreads arguments","Collects remaining arguments into an array","Creates a copy","Nothing"],correctAnswer:1,explanation:"When ... appears in function parameters, it's the rest operator — it collects all remaining arguments into a real Array. Unlike the old arguments object (which is array-like but not an actual Array), rest parameters give you a proper Array with all Array methods (map, filter, reduce, etc.). Rest must be the last parameter: function fn(first, ...rest) {}."},{id:"mod6-q3",question:'What is 0 || "default"?',options:["0",'"default"',"false","undefined"],correctAnswer:1,explanation:'The logical OR (||) returns the first truthy operand, or the last operand if none are truthy. Since 0 is falsy, || skips it and returns "default". This is a common bug when 0 is a valid value (e.g., a score, count, or index). Use the nullish coalescing operator (??) instead when 0, "", or false are legitimate values you want to keep.'},{id:"mod6-q4",question:'What is 0 ?? "default"?',options:["0",'"default"',"false","undefined"],correctAnswer:0,explanation:'The nullish coalescing operator (??) only treats null and undefined as "missing" — all other values pass through, including 0, "", false, and NaN. So 0 ?? "default" returns 0 because 0 is not null or undefined. This makes ?? safer than || for numeric or boolean defaults where falsy values are valid.'},{id:"mod6-q5",question:"Does spread create a deep or shallow copy?",options:["Deep copy","Shallow copy","No copy","Depends"],correctAnswer:1,explanation:"The spread operator ({...obj} or [...arr]) creates a shallow copy — only the first level of properties is duplicated. Nested objects and arrays still share the same reference. To create a fully independent deep copy, use structuredClone() (modern) or a library like Lodash's _.cloneDeep(). Be mindful of this when working with nested state in React or Redux."}]},em={id:"mod-7",title:"Promises & Async/Await",description:"Promises, chaining, error handling, Promise.all/allSettled/race/any, async/await patterns, and common pitfalls.",topics:[{id:"mod7-t1",title:"Promises Deep Dive",explanation:`## Promise States

\`\`\`
Pending → Fulfilled (resolved)
       → Rejected
\`\`\`

### Creating Promises

\`\`\`javascript
const p = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Done!");
  else reject(new Error("Failed!"));
});

p.then(val => console.log(val))     // "Done!"
 .catch(err => console.error(err));
\`\`\`

### Chaining

\`\`\`javascript
fetch("/api/user/1")
  .then(res => res.json())           // Returns new promise
  .then(user => fetch(\`/api/posts/\${user.id}\`))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err))  // Catches ANY error in chain
  .finally(() => hideSpinner());      // Always runs
\`\`\`

### Combinators

\`\`\`javascript
// Promise.all — All must succeed (fails fast)
Promise.all([p1, p2, p3]).then(([r1, r2, r3]) => ...);

// Promise.allSettled — Wait for all, regardless of outcome
Promise.allSettled([p1, p2]).then(results => {
  results.forEach(r => {
    if (r.status === "fulfilled") console.log(r.value);
    else console.log(r.reason);
  });
});

// Promise.race — First to settle wins
Promise.race([fetchWithTimeout, timeout]);

// Promise.any — First to succeed wins (ignores rejections)
Promise.any([cdn1, cdn2, cdn3]).then(fastest => ...);
\`\`\``,task:{description:"Implement a fetchWithTimeout function that wraps fetch with a timeout. If the request takes longer than the timeout, reject with a timeout error.",starterCode:`function fetchWithTimeout(url, timeoutMs) {
  // TODO: Race between fetch and a timeout
}`,solution:`function fetchWithTimeout(url, timeoutMs) {
  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(\`Request timed out after \${timeoutMs}ms\`));
    }, timeoutMs);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

// Usage:
fetchWithTimeout("https://api.example.com/data", 5000)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.message.includes("timed out")) {
      console.log("Request took too long!");
    } else {
      console.error("Network error:", err);
    }
  });`,hints:["Promise.race returns the first promise to settle","Create a separate promise that rejects after the timeout","The fetch and timeout race against each other"]}},{id:"mod7-t2",title:"Async/Await Patterns",explanation:`## Async/Await

\`\`\`javascript
// async function always returns a Promise
async function getUser(id) {
  const res = await fetch(\`/api/user/\${id}\`);
  const user = await res.json();
  return user; // Wrapped in Promise.resolve(user)
}
\`\`\`

### Error Handling

\`\`\`javascript
// try/catch
async function fetchData() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err; // Re-throw if needed
  }
}
\`\`\`

### Parallel vs Sequential

\`\`\`javascript
// ✗ Sequential (SLOW) — each awaits the previous, requests happen one after another
async function sequential() {
  const user = await getUser(1);    // 500ms — blocks until resolved
  const posts = await getPosts(1);  // 500ms — doesn't START until user is done
  return { user, posts };           // Total: 1000ms (wasted 500ms!)
}

// ✓ Parallel (FAST) — both requests fire immediately, await the combined result
async function parallel() {
  const [user, posts] = await Promise.all([
    getUser(1),   // Starts immediately — 500ms
    getPosts(1),  // Starts immediately — 500ms (runs concurrently)
  ]);
  return { user, posts }; // Total: ~500ms (both ran at the same time)
}
\`\`\`

### Common Pitfalls

\`\`\`javascript
// ✗ forEach doesn't wait for async — it ignores the returned Promise
[1, 2, 3].forEach(async (id) => {
  await processItem(id); // All fire at once! forEach doesn't await the Promise
});
// Code after this line runs IMMEDIATELY, before any processItem completes

// ✓ for...of respects await — processes items one at a time
for (const id of [1, 2, 3]) {
  await processItem(id); // Sequential: waits for each before starting the next
}

// ✓ Promise.all for controlled parallel execution — all run concurrently
await Promise.all([1, 2, 3].map(id => processItem(id)));
// Continues only after ALL items are processed
\`\`\``,task:{description:"Write a retry wrapper that retries a failed async function up to N times with exponential backoff.",starterCode:`async function retry(fn, maxRetries = 3) {
  // TODO: Call fn(), retry on failure with exponential backoff
}`,solution:`async function retry(fn, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxRetries - 1) throw err;
      const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s...
      console.log(\`Attempt \${attempt + 1} failed, retrying in \${delay}ms...\`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Usage:
const result = await retry(async () => {
  const res = await fetch("https://api.example.com/data");
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}, 3);`,hints:["Use a for loop to track attempts","Exponential backoff: delay = 2^attempt * 1000ms","Re-throw the error on the last attempt"]}}],test:[{id:"mod7-q1",question:"What does Promise.all do if one promise rejects?",options:["Ignores it","Rejects immediately with that error","Waits for all to complete","Returns partial results"],correctAnswer:1,explanation:`Promise.all is "fail-fast": if ANY single promise rejects, the entire Promise.all rejects immediately with that rejection reason. The other promises continue running in the background but their results are discarded. If you need results from all promises regardless of success/failure, use Promise.allSettled() instead — it waits for every promise and reports each one's status.`},{id:"mod7-q2",question:"What does an async function always return?",options:["undefined","A Promise","The return value directly","An async iterator"],correctAnswer:1,explanation:"An async function ALWAYS returns a Promise, even if you return a plain value. return 42 becomes Promise.resolve(42); throw new Error() becomes a rejected Promise. If you return a Promise, it's not double-wrapped — async automatically unwraps it. This is why you can always .then() the result of an async function call."},{id:"mod7-q3",question:"Why is forEach with async/await problematic?",options:["It's not","forEach doesn't await the returned promises","It creates infinite loops","It throws errors"],correctAnswer:1,explanation:"Array.prototype.forEach ignores the return value of its callback. When the callback is async, it returns a Promise — but forEach discards it and immediately moves to the next iteration. All iterations fire concurrently without waiting. Fix: use for...of with await for sequential execution, or Promise.all(array.map(async (item) => ...)) for controlled parallel execution."},{id:"mod7-q4",question:"Which combinator waits for all promises regardless of outcome?",options:["Promise.all","Promise.allSettled","Promise.race","Promise.any"],correctAnswer:1,explanation:'Promise.allSettled waits for ALL promises to settle (either fulfill or reject) and returns an array of result objects: { status: "fulfilled", value } or { status: "rejected", reason }. Unlike Promise.all which fails fast on the first rejection, allSettled always gives you complete results — making it ideal for batch operations where partial success is acceptable.'},{id:"mod7-q5",question:"How do you run async operations in parallel?",options:["Use for...of","Use Promise.all with an array of promises","Use forEach","Sequential await calls"],correctAnswer:1,explanation:"Promise.all([p1, p2, p3]) starts all promises concurrently and waits for all to complete. Sequential await calls (const a = await p1; const b = await p2;) run one after another, wasting time if the operations are independent. Important: start all promises BEFORE awaiting: const [a, b] = await Promise.all([fetchA(), fetchB()]). If fetchA() and fetchB() each take 500ms, parallel takes 500ms total vs 1000ms sequential."}]},tm={id:"mod-8",title:"Event Loop & Microtasks",description:"The event loop, call stack, task queue, microtask queue, requestAnimationFrame, and execution order puzzles.",topics:[{id:"mod8-t1",title:"Event Loop Mechanics",explanation:`## The Event Loop

\`\`\`
┌───────────────────────────┐
│        Call Stack          │
│     (synchronous code)     │
└────────────┬──────────────┘
             │
┌────────────▼──────────────┐
│     Microtask Queue        │  ← Promise callbacks, queueMicrotask
│  (processed after EACH     │
│   stack frame completes)   │
└────────────┬──────────────┘
             │
┌────────────▼──────────────┐
│    Macrotask Queue         │  ← setTimeout, setInterval, I/O
│  (one per event loop tick) │
└───────────────────────────┘
\`\`\`

### Execution Order

\`\`\`javascript
console.log("1: sync");           // 1. Sync — runs immediately (call stack)

setTimeout(() => {
  console.log("2: macrotask");    // 4. Macrotask — runs LAST (task queue)
}, 0); // Even 0ms delay goes to the macrotask queue, not the call stack!

Promise.resolve().then(() => {
  console.log("3: microtask");    // 3. Microtask — runs after ALL sync code, before any macrotask
});

console.log("4: sync");           // 2. Sync — runs with #1 (still in the call stack)

// Output: "1: sync", "4: sync", "3: microtask", "2: macrotask"
// KEY RULE: Sync first → Microtasks next → Macrotasks last
\`\`\`

### Key Rule

> After the call stack empties, ALL microtasks are drained before the next macrotask.

### Nested Microtasks

\`\`\`javascript
Promise.resolve().then(() => {
  console.log("micro 1");
  Promise.resolve().then(() => {
    console.log("micro 2"); // Still runs before any setTimeout!
  });
});

setTimeout(() => console.log("macro"), 0);

// Output: micro 1, micro 2, macro
\`\`\`

### requestAnimationFrame

\`\`\`javascript
// requestAnimationFrame runs BEFORE the next paint
console.log("sync");
requestAnimationFrame(() => console.log("rAF"));
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));

// Typical output: sync, microtask, rAF, timeout
// (rAF timing depends on browser rendering cycle)
\`\`\``,task:{description:"Predict the output order of this code. Then verify your answer by running it.",starterCode:`console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
    setTimeout(() => console.log("D"), 0);
  })
  .then(() => console.log("E"));

setTimeout(() => {
  console.log("F");
  Promise.resolve().then(() => console.log("G"));
}, 0);

console.log("H");

// Predicted order: ?`,solution:`console.log("A"); // 1. Sync

setTimeout(() => console.log("B"), 0); // Queue macro #1

Promise.resolve()
  .then(() => {
    console.log("C");                   // 3. First microtask
    setTimeout(() => console.log("D"), 0); // Queue macro #3 (queued during C)
  })
  .then(() => console.log("E"));        // 4. Chained microtask

setTimeout(() => {
  console.log("F");                     // Macro #2
  Promise.resolve().then(() => console.log("G")); // Microtask during F
}, 0);

console.log("H"); // 2. Sync

// Output: A, H, C, E, B, F, G, D
//
// Explanation:
// 1. Sync: A, H
// 2. Microtasks: C (queues macro D), then E
// 3. Macro #1: B
// 4. Macro #2: F → microtask G drains
// 5. Macro #3: D`,hints:["All synchronous code runs first","ALL microtasks drain before the next macrotask","Microtasks queued during microtask processing also drain immediately"]}}],test:[{id:"mod8-q1",question:"Which runs first: setTimeout(fn, 0) or Promise.resolve().then(fn)?",options:["setTimeout","Promise.then (microtask)","They run in registration order","Depends on browser"],correctAnswer:1,explanation:"Microtasks (Promise.then, queueMicrotask) ALWAYS run before macrotasks (setTimeout, setInterval), even with 0ms delay. After the synchronous call stack empties, the engine drains the entire microtask queue before picking up the next macrotask. This is guaranteed by the HTML specification's event loop processing model."},{id:"mod8-q2",question:"What is a microtask?",options:["A small setTimeout","A task queued by Promises, queueMicrotask, MutationObserver","Any callback","A CSS animation frame"],correctAnswer:1,explanation:"Microtasks are high-priority tasks created by: Promise.then/catch/finally callbacks, queueMicrotask(), MutationObserver, and the internals of async/await. They run after the current synchronous code completes but BEFORE any macrotask (setTimeout, I/O, events). The microtask queue is fully drained between each macrotask, which is why chained .then() calls execute before the next setTimeout fires."},{id:"mod8-q3",question:"Can microtasks block the event loop?",options:["No","Yes, if they queue more microtasks indefinitely","Only in strict mode","Only with async/await"],correctAnswer:1,explanation:"Yes! If a microtask queues another microtask, the engine drains the new one immediately — before moving to the next macrotask. If this happens indefinitely (e.g., a recursive Promise.resolve().then(fn)), the microtask queue never empties, effectively starving macrotasks, requestAnimationFrame, and rendering. This can freeze the entire page."},{id:"mod8-q4",question:"When does requestAnimationFrame callback run?",options:["Before microtasks","After microtasks, before the next paint","After setTimeout","At page load"],correctAnswer:1,explanation:"requestAnimationFrame (rAF) callbacks run after microtasks drain but BEFORE the browser paints the next frame. The typical cycle is: run macrotask → drain microtasks → run rAF callbacks → paint. This makes rAF ideal for smooth visual updates (animations, DOM measurements) because your code runs right before the pixels hit the screen, avoiding visual jank."},{id:"mod8-q5",question:"console.log(1); setTimeout(() => console.log(2)); Promise.resolve().then(() => console.log(3)); console.log(4); — Output?",options:["1, 2, 3, 4","1, 4, 3, 2","1, 3, 2, 4","1, 4, 2, 3"],correctAnswer:1,explanation:"Step by step: (1) Synchronous: 1 and 4 execute immediately. (2) Microtask: Promise.then → 3 runs next because microtasks are drained before macrotasks. (3) Macrotask: setTimeout → 2 runs last. Final output: 1, 4, 3, 2. The key insight: ALL sync code first, then ALL microtasks, then macrotasks."}]},nm={id:"mod-9",title:"Iterators, Generators & Symbols",description:"The iteration protocol, custom iterables, generator functions, yield, Symbol.iterator, and async iterators.",topics:[{id:"mod9-t1",title:"Iterators & Symbol.iterator",explanation:`## The Iteration Protocol

An object is **iterable** if it has a \`[Symbol.iterator]()\` method that returns an **iterator** (an object with a \`next()\` method).

\`\`\`javascript
// Built-in iterables: Array, String, Map, Set
const arr = [1, 2, 3];
const iter = arr[Symbol.iterator]();

iter.next(); // { value: 1, done: false }
iter.next(); // { value: 2, done: false }
iter.next(); // { value: 3, done: false }
iter.next(); // { value: undefined, done: true }
\`\`\`

### Custom Iterable

\`\`\`javascript
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last
          ? { value: current++, done: false }
          : { done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

console.log([...range]); // [1, 2, 3, 4, 5]
\`\`\`

### What Uses Iterables?

- \`for...of\`
- Spread: \`[...iterable]\`
- Destructuring: \`const [a, b] = iterable\`
- \`Array.from(iterable)\`
- \`new Map(iterable)\`, \`new Set(iterable)\`
- \`Promise.all(iterable)\``,task:{description:"Create a custom iterable class called InfiniteCounter that yields numbers starting from a given value. Use Symbol.iterator.",starterCode:`class InfiniteCounter {
  constructor(start = 0) {
    // TODO
  }
  // TODO: implement Symbol.iterator
}

// Usage:
// const counter = new InfiniteCounter(10);
// for (const n of counter) {
//   if (n > 15) break;
//   console.log(n); // 10, 11, 12, 13, 14, 15
// }`,solution:`class InfiniteCounter {
  constructor(start = 0) {
    this.start = start;
  }

  [Symbol.iterator]() {
    let current = this.start;
    return {
      next() {
        return { value: current++, done: false };
      },
    };
  }
}

const counter = new InfiniteCounter(10);
for (const n of counter) {
  if (n > 15) break;
  console.log(n); // 10, 11, 12, 13, 14, 15
}

// Also works with destructuring:
const [a, b, c] = new InfiniteCounter(100);
console.log(a, b, c); // 100, 101, 102`,hints:["Implement [Symbol.iterator]() returning an object with next()","next() returns { value, done }","For infinite iterators, done is always false — use break to stop"]}},{id:"mod9-t2",title:"Generator Functions",explanation:`## Generators

Generators are functions that can be paused and resumed with \`yield\`.

\`\`\`javascript
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
\`\`\`

### Generators Are Iterables

\`\`\`javascript
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

console.log([...range(1, 5)]); // [1, 2, 3, 4, 5]

for (const n of range(10, 13)) {
  console.log(n); // 10, 11, 12, 13
}
\`\`\`

### Two-Way Communication

\`\`\`javascript
function* dialog() {
  const name = yield "What is your name?";
  const age = yield \`Hello \${name}! How old are you?\`;
  return \`\${name} is \${age} years old.\`;
}

const d = dialog();
console.log(d.next().value);         // "What is your name?"
console.log(d.next("Alice").value);  // "Hello Alice! How old are you?"
console.log(d.next(30).value);       // "Alice is 30 years old."
\`\`\`

### yield* Delegation

\`\`\`javascript
function* inner() {
  yield 3;
  yield 4;
}

function* outer() {
  yield 1;
  yield 2;
  yield* inner(); // Delegate to inner
  yield 5;
}

console.log([...outer()]); // [1, 2, 3, 4, 5]
\`\`\`

### Async Generators

\`\`\`javascript
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const res = await fetch(\`\${url}?page=\${page}\`);
    const data = await res.json();
    if (data.length === 0) return;
    yield data;
    page++;
  }
}

for await (const page of fetchPages("/api/items")) {
  console.log(page);
}
\`\`\``,task:{description:"Create a generator that implements a simple state machine for a traffic light: green → yellow → red → green (repeating).",starterCode:`function* trafficLight() {
  // TODO: Yield "green", "yellow", "red" in a loop
}

// Usage:
// const light = trafficLight();
// light.next().value → "green"
// light.next().value → "yellow"
// light.next().value → "red"
// light.next().value → "green" (repeats)`,solution:`function* trafficLight() {
  const states = ["green", "yellow", "red"];
  let index = 0;
  while (true) {
    yield states[index];
    index = (index + 1) % states.length;
  }
}

const light = trafficLight();
console.log(light.next().value); // "green"
console.log(light.next().value); // "yellow"
console.log(light.next().value); // "red"
console.log(light.next().value); // "green"
console.log(light.next().value); // "yellow"

// Can also iterate:
let count = 0;
for (const state of trafficLight()) {
  console.log(state);
  if (++count >= 9) break; // 3 full cycles
}`,hints:["Use while(true) to repeat the cycle indefinitely","yield pauses and returns the current state","Use modulo (%) to cycle through the array"]}}],test:[{id:"mod9-q1",question:"What method must an iterable implement?",options:["next()","iterate()","[Symbol.iterator]()","[Symbol.for]()"],correctAnswer:2,explanation:"The iterable protocol requires a [Symbol.iterator]() method that returns an iterator object (which itself must have a next() method). Note the distinction: the iterable has [Symbol.iterator](), the iterator has next(). Built-in iterables include Array, String, Map, Set, TypedArray, arguments, and NodeList."},{id:"mod9-q2",question:"What does yield do in a generator?",options:["Stops the function permanently","Pauses execution and returns a value","Creates a new thread","Throws an error"],correctAnswer:1,explanation:`yield pauses the generator function and returns { value, done: false } to the caller. The function's state (local variables, position) is preserved. When next() is called again, execution resumes from right after the yield. This "lazy evaluation" is powerful for infinite sequences, paginated data, and cooperative multitasking — values are produced on demand rather than all at once.`},{id:"mod9-q3",question:"What does yield* do?",options:["Yields all values","Delegates to another iterable/generator","Yields undefined","Creates a sub-generator"],correctAnswer:1,explanation:"yield* delegates iteration to another iterable or generator, yielding each of its values one by one. It's syntactic sugar for: for (const val of otherIterable) { yield val; }. This is essential for composing generators — breaking complex sequences into reusable sub-generators. The return value of yield* is the return value of the delegated generator."},{id:"mod9-q4",question:"How do you pass data INTO a generator?",options:["As constructor argument","Via generator.next(value)","Through global state","With yield.set()"],correctAnswer:1,explanation:"Calling generator.next(value) sends value into the generator, where it becomes the return value of the currently paused yield expression. NOTE: the FIRST next() call starts the generator up to the first yield — any value passed to the first next() is discarded. Two-way communication: yield sends data OUT, next(val) pushes data IN. This enables conversational patterns like dialog systems."},{id:"mod9-q5",question:"What is an async generator?",options:["A faster generator","A generator that can use await and is consumed with for-await-of","A generator that runs in parallel","A deprecated feature"],correctAnswer:1,explanation:"Async generators (async function*) combine generators with async/await: they can yield values asynchronously using await inside the function body. Consumed with for await...of. Real-world use cases: paginated API calls (fetch page, yield results, repeat), streaming data processing, and reading files line by line. Each yield produces a Promise that the consumer awaits."}]},rm={id:"mod-10",title:"Proxy & Reflect",description:"Metaprogramming with Proxy and Reflect: intercepting operations, validation, logging, and real-world patterns.",topics:[{id:"mod10-t1",title:"Proxy Fundamentals",explanation:`## Proxy

A \`Proxy\` wraps an object and intercepts operations on it.

\`\`\`javascript
const handler = {
  get(target, prop, receiver) {
    console.log(\`Reading \${String(prop)}\`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(\`Setting \${String(prop)} = \${value}\`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const user = new Proxy({ name: "Alice" }, handler);
user.name;        // log: "Reading name" → "Alice"
user.age = 30;    // log: "Setting age = 30"
\`\`\`

### Traps

| Trap | Intercepts |
|------|------------|
| \`get\` | Property read |
| \`set\` | Property write |
| \`has\` | \`in\` operator |
| \`deleteProperty\` | \`delete\` |
| \`apply\` | Function call |
| \`construct\` | \`new\` operator |
| \`ownKeys\` | \`Object.keys\`, \`for...in\` |

### Validation Proxy

\`\`\`javascript
function createValidated(schema) {
  return new Proxy({}, {
    set(target, prop, value) {
      const validator = schema[prop];
      if (validator && !validator(value)) {
        throw new TypeError(\`Invalid value for \${String(prop)}: \${value}\`);
      }
      target[prop] = value;
      return true;
    },
  });
}

const user = createValidated({
  age: (v) => typeof v === "number" && v >= 0 && v <= 150,
  name: (v) => typeof v === "string" && v.length > 0,
});

user.name = "Alice"; // ✓
user.age = 30;       // ✓
// user.age = -5;     // TypeError: Invalid value for age
\`\`\``,task:{description:"Create a Proxy that tracks all property accesses and modifications, maintaining a log array. Include a way to retrieve the log.",starterCode:`function createTracked(obj) {
  // TODO: Return a proxy that logs all get/set operations
  // Log format: { type: "get"|"set", prop: string, value?: any, timestamp: number }
}`,solution:`function createTracked(obj) {
  const log = [];

  const proxy = new Proxy(obj, {
    get(target, prop, receiver) {
      if (prop === "_log") return [...log]; // Return copy of log
      const value = Reflect.get(target, prop, receiver);
      log.push({ type: "get", prop: String(prop), value, timestamp: Date.now() });
      return value;
    },
    set(target, prop, value, receiver) {
      log.push({ type: "set", prop: String(prop), value, timestamp: Date.now() });
      return Reflect.set(target, prop, value, receiver);
    },
  });

  return proxy;
}

const user = createTracked({ name: "Alice", age: 30 });
user.name;        // logs get
user.age = 31;    // logs set
user.name;        // logs get
console.log(user._log);
// [
//   { type: "get", prop: "name", value: "Alice", timestamp: ... },
//   { type: "set", prop: "age", value: 31, timestamp: ... },
//   { type: "get", prop: "name", value: "Alice", timestamp: ... },
// ]`,hints:["Use a closure to store the log array","Use Reflect.get/set to forward the operation to the target",'Special property "_log" can bypass logging and return the log']}}],test:[{id:"mod10-q1",question:"What does a Proxy do?",options:["Creates a clone","Intercepts fundamental operations on an object","Encrypts data","Compresses objects"],correctAnswer:1,explanation:'A Proxy wraps a target object and intercepts fundamental operations through "traps": get (property access), set (property assignment), has (in operator), deleteProperty, ownKeys, apply (function calls), construct (new), and more — 13 traps total. This enables powerful patterns like validation, logging, access control, lazy loading, and reactive data binding (used internally by Vue 3).'},{id:"mod10-q2",question:"What is Reflect?",options:["A mirror utility","A built-in object providing methods matching Proxy traps","A debugging tool","A deprecated API"],correctAnswer:1,explanation:"Reflect is a built-in object that provides methods corresponding 1:1 with Proxy traps: Reflect.get, Reflect.set, Reflect.has, Reflect.deleteProperty, etc. Inside Proxy traps, you use Reflect methods to forward operations to the target object with correct behavior (e.g., proper this handling via receiver). Reflect methods also return boolean success/failure instead of throwing, making error handling easier."},{id:"mod10-q3",question:"Which trap intercepts the `in` operator?",options:["get","has","ownKeys","set"],correctAnswer:1,explanation:'The has trap intercepts the in operator: "name" in proxy triggers handler.has(target, "name"). This allows you to customize property existence checks — for example, hiding certain properties, implementing range checks (e.g., return prop >= 1 && prop <= 100), or creating virtual properties that appear to exist without being stored on the target.'},{id:"mod10-q4",question:"Can a Proxy intercept function calls?",options:["No","Yes, with the apply trap","Only with bind","Only for arrow functions"],correctAnswer:1,explanation:"The apply trap intercepts function calls: proxy(args) triggers handler.apply(target, thisArg, argsList). The target must be a function for apply to work. The construct trap similarly intercepts new proxy(args). This enables wrapping functions with logging, timing, memoization, or argument validation without modifying the original function."},{id:"mod10-q5",question:"What must the set trap return?",options:["The new value","true to indicate success","The target object","Nothing"],correctAnswer:1,explanation:"The set trap must return true (or any truthy value) to indicate the property was set successfully. Returning false (or a falsy value) indicates failure — in strict mode this throws a TypeError. This design lets the trap act as a validator: check the value, return true to accept or false/throw to reject the assignment. Always forward valid operations with Reflect.set()."}]},om={id:"mod-11",title:"WeakRef, WeakMap & Memory",description:"Weak references, WeakMap/WeakSet, garbage collection, FinalizationRegistry, and memory management strategies.",topics:[{id:"mod11-t1",title:"WeakMap & WeakSet",explanation:`## WeakMap & WeakSet

Weak collections hold *weak references* to their keys — the garbage collector can reclaim them if nothing else references them.

### WeakMap

\`\`\`javascript
const metadata = new WeakMap();

let element = document.createElement("div");
metadata.set(element, { clicks: 0, created: Date.now() });

console.log(metadata.get(element)); // { clicks: 0, created: ... }

element = null; // element is GC-eligible → entry removed from WeakMap
\`\`\`

**Key constraints:**
- Keys must be objects (not primitives)
- Not iterable — no \`.keys()\`, \`.values()\`, \`.forEach()\`
- No \`.size\` property

### Private Data Pattern

\`\`\`javascript
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    privateData.set(this, { password });
    this.name = name;
  }

  checkPassword(pw) {
    return privateData.get(this).password === pw;
  }
}

const u = new User("Alice", "secret123");
u.name;                    // "Alice"
u.password;                // undefined (truly private)
u.checkPassword("secret123"); // true
\`\`\`

### WeakSet

Useful for tagging objects without preventing GC:

\`\`\`javascript
const visited = new WeakSet();

function processOnce(obj) {
  if (visited.has(obj)) return;
  visited.add(obj);
  // ... process obj
}
\`\`\``,task:{description:"Implement a private data mechanism using WeakMap. Create a class BankAccount where the balance is truly private — not accessible from outside, only through methods.",starterCode:`// TODO: Use WeakMap to store private balance

class BankAccount {
  constructor(owner, initialBalance) {
    // TODO
  }

  deposit(amount) {
    // TODO
  }

  withdraw(amount) {
    // TODO: throw Error if insufficient funds
  }

  getBalance() {
    // TODO
  }
}`,solution:`const privates = new WeakMap();

class BankAccount {
  constructor(owner, initialBalance) {
    this.owner = owner;
    privates.set(this, { balance: initialBalance });
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    const data = privates.get(this);
    data.balance += amount;
  }

  withdraw(amount) {
    const data = privates.get(this);
    if (amount > data.balance) throw new Error("Insufficient funds");
    data.balance -= amount;
  }

  getBalance() {
    return privates.get(this).balance;
  }
}

const account = new BankAccount("Alice", 100);
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(30);
console.log(account.getBalance()); // 120
console.log(account.balance);      // undefined`,hints:["Create a module-level WeakMap","Keys are `this` in each method","Store an object with balance as the value"]}},{id:"mod11-t2",title:"WeakRef & FinalizationRegistry",explanation:`## WeakRef & FinalizationRegistry

### WeakRef

A \`WeakRef\` holds a weak reference to an object — the GC can collect it.

\`\`\`javascript
let obj = { data: "important" };
const ref = new WeakRef(obj);

console.log(ref.deref()); // { data: "important" }

obj = null; // Object is now GC-eligible

// After GC:
console.log(ref.deref()); // undefined (or still the object if GC hasn't run)
\`\`\`

### Cache Pattern

\`\`\`javascript
class WeakCache {
  #cache = new Map();

  get(key) {
    const ref = this.#cache.get(key);
    if (!ref) return undefined;
    const value = ref.deref();
    if (!value) {
      this.#cache.delete(key); // Clean up stale entry
      return undefined;
    }
    return value;
  }

  set(key, value) {
    this.#cache.set(key, new WeakRef(value));
  }
}
\`\`\`

### FinalizationRegistry

Run a callback when an object is garbage-collected:

\`\`\`javascript
const registry = new FinalizationRegistry((heldValue) => {
  console.log(\`\${heldValue} was garbage collected\`);
});

let resource = { name: "database connection" };
registry.register(resource, "DB-Connection-1");

resource = null; // Eventually: "DB-Connection-1 was garbage collected"
\`\`\`

⚠️ **Caveats:**
- GC timing is non-deterministic — don't rely on finalization for critical cleanup
- Prefer explicit cleanup (\`close()\`, \`dispose()\`) over FinalizationRegistry`,task:{description:"Create a WeakCache class that stores computed results using WeakRef. If the original object is garbage collected, the cache entry should gracefully return undefined.",starterCode:`class WeakCache {
  // TODO: Implement with WeakRef
  get(key) {}
  set(key, value) {}
  has(key) {}
}`,solution:`class WeakCache {
  #entries = new Map();

  set(key, value) {
    this.#entries.set(key, new WeakRef(value));
  }

  get(key) {
    const ref = this.#entries.get(key);
    if (!ref) return undefined;
    const value = ref.deref();
    if (value === undefined) {
      this.#entries.delete(key);
      return undefined;
    }
    return value;
  }

  has(key) {
    return this.get(key) !== undefined;
  }
}

// Usage
let obj = { result: 42 };
const cache = new WeakCache();
cache.set("computation-1", obj);
console.log(cache.get("computation-1")); // { result: 42 }

obj = null;
// After GC: cache.get("computation-1") → undefined`,hints:["Store WeakRef objects in a regular Map","Use deref() to check if the value still exists","Clean up the Map entry if deref() returns undefined"]}}],test:[{id:"mod11-q1",question:"What types can be WeakMap keys?",options:["Any type","Only objects","Only strings","Only symbols and objects"],correctAnswer:1,explanation:"WeakMap keys must be objects (or non-registered symbols in modern engines). Primitives like strings and numbers cannot be used because weak references only work with garbage-collectible values — primitives are value types, not heap-allocated objects the GC tracks. This constraint is what makes automatic cleanup possible."},{id:"mod11-q2",question:"Can you iterate over a WeakMap?",options:["Yes, with for...of","Yes, with forEach","No, WeakMaps are not iterable","Only with Object.keys"],correctAnswer:2,explanation:"WeakMaps are intentionally not iterable — no keys(), values(), entries(), forEach(), or .size property. This is by design: since entries can be garbage-collected at any time, exposing them to iteration would create non-deterministic behavior. If you need iterable storage with weak GC semantics, you'd need to maintain a parallel iterable structure yourself."},{id:"mod11-q3",question:"What does WeakRef.deref() return when the object is collected?",options:["null","undefined","Throws an error","An empty object"],correctAnswer:1,explanation:"deref() returns undefined if the referenced object has been garbage collected, or the object itself if it's still alive. Always check the return value: const obj = ref.deref(); if (obj) { /* use obj */ }. Important: do NOT call deref() multiple times in a row assuming you'll get the same result — GC can run between calls."},{id:"mod11-q4",question:"When does FinalizationRegistry callback run?",options:["Synchronously on delete","At a deterministic time","Non-deterministically after GC","Never"],correctAnswer:2,explanation:"FinalizationRegistry callbacks run non-deterministically some time after the object is garbage collected — there is no guarantee on timing. The callback might run milliseconds or minutes later, or potentially never (e.g., on page unload). This is why you should NEVER rely on FinalizationRegistry for critical cleanup; use explicit dispose/close patterns instead. It's best used for logging, telemetry, or advisory cleanup."},{id:"mod11-q5",question:"Why prefer WeakMap for DOM element metadata?",options:["It is faster","Entries are auto-removed when elements are GC'd","It supports iteration","It stores more data"],correctAnswer:1,explanation:"WeakMap holds weak references to its keys, so when a DOM element is removed and no other code references it, the element and its metadata entry are automatically eligible for garbage collection. With a regular Map, the entry would persist forever (memory leak), keeping the DOM element alive in memory even after it has been removed from the page."}]},im={id:"mod-12",title:"Module Systems",description:"CommonJS vs ES Modules: syntax, loading semantics, circular dependencies, dynamic imports, and interoperability.",topics:[{id:"mod12-t1",title:"CommonJS vs ES Modules",explanation:`## Module Systems

### CommonJS (CJS)

Node.js original module system — synchronous, dynamic.

\`\`\`javascript
// math.js (CJS)
const PI = 3.14159;
function add(a, b) { return a + b; }
module.exports = { PI, add };

// main.js
const { PI, add } = require("./math");
\`\`\`

**Key characteristics:**
- \`require()\` is synchronous
- \`module.exports\` is an object — you can reassign or extend it
- Runs inside a wrapper function: \`(function(exports, require, module, __filename, __dirname) { ... })\`
- Can conditionally require at any point in code

### ES Modules (ESM)

Standard module system — static, asynchronous.

\`\`\`javascript
// math.mjs (ESM)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator { ... }

// main.mjs
import Calculator, { PI, add } from "./math.mjs";
\`\`\`

**Key characteristics:**
- \`import\` / \`export\` are static — parsed at compile time
- Imports are *live bindings* (not copies)
- Top-level \`await\` is supported
- Strict mode by default

### Key Differences

| Feature | CJS | ESM |
|---------|-----|-----|
| Loading | Synchronous | Asynchronous |
| Binding | Value copy | Live binding |
| Parsing | Runtime | Compile-time |
| \`this\` at top level | \`module.exports\` | \`undefined\` |
| Conditional import | ✅ | ❌ (use dynamic \`import()\`) |
| Tree shaking | ❌ | ✅ |

### Live Bindings

\`\`\`javascript
// counter.mjs
export let count = 0;
export function increment() { count++; }

// main.mjs
import { count, increment } from "./counter.mjs";
console.log(count); // 0
increment();
console.log(count); // 1 ← live binding!
\`\`\`

In CJS, \`count\` would stay 0 because require returns a *copy*.`,task:{description:"Show the difference between CJS value-copy semantics and ESM live-binding semantics with code examples. Explain what happens when a module mutates an exported value.",starterCode:`// Demonstrate the difference:

// CJS style (value copy)
// ???

// ESM style (live binding)
// ???`,solution:`// ========== CJS STYLE (Value Copy) ==========
// counter.js
let count = 0;
function increment() { count++; }
module.exports = { count, increment };

// main.js
const counter = require("./counter");
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 0 ← Still 0! We got a copy of count.
// The internal count IS 1, but module.exports.count is a snapshot.

// Workaround: export a getter
// module.exports = { get count() { return count; }, increment };

// ========== ESM STYLE (Live Binding) ==========
// counter.mjs
export let count = 0;
export function increment() { count++; }

// main.mjs
import { count, increment } from "./counter.mjs";
console.log(count); // 0
increment();
console.log(count); // 1 ← Updated! Live binding reflects the change.`,hints:["CJS exports are snapshot values at the time of module.exports assignment","ESM exports are live references — reads always get the current value","CJS can use getters as a workaround"]}},{id:"mod12-t2",title:"Dynamic Import & Circular Deps",explanation:`## Dynamic Import

\`import()\` returns a Promise — works at runtime, enables code splitting:

\`\`\`javascript
async function loadChart() {
  const { Chart } = await import("./chart.mjs");
  return new Chart();
}

// Conditional loading
if (condition) {
  const mod = await import("./heavy-module.mjs");
}
\`\`\`

## Circular Dependencies

### CJS Circular

\`\`\`javascript
// a.js
console.log("a: loading");
const b = require("./b");
console.log("a: b.value =", b.value);
exports.value = "A";

// b.js
console.log("b: loading");
const a = require("./a");
console.log("b: a.value =", a.value); // undefined! a hasn't finished!
exports.value = "B";

// Run: node a.js
// a: loading
// b: loading
// b: a.value = undefined   ← incomplete import!
// a: b.value = B
\`\`\`

CJS returns the *partially loaded* exports object. The import is incomplete.

### ESM Circular

ESM handles it with live bindings — the binding *exists* but may be uninitialized:

\`\`\`javascript
// a.mjs
import { b } from "./b.mjs";
export const a = "A";
console.log("a.mjs:", b);

// b.mjs
import { a } from "./a.mjs";
export const b = "B";
console.log("b.mjs:", a); // ReferenceError or undefined!
\`\`\`

### Best Practice

Avoid circular dependencies:
- Extract shared logic into a third module
- Use dependency injection
- Restructure with mediator pattern`,task:{description:"Write a dynamic import wrapper that lazy-loads modules with caching — ensuring the same module is only imported once.",starterCode:`// TODO: Implement a lazy-loading module cache
async function lazyImport(modulePath) {
  // Should cache the imported module
}`,solution:`const moduleCache = new Map();

async function lazyImport(modulePath) {
  if (moduleCache.has(modulePath)) {
    return moduleCache.get(modulePath);
  }

  // Store the promise to handle concurrent calls
  const modulePromise = import(modulePath);
  moduleCache.set(modulePath, modulePromise);

  try {
    const mod = await modulePromise;
    moduleCache.set(modulePath, mod); // Replace promise with resolved module
    return mod;
  } catch (err) {
    moduleCache.delete(modulePath); // Remove failed entry
    throw err;
  }
}

// Usage
const { Chart } = await lazyImport("./chart.mjs");
const { Chart: Chart2 } = await lazyImport("./chart.mjs"); // cached!`,hints:["Use a Map to cache results","Store the promise first to deduplicate concurrent calls","Handle errors by cleaning up the cache"]}}],test:[{id:"mod12-q1",question:"In CJS, what does require() return?",options:["A live binding","A copy of module.exports","A promise","The module function"],correctAnswer:1,explanation:"require() returns a reference to the module.exports object. For objects/arrays, it's a shared reference. For primitive exports (numbers, strings), the value is copied — meaning later changes to the primitive in the source module are NOT seen by the consumer. This is the fundamental difference from ESM's live bindings."},{id:"mod12-q2",question:"ESM imports are:",options:["Value copies","Live bindings","Deep clones","Proxies"],correctAnswer:1,explanation:"ESM exports are live bindings — when the source module updates an exported variable, ALL importers see the new value immediately. This works even for primitives (unlike CJS). Example: if module A exports let count = 0 and later increments it, module B's import { count } reflects the updated value. This is made possible by ESM's static structure."},{id:"mod12-q3",question:"What does import() return?",options:["The module object","A Promise","undefined","A function"],correctAnswer:1,explanation:"Dynamic import() returns a Promise that resolves to the module namespace object (containing all named exports and the default export). Unlike static import which must be at the top level, import() can be called anywhere — inside if-blocks, event handlers, etc. This enables code splitting: loading modules on demand to reduce initial bundle size."},{id:"mod12-q4",question:"What happens with CJS circular require?",options:["Error thrown","Partially loaded exports returned","Infinite loop","Module skipped"],correctAnswer:1,explanation:"When module A requires module B, and B requires A back (circular dependency), CJS returns A's PARTIALLY loaded exports — whatever has been assigned to module.exports up to the point where the circular require happens. Exports defined later in A won't be visible to B. This can cause subtle bugs where exports are undefined. ESM handles this differently through its hoisting + live binding approach."},{id:"mod12-q5",question:"Which module system supports tree shaking?",options:["CJS","ESM","Both","Neither"],correctAnswer:1,explanation:'ESM supports tree shaking because its import/export declarations are statically analyzable at compile time — bundlers (webpack, Rollup, esbuild) can determine which exports are actually used and remove unused ones ("dead code elimination"). CJS cannot be tree-shaken reliably because require() calls can be dynamic (inside if-blocks, computed strings), making it impossible to statically determine which exports are needed.'}]},sm={id:"mod-13",title:"TypeScript Fundamentals",description:"Type system basics: primitives, interfaces, type aliases, unions, intersections, literal types, enums, and type inference.",topics:[{id:"mod13-t1",title:"Types, Interfaces & Aliases",explanation:`## TypeScript Type System

### Primitive Types

\`\`\`typescript
let name: string = "Alice";
let age: number = 30;
let active: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;
let big: bigint = 100n;
let sym: symbol = Symbol("id");
\`\`\`

### Type Aliases vs Interfaces

\`\`\`typescript
// Type alias — can describe any type
type ID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;

// Interface — describes object shapes, supports extension
interface User {
  id: number;
  name: string;
  email?: string;  // optional
  readonly role: string;  // readonly
}

interface Admin extends User {
  permissions: string[];
}
\`\`\`

### Key Differences

| Feature | Type | Interface |
|---------|------|-----------|
| Primitives / Unions | ✅ | ❌ |
| extends | ❌ (use &) | ✅ |
| Declaration merging | ❌ | ✅ |
| Computed properties | ✅ | ❌ |

### Declaration Merging (Interface Only)

\`\`\`typescript
interface Window {
  myCustomProp: string;
}
// Merges with the global Window interface!
\`\`\`

### Unions & Intersections

\`\`\`typescript
// Union: one of several types
type Result = string | number;
type Status = "pending" | "active" | "closed";

// Intersection: combine types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // { name: string; age: number }
\`\`\`

### Type Inference

TypeScript infers types when you don't annotate:

\`\`\`typescript
const x = 42;        // number
const s = "hello";   // "hello" (literal type with const)
let s2 = "hello";    // string (widened with let)

const arr = [1, "a"]; // (string | number)[]
const tup = [1, "a"] as const; // readonly [1, "a"]
\`\`\``,task:{description:"Define a type system for a task management app: Task, Priority (union of literals), User, and a type-safe createTask function.",starterCode:`// TODO: Define types
type Priority = ???;

interface Task {
  // TODO
}

interface User {
  // TODO
}

function createTask(title: string, assignee: User, priority?: Priority): Task {
  // TODO
}`,solution:`type Priority = "low" | "medium" | "high" | "urgent";

interface Task {
  id: string;
  title: string;
  assignee: User;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}

interface User {
  id: number;
  name: string;
  email: string;
}

function createTask(title: string, assignee: User, priority: Priority = "medium"): Task {
  return {
    id: crypto.randomUUID(),
    title,
    assignee,
    priority,
    completed: false,
    createdAt: new Date(),
  };
}

const alice: User = { id: 1, name: "Alice", email: "alice@example.com" };
const task = createTask("Fix bug #123", alice, "high");
// task.priority is "high", task.completed is false`,hints:["Priority should be a union of string literals","Use optional parameter with default for priority","Task needs an id — crypto.randomUUID() works well"]}},{id:"mod13-t2",title:"Enums & Literal Types",explanation:`## Enums

### Numeric Enums

\`\`\`typescript
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}

const d: Direction = Direction.Up;
console.log(Direction[0]); // "Up" — reverse mapping
\`\`\`

### String Enums

\`\`\`typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

// No reverse mapping for string enums
\`\`\`

### const enum (Inlined at Compile)

\`\`\`typescript
const enum Color {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}

const c = Color.Red; // Compiles to: const c = "#ff0000"
\`\`\`

### Enums vs Union Types

\`\`\`typescript
// Prefer union types for simple string sets:
type Status = "active" | "inactive" | "pending";

// Use enums when:
// - You need numeric values
// - You want reverse mapping
// - You need a runtime object (iteration)
\`\`\`

### Literal Types & const Assertions

\`\`\`typescript
// Literal types narrow to exact values
let method: "GET" | "POST" | "PUT" | "DELETE";
method = "GET"; // ✓
// method = "PATCH"; // Error!

// as const makes everything readonly and literal
const config = {
  api: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const;
// Type: { readonly api: "https://api.example.com"; readonly timeout: 5000; readonly retries: 3 }

// Useful for deriving union types from arrays
const ROLES = ["admin", "user", "guest"] as const;
type Role = typeof ROLES[number]; // "admin" | "user" | "guest"
\`\`\``,task:{description:"Create a type-safe API client that uses literal types and const assertions for HTTP methods and status codes.",starterCode:"// TODO: Define HTTP method type, status codes, and a type-safe request function",solution:`const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;
type HttpMethod = typeof HTTP_METHODS[number];

const STATUS_CODES = {
  OK: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
  ServerError: 500,
} as const;
type StatusCode = typeof STATUS_CODES[keyof typeof STATUS_CODES];

interface ApiResponse<T> {
  status: StatusCode;
  data: T;
  headers: Record<string, string>;
}

interface RequestConfig {
  method: HttpMethod;
  url: string;
  body?: unknown;
  headers?: Record<string, string>;
}

async function apiRequest<T>(config: RequestConfig): Promise<ApiResponse<T>> {
  const { method, url, body, headers } = config;
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });

  return {
    status: response.status as StatusCode,
    data: await response.json() as T,
    headers: Object.fromEntries(response.headers.entries()),
  };
}

// Usage
const result = await apiRequest<{ id: number; name: string }>({
  method: "GET",
  url: "/api/users/1",
});`,hints:["Use as const on arrays/objects to get literal types","typeof ARRAY[number] extracts a union from a const array","typeof OBJ[keyof typeof OBJ] extracts value types from a const object"]}}],test:[{id:"mod13-q1",question:"What is the difference between type and interface?",options:["No difference","Types can describe unions/primitives; interfaces support extends and merging","Interfaces are faster","Types are deprecated"],correctAnswer:1,explanation:"Type aliases can describe any type shape: unions (A | B), intersections (A & B), primitives, tuples, mapped types, and template literals. Interfaces are limited to object shapes but support declaration merging (adding fields to an existing interface across files) and extends for hierarchical design. In practice, use interface for public API/object shapes and type for everything else."},{id:"mod13-q2",question:"What does `as const` do?",options:["Casts to const type","Makes values readonly and narrows to literal types","Creates a constant variable","Freezes the object"],correctAnswer:1,explanation:'`as const` creates a deeply readonly type with literal values. Without it: const arr = ["a", "b"] is typed as string[]. With it: const arr = ["a", "b"] as const is typed as readonly ["a", "b"]. It works at the TYPE level only (no runtime effect — unlike Object.freeze). Essential for deriving string literal unions from arrays and ensuring immutable configuration objects.'},{id:"mod13-q3",question:"What is `typeof ROLES[number]` when ROLES is a const array?",options:["number","A union of the array element types","The array type","undefined"],correctAnswer:1,explanation:'Given const ROLES = ["admin", "user", "guest"] as const, the type typeof ROLES[number] produces "admin" | "user" | "guest". Here [number] is an indexed access type that reads the element type at any numeric index. This pattern lets you define values once as a runtime array and automatically generate a union type from it, keeping the two in sync.'},{id:"mod13-q4",question:"Do string enums have reverse mapping?",options:["Yes","No","Only with const enum","Only in strict mode"],correctAnswer:1,explanation:'Only numeric enums have reverse mapping (value → key). For example, enum Dir { Up = 0 } generates Dir[0] === "Up" at runtime. String enums do NOT get reverse mapping — Dir["Up"] works, but Dir["up-value"] does not. This is because the compiled JavaScript object only has forward mappings for string enums. If you need reverse lookup for strings, build a Map manually or use a const object pattern.'},{id:"mod13-q5",question:'What does `let x = "hello"` infer as?',options:['"hello" literal',"string","any","unknown"],correctAnswer:1,explanation:'With let, TypeScript widens the type: "hello" becomes string because the variable might be reassigned to any string later. With const x = "hello", TS narrows to the literal type "hello" since the value can never change. This matters for discriminated unions, config objects, and string literal APIs. Use as const or const declarations when you need the literal type.'}]},am={id:"mod-14",title:"Advanced Types & Utilities",description:"Mapped types, conditional types, template literal types, built-in utility types, and custom type transformations.",topics:[{id:"mod14-t1",title:"Utility Types & Mapped Types",explanation:`## Built-in Utility Types

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial — all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number }

// Required — all properties required
type RequiredUser = Required<PartialUser>;

// Pick — select specific properties
type UserSummary = Pick<User, "id" | "name">;
// { id: number; name: string }

// Omit — exclude properties
type CreateUser = Omit<User, "id">;
// { name: string; email: string; age: number }

// Record — construct an object type
type UserRoles = Record<string, "admin" | "user" | "guest">;

// Readonly — all properties readonly
type FrozenUser = Readonly<User>;

// Extract / Exclude — filter union types
type T1 = Extract<"a" | "b" | "c", "a" | "c">; // "a" | "c"
type T2 = Exclude<"a" | "b" | "c", "a">;       // "b" | "c"

// NonNullable
type T3 = NonNullable<string | null | undefined>; // string

// ReturnType / Parameters
function greet(name: string, age: number): string { return \`Hi \${name}\`; }
type RT = ReturnType<typeof greet>;    // string
type PT = Parameters<typeof greet>;    // [string, number]
\`\`\`

### Mapped Types

\`\`\`typescript
// How Partial works internally:
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Remove readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Key remapping (TS 4.1+)
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<User>;
// {
//   getId: () => number;
//   getName: () => string;
//   getEmail: () => string;
//   getAge: () => number;
// }
\`\`\``,task:{description:"Create a DeepReadonly<T> type that recursively makes all properties and nested objects readonly.",starterCode:`// TODO: Implement DeepReadonly<T>
type DeepReadonly<T> = ???;

interface Config {
  db: {
    host: string;
    port: number;
    credentials: {
      user: string;
      password: string;
    };
  };
  features: string[];
}`,solution:`type DeepReadonly<T> = T extends (infer U)[]
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;

interface Config {
  db: {
    host: string;
    port: number;
    credentials: {
      user: string;
      password: string;
    };
  };
  features: string[];
}

const config: DeepReadonly<Config> = {
  db: {
    host: "localhost",
    port: 5432,
    credentials: { user: "admin", password: "secret" },
  },
  features: ["auth", "api"],
};

// config.db.host = "x";              // Error: readonly
// config.db.credentials.user = "x";  // Error: readonly
// config.features.push("x");         // Error: readonly array`,hints:["Use conditional types to check if T is an array or object","Arrays should become ReadonlyArray<DeepReadonly<U>>","Use recursion: each property becomes DeepReadonly<T[K]>"]}},{id:"mod14-t2",title:"Conditional & Template Literal Types",explanation:`## Conditional Types

\`\`\`typescript
// Basic syntax: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>;      // false
\`\`\`

### Distributive Conditional Types

When T is a union, the conditional distributes over each member:

\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;

type Result = ToArray<string | number>;
// string[] | number[]  (NOT (string | number)[])

// To prevent distribution, wrap in tuple:
type ToArrayND<T> = [T] extends [any] ? T[] : never;
type Result2 = ToArrayND<string | number>;
// (string | number)[]
\`\`\`

### infer Keyword

Extract types from patterns:

\`\`\`typescript
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type A = UnpackPromise<Promise<string>>; // string
type B = UnpackPromise<number>;          // number

type FirstArg<T> = T extends (first: infer A, ...rest: any[]) => any ? A : never;
type FA = FirstArg<(x: string, y: number) => void>; // string

type ArrayElement<T> = T extends (infer E)[] ? E : never;
type El = ArrayElement<number[]>; // number
\`\`\`

## Template Literal Types

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // "onClick"

// Combine with unions for power:
type Color = "red" | "blue";
type Size  = "sm" | "lg";
type Style = \`\${Color}-\${Size}\`;
// "red-sm" | "red-lg" | "blue-sm" | "blue-lg"

// Pattern matching with template literals
type ExtractRouteParams<T extends string> =
  T extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractRouteParams<Rest>
    : T extends \`\${string}:\${infer Param}\`
      ? Param
      : never;

type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;
// "userId" | "postId"
\`\`\``,task:{description:'Build a type-safe event emitter type using template literal types. Events should be typed as "on" + capitalized event name.',starterCode:`// TODO: Create types for a type-safe event system
// Given events "click", "hover", "submit"
// Should generate handler types like onClick, onHover, onSubmit`,solution:`type EventMap = {
  click: { x: number; y: number };
  hover: { target: string };
  submit: { data: Record<string, unknown> };
};

type EventHandlerName<T extends string> = \`on\${Capitalize<T>}\`;

type EventHandlers<T extends Record<string, unknown>> = {
  [K in keyof T as EventHandlerName<string & K>]: (event: T[K]) => void;
};

type AppHandlers = EventHandlers<EventMap>;
// {
//   onClick: (event: { x: number; y: number }) => void;
//   onHover: (event: { target: string }) => void;
//   onSubmit: (event: { data: Record<string, unknown> }) => void;
// }

// Usage
const handlers: AppHandlers = {
  onClick: (e) => console.log(e.x, e.y),
  onHover: (e) => console.log(e.target),
  onSubmit: (e) => console.log(e.data),
};

handlers.onClick({ x: 10, y: 20 });`,hints:["Use template literal type `on${Capitalize<K>}`","Use mapped types with key remapping (as clause)","The mapped type iterates over EventMap keys"]}}],test:[{id:"mod14-q1",question:"What does Omit<T, K> do?",options:["Removes properties K from T","Adds properties K to T","Makes K optional","Validates K exists in T"],correctAnswer:0,explanation:`Omit<T, K> creates a new type by removing the properties whose keys are in K from type T. For example, Omit<{a: 1, b: 2, c: 3}, "a" | "c"> yields {b: 2}. Under the hood it's implemented as Pick<T, Exclude<keyof T, K>>. Use it for form states that exclude server-generated fields like id and createdAt, or for passing all props except certain ones to a child component.`},{id:"mod14-q2",question:"What does the `infer` keyword do?",options:["Infers a variable value","Extracts a type from a pattern in conditional types","Declares a type parameter","Checks type equality"],correctAnswer:1,explanation:"infer declares a type variable inside a conditional type's extends clause that TypeScript automatically infers from the matched pattern. Example: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never. Here infer R captures the function's return type. This is the mechanism behind built-in utility types like ReturnType, Parameters, ConstructorParameters, and InstanceType."},{id:"mod14-q3",question:"Type `ToArray<string | number>` with distributive conditional produces:",options:["(string | number)[]","string[] | number[]","Array<string | number>","never"],correctAnswer:1,explanation:`Distributive conditional types automatically distribute over each union member when T is a "naked" (unwrapped) type parameter. So ToArray<string | number> becomes ToArray<string> | ToArray<number> = string[] | number[]. Each union member is processed independently. This behavior is specific to generic conditional types — it doesn't happen if T is wrapped, e.g., [T] extends [U].`},{id:"mod14-q4",question:"How do you prevent distributive behavior?",options:["Use never","Wrap T in a tuple: [T] extends [U]","Use any","Use unknown"],correctAnswer:1,explanation:'Wrapping both sides of extends in a tuple — [T] extends [U] ? X : Y — prevents distribution because T is no longer a "naked" type parameter. The conditional type then evaluates the union as a whole: [string | number] extends [string] ? ... evaluates once, not per member. This is essential when you want to check if the ENTIRE union satisfies a condition rather than checking each member separately.'},{id:"mod14-q5",question:"Template literal type `${Color}-${Size}` with two members each produces:",options:["2 types","4 types","1 type","8 types"],correctAnswer:1,explanation:'Template literal types compute the cross product of all constituent union members. With Color = "red" | "blue" and Size = "sm" | "lg", the type ${Color}-${Size} produces "red-sm" | "red-lg" | "blue-sm" | "blue-lg" — 4 types. This is powerful for CSS utility class systems, event naming conventions, and API route definitions where you need compile-time enforcement of valid string combinations.'}]},lm={id:"mod-15",title:"Generics Deep Dive",description:"Generic functions, classes, constraints, defaults, variance, and advanced patterns.",topics:[{id:"mod15-t1",title:"Generic Functions & Constraints",explanation:`## Generics

Generics let you write type-safe reusable code without losing type information.

### Basic Generics

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

const s = identity("hello"); // string
const n = identity(42);      // number

// Generic with arrays
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const f = first([1, 2, 3]); // number | undefined
\`\`\`

### Constraints

\`\`\`typescript
// T must have a length property
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest("abc", "de");    // ✓ string has length
longest([1, 2], [3]);    // ✓ array has length
// longest(10, 20);      // ✗ number has no length

// keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
getProperty(user, "name"); // string
getProperty(user, "age");  // number
// getProperty(user, "xxx"); // Error: "xxx" is not assignable
\`\`\`

### Multiple Type Parameters

\`\`\`typescript
function zip<A, B>(a: A[], b: B[]): [A, B][] {
  const length = Math.min(a.length, b.length);
  const result: [A, B][] = [];
  for (let i = 0; i < length; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
}

const pairs = zip([1, 2, 3], ["a", "b", "c"]);
// [number, string][]
\`\`\`

### Default Type Parameters

\`\`\`typescript
interface ApiResponse<T = unknown> {
  data: T;
  error?: string;
}

type UntypedResponse = ApiResponse;         // data: unknown
type UserResponse = ApiResponse<User>;      // data: User
\`\`\``,task:{description:"Create a generic Result<T, E> type (like Rust's Result) with Ok and Err variants, plus map/flatMap methods.",starterCode:`// TODO: Implement Result<T, E>
// Ok<T> and Err<E> variants
// .map(fn: T => U): Result<U, E>
// .flatMap(fn: T => Result<U, E>): Result<U, E>`,solution:`type Result<T, E> = Ok<T, E> | Err<T, E>;

class Ok<T, E = never> {
  readonly _tag = "Ok" as const;
  constructor(readonly value: T) {}

  map<U>(fn: (value: T) => U): Result<U, E> {
    return new Ok(fn(this.value));
  }

  flatMap<U>(fn: (value: T) => Result<U, E>): Result<U, E> {
    return fn(this.value);
  }

  isOk(): this is Ok<T, E> { return true; }
  isErr(): this is Err<T, E> { return false; }
}

class Err<T = never, E = unknown> {
  readonly _tag = "Err" as const;
  constructor(readonly error: E) {}

  map<U>(_fn: (value: T) => U): Result<U, E> {
    return this as unknown as Err<U, E>;
  }

  flatMap<U>(_fn: (value: T) => Result<U, E>): Result<U, E> {
    return this as unknown as Err<U, E>;
  }

  isOk(): this is Ok<T, E> { return false; }
  isErr(): this is Err<T, E> { return true; }
}

function ok<T>(value: T): Ok<T, never> { return new Ok(value); }
function err<E>(error: E): Err<never, E> { return new Err(error); }

// Usage
const result = ok(42)
  .map(x => x * 2)
  .flatMap(x => x > 50 ? ok(x) : err("too small"));

if (result.isOk()) {
  console.log(result.value); // 84
}`,hints:["Use discriminated union with _tag property","Ok.map applies the function, Err.map passes through","flatMap is like map but the function returns a Result"]}},{id:"mod15-t2",title:"Generic Classes & Patterns",explanation:`## Generic Classes

\`\`\`typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.pop(); // number | undefined
\`\`\`

### Generic Interfaces

\`\`\`typescript
interface Repository<T extends { id: string | number }> {
  findById(id: T["id"]): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: T["id"]): Promise<boolean>;
}

class UserRepository implements Repository<User> {
  async findById(id: number): Promise<User | null> { /* ... */ }
  async findAll(): Promise<User[]> { /* ... */ }
  async save(user: User): Promise<User> { /* ... */ }
  async delete(id: number): Promise<boolean> { /* ... */ }
}
\`\`\`

### Builder Pattern with Generics

\`\`\`typescript
class QueryBuilder<T> {
  private filters: Array<(item: T) => boolean> = [];
  private sortFn?: (a: T, b: T) => number;
  private limitCount?: number;

  where(predicate: (item: T) => boolean): this {
    this.filters.push(predicate);
    return this;
  }

  orderBy<K extends keyof T>(key: K, dir: "asc" | "desc" = "asc"): this {
    this.sortFn = (a, b) => {
      const va = a[key], vb = b[key];
      const cmp = va < vb ? -1 : va > vb ? 1 : 0;
      return dir === "asc" ? cmp : -cmp;
    };
    return this;
  }

  limit(count: number): this {
    this.limitCount = count;
    return this;
  }

  execute(data: T[]): T[] {
    let result = data.filter(item => this.filters.every(f => f(item)));
    if (this.sortFn) result.sort(this.sortFn);
    if (this.limitCount !== undefined) result = result.slice(0, this.limitCount);
    return result;
  }
}

// Usage
const users = new QueryBuilder<User>()
  .where(u => u.age >= 18)
  .orderBy("name")
  .limit(10)
  .execute(allUsers);
\`\`\``,task:{description:"Create a generic TypedEventEmitter<EventMap> class where events and their payload types are defined by a type parameter.",starterCode:`// TODO: Implement TypedEventEmitter<Events>
// Events is a Record<string, any> mapping event names to payload types`,solution:`class TypedEventEmitter<Events extends Record<string, unknown>> {
  private listeners = new Map<keyof Events, Set<(payload: any) => void>>();

  on<K extends keyof Events>(event: K, handler: (payload: Events[K]) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler);

    // Return unsubscribe function
    return () => {
      this.listeners.get(event)?.delete(handler);
    };
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]): void {
    this.listeners.get(event)?.forEach(handler => handler(payload));
  }

  off<K extends keyof Events>(event: K, handler: (payload: Events[K]) => void): void {
    this.listeners.get(event)?.delete(handler);
  }
}

// Usage — fully type-safe!
interface AppEvents {
  login: { userId: string; timestamp: number };
  logout: { userId: string };
  error: { message: string; code: number };
}

const emitter = new TypedEventEmitter<AppEvents>();

emitter.on("login", (e) => {
  console.log(e.userId, e.timestamp); // ✓ types known!
});

emitter.emit("login", { userId: "123", timestamp: Date.now() });
// emitter.emit("login", { wrong: true }); // ✗ type error`,hints:["Events extends Record<string, unknown> defines the event map","on<K extends keyof Events> constrains the event name","The handler parameter type is Events[K]"]}}],test:[{id:"mod15-q1",question:"What does `T extends { length: number }` mean?",options:["T inherits from an object","T must be a number","T must have a length property of type number","T is an array"],correctAnswer:2,explanation:'This is a generic constraint: T must be a type that has at least a length property of type number. Any value that structurally matches is accepted — strings ("hello".length), arrays ([1,2].length), or custom objects ({length: 5}). This is structural typing in action: TS checks shape, not naming/inheritance.'},{id:"mod15-q2",question:"What does `K extends keyof T` constrain?",options:["K must be any string","K must be a key that exists on type T","K must be a type","K must be a number"],correctAnswer:1,explanation:"keyof T produces a union of T's property names as string literal types. K extends keyof T constrains K to be one of those names, so TypeScript can guarantee type-safe property access: T[K] returns the correct type. This is the foundation of typed property accessors like function get<T, K extends keyof T>(obj: T, key: K): T[K]."},{id:"mod15-q3",question:"Can generics have default type parameters?",options:["No","Yes, using = syntax","Only in interfaces","Only in classes"],correctAnswer:1,explanation:"Generic parameters support defaults using = syntax: <T = string>. When the caller doesn't specify T, it defaults to string. Default parameters must come after required ones (like function defaults). This is commonly used in library APIs: React's useState<S = undefined>(), event emitter types, and configurable data structures."},{id:"mod15-q4",question:"What is the purpose of the builder pattern with generics?",options:["Performance optimization","Type-safe fluent API with method chaining","Memory management","Async operations"],correctAnswer:1,explanation:'The generic builder pattern uses generics to track which fields have been set at the TYPE level, creating a fluent API where each method returns a new type that "remembers" the state. This enables compile-time enforcement: build() can only be called when all required fields are set. Examples include query builders, request builders, and configuration APIs where you want chaining like builder.setName("x").setAge(5).build().'},{id:"mod15-q5",question:"Multiple generic parameters are separated by:",options:["Semicolons","Commas","Pipes","Ampersands"],correctAnswer:1,explanation:"Multiple type parameters are separated by commas: <A, B, C>. Convention is to use single uppercase letters (T, U, V) or descriptive names with a T prefix (TKey, TValue). For example: function map<T, U>(arr: T[], fn: (item: T) => U): U[] uses two parameters where T is the input type and U is the output type."}]},um={id:"mod-16",title:"Type Guards & Narrowing",description:"Type narrowing, user-defined type guards, discriminated unions, assertion functions, and exhaustive checks.",topics:[{id:"mod16-t1",title:"Narrowing Techniques",explanation:`## Type Narrowing

TypeScript narrows types based on control flow analysis.

### Built-in Guards

\`\`\`typescript
function process(value: string | number | null) {
  // typeof guard
  if (typeof value === "string") {
    value.toUpperCase(); // string
  } else if (typeof value === "number") {
    value.toFixed(2); // number
  }

  // Truthiness narrowing
  if (value) {
    // string | number (null eliminated)
  }

  // Equality narrowing
  if (value === null) {
    // null
  }

  // instanceof
  if (value instanceof Date) {
    value.getTime(); // Date
  }
}
\`\`\`

### Discriminated Unions

\`\`\`typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return 0.5 * shape.base * shape.height;
  }
}
\`\`\`

### Exhaustive Check with never

\`\`\`typescript
function assertNever(x: never): never {
  throw new Error(\`Unexpected value: \${x}\`);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":    return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
    case "triangle":  return 0.5 * shape.base * shape.height;
    default:          return assertNever(shape); // Compile error if a case is missing!
  }
}
\`\`\`

### The \`in\` Operator

\`\`\`typescript
interface Dog { bark(): void; }
interface Cat { meow(): void; }

function speak(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark(); // Dog
  } else {
    pet.meow(); // Cat
  }
}
\`\`\``,task:{description:"Implement a type-safe API response handler that uses discriminated unions and exhaustive checking.",starterCode:`// TODO: Define response types and handler
type ApiResponse = ???;

function handleResponse(response: ApiResponse): string {
  // TODO: Handle each variant exhaustively
}`,solution:`interface SuccessResponse<T> {
  status: "success";
  data: T;
  statusCode: 200 | 201;
}

interface ErrorResponse {
  status: "error";
  message: string;
  statusCode: 400 | 401 | 403 | 404 | 500;
}

interface LoadingResponse {
  status: "loading";
}

type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse | LoadingResponse;

function assertNever(x: never): never {
  throw new Error(\`Unhandled case: \${JSON.stringify(x)}\`);
}

function handleResponse(response: ApiResponse<{ name: string }>): string {
  switch (response.status) {
    case "success":
      return \`Got: \${response.data.name}\`; // data is typed!
    case "error":
      return \`Error \${response.statusCode}: \${response.message}\`;
    case "loading":
      return "Loading...";
    default:
      return assertNever(response);
  }
}`,hints:["Use a status discriminant field","Switch on the discriminant for narrowing","Use assertNever in the default case for exhaustive checking"]}},{id:"mod16-t2",title:"User-Defined Type Guards",explanation:`## Custom Type Guards

### Type Predicate Functions

\`\`\`typescript
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

// Return type is a "type predicate"
function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows it's Fish
  } else {
    pet.fly();  // TypeScript knows it's Bird
  }
}
\`\`\`

### Assertion Functions

\`\`\`typescript
// asserts condition — narrows after the call
function assertDefined<T>(value: T | null | undefined, msg?: string): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(msg ?? "Value is null/undefined");
  }
}

function process(name: string | null) {
  assertDefined(name, "Name is required");
  name.toUpperCase(); // string — guaranteed after assertion
}

// asserts this — in classes
class SmartArray<T> {
  private items: T[] = [];

  assertNonEmpty(): asserts this is SmartArray<T> & { items: [T, ...T[]] } {
    if (this.items.length === 0) {
      throw new Error("Array is empty");
    }
  }
}
\`\`\`

### Array Filtering with Type Guards

\`\`\`typescript
const mixed: (string | null | undefined)[] = ["a", null, "b", undefined, "c"];

// Without type guard: (string | null | undefined)[]
const filtered = mixed.filter(x => x != null);

// With type guard: string[]
const typed = mixed.filter((x): x is string => x != null);

// Generic version
function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

const clean = mixed.filter(isDefined); // string[]
\`\`\`

### Branded Types

\`\`\`typescript
type Brand<T, B> = T & { __brand: B };
type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

function usd(amount: number): USD { return amount as USD; }
function eur(amount: number): EUR { return amount as EUR; }

function addUSD(a: USD, b: USD): USD {
  return (a + b) as USD;
}

const total = addUSD(usd(10), usd(20)); // ✓
// addUSD(usd(10), eur(20));             // ✗ Type error!
\`\`\``,task:{description:"Create a type guard system for validating API payloads — functions that validate unknown data and narrow it to specific types.",starterCode:`// TODO: Implement type guards for validating unknown API data
interface User {
  id: number;
  name: string;
  email: string;
}

function isUser(data: unknown): data is User {
  // TODO
}`,solution:`interface User {
  id: number;
  name: string;
  email: string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

function isUser(data: unknown): data is User {
  return (
    isObject(data) &&
    isNumber(data.id) &&
    isString(data.name) &&
    isString(data.email)
  );
}

function isArrayOf<T>(arr: unknown, guard: (item: unknown) => item is T): arr is T[] {
  return Array.isArray(arr) && arr.every(guard);
}

// Usage
const rawData: unknown = JSON.parse('{"id": 1, "name": "Alice", "email": "a@b.c"}');
if (isUser(rawData)) {
  console.log(rawData.name); // ✓ TypeScript knows it's User
}

const rawArray: unknown = JSON.parse('[{"id":1,"name":"A","email":"a@b.c"}]');
if (isArrayOf(rawArray, isUser)) {
  rawArray.forEach(u => console.log(u.name)); // ✓
}`,hints:["Check typeof and specific property types","Compose smaller guards (isString, isNumber) into larger ones","isArrayOf can accept any guard function"]}}],test:[{id:"mod16-q1",question:"What return type makes a function a type guard?",options:["boolean","param is Type","Type","asserts param"],correctAnswer:1,explanation:`A type predicate return type — param is Type — tells TypeScript that when this function returns true, the parameter's type should be narrowed to Type in the calling scope. Example: function isString(x: unknown): x is string { return typeof x === "string"; }. After if (isString(val)), val is typed as string. Without the predicate, TS only knows the return is boolean and won't narrow.`},{id:"mod16-q2",question:"What does `assertNever(x: never)` enforce?",options:["Runtime error","Exhaustive checking — compile error if a case is missing","Type widening","Optional checking"],correctAnswer:1,explanation:`The assertNever pattern leverages the never type for exhaustive checks. In a switch/if-else chain over a discriminated union, after handling all cases, the variable should narrow to never. If you add a new union member but forget to handle it, x won't narrow to never, causing a compile error at assertNever(x). The function typically throws at runtime as a safety net: function assertNever(x: never): never { throw new Error("Unexpected: " + x); }`},{id:"mod16-q3",question:"How does `asserts value is T` differ from `value is T`?",options:["No difference","asserts throws on false instead of returning boolean","asserts is faster","asserts works only in classes"],correctAnswer:1,explanation:`Assertion functions (asserts value is T) throw an error if the condition fails, rather than returning a boolean. After the assertion call succeeds (doesn't throw), TypeScript narrows the type for ALL subsequent code, not just inside an if-block. This is ideal for validation at the start of functions: function assertDefined<T>(v: T | undefined): asserts v is T { if (!v) throw new Error("undefined"); }`},{id:"mod16-q4",question:"Which operator narrows by checking property existence?",options:["typeof","instanceof","in","keyof"],correctAnswer:2,explanation:`The in operator checks if a property exists in an object and TypeScript uses it as a narrowing mechanism. For example, with type A = { name: string } and type B = { age: number }, checking "name" in value narrows value to type A. This is especially useful for discriminating between types in a union when they don't share a common discriminant field.`},{id:"mod16-q5",question:"What is a branded type?",options:["A type with a logo","A type intersected with a phantom brand property for nominal typing","A generic type","A union type"],correctAnswer:1,explanation:`Branded types add a phantom property (like __brand: "USD") via intersection to create nominally distinct types from structurally identical ones. For example: type USD = number & { __brand: "USD" }; type EUR = number & { __brand: "EUR" }; — now you can't accidentally pass EUR where USD is expected, even though both are numbers at runtime. The brand property never actually exists at runtime; it's purely a compile-time safety mechanism.`}]},cm={id:"mod-17",title:"Decorators & Metadata",description:"TC39 decorators, legacy decorators, reflect-metadata, and decorator patterns for classes, methods, and properties.",topics:[{id:"mod17-t1",title:"Decorators (TC39 & Legacy)",explanation:`## Decorators

Decorators add metadata or modify classes, methods, properties, and parameters.

### TC39 Stage 3 Decorators (TS 5.0+)

\`\`\`typescript
// Method decorator
function log(
  target: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);
  return function (this: any, ...args: any[]) {
    console.log(\`→ \${methodName}(\${args.join(", ")})\`);
    const result = target.call(this, ...args);
    console.log(\`← \${methodName} = \${result}\`);
    return result;
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

new Calculator().add(2, 3);
// → add(2, 3)
// ← add = 5
\`\`\`

### Class Decorator

\`\`\`typescript
function sealed(
  target: Function,
  context: ClassDecoratorContext
) {
  Object.seal(target);
  Object.seal(target.prototype);
}

@sealed
class API {
  version = "1.0";
}
\`\`\`

### Legacy Decorators (experimentalDecorators)

\`\`\`typescript
// Still widely used in Angular, NestJS, TypeORM
function Injectable() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    // Register in DI container
    return constructor;
  };
}

@Injectable()
class UserService {
  getUser(id: number) { /* ... */ }
}

// Property decorator
function Column(options?: { type: string }) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("column", options, target, propertyKey);
  };
}

class User {
  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "int" })
  age!: number;
}
\`\`\`

### Decorator Factories

\`\`\`typescript
function minLength(min: number) {
  return function (
    target: any,
    context: ClassFieldDecoratorContext
  ) {
    return function (initialValue: string) {
      if (initialValue.length < min) {
        throw new Error(\`\${String(context.name)} must be at least \${min} chars\`);
      }
      return initialValue;
    };
  };
}

class Form {
  @minLength(3)
  username = "Bob";
}
\`\`\``,task:{description:"Create a method decorator that memoizes (caches) the results of pure function calls.",starterCode:`// TODO: Create a @memoize decorator
// Should cache results based on arguments

class MathUtils {
  // @memoize
  fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}`,solution:`function memoize(
  target: any,
  context: ClassMethodDecoratorContext
) {
  const cache = new Map<string, any>();

  return function (this: any, ...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = target.call(this, ...args);
    cache.set(key, result);
    return result;
  };
}

class MathUtils {
  @memoize
  fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}

const math = new MathUtils();
console.time("first");
math.fibonacci(40);  // Computes all values
console.timeEnd("first");

console.time("cached");
math.fibonacci(40);  // Instant from cache
console.timeEnd("cached");`,hints:["Use a Map to cache results keyed by JSON.stringify(args)","Return a replacement function that checks the cache first","Call target.call(this, ...args) for cache misses"]}}],test:[{id:"mod17-q1",question:"What is a decorator?",options:["A design pattern for UI","A function that modifies or adds metadata to classes/members","A CSS framework","A testing utility"],correctAnswer:1,explanation:"A decorator is a special function that wraps a class, method, property, or accessor to modify its behavior or attach metadata. At its core, @log on a method means: pass that method to the log() function, which can add logging, caching, access control, or any other cross-cutting concern without changing the method's own code. Used extensively by Angular, NestJS, TypeORM, and MobX."},{id:"mod17-q2",question:"What is a decorator factory?",options:["A class that creates decorators","A function that returns a decorator (allows configuration)","A built-in TypeScript feature","A compiler plugin"],correctAnswer:1,explanation:"A decorator factory is a higher-order function that accepts parameters and returns the actual decorator function. This pattern enables configurable decorators: @minLength(3) first calls minLength(3) to get the decorator, then applies it. Without the factory pattern, decorators have fixed behavior; factories make them reusable with different configurations."},{id:"mod17-q3",question:"Which TypeScript config enables legacy decorators?",options:["strictDecorators","experimentalDecorators","enableDecorators","decorators"],correctAnswer:1,explanation:"The experimentalDecorators compiler option in tsconfig.json enables the legacy (TypeScript-specific) decorator syntax. This is required by Angular, NestJS, and other frameworks that use decorators authored before the TC39 standard was finalized. Starting with TypeScript 5.0, the new TC39 Stage 3 decorators are available WITHOUT this flag — the two systems use slightly different APIs."},{id:"mod17-q4",question:"In what order do decorators execute?",options:["Top to bottom","Bottom to top (closest to target first)","Alphabetically","Random"],correctAnswer:1,explanation:"Multiple decorators compose bottom-up: the decorator closest to the declaration executes first, and outer decorators wrap the result. Think of it like function composition: @A @B method is equivalent to A(B(method)). The factories (if used) are evaluated top-to-bottom, but the actual decorator application is bottom-to-top. This is consistent with mathematical function composition."},{id:"mod17-q5",question:"TC39 Stage 3 decorators are available in TypeScript starting from:",options:["TypeScript 3.0","TypeScript 4.0","TypeScript 5.0","Not yet available"],correctAnswer:2,explanation:"TypeScript 5.0 (March 2023) introduced native support for TC39 Stage 3 decorators. These work without the experimentalDecorators flag and have a different API: the decorator receives a context object instead of the descriptor/target/key triple. The legacy syntax continues to work with experimentalDecorators enabled, so both ecosystems can coexist during the transition."}]},dm={id:"mod-18",title:"Error Handling & Performance",description:"Error handling patterns, custom errors, debugging techniques, performance profiling, and memory leak prevention.",topics:[{id:"mod18-t1",title:"Error Handling Patterns",explanation:`## Error Handling

### Custom Error Classes

\`\`\`typescript
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
    // Fix prototype chain (needed for instanceof)
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

class NotFoundError extends AppError {
  constructor(resource: string, id: string | number) {
    super(\`\${resource} with id \${id} not found\`, "NOT_FOUND", 404);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

class ValidationError extends AppError {
  constructor(public fields: Record<string, string>) {
    super("Validation failed", "VALIDATION_ERROR", 400);
    this.name = "ValidationError";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
\`\`\`

### Error Handling Strategies

\`\`\`typescript
// Pattern 1: try/catch with specific errors
async function getUser(id: number) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new NotFoundError("User", id);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof NotFoundError) {
      console.warn(error.message);
      return null;
    }
    throw error; // Re-throw unexpected errors
  }
}

// Pattern 2: Result type (no exceptions)
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

function safeParse(json: string): Result<unknown> {
  try {
    return { ok: true, value: JSON.parse(json) };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e : new Error(String(e)) };
  }
}

const result = safeParse('{"a":1}');
if (result.ok) {
  console.log(result.value); // unknown
} else {
  console.error(result.error.message);
}
\`\`\`

### Async Error Boundaries

\`\`\`typescript
// Global unhandled rejection handler
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault();
});

// Wrap async callbacks safely
function safeAsync<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  return (async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error("Async error caught:", error);
      throw error;
    }
  }) as T;
}
\`\`\``,task:{description:"Build an error hierarchy for an e-commerce app with custom error classes and a centralized error handler.",starterCode:`// TODO: Create error hierarchy
// AppError → AuthError, PaymentError, InventoryError
// Central error handler that formats responses`,solution:`class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number = 500
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class AuthError extends AppError {
  constructor(message = "Authentication required") {
    super(message, "AUTH_ERROR", 401);
  }
}

class PaymentError extends AppError {
  constructor(message: string, public readonly transactionId?: string) {
    super(message, "PAYMENT_ERROR", 402);
  }
}

class InventoryError extends AppError {
  constructor(public readonly productId: string, public readonly requested: number, public readonly available: number) {
    super(\`Insufficient stock for \${productId}: requested \${requested}, available \${available}\`, "INVENTORY_ERROR", 409);
  }
}

interface ErrorResponse {
  error: string;
  code: string;
  status: number;
  details?: Record<string, unknown>;
}

function handleError(error: unknown): ErrorResponse {
  if (error instanceof InventoryError) {
    return { error: error.message, code: error.code, status: error.statusCode, details: { productId: error.productId, requested: error.requested, available: error.available } };
  }
  if (error instanceof AppError) {
    return { error: error.message, code: error.code, status: error.statusCode };
  }
  return { error: "Internal server error", code: "INTERNAL", status: 500 };
}

// Usage
try {
  throw new InventoryError("SKU-123", 5, 2);
} catch (e) {
  console.log(handleError(e));
  // { error: "Insufficient stock...", code: "INVENTORY_ERROR", status: 409, details: {...} }
}`,hints:["Use Object.setPrototypeOf(this, new.target.prototype) to fix instanceof","Check error types from most specific to least specific","Always handle unknown errors with a generic fallback"]}},{id:"mod18-t2",title:"Performance & Memory",explanation:`## Performance Techniques

### Debounce & Throttle

\`\`\`typescript
function debounce<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

function throttle<T extends (...args: any[]) => any>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= ms) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Usage
window.addEventListener("resize", debounce(() => {
  console.log("Resized!");
}, 250));
\`\`\`

### Common Memory Leaks

\`\`\`typescript
// ❌ Leak: Forgotten event listeners
function setupButton() {
  const handler = () => console.log("clicked");
  document.addEventListener("click", handler);
  // Never removed!
}

// ✅ Fix: Clean up
function setupButton() {
  const handler = () => console.log("clicked");
  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}

// ❌ Leak: Closures holding references
function createLeak() {
  const hugeData = new Array(1_000_000).fill("x");
  return () => hugeData.length; // hugeData can never be GC'd
}

// ✅ Fix: Release after use
function noLeak() {
  let hugeData: string[] | null = new Array(1_000_000).fill("x");
  const length = hugeData.length;
  hugeData = null; // Allow GC
  return () => length;
}
\`\`\`

### Structuring for Performance

\`\`\`typescript
// Avoid creating objects in hot loops
// ❌ Slow
for (let i = 0; i < 1_000_000; i++) {
  const point = { x: i, y: i * 2 }; // New object each iteration
}

// ✅ Fast: Reuse or use typed arrays
const xs = new Float64Array(1_000_000);
const ys = new Float64Array(1_000_000);
for (let i = 0; i < 1_000_000; i++) {
  xs[i] = i;
  ys[i] = i * 2;
}

// Use Web Workers for CPU-intensive tasks
const worker = new Worker("worker.js");
worker.postMessage({ data: largeArray });
worker.onmessage = (e) => console.log("Result:", e.data);
\`\`\``,task:{description:"Implement a debounce function with TypeScript that preserves the original function's parameter types and supports cancellation.",starterCode:`// TODO: Type-safe debounce with cancel
function debounce<T extends (...args: any[]) => any>(
  fn: T, ms: number
): ??? {
  // TODO
}`,solution:`interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel(): void;
  flush(): void;
}

function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;

  const debounced = (...args: Parameters<T>) => {
    lastArgs = args;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
      lastArgs = null;
    }, ms);
  };

  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
    lastArgs = null;
  };

  debounced.flush = () => {
    if (timer && lastArgs) {
      clearTimeout(timer);
      fn(...lastArgs);
      timer = null;
      lastArgs = null;
    }
  };

  return debounced as DebouncedFunction<T>;
}

// Usage
const debouncedSearch = debounce((query: string) => {
  console.log("Searching:", query);
}, 300);

debouncedSearch("hello"); // Delayed
debouncedSearch.cancel();  // Cancelled
debouncedSearch("world");
debouncedSearch.flush();   // Executes immediately`,hints:["Use Parameters<T> for type-safe argument forwarding","Store lastArgs to support flush()","Return an object/function with cancel and flush methods"]}}],test:[{id:"mod18-q1",question:"Why use Object.setPrototypeOf in custom error classes?",options:["Better performance","Fix instanceof checks when targeting ES5","Required by TypeScript","Add methods"],correctAnswer:1,explanation:"When extending built-in classes like Error while targeting ES5 or earlier, the TypeScript compiler changes the prototype chain in a way that breaks instanceof checks. Adding Object.setPrototypeOf(this, CustomError.prototype) in the constructor restores the correct chain. In ES6+ targets this isn't needed since native class extends works correctly. This is a common gotcha in TypeScript error hierarchies."},{id:"mod18-q2",question:"What is the Result pattern alternative to try/catch?",options:["Promise","Returning { ok, value } | { ok, error } discriminated union","Using global variables","Silent failures"],correctAnswer:1,explanation:"The Result pattern returns a discriminated union like { ok: true, value: T } | { ok: false, error: Error } instead of throwing exceptions. This makes error handling explicit in the type system — callers are forced to handle both cases since the return type includes both variants. Unlike try/catch, which is invisible in the function signature, Result makes failure a first-class part of the API contract. Popular in Rust and gaining traction in TypeScript codebases."},{id:"mod18-q3",question:"What is the difference between debounce and throttle?",options:["No difference","Debounce waits for pause; throttle limits frequency","Debounce is faster","Throttle is deprecated"],correctAnswer:1,explanation:"Debounce waits for a pause in calls before executing: if you debounce a search input at 300ms, it only fires 300ms after the user STOPS typing. Throttle limits execution to at most once per interval: a scroll handler throttled at 100ms fires every 100ms regardless of how often the event fires. Use debounce for input fields and search; use throttle for scroll, resize, and mouse move where you want regular updates."},{id:"mod18-q4",question:"Which is a common memory leak in JavaScript?",options:["Using const","Forgotten event listeners holding references","Using arrays","Using strict mode"],correctAnswer:1,explanation:"Event listeners that are never removed hold references to their callback closures, which may capture DOM elements, large data structures, or entire component trees. In SPAs, this is the #1 memory leak source: adding listeners in componentDidMount or useEffect without proper cleanup in the return/unmount function. Other common leaks: growing caches without eviction, uncleared setInterval, and global variables holding DOM references."},{id:"mod18-q5",question:"When should you use Web Workers?",options:["For DOM manipulation","For CPU-intensive tasks to keep the main thread responsive","For styling","For network requests"],correctAnswer:1,explanation:"Web Workers run JavaScript in a separate thread, off the main thread. Use them for CPU-intensive tasks like: large data processing, image/video manipulation, complex calculations, parsing large JSON, cryptographic operations. Workers communicate with the main thread via postMessage/onmessage. Limitation: Workers can't access the DOM directly — DOM updates must be done by the main thread after receiving Worker results."}]},pm=[{id:"ft-1",question:"What is the output of: console.log(typeof typeof 42)?",options:['"number"','"string"','"undefined"','"object"'],correctAnswer:1,explanation:'typeof 42 evaluates to the string "number". Then typeof "number" evaluates to "string" (since "number" is a string). So the final result is "string". Key insight: typeof ALWAYS returns a string, so chaining typeof twice always gives "string". (See Module 5: Type Coercion & Equality Traps)'},{id:"ft-2",question:`What does the following print?
for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }`,options:["0, 1, 2","3, 3, 3","undefined x3","0, 0, 0"],correctAnswer:1,explanation:"var is function-scoped, so all three closures share the SAME i variable. By the time the setTimeout callbacks execute (after the loop completes), i has been incremented to 3. All three callbacks log 3. Fix: use let (block-scoped, creates a fresh i per iteration) or IIFE. (See Module 2: Scope, Closures & Hoisting)"},{id:"ft-3",question:"What is the output of: [1,2,3].map(parseInt)?",options:["[1, 2, 3]","[1, NaN, NaN]","[1, NaN, 1]","Error"],correctAnswer:1,explanation:"Array.map passes three arguments to its callback: (value, index, array). parseInt accepts two: (string, radix). So the calls are: parseInt(1, 0) = 1 (radix 0 defaults to 10), parseInt(2, 1) = NaN (base 1 is invalid), parseInt(3, 2) = NaN (3 is not valid in base 2). This is a classic trap of implicit argument passing. (See Module 5: Type Coercion & Equality Traps)"},{id:"ft-4",question:"How do you make TypeScript enforce exhaustive pattern matching?",options:["Use any","Use never in the default case","Use unknown","Use void"],correctAnswer:1,explanation:"In a switch/if-else over a discriminated union, assign the remaining variable to a never type in the default case. If all union variants are handled, the variable narrows to never (compatible). If a variant is missed, the variable retains that type, which is NOT assignable to never — causing a compile error that alerts you to the missing case. (See Module 16: Type Guards & Narrowing)"},{id:"ft-5",question:'What is the output of: Promise.resolve(1).then(x => x + 1).then(x => { throw new Error("oops") }).then(x => x + 1).catch(e => 42).then(x => console.log(x))?',options:["3","42","Error thrown","undefined"],correctAnswer:1,explanation:"Trace the chain: resolve(1) → .then(x => 2) → .then(throw Error) → .then(skip: chain is rejected) → .catch(return 42, recovers the chain) → .then(log 42). Key insight: catch() returns a resolved Promise (unless it throws), which means subsequent .then() calls run normally with the caught value. This is how Promise chains recover from errors. (See Module 7: Promises & Async/Await)"},{id:"ft-6",question:"Explain the difference between Partial<T> and Required<T>.",options:["Both make properties optional","Partial makes all optional, Required makes all required","They are the same","Required removes properties"],correctAnswer:1,explanation:"Partial<T> adds ? to every property, making them all optional: { name?: string, age?: number }. Required<T> removes ? from every property, making them all required. They are inverse operations. Common use: Partial<Config> for update functions (only send changed fields), Required<Config> for fully-validated configuration objects. (See Module 14: Advanced Types & Utilities)"},{id:"ft-7",question:`What does this output?
console.log(0.1 + 0.2 === 0.3)`,options:["true","false","NaN","Error"],correctAnswer:1,explanation:"0.1 + 0.2 = 0.30000000000000004 due to IEEE 754 floating-point binary representation. 0.1 and 0.2 cannot be represented exactly in binary, so their sum has a tiny rounding error. For safe comparison, use: Math.abs(a - b) < Number.EPSILON, or work with integers (multiply by 100 for cents). This affects ALL languages using IEEE 754 floats, not just JavaScript. (See Module 5: Type Coercion & Equality Traps)"},{id:"ft-8",question:"What is the Temporal Dead Zone?",options:["A V8 optimization","The period between entering scope and declaration where let/const access throws","Dead code elimination","A memory region"],correctAnswer:1,explanation:"The TDZ is the region from the start of a block scope to the line where let/const is declared. The variable EXISTS (it's hoisted) but is in an UNINITIALIZED state — any access during this window throws ReferenceError: Cannot access 'x' before initialization. This was designed to catch bugs that var's silent undefined-initialization would hide. (See Module 2: Scope, Closures & Hoisting)"},{id:"ft-9",question:"What TS type represents a function that never returns?",options:["void","undefined","never","null"],correctAnswer:2,explanation:"The never type represents functions that NEVER return: functions that always throw (function fail(): never { throw new Error(); }), functions with infinite loops, or the bottom of exhaustive type narrowing. void means the function returns but the return value should be ignored; never means the function never reaches a return point. never is also the empty union type: string & number = never. (See Module 16: Type Guards & Narrowing)"},{id:"ft-10",question:"What is the output of: console.log([] == false)?",options:["true","false","TypeError","undefined"],correctAnswer:0,explanation:'The == comparison triggers type coercion: [] → "" (ToPrimitive) → 0 (ToNumber), and false → 0 (ToNumber). Since 0 == 0 is true, the result is true. This is surprising because [] is truthy in boolean context (Boolean([]) === true) but equals false with ==. This inconsistency is why === is strongly recommended over ==. (See Module 5: Type Coercion & Equality Traps)'},{id:"ft-11",question:"How does Proxy differ from Object.defineProperty?",options:["No difference","Proxy intercepts all operations on a target; defineProperty modifies single property descriptors","defineProperty is more powerful","Proxy is deprecated"],correctAnswer:1,explanation:"Proxy wraps an entire object and can intercept 13 different operations (get, set, has, deleteProperty, apply, construct, ownKeys, etc.) via handler traps. Object.defineProperty only configures individual property descriptors (value, writable, enumerable, configurable, get/set). Proxy is more versatile for metaprogramming; defineProperty is better for defining computed or guarded properties. Vue 2 used defineProperty; Vue 3 switched to Proxy for broader reactivity. (See Module 10: Proxy & Reflect)"},{id:"ft-12",question:`What is the output of:
function* gen() { yield 1; yield 2; return 3; }
const g = gen();
console.log([...g]);`,options:["[1, 2, 3]","[1, 2]","[3]","Error"],correctAnswer:1,explanation:"The spread operator and for...of consume iterators until done: true, but they do NOT include the return value. yield 1 and yield 2 produce { value, done: false }; return 3 produces { value: 3, done: true }. Since spread stops at done: true and skips that value, only [1, 2] is collected. The return value (3) is only accessible via the .next() call that returns { value: 3, done: true }. (See Module 9: Iterators, Generators & Symbols)"},{id:"ft-13",question:"What TypeScript feature prevents accidentally mixing USD and EUR amounts?",options:["Enums","Branded/opaque types","Interfaces","Type guards"],correctAnswer:1,explanation:`Branded (opaque) types add a phantom property via intersection to create nominally distinct types from structurally identical primitives: type USD = number & { __brand: "USD" }; type EUR = number & { __brand: "EUR" };. Now a function expecting USD won't accept EUR even though both are numbers. The brand property never exists at runtime — it's purely a compile-time guard against accidentally mixing incompatible values with the same underlying type. (See Module 14: Advanced Types & Utilities)`},{id:"ft-14",question:"What is the event loop order of execution?",options:["Microtasks → Macrotasks → Render","Macrotasks → Render → Microtasks","Render → Microtasks → Macrotasks","Random"],correctAnswer:0,explanation:"The event loop processes: (1) one macrotask from the task queue, (2) drain ALL microtasks (Promise.then, queueMicrotask), (3) render/paint if needed (requestAnimationFrame runs here), (4) pick the next macrotask. Critical: microtasks are fully drained between each macrotask, including microtasks queued during microtask processing. This is why chained .then() calls complete before the next setTimeout fires. (See Module 8: Event Loop & Microtasks)"},{id:"ft-15",question:"How do conditional types distribute over unions?",options:["They don't","Each union member is checked separately when T is a naked type parameter","Only with infer","Only with generics"],correctAnswer:1,explanation:'When T is a "naked" (unwrapped) type parameter in a conditional type T extends U ? X : Y, the conditional distributes over each union member individually. So MyType<A | B | C> becomes MyType<A> | MyType<B> | MyType<C>. This is automatic and only happens with naked type params — wrapping in a tuple [T] extends [U] prevents distribution and checks the union as a whole. (See Module 14: Advanced Types & Utilities)'},{id:"ft-16",question:`What is the problem with this code?
async function getData() {
  const a = await fetch("/api/a");
  const b = await fetch("/api/b");
  return [a, b];
}`,options:["No problem","Sequential awaits — should use Promise.all for parallel requests","Missing error handling","Wrong return type"],correctAnswer:1,explanation:`The two fetch calls are independent but run sequentially: b doesn't start until a completes. If each takes 500ms, the total is 1000ms. Using const [a, b] = await Promise.all([fetch("/api/a"), fetch("/api/b")]) runs both concurrently, completing in ~500ms. This is one of the most common async/await performance mistakes — sequential awaits are only correct when one request depends on the other's result. (See Module 7: Promises & Async/Await)`},{id:"ft-17",question:"What does `satisfies` do in TypeScript that `as` does not?",options:["Runtime validation","Validates type conformance without widening the inferred type","Creates a new type","Narrows the type"],correctAnswer:1,explanation:'`satisfies` (TS 4.9+) checks that a value conforms to a type at compile time but KEEPS the narrower inferred type. const config = { color: "red" } satisfies Config gives config.color the type "red" (literal), not string. With `as Config`, the type would be widened to string. This gives you both type safety (compile error if value doesn\'t match Config) AND precise autocomplete from the actual value. (See Module 13: TypeScript Fundamentals)'},{id:"ft-18",question:"What memory management issue does WeakMap solve?",options:["Stack overflow","Memory leaks from object metadata/caching where keys should be GC-eligible","Heap fragmentation","Circular references"],correctAnswer:1,explanation:"WeakMap holds weak references to its keys — when no other code references a key object, both the key and its associated value become eligible for garbage collection. This prevents memory leaks in caching/metadata patterns: with a regular Map, entries persist forever even if the key is no longer used anywhere else, keeping the object alive. Common use cases: DOM element metadata, private class data, and caching computed results for objects. (See Module 11: WeakRef, WeakMap & Memory)"},{id:"ft-19",question:"What is the difference between ESM live bindings and CJS exports?",options:["No difference","ESM exports are live references updated when the source changes; CJS exports are value snapshots","CJS has live bindings","Both are live"],correctAnswer:1,explanation:"ESM exports are live bindings: when the exporting module updates a variable (let count = 0; count++;), all importers see the updated value immediately. CJS exports are snapshots: require() copies the module.exports object at that moment. For primitive exports in CJS, later changes in the source module are NOT reflected in the importer. This difference is critical for understanding hot-reload behavior, circular dependencies, and singleton patterns. (See Module 12: Module Systems)"},{id:"ft-20",question:`What does the following TypeScript code produce?
type Params = Parameters<(a: string, b: number) => void>;`,options:["[string, number]","{a: string, b: number}","string | number","void"],correctAnswer:0,explanation:"Parameters<T> is a built-in utility type that extracts the parameter types from a function type as a tuple. For (a: string, b: number) => void, it produces [string, number]. Under the hood, it uses conditional types with infer: T extends (...args: infer P) => any ? P : never. Similarly, ReturnType<T> extracts the return type. These utility types are essential for typing higher-order functions and wrapper utilities. (See Module 14: Advanced Types & Utilities)"}],fm=[{id:"lt-1",question:"What is the role of the call stack in JavaScript?",options:["Store variables","Track function execution contexts","Manage event listeners","Parse HTML"],correctAnswer:1,explanation:"The call stack is a LIFO data structure that tracks which function is currently executing and which functions called it."},{id:"lt-2",question:"Where are objects stored in the JS engine?",options:["Stack","Heap","Queue","Register"],correctAnswer:1,explanation:"Objects and other reference types are allocated on the heap — unstructured memory for dynamic allocation."},{id:"lt-3",question:"What does JIT compilation mean?",options:["JavaScript In TypeScript","Just-In-Time: compiles at runtime","Joined Interface Types","JSON Import Tool"],correctAnswer:1,explanation:"JIT compilation translates JavaScript to machine code at runtime, combining interpretation with ahead-of-time compilation."},{id:"lt-4",question:"An execution context contains:",options:["Only variables","Variable environment, scope chain, this binding","Only the call stack","Only function arguments"],correctAnswer:1,explanation:"Each execution context has a variable environment, a reference to the outer scope (scope chain), and the this binding."},{id:"lt-5",question:"What is lexical scope?",options:["Scope determined at runtime","Scope determined by code position at write time","Dynamic scope","Global scope only"],correctAnswer:1,explanation:"Lexical scope is determined by where functions and variables are declared in the source code, not where they are called."},{id:"lt-6",question:"What is a closure?",options:["A design pattern","A function that retains access to its lexical scope","A class feature","An error type"],correctAnswer:1,explanation:"A closure is a function plus its reference to the surrounding lexical environment, allowing access to outer variables after the outer function returns."},{id:"lt-7",question:"What is hoisted with var declarations?",options:["Nothing","Declaration only, initialized to undefined","Declaration and value","The entire scope"],correctAnswer:1,explanation:"var declarations are hoisted to the top of their scope and initialized to undefined. The assignment stays in place."},{id:"lt-8",question:"What happens when you access a let variable before declaration?",options:["Returns undefined","Returns null","ReferenceError (TDZ)","Returns 0"],correctAnswer:2,explanation:"let and const are in the Temporal Dead Zone (TDZ) until the declaration is reached, causing ReferenceError on access."},{id:"lt-9",question:"What does `this` refer to in a standalone function (non-strict)?",options:["undefined","The function itself","The global object","null"],correctAnswer:2,explanation:"In non-strict mode, a standalone function call binds this to the global object (window in browsers)."},{id:"lt-10",question:"How does an arrow function determine its `this`?",options:["From the call site","Inherits from enclosing lexical scope","Always undefined","From the prototype"],correctAnswer:1,explanation:"Arrow functions don't have their own this — they inherit this from the enclosing lexical scope at definition time."},{id:"lt-11",question:"What is __proto__?",options:["A constructor","A reference to the object's prototype","A method","A type annotation"],correctAnswer:1,explanation:"__proto__ is a getter/setter that exposes the internal [[Prototype]] link to the object's prototype."},{id:"lt-12",question:"ES6 class syntax is syntactic sugar over:",options:["Closures","Prototypal inheritance","Module pattern","Factory functions"],correctAnswer:1,explanation:"ES6 classes are syntactic sugar over JavaScript's prototypal inheritance model — they use prototype chains under the hood."},{id:"lt-13",question:"What is [] + [] in JavaScript?",options:["[]",'""',"NaN","0"],correctAnswer:1,explanation:'Both arrays are converted to empty strings via toString(), then concatenated: "" + "" = "".'},{id:"lt-14",question:"What does == do that === does not?",options:["Nothing","Type coercion before comparison","Deep comparison","Reference comparison"],correctAnswer:1,explanation:"== performs type coercion (converts operands to the same type) before comparing. === compares without conversion."},{id:"lt-15",question:"What does the spread operator ... do?",options:["Creates a loop","Expands iterables into individual elements","Defines a rest parameter","Types a variable"],correctAnswer:1,explanation:"The spread operator expands an iterable (array, string, object) into individual elements in array literals, function calls, or object literals."},{id:"lt-16",question:"What does optional chaining ?. return on null/undefined?",options:["Throws error","null","undefined","false"],correctAnswer:2,explanation:"Optional chaining short-circuits and returns undefined if the left side is null or undefined."},{id:"lt-17",question:"What state can a Promise NOT be in?",options:["pending","fulfilled","rejected","cancelled"],correctAnswer:3,explanation:"Promises have three states: pending, fulfilled, and rejected. There is no cancelled state in the standard Promise API."},{id:"lt-18",question:"What does Promise.allSettled() return?",options:["The first result","All results whether fulfilled or rejected","Only fulfilled results","A single promise"],correctAnswer:1,explanation:"Promise.allSettled() waits for all promises and returns an array of objects with status and value/reason for each."},{id:"lt-19",question:"What happens if you don't catch a rejected promise?",options:["Nothing","Silent failure","UnhandledPromiseRejection warning/error","Automatic retry"],correctAnswer:2,explanation:"Uncaught promise rejections trigger an UnhandledPromiseRejection event, which in Node.js is a terminating error by default."},{id:"lt-20",question:"await can only be used inside:",options:["Any function","async functions (or top-level in modules)","Arrow functions","Callbacks"],correctAnswer:1,explanation:"await is only valid inside async functions or at the top level of ES modules."},{id:"lt-21",question:"Which runs first: setTimeout(fn, 0) or Promise.resolve().then(fn)?",options:["setTimeout","Promise.then (microtask)","Same time","Neither"],correctAnswer:1,explanation:"Microtasks (Promise.then) run before macrotasks (setTimeout). The microtask queue drains before the next macrotask."},{id:"lt-22",question:"What is the microtask queue?",options:["A browser API","A queue for Promise callbacks and queueMicrotask","The call stack","The event loop"],correctAnswer:1,explanation:"The microtask queue holds tasks from Promise callbacks and queueMicrotask(), processed after each macrotask and before the next."},{id:"lt-23",question:"What must a generator function return?",options:["A value","An iterator (Generator object)","A promise","undefined"],correctAnswer:1,explanation:"Generator functions return a Generator object that implements both the iterable and iterator protocols."},{id:"lt-24",question:"What does yield do in a generator?",options:["Returns permanently","Pauses execution and produces a value","Throws an error","Defines a variable"],correctAnswer:1,explanation:"yield pauses the generator, outputs a value, and resumes when next() is called again."},{id:"lt-25",question:"How many traps does Proxy support?",options:["3","7","13","20"],correctAnswer:2,explanation:"Proxy supports 13 traps: get, set, has, deleteProperty, apply, construct, ownKeys, getPrototypeOf, setPrototypeOf, isExtensible, preventExtensions, getOwnPropertyDescriptor, defineProperty."},{id:"lt-26",question:"What is Reflect.get(target, prop) equivalent to?",options:["target(prop)","target[prop]","target.get(prop)","prop.target"],correctAnswer:1,explanation:"Reflect.get(target, prop) is the functional equivalent of target[prop], used in Proxy traps to forward operations."},{id:"lt-27",question:"WeakMap entries are cleaned up when:",options:["You call clear()","The key object is garbage collected","The map is deleted","After a timeout"],correctAnswer:1,explanation:"WeakMap entries are automatically removed when the key object is no longer referenced elsewhere and is garbage collected."},{id:"lt-28",question:"Can you get the size of a WeakMap?",options:["Yes, .size","Yes, .length","No, it has no size property","Yes, Object.keys()"],correctAnswer:2,explanation:"WeakMap has no size or length property, and is not iterable. You can only get/set/has/delete with specific keys."},{id:"lt-29",question:"ESM imports are:",options:["Dynamic and synchronous","Static and asynchronous","Dynamic and asynchronous","Static and synchronous"],correctAnswer:1,explanation:"ES Module imports are static (parsed at compile time) and loaded asynchronously."},{id:"lt-30",question:"What does dynamic import() return?",options:["The module object","A Promise of the module","undefined","A function"],correctAnswer:1,explanation:"Dynamic import() returns a Promise that resolves to the module namespace object."},{id:"lt-31",question:"What is a union type?",options:["A combined object","A type that can be one of several types","An intersection","A generic"],correctAnswer:1,explanation:"A union type (A | B) means the value can be type A or type B. TypeScript will only allow operations valid for all members."},{id:"lt-32",question:"What does the `as const` assertion do?",options:["Makes runtime constant","Narrows to literal types and makes readonly","Creates a new type","Validates at runtime"],correctAnswer:1,explanation:"as const narrows all values to their literal types and makes the entire structure deeply readonly — all at the type level."},{id:"lt-33",question:"What can a type alias do that an interface cannot?",options:["Extend another type","Describe unions and primitives","Have methods","Be exported"],correctAnswer:1,explanation:"Type aliases can describe unions, intersections, primitives, tuples, and computed types. Interfaces are limited to object shapes."},{id:"lt-34",question:"What is declaration merging?",options:["Combining files","Multiple interface declarations with the same name merge into one","Importing from multiple files","A build step"],correctAnswer:1,explanation:"When two interfaces share the same name, TypeScript merges them into a single interface. This works only with interfaces, not type aliases."},{id:"lt-35",question:"What does Partial<T> do?",options:["Removes all properties","Makes all properties optional","Makes all required","Picks some properties"],correctAnswer:1,explanation:"Partial<T> creates a type with all properties of T set to optional."},{id:"lt-36",question:"What does the infer keyword do in conditional types?",options:["Infers a value","Declares a type variable to be inferred from a pattern","Creates an interface","Checks equality"],correctAnswer:1,explanation:"infer declares a type variable within a conditional type that TypeScript infers from the matched pattern."},{id:"lt-37",question:"What is a mapped type?",options:["A Map<K,V>","A type that transforms each property of another type","A type guard","A decorator"],correctAnswer:1,explanation:"Mapped types iterate over keys of a type and transform them: { [K in keyof T]: transformation }."},{id:"lt-38",question:"Template literal types combine:",options:["Runtime strings","String literal types into new string literal types","Template elements","Generic parameters"],correctAnswer:1,explanation:"Template literal types like `on${Capitalize<T>}` combine string literal types at the type level to produce new literal types."},{id:"lt-39",question:"What problem do generics solve?",options:["Performance","Type-safe reusable code without losing type information","Async operations","DOM manipulation"],correctAnswer:1,explanation:"Generics let you write functions, classes, and types that work with any type while preserving type information at each usage site."},{id:"lt-40",question:"What does `T extends keyof U` mean?",options:["T inherits from U","T must be a property key of type U","T is a subclass","T and U are equal"],correctAnswer:1,explanation:"keyof U produces a union of U's property names. T extends keyof U constrains T to be one of those names."},{id:"lt-41",question:"What is a discriminated union?",options:["A union with generic types","A union where each member has a common literal property for narrowing","A filtered union","A mapped type"],correctAnswer:1,explanation:"A discriminated union has a common property (discriminant) with literal values that TypeScript uses to narrow the type in switch/if statements."},{id:"lt-42",question:"What return type makes a function a type guard?",options:["boolean","value is Type","Type","asserts value"],correctAnswer:1,explanation:"A type predicate return type (value is Type) tells TypeScript to narrow the parameter when the function returns true."},{id:"lt-43",question:"What is a branded type?",options:["A type with a brand name","A structurally enhanced type that simulates nominal typing","A generic type","An enum"],correctAnswer:1,explanation:"Branded types intersect a type with a phantom __brand property to create nominally distinct types from structurally identical ones."},{id:"lt-44",question:"What does `asserts value is T` do?",options:["Returns boolean","Throws on false and narrows type after the call","Creates a type alias","Validates at compile time only"],correctAnswer:1,explanation:"Assertion functions throw if the assertion fails. If they return, TypeScript narrows the parameter type for subsequent code."},{id:"lt-45",question:"What is a decorator factory?",options:["A class","A function that returns a decorator, enabling configuration","A build tool","A testing framework"],correctAnswer:1,explanation:"A decorator factory takes parameters and returns the actual decorator function, allowing decorators to be configured."},{id:"lt-46",question:"In what order do multiple decorators execute?",options:["Top to bottom","Bottom to top (closest to target first)","Left to right","Random"],correctAnswer:1,explanation:"Decorators compose bottom-up: the decorator closest to the declaration evaluates first."},{id:"lt-47",question:"Why is Object.setPrototypeOf needed in custom Error subclasses?",options:["Performance","Fix instanceof checks when targeting ES5","Required syntax","Add properties"],correctAnswer:1,explanation:"Extending built-in classes like Error breaks instanceof in ES5 targets. Object.setPrototypeOf fixes the prototype chain."},{id:"lt-48",question:"What is debouncing?",options:["Cancelling all calls","Delaying execution until a pause in calls","Limiting call frequency","Queuing calls"],correctAnswer:1,explanation:"Debouncing delays a function execution until there is a pause in calls. Each new call resets the timer."},{id:"lt-49",question:"What is typeof null?",options:['"null"','"object"','"undefined"','"null"'],correctAnswer:1,explanation:'typeof null returns "object" — a historical bug in JavaScript that was never fixed for backward compatibility.'},{id:"lt-50",question:"What is NaN === NaN?",options:["true","false","TypeError","undefined"],correctAnswer:1,explanation:"NaN is the only value in JavaScript that is not equal to itself. Use Number.isNaN() to check for NaN."},{id:"lt-51",question:"What does void 0 return?",options:["0","null","undefined","void"],correctAnswer:2,explanation:"The void operator evaluates its operand and returns undefined. void 0 is a reliable way to get undefined."},{id:"lt-52",question:"What is Symbol.toPrimitive used for?",options:["Creating Symbols","Customizing how objects convert to primitives","Type checking","Iteration"],correctAnswer:1,explanation:'Symbol.toPrimitive defines a method that is called when an object is coerced to a primitive, receiving a hint ("number", "string", "default").'},{id:"lt-53",question:"What does Object.freeze() do?",options:["Deep freezes","Shallow freeze — prevents adding/modifying/deleting properties","Deletes all properties","Locks the prototype"],correctAnswer:1,explanation:"Object.freeze() does a shallow freeze — own properties cannot be added, removed, or modified. Nested objects are not frozen."},{id:"lt-54",question:"What are tagged template literals?",options:["Template strings with CSS","Functions called with template literal parts and expressions","String templates with types","Tagged HTML"],correctAnswer:1,explanation:"Tagged templates call a function with an array of string parts and the interpolated expressions as arguments."},{id:"lt-55",question:"What is the purpose of the satisfies keyword in TypeScript?",options:["Runtime validation","Validates a value matches a type without widening","Type assertion","Interface check"],correctAnswer:1,explanation:"satisfies validates that a value conforms to a type while keeping the narrower inferred type, unlike type annotations which widen."},{id:"lt-56",question:'What is "structural typing" in TypeScript?',options:["Types based on names","Types based on shape/structure compatibility","Types based on inheritance","Types based on modules"],correctAnswer:1,explanation:"TypeScript uses structural typing: types are compatible if they have the same structure/properties, regardless of declared names."},{id:"lt-57",question:'What is a "type-only import"?',options:["An import that is removed at compile time","A runtime import","A dynamic import","A default import"],correctAnswer:0,explanation:"import type { X } ensures the import is used only for types and is completely erased in the compiled JavaScript."},{id:"lt-58",question:"What does globalThis refer to?",options:["undefined","The global object in any environment","The current module","The DOM"],correctAnswer:1,explanation:"globalThis provides a standard way to access the global object across environments: window in browsers, global in Node.js, self in workers."},{id:"lt-59",question:"Can you use await at the top level of an ES module?",options:["No","Yes, with top-level await","Only in Node.js","Only with a flag"],correctAnswer:1,explanation:"Top-level await is supported in ES modules, allowing you to use await outside async functions at the module level."},{id:"lt-60",question:'What does the "unknown" type mean in TypeScript?',options:["Same as any","A type-safe top type — must narrow before use","An error type","A never type"],correctAnswer:1,explanation:"unknown is the type-safe counterpart of any. You cannot perform operations on unknown values without first narrowing the type."}];function Al(e=30){const t=[...fm].sort(()=>Math.random()-.5);return t.slice(0,Math.min(e,t.length))}const jl=[{prompt:"Declare a block-scoped constant named PI with value 3.14159",codeBefore:[],codeAfter:["console.log(PI);"],answer:"const PI = 3.14159;",hint:"Use const for block-scoped constants"},{prompt:"Create a closure that captures a counter variable",codeBefore:["function makeCounter() {","  let count = 0;"],codeAfter:["}"],answer:"  return () => ++count;",hint:"Return a function that increments and returns count"},{prompt:"Destructure name and age from the user object",codeBefore:['const user = { name: "Alice", age: 30, email: "a@b.c" };'],codeAfter:["console.log(name, age);"],answer:"const { name, age } = user;",hint:"Use curly braces for object destructuring"},{prompt:"Use the spread operator to clone the array",codeBefore:["const original = [1, 2, 3];"],codeAfter:["console.log(copy);"],answer:"const copy = [...original];",hint:"Spread into a new array literal"},{prompt:"Use optional chaining to safely access street",codeBefore:["const user = { address: null };"],codeAfter:[],answer:"const street = user.address?.street;",hint:"Use ?. to short-circuit on null/undefined"},{prompt:"Use nullish coalescing to provide a default",codeBefore:["const input = null;"],codeAfter:["console.log(value);"],answer:'const value = input ?? "default";',hint:'?? only triggers on null/undefined, not on "" or 0'},{prompt:"Create an arrow function that doubles a number",codeBefore:[],codeAfter:["console.log(double(5)); // 10"],answer:"const double = (n: number) => n * 2;",hint:"Arrow function with implicit return"},{prompt:"Use template literal for string interpolation",codeBefore:['const name = "World";'],codeAfter:[],answer:"const greeting = `Hello, ${name}!`;",hint:"Use backticks and ${} for interpolation"},{prompt:"Bind the function to the user object",codeBefore:['const user = { name: "Alice" };',"function greet() { return `Hi, ${this.name}`; }"],codeAfter:["console.log(boundGreet());"],answer:"const boundGreet = greet.bind(user);",hint:"Use .bind(obj) to permanently set this"},{prompt:"Call the function with a specific this context",codeBefore:["const obj = { x: 42 };","function getX() { return this.x; }"],codeAfter:[],answer:"const result = getX.call(obj);",hint:".call(obj) invokes with obj as this"},{prompt:"Define a class that extends Animal",codeBefore:["class Animal { constructor(public name: string) {} }"],codeAfter:['  bark() { return "Woof!"; }',"}"],answer:"class Dog extends Animal {",hint:"Use extends for class inheritance"},{prompt:"Add a private field to the class",codeBefore:["class Counter {"],codeAfter:["  increment() { this.#count++; }","  get value() { return this.#count; }","}"],answer:"  #count = 0;",hint:"# prefix creates a truly private field"},{prompt:"Create a promise that resolves after 1 second",codeBefore:[],codeAfter:[],answer:"const delay = new Promise(resolve => setTimeout(resolve, 1000));",hint:"Pass resolve to setTimeout"},{prompt:"await both promises in parallel",codeBefore:["async function fetchBoth() {",'  const p1 = fetch("/api/a");','  const p2 = fetch("/api/b");'],codeAfter:["}"],answer:"  const [a, b] = await Promise.all([p1, p2]);",hint:"Promise.all runs promises in parallel"},{prompt:"Handle promise rejection with catch",codeBefore:['fetch("/api/data")'],codeAfter:["  .catch(err => console.error(err));"],answer:"  .then(res => res.json())",hint:".then() chains before .catch()"},{prompt:"Create an async function that returns user data",codeBefore:[],codeAfter:['  const res = await fetch("/api/user");',"  return res.json();","}"],answer:"async function getUser() {",hint:"Use the async keyword before function"},{prompt:"Queue a microtask",codeBefore:['console.log("start");'],codeAfter:['console.log("end");',"// Output: start, end, microtask"],answer:'queueMicrotask(() => console.log("microtask"));',hint:"queueMicrotask() schedules a microtask"},{prompt:"Make the object iterable with Symbol.iterator",codeBefore:["const range = {","  from: 1,","  to: 3,"],codeAfter:["      if (current <= this.to) return { value: current++, done: false };","      return { done: true, value: undefined };","    }","  };","  }","};"],answer:"  [Symbol.iterator]() { let current = this.from; return {next: () => {",hint:"Implement [Symbol.iterator] returning {next()}"},{prompt:"Define a generator function that yields 1, 2, 3",codeBefore:[],codeAfter:["  yield 2;","  yield 3;","}"],answer:"function* nums() { yield 1;",hint:"function* defines a generator"},{prompt:"Create a proxy that logs property access",codeBefore:["const obj = { a: 1, b: 2 };"],codeAfter:["  }","});"],answer:"const proxy = new Proxy(obj, { get(target, prop) { console.log(`get ${String(prop)}`); return target[prop];",hint:"Use Proxy with a get trap"},{prompt:"Check for NaN correctly",codeBefore:["const value = NaN;"],codeAfter:["console.log(isNan); // true"],answer:"const isNan = Number.isNaN(value);",hint:"Use Number.isNaN() not isNaN()"},{prompt:"Use strict equality instead of loose",codeBefore:["const a = 0;",'const b = "";'],codeAfter:["// false with ===, true with =="],answer:"const equal = a === b;",hint:"=== checks value and type without coercion"},{prompt:"Define a union type for API response status",codeBefore:[],codeAfter:['const s: Status = "loading";'],answer:'type Status = "loading" | "success" | "error";',hint:"Use | to create a union of string literals"},{prompt:"Create an intersection type",codeBefore:["type HasName = { name: string };","type HasAge = { age: number };"],codeAfter:['const p: Person = { name: "Alice", age: 30 };'],answer:"type Person = HasName & HasAge;",hint:"Use & to combine types"},{prompt:"Make all properties of User optional",codeBefore:["interface User { id: number; name: string; email: string; }"],codeAfter:[],answer:"type PartialUser = Partial<User>;",hint:"Use the Partial<T> utility type"},{prompt:"Pick only id and name from User",codeBefore:["interface User { id: number; name: string; email: string; age: number; }"],codeAfter:[],answer:'type UserSummary = Pick<User, "id" | "name">;',hint:"Use Pick<T, K> to select specific properties"},{prompt:"Define a readonly tuple type",codeBefore:[],codeAfter:['// t[0] = "x"; // Error: readonly'],answer:'const t = ["hello", 42] as const;',hint:"Use as const for readonly literal tuples"},{prompt:"Extract the return type of a function",codeBefore:['function createUser() { return { id: 1, name: "Alice" }; }'],codeAfter:[],answer:"type User = ReturnType<typeof createUser>;",hint:"Use ReturnType<typeof fn>"},{prompt:"Define a generic function that returns the first element",codeBefore:[],codeAfter:["console.log(first([1, 2, 3])); // 1"],answer:"function first<T>(arr: T[]): T | undefined { return arr[0]; }",hint:"Use <T> for the generic parameter"},{prompt:"Add a constraint: T must have an id property",codeBefore:[],codeAfter:["  return items.find(item => item.id === id);","}"],answer:"function findById<T extends { id: number }>(items: T[], id: number): T | undefined {",hint:"Use extends to constrain the generic"},{prompt:"Create a generic interface for API responses",codeBefore:[],codeAfter:['const res: ApiResponse<string[]> = { data: ["a"], error: null, loading: false };'],answer:"interface ApiResponse<T> { data: T; error: string | null; loading: boolean; }",hint:"Generic interface with <T> parameter"},{prompt:"Write a type guard function for string",codeBefore:[],codeAfter:["if (isString(value)) { value.toUpperCase(); }"],answer:'function isString(value: unknown): value is string { return typeof value === "string"; }',hint:'Return type is "value is string"'},{prompt:"Use a discriminated union switch",codeBefore:['type Shape = { kind: "circle"; r: number } | { kind: "square"; s: number };',"function area(shape: Shape) {"],codeAfter:['    case "square": return shape.s ** 2;',"  }","}"],answer:'  switch (shape.kind) { case "circle": return Math.PI * shape.r ** 2;',hint:"Switch on the discriminant property"},{prompt:"Export a named function",codeBefore:[],codeAfter:["  return a + b;","}"],answer:"export function add(a: number, b: number): number {",hint:"Add export before the function keyword"},{prompt:"Import with renaming",codeBefore:[],codeAfter:["console.log(sum(1, 2));"],answer:'import { add as sum } from "./math";',hint:"Use { original as alias } syntax"},{prompt:"Dynamic import a module",codeBefore:["async function loadModule() {"],codeAfter:["  chart.render();","}"],answer:'  const { default: chart } = await import("./chart");',hint:"import() returns a Promise"},{prompt:"Create a custom error class",codeBefore:[],codeAfter:["  }","}"],answer:'class NotFoundError extends Error { constructor(msg: string) { super(msg); this.name = "NotFoundError";',hint:"Extend Error and set this.name"},{prompt:"Use try-catch with specific error types",codeBefore:["try {","  riskyOperation();"],codeAfter:['    console.warn("Not found");',"  } else { throw e; }","}"],answer:"} catch (e) { if (e instanceof NotFoundError) {",hint:"Use instanceof to check error type"},{prompt:"Create a Map from entries",codeBefore:[],codeAfter:['console.log(map.get("a")); // 1'],answer:'const map = new Map([["a", 1], ["b", 2]]);',hint:"Pass an array of [key, value] pairs"},{prompt:"Store private data with WeakMap",codeBefore:["const privates = new WeakMap();","class Secret {"],codeAfter:["  }","  get() { return privates.get(this).value; }","}"],answer:"  constructor(value: string) { privates.set(this, { value });",hint:"Use this as the WeakMap key"},{prompt:"Create a debounced function",codeBefore:["function debounce(fn: Function, ms: number) {","  let timer: ReturnType<typeof setTimeout>;"],codeAfter:["  };","}"],answer:"  return (...args: any[]) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms);",hint:"Clear previous timer and set a new one"},{prompt:"Use Object.freeze for an immutable config",codeBefore:[],codeAfter:['// config.api = "x"; // Error in strict mode'],answer:'const config = Object.freeze({ api: "https://api.example.com", timeout: 5000 });',hint:"Object.freeze prevents modifications"},{prompt:"Use a conditional type to unwrap Promise",codeBefore:[],codeAfter:["type A = Unwrap<Promise<string>>; // string","type B = Unwrap<number>; // number"],answer:"type Unwrap<T> = T extends Promise<infer U> ? U : T;",hint:"Use infer to extract the inner type"},{prompt:"Create a mapped type that makes all values strings",codeBefore:["interface Data { count: number; active: boolean; name: string; }"],codeAfter:[],answer:"type Stringified<T> = { [K in keyof T]: string };",hint:"Iterate with [K in keyof T] and map to string"},{prompt:"Use template literal type for event names",codeBefore:['type Event = "click" | "hover";'],codeAfter:['// "onClick" | "onHover"'],answer:"type Handler = `on${Capitalize<Event>}`;",hint:"Use template literal types with Capitalize"},{prompt:"Extract parameter types of a function",codeBefore:["function greet(name: string, age: number) { }"],codeAfter:["// [string, number]"],answer:"type Params = Parameters<typeof greet>;",hint:"Parameters<typeof fn> returns a tuple of parameter types"},{prompt:"Create a Record type for a lookup table",codeBefore:[],codeAfter:['map.success = "#0f0";'],answer:'const map: Record<string, string> = { error: "#f00", warning: "#ff0" };',hint:"Record<K, V> creates an object type with keys K and values V"},{prompt:"Create a unique symbol",codeBefore:[],codeAfter:["const obj = { [id]: 42 };"],answer:'const id = Symbol("id");',hint:"Symbol() creates a unique identifier"},{prompt:"Use Promise.race to add a timeout",codeBefore:["function fetchWithTimeout(url: string, ms: number) {"],codeAfter:["  ]);","}"],answer:'  return Promise.race([fetch(url), new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))',hint:"Race the fetch against a timeout promise"},{prompt:"Use for-await-of for async iteration",codeBefore:["async function processStream(stream: AsyncIterable<string>) {"],codeAfter:["    console.log(chunk);","  }","}"],answer:"  for await (const chunk of stream) {",hint:"for await...of iterates over async iterables"},{prompt:"Swap two variables without a temp",codeBefore:["let a = 1, b = 2;"],codeAfter:["// a = 2, b = 1"],answer:"[a, b] = [b, a];",hint:"Use destructuring assignment to swap"},{prompt:"Remove duplicates from an array",codeBefore:["const arr = [1, 2, 2, 3, 3, 3];"],codeAfter:["// [1, 2, 3]"],answer:"const unique = [...new Set(arr)];",hint:"Set removes duplicates, spread converts back to array"},{prompt:"Flatten a nested array",codeBefore:["const nested = [[1, 2], [3, 4], [5]];"],codeAfter:["// [1, 2, 3, 4, 5]"],answer:"const flat = nested.flat();",hint:"Array.flat() flattens one level by default"},{prompt:"Create an object from key-value pairs",codeBefore:['const entries: [string, number][] = [["a", 1], ["b", 2]];'],codeAfter:["// { a: 1, b: 2 }"],answer:"const obj = Object.fromEntries(entries);",hint:"Object.fromEntries converts [key, value] pairs to an object"},{prompt:"Use Array.from to create a range",codeBefore:[],codeAfter:["// [0, 1, 2, 3, 4]"],answer:"const range = Array.from({ length: 5 }, (_, i) => i);",hint:"Array.from with a mapping function"},{prompt:"Group array items by a property",codeBefore:['const items = [{ type: "a", v: 1 }, { type: "b", v: 2 }, { type: "a", v: 3 }];'],codeAfter:["// { a: [...], b: [...] }"],answer:"const grouped = Object.groupBy(items, item => item.type);",hint:"Object.groupBy groups by the returned key"}],Z={title:"JavaScript & TypeScript Mastery",description:"A comprehensive course covering JavaScript and TypeScript from fundamentals to advanced patterns.",finalTest:pm,modules:[Gh,Qh,Jh,Yh,Xh,Zh,em,tm,nm,rm,om,im,sm,am,lm,um,cm,dm]};function hm(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function mm({onRandomQuestion:e,onQuickLine:t,isOpen:n,onClose:r}){const{progress:o}=bt(),i=s=>{const a=Z.modules.find(u=>u.id===s);if(!a)return 0;const l=a.topics.filter(u=>{var m;return(m=o.topicProgress[u.id])==null?void 0:m.completed}).length;return Math.round(l/a.topics.length*100)};return c.jsxs("aside",{className:`sidebar ${n?"open":""}`,children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsxs("h2",{children:["📜 ",Z.title]}),r&&c.jsx("button",{className:"sidebar-close",onClick:r,children:"✕"})]}),c.jsxs("nav",{className:"sidebar-nav",children:[c.jsx(Ir,{to:"/",end:!0,className:"nav-item",onClick:r,children:"🏠 Dashboard"}),c.jsxs(Ir,{to:"/level-test",className:"nav-item",onClick:r,children:["📋 Level Evaluation",o.levelTestResult&&c.jsx("span",{className:"badge",children:hm(Math.round(o.levelTestResult.score/o.levelTestResult.total*100))})]}),e&&c.jsx("button",{className:"nav-item random-q-btn",onClick:e,children:"🎲 Random Question"}),t&&c.jsx("button",{className:"nav-item random-q-btn",onClick:t,children:"⚡ Quick Line"}),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Modules"})}),Z.modules.map((s,a)=>c.jsx("div",{className:"module-nav",children:c.jsxs(Ir,{to:`/module/${s.id}`,className:"nav-item module-link",onClick:r,children:[c.jsxs("span",{children:[a+1,". ",s.title]}),c.jsxs("span",{className:"progress-badge",children:[i(s.id),"%"]})]})},s.id)),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Assessment"})}),c.jsxs(Ir,{to:"/final-test",className:"nav-item",onClick:r,children:["🏆 Final Test",o.finalTestResult&&c.jsxs("span",{className:"badge",children:[o.finalTestResult.score,"/",o.finalTestResult.total]})]})]})]})}const ym={"ft-1":5,"ft-2":2,"ft-3":5,"ft-4":16,"ft-5":7,"ft-6":14,"ft-7":5,"ft-8":2,"ft-9":16,"ft-10":5,"ft-11":10,"ft-12":9,"ft-13":14,"ft-14":8,"ft-15":14,"ft-16":7,"ft-17":13,"ft-18":11,"ft-19":12,"ft-20":14};function Pl(e){const t=e.match(/^mod(\d+)-q/);if(t){const r=parseInt(t[1],10)-1,o=Z.modules[r];if(o)return{number:r+1,title:o.title}}const n=ym[e];if(n){const r=Z.modules[n-1];if(r)return{number:n,title:r.title}}return null}function gm(){const e=[];for(const t of Z.modules)e.push(...t.test);return e.push(...Z.finalTest),e}const Nl=gm();function Rl(){return Nl[Math.floor(Math.random()*Nl.length)]}function vm({onClose:e}){const{dispatch:t}=bt(),[n,r]=k.useState(Rl),[o,i]=k.useState(null),[s,a]=k.useState(!1),[l,u]=k.useState(0),[m,h]=k.useState(!1),[y,w]=k.useState(0),g=k.useCallback(()=>{r(Rl()),i(null),a(!1),h(!1)},[]),x=T=>{if(!s)if(i(T),a(!0),T===n.correctAnswer){const p=l+1;u(p),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!0,streak:p}})}else w(l),h(!0),u(0),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!1,streak:0}})};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:T=>T.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"rq-question",children:n.question}),!m&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rq-options",children:n.options.map((T,p)=>{let d="option";return o===p&&(d+=" selected"),s&&(p===n.correctAnswer?d+=" correct":o===p&&(d+=" incorrect")),c.jsx("button",{className:d,onClick:()=>x(p),children:T},p)})}),s&&o===n.correctAnswer&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"rq-explanation",children:n.explanation}),(()=>{const T=Pl(n.id);return T?c.jsxs("p",{className:"rq-source",children:["📖 Covered in ",c.jsxs("strong",{children:["Module ",T.number,": ",T.title]})]}):null})(),c.jsxs("div",{className:"rq-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",l]}),c.jsx("button",{className:"btn btn-primary",onClick:g,children:"Next Random Question →"})]})]})]}),m&&c.jsxs("div",{className:"rq-streak-end",children:[y>0?c.jsxs("p",{children:["Incorrect. However, that was ",c.jsx("strong",{children:y})," correct answer",y!==1?"s":""," in a row. Congrats!"]}):c.jsx("p",{children:"Incorrect."}),c.jsx("p",{className:"rq-explanation",children:n.explanation}),(()=>{const T=Pl(n.id);return T?c.jsxs("p",{className:"rq-source",children:["📖 Review ",c.jsxs("strong",{children:["Module ",T.number,": ",T.title]})]}):null})(),c.jsx("button",{className:"btn btn-primary",onClick:g,children:"Continue →"})]})]})})}function Ol(){return jl[Math.floor(Math.random()*jl.length)]}function wm({onClose:e}){const{dispatch:t}=bt(),[n,r]=k.useState(Ol),[o,i]=k.useState(""),[s,a]=k.useState(null),[l,u]=k.useState(!1),[m,h]=k.useState(0),[y,w]=k.useState(!1),[g,x]=k.useState(0),T=k.useCallback(()=>{r(Ol()),i(""),a(null),u(!1),w(!1)},[]),p=()=>{if(s)return;const f=o.trim();if(f)if(f.replace(/\s+/g,"")===n.answer.trim().replace(/\s+/g,"")){a("correct");const v=m+1;h(v),t({type:"RECORD_QUICK_LINE",payload:{correct:!0,streak:v}})}else a("incorrect"),x(m),w(!0),h(0),t({type:"RECORD_QUICK_LINE",payload:{correct:!1,streak:0}})},d=f=>{f.key==="Enter"&&p()};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content ql-modal",onClick:f=>f.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"ql-prompt",children:n.prompt}),!y&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"ql-code-block",children:[n.codeBefore.map((f,v)=>c.jsx("div",{className:"ql-code-line",children:f||" "},"b"+v)),c.jsxs("div",{className:"ql-code-input-row",children:[c.jsx("span",{className:"ql-blank-marker",children:"→"}),c.jsx("input",{className:"ql-input"+(s==="correct"?" correct":s==="incorrect"?" incorrect":""),value:o,onChange:f=>i(f.target.value),onKeyDown:d,placeholder:"Type your one line here...",disabled:s!==null,autoFocus:!0})]}),n.codeAfter.map((f,v)=>c.jsx("div",{className:"ql-code-line",children:f||" "},"a"+v))]}),!s&&c.jsxs("div",{className:"ql-actions",children:[!l&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!0),children:"💡 Hint"}),c.jsx("button",{className:"btn btn-primary",onClick:p,children:"Check ✓"})]}),l&&!s&&c.jsxs("p",{className:"ql-hint",children:["💡 ",n.hint]}),s==="correct"&&c.jsxs("div",{className:"ql-result correct",children:[c.jsx("p",{children:"✅ Correct!"}),c.jsxs("div",{className:"ql-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",m]}),c.jsx("button",{className:"btn btn-primary",onClick:T,children:"Next Quick Line →"})]})]})]}),y&&c.jsxs("div",{className:"ql-streak-end",children:[c.jsx("p",{children:"❌ Not quite. The correct line was:"}),c.jsx("div",{className:"ql-answer-reveal",children:c.jsx("code",{children:n.answer})}),c.jsxs("p",{className:"ql-streak-msg",children:["That was ",c.jsx("strong",{children:g})," correct answer",g!==1?"s":""," in a row. Keep going!"]}),c.jsx("button",{className:"btn btn-primary",onClick:T,children:"Continue →"})]})]})})}function xm(){const{progress:e,dispatch:t}=bt(),n=Z.modules.reduce((w,g)=>w+g.topics.length,0),r=Object.values(e.topicProgress).filter(w=>w.completed).length,o=n>0?Math.round(r/n*100):0,i=Object.values(e.moduleTestResults).filter(w=>w.passed).length,s=e.randomQuestionStats??{attempts:0,correct:0,bestStreak:0},a=e.quickLineStats??{attempts:0,correct:0,bestStreak:0},l=s.attempts>0?Math.round(s.correct/s.attempts*100):0,u=a.attempts>0?Math.round(a.correct/a.attempts*100):0,m=e.levelTestResult,h=m?Math.round(m.score/m.total*100):0;function y(w){return w>=90?"Highly Proficient":w>=75?"Proficient":w>=55?"Advanced":w>=35?"Intermediate":"Beginner"}return c.jsxs("div",{className:"page dashboard",children:[c.jsx("h1",{children:Z.title}),c.jsx("p",{className:"subtitle",children:Z.description}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[o,"%"]}),c.jsx("div",{className:"stat-label",children:"Overall Progress"}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${o}%`}})})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[r,"/",n]}),c.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[i,"/",Z.modules.length]}),c.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),c.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),c.jsx("h2",{children:"Activity Stats"}),c.jsxs("div",{className:"stats-grid",children:[m&&c.jsxs("div",{className:"stat-card activity-card level-card",children:[c.jsx("div",{className:"activity-icon",children:"📋"}),c.jsx("div",{className:"stat-value",children:y(h)}),c.jsx("div",{className:"stat-label",children:"Level Test Result"}),c.jsxs("div",{className:"activity-detail",children:[m.score,"/",m.total," (",h,"%)"]})]}),c.jsxs("div",{className:"stat-card activity-card rq-card",children:[c.jsx("div",{className:"activity-icon",children:"🎲"}),c.jsx("div",{className:"stat-value",children:s.attempts>0?`${l}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Random Questions"}),s.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[s.correct,"/",s.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",s.bestStreak]})]}),s.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]}),c.jsxs("div",{className:"stat-card activity-card ql-card",children:[c.jsx("div",{className:"activity-icon",children:"⚡"}),c.jsx("div",{className:"stat-value",children:a.attempts>0?`${u}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Quick Lines"}),a.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[a.correct,"/",a.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",a.bestStreak]})]}),a.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]})]}),!e.levelTestResult&&c.jsxs("div",{className:"cta-card",children:[c.jsx("h2",{children:"Start Here"}),c.jsx("p",{children:"Take the level evaluation test to assess your current JavaScript & TypeScript knowledge."}),c.jsx(Ve,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),c.jsx("h2",{children:"Course Modules"}),c.jsx("div",{className:"modules-grid",children:Z.modules.map((w,g)=>{const x=w.topics.length,T=w.topics.filter(f=>{var v;return(v=e.topicProgress[f.id])==null?void 0:v.completed}).length,p=Math.round(T/x*100),d=e.moduleTestResults[w.id];return c.jsxs(Ve,{to:`/module/${w.id}`,className:"module-card",children:[c.jsx("div",{className:"module-number",children:g+1}),c.jsx("h3",{children:w.title}),c.jsx("p",{children:w.description}),c.jsxs("div",{className:"module-meta",children:[c.jsxs("span",{children:[x," topics"]}),c.jsxs("span",{children:[p,"% done"]}),d&&c.jsxs("span",{className:d.passed?"pass":"fail",children:["Test: ",d.score,"/",d.total]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})})]},w.id)})}),r>0&&c.jsx("div",{className:"reset-section",children:c.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function la({title:e,questions:t,onComplete:n,previousResult:r,renderResult:o}){const[i,s]=k.useState({}),[a,l]=k.useState(!1),[u,m]=k.useState(r??null);if(u&&!a){const g=c.jsx("div",{className:"result-banner",children:c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})});return c.jsxs("div",{className:"quiz completed-quiz",children:[c.jsx("h2",{children:e}),o?o(u):g,c.jsx("button",{className:"btn",onClick:()=>{m(null),s({})},children:"Retake Test"})]})}const h=(g,x)=>{a||s(T=>({...T,[g]:x}))},y=()=>{let g=0;for(const T of t)i[T.id]===T.correctAnswer&&g++;const x={score:g,total:t.length,passed:g>=Math.ceil(t.length*.7),answers:i};m(x),l(!0),n(x)},w=t.every(g=>i[g.id]!==void 0);return c.jsxs("div",{className:"quiz",children:[c.jsx("h2",{children:e}),c.jsxs("p",{className:"quiz-progress",children:[Object.keys(i).length," of ",t.length," answered"]}),c.jsx("div",{className:"questions",children:t.map((g,x)=>c.jsxs("div",{className:`question ${a?"revealed":""}`,children:[c.jsxs("h3",{children:[x+1,". ",g.question]}),c.jsx("div",{className:"options",children:g.options.map((T,p)=>{let d="option";return i[g.id]===p&&(d+=" selected"),a&&(p===g.correctAnswer?d+=" correct":i[g.id]===p&&(d+=" incorrect")),c.jsx("button",{className:d,onClick:()=>h(g.id,p),disabled:a,children:T},p)})}),a&&c.jsx("p",{className:"explanation",children:g.explanation})]},g.id))}),!a&&c.jsx("button",{className:"btn btn-primary submit-btn",onClick:y,disabled:!w,children:"Submit Answers"}),a&&u&&(o?o(u):c.jsx("div",{className:"result-banner",children:c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})}))]})}function km(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const Tm={Beginner:"You're just getting started with JS/TS. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 3–7 to strengthen your understanding of closures, prototypes, and async patterns.",Advanced:"Solid foundation! Check Modules 8–12 covering advanced ES6+, iterators, Proxy/Reflect, and module systems.",Proficient:"You have strong skills. Review Modules 13–18 for TypeScript mastery and advanced patterns, then take the final test.","Highly Proficient":"Excellent knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Il={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function Ul({result:e}){const t=Math.round(e.score/e.total*100),n=km(t),r=Il[n];return c.jsxs("div",{className:"level-result",children:[c.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),c.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),c.jsx("p",{className:"level-description",children:Tm[n]}),c.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(o=>c.jsx("div",{className:`level-dot ${o===n?"active":""}`,style:o===n?{background:Il[o]}:{},children:c.jsx("span",{className:"level-dot-label",children:o})},o))})]})}function bm(){var s;const{progress:e,dispatch:t}=bt(),[n,r]=k.useState(()=>Al()),o=a=>{t({type:"SET_LEVEL_TEST",payload:a})},i=()=>{t({type:"RESET_LEVEL_TEST"}),r(Al())};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Level Evaluation Test"}),c.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your JavaScript & TypeScript proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&c.jsxs(c.Fragment,{children:[c.jsx(Ul,{result:e.levelTestResult}),c.jsx("div",{className:"retake-section",children:c.jsx("button",{className:"btn",onClick:i,children:"Retake with New Questions"})})]}),!e.levelTestResult&&c.jsx(la,{title:"JavaScript & TypeScript Knowledge Assessment",questions:n,onComplete:o,renderResult:a=>c.jsx(Ul,{result:a})},(s=n[0])==null?void 0:s.id)]})}function Sm(){const{moduleId:e}=rd(),t=aa(),{progress:n,dispatch:r}=bt(),o=Z.modules.findIndex(u=>u.id===e),i=Z.modules[o];if(!i)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=u=>{r({type:"SET_MODULE_TEST",payload:{moduleId:i.id,result:u}})},a=Z.modules[o+1],l=Z.modules[o-1];return c.jsxs("div",{className:"page module-page",children:[c.jsxs("div",{className:"module-header",children:[c.jsxs("span",{className:"module-badge",children:["Module ",o+1]}),c.jsx("h1",{children:i.title}),c.jsx("p",{className:"subtitle",children:i.description})]}),c.jsxs("div",{className:"topics-list",children:[c.jsx("h2",{children:"Topics"}),i.topics.map((u,m)=>{const h=n.topicProgress[u.id];return c.jsxs(Ve,{to:`/module/${i.id}/topic/${u.id}`,className:`topic-card ${h!=null&&h.completed?"completed":""}`,children:[c.jsx("span",{className:"topic-number",children:m+1}),c.jsx("span",{className:"topic-title",children:u.title}),(h==null?void 0:h.completed)&&c.jsx("span",{className:"check",children:"✓"})]},u.id)})]}),c.jsxs("div",{className:"module-test-section",children:[c.jsx("h2",{children:"Module Test"}),i.topics.every(u=>{var m;return(m=n.topicProgress[u.id])==null?void 0:m.completed})?c.jsx(la,{title:`${i.title} — Test`,questions:i.test,onComplete:s,previousResult:n.moduleTestResults[i.id]}):c.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),c.jsxs("div",{className:"module-navigation",children:[l&&c.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),a&&c.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${a.id}`),children:[a.title," →"]})]})]})}function Em({content:e}){const t=Cm(e);return c.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function Cm(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,o)=>{const i=Ml(o.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${i}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${Ml(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,o,i)=>{const s=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),a=i.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(m=>m.trim()).map(m=>`<td>${m.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${s}</tr></thead><tbody>${a}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,o=>o==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function Ml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Am({code:e,language:t="tsx"}){const[n,r]=k.useState(!1),o=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return c.jsxs("div",{className:"code-block",children:[c.jsxs("div",{className:"code-header",children:[c.jsx("span",{className:"code-lang",children:t}),c.jsx("button",{className:"copy-btn",onClick:o,children:n?"✓ Copied":"Copy"})]}),c.jsx("pre",{children:c.jsx("code",{children:e})})]})}function jm({task:e,onComplete:t,completed:n}){const[r,o]=k.useState(!1),[i,s]=k.useState(!1),[a,l]=k.useState(e.starterCode),[u,m]=k.useState(!!n),h=()=>{m(!0),t()};return c.jsxs("div",{className:"task-view",children:[c.jsx("h3",{children:"📝 Practice Task"}),c.jsx("p",{className:"task-description",children:e.description}),c.jsxs("div",{className:"task-code",children:[c.jsx("h4",{children:"Your Code"}),c.jsx("textarea",{className:"code-editor",value:a,onChange:y=>l(y.target.value),rows:a.split(`
`).length+2,spellCheck:!1})]}),c.jsxs("div",{className:"task-actions",children:[c.jsx("button",{className:"btn",onClick:()=>o(!r),children:r?"Hide Hints":"Show Hints"}),c.jsx("button",{className:"btn",onClick:()=>s(!i),children:i?"Hide Solution":"Show Solution"}),!u&&c.jsx("button",{className:"btn btn-primary",onClick:h,children:"Mark as Completed ✓"}),u&&c.jsx("span",{className:"completed-badge",children:"✓ Completed"})]}),r&&c.jsxs("div",{className:"hints",children:[c.jsx("h4",{children:"Hints"}),c.jsx("ul",{children:e.hints.map((y,w)=>c.jsx("li",{children:y},w))})]}),i&&c.jsxs("div",{className:"solution",children:[c.jsx("h4",{children:"Solution"}),c.jsx(Am,{code:e.solution})]})]})}function Pm(){const{moduleId:e,topicId:t}=rd(),n=aa(),{progress:r,dispatch:o}=bt(),i=Z.modules.find(y=>y.id===e);if(!i)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=i.topics.findIndex(y=>y.id===t),a=i.topics[s];if(!a)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Topic Not Found"}),c.jsx(Ve,{to:`/module/${i.id}`,className:"btn",children:"Back to Module"})]});const l=()=>{o({type:"COMPLETE_TOPIC",payload:{topicId:a.id}})},u=r.topicProgress[a.id],m=i.topics[s+1],h=i.topics[s-1];return c.jsxs("div",{className:"page topic-page",children:[c.jsxs("div",{className:"breadcrumb",children:[c.jsx(Ve,{to:"/",children:"Dashboard"}),c.jsx("span",{children:" / "}),c.jsx(Ve,{to:`/module/${i.id}`,children:i.title}),c.jsx("span",{children:" / "}),c.jsx("span",{children:a.title})]}),c.jsx("h1",{children:a.title}),c.jsx("div",{className:"topic-content",children:c.jsx(Em,{content:a.explanation})}),c.jsx("hr",{}),c.jsx(jm,{task:a.task,onComplete:l,completed:!!(u!=null&&u.completed)},a.id),c.jsxs("div",{className:"topic-navigation",children:[h&&c.jsxs("button",{className:"btn",onClick:()=>n(`/module/${i.id}/topic/${h.id}`),children:["← ",h.title]}),m?c.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${i.id}/topic/${m.id}`),children:[m.title," →"]}):c.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${i.id}`),children:"Back to Module →"})]})]})}function Nm(){const{progress:e,dispatch:t}=bt(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"🏆 Final Test"}),c.jsx("p",{className:"subtitle",children:"This comprehensive test covers all modules. You need 70% to pass. Take your time!"}),c.jsx(la,{title:"JavaScript & TypeScript Mastery — Final Assessment",questions:Z.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function Rm(){const[e,t]=k.useState(!1),[n,r]=k.useState(!1),[o,i]=k.useState(!1),s=k.useCallback(()=>i(!1),[]);return c.jsxs("div",{className:"app-layout",children:[c.jsx("button",{className:"mobile-menu-btn",onClick:()=>i(!0),"aria-label":"Open menu",children:"☰"}),o&&c.jsx("div",{className:"sidebar-overlay",onClick:s}),c.jsx(mm,{onRandomQuestion:()=>{t(!0),s()},onQuickLine:()=>{r(!0),s()},isOpen:o,onClose:s}),e&&c.jsx(vm,{onClose:()=>t(!1)}),n&&c.jsx(wm,{onClose:()=>r(!1)}),c.jsx("main",{className:"main-content",children:c.jsxs(Rh,{children:[c.jsx(jt,{path:"/",element:c.jsx(xm,{})}),c.jsx(jt,{path:"/level-test",element:c.jsx(bm,{})}),c.jsx(jt,{path:"/module/:moduleId",element:c.jsx(Sm,{})}),c.jsx(jt,{path:"/module/:moduleId/topic/:topicId",element:c.jsx(Pm,{})}),c.jsx(jt,{path:"/final-test",element:c.jsx(Nm,{})}),c.jsx(jt,{path:"*",element:c.jsx("div",{className:"page",children:c.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})}function Om(){return c.jsx(Lh,{children:c.jsx(Kh,{children:c.jsx(Rm,{})})})}yi.createRoot(document.getElementById("root")).render(c.jsx(Vl.StrictMode,{children:c.jsx(Om,{})}));
