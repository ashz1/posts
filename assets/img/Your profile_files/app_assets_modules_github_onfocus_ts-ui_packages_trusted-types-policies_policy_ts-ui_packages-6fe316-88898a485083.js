"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316"],{73444:(e,t,n)=>{n.d(t,{ZG:()=>c,q6:()=>l,w4:()=>s});var r=n(8439);let o=!1,i=new r.Z;function a(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of i.matches(t))e.data.call(null,t)}function c(e,t){o||(o=!0,document.addEventListener("focus",a,!0)),i.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function s(e,t,n){function r(t){let o=t.currentTarget;o&&(o.removeEventListener(e,n),o.removeEventListener("blur",r))}c(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function l(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}c(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},72821:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){return`${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`}n.d(t,{S:()=>o})},23865:(e,t,n)=>{n.d(t,{eK:()=>h});var r=n(82918),o=n(84700),i=n(28382),a=n(72821),c=n(2992),s=n(930),l=n(14203),u=n(14220);let f=!1,d=0,m=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function h(e,t={}){if((0,l.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(v.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(E({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:w(n),catalogService:void 0},t));return}y(e)||g(E(S(e),t))}else y(e)||g(E(S(e),t))}async function g(e){if(!(!b&&!f&&d<10&&(0,o.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>T.test(e.filename)||T.test(e.function))){f=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function S(e){return{type:e.name,value:e.message,stacktrace:w(e),catalogService:e.catalogService}}function E(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}()||void 0,bundler:c.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function w(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let T=/(chrome|moz|safari)-extension:\/\//,b=!1;s.iG?.addEventListener("pageshow",()=>b=!1),s.iG?.addEventListener("pagehide",()=>b=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{h(e.data.error)});let v=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},27295:(e,t,n)=>{let r;n.d(t,{YT:()=>d,qP:()=>m,yM:()=>p});var o=n(88149),i=n(64307),a=n(31248),c=n(19963);let{getItem:s}=(0,a.Z)("localStorage"),l="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function f(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(l)&&(t[e.replace(l,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,c.B)().toString(),Object.assign(t,e)}function d(e){r?.sendPageView(f(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(f(o),r.sendEvent(e||"unknown",f(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},69149:(e,t,n)=>{n.d(t,{LS:()=>o,cl:()=>i,rV:()=>r});let{getItem:r,setItem:o,removeItem:i}=(0,n(31248).Z)("sessionStorage")},14220:(e,t,n)=>{n.d(t,{Ak:()=>S,CI:()=>b,Gj:()=>y,J$:()=>T,Nb:()=>v,Nt:()=>E,OE:()=>h,U6:()=>d,Wl:()=>g,XL:()=>f,jN:()=>o,pS:()=>m,sj:()=>p,vu:()=>_,wG:()=>L,wP:()=>w});var r=n(69149);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",c="soft-nav:referrer",s="soft-nav:marker",l="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function f(){(0,r.LS)(s,"0"),(0,r.cl)(c),(0,r.cl)(i),(0,r.cl)(a),(0,r.cl)(l),(0,r.cl)(u)}function d(e){(0,r.LS)(s,e)}function m(){(0,r.LS)(s,"0")}function p(){let e=(0,r.rV)(s);return e&&"0"!==e}function y(){return(0,r.rV)(s)}function h(){return!!g()}function g(){return(0,r.rV)(i)}function S(e){(0,r.LS)(i,e||o),(0,r.LS)(a,window.location.href)}function E(){(0,r.LS)(c,window.location.href)}function w(){return(0,r.rV)(c)||document.referrer}function T(){let e=v();e?(0,r.LS)(l,e):(0,r.cl)(l)}function b(){return(0,r.rV)(l)}function v(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function _(e){(0,r.LS)(u,e)}function L(){return(0,r.rV)(u)}},84165:(e,t,n)=>{n.d(t,{O:()=>l,d:()=>TrustedTypesPolicyError});var r=n(14203),o=n(19963),i=n(23865),a=n(27856),c=n.n(a),s=n(27295);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let l={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:a=!1,sanitize:l,silenceErrorReporting:u=!1}){try{if((0,r.cr)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return l&&new Promise(e=>{let n=window.performance.now(),r=c().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let a=Error("Trusted Types policy output sanitized"),c=a.stack?.slice(0,1e3),l=i.slice(0,250);(0,s.qP)("trusted_types_policy.sanitize",{policyName:t,output:l,stack:c,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return n}}},63334:(e,t,n)=>{n.d(t,{ZO:()=>u});var r,o=n(930),i=n(19963);function a(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let c={createHTML:a("createHTML"),createScript:a("createScript"),createScriptURL:a("createScriptURL")},s=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),l=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...c,...t})},u={createPolicy:(e,t)=>{if(s.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),s.get(e);{let n=Object.freeze(l.createPolicy(e,t));return s.set(e,n),n}}},f=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||f||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),f=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_onfocus_ts-ui_packages_trusted-types-policies_policy_ts-ui_packages-6fe316-58f2c95db5d0.js.map