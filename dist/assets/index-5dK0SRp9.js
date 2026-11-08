(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var py={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),v0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),kp=Symbol.iterator;function P0(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gy=Object.assign,yy={};function os(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vy(){}vy.prototype=os.prototype;function ed(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}var td=ed.prototype=new vy;td.constructor=ed;gy(td,os.prototype);td.isPureReactComponent=!0;var Pp=Array.isArray,_y=Object.prototype.hasOwnProperty,nd={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function wy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_y.call(e,r)&&!Ey.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:nd.current}}function R0(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case v0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Pp(i)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),Ga(i,e,n,"",function(h){return h})):i!=null&&(rd(i)&&(i=R0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=Ga(s,e,n,u,i)}else if(u=P0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function N0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},qa={transition:null},D0={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:nd};function Ty(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=os;ie.Fragment=_0;ie.Profiler=w0;ie.PureComponent=ed;ie.StrictMode=E0;ie.Suspense=A0;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;ie.act=Ty;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_y.call(e,u)&&!Ey.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:I0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T0,_context:t},t.Consumer=t};ie.createElement=wy;ie.createFactory=function(t){var e=wy.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:S0,render:t}};ie.isValidElement=rd;ie.lazy=function(t){return{$$typeof:k0,_payload:{_status:-1,_result:t},_init:N0}};ie.memo=function(t,e){return{$$typeof:C0,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ie.unstable_act=Ty;ie.useCallback=function(t,e){return pt.current.useCallback(t,e)};ie.useContext=function(t){return pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return pt.current.useEffect(t,e)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ie.useRef=function(t){return pt.current.useRef(t)};ie.useState=function(t){return pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.3.1";py.exports=ie;var ae=py.exports;const S=y0(ae);var Lc={},Iy={exports:{}},Nt={},Sy={exports:{}},Ay={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var K=B.length;B.push(X);e:for(;0<K;){var ge=K-1>>>1,de=B[ge];if(0<i(de,X))B[ge]=X,B[K]=de,K=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],K=B.pop();if(K!==X){B[0]=K;e:for(var ge=0,de=B.length,Te=de>>>1;ge<Te;){var Ht=2*(ge+1)-1,ct=B[Ht],Gt=Ht+1,gt=B[Gt];if(0>i(ct,K))Gt<de&&0>i(gt,ct)?(B[ge]=gt,B[Gt]=K,ge=Gt):(B[ge]=ct,B[Ht]=K,ge=Ht);else if(Gt<de&&0>i(gt,K))B[ge]=gt,B[Gt]=K,ge=Gt;else break e}}return X}function i(B,X){var K=B.sortIndex-X.sortIndex;return K!==0?K:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,k=!1,R=!1,D=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=B)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function b(B){if(D=!1,A(B),!R)if(n(u)!==null)R=!0,sn(j);else{var X=n(h);X!==null&&$t(b,X.startTime-B)}}function j(B,X){R=!1,D&&(D=!1,I(g),g=-1),k=!0;var K=y;try{for(A(X),m=n(u);m!==null&&(!(m.expirationTime>X)||B&&!C());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var de=ge(m.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?m.callback=de:m===n(u)&&r(u),A(X)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var Ht=n(h);Ht!==null&&$t(b,Ht.startTime-X),Te=!1}return Te}finally{m=null,y=K,k=!1}}var U=!1,E=null,g=-1,_=5,w=-1;function C(){return!(t.unstable_now()-w<_)}function P(){if(E!==null){var B=t.unstable_now();w=B;var X=!0;try{X=E(!0,B)}finally{X?T():(U=!1,E=null)}}else U=!1}var T;if(typeof v=="function")T=function(){v(P)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,rn=Ge.port2;Ge.port1.onmessage=P,T=function(){rn.postMessage(null)}}else T=function(){O(P,0)};function sn(B){E=B,U||(U=!0,T())}function $t(B,X){g=O(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,sn(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var K=y;y=X;try{return B()}finally{y=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=y;y=B;try{return X()}finally{y=K}},t.unstable_scheduleCallback=function(B,X,K){var ge=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ge+K:ge):K=ge,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=K+de,B={id:f++,callback:X,priorityLevel:B,startTime:K,expirationTime:de,sortIndex:-1},K>ge?(B.sortIndex=K,e(h,B),n(u)===null&&B===n(h)&&(D?(I(g),g=-1):D=!0,$t(b,K-ge))):(B.sortIndex=de,e(u,B),R||k||(R=!0,sn(j))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var X=y;return function(){var K=y;y=X;try{return B.apply(this,arguments)}finally{y=K}}}})(Ay);Sy.exports=Ay;var b0=Sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0=ae,Rt=b0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cy=new Set,mo={};function ri(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(mo[t]=e,t=0;t<e.length;t++)Cy.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},Np={};function M0(t){return Fc.call(Np,t)?!0:Fc.call(xp,t)?!1:O0.test(t)?Np[t]=!0:(xp[t]=!0,!1)}function L0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F0(t,e,n,r){if(e===null||typeof e>"u"||L0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(id,sd);Ye[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(id,sd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(id,sd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function od(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(F0(e,n,i,r)&&(n=null),r||i===null?M0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),Py=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,tc;function Gs(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function U0(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ii:return"Fragment";case Ti:return"Portal";case Uc:return"Profiler";case ad:return"StrictMode";case zc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Py:return(t.displayName||"Context")+".Consumer";case ky:return(t._context.displayName||"Context")+".Provider";case ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ud:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j0(t){var e=xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=j0(t))}function Ny(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dy(t,e){e=e.checked,e!=null&&od(t,"checked",e,!1)}function Hc(t,e){Dy(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gc(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gc(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(qs(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function by(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Oy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B0=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){B0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function My(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Ly(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=My(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $0=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if($0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,Mi=null,Li=null;function Lp(t){if(t=$o(t)){if(typeof Yc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=uu(e),Yc(t.stateNode,t.type,e))}}function Fy(t){Mi?Li?Li.push(t):Li=[t]:Mi=t}function Uy(){if(Mi){var t=Mi,e=Li;if(Li=Mi=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function zy(t,e){return t(e)}function jy(){}var ic=!1;function By(t,e,n){if(ic)return t(e,n);ic=!0;try{return zy(t,e,n)}finally{ic=!1,(Mi!==null||Li!==null)&&(jy(),Uy())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Jc=!1;if(Dn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Jc=!1}function H0(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var eo=!1,pl=null,ml=!1,Zc=null,G0={onError:function(t){eo=!0,pl=t}};function q0(t,e,n,r,i,s,o,l,u){eo=!1,pl=null,H0.apply(G0,arguments)}function W0(t,e,n,r,i,s,o,l,u){if(q0.apply(this,arguments),eo){if(eo){var h=pl;eo=!1,pl=null}else throw Error(L(198));ml||(ml=!0,Zc=h)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(ii(t)!==t)throw Error(L(188))}function K0(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fp(i),t;if(s===r)return Fp(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Hy(t){return t=K0(t),t!==null?Gy(t):null}function Gy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gy(t);if(e!==null)return e;t=t.sibling}return null}var qy=Rt.unstable_scheduleCallback,Up=Rt.unstable_cancelCallback,Q0=Rt.unstable_shouldYield,X0=Rt.unstable_requestPaint,De=Rt.unstable_now,Y0=Rt.unstable_getCurrentPriorityLevel,hd=Rt.unstable_ImmediatePriority,Wy=Rt.unstable_UserBlockingPriority,gl=Rt.unstable_NormalPriority,J0=Rt.unstable_LowPriority,Ky=Rt.unstable_IdlePriority,su=null,cn=null;function Z0(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(t){return t>>>=0,t===0?32:31-(eT(t)/tT|0)|0}var Sa=64,Aa=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function rT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=rT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qy(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function sT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Xy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yy,fd,Jy,Zy,ev,th=!1,Ca=[],or=null,ar=null,lr=null,vo=new Map,_o=new Map,Yn=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$o(e),e!==null&&fd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aT(t,e,n,r,i){switch(e){case"focusin":return or=Us(or,t,e,n,r,i),!0;case"dragenter":return ar=Us(ar,t,e,n,r,i),!0;case"mouseover":return lr=Us(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,Us(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,Us(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function tv(t){var e=Ur(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=$y(n),e!==null){t.blockedOn=e,ev(t.priority,function(){Jy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xc=r,n.target.dispatchEvent(r),Xc=null}else return e=$o(n),e!==null&&fd(e),t.blockedOn=n,!1;e.shift()}return!0}function jp(t,e,n){Wa(t)&&n.delete(e)}function lT(){th=!1,or!==null&&Wa(or)&&(or=null),ar!==null&&Wa(ar)&&(ar=null),lr!==null&&Wa(lr)&&(lr=null),vo.forEach(jp),_o.forEach(jp)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,lT)))}function Eo(t){function e(i){return zs(i,t)}if(0<Ca.length){zs(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&zs(or,t),ar!==null&&zs(ar,t),lr!==null&&zs(lr,t),vo.forEach(e),_o.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)tv(n),n.blockedOn===null&&Yn.shift()}var Fi=Bn.ReactCurrentBatchConfig,vl=!0;function uT(t,e,n,r){var i=fe,s=Fi.transition;Fi.transition=null;try{fe=1,pd(t,e,n,r)}finally{fe=i,Fi.transition=s}}function cT(t,e,n,r){var i=fe,s=Fi.transition;Fi.transition=null;try{fe=4,pd(t,e,n,r)}finally{fe=i,Fi.transition=s}}function pd(t,e,n,r){if(vl){var i=nh(t,e,n,r);if(i===null)mc(t,e,r,_l,n),zp(t,r);else if(aT(i,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<oT.indexOf(t)){for(;i!==null;){var s=$o(i);if(s!==null&&Yy(s),s=nh(t,e,n,r),s===null&&mc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var _l=null;function nh(t,e,n,r){if(_l=null,t=cd(r),t=Ur(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function nv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y0()){case hd:return 1;case Wy:return 4;case gl:case J0:return 16;case Ky:return 536870912;default:return 16}default:return 16}}var rr=null,md=null,Ka=null;function rv(){if(Ka)return Ka;var t,e=md,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ka=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Bp(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ka:Bp,this.isPropagationStopped=Bp,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=Dt(as),Bo=Ce({},as,{view:0,detail:0}),hT=Dt(Bo),oc,ac,js,ou=Ce({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(oc=t.screenX-js.screenX,ac=t.screenY-js.screenY):ac=oc=0,js=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),$p=Dt(ou),dT=Ce({},ou,{dataTransfer:0}),fT=Dt(dT),pT=Ce({},Bo,{relatedTarget:0}),lc=Dt(pT),mT=Ce({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=Dt(mT),yT=Ce({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vT=Dt(yT),_T=Ce({},as,{data:0}),Hp=Dt(_T),ET={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TT[t])?!!e[t]:!1}function yd(){return IT}var ST=Ce({},Bo,{key:function(t){if(t.key){var e=ET[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AT=Dt(ST),CT=Ce({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Dt(CT),kT=Ce({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),PT=Dt(kT),RT=Ce({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=Dt(RT),NT=Ce({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=Dt(NT),bT=[9,13,27,32],vd=Dn&&"CompositionEvent"in window,to=null;Dn&&"documentMode"in document&&(to=document.documentMode);var VT=Dn&&"TextEvent"in window&&!to,iv=Dn&&(!vd||to&&8<to&&11>=to),qp=" ",Wp=!1;function sv(t,e){switch(t){case"keyup":return bT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function OT(t,e){switch(t){case"compositionend":return ov(e);case"keypress":return e.which!==32?null:(Wp=!0,qp);case"textInput":return t=e.data,t===qp&&Wp?null:t;default:return null}}function MT(t,e){if(Si)return t==="compositionend"||!vd&&sv(t,e)?(t=rv(),Ka=md=rr=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var LT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LT[t.type]:e==="textarea"}function av(t,e,n,r){Fy(r),e=El(e,"onChange"),0<e.length&&(n=new gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,wo=null;function FT(t){vv(t,0)}function au(t){var e=ki(t);if(Ny(e))return t}function UT(t,e){if(t==="change")return e}var lv=!1;if(Dn){var uc;if(Dn){var cc="oninput"in document;if(!cc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),cc=typeof Qp.oninput=="function"}uc=cc}else uc=!1;lv=uc&&(!document.documentMode||9<document.documentMode)}function Xp(){no&&(no.detachEvent("onpropertychange",uv),wo=no=null)}function uv(t){if(t.propertyName==="value"&&au(wo)){var e=[];av(e,wo,t,cd(t)),By(FT,e)}}function zT(t,e,n){t==="focusin"?(Xp(),no=e,wo=n,no.attachEvent("onpropertychange",uv)):t==="focusout"&&Xp()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(wo)}function BT(t,e){if(t==="click")return au(e)}function $T(t,e){if(t==="input"||t==="change")return au(e)}function HT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:HT;function To(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=Yp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yp(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GT(t){var e=hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(r!==null&&_d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jp(n,s);var o=Jp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qT=Dn&&"documentMode"in document&&11>=document.documentMode,Ai=null,rh=null,ro=null,ih=!1;function Zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||Ai==null||Ai!==fl(r)||(r=Ai,"selectionStart"in r&&_d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&To(ro,r)||(ro=r,r=El(rh,"onSelect"),0<r.length&&(e=new gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},hc={},dv={};Dn&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function lu(t){if(hc[t])return hc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dv)return hc[t]=e[n];return t}var fv=lu("animationend"),pv=lu("animationiteration"),mv=lu("animationstart"),gv=lu("transitionend"),yv=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){yv.set(t,e),ri(e,[t])}for(var dc=0;dc<em.length;dc++){var fc=em[dc],WT=fc.toLowerCase(),KT=fc[0].toUpperCase()+fc.slice(1);Pr(WT,"on"+KT)}Pr(fv,"onAnimationEnd");Pr(pv,"onAnimationIteration");Pr(mv,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(gv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,W0(r,e,void 0,t),t.currentTarget=null}function vv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;tm(i,l,h),s=u}}}if(ml)throw t=Zc,ml=!1,Zc=null,t}function ve(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[Ra]){t[Ra]=!0,Cy.forEach(function(n){n!=="selectionchange"&&(QT.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,pc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(nv(e)){case 1:var i=uT;break;case 4:i=cT;break;default:i=pd}n=i.bind(null,e,n,t),i=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}By(function(){var h=s,f=cd(n),m=[];e:{var y=yv.get(t);if(y!==void 0){var k=gd,R=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":k=AT;break;case"focusin":R="focus",k=lc;break;case"focusout":R="blur",k=lc;break;case"beforeblur":case"afterblur":k=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=fT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=PT;break;case fv:case pv:case mv:k=gT;break;case gv:k=xT;break;case"scroll":k=hT;break;case"wheel":k=DT;break;case"copy":case"cut":case"paste":k=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Gp}var D=(e&4)!==0,O=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var v=h,A;v!==null;){A=v;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,I!==null&&(b=yo(v,I),b!=null&&D.push(So(v,b,A)))),O)break;v=v.return}0<D.length&&(y=new k(y,R,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==Xc&&(R=n.relatedTarget||n.fromElement)&&(Ur(R)||R[bn]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=h,R=R?Ur(R):null,R!==null&&(O=ii(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=h),k!==R)){if(D=$p,b="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=Gp,b="onPointerLeave",I="onPointerEnter",v="pointer"),O=k==null?y:ki(k),A=R==null?y:ki(R),y=new D(b,v+"leave",k,n,f),y.target=O,y.relatedTarget=A,b=null,Ur(f)===h&&(D=new D(I,v+"enter",R,n,f),D.target=A,D.relatedTarget=O,b=D),O=b,k&&R)t:{for(D=k,I=R,v=0,A=D;A;A=yi(A))v++;for(A=0,b=I;b;b=yi(b))A++;for(;0<v-A;)D=yi(D),v--;for(;0<A-v;)I=yi(I),A--;for(;v--;){if(D===I||I!==null&&D===I.alternate)break t;D=yi(D),I=yi(I)}D=null}else D=null;k!==null&&nm(m,y,k,D,!1),R!==null&&O!==null&&nm(m,O,R,D,!0)}}e:{if(y=h?ki(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var j=UT;else if(Kp(y))if(lv)j=$T;else{j=jT;var U=zT}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=BT);if(j&&(j=j(t,h))){av(m,j,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Gc(y,"number",y.value)}switch(U=h?ki(h):window,t){case"focusin":(Kp(U)||U.contentEditable==="true")&&(Ai=U,rh=h,ro=null);break;case"focusout":ro=rh=Ai=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,Zp(m,n,f);break;case"selectionchange":if(qT)break;case"keydown":case"keyup":Zp(m,n,f)}var E;if(vd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Si?sv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(iv&&n.locale!=="ko"&&(Si||g!=="onCompositionStart"?g==="onCompositionEnd"&&Si&&(E=rv()):(rr=f,md="value"in rr?rr.value:rr.textContent,Si=!0)),U=El(h,g),0<U.length&&(g=new Hp(g,t,null,n,f),m.push({event:g,listeners:U}),E?g.data=E:(E=ov(n),E!==null&&(g.data=E)))),(E=VT?OT(t,n):MT(t,n))&&(h=El(h,"onBeforeInput"),0<h.length&&(f=new Hp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}vv(m,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yo(t,n),s!=null&&r.unshift(So(t,s,i)),s=yo(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=yo(n,s),u!=null&&o.unshift(So(n,u,l))):i||(u=yo(n,s),u!=null&&o.push(So(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XT=/\r\n?/g,YT=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(XT,`
`).replace(YT,"")}function xa(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(L(425))}function wl(){}var sh=null,oh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,JT=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,ZT=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(e1)}:lh;function e1(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Eo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),un="__reactFiber$"+ls,Ao="__reactProps$"+ls,bn="__reactContainer$"+ls,uh="__reactEvents$"+ls,t1="__reactListeners$"+ls,n1="__reactHandles$"+ls;function Ur(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[un])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function $o(t){return t=t[un]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function uu(t){return t[Ao]||null}var ch=[],Pi=-1;function Rr(t){return{current:t}}function we(t){0>Pi||(t.current=ch[Pi],ch[Pi]=null,Pi--)}function me(t,e){Pi++,ch[Pi]=t.current,t.current=e}var Er={},lt=Rr(Er),Et=Rr(!1),Wr=Er;function Ki(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Tl(){we(Et),we(lt)}function om(t,e,n){if(lt.current!==Er)throw Error(L(168));me(lt,e),me(Et,n)}function Ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,z0(t)||"Unknown",i));return Ce({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Wr=lt.current,me(lt,t),me(Et,Et.current),!0}function am(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Ev(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,we(Et),we(lt),me(lt,t)):we(Et),me(Et,n)}var Sn=null,cu=!1,yc=!1;function wv(t){Sn===null?Sn=[t]:Sn.push(t)}function r1(t){cu=!0,wv(t)}function xr(){if(!yc&&Sn!==null){yc=!0;var t=0,e=fe;try{var n=Sn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,cu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),qy(hd,xr),i}finally{fe=e,yc=!1}}return null}var Ri=[],xi=0,Sl=null,Al=0,bt=[],Vt=0,Kr=null,An=1,Cn="";function Mr(t,e){Ri[xi++]=Al,Ri[xi++]=Sl,Sl=t,Al=e}function Tv(t,e,n){bt[Vt++]=An,bt[Vt++]=Cn,bt[Vt++]=Kr,Kr=t;var r=An;t=Cn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-en(e)+i|n<<i|r,Cn=s+t}else An=1<<s|n<<i|r,Cn=t}function Ed(t){t.return!==null&&(Mr(t,1),Tv(t,1,0))}function wd(t){for(;t===Sl;)Sl=Ri[--xi],Ri[xi]=null,Al=Ri[--xi],Ri[xi]=null;for(;t===Kr;)Kr=bt[--Vt],bt[Vt]=null,Cn=bt[--Vt],bt[Vt]=null,An=bt[--Vt],bt[Vt]=null}var Pt=null,kt=null,Ie=!1,Yt=null;function Iv(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,kt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:An,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,kt=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(Ie){var e=kt;if(e){var n=e;if(!lm(t,e)){if(hh(t))throw Error(L(418));e=ur(n.nextSibling);var r=Pt;e&&lm(t,e)?Iv(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Pt=t)}}else{if(hh(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ie=!1,Pt=t}}}function um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Na(t){if(t!==Pt)return!1;if(!Ie)return um(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=kt)){if(hh(t))throw Sv(),Error(L(418));for(;e;)Iv(t,e),e=ur(e.nextSibling)}if(um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Pt?ur(t.stateNode.nextSibling):null;return!0}function Sv(){for(var t=kt;t;)t=ur(t.nextSibling)}function Qi(){kt=Pt=null,Ie=!1}function Td(t){Yt===null?Yt=[t]:Yt.push(t)}var i1=Bn.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cm(t){var e=t._init;return e(t._payload)}function Av(t){function e(I,v){if(t){var A=I.deletions;A===null?(I.deletions=[v],I.flags|=16):A.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=fr(I,v),I.index=0,I.sibling=null,I}function s(I,v,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<v?(I.flags|=2,v):A):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,A,b){return v===null||v.tag!==6?(v=Sc(A,I.mode,b),v.return=I,v):(v=i(v,A),v.return=I,v)}function u(I,v,A,b){var j=A.type;return j===Ii?f(I,v,A.props.children,b,A.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qn&&cm(j)===v.type)?(b=i(v,A.props),b.ref=Bs(I,v,A),b.return=I,b):(b=nl(A.type,A.key,A.props,null,I.mode,b),b.ref=Bs(I,v,A),b.return=I,b)}function h(I,v,A,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==A.containerInfo||v.stateNode.implementation!==A.implementation?(v=Ac(A,I.mode,b),v.return=I,v):(v=i(v,A.children||[]),v.return=I,v)}function f(I,v,A,b,j){return v===null||v.tag!==7?(v=Hr(A,I.mode,b,j),v.return=I,v):(v=i(v,A),v.return=I,v)}function m(I,v,A){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sc(""+v,I.mode,A),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return A=nl(v.type,v.key,v.props,null,I.mode,A),A.ref=Bs(I,null,v),A.return=I,A;case Ti:return v=Ac(v,I.mode,A),v.return=I,v;case Qn:var b=v._init;return m(I,b(v._payload),A)}if(qs(v)||Ls(v))return v=Hr(v,I.mode,A,null),v.return=I,v;Da(I,v)}return null}function y(I,v,A,b){var j=v!==null?v.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(I,v,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case wa:return A.key===j?u(I,v,A,b):null;case Ti:return A.key===j?h(I,v,A,b):null;case Qn:return j=A._init,y(I,v,j(A._payload),b)}if(qs(A)||Ls(A))return j!==null?null:f(I,v,A,b,null);Da(I,A)}return null}function k(I,v,A,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(A)||null,l(v,I,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wa:return I=I.get(b.key===null?A:b.key)||null,u(v,I,b,j);case Ti:return I=I.get(b.key===null?A:b.key)||null,h(v,I,b,j);case Qn:var U=b._init;return k(I,v,A,U(b._payload),j)}if(qs(b)||Ls(b))return I=I.get(A)||null,f(v,I,b,j,null);Da(v,b)}return null}function R(I,v,A,b){for(var j=null,U=null,E=v,g=v=0,_=null;E!==null&&g<A.length;g++){E.index>g?(_=E,E=null):_=E.sibling;var w=y(I,E,A[g],b);if(w===null){E===null&&(E=_);break}t&&E&&w.alternate===null&&e(I,E),v=s(w,v,g),U===null?j=w:U.sibling=w,U=w,E=_}if(g===A.length)return n(I,E),Ie&&Mr(I,g),j;if(E===null){for(;g<A.length;g++)E=m(I,A[g],b),E!==null&&(v=s(E,v,g),U===null?j=E:U.sibling=E,U=E);return Ie&&Mr(I,g),j}for(E=r(I,E);g<A.length;g++)_=k(E,I,g,A[g],b),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?g:_.key),v=s(_,v,g),U===null?j=_:U.sibling=_,U=_);return t&&E.forEach(function(C){return e(I,C)}),Ie&&Mr(I,g),j}function D(I,v,A,b){var j=Ls(A);if(typeof j!="function")throw Error(L(150));if(A=j.call(A),A==null)throw Error(L(151));for(var U=j=null,E=v,g=v=0,_=null,w=A.next();E!==null&&!w.done;g++,w=A.next()){E.index>g?(_=E,E=null):_=E.sibling;var C=y(I,E,w.value,b);if(C===null){E===null&&(E=_);break}t&&E&&C.alternate===null&&e(I,E),v=s(C,v,g),U===null?j=C:U.sibling=C,U=C,E=_}if(w.done)return n(I,E),Ie&&Mr(I,g),j;if(E===null){for(;!w.done;g++,w=A.next())w=m(I,w.value,b),w!==null&&(v=s(w,v,g),U===null?j=w:U.sibling=w,U=w);return Ie&&Mr(I,g),j}for(E=r(I,E);!w.done;g++,w=A.next())w=k(E,I,g,w.value,b),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),v=s(w,v,g),U===null?j=w:U.sibling=w,U=w);return t&&E.forEach(function(P){return e(I,P)}),Ie&&Mr(I,g),j}function O(I,v,A,b){if(typeof A=="object"&&A!==null&&A.type===Ii&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case wa:e:{for(var j=A.key,U=v;U!==null;){if(U.key===j){if(j=A.type,j===Ii){if(U.tag===7){n(I,U.sibling),v=i(U,A.props.children),v.return=I,I=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qn&&cm(j)===U.type){n(I,U.sibling),v=i(U,A.props),v.ref=Bs(I,U,A),v.return=I,I=v;break e}n(I,U);break}else e(I,U);U=U.sibling}A.type===Ii?(v=Hr(A.props.children,I.mode,b,A.key),v.return=I,I=v):(b=nl(A.type,A.key,A.props,null,I.mode,b),b.ref=Bs(I,v,A),b.return=I,I=b)}return o(I);case Ti:e:{for(U=A.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===A.containerInfo&&v.stateNode.implementation===A.implementation){n(I,v.sibling),v=i(v,A.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Ac(A,I.mode,b),v.return=I,I=v}return o(I);case Qn:return U=A._init,O(I,v,U(A._payload),b)}if(qs(A))return R(I,v,A,b);if(Ls(A))return D(I,v,A,b);Da(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,A),v.return=I,I=v):(n(I,v),v=Sc(A,I.mode,b),v.return=I,I=v),o(I)):n(I,v)}return O}var Xi=Av(!0),Cv=Av(!1),Cl=Rr(null),kl=null,Ni=null,Id=null;function Sd(){Id=Ni=kl=null}function Ad(t){var e=Cl.current;we(Cl),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){kl=t,Id=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(kl===null)throw Error(L(308));Ni=t,kl.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var zr=null;function Cd(t){zr===null?zr=[t]:zr.push(t)}function kv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}function hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,D=l;switch(y=e,k=n,D.tag){case 1:if(R=D.payload,typeof R=="function"){m=R.call(k,m,y);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,y=typeof R=="function"?R.call(k,m,y):R,y==null)break e;m=Ce({},m,y);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=m):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=m}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Ho={},hn=Rr(Ho),Co=Rr(Ho),ko=Rr(Ho);function jr(t){if(t===Ho)throw Error(L(174));return t}function Pd(t,e){switch(me(ko,e),me(Co,t),me(hn,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wc(e,t)}we(hn),me(hn,e)}function Yi(){we(hn),we(Co),we(ko)}function Rv(t){jr(ko.current);var e=jr(hn.current),n=Wc(e,t.type);e!==n&&(me(Co,t),me(hn,n))}function Rd(t){Co.current===t&&(we(hn),we(Co))}var Se=Rr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function xd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Ya=Bn.ReactCurrentDispatcher,_c=Bn.ReactCurrentBatchConfig,Qr=0,Ae=null,Le=null,$e=null,xl=!1,io=!1,Po=0,s1=0;function nt(){throw Error(L(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,i,s){if(Qr=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ya.current=t===null||t.memoizedState===null?u1:c1,t=n(r,i),io){s=0;do{if(io=!1,Po=0,25<=s)throw Error(L(301));s+=1,$e=Le=null,e.updateQueue=null,Ya.current=h1,t=n(r,i)}while(io)}if(Ya.current=Nl,e=Le!==null&&Le.next!==null,Qr=0,$e=Le=Ae=null,xl=!1,e)throw Error(L(300));return t}function bd(){var t=Po!==0;return Po=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function jt(){if(Le===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?Ae.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(L(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function Ro(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=jt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Qr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ae.lanes|=f,Xr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Xr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=jt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xv(){}function Nv(t,e){var n=Ae,r=jt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Vd(Vv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,xo(9,bv.bind(null,n,r,i,e),void 0,null),He===null)throw Error(L(349));Qr&30||Dv(n,e,i)}return i}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,r){e.value=n,e.getSnapshot=r,Ov(e)&&Mv(t)}function Vv(t,e,n){return n(function(){Ov(e)&&Mv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Mv(t){var e=Vn(t,1);e!==null&&tn(e,t,1,-1)}function fm(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=l1.bind(null,Ae,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lv(){return jt().memoizedState}function Ja(t,e,n,r){var i=an();Ae.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Nd(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function pm(t,e){return Ja(8390656,8,t,e)}function Vd(t,e){return hu(2048,8,t,e)}function Fv(t,e){return hu(4,2,t,e)}function Uv(t,e){return hu(4,4,t,e)}function zv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jv(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,zv.bind(null,e,t),n)}function Od(){}function Bv(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hv(t,e,n){return Qr&21?(nn(n,e)||(n=Qy(),Ae.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function o1(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{fe=n,_c.transition=r}}function Gv(){return jt().memoizedState}function a1(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Wv(e,n);else if(n=kv(t,e,n,r),n!==null){var i=ft();tn(n,t,r,i),Kv(n,e,r)}}function l1(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,Cd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=kv(t,e,i,r),n!==null&&(i=ft(),tn(n,t,r,i),Kv(n,e,r))}}function qv(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function Wv(t,e){io=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,dd(t,n)}}var Nl={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},u1={readContext:zt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,zv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=a1.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Od,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=o1.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=an();if(Ie){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),He===null)throw Error(L(349));Qr&30||Dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,pm(Vv.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=He.identifierPrefix;if(Ie){var n=Cn,r=An;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=s1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},c1={readContext:zt,useCallback:Bv,useContext:zt,useEffect:Vd,useImperativeHandle:jv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:Ec,useRef:Lv,useState:function(){return Ec(Ro)},useDebugValue:Od,useDeferredValue:function(t){var e=jt();return Hv(e,Le.memoizedState,t)},useTransition:function(){var t=Ec(Ro)[0],e=jt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Nv,useId:Gv,unstable_isNewReconciler:!1},h1={readContext:zt,useCallback:Bv,useContext:zt,useEffect:Vd,useImperativeHandle:jv,useInsertionEffect:Fv,useLayoutEffect:Uv,useMemo:$v,useReducer:wc,useRef:Lv,useState:function(){return wc(Ro)},useDebugValue:Od,useDeferredValue:function(t){var e=jt();return Le===null?e.memoizedState=t:Hv(e,Le.memoizedState,t)},useTransition:function(){var t=wc(Ro)[0],e=jt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Nv,useId:Gv,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(tn(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=dr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(tn(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=dr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(tn(e,t,r,n),Xa(e,t,r))}};function mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,r)||!To(i,s):!0}function Qv(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=wt(e)?Wr:lt.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=wt(e)?Wr:lt.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=U0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,Ch=r),gh(t,e)},n}function Yv(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gh(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new d1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=C1.bind(null,t,e,n),e.then(t,t))}function vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var f1=Bn.ReactCurrentOwner,_t=!1;function dt(t,e,n,r){e.child=t===null?Cv(e,null,n,r):Xi(e,t.child,n,r)}function Em(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=Dd(t,e,n,r,s,i),n=bd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ie&&n&&Ed(e),e.flags|=1,dt(t,e,r,i),e.child)}function wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(To(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,On(t,e,i)}return yh(t,e,n,r,i)}function Zv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(bi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(bi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(bi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(bi,Ct),Ct|=r;return dt(t,e,i,n),e.child}function e_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yh(t,e,n,r,i){var s=wt(n)?Wr:lt.current;return s=Ki(e,s),Ui(e,i),n=Dd(t,e,n,r,s,i),r=bd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ie&&r&&Ed(e),e.flags|=1,dt(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(wt(n)){var s=!0;Il(e)}else s=!1;if(Ui(e,i),e.stateNode===null)Za(t,e),Qv(e,n,r),mh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=zt(h):(h=wt(n)?Wr:lt.current,h=Ki(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&gm(e,o,r,h),Xn=!1;var y=e.memoizedState;o.state=y,Pl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Et.current||Xn?(typeof f=="function"&&(ph(e,n,f,r),u=e.memoizedState),(l=Xn||mm(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Qt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=wt(n)?Wr:lt.current,u=Ki(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&gm(e,o,r,u),Xn=!1,y=e.memoizedState,o.state=y,Pl(e,r,o,i);var R=e.memoizedState;l!==m||y!==R||Et.current||Xn?(typeof k=="function"&&(ph(e,n,k,r),R=e.memoizedState),(h=Xn||mm(e,n,h,r,y,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return vh(t,e,n,r,s,i)}function vh(t,e,n,r,i,s){e_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&am(e,n,!1),On(t,e,s);r=e.stateNode,f1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&am(e,n,!0),e.child}function t_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Pd(t,e.containerInfo)}function Im(t,e,n,r,i){return Qi(),Td(i),e.flags|=256,dt(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function n_(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Se,i&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eh(n),e.memoizedState=_h,t):Md(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return p1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Md(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,r){return r!==null&&Td(r),Xi(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(L(422))),ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=_h,s);if(!(e.mode&1))return ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Tc(s,r,void 0),ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(t,i),tn(r,t,i,-1))}return Bd(),r=Tc(Error(L(421))),ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=ur(i.nextSibling),Pt=e,Ie=!0,Yt=null,t!==null&&(bt[Vt++]=An,bt[Vt++]=Cn,bt[Vt++]=Kr,An=t.id,Cn=t.overflow,Kr=e),e=Md(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fh(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function r_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function m1(t,e,n){switch(e.tag){case 3:t_(e),Qi();break;case 5:Rv(e);break;case 1:wt(e.type)&&Il(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?n_(t,e,n):(me(Se,Se.current&1),t=On(t,e,n),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return r_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return On(t,e,n)}var i_,wh,s_,o_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};s_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jr(hn.current);var s=null;switch(n){case"input":i=$c(t,i),r=$c(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=qc(t,i),r=qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}Kc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(mo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(mo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};o_=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function g1(t,e,n){var r=e.pendingProps;switch(wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return wt(e.type)&&Tl(),rt(e),null;case 3:return r=e.stateNode,Yi(),we(Et),we(lt),xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Rh(Yt),Yt=null))),wh(t,e),rt(e),null;case 5:Rd(e);var i=jr(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)s_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return rt(e),null}if(t=jr(hn.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Ks.length;i++)ve(Ks[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":bp(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Op(r,s),ve("invalid",r)}Kc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,l,t),i=["children",""+l]):mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ta(r),Vp(r,s,!0);break;case"textarea":Ta(r),Mp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Ao]=r,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ks.length;i++)ve(Ks[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":bp(t,r),i=$c(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Op(t,r),i=qc(t,r),ve("invalid",t);break;default:i=r}Kc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ly(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Oy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&go(t,u):typeof u=="number"&&go(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&od(t,s,u,o))}switch(n){case"input":Ta(t),Vp(t,r,!1);break;case"textarea":Ta(t),Mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)o_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=jr(ko.current),jr(hn.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return rt(e),null;case 13:if(we(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&kt!==null&&e.mode&1&&!(e.flags&128))Sv(),Qi(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[un]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Yt!==null&&(Rh(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?Ue===0&&(Ue=3):Bd())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Yi(),wh(t,e),t===null&&Io(e.stateNode.containerInfo),rt(e),null;case 10:return Ad(e.type._context),rt(e),null;case 17:return wt(e.type)&&Tl(),rt(e),null;case 19:if(we(Se),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Zi&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return rt(e),null}else 2*De()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function y1(t,e){switch(wd(e),e.tag){case 1:return wt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),we(Et),we(lt),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rd(e),null;case 13:if(we(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Se),null;case 4:return Yi(),null;case 10:return Ad(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var Va=!1,ot=!1,v1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Am=!1;function _1(t,e){if(sh=vl,t=hv(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)y=m,m=k;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(k=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:t,selectionRange:n},vl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,O=R.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Qt(e.type,D),O);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){Re(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=Am,Am=!1,R}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Ao],delete e[uh],delete e[t1],delete e[n1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var We=null,Xt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)u_(t,e,n),n=n.sibling}function u_(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:ot||Di(n,e);case 6:var r=We,i=Xt;We=null,Wn(t,e,n),We=r,Xt=i,We!==null&&(Xt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Xt?(t=We,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),Eo(t)):gc(We,n.stateNode));break;case 4:r=We,i=Xt,We=n.stateNode.containerInfo,Xt=!0,Wn(t,e,n),We=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!ot&&(Di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Wn(t,e,n),ot=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function km(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new v1),e.forEach(function(r){var i=P1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Xt=!1;break e;case 3:We=l.stateNode.containerInfo,Xt=!0;break e;case 4:We=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(We===null)throw Error(L(160));u_(s,o,i),We=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Re(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)c_(e,t),e=e.sibling}function c_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),on(t),r&4){try{so(3,t,t.return),fu(3,t)}catch(D){Re(t,t.return,D)}try{so(5,t,t.return)}catch(D){Re(t,t.return,D)}}break;case 1:Kt(e,t),on(t),r&512&&n!==null&&Di(n,n.return);break;case 5:if(Kt(e,t),on(t),r&512&&n!==null&&Di(n,n.return),t.flags&32){var i=t.stateNode;try{go(i,"")}catch(D){Re(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dy(i,s),Qc(l,o);var h=Qc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Ly(i,m):f==="dangerouslySetInnerHTML"?Oy(i,m):f==="children"?go(i,m):od(i,f,m,h)}switch(l){case"input":Hc(i,s);break;case"textarea":by(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Oi(i,!!s.multiple,k,!1):y!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(D){Re(t,t.return,D)}}break;case 6:if(Kt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Re(t,t.return,D)}}break;case 3:if(Kt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(D){Re(t,t.return,D)}break;case 4:Kt(e,t),on(t);break;case 13:Kt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ud=De())),r&4&&km(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(h=ot)||f,Kt(e,t),ot=h):Kt(e,t),on(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(m=H=f;H!==null;){switch(y=H,k=y.child,y.tag){case 0:case 11:case 14:case 15:so(4,y,y.return);break;case 1:Di(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(D){Re(r,n,D)}}break;case 5:Di(y,y.return);break;case 22:if(y.memoizedState!==null){Rm(m);continue}}k!==null?(k.return=y,H=k):Rm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=My("display",o))}catch(D){Re(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Re(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Kt(e,t),on(t),r&4&&km(t);break;case 21:break;default:Kt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(go(i,""),r.flags&=-33);var s=Cm(t);Ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cm(t);Sh(t,l,o);break;default:throw Error(L(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E1(t,e,n){H=t,h_(t)}function h_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=Va;var h=ot;if(Va=o,(ot=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?xm(i):u!==null?(u.return=o,H=u):xm(i);for(;s!==null;)H=s,h_(s),s=s.sibling;H=i,Va=l,ot=h}Pm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Pm(t)}}function Pm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Eo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ot||e.flags&512&&Ih(e)}catch(y){Re(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Rm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function xm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Ih(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Ih(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var w1=Math.ceil,Dl=Bn.ReactCurrentDispatcher,Ld=Bn.ReactCurrentOwner,Ut=Bn.ReactCurrentBatchConfig,ue=0,He=null,Ve=null,Xe=0,Ct=0,bi=Rr(0),Ue=0,No=null,Xr=0,pu=0,Fd=0,oo=null,vt=null,Ud=0,Zi=1/0,In=null,bl=!1,Ch=null,hr=null,Oa=!1,ir=null,Vl=0,ao=0,kh=null,el=-1,tl=0;function ft(){return ue&6?De():el!==-1?el:el=De()}function dr(t){return t.mode&1?ue&2&&Xe!==0?Xe&-Xe:i1.transition!==null?(tl===0&&(tl=Qy()),tl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:nv(t.type)),t):1}function tn(t,e,n,r){if(50<ao)throw ao=0,kh=null,Error(L(185));jo(t,n,r),(!(ue&2)||t!==He)&&(t===He&&(!(ue&2)&&(pu|=n),Ue===4&&Jn(t,Xe)),Tt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Zi=De()+500,cu&&xr()))}function Tt(t,e){var n=t.callbackNode;iT(t,e);var r=yl(t,t===He?Xe:0);if(r===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?r1(Nm.bind(null,t)):wv(Nm.bind(null,t)),ZT(function(){!(ue&6)&&xr()}),n=null;else{switch(Xy(r)){case 1:n=hd;break;case 4:n=Wy;break;case 16:n=gl;break;case 536870912:n=Ky;break;default:n=gl}n=__(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(el=-1,tl=0,ue&6)throw Error(L(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=yl(t,t===He?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ol(t,r);else{e=r;var i=ue;ue|=2;var s=p_();(He!==t||Xe!==e)&&(In=null,Zi=De()+500,$r(t,e));do try{S1();break}catch(l){f_(t,l)}while(!0);Sd(),Dl.current=s,ue=i,Ve!==null?e=0:(He=null,Xe=0,e=Ue)}if(e!==0){if(e===2&&(i=eh(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=No,$r(t,0),Jn(t,r),Tt(t,De()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!T1(i)&&(e=Ol(t,r),e===2&&(s=eh(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=No,$r(t,0),Jn(t,r),Tt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Lr(t,vt,In);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=Ud+500-De(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lh(Lr.bind(null,t,vt,In),e);break}Lr(t,vt,In);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w1(r/1960))-r,10<r){t.timeoutHandle=lh(Lr.bind(null,t,vt,In),r);break}Lr(t,vt,In);break;case 5:Lr(t,vt,In);break;default:throw Error(L(329))}}}return Tt(t,De()),t.callbackNode===n?d_.bind(null,t):null}function Ph(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=vt,vt=n,e!==null&&Rh(e)),t}function Rh(t){vt===null?vt=t:vt.push.apply(vt,t)}function T1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~Fd,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Nm(t){if(ue&6)throw Error(L(327));zi();var e=yl(t,0);if(!(e&1))return Tt(t,De()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var r=eh(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=No,$r(t,0),Jn(t,e),Tt(t,De()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,vt,In),Tt(t,De()),null}function zd(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Zi=De()+500,cu&&xr())}}function Yr(t){ir!==null&&ir.tag===0&&!(ue&6)&&zi();var e=ue;ue|=1;var n=Ut.transition,r=fe;try{if(Ut.transition=null,fe=1,t)return t()}finally{fe=r,Ut.transition=n,ue=e,!(ue&6)&&xr()}}function jd(){Ct=bi.current,we(bi)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JT(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Yi(),we(Et),we(lt),xd();break;case 5:Rd(r);break;case 4:Yi();break;case 13:we(Se);break;case 19:we(Se);break;case 10:Ad(r.type._context);break;case 22:case 23:jd()}n=n.return}if(He=t,Ve=t=fr(t.current,null),Xe=Ct=e,Ue=0,No=null,Fd=pu=Xr=0,vt=oo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function f_(t,e){do{var n=Ve;try{if(Sd(),Ya.current=Nl,xl){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Qr=0,$e=Le=Ae=null,io=!1,Po=0,Ld.current=null,n===null||n.return===null){Ue=1,No=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=vm(o);if(k!==null){k.flags&=-257,_m(k,o,l,s,e),k.mode&1&&ym(s,h,e),e=k,u=h;var R=e.updateQueue;if(R===null){var D=new Set;D.add(u),e.updateQueue=D}else R.add(u);break e}else{if(!(e&1)){ym(s,h,e),Bd();break e}u=Error(L(426))}}else if(Ie&&l.mode&1){var O=vm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),_m(O,o,l,s,e),Td(Ji(u,l));break e}}s=u=Ji(u,l),Ue!==4&&(Ue=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Xv(s,u,e);hm(s,I);break e;case 1:l=u;var v=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(hr===null||!hr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Yv(s,l,e);hm(s,b);break e}}s=s.return}while(s!==null)}g_(n)}catch(j){e=j,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function p_(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function Bd(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(Xr&268435455)&&!(pu&268435455)||Jn(He,Xe)}function Ol(t,e){var n=ue;ue|=2;var r=p_();(He!==t||Xe!==e)&&(In=null,$r(t,e));do try{I1();break}catch(i){f_(t,i)}while(!0);if(Sd(),ue=n,Dl.current=r,Ve!==null)throw Error(L(261));return He=null,Xe=0,Ue}function I1(){for(;Ve!==null;)m_(Ve)}function S1(){for(;Ve!==null&&!Q0();)m_(Ve)}function m_(t){var e=v_(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?g_(t):Ve=e,Ld.current=null}function g_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=y1(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Ve=null;return}}else if(n=g1(n,e,Ct),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ue===0&&(Ue=5)}function Lr(t,e,n){var r=fe,i=Ut.transition;try{Ut.transition=null,fe=1,A1(t,e,n,r)}finally{Ut.transition=i,fe=r}return null}function A1(t,e,n,r){do zi();while(ir!==null);if(ue&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sT(t,s),t===He&&(Ve=He=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,__(gl,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ut.transition,Ut.transition=null;var o=fe;fe=1;var l=ue;ue|=4,Ld.current=null,_1(t,n),c_(n,t),GT(oh),vl=!!sh,oh=sh=null,t.current=n,E1(n),X0(),ue=l,fe=o,Ut.transition=s}else t.current=n;if(Oa&&(Oa=!1,ir=t,Vl=i),s=t.pendingLanes,s===0&&(hr=null),Z0(n.stateNode),Tt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,t=Ch,Ch=null,t;return Vl&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===kh?ao++:(ao=0,kh=t):ao=0,xr(),null}function zi(){if(ir!==null){var t=Xy(Vl),e=Ut.transition,n=fe;try{if(Ut.transition=null,fe=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,Vl=0,ue&6)throw Error(L(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:so(8,f,s)}var m=f.child;if(m!==null)m.return=f,H=m;else for(;H!==null;){f=H;var y=f.sibling,k=f.return;if(a_(f),f===h){H=null;break}if(y!==null){y.return=k,H=y;break}H=k}}}var R=s.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var O=D.sibling;D.sibling=null,D=O}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(j){Re(l,l.return,j)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ue=i,xr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{fe=n,Ut.transition=e}}return!1}function Dm(t,e,n){e=Ji(n,e),e=Xv(t,e,1),t=cr(t,e,1),e=ft(),t!==null&&(jo(t,1,e),Tt(t,e))}function Re(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=Ji(n,t),t=Yv(e,t,1),e=cr(e,t,1),t=ft(),e!==null&&(jo(e,1,t),Tt(e,t));break}}e=e.return}}function C1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>De()-Ud?$r(t,0):Fd|=n),Tt(t,e)}function y_(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ft();t=Vn(t,e),t!==null&&(jo(t,e,n),Tt(t,n))}function k1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y_(t,n)}function P1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),y_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,m1(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ie&&e.flags&1048576&&Tv(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Ki(e,lt.current);Ui(e,n),i=Dd(null,e,r,t,i,n);var s=bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kd(e),i.updater=du,e.stateNode=i,i._reactInternals=e,mh(e,r,t,n),e=vh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Ed(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=x1(r),t=Qt(r,t),i){case 0:e=yh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Em(null,e,r,t,n);break e;case 14:e=wm(null,e,r,Qt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Tm(t,e,r,i,n);case 3:e:{if(t_(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pv(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(L(423)),e),e=Im(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(L(424)),e),e=Im(t,e,r,n,i);break e}else for(kt=ur(e.stateNode.containerInfo.firstChild),Pt=e,Ie=!0,Yt=null,n=Cv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=On(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ah(r,i)?o=null:s!==null&&ah(r,s)&&(e.flags|=32),e_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return n_(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Em(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Cl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!Et.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),fh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=zt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),wm(t,e,r,i,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Za(t,e),e.tag=1,wt(r)?(t=!0,Il(e)):t=!1,Ui(e,n),Qv(e,r,i),mh(e,r,i,n),vh(null,e,r,!0,t,n);case 19:return r_(t,e,n);case 22:return Zv(t,e,n)}throw Error(L(156,e.tag))};function __(t,e){return qy(t,e)}function R1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new R1(t,e,n,r)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function x1(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ld)return 11;if(t===ud)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ii:return Hr(n.children,i,s,e);case ad:o=8,i|=8;break;case Uc:return t=Ft(12,n,e,i|2),t.elementType=Uc,t.lanes=s,t;case zc:return t=Ft(13,n,e,i),t.elementType=zc,t.lanes=s,t;case jc:return t=Ft(19,n,e,i),t.elementType=jc,t.lanes=s,t;case Ry:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ky:o=10;break e;case Py:o=9;break e;case ld:o=11;break e;case ud:o=14;break e;case Qn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,r,i,s,o,l,u){return t=new N1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function D1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E_(t){if(!t)return Er;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(wt(n))return Ev(t,n,e)}return e}function w_(t,e,n,r,i,s,o,l,u){return t=Hd(n,r,!0,t,i,s,o,l,u),t.context=E_(null),n=t.current,r=ft(),i=dr(n),s=Rn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,jo(t,i,r),Tt(t,r),t}function gu(t,e,n,r){var i=e.current,s=ft(),o=dr(i);return n=E_(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(tn(t,i,o,s),Xa(t,i,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function b1(){return null}var T_=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}yu.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));gu(t,e,null,null)};yu.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){gu(null,t,null,null)}),e[bn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&tv(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function V1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ml(o);s.call(h)}}var o=w_(e,r,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=o,t[bn]=o.current,Io(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ml(u);l.call(h)}}var u=Hd(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=u,t[bn]=u.current,Io(t.nodeType===8?t.parentNode:t),Yr(function(){gu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ml(o);l.call(u)}}gu(e,o,t,i)}else o=V1(n,e,t,i,r);return Ml(o)}Yy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(dd(e,n|1),Tt(e,De()),!(ue&6)&&(Zi=De()+500,xr()))}break;case 13:Yr(function(){var r=Vn(t,1);if(r!==null){var i=ft();tn(r,t,1,i)}}),Gd(t,1)}};fd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=ft();tn(e,t,134217728,n)}Gd(t,134217728)}};Jy=function(t){if(t.tag===13){var e=dr(t),n=Vn(t,e);if(n!==null){var r=ft();tn(n,t,e,r)}Gd(t,e)}};Zy=function(){return fe};ev=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Yc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(L(90));Ny(r),Hc(r,i)}}}break;case"textarea":by(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};zy=zd;jy=Yr;var O1={usingClientEntryPoint:!1,Events:[$o,ki,uu,Fy,Uy,zd]},Hs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M1={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hy(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{su=Ma.inject(M1),cn=Ma}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(L(200));return D1(t,e,null,n)};Nt.createRoot=function(t,e){if(!Wd(t))throw Error(L(299));var n=!1,r="",i=T_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,Io(t.nodeType===8?t.parentNode:t),new qd(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Hy(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Yr(t)};Nt.hydrate=function(t,e,n){if(!vu(e))throw Error(L(200));return _u(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w_(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};Nt.render=function(t,e,n){if(!vu(e))throw Error(L(200));return _u(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(L(40));return t._reactRootContainer?(Yr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=zd;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return _u(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),Iy.exports=Nt;var L1=Iy.exports,Om=L1;Lc.createRoot=Om.createRoot,Lc.hydrateRoot=Om.hydrateRoot;/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S_=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>ae.createElement("svg",{ref:u,...U1,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:S_("lucide",i),...l},[...o.map(([h,f])=>ae.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(t,e)=>{const n=ae.forwardRef(({className:r,...i},s)=>ae.createElement(z1,{ref:s,iconNode:e,className:S_(`lucide-${F1(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Bt("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Bt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=Bt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Bt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=Bt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Bt("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Bt("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=Bt("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Bt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=Bt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=Bt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Bt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),K1=()=>{};var zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},k_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(y=64)),r.push(n[f],n[m],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new X1;const y=s<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const R=h<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y1=function(t){const e=C_(t);return k_.encodeByteArray(e,!0)},Ll=function(t){return Y1(t).replace(/\./g,"")},P_=function(t){try{return k_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=()=>J1().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof zm>"u")return;const t=zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&P_(t[1]);return e&&JSON.parse(e)},Eu=()=>{try{return K1()||Z1()||eI()||tI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=Eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nI=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x_=()=>{var t;return(t=Eu())===null||t===void 0?void 0:t.config},N_=t=>{var e;return(e=Eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ll(JSON.stringify(n)),Ll(JSON.stringify(o)),""].join(".")}const lo={};function sI(){const t={prod:[],emulator:[]};for(const e of Object.keys(lo))lo[e]?t.emulator.push(e):t.prod.push(e);return t}function oI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jm=!1;function b_(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||lo[t]===e||lo[t]||jm)return;lo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=sI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,k){y.setAttribute("width","24"),y.setAttribute("id",k),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{jm=!0,o()},y}function f(y,k){y.setAttribute("id",k),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=oI(r),k=n("text"),R=document.getElementById(k)||document.createElement("span"),D=n("learnmore"),O=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const A=y.element;l(A),f(O,D);const b=h();u(v,I),A.append(v,R,O,b),document.body.appendChild(A)}s?(R.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function lI(){var t;const e=(t=Eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dI(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fI(){return!lI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $n(i,l,r)}}function yI(t,e){return t.replace(vI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vI=/\{\$([^}]+)}/g;function _I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bm(s)&&Bm(o)){if(!Jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function EI(t,e){const n=new wI(t,e);return n.subscribe.bind(n)}class wI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cc),i.error===void 0&&(i.error=Cc),i.complete===void 0&&(i.complete=Cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(t){return t===Fr?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const kI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},PI=se.INFO,RI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},xI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=xI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let $m,Hm;function DI(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bI(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const V_=new WeakMap,xh=new WeakMap,O_=new WeakMap,kc=new WeakMap,Qd=new WeakMap;function VI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&V_.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function OI(t){if(xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xh.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MI(t){Nh=t(Nh)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return O_.set(r,e.sort?e.sort():[e]),pr(r)}:bI().includes(t)?function(...e){return t.apply(Pc(this),e),pr(V_.get(this))}:function(...e){return pr(t.apply(Pc(this),e))}}function FI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&OI(t),NI(t,DI())?new Proxy(t,Nh):t)}function pr(t){if(t instanceof IDBRequest)return VI(t);if(kc.has(t))return kc.get(t);const e=FI(t);return e!==t&&(kc.set(t,e),Qd.set(e,t)),e}const Pc=t=>Qd.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const zI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],Rc=new Map;function Gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Rc.set(e,s),s}MI(t=>({...t,get:(e,n,r)=>Gm(e,n)||t.get(e,n,r),has:(e,n)=>!!Gm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",qm="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Kd("@firebase/app"),HI="@firebase/app-compat",GI="@firebase/analytics-compat",qI="@firebase/analytics",WI="@firebase/app-check-compat",KI="@firebase/app-check",QI="@firebase/auth",XI="@firebase/auth-compat",YI="@firebase/database",JI="@firebase/data-connect",ZI="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/ai",pS="@firebase/firestore-compat",mS="firebase",gS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="[DEFAULT]",yS={[Dh]:"fire-core",[HI]:"fire-core-compat",[qI]:"fire-analytics",[GI]:"fire-analytics-compat",[KI]:"fire-app-check",[WI]:"fire-app-check-compat",[QI]:"fire-auth",[XI]:"fire-auth-compat",[YI]:"fire-rtdb",[JI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[pS]:"fire-fst-compat",[fS]:"fire-vertex","fire-js":"fire-js",[mS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map,vS=new Map,Vh=new Map;function Wm(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Vh.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Fl.values())Wm(n,t);for(const n of vS.values())Wm(n,t);return!0}function Xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Go("app","Firebase",_S);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=gS;function M_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=x_()),!n)throw mr.create("no-options");const s=Fl.get(i);if(s){if(Jr(n,s.options)&&Jr(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new CI(i);for(const u of Vh.values())o.addComponent(u);const l=new ES(n,r,o);return Fl.set(i,l),l}function L_(t=bh){const e=Fl.get(t);if(!e&&t===bh&&x_())return M_();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=yS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}es(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firebase-heartbeat-database",TS=1,Do="firebase-heartbeat-store";let xc=null;function F_(){return xc||(xc=UI(wS,TS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),xc}async function IS(t){try{const n=(await F_()).transaction(Do),r=await n.objectStore(Do).get(U_(t));return await n.done,r}catch(e){if(e instanceof $n)Mn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Km(t,e){try{const r=(await F_()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,U_(t)),await r.done}catch(n){if(n instanceof $n)Mn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function U_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1024,AS=30;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>AS){const o=RS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qm(),{heartbeatsToSend:r,unsentEntries:i}=kS(this._heartbeatsCache.heartbeats),s=Ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mn.warn(n),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function kS(t,e=SS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return Ll(JSON.stringify({version:2,heartbeats:t})).length}function RS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){es(new Zr("platform-logger",e=>new BI(e),"PRIVATE")),es(new Zr("heartbeat",e=>new CS(e),"PRIVATE")),gr(Dh,qm,t),gr(Dh,qm,"esm2017"),gr("fire-js","")}xS("");var NS="firebase",DS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(NS,DS,"app");function Yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bS=z_,j_=new Go("auth","Firebase",z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Kd("@firebase/auth");function VS(t,...e){Ul.logLevel<=se.WARN&&Ul.warn(`Auth (${cs}): ${t}`,...e)}function rl(t,...e){Ul.logLevel<=se.ERROR&&Ul.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw Jd(t,...e)}function dn(t,...e){return Jd(t,...e)}function B_(t,e,n){const r=Object.assign(Object.assign({},bS()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return B_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function J(t,e,...n){if(!t)throw Jd(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function Fn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OS(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||cI()||"connection"in navigator)?navigator.onLine:!0}function LS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=aI()||hI()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zS=new Wo(3e4,6e4);function Ko(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hs(t,e,n,r,i={}){return H_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return uI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(h.credentials="include"),$_.fetch()(await G_(t,t.config.apiHost,n,l),h)})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FS),e);try{const i=new jS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw La(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw B_(t,f,h);Ln(t,f)}}catch(i){if(i instanceof $n)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function ef(t,e,n,r,i={}){const s=await hs(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function G_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`;return US.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class jS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),zS.get())})}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function zl(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $S(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=tf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:uo(Nc(i.auth_time)),issuedAtTime:uo(Nc(i.iat)),expirationTime:uo(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=P_(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jm(t){const e=tf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&HS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bo(t,zl(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?q_(s.providerUserInfo):[],l=WS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Mh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function qS(t){const e=xt(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function q_(t){return t.map(e=>{var{providerId:n}=e,r=Yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KS(t,e){const n=await H_(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await G_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),$_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QS(t,e){return hs(t,"POST","/v2/accounts:revokeToken",Ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Jm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $S(this,e)}reload(){return qS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await bo(this,BS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:b,isAnonymous:j,providerData:U,stsTokenManager:E}=n;J(A&&E,e,"internal-error");const g=ji.fromJSON(this.name,E);J(typeof A=="string",e,"internal-error"),Kn(m,e.name),Kn(y,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof j=="boolean",e,"internal-error"),Kn(k,e.name),Kn(R,e.name),Kn(D,e.name),Kn(O,e.name),Kn(I,e.name),Kn(v,e.name);const _=new Jt({uid:A,auth:e,email:y,emailVerified:b,displayName:m,isAnonymous:j,photoURL:R,phoneNumber:k,tenantId:D,stsTokenManager:g,createdAt:I,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(w=>Object.assign({},w))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?q_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new Jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=Zm.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W_.type="NONE";const eg=W_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zl(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(Pn(eg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Pn(eg);const o=il(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const y=await zl(e,{idToken:f}).catch(()=>{});if(!y)break;m=await Jt._fromGetAccountInfoResponse(e,y,f)}else m=Jt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(eE(e))return"Webos";if(Q_(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(J_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function K_(t=ut()){return/firefox\//i.test(t)}function Q_(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(t=ut()){return/crios\//i.test(t)}function Y_(t=ut()){return/iemobile/i.test(t)}function J_(t=ut()){return/android/i.test(t)}function Z_(t=ut()){return/blackberry/i.test(t)}function eE(t=ut()){return/webos/i.test(t)}function nf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=ut()){var e;return nf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YS(){return dI()&&document.documentMode===10}function tE(t=ut()){return nf(t)||J_(t)||eE(t)||Z_(t)||/windows phone/i.test(t)||Y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e=[]){let n;switch(t){case"Browser":n=tg(ut());break;case"Worker":n=`${tg(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e={}){return hs(t,"GET","/v2/passwordPolicy",Ko(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=6;class tA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new JS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zl(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(xn(this));const n=e?xt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZS(this),n=new tA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qo(t){return xt(t)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=EI(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rA(t){rf=t}function iA(t){return rf.loadJS(t)}function sA(){return rf.gapiScript}function oA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){const n=Xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jr(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function lA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uA(t,e,n){const r=Qo(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rE(e),{host:o,port:l}=cA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Jr(h,r.config.emulator)&&Jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,us(o)?(D_(`${s}//${o}${u}`),b_("Auth",!0)):hA()}function rE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cA(t){const e=rE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rg(o)}}}function rg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return ef(t,"POST","/v1/accounts:signInWithIdp",Ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="http://localhost";class ei extends iE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:dA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends sE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Xo{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Xo{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Xo{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e){return ef(t,"POST","/v1/accounts:signUp",Ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jt._fromIdTokenResponse(e,r,i),o=ig(r);return new Un({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ig(r);return new Un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t){var e;if(Ot(t.app))return Promise.reject(xn(t));const n=Qo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Un({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await fA(n,{returnSecureToken:!0}),i=await Un._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function oE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function mA(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Un._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await bo(t,oE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=tf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Un._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e,n=!1){if(Ot(t.app))return Promise.reject(xn(t));const r="signIn",i=await oE(t,r,e),s=await Un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){return ef(t,"POST","/v1/accounts:signInWithCustomToken",Ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){if(Ot(t.app))return Promise.reject(xn(t));const n=Qo(t),r=await vA(n,{token:e,returnSecureToken:!0}),i=await Un._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function EA(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function wA(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function TA(t,e,n,r){return xt(t).onAuthStateChanged(e,n,r)}const $l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($l,"1"),this.storage.removeItem($l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=1e3,SA=10;class lE extends aE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const AA=lE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends aE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uE.type="SESSION";const cE=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await CA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=sf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function PA(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function RA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NA(){return hE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebaseLocalStorageDb",DA=1,Hl="firebaseLocalStorage",fE="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function bA(){const t=indexedDB.deleteDatabase(dE);return new Yo(t).toPromise()}function Lh(){const t=indexedDB.open(dE,DA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:fE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await bA(),e(await Lh()))})})}async function sg(t,e,n){const r=Tu(t,!0).put({[fE]:e,value:n});return new Yo(r).toPromise()}async function VA(t,e){const n=Tu(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function og(t,e){const n=Tu(t,!0).delete(e);return new Yo(n).toPromise()}const OA=800,MA=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(NA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new kA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await sg(e,$l,"1"),await og(e,$l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new Yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const LA=pE;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){return e?Pn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends iE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UA(t){return yA(t.auth,new of(t),t.bypassAuthState)}function zA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),gA(n,new of(t),t.bypassAuthState)}async function jA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),mA(n,new of(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UA;case"linkViaPopup":case"linkViaRedirect":return jA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:Ln(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=new Wo(2e3,1e4);class Vi extends mE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BA.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",sl=new Map;class HA extends mE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await GA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GA(t,e){const n=KA(e),r=WA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qA(t,e){sl.set(t._key(),e)}function WA(t){return Pn(t._redirectPersistence)}function KA(t){return il($A,t.config.apiKey,t.name)}async function QA(t,e,n=!1){if(Ot(t.app))return Promise.reject(xn(t));const r=Qo(t),i=FA(r,e),o=await new HA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=10*60*1e3;class YA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}}function ag(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tC=/^https?/;async function nC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZA(t);for(const n of e)try{if(rC(n))return}catch{}Ln(t,"unauthorized-domain")}function rC(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tC.test(n))return!1;if(eC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new Wo(3e4,6e4);function lg(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sC(t){return new Promise((e,n)=>{var r,i,s;function o(){lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lg(),n(dn(t,"network-request-failed"))},timeout:iC.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const l=oA("iframefcb");return fn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},iA(`${sA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ol=null,e})}let ol=null;function oC(t){return ol=ol||sC(t),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=new Wo(5e3,15e3),lC="__/auth/iframe",uC="emulator/auth/iframe",cC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,uC):`https://${t.config.authDomain}/${lC}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=hC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qo(r).slice(1)}`}async function fC(t){const e=await oC(t),n=fn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:dC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},aC.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mC=500,gC=600,yC="_blank",vC="http://localhost";class ug{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _C(t,e,n,r=mC,i=gC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ut().toLowerCase();n&&(l=X_(h)?yC:n),K_(h)&&(e=e||vC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,R])=>`${y}${k}=${R},`,"");if(XS(h)&&l!=="_self")return EC(e||"",l),new ug(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new ug(m)}function EC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="__/auth/handler",TC="emulator/auth/handler",IC=encodeURIComponent("fac");async function cg(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof sE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_I(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Xo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${IC}=${encodeURIComponent(u)}`:"";return`${SC(t)}?${qo(l).slice(1)}${h}`}function SC({config:t}){return t.emulator?Zd(t,TC):`https://${t.authDomain}/${wC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class AC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cE,this._completeRedirectFn=QA,this._overrideRedirectResult=qA}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cg(e,n,r,Oh(),i);return _C(e,o,sf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cg(e,n,r,Oh(),i);return PA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fC(e),r=new YA(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dc];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tE()||Q_()||nf()}}const CC=AC;var hg="@firebase/auth",dg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RC(t){es(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nE(t)},h=new nA(r,i,s,u);return lA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Zr("auth-internal",e=>{const n=Qo(e.getProvider("auth").getImmediate());return(r=>new kC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(hg,dg,PC(t)),gr(hg,dg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=5*60,NC=N_("authIdTokenMaxAge")||xC;let fg=null;const DC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NC)return;const i=n==null?void 0:n.token;fg!==i&&(fg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bC(t=L_()){const e=Xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aA(t,{popupRedirectResolver:CC,persistence:[LA,AA,cE]}),r=N_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=DC(s.toString());wA(n,o,()=>o(n.currentUser)),EA(n,l=>o(l))}}const i=R_("auth");return i&&uA(n,`http://${i}`),n}function VC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RC("Browser");var pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,yE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(w,C,P){for(var T=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)T[Ge-2]=arguments[Ge];return g.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)w[C]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(C=0;16>C;++C)w[C]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],C=E.g[2];var P=E.g[3],T=g+(P^_&(C^P))+w[0]+3614090360&4294967295;g=_+(T<<7&4294967295|T>>>25),T=P+(C^g&(_^C))+w[1]+3905402710&4294967295,P=g+(T<<12&4294967295|T>>>20),T=C+(_^P&(g^_))+w[2]+606105819&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(g^C&(P^g))+w[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=g+(P^_&(C^P))+w[4]+4118548399&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(C^g&(_^C))+w[5]+1200080426&4294967295,P=g+(T<<12&4294967295|T>>>20),T=C+(_^P&(g^_))+w[6]+2821735955&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(g^C&(P^g))+w[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=g+(P^_&(C^P))+w[8]+1770035416&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(C^g&(_^C))+w[9]+2336552879&4294967295,P=g+(T<<12&4294967295|T>>>20),T=C+(_^P&(g^_))+w[10]+4294925233&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(g^C&(P^g))+w[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=g+(P^_&(C^P))+w[12]+1804603682&4294967295,g=_+(T<<7&4294967295|T>>>25),T=P+(C^g&(_^C))+w[13]+4254626195&4294967295,P=g+(T<<12&4294967295|T>>>20),T=C+(_^P&(g^_))+w[14]+2792965006&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(g^C&(P^g))+w[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=g+(C^P&(_^C))+w[1]+4129170786&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(g^_))+w[6]+3225465664&4294967295,P=g+(T<<9&4294967295|T>>>23),T=C+(g^_&(P^g))+w[11]+643717713&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(C^P))+w[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=g+(C^P&(_^C))+w[5]+3593408605&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(g^_))+w[10]+38016083&4294967295,P=g+(T<<9&4294967295|T>>>23),T=C+(g^_&(P^g))+w[15]+3634488961&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(C^P))+w[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=g+(C^P&(_^C))+w[9]+568446438&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(g^_))+w[14]+3275163606&4294967295,P=g+(T<<9&4294967295|T>>>23),T=C+(g^_&(P^g))+w[3]+4107603335&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(C^P))+w[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=g+(C^P&(_^C))+w[13]+2850285829&4294967295,g=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(g^_))+w[2]+4243563512&4294967295,P=g+(T<<9&4294967295|T>>>23),T=C+(g^_&(P^g))+w[7]+1735328473&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^g&(C^P))+w[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=g+(_^C^P)+w[5]+4294588738&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^C)+w[8]+2272392833&4294967295,P=g+(T<<11&4294967295|T>>>21),T=C+(P^g^_)+w[11]+1839030562&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^g)+w[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=g+(_^C^P)+w[1]+2763975236&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^C)+w[4]+1272893353&4294967295,P=g+(T<<11&4294967295|T>>>21),T=C+(P^g^_)+w[7]+4139469664&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^g)+w[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=g+(_^C^P)+w[13]+681279174&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^C)+w[0]+3936430074&4294967295,P=g+(T<<11&4294967295|T>>>21),T=C+(P^g^_)+w[3]+3572445317&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^g)+w[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=g+(_^C^P)+w[9]+3654602809&4294967295,g=_+(T<<4&4294967295|T>>>28),T=P+(g^_^C)+w[12]+3873151461&4294967295,P=g+(T<<11&4294967295|T>>>21),T=C+(P^g^_)+w[15]+530742520&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^g)+w[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=g+(C^(_|~P))+w[0]+4096336452&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~C))+w[7]+1126891415&4294967295,P=g+(T<<10&4294967295|T>>>22),T=C+(g^(P|~_))+w[14]+2878612391&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~g))+w[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=g+(C^(_|~P))+w[12]+1700485571&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~C))+w[3]+2399980690&4294967295,P=g+(T<<10&4294967295|T>>>22),T=C+(g^(P|~_))+w[10]+4293915773&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~g))+w[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=g+(C^(_|~P))+w[8]+1873313359&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~C))+w[15]+4264355552&4294967295,P=g+(T<<10&4294967295|T>>>22),T=C+(g^(P|~_))+w[6]+2734768916&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~g))+w[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=g+(C^(_|~P))+w[4]+4149444226&4294967295,g=_+(T<<6&4294967295|T>>>26),T=P+(_^(g|~C))+w[11]+3174756917&4294967295,P=g+(T<<10&4294967295|T>>>22),T=C+(g^(P|~_))+w[2]+718787259&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,w=this.B,C=this.h,P=0;P<g;){if(C==0)for(;P<=_;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<g;)if(w[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,w),C=0;break}}else for(;P<g;)if(w[C++]=E[P++],C==this.blockSize){i(this,w),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)E[_++]=this.g[g]>>>w&255;return E};function s(E,g){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function o(E,g){this.h=g;for(var _=[],w=!0,C=E.length-1;0<=C;C--){var P=E[C]|0;w&&P==g||(_[C]=P,w=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return O(h(-E));for(var g=[],_=1,w=0;E>=_;w++)g[w]=E/_|0,_*=4294967296;return new o(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return O(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,C=0;C<E.length;C+=8){var P=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+P),g);8>P?(P=h(Math.pow(g,P)),w=w.j(P).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var m=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);E+=(0<=w?w:4294967296+w)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(D(this))return"-"+O(this).toString(E);for(var g=h(Math.pow(E,6)),_=this,w="";;){var C=b(_,g).g;_=I(_,C.j(g));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=C,R(_))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=I(this,E),D(E)?-1:R(E)?0:1};function O(E){for(var g=E.g.length,_=[],w=0;w<g;w++)_[w]=~E.g[w];return new o(_,~E.h).add(y)}t.abs=function(){return D(this)?O(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0,C=0;C<=g;C++){var P=w+(this.i(C)&65535)+(E.i(C)&65535),T=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);w=T>>>16,P&=65535,T&=65535,_[C]=T<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(E,g){return E.add(O(g))}t.j=function(E){if(R(this)||R(E))return m;if(D(this))return D(E)?O(this).j(O(E)):O(O(this).j(E));if(D(E))return O(this.j(O(E)));if(0>this.l(k)&&0>E.l(k))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<E.g.length;C++){var P=this.i(w)>>>16,T=this.i(w)&65535,Ge=E.i(C)>>>16,rn=E.i(C)&65535;_[2*w+2*C]+=T*rn,v(_,2*w+2*C),_[2*w+2*C+1]+=P*rn,v(_,2*w+2*C+1),_[2*w+2*C+1]+=T*Ge,v(_,2*w+2*C+1),_[2*w+2*C+2]+=P*Ge,v(_,2*w+2*C+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new o(_,0)};function v(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function A(E,g){this.g=E,this.h=g}function b(E,g){if(R(g))throw Error("division by zero");if(R(E))return new A(m,m);if(D(E))return g=b(O(E),g),new A(O(g.g),O(g.h));if(D(g))return g=b(E,O(g)),new A(O(g.g),g.h);if(30<E.g.length){if(D(E)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(E);)_=j(_),w=j(w);var C=U(_,1),P=U(w,1);for(w=U(w,2),_=U(_,2);!R(w);){var T=P.add(w);0>=T.l(E)&&(C=C.add(_),P=T),w=U(w,1),_=U(_,1)}return g=I(E,C.j(g)),new A(C,g)}for(C=m;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=h(_),T=P.j(g);D(T)||0<T.l(E);)_-=w,P=h(_),T=P.j(g);R(P)&&(P=y),C=C.add(P),E=I(E,T)}return new A(C,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&E.i(w);return new o(_,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|E.i(w);return new o(_,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^E.i(w);return new o(_,this.h^E.h)};function j(E){for(var g=E.g.length+1,_=[],w=0;w<g;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(_,E.h)}function U(E,g){var _=g>>5;g%=32;for(var w=E.g.length-_,C=[],P=0;P<w;P++)C[P]=0<g?E.i(P+_)>>>g|E.i(P+_+1)<<32-g:E.i(P+_);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,yr=o}).apply(typeof pg<"u"?pg:typeof self<"u"?self:typeof window<"u"?window:{});var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vE,Qs,_E,al,Fh,EE,wE,TE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fa=="object"&&Fa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var x=a[p];if(!(x in d))break e;d=d[x]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,x={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function k(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,x,N){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return c.prototype[x].apply(p,z)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const x=a.length||0,N=p.length||0;a.length=x+N;for(let z=0;z<N;z++)a[x+z]=p[z]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ge{constructor(){this.h=this.g=null}add(c,d){const p=rn.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var rn=new I(()=>new sn,a=>a.reset());class sn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $t,B=!1,X=new Ge,K=()=>{const a=l.Promise.resolve(void 0);$t=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=rn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function ct(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{b(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ct.aa.h.call(this)}}R(ct,Te);var Gt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),Lu=0;function Fu(a,c,d,p,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=x,this.key=++Lu,this.da=this.fa=!1}function ui(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Nr(a){this.src=a,this.g={},this.h=0}Nr.prototype.add=function(a,c,d,p,x){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=ys(a,c,p,x);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Fu(c,this.src,N,!!p,x),c.fa=d,a.push(c)),c};function gs(a,c){var d=c.type;if(d in a.g){var p=a.g[d],x=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=x)&&Array.prototype.splice.call(p,x,1),N&&(ui(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ys(a,c,d,p){for(var x=0;x<a.length;++x){var N=a[x];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return x}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),_s={};function Es(a,c,d,p,x){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Es(a,c[N],d,p,x);return null}return d=Z(d),a&&a[gt]?a.K(c,d,h(p)?!!p.capture:!1,x):ws(a,c,d,!1,p,x)}function ws(a,c,d,p,x,N){if(!c)throw Error("Invalid event type");var z=h(x)?!!x.capture:!!x,pe=F(a);if(pe||(a[vs]=pe=new Nr(a)),d=pe.add(c,d,p,z,N),d.proxy)return d;if(p=Uu(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Ht||(x=z),x===void 0&&(x=!1),a.addEventListener(c.toString(),p,x);else if(a.attachEvent)a.attachEvent(En(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Uu(){function a(d){return c.call(a.src,a.listener,d)}const c=ra;return a}function ci(a,c,d,p,x){if(Array.isArray(c))for(var N=0;N<c.length;N++)ci(a,c[N],d,p,x);else p=h(p)?!!p.capture:!!p,d=Z(d),a&&a[gt]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=ys(N,d,p,x),-1<d&&(ui(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=F(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ys(c,d,p,x)),(d=-1<a?c[a]:null)&&Ts(d))}function Ts(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[gt])gs(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(En(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=F(c))?(gs(d,a),d.h==0&&(d.src=null,c[vs]=null)):ui(a)}}}function En(a){return a in _s?_s[a]:_s[a]="on"+a}function ra(a,c){if(a.da)a=!0;else{c=new ct(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&Ts(a),a=d.call(p,c)}return a}function F(a){return a=a[vs],a instanceof Nr?a:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(a){return typeof a=="function"?a:(a[G]||(a[G]=function(c){return a.handleEvent(c)}),a[G])}function Y(){de.call(this),this.i=new Nr(this),this.M=this,this.F=null}R(Y,de),Y.prototype[gt]=!0,Y.prototype.removeEventListener=function(a,c,d,p){ci(this,a,c,d,p)};function ne(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var x=c;c=new Te(p,a),w(c,x)}if(x=!0,d)for(var N=d.length-1;0<=N;N--){var z=c.g=d[N];x=Ze(z,p,!0,c)&&x}if(z=c.g=a,x=Ze(z,p,!0,c)&&x,x=Ze(z,p,!1,c)&&x,d)for(N=0;N<d.length;N++)z=c.g=d[N],x=Ze(z,p,!1,c)&&x}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)ui(d[p]);delete a.g[c],a.h--}}this.F=null},Y.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Y.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Ze(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,N=0;N<c.length;++N){var z=c[N];if(z&&!z.da&&z.capture==d){var pe=z.listener,qe=z.ha||z.src;z.fa&&gs(a.i,z),x=pe.call(qe,p)!==!1&&x}}return x&&!p.defaultPrevented}function Me(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function It(a){a.g=Me(()=>{a.g=null,a.i&&(a.i=!1,It(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class xe extends de{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(a){de.call(this),this.h=a,this.g={}}R(St,de);var Is=[];function ia(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Ts(c)},a),a.g={}}St.prototype.N=function(){St.aa.N.call(this),ia(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=l.JSON.stringify,di=l.JSON.parse,qt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ss(){}Ss.prototype.h=null;function Mf(a){return a.h||(a.h=a.i())}function Lf(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zu(){Te.call(this,"d")}R(zu,Te);function ju(){Te.call(this,"c")}R(ju,Te);var Dr={},Ff=null;function sa(){return Ff=Ff||new Y}Dr.La="serverreachability";function Uf(a){Te.call(this,Dr.La,a)}R(Uf,Te);function Cs(a){const c=sa();ne(c,new Uf(c))}Dr.STAT_EVENT="statevent";function zf(a,c){Te.call(this,Dr.STAT_EVENT,a),this.stat=c}R(zf,Te);function ht(a){const c=sa();ne(c,new zf(c,a))}Dr.Ma="timingevent";function jf(a,c){Te.call(this,Dr.Ma,a),this.size=c}R(jf,Te);function ks(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function Kw(a,c,d,p,x,N){a.info(function(){if(a.g)if(N)for(var z="",pe=N.split("&"),qe=0;qe<pe.length;qe++){var ce=pe[qe].split("=");if(1<ce.length){var et=ce[0];ce=ce[1];var tt=et.split("_");z=2<=tt.length&&tt[1]=="type"?z+(et+"="+ce+"&"):z+(et+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+c+`
`+d+`
`+z})}function Qw(a,c,d,p,x,N,z){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+c+`
`+d+`
`+N+" "+z})}function fi(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yw(a,d)+(p?" "+p:"")})}function Xw(a,c){a.info(function(){return"TIMEOUT: "+c})}Ps.prototype.info=function(){};function Yw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var N=x[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return hi(d)}catch{return c}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bu;function aa(){}R(aa,Ss),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Bu=new aa;function Hn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Hf={},$u={};function Hu(a,c,d){a.L=1,a.v=ha(wn(c)),a.m=d,a.P=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),la(a),a.A=wn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),sp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new $f,a.g=Ip(a.j,d?c:null,!a.m),0<a.O&&(a.M=new xe(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Is[0]=x.toString()),x=Is);for(var N=0;N<x.length;N++){var z=Es(d,x[N],p||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Cs(),Kw(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Tn(a)==3?c.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=Tn(this.g);var c=this.g.Ba();const gi=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||dp(this.g)))){this.J||tt!=4||c==7||(c==8||0>=gi?Cs(3):Cs(2)),Gu(this);var d=this.g.Z();this.X=d;t:if(qf(this)){var p=dp(this.g);a="";var x=p.length,N=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),Rs(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==x-1)});p.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Qw(this.i,this.u,this.A,this.l,this.R,tt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,qe=this.g;if((pe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ce=pe;break t}}ce=null}if(d=ce)fi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qu(this,d);else{this.o=!1,this.s=3,ht(12),br(this),Rs(this);break e}}if(this.P){d=!0;let Wt;for(;!this.J&&this.C<z.length;)if(Wt=Jw(this,z),Wt==$u){tt==4&&(this.s=4,ht(14),d=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Hf){this.s=4,ht(15),fi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else fi(this.i,this.l,Wt,null),qu(this,Wt);if(qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||z.length!=0||this.h.h||(this.s=1,ht(16),d=!1),this.o=this.o&&d,!d)fi(this.i,this.l,z,"[Invalid Chunked Response]"),br(this),Rs(this);else if(0<z.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ju(et),et.M=!0,ht(11))}}else fi(this.i,this.l,z,null),qu(this,z);tt==4&&br(this),this.o&&!this.J&&(tt==4?_p(this.j,this):(this.o=!1,la(this)))}else m0(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),br(this),Rs(this)}}}catch{}finally{}};function qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?$u:(d=Number(c.substring(d,p)),isNaN(d)?Hf:(p+=1,p+d>c.length?$u:(c=c.slice(p,p+d),a.C=p+d,c)))}Hn.prototype.cancel=function(){this.J=!0,br(this)};function la(a){a.S=Date.now()+a.I,Wf(a,a.I)}function Wf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(y(a.ba,a),c)}function Gu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Xw(this.i,this.A),this.L!=2&&(Cs(),ht(17)),br(this),this.s=2,Rs(this)):Wf(this,this.S-a)};function Rs(a){a.j.G==0||a.J||_p(a.j,a)}function br(a){Gu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ia(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function qu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Wu(d.h,a))){if(!a.K&&Wu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;Yu(d),ht(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ks(y(d.Za,d),6e3));if(1>=Xf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Or(d,11)}else if((a.K||d.g==a)&&ya(d),!v(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let ce=x[c];if(d.T=ce[0],ce=ce[1],d.G==2)if(ce[0]=="c"){d.K=ce[1],d.ia=ce[2];const et=ce[3];et!=null&&(d.la=et,d.j.info("VER="+d.la));const tt=ce[4];tt!=null&&(d.Aa=tt,d.j.info("SVER="+d.Aa));const gi=ce[5];gi!=null&&typeof gi=="number"&&0<gi&&(p=1.5*gi,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Wt=a.g;if(Wt){const _a=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_a){var N=p.h;N.g||_a.indexOf("spdy")==-1&&_a.indexOf("quic")==-1&&_a.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ku(N,N.h),N.h=null))}if(p.D){const Zu=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(p.ya=Zu,ye(p.I,p.D,Zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=a;if(p.qa=Tp(p,p.J?p.ia:null,p.W),z.K){Yf(p.h,z);var pe=z,qe=p.L;qe&&(pe.I=qe),pe.B&&(Gu(pe),la(pe)),p.g=z}else yp(p);0<d.i.length&&ga(d)}else ce[0]!="stop"&&ce[0]!="close"||Or(d,7);else d.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Or(d,7):Xu(d):ce[0]!="noop"&&d.l&&d.l.ta(ce),d.v=0)}}Cs(4)}catch{}}var Zw=class{constructor(a,c){this.g=a,this.map=c}};function Kf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xf(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ku(a,c){a.g?a.g.add(c):a.h=c}function Yf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Kf.prototype.cancel=function(){if(this.i=Jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function e0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function t0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Zf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=t0(a),p=e0(a),x=p.length,N=0;N<x;N++)c.call(void 0,p[N],d&&d[N],a)}var ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function n0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),x=null;if(0<=p){var N=a[d].substring(0,p);x=a[d].substring(p+1)}else N=a[d];c(N,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var c=a.i,d=new Ds;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),tp(this,d),this.m=a.m}else a&&(c=String(a).match(ep))?(this.h=!1,ua(this,c[1]||"",!0),this.o=xs(c[2]||""),this.g=xs(c[3]||"",!0),ca(this,c[4]),this.l=xs(c[5]||"",!0),tp(this,c[6]||"",!0),this.m=xs(c[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}Vr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ns(c,np,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ns(c,np,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?s0:i0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,a0)),a.join("")};function wn(a){return new Vr(a)}function ua(a,c,d){a.j=d?xs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function tp(a,c,d){c instanceof Ds?(a.i=c,l0(a.i,a.h)):(d||(c=Ns(c,o0)),a.i=new Ds(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function ha(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,r0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function r0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var np=/[#\/\?@]/g,i0=/[#\?:]/g,s0=/[#\?]/g,o0=/[#\?@]/g,a0=/#/g;function Ds(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&n0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ds.prototype,t.add=function(a,c){Gn(this),this.i=null,a=pi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function rp(a,c){Gn(a),c=pi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ip(a,c){return Gn(a),c=pi(a,c),a.g.has(c)}t.forEach=function(a,c){Gn(this),this.g.forEach(function(d,p){d.forEach(function(x){a.call(c,x,p,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const x=a[p];for(let N=0;N<x.length;N++)d.push(c[p])}return d},t.V=function(a){Gn(this);let c=[];if(typeof a=="string")ip(this,a)&&(c=c.concat(this.g.get(pi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Gn(this),this.i=null,a=pi(this,a),ip(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sp(a,c,d){rp(a,c),0<d.length&&(a.i=null,a.g.set(pi(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var x=N;z[p]!==""&&(x+="="+encodeURIComponent(String(z[p]))),a.push(x)}}return this.i=a.join("&")};function pi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function l0(a,c){c&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,p){var x=p.toLowerCase();p!=x&&(rp(this,p),sp(this,x,d))},a)),a.j=c}function u0(a,c){const d=new Ps;if(l.Image){const p=new Image;p.onload=k(qn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=k(qn,d,"TestLoadImage: error",!1,c,p),p.onabort=k(qn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=k(qn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function c0(a,c){const d=new Ps,p=new AbortController,x=setTimeout(()=>{p.abort(),qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(x),N.ok?qn(d,"TestPingServer: ok",!0,c):qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),qn(d,"TestPingServer: error",!1,c)})}function qn(a,c,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function h0(){this.g=new qt}function d0(a,c,d){const p=d||"";try{Zf(a,function(x,N){let z=x;h(x)&&(z=hi(x)),c.push(p+N+"="+encodeURIComponent(z))})}catch(x){throw c.push(p+"type="+encodeURIComponent("_badmap")),x}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}R(da,Ss),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,c){Y.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fa,Y),t=fa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?bs(this):Vs(this),this.readyState==3&&op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ap(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ap(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function Pe(a){Y.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Pe,Y);var f0=/^https?$/i,p0=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?Mf(this.o):Mf(Bu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){lp(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(p0,c,void 0))||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){lp(this,N)}};function lp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,up(a),pa(a)}function up(a){a.A||(a.A=!0,ne(a,"complete"),ne(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ne(this,"complete"),ne(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cp(this):this.bb())},t.bb=function(){cp(this)};function cp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Me(a.Ea,0,a);else if(ne(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=z===0){var x=String(a.D).match(ep)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),p=!f0.test(x?x.toLowerCase():"")}d=p}if(d)ne(a,"complete"),ne(a,"success");else{a.m=6;try{var N=2<Tn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",up(a)}}finally{pa(a)}}}}function pa(a,c){if(a.g){hp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ne(a,"ready");try{d.onreadystatechange=p}catch{}}}function hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),di(c)}};function dp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function m0(a){const c={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(v(a[p]))continue;var d=C(a[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[x]||[];c[x]=N,N.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function fp(a){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,a),this.cb=Os("retryDelaySeedMs",1e4,a),this.Wa=Os("forwardChannelMaxRetries",2,a),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kf(a&&a.concurrentRequestLimit),this.Da=new h0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){ht(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Tp(this,null,this.W),ga(this)};function Xu(a){if(pp(a),a.G==3){var c=a.U++,d=wn(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),Ms(a,d),c=new Hn(a,a.j,c),c.L=2,c.v=ha(wn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ip(c.j,null),c.g.ea(c.v)),c.F=Date.now(),la(c)}wp(a)}function ma(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function pp(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!Qf(a.h)&&!a.s){a.s=!0;var c=a.Ga;$t||K(),B||($t(),B=!0),X.add(c,a),a.B=0}}function g0(a,c){return Xf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(y(a.Ga,a,c),Ep(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Hn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(x.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=gp(this,x,c),d=wn(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Ms(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(ap(N)))+"&"+c:this.m&&Qu(d,this.m,N)),Ku(this.h,x),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),x.T=!0,Hu(x,d,null)):Hu(x,d,c),this.G=2}}else this.G==3&&(a?mp(this,a):this.i.length==0||Qf(this.h)||mp(this))};function mp(a,c){var d;c?d=c.l:d=a.U++;const p=wn(a.I);ye(p,"SID",a.K),ye(p,"RID",d),ye(p,"AID",a.T),Ms(a,p),a.m&&a.o&&Qu(p,a.m,a.o),d=new Hn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=gp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ku(a.h,d),Hu(d,p,c)}function Ms(a,c){a.H&&U(a.H,function(d,p){ye(c,p,d)}),a.l&&Zf({},function(d,p){ye(c,p,d)})}function gp(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var x=a.i;let N=-1;for(;;){const z=["count="+d];N==-1?0<d?(N=x[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let pe=!0;for(let qe=0;qe<d;qe++){let ce=x[qe].g;const et=x[qe].map;if(ce-=N,0>ce)N=Math.max(0,x[qe].g-100),pe=!1;else try{d0(et,z,"req"+ce+"_")}catch{p&&p(et)}}if(pe){p=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;$t||K(),B||($t(),B=!0),X.add(c,a),a.v=0}}function Yu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(y(a.Fa,a),Ep(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),ma(this),vp(this))};function Ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function vp(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=wn(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),Ms(a,c),a.m&&a.o&&Qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ha(wn(c)),d.m=null,d.P=!0,Gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),Yu(this),ht(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _p(a,c){var d=null;if(a.g==c){ya(a),Ju(a),a.g=null;var p=2}else if(Wu(a.h,c))d=c.D,Yf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;p=sa(),ne(p,new jf(p,d)),ga(a)}else yp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(p==1&&g0(a,c)||p==2&&Yu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Ep(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Or(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const x=!p;p=new Vr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(p,"https"),ha(p),x?u0(p.toString(),d):c0(p.toString(),d)}else ht(2);a.G=0,a.l&&a.l.sa(c),wp(a),pp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function wp(a){if(a.G=0,a.ka=[],a.l){const c=Jf(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,d){var p=d instanceof Vr?wn(d):new Vr(d);if(p.g!="")c&&(p.g=c+"."+p.g),ca(p,p.s);else{var x=l.location;p=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var N=new Vr(null);p&&ua(N,p),c&&(N.g=c),x&&ca(N,x),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ye(p,d,c),ye(p,"VER",a.la),Ms(a,p),p}function Ip(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new da({eb:d})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function va(){}va.prototype.g=function(a,c){return new At(a,c)};function At(a,c){Y.call(this),this.g=new fp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new mi(this)}R(At,Y),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Xu(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=hi(a),a=d);c.i.push(new Zw(c.Ya++,a)),c.G==3&&ga(c)},At.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,At.aa.N.call(this)};function Ap(a){zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(Ap,zu);function Cp(){ju.call(this),this.status=1}R(Cp,ju);function mi(a){this.g=a}R(mi,Sp),mi.prototype.ua=function(){ne(this.g,"a")},mi.prototype.ta=function(a){ne(this.g,new Ap(a))},mi.prototype.sa=function(a){ne(this.g,new Cp)},mi.prototype.ra=function(){ne(this.g,"b")},va.prototype.createWebChannel=va.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,TE=function(){return new va},wE=function(){return sa()},EE=Dr,Fh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,al=oa,Bf.COMPLETE="complete",_E=Bf,Lf.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",Y.prototype.listen=Y.prototype.K,Qs=Lf,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,vE=Pe}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});const mg="@firebase/firestore",gg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Kd("@firebase/firestore");function vi(){return ti.logLevel}function $(t,...e){if(ti.logLevel<=se.DEBUG){const n=e.map(af);ti.debug(`Firestore (${ds}): ${t}`,...n)}}function zn(t,...e){if(ti.logLevel<=se.ERROR){const n=e.map(af);ti.error(`Firestore (${ds}): ${t}`,...n)}}function wr(t,...e){if(ti.logLevel<=se.WARN){const n=e.map(af);ti.warn(`Firestore (${ds}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,IE(t,r,n)}function IE(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||IE(e,i,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class MC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LC{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new SE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class FC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new FC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=jC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Uh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return re(r,i);{const s=AE(),o=BC(s.encode(vg(t,n)),s.encode(vg(e,n)));return o!==0?o:re(r,i)}}n+=r>65535?2:1}return re(t.length,e.length)}function vg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function BC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return re(t[n],e[n]);return re(t.length,e.length)}function ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),i=ln.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Uh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yr.fromString(e.substring(4,e.length-2))}}class _e extends ln{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const $C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends ln{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return $C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_g}static keyField(){return new Qe([_g])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(_e.fromString(e))}static fromName(e){return new W(_e.fromString(e).popFirst(5))}static empty(){return new W(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new _e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HC(t,e,n,r){if(e===!0&&r===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Eg(t){if(!W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wg(t){if(W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function uf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Hi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uf(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!kE(t))throw new q(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ig);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tg)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Oe("string",Ee._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ee(0,0))}static max(){return new ee(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=-1;function GC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Tr(i,W.empty(),e)}function qC(t){return new Tr(t.readTime,t.key,Vo)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(ee.min(),W.empty(),Vo)}static max(){return new Tr(ee.max(),W.empty(),Vo)}}function WC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==KC)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function XC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ps(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Iu.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-1;function Su(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function YC(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="";function JC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=ZC(t.get(n),e);return Sg(e)}function ZC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case PE:n+="";break;default:n+=s}}return n}function Sg(t){return t+PE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ua(this.root,e,this.comparator,!0)}}class Ua{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xE("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=ek.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="server_timestamp",DE="__type__",bE="__previous_value__",VE="__local_write_time__";function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[DE])===null||n===void 0?void 0:n.stringValue)===NE}function Au(t){const e=t.mapValue.fields[bE];return hf(e)?Au(e):e}function Oo(t){const e=Ir(t.mapValue.fields[VE].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ql="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||ql}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===ql}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="__type__",nk="__max__",za={mapValue:{}},ME="__vector__",Wl="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:ik(t)?9007199254740991:rk(t)?10:11:Q(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ir(i.timestampValue),l=Ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sr(i.bytesValue).isEqual(Sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ag(o)!==Ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return kg(t.timestampValue,e.timestampValue);case 4:return kg(Oo(t),Oo(e));case 5:return Uh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Sr(s),u=Sr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=re(l[h],u[h]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Ne(s.latitude),Ne(o.latitude));return l!==0?l:re(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},k=(l=m[Wl])===null||l===void 0?void 0:l.arrayValue,R=(u=y[Wl])===null||u===void 0?void 0:u.arrayValue,D=re(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Pg(k,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===za.mapValue&&o===za.mapValue)return 0;if(s===za.mapValue)return 1;if(o===za.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=Uh(u[m],f[m]);if(y!==0)return y;const k=ns(l[u[m]],h[f[m]]);if(k!==0)return k}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{le:n})}}function kg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Ir(t),r=Ir(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Pg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ns(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function rs(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zh(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function ll(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Au(t);return e?16+ll(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ll(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return si(r.fields,(s,o)=>{i+=s.length+ll(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function jh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function Rg(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function rk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[OE])===null||n===void 0?void 0:n.stringValue)===ME}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ik(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(co(this.value))}}function LE(t){const e=[];return si(t.fields,(n,r)=>{const i=new Qe([n]);if(ul(r)){const s=LE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,ee.min(),ee.min(),ee.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,ee.min(),ee.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,ee.min(),ee.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function sk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{}class Fe extends FE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ak(e,n,r):n==="array-contains"?new ck(e,r):n==="in"?new hk(e,r):n==="not-in"?new dk(e,r):n==="array-contains-any"?new fk(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lk(e,r):new uk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ns(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends FE{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new _n(e,n)}matches(e){return UE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function UE(t){return t.op==="and"}function zE(t){return ok(t)&&UE(t)}function ok(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Bh(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(zE(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&vn(r.value,i.value)}(t,e):t instanceof _n?function(r,i){return i instanceof _n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&jE(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function BE(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(BE).join(" ,")+"}"}(t):"Filter"}class ak extends Fe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class lk extends Fe{constructor(e,n){super(e,"in",n),this.keys=$E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uk extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=$E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class ck extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&Lo(n.arrayValue,this.value)}}class hk extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class dk extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class fk extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function bg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pk(t,e,n,r,i,s,o)}function ff(t){const e=te(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.Pe=n}return e.Pe}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function $h(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mk(t,e,n,r,i,s,o,l){return new Cu(t,e,n,r,i,s,o,l)}function mf(t){return new Cu(t)}function Vg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gk(t){return t.collectionGroup!==null}function ho(t){const e=te(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Ql(s,r))}),n.has(Qe.keyField().canonicalString())||e.Te.push(new Ql(Qe.keyField(),r))}return e.Te}function pn(t){const e=te(t);return e.Ie||(e.Ie=yk(e,ho(t))),e.Ie}function yk(t,e){if(t.limitType==="F")return bg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ql(i.field,s)});const n=t.endAt?new Kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kl(t.startAt.position,t.startAt.inclusive):null;return bg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e,n){return new Cu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return pf(pn(t),pn(e))&&t.limitType===e.limitType}function HE(t){return`${ff(pn(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BE(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>rs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>rs(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ho(r),i)||r.endAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ho(r),i))}(t,e)}function vk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GE(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=_k(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function _k(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ns(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new ke(W.comparator);function jn(){return Ek}const qE=new ke(W.comparator);function Xs(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function WE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return fo()}function KE(){return fo()}function fo(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const wk=new ke(W.comparator),Tk=new je(W.comparator);function oe(...t){let e=Tk;for(const n of t)e=e.add(n);return e}const Ik=new je(re);function Sk(){return Ik}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function QE(t){return{integerValue:""+t}}function Ak(t,e){return YC(e)?QE(e):gf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this._=void 0}}function Ck(t,e,n){return t instanceof Xl?function(i,s){const o={fields:{[DE]:{stringValue:NE},[VE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=Au(s)),s&&(o.fields[bE]=s),{mapValue:o}}(n,e):t instanceof Fo?YE(t,e):t instanceof Uo?JE(t,e):function(i,s){const o=XE(i,s),l=Og(o)+Og(i.Ee);return jh(o)&&jh(i.Ee)?QE(l):gf(i.serializer,l)}(t,e)}function kk(t,e,n){return t instanceof Fo?YE(t,e):t instanceof Uo?JE(t,e):n}function XE(t,e){return t instanceof Yl?function(r){return jh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xl extends Ru{}class Fo extends Ru{constructor(e){super(),this.elements=e}}function YE(t,e){const n=ZE(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Ru{constructor(e){super(),this.elements=e}}function JE(t,e){let n=ZE(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class Yl extends Ru{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Og(t){return Ne(t.integerValue||t.doubleValue)}function ZE(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Pk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?ts(r.elements,i.elements,vn):r instanceof Yl&&i instanceof Yl?vn(r.Ee,i.Ee):r instanceof Xl&&i instanceof Xl}(t.transform,e.transform)}class Rk{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function ew(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nw(t.key,Nn.none()):new Zo(t.key,t.data,Nn.none());{const n=t.data,r=Mt.empty();let i=new je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Zt(i.toArray()),Nn.none())}}function xk(t,e,n){t instanceof Zo?function(i,s,o){const l=i.value.clone(),u=Lg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(tw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof Zo?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=s.value.clone(),f=Fg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,l,u){if(!cl(s.precondition,o))return l;const h=Fg(s.fieldTransforms,u,o),f=o.data;return f.setAll(tw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Nk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XE(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ts(r,i,(s,o)=>Pk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lg(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kk(o,l,n[i]))}return r}function Fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ck(s,o,e))}return r}class nw extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dk extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ew(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return wk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,le;function Mk(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function rw(t){if(t===void 0)return zn("GRPC error has no .code"),M.UNKNOWN;switch(t){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(le=be||(be={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new yr([4294967295,4294967295],0);function Ug(t){const e=AE().encode(t),n=new yE;return n.update(e),new Uint8Array(n.digest())}function zg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new yr([n,r],0),new yr([i,s],0)]}class vf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ys(`Invalid padding: ${n}`);if(r<0)throw new Ys(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ys(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ys(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=yr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(yr.fromNumber(r)));return i.compare(Lk)===1&&(i=new yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ug(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Ug(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ys extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nu(ee.min(),i,new ke(re),jn(),oe())}}class ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class iw{constructor(e,n){this.targetId=e,this.De=n}}class sw{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jg{constructor(){this.ve=0,this.Ce=Bg(),this.Fe=Je.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),n=oe(),r=oe();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new ea(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Bg()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fk{constructor(e){this.We=e,this.Ge=new Map,this.ze=jn(),this.je=ja(),this.Je=ja(),this.He=new ke(re)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new W(s.path);this.Xe(n,o,at.newNoDocument(o,ee.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(u){if(u instanceof xE)return wr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vf(o,i,s)}catch(u){return wr(u instanceof Ys?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&$h(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,at.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=oe();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Nu(e,n,this.He,this.ze,r);return this.ze=jn(),this.je=ja(),this.Je=ja(),this.He=new ke(re),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new jg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new je(re),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new je(re),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new jg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ja(){return new ke(W.comparator)}function Bg(){return new ke(W.comparator)}const Uk={asc:"ASCENDING",desc:"DESCENDING"},zk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jk={and:"AND",or:"OR"};class Bk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $k(t,e){return Jl(t,e.toTimestamp())}function mn(t){return he(!!t,49232),ee.fromTimestamp(function(n){const r=Ir(n);return new Ee(r.seconds,r.nanos)}(t))}function _f(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aw(t){const e=_e.fromString(t);return he(dw(e),10190,{key:e.toString()}),e}function Wh(t,e){return _f(t.databaseId,e.path)}function bc(t,e){const n=aw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(uw(n))}function lw(t,e){return _f(t.databaseId,e)}function Hk(t){const e=aw(t);return e.length===4?_e.emptyPath():uw(e)}function Kh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $g(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function Gk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string",58123),Je.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:rw(h.code);return new q(f,h.message||"")}(o);n=new sw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bc(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):ee.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new hl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bc(t,r.document),s=r.readTime?mn(r.readTime):ee.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bc(t,r.document),s=r.removedTargetIds||[];n=new hl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ok(i,s),l=r.targetId;n=new iw(l,o)}}return n}function qk(t,e){let n;if(e instanceof Zo)n={update:$g(t,e.key,e.value)};else if(e instanceof nw)n={delete:Wh(t,e.key)};else if(e instanceof ai)n={update:$g(t,e.key,e.data),updateMask:tP(e.fieldMask)};else{if(!(e instanceof Dk))return Q(16599,{Rt:e.type});n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$k(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function Wk(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(ee.min())&&(o=mn(s)),new Rk(o,i.transformResults||[])}(n,e))):[]}function Kk(t,e){return{documents:[lw(t,e.path)]}}function Qk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lw(t,i);const s=function(h){if(h.length!==0)return hw(_n.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ei(y.field),direction:Jk(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function Xk(t){let e=Hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=cw(m);return y instanceof _n&&zE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(R){return new Ql(wi(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Su(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,k=m.values||[];return new Kl(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,k=m.values||[];return new Kl(k,y)}(n.endAt)),mk(e,i,o,s,l,"F",u,h)}function Yk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>cw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function Jk(t){return Uk[t]}function Zk(t){return zk[t]}function eP(t){return jk[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function wi(t){return Qe.fromServerFormat(t.fieldPath)}function hw(t){return t instanceof Fe?function(n){if(n.op==="=="){if(xg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(Rg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(Rg(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:Zk(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(i=>hw(i));return r.length===1?r[0]:{compositeFilter:{op:eP(n.op),filters:r}}}(t):Q(54877,{filter:t})}function tP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.gt=e}}function rP(t){const e=Xk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.Dn=new sP}addToCollectionParentIndex(e,n){return this.Dn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Tr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class sP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fw=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(fw,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new is(0)}static ur(){return new is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="LruGarbageCollector",oP=1048576;function qg([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class aP{constructor(e){this.Tr=e,this.buffer=new je(qg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(Gg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ps(n)?$(Gg,"Ignoring IndexedDB error during garbage collection: ",n):await fs(n)}await this.Rr(3e5)})}}class uP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Iu.ue);const r=new aP(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Hg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),vi()<=se.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function cP(t,e){return new uP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,Zt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=jn();const o=fo(),l=function(){return fo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ai)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),po(f.mutation,h,f.mutation.getFieldMask(),Ee.now())):o.set(h.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new dP(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new ke((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Zt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=KE();f.forEach(y=>{if(!s.has(y)){const k=ew(n.get(y),r.get(y));k!==null&&m.set(y,k),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Br());let l=Vo,u=s;return o.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:l,changes:WE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new Cu(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=Xs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&po(f.mutation,h,Zt.empty(),Ee.now()),Pu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return V.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:rP(i.bundledQuery),readTime:mn(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.overlays=new ke(W.comparator),this.kr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Br(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vk(n,r));let s=this.kr.get(n);s===void 0&&(s=oe(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.qr=new je(Be.Qr),this.$r=new je(Be.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new W(new _e([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new W(new _e([])),r=new Be(n,e),i=new Be(n,e+1);let s=oe();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return W.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new je(Be.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?cf:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(re);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Be(new W(s),0);let l=new je(re);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),V.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.ni=e,this.docs=function(){return new ke(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||WC(qC(f),r)<=0||(i.has(f.key)||Pu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ri(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _P(this)}getSize(e){return V.resolve(this.size)}}class _P extends hP{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.persistence=e,this.ii=new oi(n=>ff(n),pf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Ef,this.targetCount=0,this._i=is.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),V.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new is(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.hr(n),V.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.ai={},this.overlays={},this.ui=new Iu(0),this.ci=!1,this.ci=!0,this.li=new gP,this.referenceDelegate=e(this),this.hi=new EP(this),this.indexManager=new iP,this.remoteDocumentCache=function(i){return new vP(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new nP(n),this.Ti=new pP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new yP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new wP(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class wP extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Ai=new Ef,this.Ri=null}static Vi(e){return new wf(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{const i=W.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return V.or([()=>V.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Zl{constructor(e,n){this.persistence=e,this.gi=new oi(r=>JC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=cP(this,n)}static Vi(e,n){return new Zl(e,n)}Ii(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),V.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ll(e.data.value)),n}Sr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return fI()?8:XC(ut())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new TP;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(vi()<=se.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(vi()<=se.DEBUG&&$("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(vi()<=se.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):V.resolve())}ps(e,n){if(Vg(n))return V.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Hh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Vg(n)||i.isEqual(ee.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?V.resolve(null):(vi()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.vs(e,o,n,GC(i,Vo)).next(l=>l))})}bs(e,n){let r=new je(GE(e));return n.forEach((i,s)=>{Pu(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return vi()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",_i(n)),this.gs.getDocumentsMatchingQuery(e,n,Tr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="LocalStore",SP=3e8;class AP{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new ke(re),this.Ms=new oi(s=>ff(s),pf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function CP(t,e,n,r){return new AP(t,e,n,r)}async function mw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function kP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let k=V.resolve();return y.forEach(R=>{k=k.next(()=>f.getEntry(u,R)).next(D=>{const O=h.docVersions.get(R);he(O!==null,48541),D.version.compareTo(O)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function PP(t,e){const n=te(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,m)));let k=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(Je.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(D,O,I){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=SP?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,k,f)&&l.push(n.hi.updateTargetData(s,k))});let u=jn(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(RP(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(ee.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function RP(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(If,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function xP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=cf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=te(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ps(o))throw o;$(If,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Wg(t,e,n){const r=te(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=te(u),y=m.Ms.get(f);return y!==void 0?V.resolve(m.Fs.get(y)):m.hi.getTargetData(h,f)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(l=>(DP(r,vk(e),l),{documents:l,qs:s})))}function DP(t,e,n){let r=t.xs.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Kg{constructor(){this.activeTargetIds=Sk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bP{constructor(){this.Fo=new Kg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="ConnectivityMonitor";class Xg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function Xh(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="RestConnection",OP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===ql?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Xh(),l=this.Go(e,n.toUriEncodedString());$(Vc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=us(h);return this.jo(e,l,u,r,f).then(m=>($(Vc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw wr(Vc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=OP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class FP extends MP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Xh();return new Promise((l,u)=>{const h=new vE;h.setWithCredentials(!0),h.listenOnce(_E.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case al.NO_ERROR:const m=h.getResponseJson();$(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case al.TIMEOUT:$(it,`RPC '${e}' ${o} timed out`),u(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const y=h.getStatus();if($(it,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const R=k==null?void 0:k.error;if(R&&R.status&&R.message){const D=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(R.status);u(new q(D,R.message))}else u(new q(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{$(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(it,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Xh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=TE(),l=wE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(it,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let y=!1,k=!1;const R=new LP({Ho:O=>{k?$(it,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||($(it,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),$(it,`RPC '${e}' stream ${i} sending:`,O),m.send(O))},Yo:()=>m.close()}),D=(O,I,v)=>{O.listen(I,A=>{try{v(A)}catch(b){setTimeout(()=>{throw b},0)}})};return D(m,Qs.EventType.OPEN,()=>{k||($(it,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),D(m,Qs.EventType.CLOSE,()=>{k||(k=!0,$(it,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(m))}),D(m,Qs.EventType.ERROR,O=>{k||(k=!0,wr(it,`RPC '${e}' stream ${i} transport errored. Name:`,O.name,"Message:",O.message),R.__(new q(M.UNAVAILABLE,"The operation could not be completed")))}),D(m,Qs.EventType.MESSAGE,O=>{var I;if(!k){const v=O.data[0];he(!!v,16349);const A=v,b=(A==null?void 0:A.error)||((I=A[0])===null||I===void 0?void 0:I.error);if(b){$(it,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let U=function(_){const w=be[_];if(w!==void 0)return rw(w)}(j),E=b.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+j+" with message "+b.message),k=!0,R.__(new q(U,E)),m.close()}else $(it,`RPC '${e}' stream ${i} received:`,v),R.a_(v)}}),D(l,EE.STAT_EVENT,O=>{O.stat===Fh.PROXY?$(it,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Fh.NOPROXY&&$(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new Bk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="PersistentStream";class vw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new yw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():($(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UP extends vw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Gk(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?mn(o.readTime):ee.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=$h(u)?{documents:Kk(s,u)}:{query:Qk(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ow(s,o.resumeToken);const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Jl(s,o.snapshotVersion.toTimestamp());const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Yk(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.k_(n)}}class zP extends vw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Wk(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Kh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qk(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{}class BP extends jP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(M.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class $P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zn(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="RemoteStore";class HP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{li(this)&&($(ni,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.Ia.add(4),await ta(h),h.Aa.set("Unknown"),h.Ia.delete(4),await bu(h)}(this))})}),this.Aa=new $P(r,i)}}async function bu(t){if(li(t))for(const e of t.da)await e(!0)}async function ta(t){for(const e of t.da)await e(!1)}function _w(t,e){const n=te(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),kf(n)?Cf(n):ms(n).x_()&&Af(n,e))}function Sf(t,e){const n=te(t),r=ms(n);n.Ta.delete(e),r.x_()&&Ew(n,e),n.Ta.size===0&&(r.x_()?r.B_():li(n)&&n.Aa.set("Unknown"))}function Af(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).H_(e)}function Ew(t,e){t.Ra.$e(e),ms(t).Y_(e)}function Cf(t){t.Ra=new Fk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.Aa.aa()}function kf(t){return li(t)&&!ms(t).M_()&&t.Ta.size>0}function li(t){return te(t).Ia.size===0}function ww(t){t.Ra=void 0}async function GP(t){t.Aa.set("Online")}async function qP(t){t.Ta.forEach((e,n)=>{Af(t,e)})}async function WP(t,e){ww(t),kf(t)?(t.Aa.la(e),Cf(t)):t.Aa.set("Unknown")}async function KP(t,e,n){if(t.Aa.set("Online"),e instanceof sw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){$(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof hl?t.Ra.Ye(e):e instanceof iw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ee.min()))try{const r=await gw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(Je.EMPTY_BYTE_STRING,f.snapshotVersion)),Ew(s,u);const m=new sr(f.target,u,h,f.sequenceNumber);Af(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ni,"Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!ps(e))throw e;t.Ia.add(1),await ta(t),t.Aa.set("Offline"),n||(n=()=>gw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ni,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await bu(t)})}function Tw(t,e){return e().catch(n=>eu(t,n,e))}async function Vu(t){const e=te(t),n=Cr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:cf;for(;QP(e);)try{const i=await xP(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,XP(e,i)}catch(i){await eu(e,i)}Iw(e)&&Sw(e)}function QP(t){return li(t)&&t.Pa.length<10}function XP(t,e){t.Pa.push(e);const n=Cr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Iw(t){return li(t)&&!Cr(t).M_()&&t.Pa.length>0}function Sw(t){Cr(t).start()}async function YP(t){Cr(t).na()}async function JP(t){const e=Cr(t);for(const n of t.Pa)e.X_(n.mutations)}async function ZP(t,e,n){const r=t.Pa.shift(),i=yf.from(r,e,n);await Tw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vu(t)}async function e2(t,e){e&&Cr(t).Z_&&await async function(r,i){if(function(o){return Mk(o)&&o!==M.ABORTED}(i.code)){const s=r.Pa.shift();Cr(r).N_(),await Tw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vu(r)}}(t,e),Iw(t)&&Sw(t)}async function Jg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),$(ni,"RemoteStore received new credentials");const r=li(n);n.Ia.add(3),await ta(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await bu(n)}async function t2(t,e){const n=te(t);e?(n.Ia.delete(2),await bu(n)):e||(n.Ia.add(2),await ta(n),n.Aa.set("Unknown"))}function ms(t){return t.Va||(t.Va=function(n,r,i){const s=te(n);return s.ia(),new UP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:GP.bind(null,t),e_:qP.bind(null,t),n_:WP.bind(null,t),J_:KP.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),kf(t)?Cf(t):t.Aa.set("Unknown")):(await t.Va.stop(),ww(t))})),t.Va}function Cr(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.ia(),new zP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:YP.bind(null,t),n_:e2.bind(null,t),ea:JP.bind(null,t),ta:ZP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Vu(t)):(await t.ma.stop(),t.Pa.length>0&&($(ni,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(t,e){if(zn("AsyncQueue",`${e}: ${t}`),ps(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static emptySet(e){return new Gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.fa=new ke(W.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Q(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ss(e,n,Gi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class r2{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=ey(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function ey(){return new oi(t=>HE(t),ku)}async function i2(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new n2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Rf(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&xf(n)}async function s2(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function o2(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&xf(n)}function a2(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function xf(t){t.Da.forEach(e=>{e.next()})}var Yh,ty;(ty=Yh||(Yh={})).Fa="default",ty.Cache="cache";class l2{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.key=e}}class Cw{constructor(e){this.key=e}}class u2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=GE(e),this.eu=new Gi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Zg,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),k=Pu(this.query,m)?m:null,R=!!y&&this.mutatedKeys.has(y.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;y&&k?y.data.isEqual(k.data)?R!==D&&(r.track({type:3,doc:k}),O=!0):this.iu(y,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Xa(k,u)>0||h&&this.Xa(k,h)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),O=!0):y&&!k&&(r.track({type:1,doc:y}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(k,R){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:O})}};return D(k)-D(R)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new ss(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=oe(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new Cw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Aw(r))}),n}uu(e){this.Ha=e.qs,this.Za=oe();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ss.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nf="SyncEngine";class c2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class h2{constructor(e){this.key=e,this.lu=!1}}class d2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new oi(l=>HE(l),ku),this.Tu=new Map,this.Iu=new Set,this.du=new ke(W.comparator),this.Eu=new Map,this.Au=new Ef,this.Ru={},this.Vu=new Map,this.mu=is.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function f2(t,e,n=!0){const r=Dw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await kw(r,e,n,!0),i}async function p2(t,e){const n=Dw(t);await kw(n,e,!0,!1)}async function kw(t,e,n,r){const i=await NP(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await m2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_w(t.remoteStore,i),l}async function m2(t,e,n,r,i){t.gu=(m,y,k)=>async function(D,O,I,v){let A=O.view.nu(I);A.Ds&&(A=await Wg(D.localStore,O.query,!1).then(({documents:E})=>O.view.nu(E,A)));const b=v&&v.targetChanges.get(O.targetId),j=v&&v.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(A,D.isPrimaryClient,b,j);return ry(D,O.targetId,U._u),U.snapshot}(t,m,y,k);const s=await Wg(t.localStore,e,!0),o=new u2(e,s.qs),l=o.nu(s.documents),u=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ry(t,n,h._u);const f=new c2(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function g2(t,e,n){const r=te(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!ku(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),Jh(r,i.targetId)}).catch(fs)):(Jh(r,i.targetId),await Qh(r.localStore,i.targetId,!0))}async function y2(t,e){const n=te(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function v2(t,e,n){const r=A2(t);try{const i=await function(o,l){const u=te(o),h=Ee.now(),f=l.reduce((k,R)=>k.add(R.key),oe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let R=jn(),D=oe();return u.Os.getEntries(k,f).next(O=>{R=O,R.forEach((I,v)=>{v.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,R)).next(O=>{m=O;const I=[];for(const v of l){const A=Nk(v,m.get(v.key).overlayedDocument);A!=null&&I.push(new ai(v.key,A,LE(A.value.mapValue),Nn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,I,l)}).next(O=>{y=O;const I=O.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(k,O.batchId,I)})}).then(()=>({batchId:y.batchId,changes:WE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new ke(re)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await na(r,i.changes),await Vu(r.remoteStore)}catch(i){const s=Rf(i,"Failed to persist write");n.reject(s)}}async function Pw(t,e){const n=te(t);try{const r=await PP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?he(o.lu,14607):i.removedDocuments.size>0&&(he(o.lu,42227),o.lu=!1))}),await na(n,r,e)}catch(r){await fs(r)}}function ny(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.wa)y.va(l)&&(h=!0)}),h&&xf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _2(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ke(W.comparator);o=o.insert(s,at.newNoDocument(s,ee.min()));const l=oe().add(s),u=new Nu(ee.min(),new Map,new ke(re),o,l);await Pw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Df(r)}else await Qh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(fs)}async function E2(t,e){const n=te(t),r=e.batch.batchId;try{const i=await kP(n.localStore,e);xw(n,r,null),Rw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,i)}catch(i){await fs(i)}}async function w2(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(he(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);xw(r,e,n),Rw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,i)}catch(i){await fs(i)}}function Rw(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function xw(t,e,n){const r=te(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Nw(t,r)})}function Nw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Sf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Df(t))}function ry(t,e,n){for(const r of n)r instanceof Aw?(t.Au.addReference(r.key,e),T2(t,r)):r instanceof Cw?($(Nf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Nw(t,r.key)):Q(19791,{yu:r})}function T2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||($(Nf,"New document in limbo: "+n),t.Iu.add(r),Df(t))}function Df(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new W(_e.fromString(e)),r=t.mu.next();t.Eu.set(r,new h2(n)),t.du=t.du.insert(n,r),_w(t.remoteStore,new sr(pn(mf(n.path)),r,"TargetPurposeLimboResolution",Iu.ue))}}async function na(t,e,n){const r=te(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Tf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.Is,k=>f.persistence.referenceDelegate.addReference(m,y.targetId,k)).next(()=>V.forEach(y.ds,k=>f.persistence.referenceDelegate.removeReference(m,y.targetId,k)))))}catch(m){if(!ps(m))throw m;$(If,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const k=f.Fs.get(y),R=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(y,D)}}}(r.localStore,s))}async function I2(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){$(Nf,"User change. New user:",e.toKey());const r=await mw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new q(M.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.Bs)}}function S2(t,e){const n=te(t),r=n.Eu.get(e);if(r&&r.lu)return oe().add(r.key);{let i=oe();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Dw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_2.bind(null,e),e.hu.J_=o2.bind(null,e.eventManager),e.hu.pu=a2.bind(null,e.eventManager),e}function A2(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w2.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return CP(this.persistence,new IP,e.initialUser,this.serializer)}Du(e){return new pw(wf.Vi,this.serializer)}bu(e){return new bP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class C2 extends tu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){he(this.persistence.referenceDelegate instanceof Zl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new pw(r=>Zl.Vi(r,n),this.serializer)}}class Zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I2.bind(null,this.syncEngine),await t2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r2}()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=function(s){return new FP(s)}(e.databaseInfo);return function(s,o,l,u){return new BP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new HP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ny(this.syncEngine,n,0),function(){return Xg.C()?new Xg:new VP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new d2(i,s,o,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);$(ni,"RemoteStore shutting down."),s.Ia.add(5),await ta(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zh.provider={build:()=>new Zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="FirestoreClient";class P2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(kr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(kr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),$(kr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{wr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{wr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R2(t);$(kr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jg(e.remoteStore,i)),t._onlineComponents=e}async function R2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(kr,"Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wr("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new tu)}}else $(kr,"Using default OfflineComponentProvider"),await Mc(t,new C2(void 0));return t._offlineComponents}async function bw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(kr,"Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):($(kr,"Using default OnlineComponentProvider"),await iy(t,new Zh))),t._onlineComponents}function x2(t){return bw(t).then(e=>e.syncEngine)}async function sy(t){const e=await bw(t),n=e.eventManager;return n.onListen=f2.bind(null,e.syncEngine),n.onUnlisten=g2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=p2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=y2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firestore.googleapis.com",ay=!0;class ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ow,this.ssl=ay}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ay;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oP)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OC;switch(r.type){case"firstParty":return new UC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&($("ComponentProvider","Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function N2(t,e,n,r={}){var i;t=Hi(t,Ou);const s=us(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(D_(`https://${u}`),b_("Firestore",!0)),o.host!==Ow&&o.host!==u&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Jr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=st.MOCK_USER;else{f=iI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new st(y)}t._authCredentials=new MC(new SE(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mu(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Jo(n,ze._jsonSchema))return new ze(e,r||null,new W(_e.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Oe("string",ze._jsonSchemaVersion),referencePath:Oe("string")};class vr extends Mu{constructor(e,n,r){super(e,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new W(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function D2(t,e,...n){if(t=xt(t),CE("collection","path",e),t instanceof Ou){const r=_e.fromString(e,...n);return wg(r),new vr(t,null,r)}{if(!(t instanceof ze||t instanceof vr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return wg(r),new vr(t.firestore,null,r)}}function b2(t,e,...n){if(t=xt(t),arguments.length===1&&(e=lf.newId()),CE("doc","path",e),t instanceof Ou){const r=_e.fromString(e,...n);return Eg(r),new ze(t,null,new W(r))}{if(!(t instanceof ze||t instanceof vr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Eg(r),new ze(t.firestore,t instanceof vr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="AsyncQueue";class cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new yw(this,"async_queue_retry"),this.oc=()=>{const r=Oc();r&&$(uy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Gr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ps(e))throw e;$(uy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,zn("INTERNAL UNHANDLED ERROR: ",hy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:hy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function hy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class nu extends Ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function V2(t,e){const n=typeof t=="object"?t:L_(),r=typeof t=="string"?t:ql,i=Xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nI("firestore");s&&N2(i,...s)}return i}function Mw(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||O2(t),t._firestoreClient}function O2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new tk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Vw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new P2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Je.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Oe("string",Lt._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Oe("string",gn._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yn(e.vectorValues);throw new q(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Oe("string",yn._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=/^__.*__$/;class L2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}function Fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:t})}}class Vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ru(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Fw(this.Ec)&&M2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class F2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}Dc(e,n,r,i=!1){return new Vf({Ec:e,methodName:n,bc:r,path:Qe.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function U2(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new F2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z2(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Bw("Data must be an object, but it was:",o,r);const l=zw(r,o);let u,h;if(s.merge)u=new Zt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=j2(e,m,n);if(!o.contains(y))throw new q(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);$2(f,y)||f.push(y)}u=new Zt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new L2(new Mt(l),u,h)}function Uw(t,e){if(jw(t=xt(t)))return Bw("Unsupported field value:",e,t),zw(t,e);if(t instanceof Lw)return function(r,i){if(!Fw(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Uw(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ak(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:Jl(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(i.serializer,s)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:ow(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yn)return function(o,l){return{mapValue:{fields:{[OE]:{stringValue:ME},[Wl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return gf(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${uf(r)}`)}(t,e)}function zw(t,e){const n={};return RE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=Uw(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof gn||t instanceof Lt||t instanceof ze||t instanceof Lw||t instanceof yn)}function Bw(t,e,n){if(!jw(n)||!kE(n)){const r=uf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function j2(t,e,n){if((e=xt(e))instanceof bf)return e._internalPath;if(typeof e=="string")return $w(t,e);throw ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const B2=new RegExp("[~\\*/\\[\\]]");function $w(t,e,n){if(e.search(B2)>=0)throw ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bf(...e.split("."))._internalPath}catch{throw ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(M.INVALID_ARGUMENT,l+t+u)}function $2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H2 extends Hw{data(){return super.data()}}function Gw(t,e){return typeof e=="string"?$w(t,e):e instanceof bf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class q2{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Wl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new yn(s)}convertGeoPoint(e){return new gn(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);he(dw(r),9688,{name:e});const i=new Mo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends Hw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Oe("string",qr._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class dl extends qr{data(e={}){return super.data(e)}}class qi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new dl(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new dl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:K2(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function K2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}qi._jsonSchemaVersion="firestore/querySnapshot/1.0",qi._jsonSchema={type:Oe("string",qi._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class qw extends q2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function Q2(t,e,n){t=Hi(t,ze);const r=Hi(t.firestore,nu),i=W2(t.converter,e);return Y2(r,[z2(U2(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function X2(t,...e){var n,r,i;t=xt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dy(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof ze)h=Hi(t.firestore,nu),f=mf(t._key.path),u={next:m=>{e[o]&&e[o](J2(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Hi(t,Mu);h=Hi(m.firestore,nu),f=m._query;const y=new qw(h);u={next:k=>{e[o]&&e[o](new qi(h,y,m,k))},error:e[o+1],complete:e[o+2]},G2(t._query)}return function(y,k,R,D){const O=new k2(D),I=new l2(k,O,R);return y.asyncQueue.enqueueAndForget(async()=>i2(await sy(y),I)),()=>{O.Ou(),y.asyncQueue.enqueueAndForget(async()=>s2(await sy(y),I))}}(Mw(h),f,l,u)}function Y2(t,e){return function(r,i){const s=new Gr;return r.asyncQueue.enqueueAndForget(async()=>v2(await x2(r),i,s)),s.promise}(Mw(t),e)}function J2(t,e,n){const r=n.docs.get(e._key),i=new qw(t);return new qr(t,i,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ds=i})(cs),es(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new nu(new LC(r.getProvider("auth-internal")),new zC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),gr(mg,gg,e),gr(mg,gg,"esm2017")})();const iu={apiKey:"AIzaSyAbjoACLsTE9cNLC2Yapiwpusasmvk3Ts4",authDomain:"anamy-game.firebaseapp.com",projectId:"anamy-game",storageBucket:"anamy-game.firebasestorage.app",messagingSenderId:"636328473455",appId:"1:636328473455:web:0c342767eca09ed5e96e9a",measurementId:"G-HGR6KHMVQ0"},Of=!!(iu.apiKey&&iu.projectId),fy=iu.projectId||"anamy-game-local",Ww=Of?M_(iu):null,$a=Of?bC(Ww):null,Ha=Of?V2(Ww):null,Z2=[{id:"head-1",category:"Head",num:1,nameEn:"Sphenoid",imageUrl:"/bones/Head/IMG_2251.PNG",viewType:"head-lateral",svgTarget:"sphenoid"},{id:"head-2",category:"Head",num:2,nameEn:"Ethmoid",imageUrl:"/bones/Head/IMG_2252.PNG",viewType:"head-anterior",svgTarget:"ethmoid"},{id:"head-3",category:"Head",num:3,nameEn:"Maxilla",imageUrl:"/bones/Head/IMG_2254.PNG",viewType:"head-anterior",svgTarget:"maxillary"},{id:"head-4",category:"Head",num:4,nameEn:"Zygomatic",imageUrl:"/bones/Head/IMG_2255.PNG",viewType:"head-anterior",svgTarget:"zygomatic"},{id:"head-5",category:"Head",num:5,nameEn:"Mandible",imageUrl:"/bones/Head/IMG_2256.PNG",viewType:"head-anterior",svgTarget:"mandible"},{id:"head-6",category:"Head",num:6,nameEn:"Frontal",imageUrl:"/bones/Head/IMG_2257.PNG",viewType:"head-anterior",svgTarget:"frontal"},{id:"head-7",category:"Head",num:7,nameEn:"Temporal",imageUrl:"/bones/Head/IMG_2258.PNG",viewType:"head-lateral",svgTarget:"temporal"},{id:"head-8",category:"Head",num:8,nameEn:"Parietal",imageUrl:"/bones/Head/IMG_2259.PNG",viewType:"head-lateral",svgTarget:"parietal"},{id:"head-9",category:"Head",num:9,nameEn:"Occipital",imageUrl:"/bones/Head/IMG_2260.PNG",viewType:"head-lateral",svgTarget:"occipital"},{id:"head-10",category:"Head",num:10,nameEn:"Hyoid",imageUrl:"/bones/Head/IMG_2261.PNG",viewType:"head-anterior",svgTarget:"hyoid"},{id:"head-11",category:"Head",num:11,nameEn:"Nasal",imageUrl:"/bones/Head/IMG_2263.PNG",viewType:"head-inferior",svgTarget:"nasal"},{id:"head-12",category:"Head",num:12,nameEn:"Vomer",imageUrl:"/bones/Head/IMG_2264.PNG",viewType:"head-anterior",svgTarget:"vomer"},{id:"head-13",category:"Head",num:13,nameEn:"Lacrimal",imageUrl:"/bones/Head/IMG_2268.PNG",viewType:"head-anterior",svgTarget:"lacrimal"},{id:"head-14",category:"Head",num:14,nameEn:"Nasal concha(turbinate)",imageUrl:"/bones/Head/IMG_2269.PNG",viewType:"head-anterior",svgTarget:"concha"},{id:"head-15",category:"Head",num:15,nameEn:"Palatine",imageUrl:"/bones/Head/IMG_2270.PNG",viewType:"head-anterior",svgTarget:"palatine"},{id:"thoracic trunk-1",category:"Thoracic trunk",num:1,nameEn:"Sternum",imageUrl:"/bones/Thoracic trunk/IMG_3984.PNG",viewType:"thoracic trunk",svgTarget:"sternum"},{id:"thoracic trunk-2",category:"Thoracic trunk",num:2,nameEn:"Ribs",imageUrl:"/bones/Thoracic trunk/IMG_3986.PNG",viewType:"thoracic trunk",svgTarget:"ribs"},{id:"thoracic trunk-3",category:"Thoracic trunk",num:3,nameEn:"Clavicles",imageUrl:"/bones/Thoracic trunk/IMG_3987.PNG",viewType:"thoracic trunk",svgTarget:"clavicles"},{id:"thoracic trunk-4",category:"Thoracic trunk",num:4,nameEn:"Hip Bone",imageUrl:"/bones/Thoracic trunk/IMG_3989.PNG",viewType:"thoracic trunk",svgTarget:"hips"},{id:"thoracic trunk-5",category:"Thoracic trunk",num:5,nameEn:"Coccyx",imageUrl:"/bones/Thoracic trunk/IMG_4022.PNG",viewType:"thoracic trunk",svgTarget:"coccyx"},{id:"thoracic trunk-6",category:"Thoracic trunk",num:6,nameEn:"Cervical vertebrae",imageUrl:"/bones/Thoracic trunk/IMG_4036.PNG",viewType:"thoracic trunk",svgTarget:"cervical"},{id:"thoracic trunk-7",category:"Thoracic trunk",num:7,nameEn:"Thoracic vertebrae",imageUrl:"/bones/Thoracic trunk/IMG_4037.PNG",viewType:"thoracic trunk",svgTarget:"thoracic"},{id:"thoracic trunk-8",category:"Thoracic trunk",num:8,nameEn:"Lumbar vertebrae",imageUrl:"/bones/Thoracic trunk/IMG_4039-8.PNG",viewType:"thoracic trunk",svgTarget:"lumbar"},{id:"thoracic trunk-9",category:"Thoracic trunk",num:9,nameEn:"Sacrum",imageUrl:"/bones/Thoracic trunk/IMG_4041.PNG",viewType:"thoracic trunk",svgTarget:"sacrum"},{id:"thoracic trunk-10",category:"Thoracic trunk",num:10,nameEn:"Scapula",imageUrl:"/bones/Thoracic trunk/IMG_4042.PNG",viewType:"thoracic trunk",svgTarget:"scapulae"},{id:"upper-1",category:"Upper",num:1,nameEn:"Humerus",imageUrl:"/bones/Upper/IMG_3990.PNG",viewType:"upper-arm",svgTarget:"humerus"},{id:"upper-2",category:"Upper",num:2,nameEn:"Radius",imageUrl:"/bones/Upper/IMG_3991.PNG",viewType:"upper-arm",svgTarget:"radius"},{id:"upper-3",category:"Upper",num:3,nameEn:"Ulna",imageUrl:"/bones/Upper/IMG_3992.PNG",viewType:"upper-arm",svgTarget:"ulna"},{id:"upper-4",category:"Upper",num:4,nameEn:"Metacarpal",imageUrl:"/bones/Upper/IMG_4001.PNG",viewType:"upper-hand",svgTarget:"metacarpals"},{id:"upper-5",category:"Upper",num:5,nameEn:"Proximal phalanx",imageUrl:"/bones/Upper/IMG_4002.PNG",viewType:"upper-hand",svgTarget:"proximal-phalanges"},{id:"upper-6",category:"Upper",num:6,nameEn:"Middle phalanx",imageUrl:"/bones/Upper/IMG_4003.PNG",viewType:"upper-hand",svgTarget:"middle-phalanges"},{id:"upper-7",category:"Upper",num:7,nameEn:"Distal phalanx",imageUrl:"/bones/Upper/IMG_4005.PNG",viewType:"upper-hand",svgTarget:"distal-phalanges"},{id:"upper-8",category:"Upper",num:8,nameEn:"Trapezium",imageUrl:"/bones/Upper/IMG_4023.PNG",viewType:"upper-hand",svgTarget:"trapezium"},{id:"upper-9",category:"Upper",num:9,nameEn:"Trapezoid",imageUrl:"/bones/Upper/IMG_4024.PNG",viewType:"upper-hand",svgTarget:"trapezoid"},{id:"upper-10",category:"Upper",num:10,nameEn:"Capitate",imageUrl:"/bones/Upper/IMG_4025.PNG",viewType:"upper-hand",svgTarget:"capitate"},{id:"upper-11",category:"Upper",num:11,nameEn:"Hamate",imageUrl:"/bones/Upper/IMG_4026.PNG",viewType:"upper-hand",svgTarget:"hamate"},{id:"upper-12",category:"Upper",num:12,nameEn:"Scaphoid",imageUrl:"/bones/Upper/IMG_4027.PNG",viewType:"upper-hand",svgTarget:"scaphoid"},{id:"upper-13",category:"Upper",num:13,nameEn:"Lunate",imageUrl:"/bones/Upper/IMG_4028.PNG",viewType:"upper-hand",svgTarget:"lunate"},{id:"upper-14",category:"Upper",num:14,nameEn:"Triquetrum",imageUrl:"/bones/Upper/IMG_4029.PNG",viewType:"upper-hand",svgTarget:"triquetrum"},{id:"upper-15",category:"Upper",num:15,nameEn:"Pisiform",imageUrl:"/bones/Upper/IMG_4030.PNG",viewType:"upper-hand",svgTarget:"pisiform"},{id:"lower-1",category:"Lower",num:1,nameEn:"Talus",imageUrl:"/bones/Lower/IMG_4011.PNG",viewType:"lower-foot",svgTarget:"talus"},{id:"lower-2",category:"Lower",num:2,nameEn:"Calcaneus",imageUrl:"/bones/Lower/IMG_4012.PNG",viewType:"lower-foot",svgTarget:"calcaneus"},{id:"lower-3",category:"Lower",num:3,nameEn:"Navicular",imageUrl:"/bones/Lower/IMG_4013.PNG",viewType:"lower-foot",svgTarget:"navicular"},{id:"lower-4",category:"Lower",num:4,nameEn:"Cuboid",imageUrl:"/bones/Lower/IMG_4014.PNG",viewType:"lower-foot",svgTarget:"cuboid"},{id:"lower-5",category:"Lower",num:5,nameEn:"Lateral cuneiform",imageUrl:"/bones/Lower/IMG_4015.PNG",viewType:"lower-foot",svgTarget:"lateral-cuneiform"},{id:"lower-6",category:"Lower",num:6,nameEn:"Intermediate cuneiform",imageUrl:"/bones/Lower/IMG_4016.PNG",viewType:"lower-foot",svgTarget:"intermediate-cuneiform"},{id:"lower-7",category:"Lower",num:7,nameEn:"Medial cuneiform",imageUrl:"/bones/Lower/IMG_4017.PNG",viewType:"lower-foot",svgTarget:"medial-cuneiform"},{id:"lower-8",category:"Lower",num:8,nameEn:"Metatarsals",imageUrl:"/bones/Lower/IMG_4018.PNG",viewType:"lower-foot",svgTarget:"metatarsals"},{id:"lower-9",category:"Lower",num:9,nameEn:"Proximal phalanx",imageUrl:"/bones/Lower/IMG_4019.PNG",viewType:"lower-foot",svgTarget:"foot-proximal-phalanges"},{id:"lower-10",category:"Lower",num:10,nameEn:"Distal phalanx",imageUrl:"/bones/Lower/IMG_4020.PNG",viewType:"lower-foot",svgTarget:"foot-distal-phalanges"},{id:"lower-11",category:"Lower",num:11,nameEn:"Middle phalanges",imageUrl:"/bones/Lower/IMG_4021.PNG",viewType:"lower-foot",svgTarget:"foot-middle-phalanges"},{id:"lower-12",category:"Lower",num:12,nameEn:"Femur",imageUrl:"/bones/Lower/IMG_4031.PNG",viewType:"lower-leg",svgTarget:"femora"},{id:"lower-13",category:"Lower",num:13,nameEn:"Patellae",imageUrl:"/bones/Lower/IMG_4032.PNG",viewType:"lower-leg",svgTarget:"patellae"},{id:"lower-14",category:"Lower",num:14,nameEn:"Tibia",imageUrl:"/bones/Lower/IMG_4033.PNG",viewType:"lower-leg",svgTarget:"tibiae"},{id:"lower-15",category:"Lower",num:15,nameEn:"Fibula",imageUrl:"/bones/Lower/IMG_4034.PNG",viewType:"lower-leg",svgTarget:"fibula"}],eR=[{id:"All",nameEn:"All Bones",nameTh:"รวมทั้งหมดทุกส่วน",icon:A_,desc:"ทดสอบครบทุกส่วนของร่างกายในรอบเดียว"},{id:"Head",nameEn:"Head",nameTh:"กะโหลกศีรษะ",icon:j1,desc:"กระดูกหุ้มสมอง กระดูกใบหน้า และกระดูกโคนลิ้น"},{id:"Thoracic trunk",nameEn:"Thoracic trunk",nameTh:"แกนกลางลำตัว",icon:W1,desc:"กระดูกสันหลัง กระดูกอก ซี่โครง ไหปลาร้า สะบัก และเชิงกราน"},{id:"Upper",nameEn:"Upper",nameTh:"รยางค์ส่วนบน",icon:H1,desc:"กระดูกต้นแขน ปลายแขน ข้อมือ ฝ่ามือ และนิ้วมือ"},{id:"Lower",nameEn:"Lower",nameTh:"รยางค์ส่วนล่าง",icon:$1,desc:"กระดูกต้นขา สะบ้า หน้าแข้ง น่อง ข้อเท้า ฝ่าเท้า และนิ้วเท้า"}],tR=(t,e)=>{if(!t)return!1;const n=t.trim().toLowerCase(),r=e.trim().toLowerCase();return n===r?!0:new RegExp(`\\b${r}\\b`,"i").test(n)};function nR(){var ra;const[t,e]=ae.useState("home"),[n,r]=ae.useState(null),[i,s]=ae.useState(null),[o,l]=ae.useState(""),[u,h]=ae.useState(!1),[f,m]=ae.useState([]),[y,k]=ae.useState(1),[R,D]=ae.useState("mcq"),[O,I]=ae.useState("Head"),[v,A]=ae.useState([]),[b,j]=ae.useState(0),[U,E]=ae.useState({}),[g,_]=ae.useState({}),[w,C]=ae.useState({bones:[],names:[]}),[P,T]=ae.useState(null),[Ge,rn]=ae.useState({}),[sn,$t]=ae.useState(null),[B,X]=ae.useState(0),[K,ge]=ae.useState(null),[de,Te]=ae.useState(!1),[Ht,ct]=ae.useState(!1),[Gt,gt]=ae.useState(!1),[Lu,Fu]=ae.useState({}),[ui,Nr]=ae.useState(null);ae.useEffect(()=>{if(!$a)return;(async()=>{try{typeof __initial_auth_token<"u"&&__initial_auth_token?await _A($a,__initial_auth_token):await pA($a)}catch{}})();const G=TA($a,Z=>s(Z));return()=>G()},[]),ae.useEffect(()=>{if(!i||!Ha)return;const F=D2(Ha,"artifacts",fy,"public","data","anamy_score_history"),G=X2(F,Z=>{const Y=[];Z.forEach(ne=>Y.push(ne.data())),Y.sort((ne,Ze)=>(Ze.createdAtMs||0)-(ne.createdAtMs||0)),m(Y)});return()=>G()},[i]),ae.useEffect(()=>{o.trim()&&h(!1)},[o]);const gs=()=>{if(n==="quiz-setup"){if(!o.trim()){h(!0);return}k(1),e("quiz-setup")}else n==="history"&&e("history")};ae.useEffect(()=>{if(t!=="quiz-play"||!sn)return;const F=setInterval(()=>{X(Math.floor((Date.now()-sn)/1e3))},1e3);return()=>clearInterval(F)},[t,sn]);const ys=()=>{const F=Z2.filter(Z=>O==="All"||Z.category.trim()===O.trim());for(let Z=F.length-1;Z>0;Z--){const Y=Math.floor(Math.random()*(Z+1));[F[Z],F[Y]]=[F[Y],F[Z]]}const G=R==="matching"?F.slice(0,Math.min(5,F.length)):F;if(A(G),j(0),_({}),E({}),R==="matching")C({bones:[...G],names:[...G].sort(()=>.5-Math.random())}),rn({}),T(null);else if(G.length>0){const Z={};G.forEach((Y,ne)=>{const Me=[...G.filter(xe=>xe.id!==Y.id)];for(let xe=Me.length-1;xe>0;xe--){const St=Math.floor(Math.random()*(xe+1));[Me[xe],Me[St]]=[Me[St],Me[xe]]}const It=[Y,...Me.slice(0,3)];for(let xe=It.length-1;xe>0;xe--){const St=Math.floor(Math.random()*(xe+1));[It[xe],It[St]]=[It[St],It[xe]]}Z[ne]=It}),E(Z)}ct(!1),gt(!1),$t(Date.now()),X(0),e("quiz-play")},vs=F=>{_(G=>({...G,[b]:F}))},_s=F=>{_(G=>({...G,[b]:F}))},Es=()=>{let F=0;R==="matching"?F=v.filter(G=>!Ge[G.id]).length:F=v.filter((G,Z)=>!g[Z]||typeof g[Z]=="string"&&!g[Z].trim()).length,F>0?gt(!0):ws()},ws=()=>{ct(!1),gt(!1);const F=[];R==="matching"?v.forEach(G=>{const Z=Ge[G.id]||"",Y=Z.trim().toLowerCase()===G.nameEn.trim().toLowerCase();F.push({boneId:G.id,boneNameEn:G.nameEn,chosenNameEn:Z||"No Answer",isCorrect:Y,imageUrl:G.imageUrl,num:G.num,options:w.names.map(ne=>({id:ne.id,nameEn:ne.nameEn}))})}):v.forEach((G,Z)=>{const Y=g[Z];let ne=!1,Ze="No Answer";R==="mcq"&&Y?(Ze=Y.nameEn,ne=Y.id===G.id):R==="fill"&&Y&&(Ze=Y,ne=tR(Y,G.nameEn)),F.push({boneId:G.id,boneNameEn:G.nameEn,chosenNameEn:Ze,isCorrect:ne,imageUrl:G.imageUrl,num:G.num,options:U[Z]||[]})}),Uu(F)},Uu=async F=>{const G=Math.max(1,Math.floor((Date.now()-(sn||Date.now()))/1e3)),Z=o.trim()||"Guest",Y=F.filter(qt=>qt.isCorrect).length,ne=v.length,Ze=ne>0?Math.round(Y/ne*100):0,Me=f.filter(qt=>qt.playerName.toLowerCase()===Z.toLowerCase()&&qt.category===O),It=Me.length+1,xe=Me.length>0?Me[Me.length-1].score:Y,St=Me.length>0?Me[Me.length-1].total:ne,Is=Date.now(),ia=new Date().toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),hi=`ATT-${Is.toString().slice(-6)}`,di={id:hi,createdAtMs:Is,uid:(i==null?void 0:i.uid)||"local",playerName:Z,category:O,attemptNumber:It,score:Y,total:ne,percentage:Ze,firstAttemptScore:xe,firstAttemptTotal:St,durationSec:G,timestamp:ia,examMode:R,details:F,mistakes:F.filter(qt=>!qt.isCorrect)};if(ge(di),Nr(null),e("quiz-result"),i&&Ha)try{await Q2(b2(Ha,"artifacts",fy,"public","data","anamy_score_history",hi),di)}catch{m(Ss=>[di,...Ss])}else m(qt=>[di,...qt])},ci=F=>{j(F)},Ts=async F=>{if(!F)return;const G=`📋 ใบรายงานผลสอบ Anamy Game
👤 ผู้สอบ: ${F.playerName}
🦴 หมวด: ${F.category}
✅ ครั้งที่: ${F.attemptNumber}
🏆 คะแนน: ${F.score}/${F.total} (${F.percentage}%)`;try{await navigator.clipboard.writeText(G)}catch{}Te(!0),setTimeout(()=>Te(!1),2500)},En=v[b];return S.createElement("div",{className:"min-h-screen bg-[#FAF7F2] text-[#2C2623] font-sans pb-12"},S.createElement("header",{className:"sticky top-0 z-30 border-b border-[#E6E0D4] bg-[#FFFDF9]/95 backdrop-blur-md"},S.createElement("div",{className:"max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between"},S.createElement("button",{onClick:()=>{t==="quiz-play"?ct(!0):e("home")},className:"flex items-center gap-3 text-left group"},S.createElement("div",{className:"w-10 h-10 rounded-2xl bg-[#C86D51] flex items-center justify-center text-white shadow-xs"},S.createElement(A_,{className:"w-5 h-5"})),S.createElement("div",null,S.createElement("h1",{className:"text-base font-extrabold text-[#2C2623]"},"Anamy Game"),S.createElement("p",{className:"text-[11px] text-[#786F68]"},"ระบบทดสอบโครงกระดูกมนุษย์"))),S.createElement("div",{className:"flex items-center gap-2"},t==="quiz-play"?S.createElement("div",{className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FCEEEE] text-[#C94A4A] text-xs font-extrabold"},S.createElement(q1,{className:"w-3.5 h-3.5"}),S.createElement("span",null,"กำลังสอบ (ห้ามออกก่อนส่ง)")):S.createElement(S.Fragment,null,S.createElement("button",{onClick:()=>e("history"),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#F3EFE6] text-[#2C2623]"},S.createElement(Fm,{className:"w-3.5 h-3.5 text-[#C86D51]"}),S.createElement("span",null,"ประวัติคะแนน")),t!=="home"&&S.createElement("button",{onClick:()=>e("home"),className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C86D51] text-white text-xs font-bold"},S.createElement(G1,{className:"w-3.5 h-3.5"}),S.createElement("span",null,"หน้าหลัก")))))),S.createElement("main",{className:"max-w-5xl mx-auto px-4 pt-6"},t==="home"&&S.createElement("div",{className:"space-y-6"},S.createElement("div",{className:"bg-[#FFFFFF] border border-[#E6E0D4] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5"},S.createElement("h2",{className:"text-2xl sm:text-3xl font-extrabold text-[#2C2623]"},"Hello welcome to Anamy Game"),S.createElement("p",{className:"text-xs sm:text-sm text-[#6E655F]"},"กรอกชื่อผู้สอบหรือรหัสนักศึกษา แล้วคลิกเลือกเมนูด้านล่าง"),S.createElement("div",{className:"bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl p-4"},S.createElement("label",{className:"block text-xs font-extrabold text-[#2C2623] mb-2"},"👤 ชื่อผู้สอบ / รหัสนักศึกษา:"),S.createElement("input",{type:"text",value:o,onChange:F=>l(F.target.value),placeholder:"เช่น นศ.สมชาย (67010xxx)...",className:`w-full bg-white border rounded-xl px-4 py-3 text-sm font-bold text-[#2C2623] ${u?"border-[#C94A4A]":"border-[#E6E0D4]"}`}),u&&S.createElement("p",{className:"text-xs font-extrabold text-[#C94A4A] mt-2"},"กรุณากรอกชื่อก่อนเริ่มทำแบบทดสอบ"))),S.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4"},S.createElement("button",{onClick:()=>r(n==="quiz-setup"?null:"quiz-setup"),className:`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 ${n==="quiz-setup"?"bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15":"bg-white border-[#E6E0D4]"}`},S.createElement("div",{className:"w-12 h-12 rounded-2xl bg-[#C86D51] text-white flex items-center justify-center"},S.createElement(Um,{className:"w-6 h-6 fill-current"})),S.createElement("div",null,S.createElement("h3",{className:"text-lg font-extrabold text-[#2C2623]"},"เริ่มทำแบบทดสอบ"),S.createElement("p",{className:"text-xs text-[#6E655F]"},"สอบจริง ตอบผิด/ออกกลางคันมีผลต่อคะแนน"))),S.createElement("button",{onClick:()=>r(n==="history"?null:"history"),className:`rounded-3xl p-6 text-left border-2 transition-all flex items-start gap-4 ${n==="history"?"bg-[#FFFDF9] border-[#C86D51] ring-4 ring-[#C86D51]/15":"bg-white border-[#E6E0D4]"}`},S.createElement("div",{className:"w-12 h-12 rounded-2xl bg-[#F3EFE6] text-[#2C2623] flex items-center justify-center"},S.createElement(Fm,{className:"w-6 h-6"})),S.createElement("div",null,S.createElement("h3",{className:"text-lg font-extrabold text-[#2C2623]"},"ประวัติคะแนนย้อนหลัง"),S.createElement("p",{className:"text-xs text-[#6E655F]"},"ตรวจสอบคะแนนและการทำซ้ำทั้งหมด")))),n&&S.createElement("div",{className:"flex justify-end pt-2"},S.createElement("button",{onClick:gs,className:"px-8 py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold shadow-md flex items-center gap-2"},S.createElement(Mm,{className:"w-5 h-5"}),S.createElement("span",null,"ยืนยันการเลือกเมนู")))),t==="quiz-setup"&&S.createElement("div",{className:"max-w-3xl mx-auto space-y-6"},S.createElement("button",{onClick:()=>e("home"),className:"text-xs font-bold text-[#786F68]"},"← กลับหน้าหลัก"),y===1&&S.createElement("div",{className:"bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6"},S.createElement("div",null,S.createElement("h2",{className:"text-xl font-extrabold text-[#2C2623]"},"ขั้นตอนที่ 1: เลือกระบบการสอบ"),S.createElement("p",{className:"text-xs text-[#786F68] mt-1"},"กรุณาเลือกรูปแบบข้อสอบที่คุณต้องการทดสอบ")),S.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4"},S.createElement("button",{onClick:()=>D("mcq"),className:`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${R==="mcq"?"border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10":"border-[#E6E0D4] bg-white"}`},S.createElement("div",{className:"w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]"},S.createElement("div",{className:"space-y-1.5 w-3/4"},S.createElement("div",{className:"h-2 w-full bg-[#C86D51] rounded-full"}),S.createElement("div",{className:"h-2 w-2/3 bg-[#786F68] rounded-full"}),S.createElement("div",{className:"h-2 w-1/2 bg-[#786F68] rounded-full"}))),S.createElement("div",null,S.createElement("h3",{className:"font-extrabold text-sm text-[#2C2623]"},"ปรนัย (MCQ)"),S.createElement("p",{className:"text-[11px] text-[#786F68]"},"เลือกช้อยส์ A, B, C, D ที่ถูกต้อง"))),S.createElement("button",{onClick:()=>D("fill"),className:`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${R==="fill"?"border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10":"border-[#E6E0D4] bg-white"}`},S.createElement("div",{className:"w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]"},S.createElement("div",{className:"w-3/4 bg-white border border-[#2C2623] rounded-lg p-2 text-[10px] text-[#786F68] font-bold"},"Type here...")),S.createElement("div",null,S.createElement("h3",{className:"font-extrabold text-sm text-[#2C2623]"},"เติมคำ (Fill-in)"),S.createElement("p",{className:"text-[11px] text-[#786F68]"},"พิมพ์ชื่อกระดูกภาษาอังกฤษด้วยตนเอง"))),S.createElement("button",{onClick:()=>D("matching"),className:`p-5 rounded-2xl border-2 text-left flex flex-col gap-4 transition-all ${R==="matching"?"border-[#C86D51] bg-[#FAF7F2] ring-4 ring-[#C86D51]/10":"border-[#E6E0D4] bg-white"}`},S.createElement("div",{className:"w-full h-28 rounded-xl bg-[#F3EFE6] flex items-center justify-center overflow-hidden border border-[#E6E0D4]"},S.createElement("div",{className:"flex gap-2 w-3/4 justify-center items-center"},S.createElement("div",{className:"w-8 h-8 rounded-lg bg-[#3B7A57]"}),S.createElement("div",{className:"w-4 h-0.5 bg-[#2C2623] dashed"}),S.createElement("div",{className:"w-8 h-8 rounded-lg bg-[#C86D51]"}))),S.createElement("div",null,S.createElement("h3",{className:"font-extrabold text-sm text-[#2C2623]"},"จับคู่ (Matching)"),S.createElement("p",{className:"text-[11px] text-[#786F68]"},"จับคู่ภาพโครงกระดูกกับชื่อคำศัพท์")))),S.createElement("div",{className:"flex justify-end pt-2"},S.createElement("button",{onClick:()=>k(2),className:"px-8 py-3.5 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm flex items-center gap-2 shadow-md"},S.createElement("span",null,"ถัดไป: เลือกส่วนที่จะสอบ"),S.createElement(Lm,{className:"w-4 h-4"})))),y===2&&S.createElement("div",{className:"bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6"},S.createElement("div",{className:"flex items-center justify-between"},S.createElement("div",null,S.createElement("h2",{className:"text-xl font-extrabold text-[#2C2623]"},"ขั้นตอนที่ 2: เลือกหมวดหมู่กระดูก"),S.createElement("p",{className:"text-xs text-[#786F68] mt-1"},"เลือกส่วนของร่างกายที่ต้องการทดสอบ")),S.createElement("button",{onClick:()=>k(1),className:"text-xs font-bold text-[#C86D51] hover:underline"},"← เปลี่ยนรูปแบบสอบ")),S.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},eR.map(F=>{const G=F.icon;return S.createElement("button",{key:F.id,onClick:()=>I(F.id),className:`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${O===F.id?"border-2 border-[#C86D51] bg-[#FAF7F2]":"border-[#E6E0D4]"}`},S.createElement("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${O===F.id?"bg-[#C86D51] text-white":"bg-[#F3EFE6] text-[#2C2623]"}`},S.createElement(G,{className:"w-5 h-5"})),S.createElement("div",null,S.createElement("div",{className:"font-extrabold text-sm text-[#2C2623]"},F.nameEn),S.createElement("div",{className:"text-xs text-[#C86D51] font-bold"},F.nameTh),S.createElement("p",{className:"text-[11px] text-[#786F68] mt-1"},F.desc)))})),S.createElement("button",{onClick:ys,className:"w-full py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-base shadow-md flex items-center justify-center gap-2"},S.createElement(Um,{className:"w-5 h-5 fill-current"}),S.createElement("span",null,"เริ่มทำแบบทดสอบทันที")))),t==="quiz-play"&&S.createElement("div",{className:"space-y-5"},Ht&&S.createElement("div",{className:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"},S.createElement("div",{className:"bg-white border-2 border-[#C94A4A] rounded-3xl max-w-md w-full p-6 space-y-4"},S.createElement("h3",{className:"text-base font-extrabold text-[#2C2623]"},"ยุติการสอบก่อนกำหนด?"),S.createElement("p",{className:"text-xs text-[#C94A4A]"},"ข้อที่เหลือจะถูกคิดเป็น 0 คะแนนทันที"),S.createElement("div",{className:"flex gap-2"},S.createElement("button",{onClick:()=>ct(!1),className:"flex-1 py-3 rounded-xl bg-black text-white text-xs font-bold"},"ทำต่อ"),S.createElement("button",{onClick:ws,className:"flex-1 py-3 rounded-xl bg-[#C94A4A] text-white text-xs font-bold"},"ยอมรับและส่งข้อสอบ")))),Gt&&S.createElement("div",{className:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"},S.createElement("div",{className:"bg-white border-2 border-[#C86D51] rounded-3xl max-w-md w-full p-6 space-y-4"},S.createElement("h3",{className:"text-base font-extrabold text-[#2C2623]"},"⚠️ มีข้อที่ยังไม่ได้ตอบ"),S.createElement("p",{className:"text-xs text-[#786F68]"},"คุณยังทำข้อสอบไม่ครบทุกข้อ ต้องการส่งข้อสอบเลยหรือไม่?"),S.createElement("div",{className:"flex gap-2"},S.createElement("button",{onClick:()=>gt(!1),className:"flex-1 py-3 rounded-xl bg-black text-white text-xs font-bold"},"กลับไปทำต่อ"),S.createElement("button",{onClick:ws,className:"flex-1 py-3 rounded-xl bg-[#C86D51] text-white text-xs font-bold"},"ยืนยันส่งข้อสอบ")))),S.createElement("div",{className:"bg-white border border-[#E6E0D4] rounded-2xl p-4 space-y-3"},S.createElement("div",{className:"flex justify-between items-center"},S.createElement("span",{className:"text-xs font-extrabold text-[#2C2623]"},R==="matching"?"โหมดจับคู่คำศัพท์กับรูปภาพ":`ข้อที่ ${b+1} / ${v.length}`),S.createElement("div",{className:"flex items-center gap-2"},S.createElement("button",{onClick:()=>ct(!0),className:"px-3 py-1.5 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold shadow-xs"},"ส่งข้อสอบ / จบการสอบ"))),R!=="matching"&&S.createElement("div",{className:"flex flex-wrap gap-1.5 pt-1"},v.map((F,G)=>{const Z=g[G]!==void 0&&g[G]!=="",Y=b===G;let ne="bg-[#E6E0D4] text-[#786F68]";return Z?ne="bg-[#3B7A57] text-white":Y&&(ne="bg-[#2C2623] text-white ring-2 ring-[#C86D51]"),S.createElement("button",{key:G,onClick:()=>ci(G),className:`w-8 h-8 rounded-xl text-xs font-extrabold flex items-center justify-center transition-all ${ne}`},G+1)}))),R==="matching"?S.createElement("div",{className:"bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-6"},S.createElement("h2",{className:"text-lg font-extrabold text-[#2C2623] text-center"},"จับคู่รูปภาพโครงกระดูกกับชื่อภาษาอังกฤษที่ถูกต้อง"),S.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6"},S.createElement("div",{className:"space-y-3"},S.createElement("h4",{className:"text-xs font-extrabold text-[#786F68]"},"รูปภาพโครงกระดูก"),w.bones.map(F=>{const G=(P==null?void 0:P.id)===F.id,Z=Ge[F.id];return S.createElement("div",{key:F.id,onClick:()=>T(F),className:`p-3 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition-all ${G?"border-[#C86D51] bg-[#FAF7F2]":Z?"border-[#3B7A57] bg-[#EBF5EE]":"border-[#E6E0D4] bg-white"}`},S.createElement("img",{src:F.imageUrl,alt:"",className:"w-16 h-16 object-contain rounded-xl bg-[#FAF7F2]"}),S.createElement("div",null,S.createElement("span",{className:"text-xs font-extrabold"},"ข้อที่ ",F.num),S.createElement("div",{className:"text-xs font-bold text-[#3B7A57]"},Z?`เลือกคู่แล้ว: ${Z}`:"คลิกเพื่อเลือกคู่")))})),S.createElement("div",{className:"space-y-3"},S.createElement("h4",{className:"text-xs font-extrabold text-[#786F68]"},"ชื่อคำศัพท์กระดูก"),w.names.map(F=>{const G=Object.values(Ge).includes(F.nameEn);return S.createElement("button",{key:F.id,disabled:!P,onClick:()=>{P&&(rn(Z=>({...Z,[P.id]:F.nameEn})),T(null))},className:`w-full p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${G?"bg-[#EBF5EE] border-[#3B7A57] text-[#3B7A57]":"bg-[#FAF7F2] border-[#E6E0D4] hover:bg-[#F3EFE6]"}`},S.createElement("span",{className:"font-extrabold text-sm"},F.nameEn),S.createElement("span",{className:"text-xs"},G?"✓ จับคู่แล้ว":"คลิกจับคู่"))}))),S.createElement("button",{onClick:Es,className:"w-full py-4 rounded-2xl bg-[#C86D51] text-white font-extrabold text-sm shadow-md"},"ส่งคำตอบโหมดจับคู่")):En&&S.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6"},S.createElement("div",{className:"lg:col-span-6 bg-white border border-[#E6E0D4] rounded-3xl p-5 flex items-center justify-center min-h-[340px]"},En.imageUrl&&!Lu[En.id]?S.createElement("img",{src:En.imageUrl,alt:`Question ${En.num}`,className:"max-h-[320px] w-auto object-contain rounded-2xl",onError:()=>Fu(F=>({...F,[En.id]:!0}))}):S.createElement("div",{className:"text-xs text-[#786F68]"},"ไม่พบรูปภาพ")),S.createElement("div",{className:"lg:col-span-6 bg-white border border-[#E6E0D4] rounded-3xl p-6 space-y-4 flex flex-col justify-between"},S.createElement("div",{className:"space-y-4"},S.createElement("h2",{className:"text-lg font-extrabold text-[#2C2623]"},R==="fill"?"พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:":"กระดูกส่วนที่ชี้ในภาพคือข้อใด?"),R==="mcq"?S.createElement("div",{className:"space-y-3"},options.map((F,G)=>{var Y;const Z=((Y=g[b])==null?void 0:Y.id)===F.id;return S.createElement("button",{key:F.id,onClick:()=>vs(F),className:`w-full p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${Z?"bg-[#2C2623] text-white border-[#2C2623] shadow-md":"bg-[#FAF7F2] hover:bg-[#F3EFE6] border-[#E6E0D4]"}`},S.createElement("span",{className:`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold ${Z?"bg-[#C86D51] text-white":"bg-white text-[#C86D51]"}`},String.fromCharCode(65+G)),S.createElement("span",{className:"font-bold text-base"},F.nameEn))})):S.createElement("div",{className:"space-y-4 py-4"},S.createElement("input",{type:"text",value:g[b]||"",onChange:F=>_s(F.target.value),placeholder:"ตอบเป็นภาษาอังกฤษ",className:"w-full bg-[#FAF7F2] border border-[#E6E0D4] rounded-2xl px-4 py-3.5 text-base font-bold text-[#2C2623] focus:outline-none focus:border-[#C86D51]"}))),S.createElement("div",{className:"flex gap-3 pt-4 border-t border-[#E6E0D4]"},S.createElement("button",{disabled:b===0,onClick:()=>ci(b-1),className:`flex-1 py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1 ${b===0?"bg-[#FAF7F2] text-[#A89F96] cursor-not-allowed":"bg-[#F3EFE6] text-[#2C2623]"}`},S.createElement(B1,{className:"w-4 h-4"}),S.createElement("span",null,"ข้อก่อนหน้า")),b+1<v.length?S.createElement("button",{onClick:()=>ci(b+1),className:"flex-1 py-3.5 rounded-xl bg-[#C86D51] text-white font-extrabold text-xs flex items-center justify-center gap-1"},S.createElement("span",null,"ข้อถัดไป"),S.createElement(Lm,{className:"w-4 h-4"})):S.createElement("button",{onClick:Es,className:"flex-1 py-3.5 rounded-xl bg-[#3B7A57] text-white font-extrabold text-xs flex items-center justify-center gap-1"},S.createElement(Mm,{className:"w-4 h-4"}),S.createElement("span",null,"ส่งข้อสอบทั้งหมด")))))),t==="quiz-result"&&K&&S.createElement("div",{className:"max-w-3xl mx-auto space-y-6"},S.createElement("div",{className:"bg-white border-2 border-[#2C2623] rounded-3xl overflow-hidden shadow-md"},S.createElement("div",{className:"bg-[#2C2623] text-white px-6 py-4 flex justify-between items-center"},S.createElement("h2",{className:"text-base font-extrabold"},"ใบรายงานผลคะแนน (Official Score Slip)"),S.createElement("span",{className:"px-3 py-1 bg-[#C86D51] rounded-full text-xs"},"ครั้งที่ ",K.attemptNumber)),S.createElement("div",{className:"p-6 space-y-6"},S.createElement("div",{className:"text-center bg-[#FAF7F2] p-6 rounded-2xl border"},S.createElement("div",{className:"text-3xl font-extrabold text-[#2C2623]"},K.score," / ",K.total," (",K.percentage,"%)")),S.createElement("div",{className:"space-y-3 pt-2"},S.createElement("h3",{className:"text-sm font-extrabold text-[#2C2623]"},"ผลการทำข้อสอบรายข้อ (คลิกเพื่อขยายดูรายละเอียด):"),S.createElement("div",{className:"space-y-3"},(ra=K.details)==null?void 0:ra.map((F,G)=>{var Y;const Z=ui===G;return S.createElement("div",{key:G,className:"border border-[#E6E0D4] rounded-2xl overflow-hidden bg-white transition-all"},S.createElement("div",{onClick:()=>Nr(Z?null:G),className:`p-4 cursor-pointer flex items-center justify-between ${F.isCorrect?"bg-[#EBF5EE]":"bg-[#FCEEEE]"}`},S.createElement("div",{className:"flex items-center gap-3"},S.createElement("span",{className:`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold text-white ${F.isCorrect?"bg-[#3B7A57]":"bg-[#C94A4A]"}`},G+1),S.createElement("div",null,S.createElement("span",{className:"text-xs font-extrabold text-[#2C2623]"},"ข้อที่ ",G+1),S.createElement("div",{className:"text-xs font-bold text-[#786F68]"},"ตอบ: ",F.chosenNameEn))),S.createElement("span",{className:`text-xs font-extrabold px-3 py-1 rounded-full ${F.isCorrect?"bg-[#3B7A57] text-white":"bg-[#C94A4A] text-white"}`},F.isCorrect?"ถูกต้อง":"ผิด")),Z&&S.createElement("div",{className:"p-5 border-t border-[#E6E0D4] bg-[#FAF7F2] space-y-4"},S.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6"},S.createElement("div",{className:"lg:col-span-6 bg-white border border-[#E6E0D4] rounded-2xl p-4 flex items-center justify-center min-h-[260px]"},S.createElement("img",{src:F.imageUrl,alt:"",className:"max-h-[240px] object-contain rounded-xl"})),S.createElement("div",{className:"lg:col-span-6 bg-white border border-[#E6E0D4] rounded-2xl p-5 space-y-3 flex flex-col justify-between"},S.createElement("h4",{className:"text-sm font-extrabold text-[#2C2623]"},K.examMode==="fill"?"พิมพ์ชื่อภาษาอังกฤษของกระดูกในภาพ:":"กระดูกส่วนที่ชี้ในภาพคือข้อใด?"),K.examMode==="fill"?S.createElement("div",{className:"space-y-3 py-2"},S.createElement("div",{className:"p-3 bg-[#FAF7F2] border border-[#E6E0D4] rounded-xl text-xs"},S.createElement("b",null,"คำตอบที่คุณพิมพ์:")," ",S.createElement("span",{className:F.isCorrect?"text-[#3B7A57] font-bold":"text-[#C94A4A] font-bold"},F.chosenNameEn)),S.createElement("div",{className:"p-3 bg-[#EBF5EE] border border-[#3B7A57] rounded-xl text-xs text-[#3B7A57]"},S.createElement("b",null,"คำตอบที่ถูกต้อง:")," ",S.createElement("b",null,F.boneNameEn))):S.createElement("div",{className:"space-y-2"},(Y=F.options)==null?void 0:Y.map((ne,Ze)=>{const Me=ne.nameEn===F.chosenNameEn,It=ne.nameEn===F.boneNameEn;let xe="bg-[#FAF7F2] border-[#E6E0D4] text-[#2C2623]";return It?xe="bg-[#3B7A57] text-white border-[#3B7A57] font-extrabold":Me&&!F.isCorrect&&(xe="bg-[#C94A4A] text-white border-[#C94A4A] font-extrabold"),S.createElement("div",{key:Ze,className:`w-full p-3 rounded-xl border text-left flex items-center gap-3 text-xs ${xe}`},S.createElement("span",{className:"w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-bold"},String.fromCharCode(65+Ze)),S.createElement("span",null,ne.nameEn))}))))))}))),S.createElement("div",{className:"flex gap-3"},S.createElement("button",{onClick:()=>Ts(K),className:"flex-1 py-3 bg-[#2C2623] text-white rounded-xl text-xs font-extrabold"},de?"คัดลอกแล้ว!":"คัดลอกใบสรุปผล"),S.createElement("button",{onClick:()=>e("home"),className:"flex-1 py-3 bg-[#C86D51] text-white rounded-xl text-xs font-extrabold"},"กลับหน้าหลัก")))))))}Lc.createRoot(document.getElementById("root")).render(S.createElement(S.StrictMode,null,S.createElement(nR,null)));
