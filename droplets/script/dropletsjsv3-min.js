/**
 * DROPLETS
 *
 * @version: 3.0.0
 * @author: Ethan Lin
 * @url: https://github.com/oel-mediateam/droplets-for-canvas
 *
 * @license: The MIT License (MIT)
 * Copyright 2018-2019 UWEX CEOEL Media
 *
 */
"use strict";function waitForDroplets(e){new MutationObserver((function(){let t;document.getElementById(e.id)&&(this.disconnect(),e.done())})).observe(e.parent||document,{subtree:!!e.recursive,childList:!0})}function runDropletsJs(){isCanvasLms()?onCanvasLms():checkDropletsComponents()}function isCanvasLms(){return!!location.href.match(new RegExp(".instructure.com/"))}function onCanvasLms(){const e=document.getElementById("uws-droplets-page");null!=e&&(e.classList.add("canvas-net"),isAllowedCanvasPage()?checkDropletsComponents():e.classList.add("no-js"))}function isAllowedCanvasPage(){return!!location.pathname.match(/\/pages|\/assignments|\/discussion_topics/)}function checkDropletsComponents(){const e=document.getElementById("uws-droplets-page");if(e.classList.contains("no-js"))return;const t=e.getBoundingClientRect();e.setAttribute("data-x",t.x),e.setAttribute("data-y",t.y);const n="#uws-droplets-page .droplets-",a=document.querySelectorAll(n+"tooltip"),i=document.querySelectorAll(n+"popover"),r=document.querySelectorAll(n+"tabs"),s=document.querySelectorAll(n+"tabbed"),o=document.querySelectorAll(n+"accordion"),l=document.querySelectorAll(n+"collapsibles"),c=document.querySelectorAll(n+"readmore, "+n+"showmore"),u=document.querySelectorAll(n+"reveal");a.length&&enableToolTips(a),i.length&&enablePopovers(i),r.length&&enableTabs(r),s.length&&enableTabbed(s),o.length&&enableAccordions(o),l.length&&enableCollapsibles(l),c.length&&enableShowMore(c),u.length&&enableReveal(u)}function enableToolTips(e){Array.prototype.forEach.call(e,e=>{e.addEventListener("mouseenter",(function(){let t=this.getAttribute("title"),n={left:this.offsetLeft,top:this.offsetTop,bottom:this.offsetTop-this.offsetHeight},a=0,i=0;e.setAttribute("data-tip",t),t=e.getAttribute("data-tip");let r=document.createElement("div");r.classList.add("tooltip");let s=document.createElement("div");s.classList.add("tooltip-inner"),s.innerHTML=t,r.appendChild(s),this.insertBefore(r,this.firstChild),this.classList.contains("top")?(a=n.top-r.offsetHeight-2,i=n.left):this.classList.contains("bottom")?(a=n.top+r.offsetHeight-10,i=n.left):this.classList.contains("right")?(a=n.top,i=n.left+this.offsetWidth+5):this.classList.contains("left")?(a=n.top,i=n.left-r.offsetWidth-5):(a=n.top-r.offsetHeight-2,i=n.left),r.style.top=a+"px",r.style.left=i+"px",this.removeAttribute("title"),this.addEventListener("mouseleave",(function(){null!==r.parentNode&&r.parentNode.removeChild(r),this.setAttribute("title",t)}))}))})}function enablePopovers(e){Array.prototype.forEach.call(e,e=>{let t="";null!==e.getAttribute("data-title")?t=e.getAttribute("data-title"):(t=e.getAttribute("title"),e.setAttribute("data-title",t),t=e.getAttribute("data-title"));let n=document.createElement("div");n.classList.add("popover"),n.setAttribute("role","tooltip");let a=document.createElement("div");a.classList.add("popover-content"),a.innerHTML=t,n.appendChild(a),e.insertBefore(n,e.firstChild),e.addEventListener("click",(function(){if("block"===this.querySelector(".popover").style.display)this.querySelector(".popover").style.display="none",this.classList.remove("active");else{this.classList.add("active"),n.style.display="block";let e=0,t=0,a=this.offsetWidth-(n.offsetWidth+this.offsetWidth)/2,i=this.offsetHeight-(n.offsetHeight+this.offsetHeight)/2;this.classList.contains("top")?(n.classList.add("top"),e=-1*(n.offsetHeight+10),t=a):this.classList.contains("bottom")?(n.classList.add("bottom"),e=this.offsetHeight+10,t=a):this.classList.contains("right")?(n.classList.add("right"),e=i,t=this.offsetWidth+10):this.classList.contains("left")?(n.classList.add("left"),e=i,t=-1*(n.offsetWidth+10)):(n.classList.add("top"),e=-1*(n.offsetHeight+10),t=a),n.style.top=e+"px",n.style.left=t+"px"}})),e.addEventListener("mouseenter",(function(){this.removeAttribute("title"),this.addEventListener("mouseleave",(function(){this.setAttribute("title",t)}))}))})}function enableTabbed(e){let t=!1;Array.prototype.forEach.call(e,(function(e){const n=e.querySelectorAll(".tab"),a=e.querySelectorAll(".content");e.setAttribute("role","rolelist"),e.setAttribute("aria-multiselectable","false"),Array.prototype.forEach.call(n,(function(e,i){e.classList.contains("active")&&!1===t?t=!0:e.classList.remove("active"),e.setAttribute("role","tab"),a[i].setAttribute("role","tabpanel"),e.id&&(e.setAttribute("id",e.id),e.setAttribute("aria-controls",e.id+"-content"),a[i].setAttribute("id",e.id+"-content"),a[i].setAttribute("aria-labelledby",e.id)),changeTabState(e,a[i],e.classList.contains("active")),e.addEventListener("click",(function(){this.classList.contains("active")||(Array.prototype.forEach.call(n,(function(e,t){changeTabState(e,a[t],!1)})),changeTabState(this,a[i],!0))}))})),!1===t&&(changeTabState(n[0],a[0],!0),t=!0)}))}function changeTabState(e,t,n){n?(e.classList.add("active"),e.setAttribute("aria-selected","true"),t.classList.add("active")):(e.classList.remove("active"),e.setAttribute("aria-selected","false"),t.classList.remove("active"))}function enableTabs(e){Array.prototype.forEach.call(e,(function(e){const t=e.querySelectorAll(".tabs li"),n=e.querySelectorAll(".tab-contents .tab-section");Array.prototype.forEach.call(t,(function(e,a){e.addEventListener("click",(function(e){Array.prototype.forEach.call(t,(function(e,t){e.classList.remove("active"),e.setAttribute("aria-selected","false"),n[t].classList.remove("active")})),this.classList.add("active"),this.setAttribute("aria-selected","true"),n[a].classList.add("active"),n[a].setAttribute("aria-selected","true"),e.preventDefault()}))}))}))}function enableCollapsibles(e){Array.prototype.forEach.call(e,(function(e){const t=e.querySelectorAll(".section"),n=e.querySelectorAll(".content");e.setAttribute("role","rolelist"),e.setAttribute("aria-multiselectable","true"),Array.prototype.forEach.call(t,(function(e,t){e.setAttribute("role","tab"),n[t].setAttribute("role","tabpanel"),e.id&&(e.setAttribute("id",e.id),e.setAttribute("aria-controls",e.id+"-content"),n[t].setAttribute("id",e.id+"-content"),n[t].setAttribute("aria-labelledby",e.id)),e.classList.contains("active")?(e.setAttribute("aria-expanded","true"),n[t].classList.add("active")):e.setAttribute("aria-expanded","false"),e.addEventListener("click",(function(){this.classList.contains("active")?toggleSection(this,n[t],!1):toggleSection(this,n[t],!0)}))}));const a=document.createElement("div");a.classList.add("controls");const i=document.createElement("a");i.classList.add("cbtn","closeAll"),i.setAttribute("role","button"),i.innerHTML="Close All",i.href="";const r=document.createElement("a");r.classList.add("cbtn","openAll"),r.setAttribute("role","button"),r.innerHTML="Open All",r.href="",a.appendChild(i),a.appendChild(r),e.insertBefore(a,e.firstChild),i.addEventListener("click",e=>{Array.prototype.forEach.call(t,(function(e,t){toggleSection(e,n[t],!1)})),e.preventDefault()}),r.addEventListener("click",e=>{Array.prototype.forEach.call(t,(function(e,t){toggleSection(e,n[t],!0)})),e.preventDefault()})}))}function toggleSection(e,t,n){n?(e.classList.add("active"),e.setAttribute("aria-expanded","true"),t.classList.add("active")):(e.classList.remove("active"),e.setAttribute("aria-expanded","false"),t.classList.remove("active"))}function enableAccordions(e){Array.prototype.forEach.call(e,(function(e){const t=e.querySelectorAll(".accordion-title"),n=document.createElement("div");n.classList.add("accordion-controls");const a=document.createElement("a");a.classList.add("closeAll"),a.setAttribute("role","button"),a.innerHTML="Close All",a.href="javascript:void(0)";const i=document.createElement("a");i.classList.add("openAll"),i.setAttribute("role","button"),i.innerHTML="Open All",i.href="javascript:void(0)",n.appendChild(a),n.appendChild(i),e.insertBefore(n,e.firstChild),a.addEventListener("click",(function(e){Array.prototype.forEach.call(t,(function(e){closeAccordionItem(e)})),e.preventDefault()})),i.addEventListener("click",(function(e){Array.prototype.forEach.call(t,(function(e){openAccordionItem(e)})),e.preventDefault()})),Array.prototype.forEach.call(t,(function(e){e.classList.contains("active")&&openAccordionItem(e),e.addEventListener("click",(function(e){this.classList.contains("active")?closeAccordionItem(this):(Array.prototype.forEach.call(t,(function(e){closeAccordionItem(e)})),openAccordionItem(this)),e.preventDefault()}))}))}))}function closeAccordionItem(e){e.classList.contains("active")&&(e.nextElementSibling.style.display="none",e.nextElementSibling.setAttribute("aria-expanded","false"),e.classList.remove("active"))}function openAccordionItem(e){e.classList.add("active"),e.nextElementSibling.setAttribute("aria-expanded","true"),e.nextElementSibling.style.display="block"}function enableShowMore(e){Array.prototype.forEach.call(e,(function(e){const t=document.createElement("div");t.classList.add("droplets-showmore-cntrl"),t.setAttribute("aria-hidden","true"),t.appendChild(document.createTextNode("Show More")),e.insertAdjacentElement("afterend",t),t.addEventListener("click",(function(){e.classList.contains("expanded")?(e.classList.remove("expanded"),this.innerHTML="Show More",this.classList.remove("expanded")):(e.classList.add("expanded"),this.innerHTML="Show Less",this.classList.add("expanded"))}))}))}function enableReveal(e){Array.prototype.forEach.call(e,(function(e){const t=document.createElement("button");t.classList.add("droplets-reveal-btn"),t.setAttribute("aria-hidden","true"),t.innerHTML=getRevealBtnName(e),e.insertAdjacentElement("afterend",t),t.addEventListener("click",(function(){e.classList.contains("revealed")?(e.classList.remove("revealed"),this.classList.remove("revealed"),this.innerHTML=getRevealBtnName(e)):(e.classList.add("revealed"),this.classList.add("revealed"),this.innerHTML="Hide")}))}))}function getRevealBtnName(e){return isEmpty(e.getAttribute("data-button-name"))?"Show":e.getAttribute("data-button-name")}function isEmpty(e){return!e||0===e.length}var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){function t(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!i}var n=/\blang(?:uage)?-([\w-]+)\b/i,a=0,i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof t?new t(e.type,i.util.encode(e.content),e.alias):Array.isArray(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,n){var a,r,s=i.util.type(t);switch(n=n||{},s){case"Object":if(r=i.util.objId(t),n[r])return n[r];for(var o in a={},n[r]=a,t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return r=i.util.objId(t),n[r]?n[r]:(a=[],n[r]=a,t.forEach((function(t,i){a[i]=e(t,n)})),a);default:return t}},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var r=(a=a||i.languages)[e],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=r[o])}var c=a[e];return a[e]=s,i.languages.DFS(i.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,a,r){r=r||{};var s=i.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],a||o);var l=t[o],c=i.util.type(l);"Object"!==c||r[s(l)]?"Array"!==c||r[s(l)]||(r[s(l)]=!0,e(l,n,o,r)):(r[s(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a);for(var r,s=e.querySelectorAll(a.selector),o=0;r=s[o++];)i.highlightElement(r,!0===t,a.callback)},highlightElement:function(t,a,r){function s(e){u.highlightedCode=e,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),r&&r.call(u.element)}var o=function(e){for(;e&&!n.test(e.className);)e=e.parentNode;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"}(t),l=i.languages[o];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+o;var c=t.parentNode;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(n,"").replace(/\s+/g," ")+" language-"+o);var u={element:t,language:o,grammar:l,code:t.textContent};if(i.hooks.run("before-sanity-check",u),!u.code)return i.hooks.run("complete",u),void(r&&r.call(u.element));if(i.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var d=new Worker(i.filename);d.onmessage=function(e){s(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else s(i.highlight(u.code,u.grammar,u.language));else s(i.util.encode(u.code))},highlight:function(e,n,a){var r={code:e,grammar:n,language:a};return i.hooks.run("before-tokenize",r),r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),t.stringify(i.util.encode(r.tokens),r.language)},matchGrammar:function(e,n,a,r,s,o,l){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(l&&l==c+","+d)return;var p=u[d],f=p.inside,g=!!p.lookbehind,m=!!p.greedy,h=0,b=p.alias;if(m&&!p.pattern.global){var v=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var y=r,A=s;y<n.length;A+=n[y].length,++y){var w=n[y];if(n.length>e.length)return;if(!(w instanceof t)){if(m&&y!=n.length-1){if(p.lastIndex=A,!(E=p.exec(e)))break;for(var k=E.index+(g&&E[1]?E[1].length:0),L=E.index+E[0].length,x=y,F=A,S=n.length;x<S&&(F<L||!n[x].type&&!n[x-1].greedy);++x)(F+=n[x].length)<=k&&(++y,A=F);if(n[y]instanceof t)continue;P=x-y,w=e.slice(A,F),E.index-=A}else{p.lastIndex=0;var E=p.exec(w),P=1}if(E){g&&(h=E[1]?E[1].length:0),L=(k=E.index+h)+(E=E[0].slice(h)).length;var C=w.slice(0,k),_=w.slice(L),N=[y,P];C&&(++y,A+=C.length,N.push(C));var T=new t(c,f?i.tokenize(E,f):E,b,E,m);if(N.push(T),_&&N.push(_),Array.prototype.splice.apply(n,N),1!=P&&i.matchGrammar(e,n,a,y,A,!0,c+","+d),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var r in a)t[r]=a[r];delete t.rest}return i.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}},Token:t};if(e.Prism=i,t.stringify=function(e,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return t.stringify(e,n)})).join("");var a={type:e.type,content:t.stringify(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}i.hooks.run("wrap",a);var s=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(s?" "+s:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,r=n.code,s=n.immediateClose;e.postMessage(i.highlight(r,i.languages[a],a)),s&&e.close()}),!1)),i;var r=i.util.currentScript();if(r&&(i.filename=r.src,r.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){function s(){i.manual||i.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&r&&r.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return i}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var i={};i[e]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*(?:$|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/\b[A-Z](?:\w*[a-z]\w*)?\b/;e.languages.java=e.languages.extend("clike",{"class-name":[n,/\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"}}),e.languages.insertBefore("java","class-name",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0},namespace:{pattern:/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(?:\.[a-z]\w*)+/,lookbehind:!0,inside:{punctuation:/\./}},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":n,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(Prism),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},"string-interpolation":{pattern:/(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^\s*)@\w+(?:\.\w+)*/im,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:True|False|None)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python,Prism.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:TRUE|FALSE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:NaN|Inf)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/},function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,n=function(e){var n=a(e)["white-space"];if("pre-wrap"===n||"pre-line"===n){var i=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),o=i.textContent.split(t);s||((s=document.createElement("span")).className="line-numbers-sizer",i.appendChild(s)),s.style.display="block",o.forEach((function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"})),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",(function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),n)})),Prism.hooks.add("complete",(function(e){if(e.code){var a=e.element,i=a.parentNode;if(i&&/pre/i.test(i.nodeName)&&!a.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,o=a;o;o=o.parentNode)if(s.test(o.className)){r=!0;break}if(r){a.className=a.className.replace(s," "),s.test(i.className)||(i.className+=" line-numbers");var l,c=e.code.match(t),u=c?c.length+1:1,d=new Array(u+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=d,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),e.element.appendChild(l),n(i),Prism.hooks.run("line-numbers",e)}}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})),Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var a=t.querySelector(".line-numbers-rows"),i=parseInt(t.getAttribute("data-start"),10)||1,r=i+(a.children.length-1);n<i&&(n=i),r<n&&(n=r);var s=n-i;return a.children[s]}}}}}(),function(){function e(e){this.defaults=n({},e)}function t(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}var n=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};e.prototype={setDefaults:function(e){this.defaults=n(this.defaults,e)},normalize:function(e,t){for(var a in t=n(this.defaults,t)){var i=a.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}));"normalize"!==a&&"setDefaults"!==i&&t[a]&&this[i]&&(e=this[i].call(this,e,t[a]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort((function(e,t){return e.length-t.length})),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var a=e.split("\n"),i=0;i<a.length;++i)if(!(t(a[i])<=n)){for(var r=a[i].split(/(\s+)/g),s=0,o=0;o<r.length;++o){var l=t(r[o]);n<(s+=l)&&(r[o]="\n"+r[o],s=l)}a[i]=r.join("")}return a.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),void 0!==Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var t=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"])if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode,a=/(?:^|\s)no-whitespace-normalization(?:\s|$)/;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()&&!a.test(n.className)&&!a.test(e.element.className)){for(var i=n.childNodes,r="",s="",o=!1,l=0;l<i.length;++l){var c=i[l];c==e.element?o=!0:"#text"===c.nodeName&&(o?s+=c.nodeValue:r+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=r+e.element.innerHTML+s;e.element.innerHTML=t.normalize(u,e.settings),e.code=e.element.textContent}else e.code=r+e.code+s,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})))}();const dropletsParam={id:"uws-droplets-page",parent:document.querySelector("#main"),recursive:!0,done:function(){runDropletsJs()}};waitForDroplets(dropletsParam);