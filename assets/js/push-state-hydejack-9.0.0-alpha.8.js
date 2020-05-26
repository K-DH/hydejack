/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.0-alpha.8 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(e,t,r){"use strict";r.r(t);var a=r(88),n=r(103),o=r(203),i=r(216),c=r(171),s=r(20),l=r(166),p=r(104),u=r(204),h=r(105),b=r(86),d=r(200),f=r(170),y=r(102),O=r(3),m=r(180),j=r.n(m),g=r(186),v=r.n(g),w=r(89),S=r(174),E=r(217),P=r(202),C=r(108),L=e=>{var{background:t,color:r,image:a,overlay:n}=e;return"".concat(r).concat(a||t).concat(""===n?"overlay":"")};function k(e){var{protocol:t,host:r}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==a.protocol||r!==a.host}class R{constructor(e){var t=document.getElementById("_main"),r=document.getElementById("_pageStyle"),a=Array.from(document.styleSheets).find(e=>e.ownerNode===r)||{};this.sidebar=document.getElementById("_sidebar"),this.fadeDuration=e,this.rules=a.cssRules||a.rules,this.prevHash=L(v()(t)),this.themeColorEl=document.querySelector('meta[name="theme-color"]')}fetchImage2(e){var{background:t,image:r}=e;if(t||!r||""===r||"none"===r)return Object(w.a)(null);var a=new URL(r,window.location);return Object(E.a)({method:"GET",responseType:"blob",url:a,crossDomain:k(a),headers:{Accept:"image/*"}}).pipe(Object(s.a)(e=>{var{response:t}=e;return URL.createObjectURL(t)}),Object(P.a)(()=>Object(w.a)(r)))}fetchImage(e){var t=v()(e),{background:r,color:a,image:n,overlay:o}=t,i=L(t);return i===this.prevHash?Object(S.b)():this.fetchImage2(t).pipe(Object(s.a)(e=>{var c=document.createElement("div");return c.classList.add("sidebar-bg"),"none"!==n&&""===o&&c.classList.add("sidebar-overlay"),r?c.style.background=r:(c.style.backgroundColor=a,e&&(c.style.backgroundImage="url(".concat(e,")"),c.objectURL=e)),[c,t,i]}))}updateStyle(){var{color:e="#4fb1ba",themeColor:t="#193747"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.themeColorEl&&window.setTimeout(()=>this.themeColorEl.content=t,250),this.rules)try{var r=j()(e),a=j()(t),n=r.darken(.1),o=j.a.hsl(a.hue(),10,20),i=j.a.hsl(a.hue(),10,25),c=r.fade(.5);this.rules[0].style.textDecorationColor=c,this.rules[0].style.borderColor=c,this.rules[1].style.textDecorationColor=e,this.rules[1].style.borderColor=e,this.rules[2].style.outlineColor=e,this.rules[3].style.backgroundColor=e,this.rules[3].style.borderColor=e,this.rules[4].style.boxShadow="0 0 0 3px ".concat(r.fade(.5)),this.rules[5].style.backgroundColor=n,this.rules[5].style.borderColor=n,this.rules[6].style.backgroundColor=e,this.rules[6].style.borderColor=e,this.rules[7].style.backgroundColor=n,this.rules[7].style.borderColor=n,this.rules[8].cssRules[0].style.setProperty("--body-bg",o),this.rules[8].cssRules[0].style.setProperty("--border-color",i),this.rules[9].cssRules[0].style.setProperty("--body-bg",o),this.rules[9].cssRules[0].style.setProperty("--border-color",i),this.rules[this.rules.length-1].style.backgroundColor=e}catch(e){0}}fade(e,t){var[r]=e,[a,n,o]=t;return r.parentNode.insertBefore(a,r.nextElementSibling),this.updateStyle(n),this.prevHash=o,Object(O.c)(a,[{opacity:0},{opacity:1}],{duration:this.fadeDuration,easing:"ease"}).pipe(Object(C.a)(()=>{r.objectURL&&URL.revokeObjectURL(r.objectURL),r.parentNode.removeChild(r)}))}}var q=r(169);var A,N=["title","projects"];function M(e,t,r,i){var c=e.pipe(Object(q.a)(e=>{var{flipType:t}=e;return!N.includes(t)}));return Object(n.a)(function(e,t,r,a){var{animationMain:n,settings:i}=a;if(!n)return e;var c=e.pipe(Object(q.a)(e=>{var{flipType:t}=e;return"title"===t}),Object(b.a)(e=>{var{anchor:t}=e;if(!t)return Object(w.a)({});var r=document.createElement("h1");r.classList.add("page-title"),r.textContent=t.textContent,r.style.transformOrigin="left top";var a=n.querySelector(".page");if(!a)return Object(w.a)({});O.f.call(a),a.appendChild(r),n.style.position="fixed",n.style.opacity=1;var o=t.getBoundingClientRect(),c=r.getBoundingClientRect(),s=parseInt(getComputedStyle(t).fontSize,10),l=parseInt(getComputedStyle(r).fontSize,10),u=o.left-c.left,h=o.top-c.top,b=s/l;t.style.opacity=0;var d=[{transform:"translate3d(".concat(u,"px, ").concat(h,"px, 0) scale(").concat(b,")")},{transform:"translate3d(0, 0, 0) scale(1)"}];return Object(O.c)(r,d,i).pipe(Object(p.a)({complete(){n.style.position="absolute"}}))}));return e.pipe(Object(b.a)(e=>{var{flipType:a}=e;return Object(o.a)(t.pipe(Object(q.a)(()=>"title"===a),Object(s.a)(e=>{var{replaceEls:[t]}=e,r=t.querySelector(".page-title, .post-title");return r&&(r.style.opacity=0),r})),r,e=>e).pipe(Object(p.a)(e=>{e&&(e.style.opacity=1),n.style.opacity=0}),Object(C.a)(()=>{n.style.opacity=0}))})).subscribe(),c}(e,t,r,i),function(e,t,r,n){var{animationMain:i,settings:c}=n;if(!i)return e;var s=e.pipe(Object(q.a)(e=>{var{flipType:t}=e;return"project"===t}),Object(b.a)(e=>{var{anchor:t}=e,r=t.querySelector(".flip-project-img");if(!t||!r)return Object(w.a)({});var a=i.querySelector(".page");if(!a)return Object(w.a)({});var n=t.parentNode.querySelector(".flip-project-title"),o=n&&n.textContent||"|",s=document.createElement("h1");s.classList.add("page-title"),s.style.opacity=0,s.textContent=o;var l=document.createElement("div");l.classList.add("post-date"),l.classList.add("heading"),l.style.opacity=0,l.textContent="|",O.f.call(a),a.appendChild(s),a.appendChild(l);var u=document.createElement("div");u.classList=r.classList,u.classList.remove("project-card-img"),r.parentNode.insertBefore(u,r),r.classList.add("lead"),r.style.transformOrigin="left top",a.appendChild(r),i.style.position="fixed",i.style.opacity=1;var h=u.getBoundingClientRect(),b=r.getBoundingClientRect(),d=h.left-b.left,f=h.top-b.top,y=h.width/b.width,m=[{transform:"translate3d(".concat(d,"px, ").concat(f,"px, 0) scale(").concat(y,")")},{transform:"translate3d(0, 0, 0) scale(1)"}];return Object(O.c)(r,m,c).pipe(Object(p.a)({complete(){i.style.position="absolute"}}))}));return e.pipe(Object(b.a)(e=>{var{flipType:n}=e;return t.pipe(Object(q.a)(()=>"project"===n),Object(b.a)(e=>{var{replaceEls:[t]}=e,n=t.querySelector(".aspect-ratio");n&&(n.style.opacity=0);var c=n&&n.querySelector("img");return Object(o.a)(c?Object(a.a)(c,"load"):Object(w.a)({}),r).pipe(Object(p.a)(()=>(n&&(n.style.opacity=1),i.style.opacity=0)),Object(b.a)(()=>null!=c?Object(O.c)(i,[{opacity:1},{opacity:0}],{duration:500}):Object(w.a)({})),Object(C.a)(()=>i.style.opacity=0))}))})).subscribe(),s}(e,t,r,i),c)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t,r,a,n,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,n)}(A=function*(){yield Promise.all([..."fetch"in window?[]:[r.e(2).then(r.bind(null,214))],..."customElements"in window?[]:[r.e(11).then(r.bind(null,207))],..."animate"in Element.prototype?[]:[r.e(10).then(r.t.bind(null,209,7))],..."IntersectionObserver"in window?[]:[r.e(3).then(r.t.bind(null,210,7))]]),yield O.q;var e=[{opacity:1},{opacity:0}],t=[{opacity:0,transform:"translateY(-3rem)"},{opacity:1,transform:"translateY(0)"}],m={duration:350,easing:"ease-out"};function j(e){var t=Object(O.k)("_permalink-template"),r=t.querySelector(".permalink");requestAnimationFrame(()=>(r.href="#".concat(e.id),e.appendChild(t)))}function g(e,t,r){var a=Object(O.k)(t);return a.querySelector(".nav-btn").addEventListener("click",r),e.appendChild(a),e.lastElementChild}function v(t,r){var{main:a}=t;return Object(O.c)(a,e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m,{fill:"forwards"})).pipe(Object(c.a)({main:a}))}var w=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,S=document.getElementsByTagName("hy-push-state")[0],E=(document.getElementsByTagName("hy-drawer")[0],document.querySelector("#_navbar > .content > .nav-btn-bar")),P=document.querySelector("link[rel=canonical]"),C=document.querySelector("meta[name=description]"),L=function(e){var t=Object(O.k)("_animation-template");return e.parentNode.insertBefore(t,e),e.previousElementSibling}(S),k=function(e){var t=Object(O.k)("_loading-template");return e.appendChild(t),e.lastElementChild}(E);w&&(g(E,"_back-template",()=>window.history.back()),g(E,"_forward-template",()=>window.history.forward()));var q=(e,t)=>Object(a.a)(S,e).pipe(Object(s.a)(e=>{var{detail:t}=e;return t}),t?Object(s.a)(t):e=>e,Object(l.a)()),A=q("hy-push-state-start",e=>{return Object.assign(e,{flipType:(t=e.anchor,t&&t.classList?t.classList.contains("flip-title")?"title":t.classList.contains("flip-project")?"project":t.getAttribute&&t.getAttribute("data-flip"):null)});var t}),N=q("hy-push-state-ready"),U=q("hy-push-state-after"),_=q("hy-push-state-progress"),T=q("hy-push-state-networkerror"),I=A.pipe(Object(s.a)(e=>Object.assign(e,{main:document.getElementById("_main")})),Object(p.a)(e=>{var{main:t}=e;return t.style.pointerEvents="none"}),Object(u.a)(e=>v(e)),Object(p.a)(e=>{var{main:t}=e;return O.f.call(t)}),Object(l.a)());_.subscribe(()=>k.style.display="block"),N.pipe(Object(h.a)({replaceEls:[document.getElementById("_main")]})).subscribe(e=>{var{replaceEls:[t]}=e;t.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(j),k.style.display="none";var r=t.querySelector("#markdown-toc");r&&r.classList.add("toc-hide")}),U.pipe(Object(h.a)({replaceEls:[document.getElementById("_main")],documentFragment:document})).subscribe(e=>{var{replaceEls:[t],documentFragment:r}=e,a=r.querySelector("link[rel=canonical]");P&&a&&(P.href=a.href);var n=r.querySelector("meta[name=description]");C&&n&&(C.content=n.content),t.querySelectorAll("li[id^='fn:']").forEach(e=>e.tabIndex=0),t.querySelectorAll("a[href^='#fn:']").forEach(e=>e.addEventListener("click",e=>document.getElementById(e.currentTarget.hash.substr(1)).focus())),t.querySelectorAll("pre, table:not(.highlight), .katex-display, .break-layout").forEach(e=>e.addEventListener("touchstart",t=>e.scrollLeft>0&&t.stopPropagation(),{passive:!1}))});var H=U.pipe(Object(b.a)((function(e){var{replaceEls:[r],flipType:a}=e;return Object(O.c)(r,t,m).pipe(Object(c.a)({main:r,flipType:a}))})),Object(l.a)()),B=M(A,N,Object(n.a)(H,T),{animationMain:L,settings:m}).pipe(Object(l.a)());A.pipe(Object(b.a)(e=>{var t=Object(o.a)(Object(i.a)(350),I,B).toPromise();return e.transitionUntil(t),t})).subscribe(),I.subscribe(),B.subscribe();var $=new R(2e3);U.pipe(Object(b.a)(e=>{var{replaceEls:[t]}=e;return Object(o.a)($.fetchImage(t),H,e=>e).pipe(Object(d.a)(A))}),Object(h.a)([document.querySelector(".sidebar-bg")]),Object(f.a)(),Object(y.a)(e=>{var[t,r]=e;return $.fade(t,r)})).subscribe(),H.pipe(Object(h.a)({main:document.getElementById("_main")}),Object(p.a)(e=>{var{main:t}=e,r=t.querySelector("#markdown-toc");r&&(r.classList.remove("toc-hide"),r.classList.add("toc-show"))})).subscribe(),T.pipe(Object(b.a)(e=>{var{url:r}=e;k.style.display="none";var a=document.getElementById("_main");return a.style.pointerEvents="",O.f.call(L.querySelector(".page")),O.f.call(a),function(e,t){var{pathname:r}=t,a=Object(O.k)("_error-template"),n=a.querySelector(".this-link");n&&(n.href=r,n.textContent=r),e.appendChild(a),e.lastElementChild}(a,r),Object(O.c)(a,t,m)})).subscribe(),Promise.resolve().then(r.bind(null,196)),window._pushState=S},function(){var e=this,t=arguments;return new Promise((function(r,a){var n=A.apply(e,t);function o(e){U(n,r,a,o,i,"next",e)}function i(e){U(n,r,a,o,i,"throw",e)}o(void 0)}))})()},196:function(e,t,r){"use strict";r.r(t),r.d(t,"HyPushState",(function(){return me}));var a,n=r(175),o=r(63),i=r(88),c=r(103),s=r(213),l=r(199),p=r(201),u=r(20),h=r(169),b=r(104),d=r(105),f=r(170),y=r(166),O=r(212),m=r(171),j=r(106),g=r(86),v=r(198),w=r(202),S=r(200),E=r(87),P=r(2),C=r(205);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return P.a.create(r=>{var a=new AbortController,{signal:n}=a,o=null;return fetch(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{signal:n})).then(e=>{o=e,r.next(e),r.complete()}).catch(e=>r.error(e)),()=>{o||a.abort()}})}function q(e){var{protocol:t,host:r}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==a.protocol||r!==a.host}function A(){return window.pageYOffset||document.body.scrollTop}!function(e){e.Init="init",e.Hint="hint",e.Push="push",e.Pop="pop"}(a||(a={}));var N=(e,t)=>(e.matches||e.msMatchesSelector).call(e,t);function M(e){return e&&""===e.target}function x(e,t){var{url:r,anchor:a}=e;return M(a)&&!q(r,t)&&!function(e){var{hash:t,origin:r,pathname:a}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return""!==t&&r===n.origin&&a===n.pathname}(r,t)}function D(e){var{cause:t,url:{pathname:r,hash:n},oldURL:{pathname:o}}=e;return r===o&&(t===a.Pop||t===a.Push&&""!==n)}var U=r(89),_=r(203),T=r(215);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ${constructor(e){this.parent=e}get animPromise(){return this.parent.animPromise}fetchPage(e){return R(e.url.href,{method:"GET",mode:"cors",headers:{Accept:"text/html"}}).pipe(Object(g.a)(e=>e.text()),Object(u.a)(t=>H({},e,{response:t})),Object(w.a)(t=>(console.log(t),Object(U.a)(H({},e,{error:t,response:null})))))}selectPrefetch(e,t,r){var{href:a}=e;return a===t.url.href&&null==t.error?Object(U.a)(t):r.pipe(Object(T.a)(1))}getResponse(e,t,r){return Object(_.a)(this.selectPrefetch(t.url,r,e),this.animPromise,e=>H({},e,{},t))}}var F=r(62),V=r(206),W=r(108);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class G{constructor(e){this.parent=e}get scriptSelector(){return this.parent.scriptSelector}removeScriptTags(e){var t=[];return e.forEach(e=>e.querySelectorAll(this.scriptSelector).forEach(e=>{var r=[e,e.previousSibling];e.parentNode.removeChild(e),t.push(r)})),t}reinsertScriptTags(e){if(!this.scriptSelector)return Promise.resolve(e);var{scripts:t}=e,r=document.write;return Object(F.a)(t).pipe(Object(V.a)(e=>this.insertScript(e)),Object(w.a)(t=>Object(U.a)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{error:t}))),Object(W.a)(()=>document.write=r),Object(m.a)(e)).toPromise()}insertScript(e){var[t,r]=e;return document.write=function(){for(var e=document.createElement("div"),t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.innerHTML=a.join(),Array.from(e.childNodes).forEach(e=>{r.parentNode.insertBefore(e,r.nextSibling)})},new Promise((e,a)=>{""!==t.src?(t.addEventListener("load",e),t.addEventListener("error",a),r.parentNode.insertBefore(t,r.nextSibling)):(r.parentNode.insertBefore(t,r.nextSibling),e())})}}function J(e,t){e.forEach(e=>{e.querySelectorAll("[href]").forEach(K("href",t)),e.querySelectorAll("[src]").forEach(K("src",t)),e.querySelectorAll("img[srcset]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/\s*,\s*/).map(e=>{var r=e.split(/\s+/);return r[0]=new URL(r[0],t).href,r.join(" ")}).join(", "))}catch(e){}}}("srcset",t)),e.querySelectorAll("blockquote[cite]").forEach(K("cite",t)),e.querySelectorAll("del[cite]").forEach(K("cite",t)),e.querySelectorAll("ins[cite]").forEach(K("cite",t)),e.querySelectorAll("q[cite]").forEach(K("cite",t)),e.querySelectorAll("img[longdesc]").forEach(K("longdesc",t)),e.querySelectorAll("frame[longdesc]").forEach(K("longdesc",t)),e.querySelectorAll("iframe[longdesc]").forEach(K("longdesc",t)),e.querySelectorAll("img[usemap]").forEach(K("usemap",t)),e.querySelectorAll("input[usemap]").forEach(K("usemap",t)),e.querySelectorAll("object[usemap]").forEach(K("usemap",t)),e.querySelectorAll("form[action]").forEach(K("action",t)),e.querySelectorAll("button[formaction]").forEach(K("formaction",t)),e.querySelectorAll("input[formaction]").forEach(K("formaction",t)),e.querySelectorAll("video[poster]").forEach(K("poster",t)),e.querySelectorAll("object[data]").forEach(K("data",t)),e.querySelectorAll("object[codebase]").forEach(K("codebase",t)),e.querySelectorAll("object[archive]").forEach(function(e,t){return r=>{try{r.setAttribute(e,r.getAttribute(e).split(/[\s,]+/).map(e=>new URL(e,t).href).join(", "))}catch(e){}}}("archive",t))})}function K(e,t){return r=>{try{r.setAttribute(e,new URL(r.getAttribute(e),t).href)}catch(e){}}}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ee{constructor(e){this.parent=e,this.scriptManager=new G(e)}get el(){return this.parent.el}get replaceSelector(){return this.parent.replaceSelector}get scriptSelector(){return this.parent.scriptSelector}getTitle(e){return(e.querySelector("title")||{textContent:""}).textContent}getReplaceElements(e){if(this.replaceSelector)return this.replaceSelector.split(",").map(t=>e.querySelector(t));if(this.el.id)return[e.getElementById(this.el.id)];var t=Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);return[e.querySelectorAll(this.el.tagName)[t]]}responseToContent(e){try{var{response:t}=e,r=(o=t,document.createRange().createContextualFragment(o)),a=this.getTitle(r),n=this.getReplaceElements(r);return Q({},e,{documentFragment:r,title:a,replaceEls:n,scripts:this.scriptSelector?this.scriptManager.removeScriptTags(n):[]})}catch(e){console.error(e)}var o}replaceContentWithSelector(e){this.replaceSelector.split(",").map(e=>document.querySelector(e)).forEach((t,r)=>t.parentNode.replaceChild(e[r],t))}replaceContentWholesale(e){var[t]=e;this.el.innerHTML=t.innerHTML}replaceContent(e){this.replaceSelector?this.replaceContentWithSelector(e):this.replaceContentWholesale(e)}updateDOM(e){try{var{replaceEls:t}=e;q(this.parent)&&J(t,this.parent.href),this.replaceContent(t)}catch(t){throw Q({},e,{error:t})}}reinsertScriptTags(e){return this.scriptManager.reinsertScriptTags(e)}}var te=r(102),re=r(69),ae=e=>Array.prototype.concat.apply([],e),ne=e=>({addedNodes:new Set(ae(e.map(e=>Array.from(e.addedNodes)))),removedNodes:new Set(ae(e.map(e=>Array.from(e.removedNodes))))});class oe{setupEventListeners(){var e=Object(i.a)(this.el,"click").pipe(Object(u.a)(e=>{var t=function(e,t){for(var r=e;null!=r;){if(N(r,t))return r;r=r.parentNode instanceof Element?r.parentNode:null}return null}(e.target,this.linkSelector);if(t instanceof HTMLAnchorElement)return[e,t]}),Object(h.a)(e=>!!e)),t=(e,t)=>e.matches(t)?Object(U.a)(e):Object(F.a)(e.querySelectorAll(t));return{hintEvent$:this.$.linkSelector.pipe(Object(g.a)(e=>{var r,a,n,o=new Map,s=e=>{o.has(e)||o.set(e,(e=>Object(c.a)(Object(i.a)(e,"mouseenter",{passive:!0}),Object(i.a)(e,"touchstart",{passive:!0}),Object(i.a)(e,"focus",{passive:!0})).pipe(Object(u.a)(t=>[t,e])))(e))},l=e=>{o.delete(e)};return(a=this.el,n={childList:!0,subtree:!0},P.a.create(e=>{var t=new MutationObserver(t=>t.forEach(t=>e.next(t)));return t.observe(a,n),()=>{t.disconnect()}})).pipe(Object(d.a)({addedNodes:[this.el],removedNodes:[]}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t=>{var r=[];return t.pipe(Object(b.a)(e=>r.push(e)),Object(C.a)(e),Object(u.a)(()=>r),Object(b.a)(()=>r=[]))}}(500),Object(u.a)(ne),Object(g.a)(r=>{var{addedNodes:a,removedNodes:n}=r;return Object(F.a)(n).pipe(Object(h.a)(e=>e instanceof Element),Object(te.a)(r=>t(r,e)),Object(b.a)(l)).subscribe(),Object(F.a)(a).pipe(Object(h.a)(e=>e instanceof Element),Object(te.a)(r=>t(r,e)),Object(b.a)(s)).subscribe(),Object(F.a)(o.values()).pipe(Object(re.a)())}),(r=this.$.prefetch,e=>r.pipe(Object(g.a)(t=>t?e:E.a))))})),pushEvent$:e}}}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class le{constructor(e){this.parent=e}get animPromise(){return this.parent.animPromise}set animPromise(e){this.parent.animPromise=e}get duration(){return this.parent.duration}onStart(e){var t;this.animPromise=(t=this.duration,new Promise(e=>setTimeout(e,t)));this.parent.fireEvent("start",{detail:ce({},e,{transitionUntil:e=>{this.animPromise=e}})})}emitDOMError(e){var{replaceElMissing:t,url:r}=e;t?(window.history.back(),setTimeout(()=>document.location.assign(r),100)):this.parent.fireEvent("error",{detail:e})}emitNetworkError(e){this.parent.fireEvent("networkerror",{detail:e})}emitError(e){this.parent.fireEvent("error",{detail:e})}emitReady(e){this.parent.fireEvent("ready",{detail:e})}emitAfter(e){this.parent.fireEvent("after",{detail:e})}emitProgress(e){this.parent.fireEvent("progress",{detail:e})}emitLoad(e){this.parent.fireEvent("load",{detail:e})}}function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){he(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function he(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}window.HashChangeEvent=window.HashChangeEvent||function(e){var{oldURL:t="",newURL:r=""}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new CustomEvent(e);return a.oldURL=t,a.newURL=r,a};class be{constructor(e){this.updateHistoryScrollPosition=()=>{if(!q(this.parent)){var e=this.assignScrollPosition(history.state||{});history.replaceState(e,document.title)}},this.parent=e}updateHistoryState(e){var{cause:t,replace:r,url:n,oldURL:o}=e;if(!q(this.parent))switch(t){case a.Init:case a.Push:var{histId:i}=this.parent;if(r||n.href===location.href){var c=ue({},history.state,{[i]:{}});history.replaceState(c,document.title,n.href)}else history.pushState({[i]:{}},document.title,n.href);case a.Pop:this.parent.simulateHashChange&&function(e,t){e.hash!==t.hash&&window.dispatchEvent(new HashChangeEvent("hashchange",{newURL:e.href,oldURL:t.href}))}(n,o)}}updateTitle(e){var{cause:t,title:r}=e;document.title=r,q(this.parent)||t!==a.Push||history.replaceState(history.state,r)}assignScrollPosition(e){var t,r,a,{histId:n}=this.parent;return ue({},e,{[n]:ue({},e[n],{scrollTop:A(),scrollHeight:(t=document.documentElement,r=document.body,a="scrollHeight",t[a]||r[a])})})}}class de{constructor(e){this.parent=e,"scrollRestoration"in history&&(history.scrollRestoration="manual")}manageScrollPosition(e){var{cause:t,url:{hash:r}}=e;switch(t){case a.Push:this.scrollHashIntoView(r,{behavior:"smooth",block:"start",inline:"nearest"});break;case a.Pop:this.restoreScrollPosition();break;case a.Init:this.restoreScrollPositionOnReload()}}elementFromHash(e){return document.getElementById(decodeURIComponent(e.substr(1)))}scrollHashIntoView(e,t){if(e){var r=this.elementFromHash(e);r&&r.scrollIntoView(t)}else window.scroll(window.pageXOffset,0)}restoreScrollPosition(){var{histId:e}=this.parent,{scrollTop:t}=history.state&&history.state[e]||{};null!=t&&window.scroll(window.pageXOffset,t)}restoreScrollPositionOnReload(){var{histId:e}=this.parent;history.state&&history.state[e]&&0===A()?this.restoreScrollPosition():location.hash&&requestAnimationFrame(()=>this.scrollHashIntoView(location.hash,!0))}}var fe=function(e,t,r,a){var n,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};
/**
 * Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */class ye extends n.a{constructor(){super(...arguments),this.$connected=new o.a}connectedCallback(){super.connectedCallback(),this.$connected.next(!0)}disconnectedCallback(){super.disconnectedCallback(),this.$connected.next(!1)}firstUpdated(){this.firstUpdate=!0}updated(e){if(!this.firstUpdate)for(var t of e.keys())t in this.$&&this.$[t].next(this[t]);this.firstUpdate=!1}}var Oe,me=(Oe=class extends(function(e,t){return t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(r=>{e.prototype[r]=t.prototype[r]})}),e}(ye,[oe])){constructor(){super(...arguments),this.el=this,this.linkSelector="a[href]:not([data-no-push])",this.prefetch=!1,this.duration=0,this.simulateHashChange=!1,this.baseURL=window.location.href,this.$={},this.scrollManager=new de(this),this.historyManager=new be(this),this.fetchManager=new $(this),this.updateManager=new ee(this),this.eventManager=new le(this),this._url=new URL(this.baseURL),this.reload$=new o.a,this.cacheNr=0,this.upgrade=()=>{var e,{pushEvent$:t,hintEvent$:r}=this.setupEventListeners(),n={},o=t.pipe(Object(u.a)(e=>{var[t,r]=e;return{cause:a.Push,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(h.a)(e=>function(e,t){var{url:r,anchor:a,event:{metaKey:n,ctrlKey:o}}=e;return!n&&!o&&M(a)&&!q(r,t)}(e,this)),Object(b.a)(e=>{var{event:t}=e;t.preventDefault(),this.historyManager.updateHistoryScrollPosition()})),p=Object(i.a)(window,"popstate").pipe(Object(h.a)(()=>window.history.state&&window.history.state[this.histId]),Object(u.a)(e=>({cause:a.Pop,url:new URL(window.location.href),cacheNr:this.cacheNr,event:e}))),E=this.reload$,P=Object(c.a)(o,p,E).pipe(Object(d.a)({url:new URL(window.location.href)}),Object(f.a)(),Object(u.a)(e=>{var[t,r]=e;return Object.assign(r,{oldURL:t.url})}),Object(y.a)()),C=P.pipe(Object(h.a)(e=>!D(e)),Object(y.a)()),L=P.pipe(Object(h.a)(e=>D(e)),Object(h.a)(()=>history.state&&history.state[this.histId]),Object(O.a)(s.a),Object(b.a)(e=>{this.historyManager.updateHistoryState(e),this.scrollManager.manageScrollPosition(e)})),k=Object(l.a)(()=>Object(c.a)(C.pipe(Object(m.a)(!0)),n.response$.pipe(Object(m.a)(!1)))).pipe(Object(d.a)(!1)),R=r.pipe((e=k.pipe(Object(u.a)(e=>!e)),t=>t.pipe(Object(v.a)(e),Object(h.a)(e=>{var[,t]=e;return t}),Object(u.a)(e=>{var[t]=e;return t}))),Object(u.a)(e=>{var[t,r]=e;return{cause:a.Hint,url:new URL(r.href,this.href),anchor:r,event:t,cacheNr:this.cacheNr}}),Object(h.a)(e=>x(e,this))),A=Object(c.a)(R,C).pipe(Object(j.a)((e,t)=>this.compareContext(e,t)),Object(g.a)(e=>this.fetchManager.fetchPage(e)),Object(d.a)({url:{}}),Object(y.a)()),N=n.response$=C.pipe(Object(b.a)(e=>{this.eventManager.onStart(e),this.historyManager.updateHistoryState(e),this._url=e.url}),Object(v.a)(A),Object(g.a)(e=>this.fetchManager.getResponse(A,...e)),Object(y.a)()),U=N.pipe(Object(h.a)(e=>{var{error:t}=e;return!t})),_=N.pipe(Object(h.a)(e=>{var{error:t}=e;return t})),T=U.pipe(Object(u.a)(e=>this.updateManager.responseToContent(e)),Object(b.a)(e=>this.eventManager.emitReady(e)),Object(O.a)(s.a),Object(b.a)(e=>{this.updateManager.updateDOM(e),this.historyManager.updateTitle(e),this.eventManager.emitAfter(e)}),Object(d.a)({cause:a.Init,url:this._url,scripts:[]}),Object(O.a)(s.a),Object(b.a)(e=>this.scrollManager.manageScrollPosition(e)),Object(b.a)({error:e=>this.eventManager.emitDOMError(e)}),Object(w.a)((e,t)=>t),Object(g.a)(e=>this.updateManager.reinsertScriptTags(e)),Object(b.a)({error:e=>this.eventManager.emitError(e)}),Object(w.a)((e,t)=>t),Object(b.a)(e=>this.eventManager.emitLoad(e))),I=_.pipe(Object(b.a)(e=>this.eventManager.emitNetworkError(e))),H=C.pipe(Object(g.a)(e=>Object(l.a)(()=>this.animPromise).pipe(Object(S.a)(N),Object(m.a)(e))),Object(b.a)(e=>this.eventManager.emitProgress(e)));T.subscribe(),L.subscribe(),I.subscribe(),H.subscribe(),this.fireEvent("init")}}createRenderRoot(){return this}_setLocation(e,t){var r=new URL(this._url.href);r[e]=t,this.assign(r.href)}get hash(){return this._url.hash}get host(){return this._url.host}get hostname(){return this._url.hostname}get href(){return this._url.href}get pathname(){return this._url.pathname}get port(){return this._url.port}get protocol(){return this._url.protocol}get search(){return this._url.search}get origin(){return this._url.origin}get ancestorOrigins(){return window.location.ancestorOrigins}set hash(e){this._setLocation("hash",e)}set host(e){this._setLocation("host",e)}set hostname(e){this._setLocation("hostname",e)}set href(e){this._setLocation("href",e)}set pathname(e){this._setLocation("pathname",e)}set port(e){this._setLocation("port",e)}set protocol(e){this._setLocation("protocol",e)}set search(e){this._setLocation("search",e)}set origin(e){}set ancestorOrigins(e){}get histId(){return this.id||this.tagName}assign(e){this.reload$.next({cause:a.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr})}reload(){this.reload$.next({cause:a.Push,url:new URL(this.href),cacheNr:++this.cacheNr,replace:!0})}replace(e){this.reload$.next({cause:a.Push,url:new URL(e,this.href),cacheNr:++this.cacheNr,replace:!0})}fireEvent(e,t){this.dispatchEvent(new CustomEvent(e,t)),this.dispatchEvent(new CustomEvent("hy-push-state-".concat(e),t))}compareContext(e,t){return e.url.href===t.url.href&&e.error===t.error&&e.cacheNr===t.cacheNr}connectedCallback(){super.connectedCallback(),this.$.linkSelector=new p.a(this.linkSelector),this.$.prefetch=new p.a(this.prefetch),window.addEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition),this.updateComplete.then(this.upgrade)}disconnectedCallback(){window.removeEventListener("beforeunload",this.historyManager.updateHistoryScrollPosition)}},fe([Object(n.e)({type:String,reflect:!0,attribute:"replace-selector"})],Oe.prototype,"replaceSelector",void 0),fe([Object(n.e)({type:String,reflect:!0,attribute:"link-selector"})],Oe.prototype,"linkSelector",void 0),fe([Object(n.e)({type:String,reflect:!0,attribute:"script-selector"})],Oe.prototype,"scriptSelector",void 0),fe([Object(n.e)({type:Boolean,reflect:!0,attribute:"prefetch"})],Oe.prototype,"prefetch",void 0),fe([Object(n.e)({type:Number,reflect:!0,attribute:"duration"})],Oe.prototype,"duration",void 0),fe([Object(n.e)({type:Boolean,reflect:!0,attribute:"hashchange"})],Oe.prototype,"simulateHashChange",void 0),fe([Object(n.e)({type:String})],Oe.prototype,"baseURL",void 0),fe([Object(n.e)()],Oe.prototype,"assign",null),fe([Object(n.e)()],Oe.prototype,"reload",null),fe([Object(n.e)()],Oe.prototype,"replace",null),Oe=fe([Object(n.c)("hy-push-state")],Oe))}}]);