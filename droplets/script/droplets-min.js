/**
 * DROPLETS
 *
 * @version: 2.0.0
 * @author: Ethan Lin
 * @url: https://github.com/oel-mediateam/droplets-for-canvas
 *
 * @license: The MIT License (MIT)
 * Copyright 2018 UWEX CEOEL Media
 *
 */
"use strict";function checkEnvironment(){isOnAllowedDomains()&&checkDropletsComponents()}function checkDropletsComponents(){var t="#uws-droplets-page",e=document.querySelectorAll(t+" .droplets-tooltip"),o=document.querySelectorAll(t+" .droplets-popover"),s=document.querySelectorAll(t+" .droplets-tabs"),i=document.querySelectorAll(t+" .droplets-accordion"),n=document.querySelectorAll(t+" .droplets-resources"),a=document.querySelectorAll(t+" .droplets-readmore");e.length&&enableToolTips(e),o.length&&enablePopovers(o),s.length&&enableTabs(s),i.length&&enableAccordions(i),n.length&&enableResources(n),a.length&&enableReadMore(a)}function enableToolTips(t){Array.prototype.forEach.call(t,function(t){t.addEventListener("mouseenter",function(){var t=this.getAttribute("data-tip"),e={left:this.offsetLeft,top:this.offsetTop,bottom:this.offsetTop-this.offsetHeight},o=0,s=0,i=document.createElement("div");i.classList.add("tooltip");var n=document.createElement("div");n.classList.add("tooltip-inner"),n.innerHTML=t,i.appendChild(n),this.insertBefore(i,this.firstChild),this.classList.contains("top")?(o=e.top-i.offsetHeight-2,s=e.left):this.classList.contains("bottom")?(o=e.top+i.offsetHeight-5,s=e.left):this.classList.contains("right")?(o=e.top,s=e.left+this.offsetWidth+5):this.classList.contains("left")?(o=e.top,s=e.left-i.offsetWidth-5):(o=e.top-i.offsetHeight-2,s=e.left),i.style.top=o+"px",i.style.left=s+"px",this.addEventListener("mouseleave",function(){null!==i.parentNode&&i.parentNode.removeChild(i)})})})}function enablePopovers(t){Array.prototype.forEach.call(t,function(t){var e=t.getAttribute("title");t.setAttribute("data-title",e),e=t.getAttribute("data-title");var o=document.createElement("div");o.classList.add("popover"),o.setAttribute("role","tooltip");var s=document.createElement("div");s.classList.add("popover-content"),s.innerHTML=e,o.appendChild(s),t.insertBefore(o,t.firstChild),t.addEventListener("click",function(){if("block"===this.querySelectorAll(".popover")[0].style.display)this.querySelectorAll(".popover")[0].style.display="none",this.classList.remove("active");else{this.classList.add("active"),o.style.display="block";var t=0,e=0,s=this.offsetWidth-(o.offsetWidth+this.offsetWidth)/2,i=this.offsetHeight-(o.offsetHeight+this.offsetHeight)/2;this.classList.contains("top")?(o.classList.add("top"),t=-1*(o.offsetHeight+10),e=s):this.classList.contains("bottom")?(o.classList.add("bottom"),t=this.offsetHeight+10,e=s):this.classList.contains("right")?(o.classList.add("right"),t=i,e=this.offsetWidth+10):this.classList.contains("left")?(o.classList.add("left"),t=i,e=-1*(o.offsetWidth+10)):(o.classList.add("top"),t=-1*(o.offsetHeight+10),e=s),o.style.top=t+"px",o.style.left=e+"px"}}),t.addEventListener("mouseenter",function(){this.removeAttribute("title"),this.addEventListener("mouseleave",function(){this.setAttribute("title",e)})})})}function enableTabs(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".tabs li"),o=t.querySelectorAll(".tab-contents .tab-section");Array.prototype.forEach.call(e,function(t,s){t.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t,e){t.classList.remove("active"),t.children[0].setAttribute("aria-selected","false"),o[e].classList.remove("active")}),this.classList.add("active"),this.children[0].setAttribute("aria-selected","true"),o[s].classList.add("active"),t.preventDefault()})})})}function enableAccordions(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".accordion-title"),o=document.createElement("div");o.classList.add("accordion-controls");var s=document.createElement("a");s.classList.add("closeAll"),s.setAttribute("role","button"),s.setAttribute("aria-control","close all"),s.innerHTML="Close All",s.href="javascript:void(0)";var i=document.createElement("a");i.classList.add("openAll"),i.setAttribute("role","button"),i.setAttribute("aria-control","open all"),i.innerHTML="Open All",i.href="javascript:void(0)",o.appendChild(s),o.appendChild(i),t.insertBefore(o,t.firstChild),s.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t){closeAccordionItem(t)}),t.preventDefault()}),i.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t){openAccordionItem(t)}),t.preventDefault()}),Array.prototype.forEach.call(e,function(t){t.classList.contains("active")&&openAccordionItem(t),t.addEventListener("click",function(t){this.classList.contains("active")?closeAccordionItem(this):(Array.prototype.forEach.call(e,function(t){closeAccordionItem(t)}),openAccordionItem(this)),t.preventDefault()})})})}function closeAccordionItem(t){t.classList.contains("active")&&(t.nextElementSibling.style.display="none",t.setAttribute("aria-expanded","false"),t.classList.remove("active"))}function openAccordionItem(t){t.setAttribute("aria-expanded","true"),t.classList.add("active"),t.nextElementSibling.style.display="block"}function enableResources(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".resource");Array.prototype.forEach.call(e,function(t){var e=t.querySelectorAll(".cover-info");Array.prototype.forEach.call(e,function(t){var e=document.createElement("div");e.classList.add("arrow"),t.parentNode.insertBefore(e,t.nextSibling),e.addEventListener("click",function(){this.parentNode.classList.contains("expanded")?this.parentNode.classList.remove("expanded"):this.parentNode.classList.add("expanded")})})})})}function enableReadMore(t){Array.prototype.forEach.call(t,function(t){var e=document.createElement("div");e.classList.add("readmore-cntrl"),e.setAttribute("role","button"),e.setAttribute("aria-controls","click to read more"),e.setAttribute("aria-expanded","false"),t.appendChild(e),e.addEventListener("click",function(){if(this.classList.contains("opened"))this.classList.remove("opened"),this.setAttribute("aria-expanded","false"),t.style.height=null,t.style.overflow="hidden";else{var e=t.scrollHeight+"px";this.classList.add("opened"),this.setAttribute("aria-expanded","true"),t.style.height=e,t.style.overflow="unset"}})})}function isOnAllowedDomains(){var t=["localhost/","media.uwex.edu/",".instructure.com/","laethanlin.local:"],e=!1;return Array.prototype.forEach.call(t,function(t){var o=new RegExp(t);if(location.href.match(o))return".instructure.com/"===t?void(e=onCanvasContentPage(/\/pages/)):void(e=!0)}),e}function onCanvasContentPage(t){return!!location.pathname.match(t)}!function t(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",checkEnvironment)}(checkEnvironment);
//# sourceMappingURL=./droplets-min.js.map