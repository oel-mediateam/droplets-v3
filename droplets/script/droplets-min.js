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
"use strict";function checkEnvironment(){isOnAllowedDomains()&&checkDropletsComponents()}function checkDropletsComponents(){var t=document.getElementById("uws-droplets-page"),e=t.getBoundingClientRect();t.setAttribute("data-x",e.x),t.setAttribute("data-y",e.y);var i="#uws-droplets-page .droplets-",o=document.querySelectorAll(i+"tooltip"),n=document.querySelectorAll(i+"popover"),a=document.querySelectorAll(i+"tabs"),s=document.querySelectorAll(i+"accordion"),r=document.querySelectorAll(i+"resources"),l=document.querySelectorAll(i+"readmore"),c=document.querySelectorAll(i+"reveal"),d=document.querySelectorAll(i+"image-zoom"),u=document.querySelectorAll(i+"lightbox");o.length&&enableToolTips(o),n.length&&enablePopovers(n),a.length&&enableTabs(a),s.length&&enableAccordions(s),r.length&&enableResources(r),l.length&&enableReadMore(l),c.length&&enableReveal(c),d.length&&enableImgZoom(d),u.length&&enableLightbox(u)}function enableToolTips(t){Array.prototype.forEach.call(t,function(t){t.addEventListener("mouseenter",function(){var e=this.getAttribute("title"),i={left:this.offsetLeft,top:this.offsetTop,bottom:this.offsetTop-this.offsetHeight},o=0,n=0;t.setAttribute("data-tip",e),e=t.getAttribute("data-tip");var a=document.createElement("div");a.classList.add("tooltip");var s=document.createElement("div");s.classList.add("tooltip-inner"),s.innerHTML=e,a.appendChild(s),this.insertBefore(a,this.firstChild),this.classList.contains("top")?(o=i.top-a.offsetHeight-2,n=i.left):this.classList.contains("bottom")?(o=i.top+a.offsetHeight-5,n=i.left):this.classList.contains("right")?(o=i.top,n=i.left+this.offsetWidth+5):this.classList.contains("left")?(o=i.top,n=i.left-a.offsetWidth-5):(o=i.top-a.offsetHeight-2,n=i.left),a.style.top=o+"px",a.style.left=n+"px",this.removeAttribute("title"),this.addEventListener("mouseleave",function(){null!==a.parentNode&&a.parentNode.removeChild(a),this.setAttribute("title",e)})})})}function enablePopovers(t){Array.prototype.forEach.call(t,function(t){var e="";null!==t.getAttribute("data-title")?e=t.getAttribute("data-title"):(e=t.getAttribute("title"),t.setAttribute("data-title",e),e=t.getAttribute("data-title"));var i=document.createElement("div");i.classList.add("popover"),i.setAttribute("role","tooltip");var o=document.createElement("div");o.classList.add("popover-content"),o.innerHTML=e,i.appendChild(o),t.insertBefore(i,t.firstChild),t.addEventListener("click",function(){if("block"===this.querySelector(".popover").style.display)this.querySelector(".popover").style.display="none",this.classList.remove("active");else{this.classList.add("active"),i.style.display="block";var t=0,e=0,o=this.offsetWidth-(i.offsetWidth+this.offsetWidth)/2,n=this.offsetHeight-(i.offsetHeight+this.offsetHeight)/2;this.classList.contains("top")?(i.classList.add("top"),t=-1*(i.offsetHeight+10),e=o):this.classList.contains("bottom")?(i.classList.add("bottom"),t=this.offsetHeight+10,e=o):this.classList.contains("right")?(i.classList.add("right"),t=n,e=this.offsetWidth+10):this.classList.contains("left")?(i.classList.add("left"),t=n,e=-1*(i.offsetWidth+10)):(i.classList.add("top"),t=-1*(i.offsetHeight+10),e=o),i.style.top=t+"px",i.style.left=e+"px"}}),t.addEventListener("mouseenter",function(){this.removeAttribute("title"),this.addEventListener("mouseleave",function(){this.setAttribute("title",e)})})})}function enableTabs(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".tabs li"),i=t.querySelectorAll(".tab-contents .tab-section");Array.prototype.forEach.call(e,function(t,o){t.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t,e){t.classList.remove("active"),t.children[0].setAttribute("aria-selected","false"),i[e].classList.remove("active")}),this.classList.add("active"),this.children[0].setAttribute("aria-selected","true"),i[o].classList.add("active"),t.preventDefault()})})})}function enableAccordions(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".accordion-title"),i=document.createElement("div");i.classList.add("accordion-controls");var o=document.createElement("a");o.classList.add("closeAll"),o.setAttribute("role","button"),o.setAttribute("aria-control","close all"),o.innerHTML="Close All",o.href="javascript:void(0)";var n=document.createElement("a");n.classList.add("openAll"),n.setAttribute("role","button"),n.setAttribute("aria-control","open all"),n.innerHTML="Open All",n.href="javascript:void(0)",i.appendChild(o),i.appendChild(n),t.insertBefore(i,t.firstChild),o.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t){closeAccordionItem(t)}),t.preventDefault()}),n.addEventListener("click",function(t){Array.prototype.forEach.call(e,function(t){openAccordionItem(t)}),t.preventDefault()}),Array.prototype.forEach.call(e,function(t){t.classList.contains("active")&&openAccordionItem(t),t.addEventListener("click",function(t){this.classList.contains("active")?closeAccordionItem(this):(Array.prototype.forEach.call(e,function(t){closeAccordionItem(t)}),openAccordionItem(this)),t.preventDefault()})})})}function closeAccordionItem(t){t.classList.contains("active")&&(t.nextElementSibling.style.display="none",t.setAttribute("aria-expanded","false"),t.classList.remove("active"))}function openAccordionItem(t){t.setAttribute("aria-expanded","true"),t.classList.add("active"),t.nextElementSibling.style.display="block"}function enableResources(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".resource");Array.prototype.forEach.call(e,function(t){var e=t.querySelectorAll(".cover-info");Array.prototype.forEach.call(e,function(t){var e=document.createElement("div");e.classList.add("arrow"),t.parentNode.insertBefore(e,t.nextSibling),e.addEventListener("click",function(){this.parentNode.classList.contains("expanded")?this.parentNode.classList.remove("expanded"):this.parentNode.classList.add("expanded")})})})})}function enableReadMore(t){Array.prototype.forEach.call(t,function(t){var e=document.createElement("div");e.classList.add("readmore-cntrl"),e.setAttribute("role","button"),e.setAttribute("aria-controls","click to read more"),e.setAttribute("aria-expanded","false"),t.appendChild(e),e.addEventListener("click",function(){if(this.classList.contains("opened"))this.classList.remove("opened"),this.setAttribute("aria-expanded","false"),t.style.height=null,t.style.overflow="hidden";else{var e=t.scrollHeight+"px";this.classList.add("opened"),this.setAttribute("aria-expanded","true"),t.style.height=e,t.style.overflow="unset"}})})}function enableReveal(t){Array.prototype.forEach.call(t,function(t){var e=document.createElement("a");e.classList.add("btn","success","small"),e.setAttribute("aria-hidden","true"),e.innerHTML=t.getAttribute("data-button-name"),t.appendChild(e),e.addEventListener("click",function(){var e=t.querySelectorAll(".hidden-content")[0];"unset"!==e.style.display?(e.style.display="unset",this.classList.remove("success"),this.innerHTML="Hide"):(e.style.display="none",this.classList.add("success"),this.innerHTML=t.getAttribute("data-button-name"))})})}function enableImgZoom(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelector("img"),i=document.createElement("div");i.classList.add("magnify"),i.style.backgroundImage='url("'+e.src+'")',t.appendChild(i),t.addEventListener("mousemove",function(t){var o=new Image;o.src=e.src,e.setAttribute("data-width",o.width),e.setAttribute("data-height",o.height);var n=e.getAttribute("data-width"),a=e.getAttribute("data-height"),s=document.getElementById("uws-droplets-page"),r=Number(s.getAttribute("data-x")),l=Number(s.getAttribute("data-y")),c=t.pageX-r-this.offsetLeft,d=t.pageY-l-this.offsetTop;if(c<this.offsetWidth&&d<this.offsetHeight&&c>0&&d>0){i.classList.add("show");var u=-1*Math.round(c/e.offsetWidth*n-i.offsetWidth/2),f=-1*Math.round(d/e.offsetHeight*a-i.offsetHeight/2);i.style.left=c-i.offsetWidth/2+"px",i.style.top=d-i.offsetHeight/2+"px",i.style.backgroundPosition=u+"px "+f+"px"}else i.classList.remove("show")})})}function enableLightbox(t){var e=document.getElementById("uws-droplets-page"),i=document.createElement("div");i.classList.add("droplets-lightbox-overlay"),i.setAttribute("aria-hidden","true");var o=document.createElement("div");o.classList.add("overlay-content");var n=document.createElement("a");n.classList.add("overlay-close-btn"),n.setAttribute("role","button");var a=document.createElement("a");a.classList.add("overlay-left-arrow"),a.setAttribute("role","button");var s=document.createElement("a");s.classList.add("overlay-right-arrow"),s.setAttribute("role","button"),i.appendChild(a),i.appendChild(s),i.appendChild(n),i.appendChild(o),e.appendChild(i),i.addEventListener("click",function(t){t.target===this&&i.classList.contains("show-overlay")&&i.classList.remove("show-overlay")}),n.addEventListener("click",function(){i.classList.contains("show-overlay")&&i.classList.remove("show-overlay")}),Array.prototype.forEach.call(t,function(t){if(isImgFigCombo(t.querySelectorAll("img, figure"))){var e=document.createElement("div");e.classList.add("callout","danger","lightbox-error");var n=document.createElement("p");return n.innerHTML="<strong>Error:</strong> Do not mix img and figure tags.",e.appendChild(n),void t.appendChild(e)}var r=t.querySelectorAll("img"),l=t.querySelectorAll("figure"),c=l;0===l.length&&(c=r),Array.prototype.forEach.call(c,function(t,e){var n=0;t.addEventListener("click",function(r){c.length>1?(s.style.display="inherit",s.addEventListener("click",function(t){n++,n>c.length-1&&(n=0),selectImage(c[n],o),t.preventDefault()}),a.style.display="inherit",a.addEventListener("click",function(t){n--,n<0&&(n=c.length-1),selectImage(c[n],o),t.preventDefault()})):(s.style.display="none",s.removeEventListener("click",function(){}),a.style.display="none",a.removeEventListener("click",function(){})),selectImage(t,o),i.classList.add("show-overlay"),n=e,r.preventDefault()})})})}function isImgFigCombo(t){var e=0,i=0;return Array.prototype.forEach.call(t,function(t){"IMG"===t.nodeName?e++:"FIGURE"===t.nodeName&&i++}),e>=1&&i>=1&&e>i}function selectImage(t,e){e.innerHTML="";var i=document.createElement("img"),o=document.createElement("p");if("IMG"===t.nodeName)i.src=t.src,o.classList.add("caption"),o.innerHTML=t.getAttribute("alt");else if("FIGURE"===t.nodeName){var n=t.querySelector("img"),a=t.querySelector("figcaption");i.src=n.src,o.classList.add("caption"),o.innerHTML=a?a.innerHTML:n.getAttribute("alt")}e.appendChild(i),e.appendChild(o)}function isOnAllowedDomains(){var t=["localhost/","media.uwex.edu/",".instructure.com/","laethanlin.local:"],e=!1;return Array.prototype.forEach.call(t,function(t){var i=new RegExp(t);if(location.href.match(i))return".instructure.com/"===t?void(e=onCanvasContentPage(/\/pages/)):void(e=!0)}),e}function onCanvasContentPage(t){return!!location.pathname.match(t)&&(document.getElementById("uws-droplets-page").classList.add("canvas-net"),!0)}!function t(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",checkEnvironment)}(checkEnvironment);