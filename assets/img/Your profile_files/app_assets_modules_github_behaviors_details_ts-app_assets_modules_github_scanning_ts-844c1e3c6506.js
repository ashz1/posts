"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_scanning_ts"],{589:(e,t,n)=>{n.d(t,{O4:()=>f,jo:()=>d,Qp:()=>u});var i=n(57775),l=n(59753);let s="ontransitionend"in window;function o(e){return"height"===getComputedStyle(e).transitionProperty}function a(e,t){e.style.transition="none",t(),e.offsetHeight,e.style.transition=""}var r=n(96776);function c(e,t){if(e.classList.toggle("open",t),e.classList.toggle("Details--on",t),t){let t=e.querySelector(".js-details-initial-focus");t&&setTimeout(()=>{t.focus()},0)}for(let n of[...e.querySelectorAll(".js-details-target")].filter(t=>t.closest(".js-details-container")===e))n.setAttribute("aria-expanded",t.toString()),n.hasAttribute("data-aria-label-open")&&n.hasAttribute("data-aria-label-closed")&&n.setAttribute("aria-label",t?n.getAttribute("data-aria-label-open"):n.getAttribute("data-aria-label-closed"))}function u(e,t){let n=e.getAttribute("data-details-container")||".js-details-container",i=e.closest(n),l=t?.force??!i.classList.contains("open"),u=t?.withGroup??!1;!function(e,t){if(!s){t();return}let n=Array.from(e.querySelectorAll(".js-transitionable"));for(let t of(e.classList.contains("js-transitionable")&&n.push(e),n)){let e=o(t);t instanceof HTMLElement&&(t.addEventListener("transitionend",()=>{t.style.display="",t.style.visibility="",e&&a(t,function(){t.style.height=""})},{once:!0}),t.style.boxSizing="content-box",t.style.display="block",t.style.visibility="visible",e&&a(t,function(){t.style.height=getComputedStyle(t).height}),t.offsetHeight)}for(let e of(t(),n))if(e instanceof HTMLElement&&o(e)){let t=getComputedStyle(e).height;e.style.boxSizing="","0px"===t?e.style.height=`${e.scrollHeight}px`:e.style.height="0px"}}(i,()=>{c(i,l);let t=u?function(e,t){let n=e.getAttribute("data-details-container-group");return n?((0,r.uQ)(e,()=>{for(let i of[...document.querySelectorAll(".js-details-container")].filter(e=>e.getAttribute("data-details-container-group")===n))i!==e&&c(i,t)}),n):null}(i,l):null;Promise.resolve().then(()=>{!function(e,t){t.find(t=>{let n=Array.from(e.querySelectorAll(t)).findLast(e=>"none"!==window.getComputedStyle(e).display);if(n&&document.activeElement!==n)return n.focus(),!0})}(i,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"]),e.classList.contains("tooltipped")&&(e.classList.remove("tooltipped"),e.addEventListener("mouseleave",()=>{e.classList.add("tooltipped"),e.blur()},{once:!0})),i.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:l}})),t&&i.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:l,group:t}}))})})}function d(e){let t=e.getAttribute("data-details-container")||".js-details-container",n=e.closest(t).classList;return n.contains("Details--on")||n.contains("open")}function f(e){let t=!1,n=e.parentElement;for(;n;)n.classList.contains("Details-content--shown")&&(t=!0),n.classList.contains("js-details-container")&&(n.classList.toggle("open",!t),n.classList.toggle("Details--on",!t),t=!1),n=n.parentElement}(0,l.on)("click",".js-details-target",function(e){let t=e.altKey;u(e.currentTarget,{withGroup:t}),e.preventDefault()}),(0,i.Z)(function({target:e}){e&&f(e)})},57775:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(37083),l=n(21118);let s=[],o=0;function a(e){!async function(){s.push(e),await i.x,function(){let e=o;o=s.length,r(s.slice(e),null,window.location.href)}()}()}function r(e,t,n){let i=window.location.hash.slice(1),l={oldURL:t,newURL:n,target:i?document.getElementById(i):null};for(let t of e)t.call(null,l)}a.clear=()=>{s.length=o=0};let c=window.location.href;window.addEventListener("popstate",function(){c=window.location.href}),window.addEventListener("hashchange",function(e){let t=window.location.href;try{r(s,e.oldURL||c,t)}finally{c=t}});let u=null;document.addEventListener(l.Q.START,function(){u=window.location.href}),document.addEventListener(l.Q.SUCCESS,function(){r(s,u,window.location.href)})},49933:(e,t,n)=>{var i=n(4034),l=n(59753);(0,l.on)("click",".js-scanning-reopen-button-disabled",function(e){e.preventDefault()}),(0,l.on)("change",".js-scanning-alert-check",function({currentTarget:e}){let t=e.closest(".js-scanning-alert-list"),n=null!=t.querySelector(".js-scanning-alert-check:checked"),l=t.querySelector(".js-scanning-filter-options"),s=t.querySelector(".js-scanning-alert-bulk-actions"),o=s?.querySelector("[role=status]"),a=t.querySelector(".js-scanning-alert-links");if(l&&(l.style.visibility=n?"hidden":"visible"),s){let e=s.hidden===n;s.hidden=!n,e&&o&&(0,i.N)(o)}a&&(a.style.visibility=n?"hidden":"visible"),function(e){let t=!1,n=e.querySelectorAll(".js-scanning-fixed-alert-numbers"),i=0!==n.length?JSON.parse(n[0].getAttribute("data-numbers")||"[]"):[];for(let n of e.querySelectorAll(".js-scanning-bulk-action-items"))for(let l of(n.textContent="",e.querySelectorAll(".js-scanning-alert-list [data-check-all-item]:checked")))t||(t=-1!==i.indexOf(parseInt(l.value))),n.appendChild(function(e){let t=document.createElement("input");return t.setAttribute("type","hidden"),t.setAttribute("name",e.name),t.setAttribute("value",e.value),t}(l));for(let n of e.querySelectorAll(".js-scanning-reopen-button"))n.hidden=t;for(let n of e.querySelectorAll(".js-scanning-reopen-button-disabled"))n.hidden=!t}(t)}),(0,l.on)("click",".js-scanning-code-path-menu-item",function(e){if(null===e.currentTarget||!(e.currentTarget instanceof Element))return;let t=e.currentTarget.getAttribute("data-target-code-path");for(let e of document.querySelectorAll(".js-scanning-code-path-menu-item"))e.ariaChecked="false";for(let n of(e.currentTarget.ariaChecked="true",document.querySelectorAll(".js-scanning-code-path")))n.hidden=t!==n.getAttribute("data-code-path")},{capture:!0})},4034:(e,t,n)=>{n.d(t,{N:()=>o,x:()=>a});var i=n(930),l=n(14203),s=n(28907);function o(e,t){(0,l.cr)("primer_live_region_element")&&t?.element===void 0?(0,s.Nz)(e,{politeness:t?.assertive?"assertive":"polite"}):a((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function a(e,t){let{assertive:n,element:o}=t??{};(0,l.cr)("primer_live_region_element")&&void 0===o?(0,s.xQ)(e,{politeness:n?"assertive":"polite"}):function(e,t,n){let l=n??i.n4?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");l&&(l.textContent===e?l.textContent=`${e}\u00A0`:l.textContent=e)}(e,n,o)}},21118:(e,t,n)=>{n.d(t,{Q:()=>i});let i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_scanning_ts-76ea6a3f960d.js.map