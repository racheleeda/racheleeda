(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},La={},Mu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function f_(){if(Pp)return ft;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(O,ie,Pe){this.props=O,this.context=ie,this.refs=w,this.updater=Pe||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=x.prototype;function D(O,ie,Pe){this.props=O,this.context=ie,this.refs=w,this.updater=Pe||M}var L=D.prototype=new g;L.constructor=D,T(L,x.prototype),L.isPureReactComponent=!0;var R=Array.isArray,J=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(O,ie,Pe){var $,ue={},_e=null,ge=null;if(ie!=null)for($ in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(_e=""+ie.key),ie)J.call(ie,$)&&!F.hasOwnProperty($)&&(ue[$]=ie[$]);var Ae=arguments.length-2;if(Ae===1)ue.children=Pe;else if(1<Ae){for(var De=Array(Ae),Ze=0;Ze<Ae;Ze++)De[Ze]=arguments[Ze+2];ue.children=De}if(O&&O.defaultProps)for($ in Ae=O.defaultProps,Ae)ue[$]===void 0&&(ue[$]=Ae[$]);return{$$typeof:s,type:O,key:_e,ref:ge,props:ue,_owner:B.current}}function N(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Pe){return ie[Pe]})}var ce=/\/+/g;function ne(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ie.toString(36)}function de(O,ie,Pe,$,ue){var _e=typeof O;(_e==="undefined"||_e==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(_e){case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case s:case e:ge=!0}}if(ge)return ge=O,ue=ue(ge),O=$===""?"."+ne(ge,0):$,R(ue)?(Pe="",O!=null&&(Pe=O.replace(ce,"$&/")+"/"),de(ue,ie,Pe,"",function(Ze){return Ze})):ue!=null&&(C(ue)&&(ue=N(ue,Pe+(!ue.key||ge&&ge.key===ue.key?"":(""+ue.key).replace(ce,"$&/")+"/")+O)),ie.push(ue)),1;if(ge=0,$=$===""?".":$+":",R(O))for(var Ae=0;Ae<O.length;Ae++){_e=O[Ae];var De=$+ne(_e,Ae);ge+=de(_e,ie,Pe,De,ue)}else if(De=S(O),typeof De=="function")for(O=De.call(O),Ae=0;!(_e=O.next()).done;)_e=_e.value,De=$+ne(_e,Ae++),ge+=de(_e,ie,Pe,De,ue);else if(_e==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function pe(O,ie,Pe){if(O==null)return O;var $=[],ue=0;return de(O,$,"","",function(_e){return ie.call(Pe,_e,ue++)}),$}function K(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Pe)},function(Pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Pe)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var te={current:null},U={transition:null},Q={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:U,ReactCurrentOwner:B};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:pe,forEach:function(O,ie,Pe){pe(O,function(){ie.apply(this,arguments)},Pe)},count:function(O){var ie=0;return pe(O,function(){ie++}),ie},toArray:function(O){return pe(O,function(ie){return ie})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=x,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=D,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ft.act=ae,ft.cloneElement=function(O,ie,Pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var $=T({},O.props),ue=O.key,_e=O.ref,ge=O._owner;if(ie!=null){if(ie.ref!==void 0&&(_e=ie.ref,ge=B.current),ie.key!==void 0&&(ue=""+ie.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(De in ie)J.call(ie,De)&&!F.hasOwnProperty(De)&&($[De]=ie[De]===void 0&&Ae!==void 0?Ae[De]:ie[De])}var De=arguments.length-2;if(De===1)$.children=Pe;else if(1<De){Ae=Array(De);for(var Ze=0;Ze<De;Ze++)Ae[Ze]=arguments[Ze+2];$.children=Ae}return{$$typeof:s,type:O.type,key:ue,ref:_e,props:$,_owner:ge}},ft.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},ft.createElement=W,ft.createFactory=function(O){var ie=W.bind(null,O);return ie.type=O,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:d,render:O}},ft.isValidElement=C,ft.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:K}},ft.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},ft.startTransition=function(O){var ie=U.transition;U.transition={};try{O()}finally{U.transition=ie}},ft.unstable_act=ae,ft.useCallback=function(O,ie){return te.current.useCallback(O,ie)},ft.useContext=function(O){return te.current.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O){return te.current.useDeferredValue(O)},ft.useEffect=function(O,ie){return te.current.useEffect(O,ie)},ft.useId=function(){return te.current.useId()},ft.useImperativeHandle=function(O,ie,Pe){return te.current.useImperativeHandle(O,ie,Pe)},ft.useInsertionEffect=function(O,ie){return te.current.useInsertionEffect(O,ie)},ft.useLayoutEffect=function(O,ie){return te.current.useLayoutEffect(O,ie)},ft.useMemo=function(O,ie){return te.current.useMemo(O,ie)},ft.useReducer=function(O,ie,Pe){return te.current.useReducer(O,ie,Pe)},ft.useRef=function(O){return te.current.useRef(O)},ft.useState=function(O){return te.current.useState(O)},ft.useSyncExternalStore=function(O,ie,Pe){return te.current.useSyncExternalStore(O,ie,Pe)},ft.useTransition=function(){return te.current.useTransition()},ft.version="18.3.1",ft}var Lp;function $d(){return Lp||(Lp=1,Mu.exports=f_()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function h_(){if(Ip)return La;Ip=1;var s=$d(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var _,v={},S=null,M=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!c.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:S,ref:M,props:v,_owner:o.current}}return La.Fragment=t,La.jsx=u,La.jsxs=u,La}var Dp;function p_(){return Dp||(Dp=1,Su.exports=h_()),Su.exports}var y=p_(),vt=$d();const m_=Km(vt);var Jo={},Eu={exports:{}},Nn={},Tu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function g_(){return Up||(Up=1,(function(s){function e(U,Q){var ae=U.length;U.push(Q);e:for(;0<ae;){var O=ae-1>>>1,ie=U[O];if(0<o(ie,Q))U[O]=Q,U[ae]=ie,ae=O;else break e}}function t(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Q=U[0],ae=U.pop();if(ae!==Q){U[0]=ae;e:for(var O=0,ie=U.length,Pe=ie>>>1;O<Pe;){var $=2*(O+1)-1,ue=U[$],_e=$+1,ge=U[_e];if(0>o(ue,ae))_e<ie&&0>o(ge,ue)?(U[O]=ge,U[_e]=ae,O=_e):(U[O]=ue,U[$]=ae,O=$);else if(_e<ie&&0>o(ge,ae))U[O]=ge,U[_e]=ae,O=_e;else break e}}return Q}function o(U,Q){var ae=U.sortIndex-Q.sortIndex;return ae!==0?ae:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],_=1,v=null,S=3,M=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(U){for(var Q=t(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=U)r(p),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=t(p)}}function R(U){if(w=!1,L(U),!T)if(t(h)!==null)T=!0,K(J);else{var Q=t(p);Q!==null&&te(R,Q.startTime-U)}}function J(U,Q){T=!1,w&&(w=!1,g(W),W=-1),M=!0;var ae=S;try{for(L(Q),v=t(h);v!==null&&(!(v.expirationTime>Q)||U&&!z());){var O=v.callback;if(typeof O=="function"){v.callback=null,S=v.priorityLevel;var ie=O(v.expirationTime<=Q);Q=s.unstable_now(),typeof ie=="function"?v.callback=ie:v===t(h)&&r(h),L(Q)}else r(h);v=t(h)}if(v!==null)var Pe=!0;else{var $=t(p);$!==null&&te(R,$.startTime-Q),Pe=!1}return Pe}finally{v=null,S=ae,M=!1}}var B=!1,F=null,W=-1,N=5,C=-1;function z(){return!(s.unstable_now()-C<N)}function ce(){if(F!==null){var U=s.unstable_now();C=U;var Q=!0;try{Q=F(!0,U)}finally{Q?ne():(B=!1,F=null)}}else B=!1}var ne;if(typeof D=="function")ne=function(){D(ce)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=ce,ne=function(){pe.postMessage(null)}}else ne=function(){x(ce,0)};function K(U){F=U,B||(B=!0,ne())}function te(U,Q){W=x(function(){U(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,K(J))},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(U){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var ae=S;S=Q;try{return U()}finally{S=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ae=S;S=U;try{return Q()}finally{S=ae}},s.unstable_scheduleCallback=function(U,Q,ae){var O=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?O+ae:O):ae=O,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,U={id:_++,callback:Q,priorityLevel:U,startTime:ae,expirationTime:ie,sortIndex:-1},ae>O?(U.sortIndex=ae,e(p,U),t(h)===null&&U===t(p)&&(w?(g(W),W=-1):w=!0,te(R,ae-O))):(U.sortIndex=ie,e(h,U),T||M||(T=!0,K(J))),U},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(U){var Q=S;return function(){var ae=S;S=Q;try{return U.apply(this,arguments)}finally{S=ae}}}})(wu)),wu}var Op;function __(){return Op||(Op=1,Tu.exports=g_()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function v_(){if(Fp)return Nn;Fp=1;var s=$d(),e=__();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function S(n){return h.call(v,n)?!0:h.call(_,n)?!1:p.test(n)?v[n]=!0:(_[n]=!0,!1)}function M(n,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,l){if(i===null||typeof i>"u"||M(n,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,l,f,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,D);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,D);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,D);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,l){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,l)&&(a=null),l||f===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?n.setAttributeNS(l,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),U=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=U&&n[U]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,O;function ie(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Pe=!1;function $(n,i){if(!n||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){l=re}n.call(i.prototype)}else{try{throw Error()}catch(re){l=re}n()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),m=l.stack.split(`
`),E=f.length-1,I=m.length-1;1<=E&&0<=I&&f[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==m[I]){var k=`
`+f[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=I);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function ue(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function _e(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case B:return"Portal";case N:return"Profiler";case W:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:_e(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return _e(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ct(n){n._valueTracker||(n._valueTracker=Ze(n))}function mt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=De(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function gn(n,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ut(n,i){ht(n,i);var a=Ae(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(l==="submit"||l==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,a):i.hasOwnProperty("defaultValue")&&At(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function $e(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function At(n,i,a){(i!=="number"||Lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ye=Array.isArray;function P(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ye(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function me(n,i){var a=Ae(i.value),l=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),l!=null&&(n.defaultValue=""+l)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,l,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Fe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function Qe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function Je(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=Qe(a,i[a],l);a==="float"&&(a="cssFloat"),l?n.setProperty(a,f):n[a]=f}}var ke=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function it(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,le=null,he=null;function Le(n){if(n=_a(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=po(i),Ce(n.stateNode,n.type,i))}}function Ne(n){le?he?he.push(n):he=[n]:le=n}function rt(){if(le){var n=le,i=he;if(he=le=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Dt(n,i){return n(i)}function Xt(){}var xt=!1;function En(n,i,a){if(xt)return n(i,a);xt=!0;try{return Dt(n,i,a)}finally{xt=!1,(le!==null||he!==null)&&(Xt(),rt())}}function _n(n,i){var a=n.stateNode;if(a===null)return null;var l=po(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ns=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{ns=!1}function wi(n,i,a,l,f,m,E,I,k){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(ye){this.onError(ye)}}var Ai=!1,Ar=null,br=!1,$i=null,Ya={onError:function(n){Ai=!0,Ar=n}};function is(n,i,a,l,f,m,E,I,k){Ai=!1,Ar=null,wi.apply(Ya,arguments)}function $a(n,i,a,l,f,m,E,I,k){if(is.apply(this,arguments),Ai){if(Ai){var re=Ar;Ai=!1,Ar=null}else throw Error(t(198));br||(br=!0,$i=re)}}function pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function qa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(n){if(pi(n)!==n)throw Error(t(188))}function Gl(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Ka(f),n;if(m===l)return Ka(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==l.return)a=f,l=m;else{for(var E=!1,I=f.child;I;){if(I===a){E=!0,a=f,l=m;break}if(I===l){E=!0,l=f,a=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===a){E=!0,a=m,l=f;break}if(I===l){E=!0,l=m,a=f;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==l)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function b(n){return n=Gl(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var se=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,j=e.unstable_shouldYield,we=e.unstable_requestPaint,Ee=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,je=e.unstable_LowPriority,_t=e.unstable_IdlePriority,Tt=null,gt=null;function ln(n){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Mt,Xe=Math.log,ti=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(Xe(n)/ti|0)|0}var cn=64,ni=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mi(n,i){var a=n.pendingLanes;if(a===0)return 0;var l=0,f=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~f;I!==0?l=Yt(I):(m&=E,m!==0&&(l=Yt(m)))}else E=a&~f,E!==0?l=Yt(E):m!==0&&(l=Yt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=l;0<i;)a=31-st(i),f=1<<a,l|=n[a],i&=~f;return l}function Pt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-st(m),I=1<<E,k=f[E];k===-1?((I&a)===0||(I&l)!==0)&&(f[E]=Pt(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function bi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),n}function Vn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-st(i),n[i]=a}function Za(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var l=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-st(a),m=1<<f;i[f]=0,l[f]=-1,n[f]=-1,a&=~m}}function jl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-st(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}var bt=0;function cf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var uf,Wl,df,ff,hf,Xl=!1,Qa=[],qi=null,Ki=null,Zi=null,ta=new Map,na=new Map,Qi=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ta.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(i.pointerId)}}function ia(n,i,a,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=_a(i),i!==null&&Wl(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Ug(n,i,a,l,f){switch(i){case"focusin":return qi=ia(qi,n,i,a,l,f),!0;case"dragenter":return Ki=ia(Ki,n,i,a,l,f),!0;case"mouseover":return Zi=ia(Zi,n,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return ta.set(m,ia(ta.get(m)||null,n,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,na.set(m,ia(na.get(m)||null,n,i,a,l,f)),!0}return!1}function mf(n){var i=Cr(n.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=qa(a),i!==null){n.blockedOn=i,hf(n.priority,function(){df(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ja(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);wt=l,a.target.dispatchEvent(l),wt=null}else return i=_a(a),i!==null&&Wl(i),n.blockedOn=a,!1;i.shift()}return!0}function gf(n,i,a){Ja(n)&&a.delete(i)}function Og(){Xl=!1,qi!==null&&Ja(qi)&&(qi=null),Ki!==null&&Ja(Ki)&&(Ki=null),Zi!==null&&Ja(Zi)&&(Zi=null),ta.forEach(gf),na.forEach(gf)}function ra(n,i){n.blockedOn===i&&(n.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Og)))}function sa(n){function i(f){return ra(f,n)}if(0<Qa.length){ra(Qa[0],n);for(var a=1;a<Qa.length;a++){var l=Qa[a];l.blockedOn===n&&(l.blockedOn=null)}}for(qi!==null&&ra(qi,n),Ki!==null&&ra(Ki,n),Zi!==null&&ra(Zi,n),ta.forEach(i),na.forEach(i),a=0;a<Qi.length;a++)l=Qi[a],l.blockedOn===n&&(l.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)mf(a),a.blockedOn===null&&Qi.shift()}var rs=R.ReactCurrentBatchConfig,eo=!0;function Fg(n,i,a,l){var f=bt,m=rs.transition;rs.transition=null;try{bt=1,Yl(n,i,a,l)}finally{bt=f,rs.transition=m}}function kg(n,i,a,l){var f=bt,m=rs.transition;rs.transition=null;try{bt=4,Yl(n,i,a,l)}finally{bt=f,rs.transition=m}}function Yl(n,i,a,l){if(eo){var f=$l(n,i,a,l);if(f===null)dc(n,i,l,to,a),pf(n,l);else if(Ug(f,n,i,a,l))l.stopPropagation();else if(pf(n,l),i&4&&-1<Dg.indexOf(n)){for(;f!==null;){var m=_a(f);if(m!==null&&uf(m),m=$l(n,i,a,l),m===null&&dc(n,i,l,to,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else dc(n,i,l,null,a)}}var to=null;function $l(n,i,a,l){if(to=null,n=V(l),n=Cr(n),n!==null)if(i=pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=qa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return to=n,null}function _f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case je:return 16;case _t:return 536870912;default:return 16}default:return 16}}var Ji=null,ql=null,no=null;function vf(){if(no)return no;var n,i=ql,a=i.length,l,f="value"in Ji?Ji.value:Ji.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[m-l];l++);return no=f.slice(n,1<l?1-l:void 0)}function io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ro(){return!0}function xf(){return!1}function Un(n){function i(a,l,f,m,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ro:xf,this.isPropagationStopped=xf,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Un(ss),aa=ae({},ss,{view:0,detail:0}),Bg=Un(aa),Zl,Ql,oa,so=ae({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oa&&(oa&&n.type==="mousemove"?(Zl=n.screenX-oa.screenX,Ql=n.screenY-oa.screenY):Ql=Zl=0,oa=n),Zl)},movementY:function(n){return"movementY"in n?n.movementY:Ql}}),yf=Un(so),zg=ae({},so,{dataTransfer:0}),Hg=Un(zg),Vg=ae({},aa,{relatedTarget:0}),Jl=Un(Vg),Gg=ae({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=Un(Gg),Wg=ae({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xg=Un(Wg),Yg=ae({},ss,{data:0}),Sf=Un(Yg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kg[n])?!!i[n]:!1}function ec(){return Zg}var Qg=ae({},aa,{key:function(n){if(n.key){var i=$g[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(n){return n.type==="keypress"?io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jg=Un(Qg),e0=ae({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Un(e0),t0=ae({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),n0=Un(t0),i0=ae({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=Un(i0),s0=ae({},so,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Un(s0),o0=[9,13,27,32],tc=d&&"CompositionEvent"in window,la=null;d&&"documentMode"in document&&(la=document.documentMode);var l0=d&&"TextEvent"in window&&!la,Ef=d&&(!tc||la&&8<la&&11>=la),Tf=" ",wf=!1;function Af(n,i){switch(n){case"keyup":return o0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function c0(n,i){switch(n){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(wf=!0,Tf);case"textInput":return n=i.data,n===Tf&&wf?null:n;default:return null}}function u0(n,i){if(as)return n==="compositionend"||!tc&&Af(n,i)?(n=vf(),no=ql=Ji=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ef&&i.locale!=="ko"?null:i.data;default:return null}}var d0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!d0[n.type]:i==="textarea"}function Rf(n,i,a,l){Ne(l),i=uo(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var ca=null,ua=null;function f0(n){Yf(n,0)}function ao(n){var i=ds(n);if(mt(i))return n}function h0(n,i){if(n==="change")return i}var Nf=!1;if(d){var nc;if(d){var ic="oninput"in document;if(!ic){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),ic=typeof Pf.oninput=="function"}nc=ic}else nc=!1;Nf=nc&&(!document.documentMode||9<document.documentMode)}function Lf(){ca&&(ca.detachEvent("onpropertychange",If),ua=ca=null)}function If(n){if(n.propertyName==="value"&&ao(ua)){var i=[];Rf(i,ua,n,V(n)),En(f0,i)}}function p0(n,i,a){n==="focusin"?(Lf(),ca=i,ua=a,ca.attachEvent("onpropertychange",If)):n==="focusout"&&Lf()}function m0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ao(ua)}function g0(n,i){if(n==="click")return ao(i)}function _0(n,i){if(n==="input"||n==="change")return ao(i)}function v0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:v0;function da(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!h.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function Df(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uf(n,i){var a=Df(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Df(a)}}function Of(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Of(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ff(){for(var n=window,i=Lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lt(n.document)}return i}function rc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function x0(n){var i=Ff(),a=n.focusedElem,l=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(l!==null&&rc(a)){if(i=l.start,n=l.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!n.extend&&m>l&&(f=l,l=m,m=f),f=Uf(a,m);var E=Uf(a,l);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>l?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var y0=d&&"documentMode"in document&&11>=document.documentMode,os=null,sc=null,fa=null,ac=!1;function kf(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||os==null||os!==Lt(l)||(l=os,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fa&&da(fa,l)||(fa=l,l=uo(sc,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=os)))}function oo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ls={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},oc={},Bf={};d&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function lo(n){if(oc[n])return oc[n];if(!ls[n])return n;var i=ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bf)return oc[n]=i[a];return n}var zf=lo("animationend"),Hf=lo("animationiteration"),Vf=lo("animationstart"),Gf=lo("transitionend"),jf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,i){jf.set(n,i),c(i,[n])}for(var lc=0;lc<Wf.length;lc++){var cc=Wf[lc],S0=cc.toLowerCase(),M0=cc[0].toUpperCase()+cc.slice(1);er(S0,"on"+M0)}er(zf,"onAnimationEnd"),er(Hf,"onAnimationIteration"),er(Vf,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Gf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Xf(n,i,a){var l=n.type||"unknown-event";n.currentTarget=a,$a(l,i,void 0,n),n.currentTarget=null}function Yf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],k=I.instance,re=I.currentTarget;if(I=I.listener,k!==m&&f.isPropagationStopped())break e;Xf(f,I,re),m=k}else for(E=0;E<l.length;E++){if(I=l[E],k=I.instance,re=I.currentTarget,I=I.listener,k!==m&&f.isPropagationStopped())break e;Xf(f,I,re),m=k}}}if(br)throw n=$i,br=!1,$i=null,n}function Ut(n,i){var a=i[_c];a===void 0&&(a=i[_c]=new Set);var l=n+"__bubble";a.has(l)||($f(i,n,2,!1),a.add(l))}function uc(n,i,a){var l=0;i&&(l|=4),$f(a,n,l,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[co]){n[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(E0.has(a)||uc(a,!1,n),uc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[co]||(i[co]=!0,uc("selectionchange",!1,i))}}function $f(n,i,a,l){switch(_f(i)){case 1:var f=Fg;break;case 4:f=kg;break;default:f=Yl}a=f.bind(null,i,a,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function dc(n,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Cr(I),E===null)return;if(k=E.tag,k===5||k===6){l=m=E;continue e}I=I.parentNode}}l=l.return}En(function(){var re=m,ye=V(a),Se=[];e:{var ve=jf.get(n);if(ve!==void 0){var Ie=Kl,Be=n;switch(n){case"keypress":if(io(a)===0)break e;case"keydown":case"keyup":Ie=Jg;break;case"focusin":Be="focus",Ie=Jl;break;case"focusout":Be="blur",Ie=Jl;break;case"beforeblur":case"afterblur":Ie=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=n0;break;case zf:case Hf:case Vf:Ie=jg;break;case Gf:Ie=r0;break;case"scroll":Ie=Bg;break;case"wheel":Ie=a0;break;case"copy":case"cut":case"paste":Ie=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Mf}var He=(i&4)!==0,Gt=!He&&n==="scroll",Y=He?ve!==null?ve+"Capture":null:ve;He=[];for(var H=re,Z;H!==null;){Z=H;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,Y!==null&&(Te=_n(H,Y),Te!=null&&He.push(ma(H,Te,Z)))),Gt)break;H=H.return}0<He.length&&(ve=new Ie(ve,Be,null,a,ye),Se.push({event:ve,listeners:He}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ve&&a!==wt&&(Be=a.relatedTarget||a.fromElement)&&(Cr(Be)||Be[Ci]))break e;if((Ie||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ie?(Be=a.relatedTarget||a.toElement,Ie=re,Be=Be?Cr(Be):null,Be!==null&&(Gt=pi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=re),Ie!==Be)){if(He=yf,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(He=Mf,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Gt=Ie==null?ve:ds(Ie),Z=Be==null?ve:ds(Be),ve=new He(Te,H+"leave",Ie,a,ye),ve.target=Gt,ve.relatedTarget=Z,Te=null,Cr(ye)===re&&(He=new He(Y,H+"enter",Be,a,ye),He.target=Z,He.relatedTarget=Gt,Te=He),Gt=Te,Ie&&Be)t:{for(He=Ie,Y=Be,H=0,Z=He;Z;Z=cs(Z))H++;for(Z=0,Te=Y;Te;Te=cs(Te))Z++;for(;0<H-Z;)He=cs(He),H--;for(;0<Z-H;)Y=cs(Y),Z--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=cs(He),Y=cs(Y)}He=null}else He=null;Ie!==null&&qf(Se,ve,Ie,He,!1),Be!==null&&Gt!==null&&qf(Se,Gt,Be,He,!0)}}e:{if(ve=re?ds(re):window,Ie=ve.nodeName&&ve.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ve.type==="file")var We=h0;else if(Cf(ve))if(Nf)We=_0;else{We=m0;var qe=p0}else(Ie=ve.nodeName)&&Ie.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(We=g0);if(We&&(We=We(n,re))){Rf(Se,We,a,ye);break e}qe&&qe(n,ve,re),n==="focusout"&&(qe=ve._wrapperState)&&qe.controlled&&ve.type==="number"&&At(ve,"number",ve.value)}switch(qe=re?ds(re):window,n){case"focusin":(Cf(qe)||qe.contentEditable==="true")&&(os=qe,sc=re,fa=null);break;case"focusout":fa=sc=os=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,kf(Se,a,ye);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":kf(Se,a,ye)}var Ke;if(tc)e:{switch(n){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else as?Af(n,a)&&(tt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Ef&&a.locale!=="ko"&&(as||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&as&&(Ke=vf()):(Ji=ye,ql="value"in Ji?Ji.value:Ji.textContent,as=!0)),qe=uo(re,tt),0<qe.length&&(tt=new Sf(tt,n,null,a,ye),Se.push({event:tt,listeners:qe}),Ke?tt.data=Ke:(Ke=bf(a),Ke!==null&&(tt.data=Ke)))),(Ke=l0?c0(n,a):u0(n,a))&&(re=uo(re,"onBeforeInput"),0<re.length&&(ye=new Sf("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:re}),ye.data=Ke))}Yf(Se,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function uo(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=_n(n,a),m!=null&&l.unshift(ma(n,m,f)),m=_n(n,i),m!=null&&l.push(ma(n,m,f))),n=n.return}return l}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qf(n,i,a,l,f){for(var m=i._reactName,E=[];a!==null&&a!==l;){var I=a,k=I.alternate,re=I.stateNode;if(k!==null&&k===l)break;I.tag===5&&re!==null&&(I=re,f?(k=_n(a,m),k!=null&&E.unshift(ma(a,k,I))):f||(k=_n(a,m),k!=null&&E.push(ma(a,k,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var T0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(T0,`
`).replace(w0,"")}function fo(n,i,a){if(i=Kf(i),Kf(n)!==i&&a)throw Error(t(425))}function ho(){}var fc=null,hc=null;function pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,A0=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(C0)}:mc;function C0(n){setTimeout(function(){throw n})}function gc(n,i){var a=i,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){n.removeChild(f),sa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);sa(i)}function tr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),gi="__reactFiber$"+us,ga="__reactProps$"+us,Ci="__reactContainer$"+us,_c="__reactEvents$"+us,R0="__reactListeners$"+us,N0="__reactHandles$"+us;function Cr(n){var i=n[gi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ci]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Qf(n);n!==null;){if(a=n[gi])return a;n=Qf(n)}return i}n=a,a=n.parentNode}return null}function _a(n){return n=n[gi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function po(n){return n[ga]||null}var vc=[],fs=-1;function nr(n){return{current:n}}function Ot(n){0>fs||(n.current=vc[fs],vc[fs]=null,fs--)}function It(n,i){fs++,vc[fs]=n.current,n.current=i}var ir={},un=nr(ir),wn=nr(!1),Rr=ir;function hs(n,i){var a=n.type.contextTypes;if(!a)return ir;var l=n.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function An(n){return n=n.childContextTypes,n!=null}function mo(){Ot(wn),Ot(un)}function Jf(n,i,a){if(un.current!==ir)throw Error(t(168));It(un,i),It(wn,a)}function eh(n,i,a){var l=n.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return ae({},a,l)}function go(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ir,Rr=un.current,It(un,n),It(wn,wn.current),!0}function th(n,i,a){var l=n.stateNode;if(!l)throw Error(t(169));a?(n=eh(n,i,Rr),l.__reactInternalMemoizedMergedChildContext=n,Ot(wn),Ot(un),It(un,n)):Ot(wn),It(wn,a)}var Ri=null,_o=!1,xc=!1;function nh(n){Ri===null?Ri=[n]:Ri.push(n)}function P0(n){_o=!0,nh(n)}function rr(){if(!xc&&Ri!==null){xc=!0;var n=0,i=bt;try{var a=Ri;for(bt=1;n<a.length;n++){var l=a[n];do l=l(!0);while(l!==null)}Ri=null,_o=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(n+1)),se(ze,rr),f}finally{bt=i,xc=!1}}return null}var ps=[],ms=0,vo=null,xo=0,Gn=[],jn=0,Nr=null,Ni=1,Pi="";function Pr(n,i){ps[ms++]=xo,ps[ms++]=vo,vo=n,xo=i}function ih(n,i,a){Gn[jn++]=Ni,Gn[jn++]=Pi,Gn[jn++]=Nr,Nr=n;var l=Ni;n=Pi;var f=32-st(l)-1;l&=~(1<<f),a+=1;var m=32-st(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Ni=1<<32-st(i)+f|a<<f|l,Pi=m+n}else Ni=1<<m|a<<f|l,Pi=n}function yc(n){n.return!==null&&(Pr(n,1),ih(n,1,0))}function Sc(n){for(;n===vo;)vo=ps[--ms],ps[ms]=null,xo=ps[--ms],ps[ms]=null;for(;n===Nr;)Nr=Gn[--jn],Gn[jn]=null,Pi=Gn[--jn],Gn[jn]=null,Ni=Gn[--jn],Gn[jn]=null}var On=null,Fn=null,Ft=!1,ri=null;function rh(n,i){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function sh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,Fn=tr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Ni,overflow:Pi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,Fn=null,!0):!1;default:return!1}}function Mc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ec(n){if(Ft){var i=Fn;if(i){var a=i;if(!sh(n,i)){if(Mc(n))throw Error(t(418));i=tr(a.nextSibling);var l=On;i&&sh(n,i)?rh(l,a):(n.flags=n.flags&-4097|2,Ft=!1,On=n)}}else{if(Mc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ft=!1,On=n}}}function ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function yo(n){if(n!==On)return!1;if(!Ft)return ah(n),Ft=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!pc(n.type,n.memoizedProps)),i&&(i=Fn)){if(Mc(n))throw oh(),Error(t(418));for(;i;)rh(n,i),i=tr(i.nextSibling)}if(ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Fn=tr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=On?tr(n.stateNode.nextSibling):null;return!0}function oh(){for(var n=Fn;n;)n=tr(n.nextSibling)}function gs(){Fn=On=null,Ft=!1}function Tc(n){ri===null?ri=[n]:ri.push(n)}var L0=R.ReactCurrentBatchConfig;function va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var l=a.stateNode}if(!l)throw Error(t(147,n));var f=l,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=f.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function So(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function lh(n){var i=n._init;return i(n._payload)}function ch(n){function i(Y,H){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[H],Y.flags|=16):Z.push(H)}}function a(Y,H){if(!n)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=fr(Y,H),Y.index=0,Y.sibling=null,Y}function m(Y,H,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<H?(Y.flags|=2,H):Z):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,Z,Te){return H===null||H.tag!==6?(H=mu(Z,Y.mode,Te),H.return=Y,H):(H=f(H,Z),H.return=Y,H)}function k(Y,H,Z,Te){var We=Z.type;return We===F?ye(Y,H,Z.props.children,Te,Z.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&lh(We)===H.type)?(Te=f(H,Z.props),Te.ref=va(Y,H,Z),Te.return=Y,Te):(Te=Wo(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=va(Y,H,Z),Te.return=Y,Te)}function re(Y,H,Z,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=gu(Z,Y.mode,Te),H.return=Y,H):(H=f(H,Z.children||[]),H.return=Y,H)}function ye(Y,H,Z,Te,We){return H===null||H.tag!==7?(H=Br(Z,Y.mode,Te,We),H.return=Y,H):(H=f(H,Z),H.return=Y,H)}function Se(Y,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return H=mu(""+H,Y.mode,Z),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case J:return Z=Wo(H.type,H.key,H.props,null,Y.mode,Z),Z.ref=va(Y,null,H),Z.return=Y,Z;case B:return H=gu(H,Y.mode,Z),H.return=Y,H;case K:var Te=H._init;return Se(Y,Te(H._payload),Z)}if(Ye(H)||Q(H))return H=Br(H,Y.mode,Z,null),H.return=Y,H;So(Y,H)}return null}function ve(Y,H,Z,Te){var We=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return We!==null?null:I(Y,H,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case J:return Z.key===We?k(Y,H,Z,Te):null;case B:return Z.key===We?re(Y,H,Z,Te):null;case K:return We=Z._init,ve(Y,H,We(Z._payload),Te)}if(Ye(Z)||Q(Z))return We!==null?null:ye(Y,H,Z,Te,null);So(Y,Z)}return null}function Ie(Y,H,Z,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(Z)||null,I(H,Y,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case J:return Y=Y.get(Te.key===null?Z:Te.key)||null,k(H,Y,Te,We);case B:return Y=Y.get(Te.key===null?Z:Te.key)||null,re(H,Y,Te,We);case K:var qe=Te._init;return Ie(Y,H,Z,qe(Te._payload),We)}if(Ye(Te)||Q(Te))return Y=Y.get(Z)||null,ye(H,Y,Te,We,null);So(H,Te)}return null}function Be(Y,H,Z,Te){for(var We=null,qe=null,Ke=H,tt=H=0,tn=null;Ke!==null&&tt<Z.length;tt++){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var Et=ve(Y,Ke,Z[tt],Te);if(Et===null){Ke===null&&(Ke=tn);break}n&&Ke&&Et.alternate===null&&i(Y,Ke),H=m(Et,H,tt),qe===null?We=Et:qe.sibling=Et,qe=Et,Ke=tn}if(tt===Z.length)return a(Y,Ke),Ft&&Pr(Y,tt),We;if(Ke===null){for(;tt<Z.length;tt++)Ke=Se(Y,Z[tt],Te),Ke!==null&&(H=m(Ke,H,tt),qe===null?We=Ke:qe.sibling=Ke,qe=Ke);return Ft&&Pr(Y,tt),We}for(Ke=l(Y,Ke);tt<Z.length;tt++)tn=Ie(Ke,Y,tt,Z[tt],Te),tn!==null&&(n&&tn.alternate!==null&&Ke.delete(tn.key===null?tt:tn.key),H=m(tn,H,tt),qe===null?We=tn:qe.sibling=tn,qe=tn);return n&&Ke.forEach(function(hr){return i(Y,hr)}),Ft&&Pr(Y,tt),We}function He(Y,H,Z,Te){var We=Q(Z);if(typeof We!="function")throw Error(t(150));if(Z=We.call(Z),Z==null)throw Error(t(151));for(var qe=We=null,Ke=H,tt=H=0,tn=null,Et=Z.next();Ke!==null&&!Et.done;tt++,Et=Z.next()){Ke.index>tt?(tn=Ke,Ke=null):tn=Ke.sibling;var hr=ve(Y,Ke,Et.value,Te);if(hr===null){Ke===null&&(Ke=tn);break}n&&Ke&&hr.alternate===null&&i(Y,Ke),H=m(hr,H,tt),qe===null?We=hr:qe.sibling=hr,qe=hr,Ke=tn}if(Et.done)return a(Y,Ke),Ft&&Pr(Y,tt),We;if(Ke===null){for(;!Et.done;tt++,Et=Z.next())Et=Se(Y,Et.value,Te),Et!==null&&(H=m(Et,H,tt),qe===null?We=Et:qe.sibling=Et,qe=Et);return Ft&&Pr(Y,tt),We}for(Ke=l(Y,Ke);!Et.done;tt++,Et=Z.next())Et=Ie(Ke,Y,tt,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&Ke.delete(Et.key===null?tt:Et.key),H=m(Et,H,tt),qe===null?We=Et:qe.sibling=Et,qe=Et);return n&&Ke.forEach(function(d_){return i(Y,d_)}),Ft&&Pr(Y,tt),We}function Gt(Y,H,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case J:e:{for(var We=Z.key,qe=H;qe!==null;){if(qe.key===We){if(We=Z.type,We===F){if(qe.tag===7){a(Y,qe.sibling),H=f(qe,Z.props.children),H.return=Y,Y=H;break e}}else if(qe.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&lh(We)===qe.type){a(Y,qe.sibling),H=f(qe,Z.props),H.ref=va(Y,qe,Z),H.return=Y,Y=H;break e}a(Y,qe);break}else i(Y,qe);qe=qe.sibling}Z.type===F?(H=Br(Z.props.children,Y.mode,Te,Z.key),H.return=Y,Y=H):(Te=Wo(Z.type,Z.key,Z.props,null,Y.mode,Te),Te.ref=va(Y,H,Z),Te.return=Y,Y=Te)}return E(Y);case B:e:{for(qe=Z.key;H!==null;){if(H.key===qe)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){a(Y,H.sibling),H=f(H,Z.children||[]),H.return=Y,Y=H;break e}else{a(Y,H);break}else i(Y,H);H=H.sibling}H=gu(Z,Y.mode,Te),H.return=Y,Y=H}return E(Y);case K:return qe=Z._init,Gt(Y,H,qe(Z._payload),Te)}if(Ye(Z))return Be(Y,H,Z,Te);if(Q(Z))return He(Y,H,Z,Te);So(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,H!==null&&H.tag===6?(a(Y,H.sibling),H=f(H,Z),H.return=Y,Y=H):(a(Y,H),H=mu(Z,Y.mode,Te),H.return=Y,Y=H),E(Y)):a(Y,H)}return Gt}var _s=ch(!0),uh=ch(!1),Mo=nr(null),Eo=null,vs=null,wc=null;function Ac(){wc=vs=Eo=null}function bc(n){var i=Mo.current;Ot(Mo),n._currentValue=i}function Cc(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function xs(n,i){Eo=n,wc=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(bn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(wc!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(Eo===null)throw Error(t(308));vs=n,Eo.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Lr=null;function Rc(n){Lr===null?Lr=[n]:Lr.push(n)}function dh(n,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Rc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Li(n,l)}function Li(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var sr=!1;function Nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ii(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Li(n,a)}return f=l.interleaved,f===null?(i.next=i,Rc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Li(n,a)}function To(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,jl(n,a)}}function hh(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,effects:l.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function wo(n,i,a,l){var f=n.updateQueue;sr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var k=I,re=k.next;k.next=null,E===null?m=re:E.next=re,E=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==E&&(I===null?ye.firstBaseUpdate=re:I.next=re,ye.lastBaseUpdate=k))}if(m!==null){var Se=f.baseState;E=0,ye=re=k=null,I=m;do{var ve=I.lane,Ie=I.eventTime;if((l&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=n,He=I;switch(ve=i,Ie=a,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Se=Be.call(Ie,Se,ve);break e}Se=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ve=typeof Be=="function"?Be.call(Ie,Se,ve):Be,ve==null)break e;Se=ae({},Se,ve);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else Ie={eventTime:Ie,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(re=ye=Ie,k=Se):ye=ye.next=Ie,E|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(ye===null&&(k=Se),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=ye,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Ur|=E,n.lanes=E,n.memoizedState=Se}}function ph(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var l=n[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(t(191,f));f.call(l)}}}var xa={},_i=nr(xa),ya=nr(xa),Sa=nr(xa);function Ir(n){if(n===xa)throw Error(t(174));return n}function Pc(n,i){switch(It(Sa,i),It(ya,n),It(_i,xa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}Ot(_i),It(_i,i)}function ys(){Ot(_i),Ot(ya),Ot(Sa)}function mh(n){Ir(Sa.current);var i=Ir(_i.current),a=Ve(i,n.type);i!==a&&(It(ya,n),It(_i,a))}function Lc(n){ya.current===n&&(Ot(_i),Ot(ya))}var Bt=nr(0);function Ao(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Dc(){for(var n=0;n<Ic.length;n++)Ic[n]._workInProgressVersionPrimary=null;Ic.length=0}var bo=R.ReactCurrentDispatcher,Uc=R.ReactCurrentBatchConfig,Dr=0,zt=null,$t=null,Jt=null,Co=!1,Ma=!1,Ea=0,I0=0;function dn(){throw Error(t(321))}function Oc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function Fc(n,i,a,l,f,m){if(Dr=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=n===null||n.memoizedState===null?F0:k0,n=a(l,f),Ma){m=0;do{if(Ma=!1,Ea=0,25<=m)throw Error(t(301));m+=1,Jt=$t=null,i.updateQueue=null,bo.current=B0,n=a(l,f)}while(Ma)}if(bo.current=Po,i=$t!==null&&$t.next!==null,Dr=0,Jt=$t=zt=null,Co=!1,i)throw Error(t(300));return n}function kc(){var n=Ea!==0;return Ea=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n,Jt}function Xn(){if($t===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?zt.memoizedState=Jt=n:Jt=Jt.next=n}return Jt}function Ta(n,i){return typeof i=="function"?i(n):i}function Bc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=$t,f=l.baseQueue,m=a.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}l.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,l=l.baseState;var I=E=null,k=null,re=m;do{var ye=re.lane;if((Dr&ye)===ye)k!==null&&(k=k.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:n(l,re.action);else{var Se={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};k===null?(I=k=Se,E=l):k=k.next=Se,zt.lanes|=ye,Ur|=ye}re=re.next}while(re!==null&&re!==m);k===null?E=l:k.next=I,ii(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,a.lastRenderedState=l}if(n=a.interleaved,n!==null){f=n;do m=f.lane,zt.lanes|=m,Ur|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zc(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);ii(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function gh(){}function _h(n,i){var a=zt,l=Xn(),f=i(),m=!ii(l.memoizedState,f);if(m&&(l.memoizedState=f,bn=!0),l=l.queue,Hc(yh.bind(null,a,l,n),[n]),l.getSnapshot!==i||m||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,wa(9,xh.bind(null,a,l,f,i),void 0,null),en===null)throw Error(t(349));(Dr&30)!==0||vh(a,i,f)}return f}function vh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function xh(n,i,a,l){i.value=a,i.getSnapshot=l,Sh(i)&&Mh(n)}function yh(n,i,a){return a(function(){Sh(i)&&Mh(n)})}function Sh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function Mh(n){var i=Li(n,1);i!==null&&li(i,n,1,-1)}function Eh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=O0.bind(null,zt,n),[i.memoizedState,n]}function wa(n,i,a,l){return n={tag:n,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n)),n}function Th(){return Xn().memoizedState}function Ro(n,i,a,l){var f=vi();zt.flags|=n,f.memoizedState=wa(1|i,a,void 0,l===void 0?null:l)}function No(n,i,a,l){var f=Xn();l=l===void 0?null:l;var m=void 0;if($t!==null){var E=$t.memoizedState;if(m=E.destroy,l!==null&&Oc(l,E.deps)){f.memoizedState=wa(i,a,m,l);return}}zt.flags|=n,f.memoizedState=wa(1|i,a,m,l)}function wh(n,i){return Ro(8390656,8,n,i)}function Hc(n,i){return No(2048,8,n,i)}function Ah(n,i){return No(4,2,n,i)}function bh(n,i){return No(4,4,n,i)}function Ch(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Rh(n,i,a){return a=a!=null?a.concat([n]):null,No(4,4,Ch.bind(null,i,n),a)}function Vc(){}function Nh(n,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Ph(n,i){var a=Xn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Oc(i,l[1])?l[0]:(n=n(),a.memoizedState=[n,i],n)}function Lh(n,i,a){return(Dr&21)===0?(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=a):(ii(a,i)||(a=vn(),zt.lanes|=a,Ur|=a,n.baseState=!0),i)}function D0(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var l=Uc.transition;Uc.transition={};try{n(!1),i()}finally{bt=a,Uc.transition=l}}function Ih(){return Xn().memoizedState}function U0(n,i,a){var l=ur(n);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Dh(n))Uh(i,a);else if(a=dh(n,i,a,l),a!==null){var f=yn();li(a,n,l,f),Oh(a,i,l)}}function O0(n,i,a){var l=ur(n),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dh(n))Uh(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,a);if(f.hasEagerState=!0,f.eagerState=I,ii(I,E)){var k=i.interleaved;k===null?(f.next=f,Rc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}a=dh(n,i,f,l),a!==null&&(f=yn(),li(a,n,l,f),Oh(a,i,l))}}function Dh(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function Uh(n,i){Ma=Co=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Oh(n,i,a){if((a&4194240)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,jl(n,a)}}var Po={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},F0={readContext:Wn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:wh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ro(4194308,4,Ch.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ro(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ro(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var l=vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},l.queue=n,n=n.dispatch=U0.bind(null,zt,n),[l.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Eh,useDebugValue:Vc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Eh(!1),i=n[0];return n=D0.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var l=zt,f=vi();if(Ft){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),en===null)throw Error(t(349));(Dr&30)!==0||vh(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,wh(yh.bind(null,l,m,n),[n]),l.flags|=2048,wa(9,xh.bind(null,l,m,a,i),void 0,null),a},useId:function(){var n=vi(),i=en.identifierPrefix;if(Ft){var a=Pi,l=Ni;a=(l&~(1<<32-st(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=I0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},k0={readContext:Wn,useCallback:Nh,useContext:Wn,useEffect:Hc,useImperativeHandle:Rh,useInsertionEffect:Ah,useLayoutEffect:bh,useMemo:Ph,useReducer:Bc,useRef:Th,useState:function(){return Bc(Ta)},useDebugValue:Vc,useDeferredValue:function(n){var i=Xn();return Lh(i,$t.memoizedState,n)},useTransition:function(){var n=Bc(Ta)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:gh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1},B0={readContext:Wn,useCallback:Nh,useContext:Wn,useEffect:Hc,useImperativeHandle:Rh,useInsertionEffect:Ah,useLayoutEffect:bh,useMemo:Ph,useReducer:zc,useRef:Th,useState:function(){return zc(Ta)},useDebugValue:Vc,useDeferredValue:function(n){var i=Xn();return $t===null?i.memoizedState=n:Lh(i,$t.memoizedState,n)},useTransition:function(){var n=zc(Ta)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:gh,useSyncExternalStore:_h,useId:Ih,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Gc(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Lo={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var l=yn(),f=ur(n),m=Ii(l,f);m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,f),i!==null&&(li(i,n,f,l),To(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=yn(),f=ur(n),m=Ii(l,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,f),i!==null&&(li(i,n,f,l),To(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=yn(),l=ur(n),f=Ii(a,l);f.tag=2,i!=null&&(f.callback=i),i=ar(n,f,l),i!==null&&(li(i,n,l,a),To(i,n,l))}};function Fh(n,i,a,l,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!da(a,l)||!da(f,m):!0}function kh(n,i,a){var l=!1,f=ir,m=i.contextType;return typeof m=="object"&&m!==null?m=Wn(m):(f=An(i)?Rr:un.current,l=i.contextTypes,m=(l=l!=null)?hs(n,f):ir),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,n.stateNode=i,i._reactInternals=n,l&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Bh(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&Lo.enqueueReplaceState(i,i.state,null)}function jc(n,i,a,l){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Nc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Wn(m):(m=An(i)?Rr:un.current,f.context=hs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Gc(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Lo.enqueueReplaceState(f,f.state,null),wo(n,a,f,l),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Wc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Xc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var z0=typeof WeakMap=="function"?WeakMap:Map;function zh(n,i,a){a=Ii(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Bo||(Bo=!0,ou=l),Xc(n,i)},a}function Hh(n,i,a){a=Ii(-1,a),a.tag=3;var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Xc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Xc(n,i),typeof l!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Vh(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new z0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),n=e_.bind(null,n,i,a),i.then(n,n))}function Gh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jh(n,i,a,l,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ii(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var H0=R.ReactCurrentOwner,bn=!1;function xn(n,i,a,l){i.child=n===null?uh(i,null,a,l):_s(i,n.child,a,l)}function Wh(n,i,a,l,f){a=a.render;var m=i.ref;return xs(i,f),l=Fc(n,i,a,l,m,f),a=kc(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Di(n,i,f)):(Ft&&a&&yc(i),i.flags|=1,xn(n,i,l,f),i.child)}function Xh(n,i,a,l,f){if(n===null){var m=a.type;return typeof m=="function"&&!pu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Yh(n,i,m,l,f)):(n=Wo(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(E,l)&&n.ref===i.ref)return Di(n,i,f)}return i.flags|=1,n=fr(m,l),n.ref=i.ref,n.return=i,i.child=n}function Yh(n,i,a,l,f){if(n!==null){var m=n.memoizedProps;if(da(m,l)&&n.ref===i.ref)if(bn=!1,i.pendingProps=l=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(bn=!0);else return i.lanes=n.lanes,Di(n,i,f)}return Yc(n,i,a,l,f)}function $h(n,i,a){var l=i.pendingProps,f=l.children,m=n!==null?n.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Es,kn),kn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Es,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,It(Es,kn),kn|=l}else m!==null?(l=m.baseLanes|a,i.memoizedState=null):l=a,It(Es,kn),kn|=l;return xn(n,i,f,a),i.child}function qh(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yc(n,i,a,l,f){var m=An(a)?Rr:un.current;return m=hs(i,m),xs(i,f),a=Fc(n,i,a,l,m,f),l=kc(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Di(n,i,f)):(Ft&&l&&yc(i),i.flags|=1,xn(n,i,a,f),i.child)}function Kh(n,i,a,l,f){if(An(a)){var m=!0;go(i)}else m=!1;if(xs(i,f),i.stateNode===null)Do(n,i),kh(i,a,l),jc(i,a,l,f),l=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var k=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=Wn(re):(re=An(a)?Rr:un.current,re=hs(i,re));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||k!==re)&&Bh(i,E,l,re),sr=!1;var ve=i.memoizedState;E.state=ve,wo(i,l,E,f),k=i.memoizedState,I!==l||ve!==k||wn.current||sr?(typeof ye=="function"&&(Gc(i,a,ye,l),k=i.memoizedState),(I=sr||Fh(i,a,I,l,ve,k,re))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=re,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,fh(n,i),I=i.memoizedProps,re=i.type===i.elementType?I:si(i.type,I),E.props=re,Se=i.pendingProps,ve=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=An(a)?Rr:un.current,k=hs(i,k));var Ie=a.getDerivedStateFromProps;(ye=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Se||ve!==k)&&Bh(i,E,l,k),sr=!1,ve=i.memoizedState,E.state=ve,wo(i,l,E,f);var Be=i.memoizedState;I!==Se||ve!==Be||wn.current||sr?(typeof Ie=="function"&&(Gc(i,a,Ie,l),Be=i.memoizedState),(re=sr||Fh(i,a,re,l,ve,Be,k)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Be,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Be,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),E.props=l,E.state=Be,E.context=k,l=re):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),l=!1)}return $c(n,i,a,l,m,f)}function $c(n,i,a,l,f,m){qh(n,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&th(i,a,!1),Di(n,i,m);l=i.stateNode,H0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,m),i.child=_s(i,null,I,m)):xn(n,i,I,m),i.memoizedState=l.state,f&&th(i,a,!0),i.child}function Zh(n){var i=n.stateNode;i.pendingContext?Jf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Jf(n,i.context,!1),Pc(n,i.containerInfo)}function Qh(n,i,a,l,f){return gs(),Tc(f),i.flags|=256,xn(n,i,a,l),i.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Kc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jh(n,i,a){var l=i.pendingProps,f=Bt.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),It(Bt,f&1),n===null)return Ec(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,n=l.fallback,m?(l=i.mode,m=i.child,E={mode:"hidden",children:E},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Xo(E,l,0,null),n=Br(n,l,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Kc(a),i.memoizedState=qc,n):Zc(i,E));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return V0(n,i,E,l,I,f,a);if(m){m=l.fallback,E=i.mode,f=n.child,I=f.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=fr(f,k),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=fr(I,m):(m=Br(m,E,a,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,E=n.child.memoizedState,E=E===null?Kc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=qc,l}return m=n.child,n=m.sibling,l=fr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=l,i.memoizedState=null,l}function Zc(n,i){return i=Xo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Io(n,i,a,l){return l!==null&&Tc(l),_s(i,n.child,null,a),n=Zc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function V0(n,i,a,l,f,m,E){if(a)return i.flags&256?(i.flags&=-257,l=Wc(Error(t(422))),Io(n,i,E,l)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=l.fallback,f=i.mode,l=Xo({mode:"visible",children:l.children},f,0,null),m=Br(m,f,E,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=Kc(E),i.memoizedState=qc,m);if((i.mode&1)===0)return Io(n,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,m=Error(t(419)),l=Wc(m,l,void 0),Io(n,i,E,l)}if(I=(E&n.childLanes)!==0,bn||I){if(l=en,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Li(n,f),li(l,n,f,-1))}return hu(),l=Wc(Error(t(421))),Io(n,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=t_.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Fn=tr(f.nextSibling),On=i,Ft=!0,ri=null,n!==null&&(Gn[jn++]=Ni,Gn[jn++]=Pi,Gn[jn++]=Nr,Ni=n.id,Pi=n.overflow,Nr=i),i=Zc(i,l.children),i.flags|=4096,i)}function ep(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Cc(n.return,i,a)}function Qc(n,i,a,l,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function tp(n,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(xn(n,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ep(n,a,i);else if(n.tag===19)ep(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}if(It(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Ao(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Qc(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ao(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Qc(i,!0,a,null,m);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Do(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function G0(n,i,a){switch(i.tag){case 3:Zh(i),gs();break;case 5:mh(i);break;case 1:An(i.type)&&go(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;It(Mo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jh(n,i,a):(It(Bt,Bt.current&1),n=Di(n,i,a),n!==null?n.sibling:null);It(Bt,Bt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(n.flags&128)!==0){if(l)return tp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,$h(n,i,a)}return Di(n,i,a)}var np,Jc,ip,rp;np=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Jc=function(){},ip=function(n,i,a,l){var f=n.memoizedProps;if(f!==l){n=i.stateNode,Ir(_i.current);var m=null;switch(a){case"input":f=X(n,f),l=X(n,l),m=[];break;case"select":f=ae({},f,{value:void 0}),l=ae({},l,{value:void 0}),m=[];break;case"textarea":f=A(n,f),l=A(n,l),m=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(n.onclick=ho)}dt(a,l);var E;a=null;for(re in f)if(!l.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var I=f[re];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in l){var k=l[re];if(I=f!=null?f[re]:void 0,l.hasOwnProperty(re)&&k!==I&&(k!=null||I!=null))if(re==="style")if(I){for(E in I)!I.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&I[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(m||(m=[]),m.push(re,a)),a=k;else re==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(re,k)):re==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(re,""+k):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(k!=null&&re==="onScroll"&&Ut("scroll",n),m||I===k||(m=[])):(m=m||[]).push(re,k))}a&&(m=m||[]).push("style",a);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},rp=function(n,i,a,l){a!==l&&(i.flags|=4)};function Aa(n,i){if(!Ft)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function j0(n,i,a){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return An(i.type)&&mo(),fn(i),null;case 3:return l=i.stateNode,ys(),Ot(wn),Ot(un),Dc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(yo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(uu(ri),ri=null))),Jc(n,i),fn(i),null;case 5:Lc(i);var f=Ir(Sa.current);if(a=i.type,n!==null&&i.stateNode!=null)ip(n,i,a,l,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(t(166));return fn(i),null}if(n=Ir(_i.current),yo(i)){l=i.stateNode,a=i.type;var m=i.memoizedProps;switch(l[gi]=i,l[ga]=m,n=(i.mode&1)!==0,a){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(f=0;f<ha.length;f++)Ut(ha[f],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":gn(l,m),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",l);break;case"textarea":ee(l,m),Ut("invalid",l)}dt(a,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?l.textContent!==I&&(m.suppressHydrationWarning!==!0&&fo(l.textContent,I,n),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&fo(l.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ut("scroll",l)}switch(a){case"input":Ct(l),$e(l,m,!0);break;case"textarea":Ct(l),xe(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=ho)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof l.is=="string"?n=E.createElement(a,{is:l.is}):(n=E.createElement(a),a==="select"&&(E=n,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):n=E.createElementNS(n,a),n[gi]=i,n[ga]=l,np(n,i,!1,!1),i.stateNode=n;e:{switch(E=it(a,l),a){case"dialog":Ut("cancel",n),Ut("close",n),f=l;break;case"iframe":case"object":case"embed":Ut("load",n),f=l;break;case"video":case"audio":for(f=0;f<ha.length;f++)Ut(ha[f],n);f=l;break;case"source":Ut("error",n),f=l;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),f=l;break;case"details":Ut("toggle",n),f=l;break;case"input":gn(n,l),f=X(n,l),Ut("invalid",n);break;case"option":f=l;break;case"select":n._wrapperState={wasMultiple:!!l.multiple},f=ae({},l,{value:void 0}),Ut("invalid",n);break;case"textarea":ee(n,l),f=A(n,l),Ut("invalid",n);break;default:f=l}dt(a,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?Je(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ue(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ct(n,k):typeof k=="number"&&ct(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ut("scroll",n):k!=null&&L(n,m,k,E))}switch(a){case"input":Ct(n),$e(n,l,!1);break;case"textarea":Ct(n),xe(n);break;case"option":l.value!=null&&n.setAttribute("value",""+Ae(l.value));break;case"select":n.multiple=!!l.multiple,m=l.value,m!=null?P(n,!!l.multiple,m,!1):l.defaultValue!=null&&P(n,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=ho)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(n&&i.stateNode!=null)rp(n,i,n.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ir(Sa.current),Ir(_i.current),yo(i)){if(l=i.stateNode,a=i.memoizedProps,l[gi]=i,(m=l.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:fo(l.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fo(l.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return fn(i),null;case 13:if(Ot(Bt),l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)oh(),gs(),i.flags|=98560,m=!1;else if(m=yo(i),l!==null&&l.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),m=!1}else ri!==null&&(uu(ri),ri=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(n!==null&&n.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?qt===0&&(qt=3):hu())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return ys(),Jc(n,i),n===null&&pa(i.stateNode.containerInfo),fn(i),null;case 10:return bc(i.type._context),fn(i),null;case 17:return An(i.type)&&mo(),fn(i),null;case 19:if(Ot(Bt),m=i.memoizedState,m===null)return fn(i),null;if(l=(i.flags&128)!==0,E=m.rendering,E===null)if(l)Aa(m,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ao(n),E!==null){for(i.flags|=128,Aa(m,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)m=a,n=l,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Bt,Bt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ee()>Ts&&(i.flags|=128,l=!0,Aa(m,!1),i.lanes=4194304)}else{if(!l)if(n=Ao(E),n!==null){if(i.flags|=128,l=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Aa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Ft)return fn(i),null}else 2*Ee()-m.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,l=!0,Aa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ee(),i.sibling=null,a=Bt.current,It(Bt,l?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function W0(n,i){switch(Sc(i),i.tag){case 1:return An(i.type)&&mo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ot(wn),Ot(un),Dc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Lc(i),null;case 13:if(Ot(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Bt),null;case 4:return ys(),null;case 10:return bc(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Uo=!1,hn=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(n,i,l)}else a.current=null}function eu(n,i,a){try{a()}catch(l){Ht(n,i,l)}}var sp=!1;function Y0(n,i){if(fc=eo,n=Ff(),rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,I=-1,k=-1,re=0,ye=0,Se=n,ve=null;t:for(;;){for(var Ie;Se!==a||f!==0&&Se.nodeType!==3||(I=E+f),Se!==m||l!==0&&Se.nodeType!==3||(k=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ve=Se,Se=Ie;for(;;){if(Se===n)break t;if(ve===a&&++re===f&&(I=E),ve===m&&++ye===l&&(k=E),(Ie=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(hc={focusedElem:n,selectionRange:a},eo=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Gt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:si(i.type,He),Gt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Ht(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Be=sp,sp=!1,Be}function ba(n,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&eu(i,a,m)}f=f.next}while(f!==l)}}function Oo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function tu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function ap(n){var i=n.alternate;i!==null&&(n.alternate=null,ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[ga],delete i[_c],delete i[R0],delete i[N0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function op(n){return n.tag===5||n.tag===3||n.tag===4}function lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||op(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nu(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ho));else if(l!==4&&(n=n.child,n!==null))for(nu(n,i,a),n=n.sibling;n!==null;)nu(n,i,a),n=n.sibling}function iu(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(n=n.child,n!==null))for(iu(n,i,a),n=n.sibling;n!==null;)iu(n,i,a),n=n.sibling}var an=null,ai=!1;function or(n,i,a){for(a=a.child;a!==null;)cp(n,i,a),a=a.sibling}function cp(n,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 5:hn||Ms(a,i);case 6:var l=an,f=ai;an=null,or(n,i,a),an=l,ai=f,an!==null&&(ai?(n=an,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):an.removeChild(a.stateNode));break;case 18:an!==null&&(ai?(n=an,a=a.stateNode,n.nodeType===8?gc(n.parentNode,a):n.nodeType===1&&gc(n,a),sa(n)):gc(an,a.stateNode));break;case 4:l=an,f=ai,an=a.stateNode.containerInfo,ai=!0,or(n,i,a),an=l,ai=f;break;case 0:case 11:case 14:case 15:if(!hn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&eu(a,i,E),f=f.next}while(f!==l)}or(n,i,a);break;case 1:if(!hn&&(Ms(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(I){Ht(a,i,I)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(hn=(l=hn)||a.memoizedState!==null,or(n,i,a),hn=l):or(n,i,a);break;default:or(n,i,a)}}function up(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new X0),i.forEach(function(l){var f=n_.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:an=I.stateNode,ai=!1;break e;case 3:an=I.stateNode.containerInfo,ai=!0;break e;case 4:an=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(an===null)throw Error(t(160));cp(m,E,f),an=null,ai=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(re){Ht(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dp(i,n),i=i.sibling}function dp(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),xi(n),l&4){try{ba(3,n,n.return),Oo(3,n)}catch(He){Ht(n,n.return,He)}try{ba(5,n,n.return)}catch(He){Ht(n,n.return,He)}}break;case 1:oi(i,n),xi(n),l&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),xi(n),l&512&&a!==null&&Ms(a,a.return),n.flags&32){var f=n.stateNode;try{ct(f,"")}catch(He){Ht(n,n.return,He)}}if(l&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ht(f,m),it(I,E);var re=it(I,m);for(E=0;E<k.length;E+=2){var ye=k[E],Se=k[E+1];ye==="style"?Je(f,Se):ye==="dangerouslySetInnerHTML"?Ue(f,Se):ye==="children"?ct(f,Se):L(f,ye,Se,re)}switch(I){case"input":ut(f,m);break;case"textarea":me(f,m);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?P(f,!!m.multiple,Ie,!1):ve!==!!m.multiple&&(m.defaultValue!=null?P(f,!!m.multiple,m.defaultValue,!0):P(f,!!m.multiple,m.multiple?[]:"",!1))}f[ga]=m}catch(He){Ht(n,n.return,He)}}break;case 6:if(oi(i,n),xi(n),l&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(He){Ht(n,n.return,He)}}break;case 3:if(oi(i,n),xi(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{sa(i.containerInfo)}catch(He){Ht(n,n.return,He)}break;case 4:oi(i,n),xi(n);break;case 13:oi(i,n),xi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(au=Ee())),l&4&&up(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(hn=(re=hn)||ye,oi(i,n),hn=re):oi(i,n),xi(n),l&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ye&&(n.mode&1)!==0)for(Oe=n,ye=n.child;ye!==null;){for(Se=Oe=ye;Oe!==null;){switch(ve=Oe,Ie=ve.child,ve.tag){case 0:case 11:case 14:case 15:ba(4,ve,ve.return);break;case 1:Ms(ve,ve.return);var Be=ve.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ve,a=ve.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){Ht(l,a,He)}}break;case 5:Ms(ve,ve.return);break;case 22:if(ve.memoizedState!==null){pp(Se);continue}}Ie!==null?(Ie.return=ve,Oe=Ie):pp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{f=Se.stateNode,re?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Qe("display",E))}catch(He){Ht(n,n.return,He)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=re?"":Se.memoizedProps}catch(He){Ht(n,n.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:oi(i,n),xi(n),l&4&&up(n);break;case 21:break;default:oi(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(op(a)){var l=a;break e}a=a.return}throw Error(t(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ct(f,""),l.flags&=-33);var m=lp(n);iu(n,m,f);break;case 3:case 4:var E=l.stateNode.containerInfo,I=lp(n);nu(n,I,E);break;default:throw Error(t(161))}}catch(k){Ht(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function $0(n,i,a){Oe=n,fp(n)}function fp(n,i,a){for(var l=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Uo;if(!E){var I=f.alternate,k=I!==null&&I.memoizedState!==null||hn;I=Uo;var re=hn;if(Uo=E,(hn=k)&&!re)for(Oe=f;Oe!==null;)E=Oe,k=E.child,E.tag===22&&E.memoizedState!==null?mp(f):k!==null?(k.return=E,Oe=k):mp(f);for(;m!==null;)Oe=m,fp(m),m=m.sibling;Oe=f,Uo=I,hn=re}hp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):hp(n)}}function hp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||Oo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ph(i,m,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ph(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&sa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}hn||i.flags&512&&tu(i)}catch(ve){Ht(i,i.return,ve)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function pp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function mp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Oo(4,i)}catch(k){Ht(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(k){Ht(i,f,k)}}var m=i.return;try{tu(i)}catch(k){Ht(i,m,k)}break;case 5:var E=i.return;try{tu(i)}catch(k){Ht(i,E,k)}}}catch(k){Ht(i,i.return,k)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var q0=Math.ceil,Fo=R.ReactCurrentDispatcher,ru=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,yt=0,en=null,jt=null,on=0,kn=0,Es=nr(0),qt=0,Ca=null,Ur=0,ko=0,su=0,Ra=null,Cn=null,au=0,Ts=1/0,Ui=null,Bo=!1,ou=null,lr=null,zo=!1,cr=null,Ho=0,Na=0,lu=null,Vo=-1,Go=0;function yn(){return(yt&6)!==0?Ee():Vo!==-1?Vo:Vo=Ee()}function ur(n){return(n.mode&1)===0?1:(yt&2)!==0&&on!==0?on&-on:L0.transition!==null?(Go===0&&(Go=vn()),Go):(n=bt,n!==0||(n=window.event,n=n===void 0?16:_f(n.type)),n)}function li(n,i,a,l){if(50<Na)throw Na=0,lu=null,Error(t(185));Tn(n,a,l),((yt&2)===0||n!==en)&&(n===en&&((yt&2)===0&&(ko|=a),qt===4&&dr(n,on)),Rn(n,l),a===1&&yt===0&&(i.mode&1)===0&&(Ts=Ee()+500,_o&&rr()))}function Rn(n,i){var a=n.callbackNode;Hn(n,i);var l=mi(n,n===en?on:0);if(l===0)a!==null&&oe(a),n.callbackNode=null,n.callbackPriority=0;else if(i=l&-l,n.callbackPriority!==i){if(a!=null&&oe(a),i===1)n.tag===0?P0(_p.bind(null,n)):nh(_p.bind(null,n)),b0(function(){(yt&6)===0&&rr()}),a=null;else{switch(cf(l)){case 1:a=ze;break;case 4:a=et;break;case 16:a=nt;break;case 536870912:a=_t;break;default:a=nt}a=wp(a,gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function gp(n,i){if(Vo=-1,Go=0,(yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var l=mi(n,n===en?on:0);if(l===0)return null;if((l&30)!==0||(l&n.expiredLanes)!==0||i)i=jo(n,l);else{i=l;var f=yt;yt|=2;var m=xp();(en!==n||on!==i)&&(Ui=null,Ts=Ee()+500,Fr(n,i));do try{Q0();break}catch(I){vp(n,I)}while(!0);Ac(),Fo.current=m,yt=f,jt!==null?i=0:(en=null,on=0,i=qt)}if(i!==0){if(i===2&&(f=bi(n),f!==0&&(l=f,i=cu(n,f))),i===1)throw a=Ca,Fr(n,0),dr(n,l),Rn(n,Ee()),a;if(i===6)dr(n,l);else{if(f=n.current.alternate,(l&30)===0&&!K0(f)&&(i=jo(n,l),i===2&&(m=bi(n),m!==0&&(l=m,i=cu(n,m))),i===1))throw a=Ca,Fr(n,0),dr(n,l),Rn(n,Ee()),a;switch(n.finishedWork=f,n.finishedLanes=l,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Cn,Ui);break;case 3:if(dr(n,l),(l&130023424)===l&&(i=au+500-Ee(),10<i)){if(mi(n,0)!==0)break;if(f=n.suspendedLanes,(f&l)!==l){yn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=mc(kr.bind(null,n,Cn,Ui),i);break}kr(n,Cn,Ui);break;case 4:if(dr(n,l),(l&4194240)===l)break;for(i=n.eventTimes,f=-1;0<l;){var E=31-st(l);m=1<<E,E=i[E],E>f&&(f=E),l&=~m}if(l=f,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*q0(l/1960))-l,10<l){n.timeoutHandle=mc(kr.bind(null,n,Cn,Ui),l);break}kr(n,Cn,Ui);break;case 5:kr(n,Cn,Ui);break;default:throw Error(t(329))}}}return Rn(n,Ee()),n.callbackNode===a?gp.bind(null,n):null}function cu(n,i){var a=Ra;return n.current.memoizedState.isDehydrated&&(Fr(n,i).flags|=256),n=jo(n,i),n!==2&&(i=Cn,Cn=a,i!==null&&uu(i)),n}function uu(n){Cn===null?Cn=n:Cn.push.apply(Cn,n)}function K0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!ii(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(n,i){for(i&=~su,i&=~ko,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-st(i),l=1<<a;n[a]=-1,i&=~l}}function _p(n){if((yt&6)!==0)throw Error(t(327));ws();var i=mi(n,0);if((i&1)===0)return Rn(n,Ee()),null;var a=jo(n,i);if(n.tag!==0&&a===2){var l=bi(n);l!==0&&(i=l,a=cu(n,l))}if(a===1)throw a=Ca,Fr(n,0),dr(n,i),Rn(n,Ee()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Cn,Ui),Rn(n,Ee()),null}function du(n,i){var a=yt;yt|=1;try{return n(i)}finally{yt=a,yt===0&&(Ts=Ee()+500,_o&&rr())}}function Or(n){cr!==null&&cr.tag===0&&(yt&6)===0&&ws();var i=yt;yt|=1;var a=Yn.transition,l=bt;try{if(Yn.transition=null,bt=1,n)return n()}finally{bt=l,Yn.transition=a,yt=i,(yt&6)===0&&rr()}}function fu(){kn=Es.current,Ot(Es)}function Fr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,A0(a)),jt!==null)for(a=jt.return;a!==null;){var l=a;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&mo();break;case 3:ys(),Ot(wn),Ot(un),Dc();break;case 5:Lc(l);break;case 4:ys();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:bc(l.type._context);break;case 22:case 23:fu()}a=a.return}if(en=n,jt=n=fr(n.current,null),on=kn=i,qt=0,Ca=null,su=ko=Ur=0,Cn=Ra=null,Lr!==null){for(i=0;i<Lr.length;i++)if(a=Lr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,m=a.pending;if(m!==null){var E=m.next;m.next=f,l.next=E}a.pending=l}Lr=null}return n}function vp(n,i){do{var a=jt;try{if(Ac(),bo.current=Po,Co){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Co=!1}if(Dr=0,Jt=$t=zt=null,Ma=!1,Ea=0,ru.current=null,a===null||a.return===null){qt=1,Ca=i,jt=null;break}e:{var m=n,E=a.return,I=a,k=i;if(i=on,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=k,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ie=Gh(E);if(Ie!==null){Ie.flags&=-257,jh(Ie,E,I,m,i),Ie.mode&1&&Vh(m,re,i),i=Ie,k=re;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(k),i.updateQueue=He}else Be.add(k);break e}else{if((i&1)===0){Vh(m,re,i),hu();break e}k=Error(t(426))}}else if(Ft&&I.mode&1){var Gt=Gh(E);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),jh(Gt,E,I,m,i),Tc(Ss(k,I));break e}}m=k=Ss(k,I),qt!==4&&(qt=2),Ra===null?Ra=[m]:Ra.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=zh(m,k,i);hh(m,Y);break e;case 1:I=k;var H=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(lr===null||!lr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Hh(m,I,i);hh(m,Te);break e}}m=m.return}while(m!==null)}Sp(a)}catch(We){i=We,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function xp(){var n=Fo.current;return Fo.current=Po,n===null?Po:n}function hu(){(qt===0||qt===3||qt===2)&&(qt=4),en===null||(Ur&268435455)===0&&(ko&268435455)===0||dr(en,on)}function jo(n,i){var a=yt;yt|=2;var l=xp();(en!==n||on!==i)&&(Ui=null,Fr(n,i));do try{Z0();break}catch(f){vp(n,f)}while(!0);if(Ac(),yt=a,Fo.current=l,jt!==null)throw Error(t(261));return en=null,on=0,qt}function Z0(){for(;jt!==null;)yp(jt)}function Q0(){for(;jt!==null&&!j();)yp(jt)}function yp(n){var i=Tp(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Sp(n):jt=i,ru.current=null}function Sp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=j0(a,i,kn),a!==null){jt=a;return}}else{if(a=W0(a,i),a!==null){a.flags&=32767,jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);qt===0&&(qt=5)}function kr(n,i,a){var l=bt,f=Yn.transition;try{Yn.transition=null,bt=1,J0(n,i,a,l)}finally{Yn.transition=f,bt=l}return null}function J0(n,i,a,l){do ws();while(cr!==null);if((yt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Za(n,m),n===en&&(jt=en=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||zo||(zo=!0,wp(nt,function(){return ws(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=bt;bt=1;var I=yt;yt|=4,ru.current=null,Y0(n,a),dp(a,n),x0(hc),eo=!!fc,hc=fc=null,n.current=a,$0(a),we(),yt=I,bt=E,Yn.transition=m}else n.current=a;if(zo&&(zo=!1,cr=n,Ho=f),m=n.pendingLanes,m===0&&(lr=null),ln(a.stateNode),Rn(n,Ee()),i!==null)for(l=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Bo)throw Bo=!1,n=ou,ou=null,n;return(Ho&1)!==0&&n.tag!==0&&ws(),m=n.pendingLanes,(m&1)!==0?n===lu?Na++:(Na=0,lu=n):Na=0,rr(),null}function ws(){if(cr!==null){var n=cf(Ho),i=Yn.transition,a=bt;try{if(Yn.transition=null,bt=16>n?16:n,cr===null)var l=!1;else{if(n=cr,cr=null,Ho=0,(yt&6)!==0)throw Error(t(331));var f=yt;for(yt|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var re=I[k];for(Oe=re;Oe!==null;){var ye=Oe;switch(ye.tag){case 0:case 11:case 15:ba(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Oe=Se;else for(;Oe!==null;){ye=Oe;var ve=ye.sibling,Ie=ye.return;if(ap(ye),ye===re){Oe=null;break}if(ve!==null){ve.return=Ie,Oe=ve;break}Oe=Ie}}}var Be=m.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ba(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Oe=Y;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){E=Oe;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,Oe=Z;else e:for(E=H;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Oo(9,I)}}catch(We){Ht(I,I.return,We)}if(I===E){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(yt=f,rr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Tt,n)}catch{}l=!0}return l}finally{bt=a,Yn.transition=i}}return!1}function Mp(n,i,a){i=Ss(a,i),i=zh(n,i,1),n=ar(n,i,1),i=yn(),n!==null&&(Tn(n,1,i),Rn(n,i))}function Ht(n,i,a){if(n.tag===3)Mp(n,n,a);else for(;i!==null;){if(i.tag===3){Mp(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(lr===null||!lr.has(l))){n=Ss(a,n),n=Hh(i,n,1),i=ar(i,n,1),n=yn(),i!==null&&(Tn(i,1,n),Rn(i,n));break}}i=i.return}}function e_(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),i=yn(),n.pingedLanes|=n.suspendedLanes&a,en===n&&(on&a)===a&&(qt===4||qt===3&&(on&130023424)===on&&500>Ee()-au?Fr(n,0):su|=a),Rn(n,i)}function Ep(n,i){i===0&&((n.mode&1)===0?i=1:(i=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var a=yn();n=Li(n,i),n!==null&&(Tn(n,i,a),Rn(n,a))}function t_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Ep(n,a)}function n_(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;default:throw Error(t(314))}l!==null&&l.delete(i),Ep(n,a)}var Tp;Tp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return bn=!1,G0(n,i,a);bn=(n.flags&131072)!==0}else bn=!1,Ft&&(i.flags&1048576)!==0&&ih(i,xo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Do(n,i),n=i.pendingProps;var f=hs(i,un.current);xs(i,a),f=Fc(null,i,l,n,f,a);var m=kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(m=!0,go(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nc(i),f.updater=Lo,i.stateNode=f,f._reactInternals=i,jc(i,l,n,a),i=$c(null,i,l,!0,m,a)):(i.tag=0,Ft&&m&&yc(i),xn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Do(n,i),n=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=r_(l),n=si(l,n),f){case 0:i=Yc(null,i,l,n,a);break e;case 1:i=Kh(null,i,l,n,a);break e;case 11:i=Wh(null,i,l,n,a);break e;case 14:i=Xh(null,i,l,si(l.type,n),a);break e}throw Error(t(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Yc(n,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Kh(n,i,l,f,a);case 3:e:{if(Zh(i),n===null)throw Error(t(387));l=i.pendingProps,m=i.memoizedState,f=m.element,fh(n,i),wo(i,l,null,a);var E=i.memoizedState;if(l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ss(Error(t(423)),i),i=Qh(n,i,l,a,f);break e}else if(l!==f){f=Ss(Error(t(424)),i),i=Qh(n,i,l,a,f);break e}else for(Fn=tr(i.stateNode.containerInfo.firstChild),On=i,Ft=!0,ri=null,a=uh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),l===f){i=Di(n,i,a);break e}xn(n,i,l,a)}i=i.child}return i;case 5:return mh(i),n===null&&Ec(i),l=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,E=f.children,pc(l,f)?E=null:m!==null&&pc(l,m)&&(i.flags|=32),qh(n,i),xn(n,i,E,a),i.child;case 6:return n===null&&Ec(i),null;case 13:return Jh(n,i,a);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=_s(i,null,l,a):xn(n,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Wh(n,i,l,f,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,m=i.memoizedProps,E=f.value,It(Mo,l._currentValue),l._currentValue=E,m!==null)if(ii(m.value,E)){if(m.children===f.children&&!wn.current){i=Di(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var k=I.firstContext;k!==null;){if(k.context===l){if(m.tag===1){k=Ii(-1,a&-a),k.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),re.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Cc(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Cc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}xn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,xs(i,a),f=Wn(f),l=l(f),i.flags|=1,xn(n,i,l,a),i.child;case 14:return l=i.type,f=si(l,i.pendingProps),f=si(l.type,f),Xh(n,i,l,f,a);case 15:return Yh(n,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Do(n,i),i.tag=1,An(l)?(n=!0,go(i)):n=!1,xs(i,a),kh(i,l,f),jc(i,l,f,a),$c(null,i,l,!0,n,a);case 19:return tp(n,i,a);case 22:return $h(n,i,a)}throw Error(t(156,i.tag))};function wp(n,i){return se(n,i)}function i_(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,a,l){return new i_(n,i,a,l)}function pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r_(n){if(typeof n=="function")return pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===pe)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=$n(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Wo(n,i,a,l,f,m){var E=2;if(l=n,typeof n=="function")pu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case F:return Br(a.children,f,m,i);case W:E=8,f|=8;break;case N:return n=$n(12,a,i,f|2),n.elementType=N,n.lanes=m,n;case ne:return n=$n(13,a,i,f),n.elementType=ne,n.lanes=m,n;case de:return n=$n(19,a,i,f),n.elementType=de,n.lanes=m,n;case te:return Xo(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case z:E=9;break e;case ce:E=11;break e;case pe:E=14;break e;case K:E=16,l=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(E,a,i,f),i.elementType=n,i.type=l,i.lanes=m,i}function Br(n,i,a,l){return n=$n(7,n,l,i),n.lanes=a,n}function Xo(n,i,a,l){return n=$n(22,n,l,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function mu(n,i,a){return n=$n(6,n,null,i),n.lanes=a,n}function gu(n,i,a){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function s_(n,i,a,l,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _u(n,i,a,l,f,m,E,I,k){return n=new s_(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(m),n}function a_(n,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:n,containerInfo:i,implementation:a}}function Ap(n){if(!n)return ir;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(An(a))return eh(n,a,i)}return i}function bp(n,i,a,l,f,m,E,I,k){return n=_u(a,l,!0,n,f,m,E,I,k),n.context=Ap(null),a=n.current,l=yn(),f=ur(a),m=Ii(l,f),m.callback=i??null,ar(a,m,f),n.current.lanes=f,Tn(n,f,l),Rn(n,l),n}function Yo(n,i,a,l){var f=i.current,m=yn(),E=ur(f);return a=Ap(a),i.context===null?i.context=a:i.pendingContext=a,i=Ii(m,E),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=ar(f,i,E),n!==null&&(li(n,f,E,m),To(n,f,E)),E}function $o(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function vu(n,i){Cp(n,i),(n=n.alternate)&&Cp(n,i)}function o_(){return null}var Rp=typeof reportError=="function"?reportError:function(n){console.error(n)};function xu(n){this._internalRoot=n}qo.prototype.render=xu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Yo(n,i,null,null)},qo.prototype.unmount=xu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){Yo(null,n,null,null)}),i[Ci]=null}};function qo(n){this._internalRoot=n}qo.prototype.unstable_scheduleHydration=function(n){if(n){var i=ff();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&mf(n)}};function yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ko(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Np(){}function l_(n,i,a,l,f){if(f){if(typeof l=="function"){var m=l;l=function(){var re=$o(E);m.call(re)}}var E=bp(i,l,n,0,null,!1,!1,"",Np);return n._reactRootContainer=E,n[Ci]=E.current,pa(n.nodeType===8?n.parentNode:n),Or(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var re=$o(k);I.call(re)}}var k=_u(n,0,!1,null,null,!1,!1,"",Np);return n._reactRootContainer=k,n[Ci]=k.current,pa(n.nodeType===8?n.parentNode:n),Or(function(){Yo(i,k,a,l)}),k}function Zo(n,i,a,l,f){var m=a._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var I=f;f=function(){var k=$o(E);I.call(k)}}Yo(i,E,n,f)}else E=l_(a,i,n,f,l);return $o(E)}uf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(jl(i,a|1),Rn(i,Ee()),(yt&6)===0&&(Ts=Ee()+500,rr()))}break;case 13:Or(function(){var l=Li(n,1);if(l!==null){var f=yn();li(l,n,1,f)}}),vu(n,1)}},Wl=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var a=yn();li(i,n,134217728,a)}vu(n,134217728)}},df=function(n){if(n.tag===13){var i=ur(n),a=Li(n,i);if(a!==null){var l=yn();li(a,n,i,l)}vu(n,i)}},ff=function(){return bt},hf=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},Ce=function(n,i,a){switch(i){case"input":if(ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=po(l);if(!f)throw Error(t(90));mt(l),ut(l,f)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&P(n,!!a.multiple,i,!1)}},Dt=du,Xt=Or;var c_={usingClientEntryPoint:!1,Events:[_a,ds,po,Ne,rt,du]},Pa={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u_={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||o_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Tt=Qo.inject(u_),gt=Qo}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(t(200));return a_(n,i,null,a)},Nn.createRoot=function(n,i){if(!yu(n))throw Error(t(299));var a=!1,l="",f=Rp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=_u(n,1,!1,null,null,a,!1,l,f),n[Ci]=i.current,pa(n.nodeType===8?n.parentNode:n),new xu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Or(n)},Nn.hydrate=function(n,i,a){if(!Ko(i))throw Error(t(200));return Zo(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!yu(n))throw Error(t(405));var l=a!=null&&a.hydratedSources||null,f=!1,m="",E=Rp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=bp(i,null,n,1,a??null,f,!1,m,E),n[Ci]=i.current,pa(n),l)for(n=0;n<l.length;n++)a=l[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new qo(i)},Nn.render=function(n,i,a){if(!Ko(i))throw Error(t(200));return Zo(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!Ko(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){Zo(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},Nn.unstable_batchedUpdates=du,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,l){if(!Ko(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Zo(n,i,a,!1,l)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var kp;function x_(){if(kp)return Eu.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=v_(),Eu.exports}var Bp;function y_(){if(Bp)return Jo;Bp=1;var s=x_();return Jo.createRoot=s.createRoot,Jo.hydrateRoot=s.hydrateRoot,Jo}var S_=y_();const M_=Km(S_),E_=[{id:"MCH-001",name:"Industrial Induction Motor",type:"3-Phase Squirrel Cage (18.5 kW)",location:"Stamping Cell #4",zone:"ZONE A",status:"NORMAL",healthScore:92.4,failureRisk:12,anomalyScore:14.5,operatingHours:4210.5,lastMaintenance:"2026-08-15",sensors:{temperature:68.2,vibration:2.1,current:10.4,frequency:50,humidity:58,ammonia:6.2},specs:{ratedPower:"18.5 kW",ratedCurrent:"35 A",maxTemp:"85 °C",maxVibration:"4.5 mm/s",retrofitSensors:"PT100 RTD, Piezo Accel, SCT-013 CT, MQ-137"}},{id:"MCH-002",name:"Furnace Exhaust Blower",type:"High-Temp Centrifugal Fan",location:"Smelting Line #2",zone:"ZONE B",status:"WARNING",healthScore:58.6,failureRisk:64,anomalyScore:72,operatingHours:7890.2,lastMaintenance:"2026-07-02",sensors:{temperature:86.4,vibration:5.2,current:16.8,frequency:48.9,humidity:65,ammonia:18.5},specs:{ratedPower:"22 kW",ratedCurrent:"42 A",maxTemp:"80 °C",maxVibration:"4.0 mm/s",retrofitSensors:"K-Type Thermocouple, Dual-Axis Accel, CT Sensor"}},{id:"MCH-003",name:"Primary Screw Compressor",type:"Twin-Screw Air Compressor",location:"Central Utility Bay",zone:"ZONE A",status:"NORMAL",healthScore:88.5,failureRisk:18,anomalyScore:21,operatingHours:3140,lastMaintenance:"2026-08-20",sensors:{temperature:71.5,vibration:2.8,current:13.2,frequency:50.1,humidity:55,ammonia:7.1},specs:{ratedPower:"30 kW",ratedCurrent:"55 A",maxTemp:"90 °C",maxVibration:"5.0 mm/s",retrofitSensors:"Piezo Sensor, Hall Effect Speed, Split-Core CT"}},{id:"MCH-004",name:"Hydraulic Stamping Press",type:"500-Ton Hydraulic Forming Press",location:"Forming Bay #1",zone:"ZONE C",status:"CRITICAL",healthScore:36.2,failureRisk:82.5,anomalyScore:89,operatingHours:11200,lastMaintenance:"2026-05-14",sensors:{temperature:93.8,vibration:7.4,current:24.5,frequency:46.2,humidity:62,ammonia:12},specs:{ratedPower:"45 kW",ratedCurrent:"80 A",maxTemp:"80 °C",maxVibration:"4.5 mm/s",retrofitSensors:"Multi-point PT100, High-G Accel, Pressure Transducer"}},{id:"MCH-005",name:"CNC Milling Spindle Unit",type:"High-Speed Machining Spindle",location:"Precision Tooling Room",zone:"ZONE D",status:"NORMAL",healthScore:94.8,failureRisk:8.5,anomalyScore:9,operatingHours:1950,lastMaintenance:"2026-09-01",sensors:{temperature:54.2,vibration:1.2,current:8.6,frequency:50,humidity:45,ammonia:4.1},specs:{ratedPower:"11 kW",ratedCurrent:"22 A",maxTemp:"70 °C",maxVibration:"2.5 mm/s",retrofitSensors:"Laser Tachometer, Thermal Sensor, Low-Noise Accel"}},{id:"MCH-006",name:"Acid Bath Exhaust Scrubber",type:"Venturi Wet Scrubber Blower",location:"Chemical Finishing Line",zone:"ZONE B",status:"WARNING",healthScore:68.4,failureRisk:52,anomalyScore:61,operatingHours:6420,lastMaintenance:"2026-07-25",sensors:{temperature:77.5,vibration:3.9,current:14.8,frequency:49.5,humidity:82,ammonia:32.4},specs:{ratedPower:"15 kW",ratedCurrent:"30 A",maxTemp:"75 °C",maxVibration:"3.5 mm/s",retrofitSensors:"MQ-137 Ammonia Sensor, Corrosive RTD, CT Clamp"}}],T_=[{id:"ZONE_A",name:"Zone A — Mechanical Stamping & Utilities",machines:12,safetyStatus:"SAFE",gasStatus:"SAFE",health:89,ammonia:6.8,temp:29.4,alerts:1,ppe:["Safety Helmet","Steel-Toe Boots","Hearing Protection"]},{id:"ZONE_B",name:"Zone B — Thermal Smelting & Chemical Finishing",machines:8,safetyStatus:"WARNING",gasStatus:"WARNING",health:62,ammonia:32.4,temp:38.2,alerts:3,ppe:["Chemical Respirator (Ammonia Filter)","Heat-Resistant Visor","Acid-Proof Gloves"]},{id:"ZONE_C",name:"Zone C — Heavy Hydraulic Forging Bay",machines:6,safetyStatus:"WARNING",gasStatus:"SAFE",health:54,ammonia:12,temp:33.1,alerts:2,ppe:["Impact Visor","High-Decibel Ear Defenders","Steel Tarsal Guards"]},{id:"ZONE_D",name:"Zone D — Precision CNC & Assembly",machines:14,safetyStatus:"SAFE",gasStatus:"SAFE",health:95,ammonia:4.5,temp:24,alerts:0,ppe:["Safety Glasses","Anti-Static Footwear","Dust Mask"]}],w_=[{id:"ALT-2026-091",machineId:"MCH-004",zone:"ZONE C",alertType:"Excessive Vibration & Stator Overheating",severity:"CRITICAL",sensor:"Piezo Accelerometer & RTD Probe",currentValue:"7.4 mm/s | 93.8°C",expectedRange:"< 4.5 mm/s | < 80.0°C",aiRecommendation:"Immediate safety inspection required: Severe bearing misalignment and thermal expansion detected. Follow plant shutdown procedure.",status:"ACTIVE",timestamp:"10 mins ago"},{id:"ALT-2026-088",machineId:"MCH-002",zone:"ZONE B",alertType:"Motor Overheating Trend",severity:"WARNING",sensor:"Stator Temperature Probe",currentValue:"86.4°C",expectedRange:"50.0 – 80.0°C",aiRecommendation:"Inspect cooling blower shroud and verify lubrication according to standard maintenance schedule.",status:"ACTIVE",timestamp:"45 mins ago"},{id:"ALT-2026-082",machineId:"MCH-006",zone:"ZONE B",alertType:"Elevated Ammonia Vapor Concentration",severity:"WARNING",sensor:"MQ-137 Gas Sensor",currentValue:"32.4 ppm",expectedRange:"< 25.0 ppm (OSHA PEL)",aiRecommendation:"Ventilation booster required in Zone B. Ensure workers wear appropriate PPE and inspect scrubber inlet ducting.",status:"ACTIVE",timestamp:"1.5 hours ago"},{id:"ALT-2026-075",machineId:"MCH-001",zone:"ZONE A",alertType:"Harmonic Current Ripple",severity:"INFO",sensor:"Split-Core Current Sensor",currentValue:"10.4 A (Phase Delta 1.2A)",expectedRange:"8.0 – 12.0 A",aiRecommendation:"Minor power factor variance detected. Schedule inverter filter check during next planned weekly shutdown.",status:"ACKNOWLEDGED",timestamp:"3 hours ago"}],A_=[{id:"MNT-041",machineId:"MCH-004",machineName:"Hydraulic Stamping Press",issue:"High vibration (7.4 mm/s) & main ram seal thermal degradation",recommendation:"Emergency bearing alignment and hydraulic fluid flush.",priority:"CRITICAL",status:"PENDING",scheduledDate:"Tomorrow at 08:00 AM",category:"AI Recommended"},{id:"MNT-038",machineId:"MCH-002",machineName:"Furnace Exhaust Blower",issue:"Thermal buildup in drive-end bearing (86.4°C)",recommendation:"Re-grease bearing housing with high-temp polyurea synthetic grease.",priority:"HIGH",status:"SCHEDULED",scheduledDate:"Sep 11, 2026 at 02:00 PM",category:"Upcoming"},{id:"MNT-035",machineId:"MCH-006",machineName:"Acid Bath Exhaust Scrubber",issue:"Scrubber filter packing differential pressure high",recommendation:"Clean mist eliminator pads and inspect neutralizer dosing pump.",priority:"MEDIUM",status:"SCHEDULED",scheduledDate:"Sep 12, 2026 at 10:00 AM",category:"Upcoming"},{id:"MNT-030",machineId:"MCH-003",machineName:"Primary Screw Compressor",issue:"Oil separator 3000-hour service interval reached",recommendation:"Standard air/oil separator filter replacement.",priority:"LOW",status:"COMPLETED",scheduledDate:"Completed Sep 05, 2026",category:"History"}],b_={traditionalReplacement:8e5,retrofitCost:35e3,capitalAvoidance:765e3,savingsPercentage:95.6,metrics:[{label:"Unplanned Downtime Reduction",value:"68%",benchmark:"From 42 hrs/mo to 13.4 hrs/mo"},{label:"Emergency Repair Cost Savings",value:"₹4,20,000 / yr",benchmark:"Replaced rush spares & breakdown overtime"},{label:"Extended Equipment Life",value:"+4.5 Years",benchmark:"Deferral of heavy capital replacement"},{label:"Energy Efficiency Optimization",value:"11.2% Reduction",benchmark:"Eliminated motor overload and shaft friction"}],disclaimer:"Illustrative prototype estimates based on industrial metal fabrication plant benchmarks. Not verified corporate financial reporting."},Zm=vt.createContext();function C_({children:s}){const[e,t]=vt.useState("dashboard"),[r,o]=vt.useState("MCH-002"),[c,u]=vt.useState("SUPERVISOR"),[d,h]=vt.useState(!0),[p,_]=vt.useState("normal"),[v,S]=vt.useState(E_),[M,T]=vt.useState(T_),[w,x]=vt.useState(w_),[g,D]=vt.useState(A_),[L,R]=vt.useState([]),[J,B]=vt.useState(!1),F=v.find(K=>K.id===r)||v[0],W=K=>{const te=Date.now()+Math.random(),U={id:te,...K};R(Q=>[U,...Q.slice(0,4)]),setTimeout(()=>{R(Q=>Q.filter(ae=>ae.id!==te))},6e3)},N=K=>{R(te=>te.filter(U=>U.id!==K))},C=K=>{const{temperature:te,vibration:U,current:Q,frequency:ae}=K,O=te<=65?te/65*15:te<=80?15+(te-65)/15*35:50+(te-80)/15*45,ie=U<=2.2?U/2.2*15:U<=4.5?15+(U-2.2)/2.3*35:50+(U-4.5)/2.5*45,Pe=Q<=12?Q/12*15:Q<=18?15+(Q-12)/6*40:55+(Q-18)/7*40,$=Math.abs(ae-50),ue=$<=.5?$/.5*10:$<=2?10+($-.5)/1.5*40:50+($-2)*25;let _e=O*.25+ie*.35+Pe*.2+ue*.2;O>50&&ie>50&&(_e+=Math.min(20,(O-50)*.15+(ie-50)*.15));const ge=Math.max(0,Math.min(100,Math.round((100-_e)*10)/10)),Ae=ge>=75?"NORMAL":ge>=50?"WARNING":"CRITICAL";return{score:ge,status:Ae,weightedRisk:_e}},z=()=>{const K=v.reduce((_e,ge)=>ge.healthScore<_e.healthScore?ge:_e,v[0]),te=Math.max(...v.map(_e=>_e.sensors.ammonia)),U=Math.max(...v.map(_e=>_e.sensors.temperature)),Q=Math.max(...v.map(_e=>_e.sensors.vibration)),ae=Math.round(100-K.healthScore),O=Math.min(100,Math.round(te<=15?te/15*20:te<=25?20+(te-15)/10*30:50+(te-25)/25*45)),ie=Math.min(100,Math.round(U<=65?U/65*25:25+(U-65)/25*55)),Pe=Math.min(100,Math.round(Q<=2.5?Q/2.5*25:25+(Q-2.5)/3.5*55)),$=Math.round(ae*.35+O*.3+ie*.15+Pe*.2),ue=$>=70?"HIGH":$>=40?"MEDIUM":"LOW";return{overallScore:$,level:ue,machineRisk:ae,gasRisk:O,tempRisk:ie,vibRisk:Pe,worstMachine:K}},ce=K=>{_(K),B(!0);const te=K==="gas_alert"?"MCH-006":K==="vibration"?"MCH-004":"MCH-002";o(te);let U={temperature:68.4,vibration:2.1,current:10.4,frequency:50,humidity:58,ammonia:6.2},Q=null;K==="overheat"?(U={temperature:94.6,vibration:3.8,current:15.4,frequency:49.2,humidity:62,ammonia:8},Q={title:"CRITICAL INDUSTRIAL ALERT",severity:"CRITICAL",message:"MCH-002 Motor Overheating: Stator reached 94.6°C (Allowed < 80°C).",action:"Inspect cooling system and motor condition according to plant procedure."}):K==="vibration"?(U={temperature:82,vibration:8.4,current:16.8,frequency:47.8,humidity:56,ammonia:9.2},Q={title:"CRITICAL INDUSTRIAL ALERT",severity:"CRITICAL",message:"MCH-004 Excessive Vibration (8.4 mm/s): ISO 10816 limit breached.",action:"Bearing spalling imminent. Initiate safe controlled shutdown."}):K==="overcurrent"?(U={temperature:78.5,vibration:4.1,current:26.8,frequency:48.5,humidity:60,ammonia:7.5},Q={title:"WARNING: MOTOR CURRENT SURGE",severity:"WARNING",message:"MCH-002 Current Spike (26.8 A): Heavy mechanical resistance detected.",action:"Verify drivetrain resistance and inverter phase balance."}):K==="gas_alert"?(U={temperature:76,vibration:3.2,current:13.5,frequency:49.8,humidity:84,ammonia:54.8},Q={title:"ENVIRONMENTAL HAZARD DETECTED",severity:"CRITICAL",message:"Zone B Ammonia Level at 54.8 ppm exceeds OSHA PEL safety ceiling (25 ppm).",action:"Alert supervisor, activate scrubbers, restrict zone access, require PPE."}):K==="critical_failure"&&(U={temperature:96.2,vibration:9.2,current:28.5,frequency:45.8,humidity:68,ammonia:28},Q={title:"EMERGENCY: COMPOUND MACHINE FAILURE",severity:"CRITICAL",message:"MCH-002 Multi-barrier failure: Temp 96°C, Vibration 9.2 mm/s, Current 28.5A.",action:"Execute emergency line stop according to industrial protocol."}),ne(te,{temperature:Math.round((F.sensors.temperature+U.temperature)/2),vibration:Math.round((F.sensors.vibration+U.vibration)/2*10)/10,current:Math.round((F.sensors.current+U.current)/2*10)/10,frequency:U.frequency,humidity:U.humidity,ammonia:U.ammonia}),setTimeout(()=>{if(ne(te,U),B(!1),Q){W(Q);const ae={id:`ALT-${Date.now().toString().slice(-5)}`,machineId:te,zone:te==="MCH-006"?"ZONE B":te==="MCH-004"?"ZONE C":"ZONE B",alertType:Q.title,severity:Q.severity,sensor:K==="gas_alert"?"MQ-137 Gas Sensor":K==="vibration"?"Piezo Accelerometer":"Stator RTD",currentValue:`${U.temperature}°C | ${U.vibration} mm/s | ${U.ammonia} ppm`,expectedRange:"Nominal Envelope",aiRecommendation:Q.action,status:"ACTIVE",timestamp:"Just now"};x(O=>[ae,...O]),fetch("/api/notifications/dispatch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({alert:ae})}).catch(()=>{})}},800)},ne=(K,te)=>{S(U=>U.map(Q=>{if(Q.id!==K)return Q;const{score:ae,status:O}=C(te);return{...Q,sensors:{...Q.sensors,...te},healthScore:ae,status:O,failureRisk:Math.max(5,Math.round(100-ae)),anomalyScore:Math.min(100,Math.round((100-ae)*1.05))}}))},de=K=>{x(te=>te.map(U=>U.id===K?{...U,status:"ACKNOWLEDGED"}:U)),W({title:"Alert Acknowledged",severity:"INFO",message:`Alert ${K} acknowledged by ${c}.`})},pe=K=>{var U;const te={id:`MNT-${Math.floor(100+Math.random()*900)}`,machineId:K.machineId,machineName:((U=v.find(Q=>Q.id===K.machineId))==null?void 0:U.name)||"Industrial Asset",issue:K.alertType,recommendation:K.aiRecommendation,priority:K.severity==="CRITICAL"?"CRITICAL":"HIGH",status:"PENDING",scheduledDate:"Immediate Work Order",category:"AI Recommended"};D(Q=>[te,...Q]),t("maintenance"),W({title:"Maintenance Task Created",severity:"INFO",message:`Work Order ${te.id} dispatched for ${K.machineId}.`})};return y.jsx(Zm.Provider,{value:{activePage:e,setActivePage:t,selectedMachineId:r,setSelectedMachineId:o,selectedMachine:F,currentRole:c,setCurrentRole:u,simulationMode:d,setSimulationMode:h,activeScenario:p,triggerScenario:ce,isSimulatingTransition:J,machines:v,zones:M,alerts:w,maintenance:g,toasts:L,removeToast:N,acknowledgeAlert:de,createMaintenanceTask:pe,industrialRisk:z(),roiData:b_},children:s})}function sn(){return vt.useContext(Zm)}function R_(){const{currentRole:s,setCurrentRole:e,activePage:t,setActivePage:r,alerts:o,simulationMode:c,setSimulationMode:u}=sn(),d=o.filter(p=>p.status==="ACTIVE").length,h=o.filter(p=>p.status==="ACTIVE"&&p.severity==="CRITICAL").length;return y.jsxs("header",{className:"w-full bg-[#0a0f1d] border-b border-cyan-500/20 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-md",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]",children:y.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("h1",{className:"text-lg font-black tracking-wider text-white",children:"AI SMART RETROFIT"}),y.jsx("span",{className:"text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30",children:"v1.0-PROTOTYPE"})]}),y.jsx("p",{className:"text-xs text-slate-400 font-medium",children:'"Transforming Legacy Machines into Intelligent, Safe & Predictive Assets."'})]})]}),y.jsxs("div",{className:"flex items-center gap-3.5",children:[y.jsxs("div",{className:"hidden sm:flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),y.jsx("span",{className:"text-slate-300 font-mono text-[11px]",children:"EDGE IOT ONLINE"})]}),y.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-slate-700",children:[y.jsx("span",{className:"text-[11px] font-mono text-slate-400 pl-2 pr-1",children:"ROLE:"}),["ADMIN","SUPERVISOR","SAFETY_OFFICER"].map(p=>y.jsx("button",{onClick:()=>e(p),className:`px-2.5 py-1 rounded text-xs font-semibold tracking-wide transition-all ${s===p?"bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]":"text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`,children:p==="SAFETY_OFFICER"?"SAFETY":p},p))]}),y.jsxs("button",{onClick:()=>r("alerts"),className:`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${h>0?"bg-rose-950/80 border-rose-500/60 text-rose-300 shadow-[0_0_12px_rgba(239,68,68,0.3)] animate-pulse":d>0?"bg-amber-950/80 border-amber-500/50 text-amber-300":"bg-slate-900 border-slate-700 text-slate-400"}`,children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),y.jsxs("span",{children:["ALERTS: ",d]})]}),y.jsxs("button",{onClick:()=>u(!c),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${c?"bg-emerald-950/60 border-emerald-500/50 text-emerald-400":"bg-slate-800 border-slate-700 text-slate-400"}`,children:["SIM MODE: ",c?"ON":"OFF"]})]})]})}function N_(){const{activePage:s,setActivePage:e,currentRole:t,alerts:r}=sn(),o=r.filter(u=>u.status==="ACTIVE").length,c=[{id:"dashboard",label:"Command Center",icon:"📊"},{id:"machines",label:"Machine Fleet",icon:"⚙️"},{id:"machine-details",label:"Machine Details",icon:"🔍"},{id:"monitoring",label:"Live Telemetry",icon:"📈"},{id:"predictions",label:"AI Predictions",icon:"🧠"},{id:"safety",label:"Worker Safety",icon:"🦺",highlight:!0},{id:"safety-3d",label:"3D Safety Map",icon:"◇",highlight:!0},{id:"alerts",label:"Alert Center",icon:"🚨",badge:o},{id:"maintenance",label:"Maintenance",icon:"🔧"},{id:"analytics",label:"Reliability Analytics",icon:"📉"},{id:"business-impact",label:"Business ROI",icon:"💰"},{id:"settings",label:"System Settings",icon:"⚙️"}];return y.jsxs("aside",{className:"w-64 bg-[#080d1a] border-r border-cyan-500/15 flex flex-col justify-between p-3.5 select-none shrink-0 min-h-screen",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-[10px] font-mono tracking-wider text-cyan-400/70 uppercase px-3 mb-2 font-bold",children:"MAIN CONSOLE"}),y.jsx("nav",{className:"space-y-1",children:c.map(u=>{const d=s===u.id;return y.jsxs("button",{onClick:()=>e(u.id),className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${d?"bg-gradient-to-r from-cyan-950/80 to-blue-950/50 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]":"text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent"}`,children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"text-base",children:u.icon}),y.jsx("span",{children:u.label})]}),u.badge>0&&y.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40",children:u.badge}),u.highlight&&y.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"})]},u.id)})})]}),y.jsx("div",{className:"pt-4 border-t border-slate-800/80",children:y.jsxs("div",{className:"bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[y.jsx("span",{className:"text-[10px] font-mono text-slate-500 uppercase",children:"ACTIVE SESSION"}),y.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800",children:t})]}),y.jsxs("div",{className:"text-slate-300 font-semibold text-xs flex items-center gap-2",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),y.jsx("span",{children:"ESP32 Gateway Connected"})]}),y.jsx("p",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"REST & MQTT Ingestion Ready"})]})})]})}function P_(){const{simulationMode:s,activeScenario:e,triggerScenario:t,isSimulatingTransition:r}=sn();if(!s)return null;const o=[{key:"normal",label:"Normal Operation",icon:"🟢",color:"hover:border-emerald-500"},{key:"overheat",label:"Simulate Overheating",icon:"🔥",color:"hover:border-rose-500"},{key:"vibration",label:"Simulate High Vibration",icon:"⚡",color:"hover:border-amber-500"},{key:"overcurrent",label:"Simulate High Current",icon:"⚡",color:"hover:border-amber-500"},{key:"gas_alert",label:"Simulate Gas Alert",icon:"☣️",color:"hover:border-purple-500"},{key:"critical_failure",label:"Simulate Critical Breakdown",icon:"🚨",color:"hover:border-rose-600"}];return y.jsxs("div",{className:"w-full bg-[#0c1322] border-b border-cyan-500/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]",children:[y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsxs("span",{className:"flex h-2.5 w-2.5 relative",children:[y.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),y.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"})]}),y.jsx("span",{className:"text-xs font-mono font-bold text-cyan-300 uppercase tracking-wide",children:"HACKATHON LIVE SIMULATOR:"}),y.jsx("span",{className:"text-[11px] text-slate-400 hidden md:inline",children:"Trigger real-time anomaly propagation across multi-sensor streams"})]}),y.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:o.map(c=>{const u=e===c.key;return y.jsxs("button",{disabled:r,onClick:()=>t(c.key),className:`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all border ${u?"bg-cyan-900/70 border-cyan-400 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]":`bg-slate-900/80 border-slate-700/80 text-slate-300 ${c.color} hover:bg-slate-800`} ${r?"opacity-60 cursor-not-allowed":""}`,children:[y.jsx("span",{children:c.icon}),y.jsx("span",{children:c.label})]},c.key)})})]})}function L_({title:s,value:e,unit:t,status:r="NORMAL",expectedRange:o,icon:c,trend:u="+1.2%",subtext:d}){let h="badge-normal",p="";return r==="CRITICAL"?(h="badge-critical animate-pulse",p="border-rose-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]"):r==="WARNING"&&(h="badge-warning",p="border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.15)]"),y.jsxs("div",{className:`glass-panel p-4 flex flex-col justify-between transition-all ${p}`,children:[y.jsxs("div",{className:"flex items-center justify-between mb-2",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"text-lg",children:c}),y.jsx("span",{className:"text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide",children:s})]}),y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${h}`,children:r})]}),y.jsxs("div",{className:"my-2",children:[y.jsxs("div",{className:"flex items-baseline gap-1.5",children:[y.jsx("span",{className:"text-2xl sm:text-3xl font-black font-mono text-white tracking-tight",children:e}),y.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:t})]}),d&&y.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:d})]}),y.jsxs("div",{className:"pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400",children:[y.jsxs("span",{children:["BOUND: ",o]}),y.jsx("span",{className:"text-slate-300 font-semibold",children:u})]})]})}function Qm({score:s=87,status:e="HEALTHY",title:t="MACHINE HEALTH"}){const r=Math.max(0,Math.min(100,s));let o="HEALTHY",c="#10b981",u="rgba(16, 185, 129, 0.4)";r>=90?(o="EXCELLENT",c="#10b981",u="rgba(16, 185, 129, 0.5)"):r>=75?(o="HEALTHY",c="#06b6d4",u="rgba(6, 182, 212, 0.5)"):r>=50?(o="WARNING",c="#f59e0b",u="rgba(245, 158, 11, 0.5)"):r>=25?(o="CRITICAL",c="#ef4444",u="rgba(239, 68, 68, 0.6)"):(o="SEVERE",c="#dc2626",u="rgba(220, 38, 38, 0.7)");const d=70,h=2*Math.PI*d,p=h*(220/360),_=p-p*(r/100);return y.jsxs("div",{className:"glass-panel p-5 flex flex-col items-center justify-between text-center relative overflow-hidden",children:[y.jsxs("div",{className:"w-full flex items-center justify-between mb-2",children:[y.jsx("span",{className:"text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold",children:t}),y.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-0.5 rounded border",style:{borderColor:c,color:c,backgroundColor:`${c}15`},children:o})]}),y.jsxs("div",{className:"relative flex items-center justify-center my-2",children:[y.jsxs("svg",{className:"w-44 h-44 transform -rotate-[200deg]",viewBox:"0 0 180 180",children:[y.jsx("circle",{cx:"90",cy:"90",r:d,fill:"none",stroke:"#1e293b",strokeWidth:"12",strokeDasharray:`${p} ${h}`,strokeLinecap:"round"}),y.jsx("circle",{cx:"90",cy:"90",r:d,fill:"none",stroke:c,strokeWidth:"12",strokeDasharray:`${p} ${h}`,strokeDashoffset:_,strokeLinecap:"round",style:{filter:`drop-shadow(0 0 8px ${u})`,transition:"stroke-dashoffset 0.8s ease-in-out, stroke 0.5s ease"}})]}),y.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pt-2",children:[y.jsxs("span",{className:"text-4xl font-black text-white font-mono tracking-tight",children:[r,"%"]}),y.jsx("span",{className:"text-[11px] font-mono font-bold mt-0.5",style:{color:c},children:o})]})]}),y.jsxs("div",{className:"w-full pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between",children:[y.jsx("span",{children:"ISO-10816 CLASS II"}),y.jsx("span",{className:"text-cyan-400 font-semibold",children:"AI WEIGHTED RISK"})]})]})}function I_({customRisk:s}){const{industrialRisk:e}=sn(),t=s||e,r=t.overallScore,o=t.level;let c="text-emerald-400 border-emerald-500/40 bg-emerald-950/40",u="bg-emerald-500";r>=70?(c="text-rose-400 border-rose-500/50 bg-rose-950/60 animate-pulse",u="bg-rose-500"):r>=40&&(c="text-amber-400 border-amber-500/50 bg-amber-950/40",u="bg-amber-500");const d=[{label:"Machine Risk",value:t.machineRisk,color:"bg-blue-500"},{label:"Gas Risk (Ammonia)",value:t.gasRisk,color:"bg-purple-500"},{label:"Temperature Risk",value:t.tempRisk,color:"bg-amber-500"},{label:"Vibration Risk",value:t.vibRisk,color:"bg-cyan-500"}];return y.jsxs("div",{className:"glass-panel p-5 flex flex-col justify-between",children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("div",{children:[y.jsx("span",{className:"text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold",children:"OVERALL INDUSTRIAL RISK"}),y.jsx("p",{className:"text-[10px] text-slate-500",children:"Integrated site safety index"})]}),y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${c}`,children:o})]}),y.jsxs("div",{className:"flex items-baseline gap-2 my-2",children:[y.jsx("span",{className:"text-4xl font-black text-white font-mono",children:r}),y.jsx("span",{className:"text-sm font-mono text-slate-400 font-bold",children:"/ 100"})]}),y.jsx("div",{className:"w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-4",children:y.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${u}`,style:{width:`${r}%`}})}),y.jsx("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:d.map(h=>y.jsxs("div",{className:"text-xs",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1 text-[11px]",children:[y.jsx("span",{className:"text-slate-400",children:h.label}),y.jsxs("span",{className:"font-mono font-bold text-slate-200",children:[h.value,"%"]})]}),y.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden",children:y.jsx("div",{className:`h-full rounded-full ${h.color} transition-all duration-500`,style:{width:`${h.value}%`}})})]},h.label))})]})}const D_={role:"assistant",content:"Welcome to Aila. I can read the current fleet, sensors, alerts, maintenance queue, and safety zones. What should we inspect?"},U_=["Which machine has the highest risk?","How many active alerts are there?","What is the safest zone?"];function O_(){const{machines:s,selectedMachine:e}=sn(),[t,r]=vt.useState(!1),[o,c]=vt.useState([D_]),[u,d]=vt.useState(""),[h,p]=vt.useState(!1),_=async v=>{v.preventDefault();const S=u.trim();if(!S||h)return;const M=[...o,{role:"user",content:S}];c(M),d(""),p(!0);try{const T=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:S,messages:M,context:{selectedMachine:e,selectedMachineId:e==null?void 0:e.id,machines:s}})}),w=await T.text();let x;try{x=w?JSON.parse(w):{}}catch{throw new Error(`Server returned ${T.status} ${T.statusText}, not JSON. Start the backend at http://localhost:8000.`)}if(!T.ok)throw new Error(x.error||`Chat request failed (${T.status})`);c(g=>[...g,{role:"assistant",content:x.answer}])}catch(T){c(w=>[...w,{role:"assistant",content:`I could not reach the assistant service. ${T.message}`}])}finally{p(!1)}};return y.jsxs("div",{className:"chatbot-shell",children:[t&&y.jsxs("section",{className:"chatbot-panel","aria-label":"Aila assistant",children:[y.jsxs("header",{className:"chatbot-header",children:[y.jsxs("div",{children:[y.jsxs("div",{className:"chatbot-title-row",children:[y.jsx("span",{className:"chatbot-avatar",children:"A"}),y.jsxs("div",{children:[y.jsx("p",{className:"chatbot-kicker",children:"AI OPERATIONS ASSISTANT"}),y.jsx("h2",{children:"Aila"})]})]}),y.jsxs("p",{className:"chatbot-status",children:[y.jsx("span",{})," Connected to live telemetry"]})]}),y.jsx("button",{className:"chatbot-close",type:"button",onClick:()=>r(!1),"aria-label":"Close assistant",children:"×"})]}),y.jsxs("div",{className:"chatbot-messages","aria-live":"polite",children:[o.length===1&&y.jsx("div",{className:"chatbot-quick-questions",children:U_.map(v=>y.jsx("button",{type:"button",onClick:()=>d(v),children:v},v))}),o.map((v,S)=>y.jsx("div",{className:`chatbot-message ${v.role}`,children:v.content},`${v.role}-${S}`)),h&&y.jsx("div",{className:"chatbot-message assistant chatbot-typing",children:"Aila is checking the dashboard..."})]}),y.jsxs("form",{className:"chatbot-form",onSubmit:_,children:[y.jsx("input",{value:u,onChange:v=>d(v.target.value),placeholder:"Ask about this dashboard...","aria-label":"Ask Aila a question"}),y.jsx("button",{type:"submit",disabled:!u.trim()||h,"aria-label":"Send question",children:"↗"})]})]}),y.jsxs("button",{className:`chatbot-launcher ${t?"is-open":""}`,type:"button",onClick:()=>r(v=>!v),"aria-label":t?"Close Aila assistant":"Open Aila assistant",children:[y.jsx("span",{className:"chatbot-launcher-dot"}),y.jsx("span",{children:t?"CLOSE":"ASK AILA"})]})]})}function F_(){const{alerts:s}=sn(),e=vt.useRef(new Set(s.map(w=>w.id))),[t,r]=vt.useState([]),[o,c]=vt.useState(!1),[u,d]=vt.useState(0),h=vt.useRef(null),p=vt.useRef(null),_=vt.useRef(null),v=()=>{p.current&&p.current.forEach(w=>w.stop()),_.current&&window.clearInterval(_.current),p.current=null,_.current=null,d(0)},S=()=>{v();const w=window.AudioContext||window.webkitAudioContext;if(!w)return;const x=h.current||new w;h.current=x,x.resume();const g=x.createOscillator(),D=x.createGain();g.type="square",g.frequency.value=980,D.gain.value=.42,g.connect(D).connect(x.destination),g.start(),p.current=[g];let L=!0,R=60;d(R),_.current=window.setInterval(()=>{R-=1,d(R),L=!L,g.frequency.setValueAtTime(L?980:560,x.currentTime),R<=0&&v()},1e3)},M=async()=>{"Notification"in window&&Notification.permission==="default"&&await Notification.requestPermission();const w=window.AudioContext||window.webkitAudioContext;w&&(h.current=h.current||new w,await h.current.resume()),c(!0)};vt.useEffect(()=>()=>v(),[]),vt.useEffect(()=>{const w=s.filter(x=>x.status==="ACTIVE"&&!e.current.has(x.id));w.length&&w.forEach(x=>{e.current.add(x.id),(x.severity==="WARNING"||x.severity==="CRITICAL")&&(x.severity==="CRITICAL"&&o&&S(),navigator.vibrate&&navigator.vibrate(x.severity==="CRITICAL"?[500,150,500,150,900]:[180,100,180]),o&&"Notification"in window&&Notification.permission==="granted"&&new Notification(`${x.severity}: ${x.alertType}`,{body:`${x.machineId} · ${x.currentValue}`,tag:x.id}),r(g=>[{...x,deliveredAt:new Date().toLocaleTimeString()},...g].slice(0,4)))})},[s,o]);const T=t[0];return y.jsxs("aside",{className:"mobile-alert-center",children:[y.jsxs("div",{className:"mobile-alert-heading",children:[y.jsxs("div",{children:[y.jsx("p",{className:"mobile-alert-eyebrow",children:"MOBILE ALERTING"}),y.jsx("h3",{children:"Operator phone channel"})]}),y.jsxs("span",{className:"mobile-signal",children:[y.jsx("i",{})," LIVE"]})]}),u>0&&y.jsxs("div",{className:"emergency-siren-banner",children:[y.jsx("span",{className:"siren-light"}),y.jsxs("div",{children:[y.jsx("strong",{children:"EMERGENCY SIREN ACTIVE"}),y.jsxs("small",{children:["Full-volume alarm · ",u,"s remaining"]})]}),y.jsx("button",{type:"button",onClick:v,children:"STOP"})]}),y.jsxs("div",{className:"mobile-alert-device",children:[y.jsx("div",{className:"mobile-device-notch"}),y.jsxs("div",{className:"mobile-device-screen",children:[y.jsxs("div",{className:"mobile-device-bar",children:[y.jsx("span",{children:"09:41"}),y.jsx("span",{children:"▮▮▮ 100%"})]}),T?y.jsxs(y.Fragment,{children:[y.jsxs("p",{className:"mobile-alert-app",children:["AI SMART RETROFIT ",y.jsx("span",{children:T.severity})]}),y.jsx("strong",{children:T.alertType}),y.jsxs("p",{children:[T.machineId," · ",T.zone]}),y.jsx("div",{className:"mobile-alert-reading",children:T.currentValue}),y.jsxs("small",{children:["Recommended: ",T.aiRecommendation]})]}):y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"mobile-alert-app",children:"AI SMART RETROFIT"}),y.jsx("strong",{children:"Phone alerts are armed"}),y.jsx("p",{children:"New risk events will appear here with sound and vibration."}),y.jsx("div",{className:"mobile-alert-reading mobile-ready",children:"READY TO RECEIVE"})]})]})]}),y.jsxs("div",{className:"mobile-alert-footer",children:[y.jsx("span",{children:t.length?`${t.length} recent phone alert${t.length===1?"":"s"}`:"No new phone alerts"}),y.jsx("button",{type:"button",onClick:M,children:o?"SIREN ARMED":"ARM SIREN + ALERTS"})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="170",Vs={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k_=0,zp=1,B_=2,Jm=1,z_=2,Hi=3,Tr=0,In=1,Vi=2,Mr=0,Gs=1,Hp=2,Vp=3,Gp=4,H_=5,Yr=100,V_=101,G_=102,j_=103,W_=104,X_=200,Y_=201,$_=202,q_=203,ad=204,od=205,K_=206,Z_=207,Q_=208,J_=209,ev=210,tv=211,nv=212,iv=213,rv=214,ld=0,cd=1,ud=2,Xs=3,dd=4,fd=5,hd=6,pd=7,eg=0,sv=1,av=2,Er=0,ov=1,lv=2,cv=3,uv=4,dv=5,fv=6,hv=7,tg=300,Ys=301,$s=302,md=303,gd=304,kl=306,_d=1e3,qr=1001,vd=1002,hi=1003,pv=1004,el=1005,Si=1006,Au=1007,Kr=1008,Xi=1009,ng=1010,ig=1011,Va=1012,Kd=1013,Zr=1014,Gi=1015,Ga=1016,Zd=1017,Qd=1018,qs=1020,rg=35902,sg=1021,ag=1022,fi=1023,og=1024,lg=1025,js=1026,Ks=1027,cg=1028,Jd=1029,ug=1030,ef=1031,tf=1033,Cl=33776,Rl=33777,Nl=33778,Pl=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,Td=37492,wd=37496,Ad=37808,bd=37809,Cd=37810,Rd=37811,Nd=37812,Pd=37813,Ld=37814,Id=37815,Dd=37816,Ud=37817,Od=37818,Fd=37819,kd=37820,Bd=37821,Ll=36492,zd=36494,Hd=36495,dg=36283,Vd=36284,Gd=36285,jd=36286,mv=3200,gv=3201,fg=0,_v=1,Sr="",Kn="srgb",Qs="srgb-linear",Bl="linear",Rt="srgb",As=7680,jp=519,vv=512,xv=513,yv=514,hg=515,Sv=516,Mv=517,Ev=518,Tv=519,Wp=35044,Xp="300 es",ji=2e3,Dl=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,Wd=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function wv(s,e){return(s%e+e)%e}function bu(s,e,t){return(1-t)*s+t*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Av={DEG2RAD:Ha};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,r,o,c,u,d,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,d,h,p)}set(e,t,r,o,c,u,d,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=c,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],_=r[4],v=r[7],S=r[2],M=r[5],T=r[8],w=o[0],x=o[3],g=o[6],D=o[1],L=o[4],R=o[7],J=o[2],B=o[5],F=o[8];return c[0]=u*w+d*D+h*J,c[3]=u*x+d*L+h*B,c[6]=u*g+d*R+h*F,c[1]=p*w+_*D+v*J,c[4]=p*x+_*L+v*B,c[7]=p*g+_*R+v*F,c[2]=S*w+M*D+T*J,c[5]=S*x+M*L+T*B,c[8]=S*g+M*R+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-r*c*_+r*d*h+o*c*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],v=_*u-d*p,S=d*h-_*c,M=p*c-u*h,T=t*v+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*p-_*r)*w,e[2]=(d*r-o*u)*w,e[3]=S*w,e[4]=(_*t-o*h)*w,e[5]=(o*c-d*t)*w,e[6]=M*w,e[7]=(r*h-p*t)*w,e[8]=(u*t-r*c)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,u,d){const h=Math.cos(c),p=Math.sin(c);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new ot;function pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bv(){const s=Ul("canvas");return s.style.display="block",s}const Yp={};function Ba(s){s in Yp||(Yp[s]=!0,console.warn(s))}function Cv(s,e,t){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}function Rv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $p=[.64,.33,.3,.6,.15,.06],qp=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[Qs]:{primaries:$p,whitePoint:Kp,transfer:Bl,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:qp,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:$p,whitePoint:Kp,transfer:Rt,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:qp,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let bs;class Pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Ul("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Wi(c[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wi(t[r]/255)*255):t[r]=Wi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lv=0;class mg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Ru(o[u].image)):c.push(Ru(o[u]))}else c=Ru(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function Ru(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iv=0;class Dn extends ts{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=qr,o=qr,c=Si,u=Kr,d=fi,h=Xi,p=Dn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=ja(),this.name="",this.source=new mg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=tg;Dn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,r=0,o=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const h=e.elements,p=h[0],_=h[4],v=h[8],S=h[1],M=h[5],T=h[9],w=h[2],x=h[6],g=h[10];if(Math.abs(_-S)<.01&&Math.abs(v-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,R=(M+1)/2,J=(g+1)/2,B=(_+S)/4,F=(v+w)/4,W=(T+x)/4;return L>R&&L>J?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=B/r,c=F/r):R>J?R<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),r=B/o,c=W/o):J<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(J),r=F/c,o=W/c),this.set(r,o,c,t),this}let D=Math.sqrt((x-T)*(x-T)+(v-w)*(v-w)+(S-_)*(S-_));return Math.abs(D)<.001&&(D=1),this.x=(x-T)/D,this.y=(v-w)/D,this.z=(S-_)/D,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dv extends ts{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Dv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gg extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uv extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,u,d){let h=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];const S=c[u+0],M=c[u+1],T=c[u+2],w=c[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d===1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=w;return}if(v!==w||h!==S||p!==M||_!==T){let x=1-d;const g=h*S+p*M+_*T+v*w,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const J=Math.sqrt(L),B=Math.atan2(J,g*D);x=Math.sin(x*B)/J,d=Math.sin(d*B)/J}const R=d*D;if(h=h*x+S*R,p=p*x+M*R,_=_*x+T*R,v=v*x+w*R,x===1-d){const J=1/Math.sqrt(h*h+p*p+_*_+v*v);h*=J,p*=J,_*=J,v*=J}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,c,u){const d=r[o],h=r[o+1],p=r[o+2],_=r[o+3],v=c[u],S=c[u+1],M=c[u+2],T=c[u+3];return e[t]=d*T+_*v+h*M-p*S,e[t+1]=h*T+_*S+p*v-d*M,e[t+2]=p*T+_*M+d*S-h*v,e[t+3]=_*T-d*v-h*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),_=d(o/2),v=d(c/2),S=h(r/2),M=h(o/2),T=h(c/2);switch(u){case"XYZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"YXZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"ZXY":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"ZYX":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"YZX":this._x=S*_*v+p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v-S*M*T;break;case"XZY":this._x=S*_*v-p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],u=t[1],d=t[5],h=t[9],p=t[2],_=t[6],v=t[10],S=r+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-h)*M,this._y=(c-p)*M,this._z=(u-o)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-o)/M,this._x=(c+p)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,u=e._w,d=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*d+o*p-c*h,this._y=o*_+u*h+c*d-r*p,this._z=c*_+u*p+r*h-o*d,this._w=u*_-r*d-o*h-c*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*c+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,d),v=Math.sin((1-t)*_)/p,S=Math.sin(t*_)/p;return this._w=u*v+this._w*S,this._x=r*v+this._x*S,this._y=o*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*r),_=2*(d*t-c*o),v=2*(c*r-u*t);return this.x=t+h*p+u*v-d*_,this.y=r+h*_+d*p-c*v,this.z=o+h*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-c*d,this.y=c*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new q,Jp=new Jr;class Wa{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ci):ci.fromBufferAttribute(c,u),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),nl.subVectors(this.max,Da),Cs.subVectors(e.a,Da),Rs.subVectors(e.b,Da),Ns.subVectors(e.c,Da),pr.subVectors(Rs,Cs),mr.subVectors(Ns,Rs),zr.subVectors(Cs,Ns);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!Pu(t,Cs,Rs,Ns,nl)||(t=[1,0,0,0,1,0,0,0,1],!Pu(t,Cs,Rs,Ns,nl))?!1:(il.crossVectors(pr,mr),t=[il.x,il.y,il.z],Pu(t,Cs,Rs,Ns,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new q,new q,new q,new q,new q,new q,new q,new q],ci=new q,tl=new Wa,Cs=new q,Rs=new q,Ns=new q,pr=new q,mr=new q,zr=new q,Da=new q,nl=new q,il=new q,Hr=new q;function Pu(s,e,t,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Hr.fromArray(s,c);const d=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),h=e.dot(Hr),p=t.dot(Hr),_=r.dot(Hr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>d)return!1}return!0}const Ov=new Wa,Ua=new q,Lu=new q;class zl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ov.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Lu)),this.expandByPoint(Ua.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new q,Iu=new q,rl=new q,gr=new q,Du=new q,sl=new q,Uu=new q;class Hl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Iu.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Iu);const c=e.distanceTo(t)*.5,u=-this.direction.dot(rl),d=gr.dot(this.direction),h=-gr.dot(rl),p=gr.lengthSq(),_=Math.abs(1-u*u);let v,S,M,T;if(_>0)if(v=u*h-d,S=u*d-h,T=c*_,v>=0)if(S>=-T)if(S<=T){const w=1/_;v*=w,S*=w,M=v*(v+u*S+2*d)+S*(u*v+S+2*h)+p}else S=c,v=Math.max(0,-(u*S+d)),M=-v*v+S*(S+2*h)+p;else S=-c,v=Math.max(0,-(u*S+d)),M=-v*v+S*(S+2*h)+p;else S<=-T?(v=Math.max(0,-(-u*c+d)),S=v>0?-c:Math.min(Math.max(-c,-h),c),M=-v*v+S*(S+2*h)+p):S<=T?(v=0,S=Math.min(Math.max(-c,-h),c),M=S*(S+2*h)+p):(v=Math.max(0,-(u*c+d)),S=v>0?c:Math.min(Math.max(-c,-h),c),M=-v*v+S*(S+2*h)+p);else S=u>0?-c:c,v=Math.max(0,-(u*S+d)),M=-v*v+S*(S+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Iu).addScaledVector(rl,S),M}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,u,d,h;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,o=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,o=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,u=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,u=(e.min.y-S.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-S.z)*v,h=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,h=(e.min.z-S.z)*v),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,c){Du.subVectors(t,e),sl.subVectors(r,e),Uu.crossVectors(Du,sl);let u=this.direction.dot(Uu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;gr.subVectors(this.origin,e);const h=d*this.direction.dot(sl.crossVectors(gr,sl));if(h<0)return null;const p=d*this.direction.dot(Du.cross(gr));if(p<0||h+p>u)return null;const _=-d*gr.dot(Uu);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,c,u,d,h,p,_,v,S,M,T,w,x){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,d,h,p,_,v,S,M,T,w,x)}set(e,t,r,o,c,u,d,h,p,_,v,S,M,T,w,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=o,g[1]=c,g[5]=u,g[9]=d,g[13]=h,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=w,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),c=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=u*_,M=u*v,T=d*_,w=d*v;t[0]=h*_,t[4]=-h*v,t[8]=p,t[1]=M+T*p,t[5]=S-w*p,t[9]=-d*h,t[2]=w-S*p,t[6]=T+M*p,t[10]=u*h}else if(e.order==="YXZ"){const S=h*_,M=h*v,T=p*_,w=p*v;t[0]=S+w*d,t[4]=T*d-M,t[8]=u*p,t[1]=u*v,t[5]=u*_,t[9]=-d,t[2]=M*d-T,t[6]=w+S*d,t[10]=u*h}else if(e.order==="ZXY"){const S=h*_,M=h*v,T=p*_,w=p*v;t[0]=S-w*d,t[4]=-u*v,t[8]=T+M*d,t[1]=M+T*d,t[5]=u*_,t[9]=w-S*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const S=u*_,M=u*v,T=d*_,w=d*v;t[0]=h*_,t[4]=T*p-M,t[8]=S*p+w,t[1]=h*v,t[5]=w*p+S,t[9]=M*p-T,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const S=u*h,M=u*p,T=d*h,w=d*p;t[0]=h*_,t[4]=w-S*v,t[8]=T*v+M,t[1]=v,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=M*v+T,t[10]=S-w*v}else if(e.order==="XZY"){const S=u*h,M=u*p,T=d*h,w=d*p;t[0]=h*_,t[4]=-v,t[8]=p*_,t[1]=S*v+w,t[5]=u*_,t[9]=M*v-T,t[2]=T*v-M,t[6]=d*_,t[10]=w*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,kv)}lookAt(e,t,r){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),_r.crossVectors(r,Bn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),_r.crossVectors(r,Bn)),_r.normalize(),al.crossVectors(Bn,_r),o[0]=_r.x,o[4]=al.x,o[8]=Bn.x,o[1]=_r.y,o[5]=al.y,o[9]=Bn.y,o[2]=_r.z,o[6]=al.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],_=r[1],v=r[5],S=r[9],M=r[13],T=r[2],w=r[6],x=r[10],g=r[14],D=r[3],L=r[7],R=r[11],J=r[15],B=o[0],F=o[4],W=o[8],N=o[12],C=o[1],z=o[5],ce=o[9],ne=o[13],de=o[2],pe=o[6],K=o[10],te=o[14],U=o[3],Q=o[7],ae=o[11],O=o[15];return c[0]=u*B+d*C+h*de+p*U,c[4]=u*F+d*z+h*pe+p*Q,c[8]=u*W+d*ce+h*K+p*ae,c[12]=u*N+d*ne+h*te+p*O,c[1]=_*B+v*C+S*de+M*U,c[5]=_*F+v*z+S*pe+M*Q,c[9]=_*W+v*ce+S*K+M*ae,c[13]=_*N+v*ne+S*te+M*O,c[2]=T*B+w*C+x*de+g*U,c[6]=T*F+w*z+x*pe+g*Q,c[10]=T*W+w*ce+x*K+g*ae,c[14]=T*N+w*ne+x*te+g*O,c[3]=D*B+L*C+R*de+J*U,c[7]=D*F+L*z+R*pe+J*Q,c[11]=D*W+L*ce+R*K+J*ae,c[15]=D*N+L*ne+R*te+J*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],h=e[9],p=e[13],_=e[2],v=e[6],S=e[10],M=e[14],T=e[3],w=e[7],x=e[11],g=e[15];return T*(+c*h*v-o*p*v-c*d*S+r*p*S+o*d*M-r*h*M)+w*(+t*h*M-t*p*S+c*u*S-o*u*M+o*p*_-c*h*_)+x*(+t*p*v-t*d*M-c*u*v+r*u*M+c*d*_-r*p*_)+g*(-o*d*_-t*h*v+t*d*S+o*u*v-r*u*S+r*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],v=e[9],S=e[10],M=e[11],T=e[12],w=e[13],x=e[14],g=e[15],D=v*x*p-w*S*p+w*h*M-d*x*M-v*h*g+d*S*g,L=T*S*p-_*x*p-T*h*M+u*x*M+_*h*g-u*S*g,R=_*w*p-T*v*p+T*d*M-u*w*M-_*d*g+u*v*g,J=T*v*h-_*w*h-T*d*S+u*w*S+_*d*x-u*v*x,B=t*D+r*L+o*R+c*J;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=D*F,e[1]=(w*S*c-v*x*c-w*o*M+r*x*M+v*o*g-r*S*g)*F,e[2]=(d*x*c-w*h*c+w*o*p-r*x*p-d*o*g+r*h*g)*F,e[3]=(v*h*c-d*S*c-v*o*p+r*S*p+d*o*M-r*h*M)*F,e[4]=L*F,e[5]=(_*x*c-T*S*c+T*o*M-t*x*M-_*o*g+t*S*g)*F,e[6]=(T*h*c-u*x*c-T*o*p+t*x*p+u*o*g-t*h*g)*F,e[7]=(u*S*c-_*h*c+_*o*p-t*S*p-u*o*M+t*h*M)*F,e[8]=R*F,e[9]=(T*v*c-_*w*c-T*r*M+t*w*M+_*r*g-t*v*g)*F,e[10]=(u*w*c-T*d*c+T*r*p-t*w*p-u*r*g+t*d*g)*F,e[11]=(_*d*c-u*v*c-_*r*p+t*v*p+u*r*M-t*d*M)*F,e[12]=J*F,e[13]=(_*w*o-T*v*o+T*r*S-t*w*S-_*r*x+t*v*x)*F,e[14]=(T*d*o-u*w*o-T*r*h+t*w*h+u*r*x-t*d*x)*F,e[15]=(u*v*o-_*d*o+_*r*h-t*v*h-u*r*S+t*d*S)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,u=e.x,d=e.y,h=e.z,p=c*u,_=c*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,_*d+r,_*h-o*u,0,p*h-o*d,_*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,u=t._y,d=t._z,h=t._w,p=c+c,_=u+u,v=d+d,S=c*p,M=c*_,T=c*v,w=u*_,x=u*v,g=d*v,D=h*p,L=h*_,R=h*v,J=r.x,B=r.y,F=r.z;return o[0]=(1-(w+g))*J,o[1]=(M+R)*J,o[2]=(T-L)*J,o[3]=0,o[4]=(M-R)*B,o[5]=(1-(S+g))*B,o[6]=(x+D)*B,o[7]=0,o[8]=(T+L)*F,o[9]=(x-D)*F,o[10]=(1-(S+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let c=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),d=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/c,_=1/u,v=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,c,u,d=ji){const h=this.elements,p=2*c/(t-e),_=2*c/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let M,T;if(d===ji)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(d===Dl)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,c,u,d=ji){const h=this.elements,p=1/(t-e),_=1/(r-o),v=1/(u-c),S=(t+e)*p,M=(r+o)*_;let T,w;if(d===ji)T=(u+c)*v,w=-2*v;else if(d===Dl)T=c*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ps=new q,ui=new kt,Fv=new q(0,0,0),kv=new q(1,1,1),_r=new q,al=new q,Bn=new q,em=new kt,tm=new Jr;class Ei{constructor(e=0,t=0,r=0,o=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],h=o[1],p=o[5],_=o[9],v=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Mn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const nm=new q,Ls=new Jr,ki=new kt,ol=new q,Oa=new q,zv=new q,Hv=new Jr,im=new q(1,0,0),rm=new q(0,1,0),sm=new q(0,0,1),am={type:"added"},Vv={type:"removed"},Is={type:"childadded",child:null},Ou={type:"childremoved",child:null};class rn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new q,t=new Ei,r=new Jr,o=new q(1,1,1);function c(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ot}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,t){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ol.copy(e):ol.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Oa,ol,this.up):ki.lookAt(ol,Oa,this.up),this.quaternion.setFromRotationMatrix(ki),o&&(ki.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(ki),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vv),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const v=h[p];c(e.shapes,v)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(c(e.materials,this.material[h]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(c(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),S=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const h=[];for(const p in d){const _=d[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}rn.DEFAULT_UP=new q(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new q,Bi=new q,Fu=new q,zi=new q,Ds=new q,Us=new q,om=new q,ku=new q,Bu=new q,zu=new q,Hu=new Vt,Vu=new Vt,Gu=new Vt;class Qn{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){di.subVectors(o,t),Bi.subVectors(r,t),Fu.subVectors(e,t);const u=di.dot(di),d=di.dot(Bi),h=di.dot(Fu),p=Bi.dot(Bi),_=Bi.dot(Fu),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,M=(p*h-d*_)*S,T=(u*_-d*h)*S;return c.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,o,c,u,d,h){return this.getBarycoord(e,t,r,o,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,zi.x),h.addScaledVector(u,zi.y),h.addScaledVector(d,zi.z),h)}static getInterpolatedAttribute(e,t,r,o,c,u){return Hu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),Hu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Hu,c.x),u.addScaledVector(Vu,c.y),u.addScaledVector(Gu,c.z),u}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),Bi.subVectors(e,t),di.cross(Bi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),di.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,c){return Qn.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let u,d;Ds.subVectors(o,r),Us.subVectors(c,r),ku.subVectors(e,r);const h=Ds.dot(ku),p=Us.dot(ku);if(h<=0&&p<=0)return t.copy(r);Bu.subVectors(e,o);const _=Ds.dot(Bu),v=Us.dot(Bu);if(_>=0&&v<=_)return t.copy(o);const S=h*v-_*p;if(S<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(r).addScaledVector(Ds,u);zu.subVectors(e,c);const M=Ds.dot(zu),T=Us.dot(zu);if(T>=0&&M<=T)return t.copy(c);const w=M*p-h*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),t.copy(r).addScaledVector(Us,d);const x=_*T-M*v;if(x<=0&&v-_>=0&&M-T>=0)return om.subVectors(c,o),d=(v-_)/(v-_+(M-T)),t.copy(o).addScaledVector(om,d);const g=1/(x+w+S);return u=w*g,d=S*g,t.copy(r).addScaledVector(Ds,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ju(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=St.workingColorSpace){if(e=wv(e,1),t=Mn(t,0,1),r=Mn(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,u=2*r-c;this.r=ju(u,c,e+1/3),this.g=ju(u,c,e),this.b=ju(u,c,e-1/3)}return St.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=_g[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return St.fromWorkingColorSpace(mn.copy(this),e),Math.round(Mn(mn.r*255,0,255))*65536+Math.round(Mn(mn.g*255,0,255))*256+Math.round(Mn(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(mn.copy(this),t);const r=mn.r,o=mn.g,c=mn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let h,p;const _=(d+u)/2;if(d===u)h=0,p=0;else{const v=u-d;switch(p=_<=.5?v/(u+d):v/(2-u-d),u){case r:h=(o-c)/v+(o<c?6:0);break;case o:h=(c-r)/v+2;break;case c:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){St.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,r=mn.g,o=mn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(ll);const r=bu(vr.h,ll.h,t),o=bu(vr.s,ll.s,t),c=bu(vr.l,ll.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new pt;pt.NAMES=_g;let Gv=0;class Js extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ja(),this.name="",this.blending=Gs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vg extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new q,cl=new at;class Mi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wp,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class xg extends Mi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yg extends Mi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ei extends Mi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let jv=0;const qn=new kt,Wu=new rn,Os=new q,zn=new Wa,Fa=new Wa,nn=new q;class Ti extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?yg:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,r){return qn.makeTranslation(e,t,r),this.applyMatrix4(qn),this}scale(e,t,r){return qn.makeScale(e,t,r),this.applyMatrix4(qn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ei(r,3))}else{for(let r=0,o=t.count;r<o;r++){const c=e[r];t.setXYZ(r,c.x,c.y,c.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const d=t[c];Fa.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,Fa.min),zn.expandByPoint(nn),nn.addVectors(zn.max,Fa.max),zn.expandByPoint(nn)):(zn.expandByPoint(Fa.min),zn.expandByPoint(Fa.max))}zn.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(t)for(let c=0,u=t.length;c<u;c++){const d=t[c],h=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)nn.fromBufferAttribute(d,p),h&&(Os.fromBufferAttribute(e,p),nn.add(Os)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let W=0;W<r.count;W++)d[W]=new q,h[W]=new q;const p=new q,_=new q,v=new q,S=new at,M=new at,T=new at,w=new q,x=new q;function g(W,N,C){p.fromBufferAttribute(r,W),_.fromBufferAttribute(r,N),v.fromBufferAttribute(r,C),S.fromBufferAttribute(c,W),M.fromBufferAttribute(c,N),T.fromBufferAttribute(c,C),_.sub(p),v.sub(p),M.sub(S),T.sub(S);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(z),d[W].add(w),d[N].add(w),d[C].add(w),h[W].add(x),h[N].add(x),h[C].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let W=0,N=D.length;W<N;++W){const C=D[W],z=C.start,ce=C.count;for(let ne=z,de=z+ce;ne<de;ne+=3)g(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const L=new q,R=new q,J=new q,B=new q;function F(W){J.fromBufferAttribute(o,W),B.copy(J);const N=d[W];L.copy(N),L.sub(J.multiplyScalar(J.dot(N))).normalize(),R.crossVectors(B,N);const z=R.dot(h[W])<0?-1:1;u.setXYZW(W,L.x,L.y,L.z,z)}for(let W=0,N=D.length;W<N;++W){const C=D[W],z=C.start,ce=C.count;for(let ne=z,de=z+ce;ne<de;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new q,c=new q,u=new q,d=new q,h=new q,p=new q,_=new q,v=new q;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),w=e.getX(S+1),x=e.getX(S+2);o.fromBufferAttribute(t,T),c.fromBufferAttribute(t,w),u.fromBufferAttribute(t,x),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),d.add(_),h.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),c.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,h){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(h.length*_);let M=0,T=0;for(let w=0,x=h.length;w<x;w++){d.isInterleavedBufferAttribute?M=h[w]*d.data.stride+d.offset:M=h[w]*_;for(let g=0;g<_;g++)S[T++]=p[M++]}return new Mi(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,r);t.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const h=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=e(S,r);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(o[h]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new kt,Vr=new Hl,ul=new zl,cm=new q,dl=new q,fl=new q,hl=new q,Xu=new q,pl=new q,um=new q,ml=new q;class Jn extends rn{constructor(e=new Ti,t=new vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){pl.set(0,0,0);for(let h=0,p=c.length;h<p;h++){const _=d[h],v=c[h];_!==0&&(Xu.fromBufferAttribute(v,e),u?pl.addScaledVector(Xu,_):pl.addScaledVector(Xu.sub(t),_))}t.add(pl)}return t}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(ul.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ul,cm)===null||Vr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(lm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let o;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=u[x.materialIndex],D=Math.max(x.start,M.start),L=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let R=D,J=L;R<J;R+=3){const B=d.getX(R),F=d.getX(R+1),W=d.getX(R+2);o=gl(this,g,e,r,p,_,v,B,F,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=T,g=w;x<g;x+=3){const D=d.getX(x),L=d.getX(x+1),R=d.getX(x+2);o=gl(this,u,e,r,p,_,v,D,L,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,w=S.length;T<w;T++){const x=S[T],g=u[x.materialIndex],D=Math.max(x.start,M.start),L=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let R=D,J=L;R<J;R+=3){const B=R,F=R+1,W=R+2;o=gl(this,g,e,r,p,_,v,B,F,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let x=T,g=w;x<g;x+=3){const D=x,L=x+1,R=x+2;o=gl(this,u,e,r,p,_,v,D,L,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Wv(s,e,t,r,o,c,u,d){let h;if(e.side===In?h=r.intersectTriangle(u,c,o,!0,d):h=r.intersectTriangle(o,c,u,e.side===Tr,d),h===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ml);return p<t.near||p>t.far?null:{distance:p,point:ml.clone(),object:s}}function gl(s,e,t,r,o,c,u,d,h,p){s.getVertexPosition(d,dl),s.getVertexPosition(h,fl),s.getVertexPosition(p,hl);const _=Wv(s,e,t,r,dl,fl,hl,um);if(_){const v=new q;Qn.getBarycoord(um,dl,fl,hl,v),o&&(_.uv=Qn.getInterpolatedAttribute(o,d,h,p,v,new at)),c&&(_.uv1=Qn.getInterpolatedAttribute(c,d,h,p,v,new at)),u&&(_.normal=Qn.getInterpolatedAttribute(u,d,h,p,v,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:h,c:p,normal:new q,materialIndex:0};Qn.getNormal(dl,fl,hl,S.normal),_.face=S,_.barycoord=v}return _}class es extends Ti{constructor(e=1,t=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],p=[],_=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,u,c,0),T("z","y","x",1,-1,r,t,-e,u,c,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,c,4),T("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new ei(p,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(v,2));function T(w,x,g,D,L,R,J,B,F,W,N){const C=R/F,z=J/W,ce=R/2,ne=J/2,de=B/2,pe=F+1,K=W+1;let te=0,U=0;const Q=new q;for(let ae=0;ae<K;ae++){const O=ae*z-ne;for(let ie=0;ie<pe;ie++){const Pe=ie*C-ce;Q[w]=Pe*D,Q[x]=O*L,Q[g]=de,p.push(Q.x,Q.y,Q.z),Q[w]=0,Q[x]=0,Q[g]=B>0?1:-1,_.push(Q.x,Q.y,Q.z),v.push(ie/F),v.push(1-ae/W),te+=1}}for(let ae=0;ae<W;ae++)for(let O=0;O<F;O++){const ie=S+O+pe*ae,Pe=S+O+pe*(ae+1),$=S+(O+1)+pe*(ae+1),ue=S+(O+1)+pe*ae;h.push(ie,Pe,ue),h.push(Pe,$,ue),U+=6}d.addGroup(M,U,N),M+=U,S+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Sn(s){const e={};for(let t=0;t<s.length;t++){const r=Zs(s[t]);for(const o in r)e[o]=r[o]}return e}function Xv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Yv={clone:Zs,merge:Sn};var $v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$v,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Mg extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new q,dm=new at,fm=new at;class Zn extends Mg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,dm,fm),t.subVectors(fm,dm)}setViewOffset(e,t,r,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,ks=1;class Kv extends rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Fs,ks,e,t);o.layers=this.layers,this.add(o);const c=new Zn(Fs,ks,e,t);c.layers=this.layers,this.add(c);const u=new Zn(Fs,ks,e,t);u.layers=this.layers,this.add(u);const d=new Zn(Fs,ks,e,t);d.layers=this.layers,this.add(d);const h=new Zn(Fs,ks,e,t);h.layers=this.layers,this.add(h);const p=new Zn(Fs,ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,u,d,h]=t;for(const p of t)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Dl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,p,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,c),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,_),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Eg extends Dn{constructor(e,t,r,o,c,u,d,h,p,_){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,c,u,d,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zv extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Eg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new es(5,5,5),c=new wr({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Mr});c.uniforms.tEquirect.value=t;const u=new Jn(o,c),d=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Si),new Kv(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(c)}}const Yu=new q,Qv=new q,Jv=new ot;class yr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Yu.subVectors(r,t).cross(Qv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Yu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:t.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Jv.getNormalMatrix(e),o=this.coplanarPoint(Yu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new zl,_l=new q;class rf{constructor(e=new yr,t=new yr,r=new yr,o=new yr,c=new yr,u=new yr){this.planes=[e,t,r,o,c,u]}set(e,t,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],_=o[5],v=o[6],S=o[7],M=o[8],T=o[9],w=o[10],x=o[11],g=o[12],D=o[13],L=o[14],R=o[15];if(r[0].setComponents(h-c,S-p,x-M,R-g).normalize(),r[1].setComponents(h+c,S+p,x+M,R+g).normalize(),r[2].setComponents(h+u,S+_,x+T,R+D).normalize(),r[3].setComponents(h-u,S-_,x-T,R-D).normalize(),r[4].setComponents(h-d,S-v,x-w,R-L).normalize(),t===ji)r[5].setComponents(h+d,S+v,x+w,R+L).normalize();else if(t===Dl)r[5].setComponents(d,v,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(_l.x=o.normal.x>0?e.max.x:e.min.x,_l.y=o.normal.y>0?e.max.y:e.min.y,_l.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tg(){let s=null,e=!1,t=null,r=null;function o(c,u){t(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function ex(s){const e=new WeakMap;function t(d,h){const p=d.array,_=d.usage,v=p.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,p){const _=h.array,v=h.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],w=v[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,v[S]=w)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const w=v[M];s.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:c,update:u}}class Xa extends Ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,u=t/2,d=Math.floor(r),h=Math.floor(o),p=d+1,_=h+1,v=e/d,S=t/h,M=[],T=[],w=[],x=[];for(let g=0;g<_;g++){const D=g*S-u;for(let L=0;L<p;L++){const R=L*v-c;T.push(R,-D,0),w.push(0,0,1),x.push(L/d),x.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const L=D+p*g,R=D+p*(g+1),J=D+1+p*(g+1),B=D+1+p*g;M.push(L,R,B),M.push(R,J,B)}this.setIndex(M),this.setAttribute("position",new ei(T,3)),this.setAttribute("normal",new ei(w,3)),this.setAttribute("uv",new ei(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ax=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:sx,alphatest_pars_fragment:ax,aomap_fragment:ox,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:ux,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:hx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:vx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:Sx,color_pars_vertex:Mx,color_vertex:Ex,common:Tx,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Ax,displacementmap_pars_vertex:bx,displacementmap_vertex:Cx,emissivemap_fragment:Rx,emissivemap_pars_fragment:Nx,colorspace_fragment:Px,colorspace_pars_fragment:Lx,envmap_fragment:Ix,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ux,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:Yx,envmap_vertex:Fx,fog_vertex:kx,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Gx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:$x,lights_toon_pars_fragment:qx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Qx,lights_physical_pars_fragment:Jx,lights_fragment_begin:ey,lights_fragment_maps:ty,lights_fragment_end:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:sy,logdepthbuf_vertex:ay,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:cy,map_particle_pars_fragment:uy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphinstance_vertex:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:Sy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:by,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Ny,project_vertex:Py,dithering_fragment:Ly,dithering_pars_fragment:Iy,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Uy,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Fy,shadowmap_vertex:ky,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Hy,skinning_vertex:Vy,skinnormal_vertex:Gy,specularmap_fragment:jy,specularmap_pars_fragment:Wy,tonemapping_fragment:Xy,tonemapping_pars_fragment:Yy,transmission_fragment:$y,transmission_pars_fragment:qy,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Qy,worldpos_vertex:Jy,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:rS,cube_frag:sS,depth_vert:aS,depth_frag:oS,distanceRGBA_vert:lS,distanceRGBA_frag:cS,equirect_vert:uS,equirect_frag:dS,linedashed_vert:fS,linedashed_frag:hS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:vS,meshmatcap_frag:xS,meshnormal_vert:yS,meshnormal_frag:SS,meshphong_vert:MS,meshphong_frag:ES,meshphysical_vert:TS,meshphysical_frag:wS,meshtoon_vert:AS,meshtoon_frag:bS,points_vert:CS,points_frag:RS,shadow_vert:NS,shadow_frag:PS,sprite_vert:LS,sprite_frag:IS},Re={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new pt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new pt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};yi.physical={uniforms:Sn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const vl={r:0,b:0,g:0},jr=new Ei,DS=new kt;function US(s,e,t,r,o,c,u){const d=new pt(0);let h=c===!0?0:1,p,_,v=null,S=0,M=null;function T(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?t:e).get(L)),L}function w(D){let L=!1;const R=T(D);R===null?g(d,h):R&&R.isColor&&(g(R,1),L=!0);const J=s.xr.getEnvironmentBlendMode();J==="additive"?r.buffers.color.setClear(0,0,0,1,u):J==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,L){const R=T(L);R&&(R.isCubeTexture||R.mapping===kl)?(_===void 0&&(_=new Jn(new es(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Zs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(J,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),jr.copy(L.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(jr)),_.material.toneMapped=St.getTransfer(R.colorSpace)!==Rt,(v!==R||S!==R.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,v=R,S=R.version,M=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Jn(new Xa(2,2),new wr({name:"BackgroundMaterial",uniforms:Zs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=St.getTransfer(R.colorSpace)!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||S!==R.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,S=R.version,M=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function g(D,L){D.getRGB(vl,Sg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),h=L,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:w,addToRenderList:x}}function OS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let c=o,u=!1;function d(C,z,ce,ne,de){let pe=!1;const K=v(ne,ce,z);c!==K&&(c=K,p(c.object)),pe=M(C,ne,ce,de),pe&&T(C,ne,ce,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,z,ce,ne),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function v(C,z,ce){const ne=ce.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let pe=de[z.id];pe===void 0&&(pe={},de[z.id]=pe);let K=pe[ne];return K===void 0&&(K=S(h()),pe[ne]=K),K}function S(C){const z=[],ce=[],ne=[];for(let de=0;de<t;de++)z[de]=0,ce[de]=0,ne[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ce,attributeDivisors:ne,object:C,attributes:{},index:null}}function M(C,z,ce,ne){const de=c.attributes,pe=z.attributes;let K=0;const te=ce.getAttributes();for(const U in te)if(te[U].location>=0){const ae=de[U];let O=pe[U];if(O===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ae===void 0||ae.attribute!==O||O&&ae.data!==O.data)return!0;K++}return c.attributesNum!==K||c.index!==ne}function T(C,z,ce,ne){const de={},pe=z.attributes;let K=0;const te=ce.getAttributes();for(const U in te)if(te[U].location>=0){let ae=pe[U];ae===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const O={};O.attribute=ae,ae&&ae.data&&(O.data=ae.data),de[U]=O,K++}c.attributes=de,c.attributesNum=K,c.index=ne}function w(){const C=c.newAttributes;for(let z=0,ce=C.length;z<ce;z++)C[z]=0}function x(C){g(C,0)}function g(C,z){const ce=c.newAttributes,ne=c.enabledAttributes,de=c.attributeDivisors;ce[C]=1,ne[C]===0&&(s.enableVertexAttribArray(C),ne[C]=1),de[C]!==z&&(s.vertexAttribDivisor(C,z),de[C]=z)}function D(){const C=c.newAttributes,z=c.enabledAttributes;for(let ce=0,ne=z.length;ce<ne;ce++)z[ce]!==C[ce]&&(s.disableVertexAttribArray(ce),z[ce]=0)}function L(C,z,ce,ne,de,pe,K){K===!0?s.vertexAttribIPointer(C,z,ce,de,pe):s.vertexAttribPointer(C,z,ce,ne,de,pe)}function R(C,z,ce,ne){w();const de=ne.attributes,pe=ce.getAttributes(),K=z.defaultAttributeValues;for(const te in pe){const U=pe[te];if(U.location>=0){let Q=de[te];if(Q===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){const ae=Q.normalized,O=Q.itemSize,ie=e.get(Q);if(ie===void 0)continue;const Pe=ie.buffer,$=ie.type,ue=ie.bytesPerElement,_e=$===s.INT||$===s.UNSIGNED_INT||Q.gpuType===Kd;if(Q.isInterleavedBufferAttribute){const ge=Q.data,Ae=ge.stride,De=Q.offset;if(ge.isInstancedInterleavedBuffer){for(let Ze=0;Ze<U.locationSize;Ze++)g(U.location+Ze,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ze=0;Ze<U.locationSize;Ze++)x(U.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Ze=0;Ze<U.locationSize;Ze++)L(U.location+Ze,O/U.locationSize,$,ae,Ae*ue,(De+O/U.locationSize*Ze)*ue,_e)}else{if(Q.isInstancedBufferAttribute){for(let ge=0;ge<U.locationSize;ge++)g(U.location+ge,Q.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<U.locationSize;ge++)x(U.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ge=0;ge<U.locationSize;ge++)L(U.location+ge,O/U.locationSize,$,ae,O*ue,O/U.locationSize*ge*ue,_e)}}else if(K!==void 0){const ae=K[te];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(U.location,ae);break;case 3:s.vertexAttrib3fv(U.location,ae);break;case 4:s.vertexAttrib4fv(U.location,ae);break;default:s.vertexAttrib1fv(U.location,ae)}}}}D()}function J(){W();for(const C in r){const z=r[C];for(const ce in z){const ne=z[ce];for(const de in ne)_(ne[de].object),delete ne[de];delete z[ce]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const ce in z){const ne=z[ce];for(const de in ne)_(ne[de].object),delete ne[de];delete z[ce]}delete r[C.id]}function F(C){for(const z in r){const ce=r[z];if(ce[C.id]===void 0)continue;const ne=ce[C.id];for(const de in ne)_(ne[de].object),delete ne[de];delete ce[C.id]}}function W(){N(),u=!0,c!==o&&(c=o,p(c.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:N,dispose:J,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:x,disableUnusedAttributes:D}}function FS(s,e,t){let r;function o(p){r=p}function c(p,_){s.drawArrays(r,p,_),t.update(_,r,1)}function u(p,_,v){v!==0&&(s.drawArraysInstanced(r,p,_,v),t.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];t.update(M,r,1)}function h(p,_,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)u(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w]*S[w];t.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function kS(s,e,t,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!W)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),J=T>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:J,maxSamples:B}}function BS(s){const e=this;let t=null,r=0,o=!1,c=!1;const u=new yr,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||o;return o=S,r=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){t=_(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,g=s.get(v);if(!o||T===null||T.length===0||c&&!x)c?_(null):p();else{const D=c?0:r,L=D*4;let R=g.clippingState||null;h.value=R,R=_(T,S,L,M);for(let J=0;J!==L;++J)R[J]=t[J];g.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,M,T){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=h.value,T!==!0||x===null){const g=M+w*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(x===null||x.length<g)&&(x=new Float32Array(g));for(let L=0,R=M;L!==w;++L,R+=4)u.copy(v[L]).applyMatrix4(D,d),u.normal.toArray(x,R),x[R+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function zS(s){let e=new WeakMap;function t(u,d){return d===md?u.mapping=Ys:d===gd&&(u.mapping=$s),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===md||d===gd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new Zv(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class wg extends Mg{constructor(e=-1,t=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,hm=[.125,.215,.35,.446,.526,.582],$r=20,$u=new wg,pm=new pt;let qu=null,Ku=0,Zu=0,Qu=!1;const Xr=(1+Math.sqrt(5))/2,Bs=1/Xr,mm=[new q(-Xr,Bs,0),new q(Xr,Bs,0),new q(-Bs,0,Xr),new q(Bs,0,Xr),new q(0,Xr,-Bs),new q(0,Xr,Bs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Ga,format:fi,colorSpace:Qs,depthBuffer:!1},o=_m(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,t,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(c)),this._blurMaterial=VS(c,e,t)}return o}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,$u)}_sceneToCubeUV(e,t,r,o){const d=new Zn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(pm),_.toneMapping=Er,_.autoClear=!1;const M=new vg({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),T=new Jn(new es,M);let w=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,w=!0):(M.color.copy(pm),w=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(p[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,p[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,p[g]));const L=this._cubeSize;xl(o,D*L,g>2?L:0,L,L),_.setRenderTarget(o),w&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=S,_.autoClear=v,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;xl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,$u)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=mm[(o-c-1)%mm.length];this._blur(e,c-1,c,u,d)}t.autoClear=r}_blur(e,t,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,t,r,o,c,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Jn(this._lodPlanes[o],p),S=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*$r-1),w=c/T,x=isFinite(c)?1+Math.floor(_*w):$r;x>$r&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${$r}`);const g=[];let D=0;for(let F=0;F<$r;++F){const W=F/w,N=Math.exp(-W*W/2);g.push(N),F===0?D+=N:F<x&&(D+=2*N)}for(let F=0;F<g.length;F++)g[F]=g[F]/D;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=u==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-r;const R=this._sizeLods[o],J=3*R*(o>L-Hs?o-L+Hs:0),B=4*(this._cubeSize-R);xl(t,J,B,3*R,2*R),h.setRenderTarget(t),h.render(v,$u)}}function HS(s){const e=[],t=[],r=[];let o=s;const c=s-Hs+1+hm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>s-Hs?h=hm[u-s+Hs-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,w=3,x=2,g=1,D=new Float32Array(w*T*M),L=new Float32Array(x*T*M),R=new Float32Array(g*T*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,W=B>2?0:-1,N=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];D.set(N,w*T*B),L.set(S,x*T*B);const C=[B,B,B,B,B,B];R.set(C,g*T*B)}const J=new Ti;J.setAttribute("position",new Mi(D,w)),J.setAttribute("uv",new Mi(L,x)),J.setAttribute("faceIndex",new Mi(R,g)),e.push(J),o>Hs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function _m(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function VS(s,e,t){const r=new Float32Array($r),o=new q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function vm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function xm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===md||h===gd,_=h===Ys||h===$s;if(p||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return t===null&&(t=new gm(s)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&o(M)?(t===null&&(t=new gm(s)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function o(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function jS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ba("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WS(s,e,t,r){const o={},c=new WeakMap;function u(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);for(const T in S.morphAttributes){const w=S.morphAttributes[T];for(let x=0,g=w.length;x<g;x++)e.remove(w[x])}S.removeEventListener("dispose",u),delete o[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function d(v,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,t.memory.geometries++),S}function h(v){const S=v.attributes;for(const T in S)e.update(S[T],s.ARRAY_BUFFER);const M=v.morphAttributes;for(const T in M){const w=M[T];for(let x=0,g=w.length;x<g;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(v){const S=[],M=v.index,T=v.attributes.position;let w=0;if(M!==null){const D=M.array;w=M.version;for(let L=0,R=D.length;L<R;L+=3){const J=D[L+0],B=D[L+1],F=D[L+2];S.push(J,B,B,F,F,J)}}else if(T!==void 0){const D=T.array;w=T.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const J=L+0,B=L+1,F=L+2;S.push(J,B,B,F,F,J)}}else return;const x=new(pg(S)?yg:xg)(S,1);x.version=w;const g=c.get(v);g&&e.remove(g),c.set(v,x)}function _(v){const S=c.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function XS(s,e,t){let r;function o(S){r=S}let c,u;function d(S){c=S.type,u=S.bytesPerElement}function h(S,M){s.drawElements(r,M,c,S*u),t.update(M,r,1)}function p(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,S*u,T),t.update(M,r,T))}function _(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,T);let x=0;for(let g=0;g<T;g++)x+=M[g];t.update(x,r,1)}function v(S,M,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)p(S[g]/u,M[g],w[g]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,w,0,T);let g=0;for(let D=0;D<T;D++)g+=M[D]*w[D];t.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function YS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(c/3);break;case s.LINES:t.lines+=d*(c/2);break;case s.LINE_STRIP:t.lines+=d*(c-1);break;case s.LINE_LOOP:t.lines+=d*c;break;case s.POINTS:t.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function $S(s,e,t){const r=new WeakMap,o=new Vt;function c(u,d,h){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),w===!0&&(R=2),x===!0&&(R=3);let J=d.attributes.position.count*R,B=1;J>e.maxTextureSize&&(B=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const F=new Float32Array(J*B*4*v),W=new gg(F,J,B,v);W.type=Gi,W.needsUpdate=!0;const N=R*4;for(let z=0;z<v;z++){const ce=g[z],ne=D[z],de=L[z],pe=J*B*4*z;for(let K=0;K<ce.count;K++){const te=K*N;T===!0&&(o.fromBufferAttribute(ce,K),F[pe+te+0]=o.x,F[pe+te+1]=o.y,F[pe+te+2]=o.z,F[pe+te+3]=0),w===!0&&(o.fromBufferAttribute(ne,K),F[pe+te+4]=o.x,F[pe+te+5]=o.y,F[pe+te+6]=o.z,F[pe+te+7]=0),x===!0&&(o.fromBufferAttribute(de,K),F[pe+te+8]=o.x,F[pe+te+9]=o.y,F[pe+te+10]=o.z,F[pe+te+11]=de.itemSize===4?o.w:1)}}S={count:v,texture:W,size:new at(J,B)},r.set(d,S),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function qS(s,e,t,r){let o=new WeakMap;function c(h){const p=r.render.frame,_=h.geometry,v=e.get(h,_);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return v}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}class Ag extends Dn{constructor(e,t,r,o,c,u,d,h,p,_=js){if(_!==js&&_!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===js&&(r=Zr),r===void 0&&_===Ks&&(r=qs),super(null,o,c,u,d,h,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bg=new Dn,ym=new Ag(1,1),Cg=new gg,Rg=new Uv,Ng=new Eg,Sm=[],Mm=[],Em=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function ea(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let c=Sm[o];if(c===void 0&&(c=new Float32Array(o),Sm[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(c,d)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Vl(s,e){let t=Mm[e];t===void 0&&(t=new Int32Array(e),Mm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function KS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ZS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function eM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;wm.set(r),s.uniformMatrix2fv(this.addr,!1,wm),Qt(t,r)}}function tM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Qt(t,r)}}function nM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),Qt(t,r)}}function iM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function dM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=hg,c=ym):c=bg,t.setTexture2D(e||c,o)}function fM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Rg,o)}function hM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ng,o)}function pM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Cg,o)}function mM(s){switch(s){case 5126:return KS;case 35664:return ZS;case 35665:return QS;case 35666:return JS;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(s,e){s.uniform1fv(this.addr,e)}function _M(s,e){const t=ea(e,this.size,2);s.uniform2fv(this.addr,t)}function vM(s,e){const t=ea(e,this.size,3);s.uniform3fv(this.addr,t)}function xM(s,e){const t=ea(e,this.size,4);s.uniform4fv(this.addr,t)}function yM(s,e){const t=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function SM(s,e){const t=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function MM(s,e){const t=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function EM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function AM(s,e){s.uniform4iv(this.addr,e)}function bM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function RM(s,e){s.uniform3uiv(this.addr,e)}function NM(s,e){s.uniform4uiv(this.addr,e)}function PM(s,e,t){const r=this.cache,o=e.length,c=Vl(t,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||bg,c[u])}function LM(s,e,t){const r=this.cache,o=e.length,c=Vl(t,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Rg,c[u])}function IM(s,e,t){const r=this.cache,o=e.length,c=Vl(t,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ng,c[u])}function DM(s,e,t){const r=this.cache,o=e.length,c=Vl(t,o);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Cg,c[u])}function UM(s){switch(s){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return yM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return wM;case 35669:case 35673:return AM;case 5125:return bM;case 36294:return CM;case 36295:return RM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return DM}}class OM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}}class FM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,t[d.id],r)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function BM(s,e,t){const r=s.name,o=r.length;for(Ju.lastIndex=0;;){const c=Ju.exec(r),u=Ju.lastIndex;let d=c[1];const h=c[2]==="]",p=c[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){Am(t,p===void 0?new OM(d,s,e):new FM(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new kM(d),Am(t,v)),t=v}}}class Il{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(t,o),u=e.getUniformLocation(t,c.name);BM(c,u,this)}}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,u=t.length;c!==u;++c){const d=t[c],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function bm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const zM=37297;let HM=0;function VM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Cm=new ot;function GM(s){St._getMatrix(Cm,St.workingColorSpace,s);const e=`mat3( ${Cm.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+VM(s.getShaderSource(e),u)}else return o}function jM(s,e){const t=GM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WM(s,e){let t;switch(e){case ov:t="Linear";break;case lv:t="Reinhard";break;case cv:t="Cineon";break;case uv:t="ACESFilmic";break;case fv:t="AgX";break;case hv:t="Neutral";break;case dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new q;function XM(){St.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function $M(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),t[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function za(s){return s!==""}function Nm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(KM,QM)}const ZM=new Map;function QM(s,e){let t=lt[e];if(t===void 0){const r=ZM.get(e);if(r!==void 0)t=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(JM,eE)}function eE(s,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Im(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eg:e="ENVMAP_BLENDING_MULTIPLY";break;case sv:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function sE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function aE(s,e,t,r){const o=s.getContext(),c=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=tE(t),p=nE(t),_=iE(t),v=rE(t),S=sE(t),M=YM(t),T=$M(c),w=o.createProgram();let x,g,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(za).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(za).join(`
`),g.length>0&&(g+=`
`)):(x=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),g=[Im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?lt.tonemapping_pars_fragment:"",t.toneMapping!==Er?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),u=Xd(u),u=Nm(u,t),u=Pm(u,t),d=Xd(d),d=Nm(d,t),d=Pm(d,t),u=Lm(u),d=Lm(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+x+u,R=D+g+d,J=bm(o,o.VERTEX_SHADER,L),B=bm(o,o.FRAGMENT_SHADER,R);o.attachShader(w,J),o.attachShader(w,B),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(z){if(s.debug.checkShaderErrors){const ce=o.getProgramInfoLog(w).trim(),ne=o.getShaderInfoLog(J).trim(),de=o.getShaderInfoLog(B).trim();let pe=!0,K=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,J,B);else{const te=Rm(o,J,"vertex"),U=Rm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ce+`
`+te+`
`+U)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ne===""||de==="")&&(K=!1);K&&(z.diagnostics={runnable:pe,programLog:ce,vertexShader:{log:ne,prefix:x},fragmentShader:{log:de,prefix:g}})}o.deleteShader(J),o.deleteShader(B),W=new Il(o,w),N=qM(o,w)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,zM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=J,this.fragmentShader=B,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cE(e),t.set(e,r)),r}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s,e,t,r,o,c,u){const d=new nf,h=new lE,p=new Set,_=[],v=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return p.add(N),N===0?"uv":`uv${N}`}function x(N,C,z,ce,ne){const de=ce.fog,pe=ne.geometry,K=N.isMeshStandardMaterial?ce.environment:null,te=(N.isMeshStandardMaterial?t:e).get(N.envMap||K),U=te&&te.mapping===kl?te.image.height:null,Q=T[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const ae=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,O=ae!==void 0?ae.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let Pe,$,ue,_e;if(Q){const xt=yi[Q];Pe=xt.vertexShader,$=xt.fragmentShader}else Pe=N.vertexShader,$=N.fragmentShader,h.update(N),ue=h.getVertexShaderID(N),_e=h.getFragmentShaderID(N);const ge=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),De=ne.isInstancedMesh===!0,Ze=ne.isBatchedMesh===!0,Ct=!!N.map,mt=!!N.matcap,Lt=!!te,X=!!N.aoMap,gn=!!N.lightMap,ht=!!N.bumpMap,ut=!!N.normalMap,$e=!!N.displacementMap,At=!!N.emissiveMap,Ye=!!N.metalnessMap,P=!!N.roughnessMap,A=N.anisotropy>0,ee=N.clearcoat>0,me=N.dispersion>0,xe=N.iridescence>0,fe=N.sheen>0,Ve=N.transmission>0,be=A&&!!N.anisotropyMap,Ue=ee&&!!N.clearcoatMap,ct=ee&&!!N.clearcoatNormalMap,Me=ee&&!!N.clearcoatRoughnessMap,Fe=xe&&!!N.iridescenceMap,Qe=xe&&!!N.iridescenceThicknessMap,Je=fe&&!!N.sheenColorMap,ke=fe&&!!N.sheenRoughnessMap,dt=!!N.specularMap,it=!!N.specularColorMap,wt=!!N.specularIntensityMap,V=Ve&&!!N.transmissionMap,Ce=Ve&&!!N.thicknessMap,le=!!N.gradientMap,he=!!N.alphaMap,Le=N.alphaTest>0,Ne=!!N.alphaHash,rt=!!N.extensions;let Dt=Er;N.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Xt={shaderID:Q,shaderType:N.type,shaderName:N.name,vertexShader:Pe,fragmentShader:$,defines:N.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:Ze,batchingColor:Ze&&ne._colorsTexture!==null,instancing:De,instancingColor:De&&ne.instanceColor!==null,instancingMorph:De&&ne.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Qs,alphaToCoverage:!!N.alphaToCoverage,map:Ct,matcap:mt,envMap:Lt,envMapMode:Lt&&te.mapping,envMapCubeUVHeight:U,aoMap:X,lightMap:gn,bumpMap:ht,normalMap:ut,displacementMap:S&&$e,emissiveMap:At,normalMapObjectSpace:ut&&N.normalMapType===_v,normalMapTangentSpace:ut&&N.normalMapType===fg,metalnessMap:Ye,roughnessMap:P,anisotropy:A,anisotropyMap:be,clearcoat:ee,clearcoatMap:Ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:me,iridescence:xe,iridescenceMap:Fe,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:it,specularIntensityMap:wt,transmission:Ve,transmissionMap:V,thicknessMap:Ce,gradientMap:le,opaque:N.transparent===!1&&N.blending===Gs&&N.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Ne,combine:N.combine,mapUv:Ct&&w(N.map.channel),aoMapUv:X&&w(N.aoMap.channel),lightMapUv:gn&&w(N.lightMap.channel),bumpMapUv:ht&&w(N.bumpMap.channel),normalMapUv:ut&&w(N.normalMap.channel),displacementMapUv:$e&&w(N.displacementMap.channel),emissiveMapUv:At&&w(N.emissiveMap.channel),metalnessMapUv:Ye&&w(N.metalnessMap.channel),roughnessMapUv:P&&w(N.roughnessMap.channel),anisotropyMapUv:be&&w(N.anisotropyMap.channel),clearcoatMapUv:Ue&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:ct&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(N.sheenRoughnessMap.channel),specularMapUv:dt&&w(N.specularMap.channel),specularColorMapUv:it&&w(N.specularColorMap.channel),specularIntensityMapUv:wt&&w(N.specularIntensityMap.channel),transmissionMapUv:V&&w(N.transmissionMap.channel),thicknessMapUv:Ce&&w(N.thicknessMap.channel),alphaMapUv:he&&w(N.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ut||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!pe.attributes.uv&&(Ct||he),fog:!!de,useFog:N.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:ne.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&N.map.isVideoTexture===!0&&St.getTransfer(N.map.colorSpace)===Rt,decodeVideoTextureEmissive:At&&N.emissiveMap.isVideoTexture===!0&&St.getTransfer(N.emissiveMap.colorSpace)===Rt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Vi,flipSided:N.side===In,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:rt&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&N.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function g(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)C.push(z),C.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(D(C,N),L(C,N),C.push(s.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function D(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function L(N,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),N.push(d.mask)}function R(N){const C=T[N.type];let z;if(C){const ce=yi[C];z=Yv.clone(ce.uniforms)}else z=N.uniforms;return z}function J(N,C){let z;for(let ce=0,ne=_.length;ce<ne;ce++){const de=_[ce];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new aE(s,C,N,c),_.push(z)),z}function B(N){if(--N.usedTimes===0){const C=_.indexOf(N);_[C]=_[_.length-1],_.pop(),N.destroy()}}function F(N){h.remove(N)}function W(){h.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:J,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:W}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:c}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function u(v,S,M,T,w,x){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:w,group:x},s[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=w,g.group=x),e++,g}function d(v,S,M,T,w,x){const g=u(v,S,M,T,w,x);M.transmission>0?r.push(g):M.transparent===!0?o.push(g):t.push(g)}function h(v,S,M,T,w,x){const g=u(v,S,M,T,w,x);M.transmission>0?r.unshift(g):M.transparent===!0?o.unshift(g):t.unshift(g)}function p(v,S){t.length>1&&t.sort(v||fE),r.length>1&&r.sort(S||Dm),o.length>1&&o.sort(S||Dm)}function _(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:d,unshift:h,finish:_,sort:p}}function hE(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new Um,s.set(r,[u])):o>=c.length?(u=new Um,c.push(u)):u=c[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vE(s){const e=new pE,t=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const o=new q,c=new kt,u=new kt;function d(p){let _=0,v=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,T=0,w=0,x=0,g=0,D=0,L=0,R=0,J=0,B=0,F=0;p.sort(_E);for(let N=0,C=p.length;N<C;N++){const z=p[N],ce=z.color,ne=z.intensity,de=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ce.r*ne,v+=ce.g*ne,S+=ce.b*ne;else if(z.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(z.sh.coefficients[K],ne);F++}else if(z.isDirectionalLight){const K=e.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const te=z.shadow,U=t.get(z);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.directionalShadow[M]=U,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=z.shadow.matrix,D++}r.directional[M]=K,M++}else if(z.isSpotLight){const K=e.get(z);K.position.setFromMatrixPosition(z.matrixWorld),K.color.copy(ce).multiplyScalar(ne),K.distance=de,K.coneCos=Math.cos(z.angle),K.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),K.decay=z.decay,r.spot[w]=K;const te=z.shadow;if(z.map&&(r.spotLightMap[J]=z.map,J++,te.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[w]=te.matrix,z.castShadow){const U=t.get(z);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,r.spotShadow[w]=U,r.spotShadowMap[w]=pe,R++}w++}else if(z.isRectAreaLight){const K=e.get(z);K.color.copy(ce).multiplyScalar(ne),K.halfWidth.set(z.width*.5,0,0),K.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=K,x++}else if(z.isPointLight){const K=e.get(z);if(K.color.copy(z.color).multiplyScalar(z.intensity),K.distance=z.distance,K.decay=z.decay,z.castShadow){const te=z.shadow,U=t.get(z);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,r.pointShadow[T]=U,r.pointShadowMap[T]=pe,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=K,T++}else if(z.isHemisphereLight){const K=e.get(z);K.skyColor.copy(z.color).multiplyScalar(ne),K.groundColor.copy(z.groundColor).multiplyScalar(ne),r.hemi[g]=K,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==w||W.rectAreaLength!==x||W.hemiLength!==g||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==J||W.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+J-B,r.spotLightMap.length=J,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,W.directionalLength=M,W.pointLength=T,W.spotLength=w,W.rectAreaLength=x,W.hemiLength=g,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=J,W.numLightProbes=F,r.version=gE++)}function h(p,_){let v=0,S=0,M=0,T=0,w=0;const x=_.matrixWorldInverse;for(let g=0,D=p.length;g<D;g++){const L=p[g];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),v++}else if(L.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),u.identity(),c.copy(L.matrixWorld),c.premultiply(x),u.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const R=r.point[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(x),w++}}}return{setup:d,setupView:h,state:r}}function Om(s){const e=new vE(s),t=[],r=[];function o(_){p.camera=_,t.length=0,r.length=0}function c(_){t.push(_)}function u(_){r.push(_)}function d(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function xE(s){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Om(s),e.set(o,[d])):c>=u.length?(d=new Om(s),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class yE extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TE(s,e,t){let r=new rf;const o=new at,c=new at,u=new Vt,d=new yE({depthPacking:gv}),h=new SE,p={},_=t.maxTextureSize,v={[Tr]:In,[In]:Tr,[Vi]:Vi},S=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ti;T.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm;let g=this.type;this.render=function(B,F,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const N=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Mr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ne=g!==Hi&&this.type===Hi,de=g===Hi&&this.type!==Hi;for(let pe=0,K=B.length;pe<K;pe++){const te=B[pe],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;o.copy(U.mapSize);const Q=U.getFrameExtents();if(o.multiply(Q),c.copy(U.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/Q.x),o.x=c.x*Q.x,U.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/Q.y),o.y=c.y*Q.y,U.mapSize.y=c.y)),U.map===null||ne===!0||de===!0){const O=this.type!==Hi?{minFilter:hi,magFilter:hi}:{};U.map!==null&&U.map.dispose(),U.map=new Qr(o.x,o.y,O),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const ae=U.getViewportCount();for(let O=0;O<ae;O++){const ie=U.getViewport(O);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ce.viewport(u),U.updateMatrices(te,O),r=U.getFrustum(),R(F,W,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===Hi&&D(U,W),U.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(N,C,z)};function D(B,F){const W=e.update(w);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qr(o.x,o.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(F,null,W,S,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(F,null,W,M,w,null)}function L(B,F,W,N){let C=null;const z=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)C=z;else if(C=W.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ce=C.uuid,ne=F.uuid;let de=p[ce];de===void 0&&(de={},p[ce]=de);let pe=de[ne];pe===void 0&&(pe=C.clone(),de[ne]=pe,F.addEventListener("dispose",J)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,N===Hi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=s.properties.get(C);ce.light=W}return C}function R(B,F,W,N,C){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Hi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const ne=e.update(B),de=B.material;if(Array.isArray(de)){const pe=ne.groups;for(let K=0,te=pe.length;K<te;K++){const U=pe[K],Q=de[U.materialIndex];if(Q&&Q.visible){const ae=L(B,Q,N,C);B.onBeforeShadow(s,B,F,W,ne,ae,U),s.renderBufferDirect(W,null,ne,ae,B,U),B.onAfterShadow(s,B,F,W,ne,ae,U)}}}else if(de.visible){const pe=L(B,de,N,C);B.onBeforeShadow(s,B,F,W,ne,pe,null),s.renderBufferDirect(W,null,ne,pe,B,null),B.onAfterShadow(s,B,F,W,ne,pe,null)}}const ce=B.children;for(let ne=0,de=ce.length;ne<de;ne++)R(ce[ne],F,W,N,C)}function J(B){B.target.removeEventListener("dispose",J);for(const W in p){const N=p[W],C=B.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const wE={[ld]:cd,[ud]:hd,[dd]:pd,[Xs]:fd,[cd]:ld,[hd]:ud,[pd]:dd,[fd]:Xs};function AE(s,e){function t(){let V=!1;const Ce=new Vt;let le=null;const he=new Vt(0,0,0,0);return{setMask:function(Le){le!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ne,rt,Dt,Xt){Xt===!0&&(Le*=Dt,Ne*=Dt,rt*=Dt),Ce.set(Le,Ne,rt,Dt),he.equals(Ce)===!1&&(s.clearColor(Le,Ne,rt,Dt),he.copy(Ce))},reset:function(){V=!1,le=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,le=null,he=null,Le=null;return{setReversed:function(Ne){if(Ce!==Ne){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Le;Le=null,this.setClear(Dt)}Ce=Ne},getReversed:function(){return Ce},setTest:function(Ne){Ne?ge(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ne){le!==Ne&&!V&&(s.depthMask(Ne),le=Ne)},setFunc:function(Ne){if(Ce&&(Ne=wE[Ne]),he!==Ne){switch(Ne){case ld:s.depthFunc(s.NEVER);break;case cd:s.depthFunc(s.ALWAYS);break;case ud:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case dd:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Ne}},setLocked:function(Ne){V=Ne},setClear:function(Ne){Le!==Ne&&(Ce&&(Ne=1-Ne),s.clearDepth(Ne),Le=Ne)},reset:function(){V=!1,le=null,he=null,Le=null,Ce=!1}}}function o(){let V=!1,Ce=null,le=null,he=null,Le=null,Ne=null,rt=null,Dt=null,Xt=null;return{setTest:function(xt){V||(xt?ge(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!V&&(s.stencilMask(xt),Ce=xt)},setFunc:function(xt,En,_n){(le!==xt||he!==En||Le!==_n)&&(s.stencilFunc(xt,En,_n),le=xt,he=En,Le=_n)},setOp:function(xt,En,_n){(Ne!==xt||rt!==En||Dt!==_n)&&(s.stencilOp(xt,En,_n),Ne=xt,rt=En,Dt=_n)},setLocked:function(xt){V=xt},setClear:function(xt){Xt!==xt&&(s.clearStencil(xt),Xt=xt)},reset:function(){V=!1,Ce=null,le=null,he=null,Le=null,Ne=null,rt=null,Dt=null,Xt=null}}}const c=new t,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],T=null,w=!1,x=null,g=null,D=null,L=null,R=null,J=null,B=null,F=new pt(0,0,0),W=0,N=!1,C=null,z=null,ce=null,ne=null,de=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(U)[1]),K=te>=1):U.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),K=te>=2);let Q=null,ae={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Pe=new Vt().fromArray(O),$=new Vt().fromArray(ie);function ue(V,Ce,le,he){const Le=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(V,Ne),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<le;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ne}const _e={};_e[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Xs),ht(!1),ut(zp),ge(s.CULL_FACE),X(Mr);function ge(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Ae(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function De(V,Ce){return v[V]!==Ce?(s.bindFramebuffer(V,Ce),v[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(V,Ce){let le=M,he=!1;if(V){le=S.get(Ce),le===void 0&&(le=[],S.set(Ce,le));const Le=V.textures;if(le.length!==Le.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,rt=Le.length;Ne<rt;Ne++)le[Ne]=s.COLOR_ATTACHMENT0+Ne;le.length=Le.length,he=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,he=!0);he&&s.drawBuffers(le)}function Ct(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const mt={[Yr]:s.FUNC_ADD,[V_]:s.FUNC_SUBTRACT,[G_]:s.FUNC_REVERSE_SUBTRACT};mt[j_]=s.MIN,mt[W_]=s.MAX;const Lt={[X_]:s.ZERO,[Y_]:s.ONE,[$_]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[ev]:s.SRC_ALPHA_SATURATE,[Q_]:s.DST_COLOR,[K_]:s.DST_ALPHA,[q_]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[J_]:s.ONE_MINUS_DST_COLOR,[Z_]:s.ONE_MINUS_DST_ALPHA,[tv]:s.CONSTANT_COLOR,[nv]:s.ONE_MINUS_CONSTANT_COLOR,[iv]:s.CONSTANT_ALPHA,[rv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(V,Ce,le,he,Le,Ne,rt,Dt,Xt,xt){if(V===Mr){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(ge(s.BLEND),w=!0),V!==H_){if(V!==x||xt!==N){if((g!==Yr||R!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,R=Yr),xt)switch(V){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,L=null,J=null,B=null,F.set(0,0,0),W=0,x=V,N=xt}return}Le=Le||Ce,Ne=Ne||le,rt=rt||he,(Ce!==g||Le!==R)&&(s.blendEquationSeparate(mt[Ce],mt[Le]),g=Ce,R=Le),(le!==D||he!==L||Ne!==J||rt!==B)&&(s.blendFuncSeparate(Lt[le],Lt[he],Lt[Ne],Lt[rt]),D=le,L=he,J=Ne,B=rt),(Dt.equals(F)===!1||Xt!==W)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Xt),F.copy(Dt),W=Xt),x=V,N=!1}function gn(V,Ce){V.side===Vi?Ae(s.CULL_FACE):ge(s.CULL_FACE);let le=V.side===In;Ce&&(le=!le),ht(le),V.blending===Gs&&V.transparent===!1?X(Mr):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function ut(V){V!==k_?(ge(s.CULL_FACE),V!==z&&(V===zp?s.cullFace(s.BACK):V===B_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=V}function $e(V){V!==ce&&(K&&s.lineWidth(V),ce=V)}function At(V,Ce,le){V?(ge(s.POLYGON_OFFSET_FILL),(ne!==Ce||de!==le)&&(s.polygonOffset(Ce,le),ne=Ce,de=le)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(V){V?ge(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function P(V){V===void 0&&(V=s.TEXTURE0+pe-1),Q!==V&&(s.activeTexture(V),Q=V)}function A(V,Ce,le){le===void 0&&(Q===null?le=s.TEXTURE0+pe-1:le=Q);let he=ae[le];he===void 0&&(he={type:void 0,texture:void 0},ae[le]=he),(he.type!==V||he.texture!==Ce)&&(Q!==le&&(s.activeTexture(le),Q=le),s.bindTexture(V,Ce||_e[V]),he.type=V,he.texture=Ce)}function ee(){const V=ae[Q];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Pe.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Pe.copy(V))}function ke(V){$.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),$.copy(V))}function dt(V,Ce){let le=p.get(Ce);le===void 0&&(le=new WeakMap,p.set(Ce,le));let he=le.get(V);he===void 0&&(he=s.getUniformBlockIndex(Ce,V.name),le.set(V,he))}function it(V,Ce){const he=p.get(Ce).get(V);h.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,V.__bindingPointIndex),h.set(Ce,he))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Q=null,ae={},v={},S=new WeakMap,M=[],T=null,w=!1,x=null,g=null,D=null,L=null,R=null,J=null,B=null,F=new pt(0,0,0),W=0,N=!1,C=null,z=null,ce=null,ne=null,de=null,Pe.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ge,disable:Ae,bindFramebuffer:De,drawBuffers:Ze,useProgram:Ct,setBlending:X,setMaterial:gn,setFlipSided:ht,setCullFace:ut,setLineWidth:$e,setPolygonOffset:At,setScissorTest:Ye,activeTexture:P,bindTexture:A,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:Fe,texImage3D:Qe,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:be,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:wt}}function Fm(s,e,t,r){const o=bE(r);switch(t){case sg:return s*e;case og:return s*e;case lg:return s*e*2;case cg:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case ug:return s*e*2/o.components*o.byteLength;case ef:return s*e*2/o.components*o.byteLength;case ag:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case tf:return s*e*4/o.components*o.byteLength;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(s,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(s,8)*Math.max(e,8)/2;case Ed:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case zd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dg:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case jd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bE(s){switch(s){case Xi:case ng:return{byteLength:1,components:1};case Va:case ig:case Ga:return{byteLength:2,components:1};case Zd:case Qd:return{byteLength:2,components:4};case Zr:case Kd:case Gi:return{byteLength:4,components:1};case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function CE(s,e,t,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new at,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,A){return M?new OffscreenCanvas(P,A):Ul("canvas")}function w(P,A,ee){let me=1;const xe=Ye(P);if((xe.width>ee||xe.height>ee)&&(me=ee/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*xe.width),Ve=Math.floor(me*xe.height);v===void 0&&(v=T(fe,Ve));const be=A?T(fe,Ve):v;return be.width=fe,be.height=Ve,be.getContext("2d").drawImage(P,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+Ve+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function x(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,A,ee,me,xe=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=A;if(A===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8)),A===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),A===s.RGBA){const Ve=xe?Bl:St.getTransfer(me);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=Ve===Rt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(P,A){let ee;return P?A===null||A===Zr||A===qs?ee=s.DEPTH24_STENCIL8:A===Gi?ee=s.DEPTH32F_STENCIL8:A===Va&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zr||A===qs?ee=s.DEPTH_COMPONENT24:A===Gi?ee=s.DEPTH_COMPONENT32F:A===Va&&(ee=s.DEPTH_COMPONENT16),ee}function J(P,A){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==Si?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function B(P){const A=P.target;A.removeEventListener("dispose",B),W(A),A.isVideoTexture&&_.delete(A)}function F(P){const A=P.target;A.removeEventListener("dispose",F),C(A)}function W(P){const A=r.get(P);if(A.__webglInit===void 0)return;const ee=P.source,me=S.get(ee);if(me){const xe=me[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&N(P),Object.keys(me).length===0&&S.delete(ee)}r.remove(P)}function N(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const ee=P.source,me=S.get(ee);delete me[A.__cacheKey],u.memory.textures--}function C(P){const A=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let xe=0;xe<A.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=P.textures;for(let me=0,xe=ee.length;me<xe;me++){const fe=r.get(ee[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(ee[me])}r.remove(P)}let z=0;function ce(){z=0}function ne(){const P=z;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function de(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function pe(P,A){const ee=r.get(P);if(P.isVideoTexture&&$e(P),P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(ee,P,A);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function K(P,A){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){$(ee,P,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function te(P,A){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){$(ee,P,A);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function U(P,A){const ee=r.get(P);if(P.version>0&&ee.__version!==P.version){ue(ee,P,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}const Q={[_d]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[vd]:s.MIRRORED_REPEAT},ae={[hi]:s.NEAREST,[pv]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},O={[vv]:s.NEVER,[Tv]:s.ALWAYS,[xv]:s.LESS,[hg]:s.LEQUAL,[yv]:s.EQUAL,[Ev]:s.GEQUAL,[Sv]:s.GREATER,[Mv]:s.NOTEQUAL};function ie(P,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Si||A.magFilter===Au||A.magFilter===el||A.magFilter===Kr||A.minFilter===Si||A.minFilter===Au||A.minFilter===el||A.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Q[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ae[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ae[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==el&&A.minFilter!==Kr||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Pe(P,A){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",B));const me=A.source;let xe=S.get(me);xe===void 0&&(xe={},S.set(me,xe));const fe=de(A);if(fe!==P.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),xe[fe].usedTimes++;const Ve=xe[P.__cacheKey];Ve!==void 0&&(xe[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&N(A)),P.__cacheKey=fe,P.__webglTexture=xe[fe].texture}return ee}function $(P,A,ee){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const xe=Pe(P,A),fe=A.source;t.bindTexture(me,P.__webglTexture,s.TEXTURE0+ee);const Ve=r.get(fe);if(fe.version!==Ve.__version||xe===!0){t.activeTexture(s.TEXTURE0+ee);const be=St.getPrimaries(St.workingColorSpace),Ue=A.colorSpace===Sr?null:St.getPrimaries(A.colorSpace),ct=A.colorSpace===Sr||be===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=w(A.image,!1,o.maxTextureSize);Me=At(A,Me);const Fe=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Je=L(A.internalFormat,Fe,Qe,A.colorSpace,A.isVideoTexture);ie(me,A);let ke;const dt=A.mipmaps,it=A.isVideoTexture!==!0,wt=Ve.__version===void 0||xe===!0,V=fe.dataReady,Ce=J(A,Me);if(A.isDepthTexture)Je=R(A.format===Ks,A.type),wt&&(it?t.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Fe,Qe,null));else if(A.isDataTexture)if(dt.length>0){it&&wt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,dt[0].width,dt[0].height);for(let le=0,he=dt.length;le<he;le++)ke=dt[le],it?V&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Fe,Qe,ke.data):t.texImage2D(s.TEXTURE_2D,le,Je,ke.width,ke.height,0,Fe,Qe,ke.data);A.generateMipmaps=!1}else it?(wt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,Me.width,Me.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,Qe,Me.data)):t.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,Fe,Qe,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,dt[0].width,dt[0].height,Me.depth);for(let le=0,he=dt.length;le<he;le++)if(ke=dt[le],A.format!==fi)if(Fe!==null)if(it){if(V)if(A.layerUpdates.size>0){const Le=Fm(ke.width,ke.height,A.format,A.type);for(const Ne of A.layerUpdates){const rt=ke.data.subarray(Ne*Le/ke.data.BYTES_PER_ELEMENT,(Ne+1)*Le/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Ne,ke.width,ke.height,1,Fe,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,Me.depth,Fe,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,Me.depth,Fe,Qe,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Je,ke.width,ke.height,Me.depth,0,Fe,Qe,ke.data)}else{it&&wt&&t.texStorage2D(s.TEXTURE_2D,Ce,Je,dt[0].width,dt[0].height);for(let le=0,he=dt.length;le<he;le++)ke=dt[le],A.format!==fi?Fe!==null?it?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Fe,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Fe,Qe,ke.data):t.texImage2D(s.TEXTURE_2D,le,Je,ke.width,ke.height,0,Fe,Qe,ke.data)}else if(A.isDataArrayTexture)if(it){if(wt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,Me.width,Me.height,Me.depth),V)if(A.layerUpdates.size>0){const le=Fm(Me.width,Me.height,A.format,A.type);for(const he of A.layerUpdates){const Le=Me.data.subarray(he*le/Me.data.BYTES_PER_ELEMENT,(he+1)*le/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Fe,Qe,Le)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Qe,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Fe,Qe,Me.data);else if(A.isData3DTexture)it?(wt&&t.texStorage3D(s.TEXTURE_3D,Ce,Je,Me.width,Me.height,Me.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Qe,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Fe,Qe,Me.data);else if(A.isFramebufferTexture){if(wt)if(it)t.texStorage2D(s.TEXTURE_2D,Ce,Je,Me.width,Me.height);else{let le=Me.width,he=Me.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(s.TEXTURE_2D,Le,Je,le,he,0,Fe,Qe,null),le>>=1,he>>=1}}else if(dt.length>0){if(it&&wt){const le=Ye(dt[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Je,le.width,le.height)}for(let le=0,he=dt.length;le<he;le++)ke=dt[le],it?V&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Fe,Qe,ke):t.texImage2D(s.TEXTURE_2D,le,Je,Fe,Qe,ke);A.generateMipmaps=!1}else if(it){if(wt){const le=Ye(Me);t.texStorage2D(s.TEXTURE_2D,Ce,Je,le.width,le.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Qe,Me)}else t.texImage2D(s.TEXTURE_2D,0,Je,Fe,Qe,Me);x(A)&&g(me),Ve.__version=fe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ue(P,A,ee){if(A.image.length!==6)return;const me=Pe(P,A),xe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ee);const fe=r.get(xe);if(xe.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const Ve=St.getPrimaries(St.workingColorSpace),be=A.colorSpace===Sr?null:St.getPrimaries(A.colorSpace),Ue=A.colorSpace===Sr||Ve===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ct=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!ct&&!Me?Fe[he]=w(A.image[he],!0,o.maxCubemapSize):Fe[he]=Me?A.image[he].image:A.image[he],Fe[he]=At(A,Fe[he]);const Qe=Fe[0],Je=c.convert(A.format,A.colorSpace),ke=c.convert(A.type),dt=L(A.internalFormat,Je,ke,A.colorSpace),it=A.isVideoTexture!==!0,wt=fe.__version===void 0||me===!0,V=xe.dataReady;let Ce=J(A,Qe);ie(s.TEXTURE_CUBE_MAP,A);let le;if(ct){it&&wt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,Qe.width,Qe.height);for(let he=0;he<6;he++){le=Fe[he].mipmaps;for(let Le=0;Le<le.length;Le++){const Ne=le[Le];A.format!==fi?Je!==null?it?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,Je,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,Je,ke,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,Je,ke,Ne.data)}}}else{if(le=A.mipmaps,it&&wt){le.length>0&&Ce++;const he=Ye(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Je,ke,Fe[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Fe[he].width,Fe[he].height,0,Je,ke,Fe[he].data);for(let Le=0;Le<le.length;Le++){const rt=le[Le].image[he].image;it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,Je,ke,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Fe[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Je,ke,Fe[he]);for(let Le=0;Le<le.length;Le++){const Ne=le[Le];it?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Je,ke,Ne.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,Je,ke,Ne.image[he])}}}x(A)&&g(s.TEXTURE_CUBE_MAP),fe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function _e(P,A,ee,me,xe,fe){const Ve=c.convert(ee.format,ee.colorSpace),be=c.convert(ee.type),Ue=L(ee.internalFormat,Ve,be,ee.colorSpace),ct=r.get(A),Me=r.get(ee);if(Me.__renderTarget=A,!ct.__hasExternalTextures){const Fe=Math.max(1,A.width>>fe),Qe=Math.max(1,A.height>>fe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Ue,Fe,Qe,A.depth,0,Ve,be,null):t.texImage2D(xe,fe,Ue,Fe,Qe,0,Ve,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ut(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,ht(A)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(P,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const me=A.depthTexture,xe=me&&me.isDepthTexture?me.type:null,fe=R(A.stencilBuffer,xe),Ve=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ht(A);ut(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,P)}else{const me=A.textures;for(let xe=0;xe<me.length;xe++){const fe=me[xe],Ve=c.convert(fe.format,fe.colorSpace),be=c.convert(fe.type),Ue=L(fe.internalFormat,Ve,be,fe.colorSpace),ct=ht(A);ee&&ut(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ue,A.width,A.height):ut(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ue,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const xe=me.__webglTexture,fe=ht(A);if(A.depthTexture.format===js)ut(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(A.depthTexture.format===Ks)ut(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function De(P){const A=r.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=me}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Ae(A.__webglFramebuffer,P)}else if(ee){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),ge(A.__webglDepthbuffer[me],P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ge(A.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(P,A,ee){const me=r.get(P);A!==void 0&&_e(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&De(P)}function Ct(P){const A=P.texture,ee=r.get(P),me=r.get(A);P.addEventListener("dispose",F);const xe=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,u.memory.textures++),fe){ee.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[be]=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)ee.__webglFramebuffer[be][Ue]=s.createFramebuffer()}else ee.__webglFramebuffer[be]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)ee.__webglFramebuffer[be]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let be=0,Ue=xe.length;be<Ue;be++){const ct=r.get(xe[be]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&ut(P)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){const Ue=xe[be];ee.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[be]);const ct=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Fe=L(Ue.internalFormat,ct,Me,Ue.colorSpace,P.isXRRenderTarget===!0),Qe=ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ee.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(ee.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)_e(ee.__webglFramebuffer[be][Ue],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ue);else _e(ee.__webglFramebuffer[be],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(A)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let be=0,Ue=xe.length;be<Ue;be++){const ct=xe[be],Me=r.get(ct);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,ct),_e(ee.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),x(ct)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),ie(be,A),A.mipmaps&&A.mipmaps.length>0)for(let Ue=0;Ue<A.mipmaps.length;Ue++)_e(ee.__webglFramebuffer[Ue],P,A,s.COLOR_ATTACHMENT0,be,Ue);else _e(ee.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,be,0);x(A)&&g(be),t.unbindTexture()}P.depthBuffer&&De(P)}function mt(P){const A=P.textures;for(let ee=0,me=A.length;ee<me;ee++){const xe=A[ee];if(x(xe)){const fe=D(P),Ve=r.get(xe).__webglTexture;t.bindTexture(fe,Ve),g(fe),t.unbindTexture()}}}const Lt=[],X=[];function gn(P){if(P.samples>0){if(ut(P)===!1){const A=P.textures,ee=P.width,me=P.height;let xe=s.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(P),be=A.length>1;if(be)for(let Ue=0;Ue<A.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<A.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(A[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,xe,s.NEAREST),h===!0&&(Lt.length=0,X.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Lt.push(fe),X.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ue=0;Ue<A.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const ct=r.get(A[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ht(P){return Math.min(o.maxSamples,P.samples)}function ut(P){const A=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $e(P){const A=u.render.frame;_.get(P)!==A&&(_.set(P,A),P.update())}function At(P,A){const ee=P.colorSpace,me=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==Qs&&ee!==Sr&&(St.getTransfer(ee)===Rt?(me!==fi||xe!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=ce,this.setTexture2D=pe,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=U,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ut}function RE(s,e){function t(r,o=Sr){let c;const u=St.getTransfer(o);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ng)return s.BYTE;if(r===ig)return s.SHORT;if(r===Va)return s.UNSIGNED_SHORT;if(r===Kd)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Ga)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===ag)return s.RGB;if(r===fi)return s.RGBA;if(r===og)return s.LUMINANCE;if(r===lg)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===cg)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===ug)return s.RG;if(r===ef)return s.RG_INTEGER;if(r===tf)return s.RGBA_INTEGER;if(r===Cl||r===Rl||r===Nl||r===Pl)if(u===Rt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Cl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Cl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xd||r===yd||r===Sd||r===Md)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed||r===Td||r===wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ed||r===Td)return u===Rt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ad||r===bd||r===Cd||r===Rd||r===Nd||r===Pd||r===Ld||r===Id||r===Dd||r===Ud||r===Od||r===Fd||r===kd||r===Bd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ad)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Id)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bd)return u===Rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===zd||r===Hd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ll)return u===Rt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dg||r===Vd||r===Gd||r===jd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ll)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class NE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),g=this._getHandJoint(p,w);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Dn,c=e.properties.get(o);c.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new wr({vertexShader:LE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Xa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends ts{constructor(e,t){super();const r=this;let o=null,c=1,u=null,d="local-floor",h=1,p=null,_=null,v=null,S=null,M=null,T=null;const w=new DE,x=t.getContextAttributes();let g=null,D=null;const L=[],R=[],J=new at;let B=null;const F=new Zn;F.viewport=new Vt;const W=new Zn;W.viewport=new Vt;const N=[F,W],C=new NE;let z=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=L[$];return ue===void 0&&(ue=new ed,L[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=L[$];return ue===void 0&&(ue=new ed,L[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=L[$];return ue===void 0&&(ue=new ed,L[$]=ue),ue.getHandSpace()};function ne($){const ue=R.indexOf($.inputSource);if(ue===-1)return;const _e=L[ue];_e!==void 0&&(_e.update($.inputSource,$.frame,p||u),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function de(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",pe);for(let $=0;$<L.length;$++){const ue=R[$];ue!==null&&(R[$]=null,L[$].disconnect(ue))}z=null,ce=null,w.reset(),e.setRenderTarget(g),M=null,S=null,v=null,o=null,D=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(J.width,J.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",de),o.addEventListener("inputsourceschange",pe),x.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(J),o.renderState.layers===void 0){const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Qr(M.framebufferWidth,M.framebufferHeight,{format:fi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,_e=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?Ks:js,_e=x.stencil?qs:Zr);const Ae={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:c};v=new XRWebGLBinding(o,t),S=v.createProjectionLayer(Ae),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Qr(S.textureWidth,S.textureHeight,{format:fi,type:Xi,depthTexture:new Ag(S.textureWidth,S.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),Pe.setContext(o),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe($){for(let ue=0;ue<$.removed.length;ue++){const _e=$.removed[ue],ge=R.indexOf(_e);ge>=0&&(R[ge]=null,L[ge].disconnect(_e))}for(let ue=0;ue<$.added.length;ue++){const _e=$.added[ue];let ge=R.indexOf(_e);if(ge===-1){for(let De=0;De<L.length;De++)if(De>=R.length){R.push(_e),ge=De;break}else if(R[De]===null){R[De]=_e,ge=De;break}if(ge===-1)break}const Ae=L[ge];Ae&&Ae.connect(_e)}}const K=new q,te=new q;function U($,ue,_e){K.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const ge=K.distanceTo(te),Ae=ue.projectionMatrix.elements,De=_e.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),mt=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],gn=(De[8]+1)/De[0],ht=Ze*X,ut=Ze*gn,$e=ge/(-X+gn),At=$e*-X;if(ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ($e),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Ze+$e,P=Ct+$e,A=ht-At,ee=ut+(ge-At),me=mt*Ct/P*Ye,xe=Lt*Ct/P*Ye;$.projectionMatrix.makePerspective(A,ee,me,xe,Ye,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let ue=$.near,_e=$.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(_e=w.depthFar)),C.near=W.near=F.near=ue,C.far=W.far=F.far=_e,(z!==C.near||ce!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ce=C.far),F.layers.mask=$.layers.mask|2,W.layers.mask=$.layers.mask|4,C.layers.mask=F.layers.mask|W.layers.mask;const ge=$.parent,Ae=C.cameras;Q(C,ge);for(let De=0;De<Ae.length;De++)Q(Ae[De],ge);Ae.length===2?U(C,F,W):C.projectionMatrix.copy(F.projectionMatrix),ae($,C,ge)};function ae($,ue,_e){_e===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function($){h=$,S!==null&&(S.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let O=null;function ie($,ue){if(_=ue.getViewerPose(p||u),T=ue,_!==null){const _e=_.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let ge=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let De=0;De<_e.length;De++){const Ze=_e[De];let Ct=null;if(M!==null)Ct=M.getViewport(Ze);else{const Lt=v.getViewSubImage(S,Ze);Ct=Lt.viewport,De===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,S.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(D))}let mt=N[De];mt===void 0&&(mt=new Zn,mt.layers.enable(De),mt.viewport=new Vt,N[De]=mt),mt.matrix.fromArray(Ze.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ze.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),De===0&&(C.matrix.copy(mt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(mt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const De=v.getDepthInformation(_e[0]);De&&De.isValid&&De.texture&&w.init(e,De,o.renderState)}}for(let _e=0;_e<L.length;_e++){const ge=R[_e],Ae=L[_e];ge!==null&&Ae!==void 0&&Ae.update(ge,ue,p||u)}O&&O($,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Pe=new Tg;Pe.setAnimationLoop(ie),this.setAnimationLoop=function($){O=$},this.dispose=function(){}}}const Wr=new Ei,OE=new kt;function FE(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,Sg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function o(x,g,D,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(x,g):g.isMeshToonMaterial?(c(x,g),v(x,g)):g.isMeshPhongMaterial?(c(x,g),_(x,g)):g.isMeshStandardMaterial?(c(x,g),S(x,g),g.isMeshPhysicalMaterial&&M(x,g,R)):g.isMeshMatcapMaterial?(c(x,g),T(x,g)):g.isMeshDepthMaterial?c(x,g):g.isMeshDistanceMaterial?(c(x,g),w(x,g)):g.isMeshNormalMaterial?c(x,g):g.isLineBasicMaterial?(u(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?h(x,g,D,L):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===In&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===In&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,R=D.envMapRotation;L&&(x.envMap.value=L,Wr.copy(R),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.envMapRotation.value.setFromMatrix4(OE.makeRotationFromEuler(Wr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function h(x,g,D,L){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*D,x.scale.value=L*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function M(x,g,D){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){const D=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,t,r){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const R=L.program;r.uniformBlockBinding(D,R)}function p(D,L){let R=o[D.id];R===void 0&&(T(D),R=_(D),o[D.id]=R,D.addEventListener("dispose",x));const J=L.program;r.updateUBOMapping(D,J);const B=e.render.frame;c[D.id]!==B&&(S(D),c[D.id]=B)}function _(D){const L=v();D.__bindingPointIndex=L;const R=s.createBuffer(),J=D.__size,B=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,J,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function v(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const L=o[D.id],R=D.uniforms,J=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,F=R.length;B<F;B++){const W=Array.isArray(R[B])?R[B]:[R[B]];for(let N=0,C=W.length;N<C;N++){const z=W[N];if(M(z,B,N,J)===!0){const ce=z.__offset,ne=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let pe=0;pe<ne.length;pe++){const K=ne[pe],te=w(K);typeof K=="number"||typeof K=="boolean"?(z.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,ce+de,z.__data)):K.isMatrix3?(z.__data[0]=K.elements[0],z.__data[1]=K.elements[1],z.__data[2]=K.elements[2],z.__data[3]=0,z.__data[4]=K.elements[3],z.__data[5]=K.elements[4],z.__data[6]=K.elements[5],z.__data[7]=0,z.__data[8]=K.elements[6],z.__data[9]=K.elements[7],z.__data[10]=K.elements[8],z.__data[11]=0):(K.toArray(z.__data,de),de+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,L,R,J){const B=D.value,F=L+"_"+R;if(J[F]===void 0)return typeof B=="number"||typeof B=="boolean"?J[F]=B:J[F]=B.clone(),!0;{const W=J[F];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return J[F]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function T(D){const L=D.uniforms;let R=0;const J=16;for(let F=0,W=L.length;F<W;F++){const N=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,z=N.length;C<z;C++){const ce=N[C],ne=Array.isArray(ce.value)?ce.value:[ce.value];for(let de=0,pe=ne.length;de<pe;de++){const K=ne[de],te=w(K),U=R%J,Q=U%te.boundary,ae=U+Q;R+=Q,ae!==0&&J-ae<te.storage&&(R+=J-ae),ce.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=R,R+=te.storage}}}const B=R%J;return B>0&&(R+=J-B),D.__size=R,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function x(D){const L=D.target;L.removeEventListener("dispose",x);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function g(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:h,update:p,dispose:g}}class BE{constructor(e={}){const{canvas:t=bv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const T=new Uint32Array(4),w=new Int32Array(4);let x=null,g=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Er,this.toneMappingExposure=1;const R=this;let J=!1,B=0,F=0,W=null,N=-1,C=null;const z=new Vt,ce=new Vt;let ne=null;const de=new pt(0);let pe=0,K=t.width,te=t.height,U=1,Q=null,ae=null;const O=new Vt(0,0,K,te),ie=new Vt(0,0,K,te);let Pe=!1;const $=new rf;let ue=!1,_e=!1;const ge=new kt,Ae=new kt,De=new q,Ze=new Vt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Lt(){return W===null?U:1}let X=r;function gn(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),X===null){const G="webgl2";if(X=gn(G,b),X===null)throw gn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ut,$e,At,Ye,P,A,ee,me,xe,fe,Ve,be,Ue,ct,Me,Fe,Qe,Je,ke,dt,it,wt,V;function Ce(){ht=new jS(X),ht.init(),it=new RE(X,ht),ut=new kS(X,ht,e,it),$e=new AE(X,ht),ut.reverseDepthBuffer&&S&&$e.buffers.depth.setReversed(!0),At=new YS(X),Ye=new dE,P=new CE(X,ht,$e,Ye,ut,it,At),A=new zS(R),ee=new GS(R),me=new ex(X),wt=new OS(X,me),xe=new WS(X,me,At,wt),fe=new qS(X,xe,me,At),Je=new $S(X,ut,P),Me=new BS(Ye),Ve=new uE(R,A,ee,ht,ut,wt,Me),be=new FE(R,Ye),Ue=new hE,ct=new xE(ht),Qe=new US(R,A,ee,$e,fe,M,h),Fe=new TE(R,fe,ut),V=new kE(X,At,ut,$e),ke=new FS(X,ht,At),dt=new XS(X,ht,At),At.programs=Ve.programs,R.capabilities=ut,R.extensions=ht,R.properties=Ye,R.renderLists=Ue,R.shadowMap=Fe,R.state=$e,R.info=At}Ce();const le=new UE(R,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(K,te,!1))},this.getSize=function(b){return b.set(K,te)},this.setSize=function(b,G,se=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,te=G,t.width=Math.floor(b*U),t.height=Math.floor(G*U),se===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(K*U,te*U).floor()},this.setDrawingBufferSize=function(b,G,se){K=b,te=G,U=se,t.width=Math.floor(b*se),t.height=Math.floor(G*se),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,G,se,oe){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,G,se,oe),$e.viewport(z.copy(O).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,G,se,oe){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,G,se,oe),$e.scissor(ce.copy(ie).multiplyScalar(U).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){$e.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(b=!0,G=!0,se=!0){let oe=0;if(b){let j=!1;if(W!==null){const we=W.texture.format;j=we===tf||we===ef||we===Jd}if(j){const we=W.texture.type,Ee=we===Xi||we===Zr||we===Va||we===qs||we===Zd||we===Qd,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,je=Ge.b;Ee?(T[0]=et,T[1]=nt,T[2]=je,T[3]=ze,X.clearBufferuiv(X.COLOR,0,T)):(w[0]=et,w[1]=nt,w[2]=je,w[3]=ze,X.clearBufferiv(X.COLOR,0,w))}else oe|=X.COLOR_BUFFER_BIT}G&&(oe|=X.DEPTH_BUFFER_BIT),se&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),ct.dispose(),Ye.dispose(),A.dispose(),ee.dispose(),fe.dispose(),wt.dispose(),V.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",ns),le.removeEventListener("sessionend",Yi),wi.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const b=At.autoReset,G=Fe.enabled,se=Fe.autoUpdate,oe=Fe.needsUpdate,j=Fe.type;Ce(),At.autoReset=b,Fe.enabled=G,Fe.autoUpdate=se,Fe.needsUpdate=oe,Fe.type=j}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const G=b.target;G.removeEventListener("dispose",rt),Dt(G)}function Dt(b){Xt(b),Ye.remove(b)}function Xt(b){const G=Ye.get(b).programs;G!==void 0&&(G.forEach(function(se){Ve.releaseProgram(se)}),b.isShaderMaterial&&Ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,se,oe,j,we){G===null&&(G=Ct);const Ee=j.isMesh&&j.matrixWorld.determinant()<0,Ge=qa(b,G,se,oe,j);$e.setMaterial(oe,Ee);let ze=se.index,et=1;if(oe.wireframe===!0){if(ze=xe.getWireframeAttribute(se),ze===void 0)return;et=2}const nt=se.drawRange,je=se.attributes.position;let _t=nt.start*et,Tt=(nt.start+nt.count)*et;we!==null&&(_t=Math.max(_t,we.start*et),Tt=Math.min(Tt,(we.start+we.count)*et)),ze!==null?(_t=Math.max(_t,0),Tt=Math.min(Tt,ze.count)):je!=null&&(_t=Math.max(_t,0),Tt=Math.min(Tt,je.count));const gt=Tt-_t;if(gt<0||gt===1/0)return;wt.setup(j,oe,Ge,se,ze);let ln,st=ke;if(ze!==null&&(ln=me.get(ze),st=dt,st.setIndex(ln)),j.isMesh)oe.wireframe===!0?($e.setLineWidth(oe.wireframeLinewidth*Lt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(j.isLine){let Xe=oe.linewidth;Xe===void 0&&(Xe=1),$e.setLineWidth(Xe*Lt()),j.isLineSegments?st.setMode(X.LINES):j.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else j.isPoints?st.setMode(X.POINTS):j.isSprite&&st.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)st.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))st.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xe=j._multiDrawStarts,ti=j._multiDrawCounts,Mt=j._multiDrawCount,cn=ze?me.get(ze).bytesPerElement:1,ni=Ye.get(oe).currentProgram.getUniforms();for(let Yt=0;Yt<Mt;Yt++)ni.setValue(X,"_gl_DrawID",Yt),st.render(Xe[Yt]/cn,ti[Yt])}else if(j.isInstancedMesh)st.renderInstances(_t,gt,j.count);else if(se.isInstancedBufferGeometry){const Xe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ti=Math.min(se.instanceCount,Xe);st.renderInstances(_t,gt,ti)}else st.render(_t,gt)};function xt(b,G,se){b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,is(b,G,se),b.side=Tr,b.needsUpdate=!0,is(b,G,se),b.side=Vi):is(b,G,se)}this.compile=function(b,G,se=null){se===null&&(se=b),g=ct.get(se),g.init(G),L.push(g),se.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==se&&b.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const oe=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){const Ge=we[Ee];xt(Ge,se,j),oe.add(Ge)}else xt(we,se,j),oe.add(we)}),L.pop(),g=null,oe},this.compileAsync=function(b,G,se=null){const oe=this.compile(b,G,se);return new Promise(j=>{function we(){if(oe.forEach(function(Ee){Ye.get(Ee).currentProgram.isReady()&&oe.delete(Ee)}),oe.size===0){j(b);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let En=null;function _n(b){En&&En(b)}function ns(){wi.stop()}function Yi(){wi.start()}const wi=new Tg;wi.setAnimationLoop(_n),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){En=b,le.setAnimationLoop(b),b===null?wi.stop():wi.start()},le.addEventListener("sessionstart",ns),le.addEventListener("sessionend",Yi),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(G),G=le.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,G,W),g=ct.get(b,L.length),g.init(G),L.push(g),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,_e),x=Ue.get(b,D.length),x.init(),D.push(x),le.enabled===!0&&le.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ai(we,G,-1/0,R.sortObjects)}Ai(b,G,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(Q,ae),mt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,mt&&Qe.addToRenderList(x,b),this.info.render.frame++,ue===!0&&Me.beginShadows();const se=g.state.shadowsArray;Fe.render(se,b,G),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=x.opaque,j=x.transmissive;if(g.setupLights(),G.isArrayCamera){const we=G.cameras;if(j.length>0)for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];br(oe,j,b,ze)}mt&&Qe.render(b);for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const ze=we[Ee];Ar(x,b,ze,ze.viewport)}}else j.length>0&&br(oe,j,b,G),mt&&Qe.render(b),Ar(x,b,G);W!==null&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),b.isScene===!0&&b.onAfterRender(R,b,G),wt.resetDefaultState(),N=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ue===!0&&Me.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function Ai(b,G,se,oe){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){oe&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Ee=fe.update(b),Ge=b.material;Ge.visible&&x.push(b,Ee,Ge,se,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Ee=fe.update(b),Ge=b.material;if(oe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ze.copy(Ee.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Ee.groups;for(let et=0,nt=ze.length;et<nt;et++){const je=ze[et],_t=Ge[je.materialIndex];_t&&_t.visible&&x.push(b,Ee,_t,se,Ze.z,je)}}else Ge.visible&&x.push(b,Ee,Ge,se,Ze.z,null)}}const we=b.children;for(let Ee=0,Ge=we.length;Ee<Ge;Ee++)Ai(we[Ee],G,se,oe)}function Ar(b,G,se,oe){const j=b.opaque,we=b.transmissive,Ee=b.transparent;g.setupLightsView(se),ue===!0&&Me.setGlobalState(R.clippingPlanes,se),oe&&$e.viewport(z.copy(oe)),j.length>0&&$i(j,G,se),we.length>0&&$i(we,G,se),Ee.length>0&&$i(Ee,G,se),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function br(b,G,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Qr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Ga:Xi,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const we=g.state.transmissionRenderTarget[oe.id],Ee=oe.viewport||z;we.setSize(Ee.z,Ee.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(de),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),mt&&Qe.render(se);const ze=R.toneMapping;R.toneMapping=Er;const et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),ue===!0&&Me.setGlobalState(R.clippingPlanes,oe),$i(b,se,oe),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let je=0,_t=G.length;je<_t;je++){const Tt=G[je],gt=Tt.object,ln=Tt.geometry,st=Tt.material,Xe=Tt.group;if(st.side===Vi&&gt.layers.test(oe.layers)){const ti=st.side;st.side=In,st.needsUpdate=!0,Ya(gt,se,oe,ln,st,Xe),st.side=ti,st.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(de,pe),et!==void 0&&(oe.viewport=et),R.toneMapping=ze}function $i(b,G,se){const oe=G.isScene===!0?G.overrideMaterial:null;for(let j=0,we=b.length;j<we;j++){const Ee=b[j],Ge=Ee.object,ze=Ee.geometry,et=oe===null?Ee.material:oe,nt=Ee.group;Ge.layers.test(se.layers)&&Ya(Ge,G,se,ze,et,nt)}}function Ya(b,G,se,oe,j,we){b.onBeforeRender(R,G,se,oe,j,we),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(R,G,se,oe,b,we),j.transparent===!0&&j.side===Vi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,R.renderBufferDirect(se,G,oe,j,b,we),j.side=Tr,j.needsUpdate=!0,R.renderBufferDirect(se,G,oe,j,b,we),j.side=Vi):R.renderBufferDirect(se,G,oe,j,b,we),b.onAfterRender(R,G,se,oe,j,we)}function is(b,G,se){G.isScene!==!0&&(G=Ct);const oe=Ye.get(b),j=g.state.lights,we=g.state.shadowsArray,Ee=j.state.version,Ge=Ve.getParameters(b,j.state,we,G,se),ze=Ve.getProgramCacheKey(Ge);let et=oe.programs;oe.environment=b.isMeshStandardMaterial?G.environment:null,oe.fog=G.fog,oe.envMap=(b.isMeshStandardMaterial?ee:A).get(b.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",rt),et=new Map,oe.programs=et);let nt=et.get(ze);if(nt!==void 0){if(oe.currentProgram===nt&&oe.lightsStateVersion===Ee)return pi(b,Ge),nt}else Ge.uniforms=Ve.getUniforms(b),b.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),oe.uniforms=Ge.uniforms;const je=oe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Me.uniform),pi(b,Ge),oe.needsLights=Gl(b),oe.lightsStateVersion=Ee,oe.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),oe.currentProgram=nt,oe.uniformsList=null,nt}function $a(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Il.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function pi(b,G){const se=Ye.get(b);se.outputColorSpace=G.outputColorSpace,se.batching=G.batching,se.batchingColor=G.batchingColor,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.instancingMorph=G.instancingMorph,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function qa(b,G,se,oe,j){G.isScene!==!0&&(G=Ct),P.resetTextureUnits();const we=G.fog,Ee=oe.isMeshStandardMaterial?G.environment:null,Ge=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Qs,ze=(oe.isMeshStandardMaterial?ee:A).get(oe.envMap||Ee),et=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),je=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color;let gt=Er;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(gt=R.toneMapping);const ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,st=ln!==void 0?ln.length:0,Xe=Ye.get(oe),ti=g.state.lights;if(ue===!0&&(_e===!0||b!==C)){const vn=b===C&&oe.id===N;Me.setState(oe,b,vn)}let Mt=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ti.state.version||Xe.outputColorSpace!==Ge||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isBatchedMesh&&Xe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Xe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Xe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Xe.instancingMorph===!1&&j.morphTexture!==null||Xe.envMap!==ze||oe.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Me.numPlanes||Xe.numIntersection!==Me.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==je||Xe.morphNormals!==_t||Xe.morphColors!==Tt||Xe.toneMapping!==gt||Xe.morphTargetsCount!==st)&&(Mt=!0):(Mt=!0,Xe.__version=oe.version);let cn=Xe.currentProgram;Mt===!0&&(cn=is(oe,G,j));let ni=!1,Yt=!1,mi=!1;const Pt=cn.getUniforms(),Hn=Xe.uniforms;if($e.useProgram(cn.program)&&(ni=!0,Yt=!0,mi=!0),oe.id!==N&&(N=oe.id,Yt=!0),ni||C!==b){$e.buffers.depth.getReversed()?(ge.copy(b.projectionMatrix),Rv(ge),Nv(ge),Pt.setValue(X,"projectionMatrix",ge)):Pt.setValue(X,"projectionMatrix",b.projectionMatrix),Pt.setValue(X,"viewMatrix",b.matrixWorldInverse);const Vn=Pt.map.cameraPosition;Vn!==void 0&&Vn.setValue(X,De.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Yt=!0,mi=!0)}if(j.isSkinnedMesh){Pt.setOptional(X,j,"bindMatrix"),Pt.setOptional(X,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Pt.setValue(X,"boneTexture",vn.boneTexture,P))}j.isBatchedMesh&&(Pt.setOptional(X,j,"batchingTexture"),Pt.setValue(X,"batchingTexture",j._matricesTexture,P),Pt.setOptional(X,j,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",j._indirectTexture,P),Pt.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",j._colorsTexture,P));const bi=se.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&Je.update(j,se,cn),(Yt||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Pt.setValue(X,"receiveShadow",j.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Hn.envMap.value=ze,Hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&G.environment!==null&&(Hn.envMapIntensity.value=G.environmentIntensity),Yt&&(Pt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&Ka(Hn,mi),we&&oe.fog===!0&&be.refreshFogUniforms(Hn,we),be.refreshMaterialUniforms(Hn,oe,U,te,g.state.transmissionRenderTarget[b.id]),Il.upload(X,$a(Xe),Hn,P)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Il.upload(X,$a(Xe),Hn,P),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Pt.setValue(X,"center",j.center),Pt.setValue(X,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(X,"normalMatrix",j.normalMatrix),Pt.setValue(X,"modelMatrix",j.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const vn=oe.uniformsGroups;for(let Vn=0,Tn=vn.length;Vn<Tn;Vn++){const Za=vn[Vn];V.update(Za,cn),V.bind(Za,cn)}}return cn}function Ka(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Gl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,G,se){Ye.get(b.texture).__webglTexture=G,Ye.get(b.depthTexture).__webglTexture=se;const oe=Ye.get(b);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const se=Ye.get(b);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,se=0){W=b,B=G,F=se;let oe=!0,j=null,we=!1,Ee=!1;if(b){const ze=Ye.get(b);if(ze.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(X.FRAMEBUFFER,null),oe=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(ze.__hasExternalTextures)P.rebindTextures(b,Ye.get(b.texture).__webglTexture,Ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(ze.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ee=!0);const nt=Ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?j=nt[G][se]:j=nt[G],we=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?j=Ye.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[se]:j=nt,z.copy(b.viewport),ce.copy(b.scissor),ne=b.scissorTest}else z.copy(O).multiplyScalar(U).floor(),ce.copy(ie).multiplyScalar(U).floor(),ne=Pe;if($e.bindFramebuffer(X.FRAMEBUFFER,j)&&oe&&$e.drawBuffers(b,j),$e.viewport(z),$e.scissor(ce),$e.setScissorTest(ne),we){const ze=Ye.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,se)}else if(Ee){const ze=Ye.get(b.texture),et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,se||0,et)}N=-1},this.readRenderTargetPixels=function(b,G,se,oe,j,we,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){$e.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=b.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-oe&&se>=0&&se<=b.height-j&&X.readPixels(G,se,oe,j,it.convert(et),it.convert(nt),we)}finally{const ze=W!==null?Ye.get(W).__webglFramebuffer:null;$e.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,G,se,oe,j,we,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ge=Ge[Ee]),Ge){const ze=b.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-oe&&se>=0&&se<=b.height-j){$e.bindFramebuffer(X.FRAMEBUFFER,Ge);const je=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(G,se,oe,j,it.convert(et),it.convert(nt),0);const _t=W!==null?Ye.get(W).__webglFramebuffer:null;$e.bindFramebuffer(X.FRAMEBUFFER,_t);const Tt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Cv(X,Tt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,je),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.deleteBuffer(je),X.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,se=0){b.isTexture!==!0&&(Ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const oe=Math.pow(2,-se),j=Math.floor(b.image.width*oe),we=Math.floor(b.image.height*oe),Ee=G!==null?G.x:0,Ge=G!==null?G.y:0;P.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,se,0,0,Ee,Ge,j,we),$e.unbindTexture()},this.copyTextureToTexture=function(b,G,se=null,oe=null,j=0){b.isTexture!==!0&&(Ba("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,b=arguments[1],G=arguments[2],j=arguments[3]||0,se=null);let we,Ee,Ge,ze,et,nt,je,_t,Tt;const gt=b.isCompressedTexture?b.mipmaps[j]:b.image;se!==null?(we=se.max.x-se.min.x,Ee=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,ze=se.min.x,et=se.min.y,nt=se.isBox3?se.min.z:0):(we=gt.width,Ee=gt.height,Ge=gt.depth||1,ze=0,et=0,nt=0),oe!==null?(je=oe.x,_t=oe.y,Tt=oe.z):(je=0,_t=0,Tt=0);const ln=it.convert(G.format),st=it.convert(G.type);let Xe;G.isData3DTexture?(P.setTexture3D(G,0),Xe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(P.setTexture2DArray(G,0),Xe=X.TEXTURE_2D_ARRAY):(P.setTexture2D(G,0),Xe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const ti=X.getParameter(X.UNPACK_ROW_LENGTH),Mt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),cn=X.getParameter(X.UNPACK_SKIP_PIXELS),ni=X.getParameter(X.UNPACK_SKIP_ROWS),Yt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const mi=b.isDataArrayTexture||b.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Hn=Ye.get(b),bi=Ye.get(G),vn=Ye.get(Hn.__renderTarget),Vn=Ye.get(bi.__renderTarget);$e.bindFramebuffer(X.READ_FRAMEBUFFER,vn.__webglFramebuffer),$e.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Tn=0;Tn<Ge;Tn++)mi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(b).__webglTexture,j,nt+Tn),b.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,j,Tt+Tn),X.blitFramebuffer(ze,et,we,Ee,je,_t,we,Ee,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(Xe,j,je,_t,Tt+Tn,ze,et,we,Ee):X.copyTexSubImage2D(Xe,j,je,_t,Tt+Tn,ze,et,we,Ee);$e.bindFramebuffer(X.READ_FRAMEBUFFER,null),$e.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(Xe,j,je,_t,Tt,we,Ee,Ge,ln,st,gt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,j,je,_t,Tt,we,Ee,Ge,ln,gt.data):X.texSubImage3D(Xe,j,je,_t,Tt,we,Ee,Ge,ln,st,gt):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,je,_t,we,Ee,ln,st,gt.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,je,_t,gt.width,gt.height,ln,gt.data):X.texSubImage2D(X.TEXTURE_2D,j,je,_t,we,Ee,ln,st,gt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ti),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,cn),X.pixelStorei(X.UNPACK_SKIP_ROWS,ni),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Yt),j===0&&G.generateMipmaps&&X.generateMipmap(Xe),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,G,se=null,oe=null,j=0){return b.isTexture!==!0&&(Ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,b=arguments[2],G=arguments[3],j=arguments[4]||0),Ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,se,oe,j)},this.initRenderTarget=function(b){Ye.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){B=0,F=0,W=null,$e.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class af{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=r}clone(){return new af(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zE extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class of extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new q,Fl=new q,km=new kt,ka=new Hl,Ml=new zl,td=new q,Bm=new q;class HE extends rn{constructor(e=new Ti,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,c=t.count;o<c;o++)Ol.fromBufferAttribute(t,o-1),Fl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Ol.distanceTo(Fl);e.setAttribute("lineDistance",new ei(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(o),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;km.copy(o).invert(),ka.copy(e.ray).applyMatrix4(km);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let w=M,x=T-1;w<x;w+=p){const g=_.getX(w),D=_.getX(w+1),L=El(this,e,ka,h,g,D);L&&t.push(L)}if(this.isLineLoop){const w=_.getX(T-1),x=_.getX(M),g=El(this,e,ka,h,w,x);g&&t.push(g)}}else{const M=Math.max(0,u.start),T=Math.min(S.count,u.start+u.count);for(let w=M,x=T-1;w<x;w+=p){const g=El(this,e,ka,h,w,w+1);g&&t.push(g)}if(this.isLineLoop){const w=El(this,e,ka,h,T-1,M);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function El(s,e,t,r,o,c){const u=s.geometry.attributes.position;if(Ol.fromBufferAttribute(u,o),Fl.fromBufferAttribute(u,c),t.distanceSqToSegment(Ol,Fl,td,Bm)>r)return;td.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(td);if(!(h<e.near||h>e.far))return{distance:h,point:Bm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const zm=new q,Hm=new q;class Pg extends HE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,c=t.count;o<c;o+=2)zm.fromBufferAttribute(t,o),Hm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+zm.distanceTo(Hm);e.setAttribute("lineDistance",new ei(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Tl=new q,wl=new q,nd=new q,Al=new Qn;class VE extends Ti{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),c=Math.cos(Ha*t),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],v=new Array(3),S={},M=[];for(let T=0;T<h;T+=3){u?(p[0]=u.getX(T),p[1]=u.getX(T+1),p[2]=u.getX(T+2)):(p[0]=T,p[1]=T+1,p[2]=T+2);const{a:w,b:x,c:g}=Al;if(w.fromBufferAttribute(d,p[0]),x.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),Al.getNormal(nd),v[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,v[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,v[2]=`${Math.round(g.x*o)},${Math.round(g.y*o)},${Math.round(g.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let D=0;D<3;D++){const L=(D+1)%3,R=v[D],J=v[L],B=Al[_[D]],F=Al[_[L]],W=`${R}_${J}`,N=`${J}_${R}`;N in S&&S[N]?(nd.dot(S[N].normal)<=c&&(M.push(B.x,B.y,B.z),M.push(F.x,F.y,F.z)),S[N]=null):W in S||(S[W]={index0:p[D],index1:p[L],normal:nd.clone()})}}for(const T in S)if(S[T]){const{index0:w,index1:x}=S[T];Tl.fromBufferAttribute(d,w),wl.fromBufferAttribute(d,x),M.push(Tl.x,Tl.y,Tl.z),M.push(wl.x,wl.y,wl.z)}this.setAttribute("position",new ei(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class id extends Js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fg,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lg extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class GE extends Lg{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rd=new kt,Vm=new q,Gm=new q;class jE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),rd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WE extends jE{constructor(){super(new wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XE extends Lg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new WE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jm=new kt;class YE{constructor(e,t,r=0,o=1/0){this.ray=new Hl(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jm),this}intersectObject(e,t=!0,r=[]){return Yd(e,this,r,t),r.sort(Wm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Yd(e[o],this,r,t);return r.sort(Wm),r}}function Wm(s,e){return s.distance-e.distance}function Yd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let u=0,d=c.length;u<d;u++)Yd(c[u],e,t,!0)}}class Xm{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $E extends Pg{constructor(e=10,t=10,r=4473924,o=8947848){r=new pt(r),o=new pt(o);const c=t/2,u=e/t,d=e/2,h=[],p=[];for(let S=0,M=0,T=-d;S<=t;S++,T+=u){h.push(-d,0,T,d,0,T),h.push(T,0,-d,T,0,d);const w=S===c?r:o;w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3}const _=new Ti;_.setAttribute("position",new ei(h,3)),_.setAttribute("color",new ei(p,3));const v=new of({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class qE extends ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);const Ym={type:"change"},lf={type:"start"},Ig={type:"end"},bl=new Hl,$m=new yr,KE=Math.cos(70*Av.DEG2RAD),Kt=new q,Ln=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class ZE extends qE{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Jr,this._lastTargetPosition=new q,this._quat=new Jr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xm,this._sphericalDelta=new Xm,this._scale=1,this._panOffset=new q,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new q,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JE.bind(this),this._onPointerDown=QE.bind(this),this._onPointerUp=eT.bind(this),this._onContextMenu=oT.bind(this),this._onMouseWheel=iT.bind(this),this._onKeyDown=rT.bind(this),this._onTouchStart=sT.bind(this),this._onTouchMove=aT.bind(this),this._onMouseDown=tT.bind(this),this._onMouseMove=nT.bind(this),this._interceptControlDown=lT.bind(this),this._interceptControlUp=cT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ym),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Ln:r>Math.PI&&(r-=Ln),o<-Math.PI?o+=Ln:o>Math.PI&&(o-=Ln),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Kt.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),c=!!h}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=h!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(bl.origin.copy(this.object.position),bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bl.direction))<KE?this.object.lookAt(this.target):($m.setFromNormalAndCoplanarPoint(this.object.up,this.target),bl.intersectPlane($m,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(Ym),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Kt.copy(o).sub(this.target);let c=Kt.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*t*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new at,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function QE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function JE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function eT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ig),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case Vs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case Vs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(lf)}function nT(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function iT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(lf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ig))}function rT(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function sT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(lf)}function aT(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function oT(s){this.enabled!==!1&&s.preventDefault()}function lT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uT({sceneData:s,onSelect:e}){const t=vt.useRef(null),r=vt.useRef([]);return vt.useEffect(()=>{if(!t.current||!s)return;const o=t.current,c=new BE({canvas:o,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(462877,1);const u=new zE;u.fog=new af(462877,22,42);const d=new Zn(42,1,.1,100);d.position.set(0,15,18);const h=new ZE(d,o);h.enableDamping=!0,h.target.set(0,0,-1),h.maxPolarAngle=Math.PI/2.15,h.minDistance=10,h.maxDistance=32,u.add(new GE(10214655,1054759,2.1));const p=new XE(16777215,2.2);p.position.set(-8,14,10),u.add(p);const _=new Jn(new Xa(30,24),new id({color:726824,roughness:.8}));_.rotation.x=-Math.PI/2,u.add(_);const v=new $E(30,30,1985634,1323075);v.position.y=.02,u.add(v),r.current=[],s.zones.forEach(D=>{const L=new pt(D.color),R=new id({color:L,transparent:!0,opacity:.18,roughness:.5,emissive:L,emissiveIntensity:.28}),J=new Jn(new es(7,.5,5.4),R);J.position.set(D.position.x,.25,D.position.z),J.userData=D,u.add(J),r.current.push(J);const B=new Pg(new VE(J.geometry),new of({color:L,transparent:!0,opacity:.8}));B.position.copy(J.position),u.add(B),D.machines.forEach(F=>{const W=F.status==="CRITICAL"?15680580:F.status==="WARNING"?16347926:2278750,N=new Jn(new es(1.15,1.3,.9),new id({color:W,emissive:W,emissiveIntensity:.55,metalness:.4,roughness:.35}));N.position.set(F.position.x,.9,F.position.z),N.userData={...D,selectedMachine:F},u.add(N),r.current.push(N)})});const S=()=>{const D=o.clientWidth,L=o.clientHeight;c.setSize(D,L,!1),d.aspect=D/L,d.updateProjectionMatrix()};S(),window.addEventListener("resize",S);const M=new YE,T=new at,w=D=>{const L=o.getBoundingClientRect();T.x=(D.clientX-L.left)/L.width*2-1,T.y=-((D.clientY-L.top)/L.height)*2+1,M.setFromCamera(T,d);const R=M.intersectObjects(r.current)[0];R&&e(R.object.userData)};o.addEventListener("click",w);let x;const g=()=>{h.update(),c.render(u,d),x=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(x),o.removeEventListener("click",w),window.removeEventListener("resize",S),h.dispose(),c.dispose()}},[s,e]),y.jsx("canvas",{ref:t,className:"safety-3d-canvas","aria-label":"Interactive 3D facility safety map"})}function dT(){var u;const[s,e]=vt.useState(null),[t,r]=vt.useState(null),[o,c]=vt.useState("");return vt.useEffect(()=>{fetch("/api/scene-3d").then(d=>d.json()).then(e).catch(()=>c("3D safety service is unavailable. Start the backend and refresh."))},[]),y.jsxs("div",{className:"p-6 space-y-5",children:[y.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-3",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-[10px] tracking-[.18em] font-mono text-cyan-400",children:"SPATIAL SAFETY COMMAND"}),y.jsx("h2",{className:"text-2xl font-black text-white mt-1",children:"3D facility safety map"}),y.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Green permits entry. Orange requires a check. Red means do not enter."})]}),y.jsx("span",{className:"text-[10px] font-mono text-slate-500",children:"DRAG TO ORBIT · SCROLL TO ZOOM · CLICK A ZONE"})]}),o&&y.jsx("div",{className:"glass-panel p-4 text-rose-300",children:o}),y.jsxs("div",{className:"safety-3d-layout",children:[y.jsxs("div",{className:"safety-3d-frame",children:[s?y.jsx(uT,{sceneData:s,onSelect:r}):y.jsx("div",{className:"safety-3d-loading",children:"Loading live facility geometry..."}),y.jsxs("div",{className:"safety-3d-overlay",children:[y.jsx("span",{children:"LIVE SENSOR OVERLAY"}),y.jsx("span",{className:"safety-live-dot"})," CONNECTED"]})]}),y.jsxs("aside",{className:"safety-3d-panel glass-panel p-5",children:[y.jsx("p",{className:"text-[10px] font-mono tracking-wider text-slate-500 uppercase",children:"ENTRY STATUS LEGEND"}),s==null?void 0:s.legend.map(d=>y.jsxs("div",{className:"safety-legend-row",children:[y.jsx("span",{className:"safety-legend-color",style:{backgroundColor:d.color,boxShadow:`0 0 12px ${d.color}`}}),y.jsxs("div",{children:[y.jsx("strong",{children:d.status}),y.jsx("p",{children:d.meaning})]})]},d.status)),y.jsx("div",{className:"safety-selection",children:t?y.jsxs(y.Fragment,{children:[y.jsxs("p",{className:"text-[10px] text-cyan-400 font-mono",children:["SELECTED ",t.selectedMachine?"ASSET":"ZONE"]}),y.jsx("h3",{children:((u=t.selectedMachine)==null?void 0:u.name)||t.name}),y.jsx("p",{children:t.selectedMachine?`${t.selectedMachine.id} · ${t.selectedMachine.status} · ${t.selectedMachine.healthScore}% health`:`${t.machineCount} machines · ${t.ammoniaPpm} ppm ammonia · ${t.health}% minimum health`}),y.jsx("span",{className:`safety-selection-status status-${t.status.toLowerCase()}`,children:t.status})]}):y.jsx("p",{children:"Click a colored zone or machine to inspect its live safety state."})})]})]})]})}function qm(){const{machines:s,alerts:e,maintenance:t,industrialRisk:r,setActivePage:o,setSelectedMachineId:c}=sn(),u=e.filter(p=>p.status==="ACTIVE"),d=s.filter(p=>p.status==="CRITICAL"),h=s.reduce((p,_)=>_.healthScore<p.healthScore?_:p,s[0]);return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-black text-white tracking-wide",children:"INDUSTRIAL COMMAND CENTER"}),y.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:"AI-Powered Predictive Maintenance & Worker Safety Platform"})]}),y.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-lg",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"}),"LIVE TELEMETRY ACTIVE"]})]}),y.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[{label:"Machines Monitored",value:s.length,unit:"assets",icon:"⚙️",color:"text-cyan-400"},{label:"Active Alerts",value:u.length,unit:"alerts",icon:"🚨",color:u.length>0?"text-rose-400":"text-emerald-400"},{label:"Critical Machines",value:d.length,unit:"critical",icon:"⚠️",color:d.length>0?"text-rose-400":"text-emerald-400"},{label:"Avg Fleet Health",value:`${Math.round(s.reduce((p,_)=>p+_.healthScore,0)/s.length)}%`,unit:"",icon:"💚",color:"text-emerald-400"}].map(p=>y.jsxs("div",{className:"glass-panel p-4",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1",children:[y.jsx("span",{className:"text-lg",children:p.icon}),y.jsx("span",{className:`text-2xl font-black font-mono ${p.color}`,children:p.value})]}),y.jsx("p",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wide",children:p.label})]},p.label))}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[y.jsx(Qm,{score:h.healthScore,title:"WORST MACHINE HEALTH"}),y.jsx(I_,{}),y.jsxs("div",{className:"glass-panel p-5",children:[y.jsx("div",{className:"text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold mb-3",children:"RECENT ALERTS"}),y.jsxs("div",{className:"space-y-2 overflow-y-auto max-h-52",children:[u.slice(0,4).map(p=>y.jsxs("div",{className:`p-2.5 rounded-lg border text-xs ${p.severity==="CRITICAL"?"border-rose-500/50 bg-rose-950/30":"border-amber-500/40 bg-amber-950/20"}`,children:[y.jsxs("div",{className:"flex items-center justify-between mb-1",children:[y.jsx("span",{className:`font-bold font-mono text-[10px] ${p.severity==="CRITICAL"?"text-rose-400":"text-amber-400"}`,children:p.severity}),y.jsx("span",{className:"text-slate-500 font-mono text-[10px]",children:p.machineId})]}),y.jsx("p",{className:"text-slate-300 text-[11px] leading-tight",children:p.alertType})]},p.id)),u.length===0&&y.jsx("p",{className:"text-slate-500 text-xs text-center py-4",children:"No active alerts 🟢"})]})]})]}),y.jsxs("div",{children:[y.jsx("div",{className:"text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold mb-3",children:"MACHINE FLEET STATUS"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:s.map(p=>y.jsxs("button",{onClick:()=>{c(p.id),o("machine-details")},className:`glass-panel p-4 text-left transition-all hover:scale-[1.01] w-full ${p.status==="CRITICAL"?"glass-panel-glow-red":p.status==="WARNING"?"glass-panel-glow-amber":""}`,children:[y.jsxs("div",{className:"flex items-start justify-between mb-2",children:[y.jsxs("div",{children:[y.jsx("p",{className:"font-bold text-sm text-white",children:p.name}),y.jsxs("p",{className:"text-[11px] text-slate-400 font-mono",children:[p.id," · ",p.zone]})]}),y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${p.status==="CRITICAL"?"badge-critical animate-pulse":p.status==="WARNING"?"badge-warning":"badge-normal"}`,children:p.status})]}),y.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[y.jsxs("div",{className:"flex-1",children:[y.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400 mb-1",children:[y.jsx("span",{children:"Health"}),y.jsxs("span",{children:[p.healthScore,"%"]})]}),y.jsx("div",{className:"h-1.5 bg-slate-800 rounded-full overflow-hidden",children:y.jsx("div",{className:`h-full rounded-full transition-all ${p.healthScore>=75?"bg-emerald-500":p.healthScore>=50?"bg-amber-500":"bg-rose-500"}`,style:{width:`${p.healthScore}%`}})})]}),y.jsxs("div",{className:"text-right",children:[y.jsx("p",{className:"text-[10px] font-mono text-slate-400",children:"RISK"}),y.jsxs("p",{className:`text-sm font-black font-mono ${p.failureRisk>60?"text-rose-400":p.failureRisk>30?"text-amber-400":"text-emerald-400"}`,children:[p.failureRisk,"%"]})]})]})]},p.id))})]})]})}function fT(){const{machines:s,setSelectedMachineId:e,setActivePage:t}=sn();return y.jsxs("div",{className:"p-6",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"MACHINE FLEET REGISTRY"}),y.jsx("p",{className:"text-xs text-slate-400 mb-6",children:"All monitored industrial assets across the facility"}),y.jsx("div",{className:"space-y-3",children:s.map(r=>y.jsx("div",{className:`glass-panel p-5 ${r.status==="CRITICAL"?"glass-panel-glow-red":""}`,children:y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:`w-3 h-3 rounded-full ${r.status==="CRITICAL"?"bg-rose-500 animate-pulse":r.status==="WARNING"?"bg-amber-500":"bg-emerald-500"}`}),y.jsxs("div",{children:[y.jsx("p",{className:"font-bold text-white",children:r.name}),y.jsxs("p",{className:"text-xs font-mono text-slate-400",children:[r.id," · ",r.type," · ",r.location]})]})]}),y.jsxs("div",{className:"flex items-center gap-6 text-xs font-mono",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-slate-500",children:"HEALTH"}),y.jsxs("p",{className:"font-black text-white text-base",children:[r.healthScore,"%"]})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-slate-500",children:"RISK"}),y.jsxs("p",{className:`font-black text-base ${r.failureRisk>60?"text-rose-400":r.failureRisk>30?"text-amber-400":"text-emerald-400"}`,children:[r.failureRisk,"%"]})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-slate-500",children:"ANOMALY"}),y.jsxs("p",{className:"font-black text-cyan-400 text-base",children:[r.anomalyScore,"%"]})]}),y.jsxs("div",{children:[y.jsx("p",{className:"text-slate-500",children:"OP HRS"}),y.jsx("p",{className:"font-black text-white text-base",children:r.operatingHours.toLocaleString()})]}),y.jsx("button",{onClick:()=>{e(r.id),t("machine-details")},className:"btn-cyber px-3 py-1.5 rounded-lg text-xs font-bold",children:"VIEW →"})]})]})},r.id))})]})}function hT(){const{selectedMachine:s}=sn();if(!s)return y.jsx("div",{className:"p-6 text-slate-400",children:"No machine selected."});const e=s.sensors,t=[{title:"TEMPERATURE",value:e.temperature,unit:"°C",icon:"🌡️",expectedRange:"40 – 80°C",status:e.temperature>90?"CRITICAL":e.temperature>80?"WARNING":"NORMAL"},{title:"VIBRATION",value:e.vibration,unit:"mm/s",icon:"📳",expectedRange:"0 – 4.5 mm/s",status:e.vibration>7?"CRITICAL":e.vibration>4.5?"WARNING":"NORMAL"},{title:"CURRENT DRAW",value:e.current,unit:"A",icon:"⚡",expectedRange:"8 – 16 A",status:e.current>24?"CRITICAL":e.current>18?"WARNING":"NORMAL"},{title:"FREQUENCY",value:e.frequency,unit:"Hz",icon:"〰️",expectedRange:"49.5 – 50.5 Hz",status:Math.abs(e.frequency-50)>3?"CRITICAL":Math.abs(e.frequency-50)>1?"WARNING":"NORMAL"},{title:"HUMIDITY",value:e.humidity,unit:"%RH",icon:"💧",expectedRange:"30 – 75 %RH",status:e.humidity>85?"WARNING":"NORMAL"},{title:"AMMONIA (NH₃)",value:e.ammonia,unit:"ppm",icon:"☁️",expectedRange:"< 25 ppm",status:e.ammonia>50?"CRITICAL":e.ammonia>25?"WARNING":"NORMAL"}];return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-black text-white",children:s.name}),y.jsxs("p",{className:"text-xs font-mono text-slate-400",children:[s.id," · ",s.type," · ",s.location]})]}),y.jsx("span",{className:`text-xs font-mono font-bold px-3 py-1 rounded border ${s.status==="CRITICAL"?"badge-critical animate-pulse":s.status==="WARNING"?"badge-warning":"badge-normal"}`,children:s.status})]}),y.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3",children:t.map(r=>y.jsx(L_,{...r,trend:r.status==="NORMAL"?"✓ OK":"⚠ Alert"},r.title))}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[y.jsx(Qm,{score:s.healthScore,title:`${s.id} HEALTH SCORE`}),y.jsxs("div",{className:"glass-panel p-5 space-y-3",children:[y.jsx("div",{className:"text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold",children:"MACHINE SPECS"}),Object.entries(s.specs).map(([r,o])=>y.jsxs("div",{className:"flex justify-between text-xs border-b border-slate-800/60 pb-1",children:[y.jsx("span",{className:"text-slate-400 font-mono uppercase text-[11px]",children:r.replace(/([A-Z])/g," $1").trim()}),y.jsx("span",{className:"text-white font-semibold font-mono",children:o})]},r)),y.jsxs("div",{className:"flex justify-between text-xs pt-1",children:[y.jsx("span",{className:"text-slate-400 font-mono uppercase text-[11px]",children:"Last Maintenance"}),y.jsx("span",{className:"text-white font-semibold font-mono",children:s.lastMaintenance})]}),y.jsxs("div",{className:"flex justify-between text-xs",children:[y.jsx("span",{className:"text-slate-400 font-mono uppercase text-[11px]",children:"Operating Hours"}),y.jsxs("span",{className:"text-cyan-400 font-black font-mono",children:[s.operatingHours.toLocaleString()," hrs"]})]})]})]})]})}function pT(){const{machines:s}=sn();return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"LIVE SENSOR TELEMETRY"}),y.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Real-time multi-sensor readings across all monitored machines"}),y.jsx("div",{className:"overflow-x-auto",children:y.jsxs("table",{className:"w-full text-xs font-mono",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"border-b border-slate-700 text-slate-400 uppercase text-[10px] tracking-wider",children:[y.jsx("th",{className:"text-left pb-3 pr-4",children:"Machine"}),y.jsx("th",{className:"pb-3 px-2",children:"Status"}),y.jsx("th",{className:"pb-3 px-2",children:"Health"}),y.jsx("th",{className:"pb-3 px-2",children:"Temp °C"}),y.jsx("th",{className:"pb-3 px-2",children:"Vib mm/s"}),y.jsx("th",{className:"pb-3 px-2",children:"Current A"}),y.jsx("th",{className:"pb-3 px-2",children:"Freq Hz"}),y.jsx("th",{className:"pb-3 px-2",children:"NH₃ ppm"}),y.jsx("th",{className:"pb-3 px-2",children:"Anomaly"})]})}),y.jsx("tbody",{className:"divide-y divide-slate-800/60",children:s.map(e=>{const t=e.sensors;return y.jsxs("tr",{className:"hover:bg-slate-900/40 transition-colors",children:[y.jsxs("td",{className:"py-3 pr-4",children:[y.jsx("p",{className:"font-bold text-white text-xs",children:e.name}),y.jsx("p",{className:"text-slate-500 text-[10px]",children:e.id})]}),y.jsx("td",{className:"py-3 px-2 text-center",children:y.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-bold border ${e.status==="CRITICAL"?"badge-critical":e.status==="WARNING"?"badge-warning":"badge-normal"}`,children:e.status})}),y.jsxs("td",{className:"py-3 px-2 text-center font-black text-white",children:[e.healthScore,"%"]}),y.jsx("td",{className:`py-3 px-2 text-center font-bold ${t.temperature>90?"text-rose-400":t.temperature>80?"text-amber-400":"text-emerald-400"}`,children:t.temperature}),y.jsx("td",{className:`py-3 px-2 text-center font-bold ${t.vibration>7?"text-rose-400":t.vibration>4.5?"text-amber-400":"text-emerald-400"}`,children:t.vibration}),y.jsx("td",{className:`py-3 px-2 text-center font-bold ${t.current>24?"text-rose-400":t.current>18?"text-amber-400":"text-emerald-400"}`,children:t.current}),y.jsx("td",{className:`py-3 px-2 text-center font-bold ${Math.abs(t.frequency-50)>2?"text-amber-400":"text-emerald-400"}`,children:t.frequency}),y.jsx("td",{className:`py-3 px-2 text-center font-bold ${t.ammonia>50?"text-rose-400":t.ammonia>25?"text-amber-400":"text-emerald-400"}`,children:t.ammonia}),y.jsxs("td",{className:`py-3 px-2 text-center font-black ${e.anomalyScore>65?"text-rose-400":e.anomalyScore>40?"text-amber-400":"text-cyan-400"}`,children:[e.anomalyScore,"%"]})]},e.id)})})]})})]})}function mT(){const{machines:s}=sn(),e={CRITICAL:0,HIGH:1,MEDIUM:2,LOW:3},t=s.map(r=>{const o=r.sensors;let c="LOW",u="Normal operation",d="Continue scheduled monitoring.";return o.vibration>6&&o.temperature>85?(c="CRITICAL",u="Critical Bearing Cage Failure & Thermal Expansion",d="Initiate safe shutdown. Inspect bearing housing."):o.vibration>4.5?(c="HIGH",u="Motor Bearing Degradation & Misalignment",d="Inspect drive-end bearing within 6 hours."):o.temperature>82?(c="HIGH",u="Thermal Dissipation Loss / Overheating",d="Inspect cooling blower and ventilation fins."):o.current>18?(c="MEDIUM",u="Excessive Current / Mechanical Overload",d="Verify downstream mechanical load."):o.ammonia>25&&(c="HIGH",u="Hazardous Ammonia Exposure",d="Activate ventilation scrubbers immediately."),{...r,priority:c,issue:u,action:d,failureRisk:r.failureRisk}}).sort((r,o)=>(e[r.priority]??4)-(e[o.priority]??4));return y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"AI PREDICTIVE MAINTENANCE INSIGHTS"}),y.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Explainable AI analysis of sensor patterns and failure risk"}),t.map(r=>y.jsxs("div",{className:`glass-panel p-5 ${r.priority==="CRITICAL"?"glass-panel-glow-red":r.priority==="HIGH"?"glass-panel-glow-amber":""}`,children:[y.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 mb-3",children:[y.jsxs("div",{children:[y.jsx("p",{className:"font-black text-white",children:r.name}),y.jsxs("p",{className:"text-xs font-mono text-slate-400",children:[r.id," · ",r.location]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${r.priority==="CRITICAL"?"badge-critical animate-pulse":r.priority==="HIGH"?"badge-warning":r.priority==="MEDIUM"?"text-blue-400 border-blue-500/40 bg-blue-950/30":"badge-normal"}`,children:r.priority}),y.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Failure Risk: ",y.jsxs("span",{className:`font-black ${r.failureRisk>60?"text-rose-400":r.failureRisk>30?"text-amber-400":"text-emerald-400"}`,children:[r.failureRisk,"%"]})]})]})]}),y.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-3 border border-slate-800 mb-3",children:[y.jsx("p",{className:"text-[11px] font-mono font-bold text-cyan-400 uppercase mb-1",children:"🧠 Detected Pattern"}),y.jsx("p",{className:"text-sm text-slate-200 font-medium",children:r.issue})]}),y.jsxs("div",{className:"bg-blue-950/30 rounded-lg p-3 border border-blue-900/50",children:[y.jsx("p",{className:"text-[11px] font-mono font-bold text-blue-400 uppercase mb-1",children:"✅ Recommended Action"}),y.jsx("p",{className:"text-xs text-slate-300",children:r.action})]}),y.jsxs("div",{className:"flex gap-4 mt-3 text-[11px] font-mono text-slate-400",children:[y.jsxs("span",{children:["Temp: ",y.jsxs("span",{className:"text-white font-bold",children:[r.sensors.temperature,"°C"]})]}),y.jsxs("span",{children:["Vib: ",y.jsxs("span",{className:"text-white font-bold",children:[r.sensors.vibration," mm/s"]})]}),y.jsxs("span",{children:["Current: ",y.jsxs("span",{className:"text-white font-bold",children:[r.sensors.current," A"]})]}),y.jsxs("span",{children:["NH₃: ",y.jsxs("span",{className:"text-white font-bold",children:[r.sensors.ammonia," ppm"]})]})]})]},r.id))]})}function gT(){const{zones:s,machines:e}=sn(),t=Math.max(...e.map(c=>c.sensors.ammonia)),r=Math.max(...e.map(c=>c.sensors.temperature)),o=t>50?"CRITICAL":t>25?"WARNING":"SAFE";return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"WORKER SAFETY MONITOR"}),y.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Real-time environmental and safety hazard assessment"}),y.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[{label:"Overall Safety",value:o,icon:"🦺",color:o==="CRITICAL"?"text-rose-400":o==="WARNING"?"text-amber-400":"text-emerald-400"},{label:"Max Ammonia",value:`${t.toFixed(1)} ppm`,icon:"☁️",color:t>50?"text-rose-400":t>25?"text-amber-400":"text-emerald-400"},{label:"Max Temperature",value:`${r.toFixed(1)}°C`,icon:"🌡️",color:r>90?"text-rose-400":r>80?"text-amber-400":"text-emerald-400"},{label:"OSHA PEL Status",value:t<25?"COMPLIANT":"EXCEEDED",icon:"📋",color:t<25?"text-emerald-400":"text-rose-400"}].map(c=>y.jsxs("div",{className:"glass-panel p-4",children:[y.jsx("span",{className:"text-2xl",children:c.icon}),y.jsx("p",{className:`text-xl font-black font-mono mt-1 ${c.color}`,children:c.value}),y.jsx("p",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wide mt-1",children:c.label})]},c.label))}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map(c=>y.jsxs("div",{className:`glass-panel p-5 ${c.safetyStatus==="WARNING"?"glass-panel-glow-amber":""}`,children:[y.jsxs("div",{className:"flex items-center justify-between mb-3",children:[y.jsxs("div",{children:[y.jsx("p",{className:"font-bold text-white text-sm",children:c.name}),y.jsxs("p",{className:"text-[11px] font-mono text-slate-400",children:[c.machines," machines · ",c.alerts," active alerts"]})]}),y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${c.safetyStatus==="WARNING"?"badge-warning":"badge-normal"}`,children:c.safetyStatus})]}),y.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs font-mono mb-3",children:[y.jsxs("div",{className:"bg-slate-900/60 rounded p-2 text-center",children:[y.jsx("p",{className:"text-slate-500 text-[10px]",children:"AMMONIA"}),y.jsxs("p",{className:`font-black ${c.ammonia>25?"text-rose-400":c.ammonia>15?"text-amber-400":"text-emerald-400"}`,children:[c.ammonia," ppm"]})]}),y.jsxs("div",{className:"bg-slate-900/60 rounded p-2 text-center",children:[y.jsx("p",{className:"text-slate-500 text-[10px]",children:"TEMP"}),y.jsxs("p",{className:"font-black text-cyan-400",children:[c.temp,"°C"]})]}),y.jsxs("div",{className:"bg-slate-900/60 rounded p-2 text-center",children:[y.jsx("p",{className:"text-slate-500 text-[10px]",children:"HEALTH"}),y.jsxs("p",{className:`font-black ${c.health>75?"text-emerald-400":c.health>50?"text-amber-400":"text-rose-400"}`,children:[c.health,"%"]})]})]}),y.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-2.5 border border-slate-800",children:[y.jsx("p",{className:"text-[10px] font-mono font-bold text-cyan-400 uppercase mb-1.5",children:"Required PPE"}),y.jsx("div",{className:"flex flex-wrap gap-1",children:c.ppe.map(u=>y.jsx("span",{className:"text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700",children:u},u))})]})]},c.id))})]})}function _T(){const{alerts:s,acknowledgeAlert:e,createMaintenanceTask:t}=sn();return y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"ALERT CENTER"}),y.jsx("div",{className:"space-y-3",children:s.map(r=>y.jsxs("div",{className:`glass-panel p-5 ${r.severity==="CRITICAL"&&r.status==="ACTIVE"?"glass-panel-glow-red":""}`,children:[y.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 mb-3",children:[y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx("div",{className:`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${r.severity==="CRITICAL"?"bg-rose-500 animate-ping":r.severity==="WARNING"?"bg-amber-500":"bg-blue-400"}`}),y.jsxs("div",{children:[y.jsx("p",{className:"font-bold text-white text-sm",children:r.alertType}),y.jsxs("p",{className:"text-[11px] font-mono text-slate-400",children:[r.id," · ",r.machineId," · ",r.zone]})]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${r.severity==="CRITICAL"?"badge-critical":r.severity==="WARNING"?"badge-warning":"text-blue-400 border-blue-500/40 bg-blue-950/30"}`,children:r.severity}),y.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${r.status==="ACTIVE"?"text-rose-400 border-rose-500/40 bg-rose-950/30":"text-slate-400 border-slate-700"}`,children:r.status})]})]}),y.jsxs("div",{className:"bg-slate-900/60 rounded-lg p-3 border border-slate-800 mb-3 text-xs",children:[y.jsxs("p",{className:"text-slate-400",children:[y.jsx("span",{className:"font-bold text-cyan-400",children:"Sensor:"})," ",r.sensor]}),y.jsxs("p",{className:"text-slate-400 mt-1",children:[y.jsx("span",{className:"font-bold text-amber-400",children:"Value:"})," ",r.currentValue," ",y.jsxs("span",{className:"text-slate-500",children:["(Expected: ",r.expectedRange,")"]})]})]}),y.jsxs("div",{className:"bg-blue-950/30 rounded-lg p-3 border border-blue-900/50 text-xs text-slate-300 mb-3",children:["🤖 ",y.jsx("span",{className:"font-bold text-blue-400",children:"AI Recommendation:"})," ",r.aiRecommendation]}),r.status==="ACTIVE"&&y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onClick:()=>e(r.id),className:"text-xs px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-all",children:"✓ Acknowledge"}),y.jsx("button",{onClick:()=>t(r),className:"btn-cyber text-xs px-3 py-1.5 rounded-lg",children:"+ Create Work Order"})]})]},r.id))})]})}function vT(){const{maintenance:s}=sn();return y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"MAINTENANCE SCHEDULE"}),y.jsx("div",{className:"space-y-3",children:s.map(e=>y.jsxs("div",{className:"glass-panel p-5",children:[y.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3 mb-2",children:[y.jsxs("div",{children:[y.jsx("p",{className:"font-bold text-white",children:e.machineName}),y.jsxs("p",{className:"text-xs font-mono text-slate-400",children:[e.id," · ",e.machineId]})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${e.priority==="CRITICAL"?"badge-critical":e.priority==="HIGH"?"badge-warning":e.priority==="LOW"?"badge-normal":"text-blue-400 border-blue-500/40 bg-blue-950/30"}`,children:e.priority}),y.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${e.status==="COMPLETED"?"text-emerald-400 border-emerald-500/40 bg-emerald-950/30":e.status==="PENDING"?"text-rose-400 border-rose-500/40 bg-rose-950/30":"text-amber-400 border-amber-500/40 bg-amber-950/30"}`,children:e.status})]})]}),y.jsx("p",{className:"text-sm text-slate-300 mb-1",children:e.issue}),y.jsxs("p",{className:"text-xs text-slate-400",children:[y.jsx("span",{className:"text-cyan-400 font-bold",children:"Action:"})," ",e.recommendation]}),y.jsxs("p",{className:"text-[11px] font-mono text-slate-500 mt-2",children:["📅 ",e.scheduledDate]})]},e.id))})]})}function xT(){const{machines:s}=sn(),e=t=>(t.reduce((r,o)=>r+o,0)/t.length).toFixed(1);return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"RELIABILITY ANALYTICS"}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs("div",{className:"glass-panel p-5",children:[y.jsx("div",{className:"text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-4",children:"FLEET HEALTH DISTRIBUTION"}),s.map(t=>y.jsxs("div",{className:"mb-3",children:[y.jsxs("div",{className:"flex justify-between text-xs font-mono mb-1",children:[y.jsx("span",{className:"text-slate-300",children:t.name.substring(0,22)}),y.jsxs("span",{className:`font-bold ${t.healthScore>=75?"text-emerald-400":t.healthScore>=50?"text-amber-400":"text-rose-400"}`,children:[t.healthScore,"%"]})]}),y.jsx("div",{className:"h-2 bg-slate-800 rounded-full overflow-hidden",children:y.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${t.healthScore>=75?"bg-emerald-500":t.healthScore>=50?"bg-amber-500":"bg-rose-500"}`,style:{width:`${t.healthScore}%`}})})]},t.id))]}),y.jsxs("div",{className:"glass-panel p-5",children:[y.jsx("div",{className:"text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide mb-4",children:"SENSOR AVERAGES ACROSS FLEET"}),[{label:"Avg Temperature",value:`${e(s.map(t=>t.sensors.temperature))} °C`,color:"text-amber-400"},{label:"Avg Vibration",value:`${e(s.map(t=>t.sensors.vibration))} mm/s`,color:"text-cyan-400"},{label:"Avg Current",value:`${e(s.map(t=>t.sensors.current))} A`,color:"text-blue-400"},{label:"Avg Ammonia",value:`${e(s.map(t=>t.sensors.ammonia))} ppm`,color:"text-purple-400"},{label:"Avg Health Score",value:`${e(s.map(t=>t.healthScore))}%`,color:"text-emerald-400"},{label:"Avg Failure Risk",value:`${e(s.map(t=>t.failureRisk))}%`,color:"text-rose-400"}].map(t=>y.jsxs("div",{className:"flex justify-between py-2 border-b border-slate-800/60 text-xs font-mono",children:[y.jsx("span",{className:"text-slate-400",children:t.label}),y.jsx("span",{className:`font-black ${t.color}`,children:t.value})]},t.label))]})]})]})}function yT(){const{roiData:s}=sn();return y.jsxs("div",{className:"p-6 space-y-6",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"BUSINESS IMPACT & ROI"}),y.jsx("p",{className:"text-xs text-slate-400",children:"Illustrative financial analysis of AI Smart Retrofit vs full equipment replacement"}),y.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[{label:"Traditional Replacement",value:`₹${(s.traditionalReplacement/1e3).toFixed(0)}K`,color:"text-rose-400"},{label:"Retrofit Cost",value:`₹${(s.retrofitCost/1e3).toFixed(0)}K`,color:"text-cyan-400"},{label:"Capital Avoided",value:`₹${(s.capitalAvoidance/1e3).toFixed(0)}K`,color:"text-emerald-400"},{label:"Savings",value:`${s.savingsPercentage}%`,color:"text-amber-400"}].map(e=>y.jsxs("div",{className:"glass-panel p-4 text-center",children:[y.jsx("p",{className:`text-2xl font-black font-mono ${e.color}`,children:e.value}),y.jsx("p",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wide mt-1",children:e.label})]},e.label))}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.metrics.map(e=>y.jsxs("div",{className:"glass-panel p-5",children:[y.jsx("p",{className:"font-black text-white text-lg font-mono",children:e.value}),y.jsx("p",{className:"font-bold text-cyan-400 text-sm mt-0.5",children:e.label}),y.jsx("p",{className:"text-xs text-slate-400 mt-1",children:e.benchmark})]},e.label))}),y.jsx("p",{className:"text-[11px] text-slate-500 italic",children:s.disclaimer})]})}function ST(){return y.jsxs("div",{className:"p-6 space-y-4",children:[y.jsx("h2",{className:"text-xl font-black text-white mb-1",children:"SYSTEM SETTINGS"}),y.jsxs("div",{className:"glass-panel p-5 space-y-3 max-w-lg",children:[y.jsx("p",{className:"text-xs font-mono text-slate-400 uppercase font-bold",children:"API Configuration"}),[{label:"Backend API",value:"http://localhost:8000",status:"Connected"},{label:"Platform Version",value:"v1.0.0-industrial",status:"Stable"},{label:"Data Mode",value:"In-Memory Simulation Store",status:"Active"}].map(s=>y.jsxs("div",{className:"flex justify-between items-center py-2 border-b border-slate-800/60 text-xs",children:[y.jsx("span",{className:"font-mono text-slate-400",children:s.label}),y.jsxs("div",{className:"text-right",children:[y.jsx("p",{className:"font-bold text-white font-mono",children:s.value}),y.jsx("p",{className:"text-emerald-400 font-mono text-[10px]",children:s.status})]})]},s.label))]})]})}function MT(){const{toasts:s,removeToast:e}=sn();return y.jsx("div",{className:"fixed top-4 right-4 z-50 flex flex-col gap-3 w-80",children:s.map(t=>y.jsx("div",{className:`glass-panel p-4 shadow-lg border-l-4 ${t.severity==="CRITICAL"?"border-rose-500 bg-rose-950/60":t.severity==="WARNING"?"border-amber-500 bg-amber-950/40":"border-cyan-500 bg-cyan-950/30"}`,children:y.jsxs("div",{className:"flex items-start justify-between gap-2",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("p",{className:`text-xs font-bold ${t.severity==="CRITICAL"?"text-rose-300":t.severity==="WARNING"?"text-amber-300":"text-cyan-300"}`,children:t.title}),y.jsx("p",{className:"text-[11px] text-slate-300 mt-1 leading-tight",children:t.message}),t.action&&y.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:t.action})]}),y.jsx("button",{onClick:()=>e(t.id),className:"text-slate-500 hover:text-white text-lg leading-none shrink-0",children:"×"})]})},t.id))})}function ET(){const{activePage:s}=sn(),e={dashboard:y.jsx(qm,{}),machines:y.jsx(fT,{}),"machine-details":y.jsx(hT,{}),monitoring:y.jsx(pT,{}),predictions:y.jsx(mT,{}),safety:y.jsx(gT,{}),"safety-3d":y.jsx(dT,{}),alerts:y.jsx(_T,{}),maintenance:y.jsx(vT,{}),analytics:y.jsx(xT,{}),"business-impact":y.jsx(yT,{}),settings:y.jsx(ST,{})};return y.jsxs("div",{className:"flex flex-col min-h-screen",children:[y.jsx(R_,{}),y.jsx(P_,{}),y.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[y.jsx(N_,{}),y.jsx("main",{className:"flex-1 overflow-y-auto",children:e[s]||y.jsx(qm,{})})]}),y.jsx(MT,{}),y.jsx(F_,{}),y.jsx(O_,{})]})}function TT(){return y.jsx(C_,{children:y.jsx(ET,{})})}M_.createRoot(document.getElementById("root")).render(y.jsx(m_.StrictMode,{children:y.jsx(TT,{})}));
