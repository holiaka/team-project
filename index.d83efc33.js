!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=s),s.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}})),s.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var i,n=(i=s("8NIkP"))&&i.__esModule?i:{default:i}})),s.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}})),s.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),s.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),s.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n.default(e,t)};var i,n=(i=s("8NIkP"))&&i.__esModule?i:{default:i}})),function(){var e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),i=document.querySelector("[data-menu]"),n=document.querySelector("body");function s(){i.classList.toggle("is-open"),n.classList.toggle("no-scroll")}e.addEventListener("click",s),t.addEventListener("click",s)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("backdrop--is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function o(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,i){t&&o(e.prototype,t);i&&o(e,i);return e};var l=s("hKHmD"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){u.default(e,t,i[t])}))}return e};var d,u=(d=s("hKHmD"))&&d.__esModule?d:{default:d};var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e){return h.default(e)||f.default(e)||v.default(e)||m.default()};var h=p(s("kMC0W")),f=p(s("7AJDX")),m=p(s("8CtQK")),v=p(s("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}var I=function(){"use strict";function t(i,n){e(r)(this,t),this._el="string"==typeof i?document.querySelector(i):i,this._elWrapper=this._el.querySelector(t.SEL_WRAPPER),this._elItems=this._el.querySelector(t.SEL_ITEMS),this._elsItem=this._el.querySelectorAll(t.SEL_ITEM),this._elsIndicator=this._el.querySelectorAll(t.SEL_INDICATOR),this._btnPrev=this._el.querySelector(t.SEL_PREV),this._btnNext=this._el.querySelector(t.SEL_NEXT),this._exOrderMin=0,this._exOrderMax=0,this._exItemMin=null,this._exItemMax=null,this._exTranslateMin=0,this._exTranslateMax=0,this._direction="next",this._intervalId=null,this._isSwiping=!1,this._swipeX=0,this._config=e(c)({loop:!0,autoplay:!1,interval:5e3,refresh:!0,swipe:!0},n),this._setInitialValues(),this._addEventListener()}return e(a)(t,[{key:"_addEventListener",value:function(){var e=this;if(this._el.addEventListener("click",(function(i){if(e._autoplay("stop"),i.target.classList.contains(t.CLASS_CONTROL))i.preventDefault(),e._direction=i.target.dataset.slide,e._move();else if(i.target.dataset.slideTo){var n=parseInt(i.target.dataset.slideTo,10);e._moveTo(n)}e._config.loop&&e._autoplay()})),this._el.addEventListener("mouseenter",(function(){e._autoplay("stop")})),this._el.addEventListener("mouseleave",(function(){e._autoplay()})),this._config.refresh&&window.addEventListener("resize",(function(){window.requestAnimationFrame(e._reset.bind(e))})),this._config.loop){var i=this;this._elItems.addEventListener("itcslider-start",(function(){i._isBalancing||(i._isBalancing=!0,window.requestAnimationFrame(i._balanceItems.bind(i)))})),this._elItems.addEventListener("transitionend",(function(){i._isBalancing=!1}))}var n=function(t){e._autoplay("stop");var i=0===t.type.search("touch")?t.touches[0]:t;e._swipeX=i.clientX,e._isSwiping=!0},s=function(t){if(e._isSwiping){var i=0===t.type.search("touch")?t.changedTouches[0]:t,n=e._swipeX-i.clientX;n>50?(e._direction="next",e._move()):n<-50&&(e._direction="prev",e._move()),e._isSwiping=!1,e._config.loop&&e._autoplay()}};this._config.swipe&&(this._el.addEventListener("touchstart",n),this._el.addEventListener("mousedown",n),document.addEventListener("touchend",s),document.addEventListener("mouseup",s)),this._el.addEventListener("dragstart",(function(e){e.preventDefault()})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState?e._autoplay("stop"):"visible"===document.visibilityState&&e._config.loop&&e._autoplay()}))}},{key:"_autoplay",value:function(e){var t=this;if(this._config.autoplay)return"stop"===e?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval((function(){t._direction="next",t._move()}),this._config.interval)))}},{key:"_balanceItems",value:function(){if(this._isBalancing){var e=this._elWrapper.getBoundingClientRect(),t=e.width/this._countActiveItems/2,i=this._elsItem.length;if("next"===this._direction){if(this._exItemMin.getBoundingClientRect().right<e.left-t){this._exItemMin.dataset.order=this._exOrderMin+i;var n=this._exTranslateMin+i*this._widthItem;this._exItemMin.dataset.translate=n,this._exItemMin.style.transform="translateX(".concat(n,"px)"),this._updateExProperties()}}else if(this._exItemMax.getBoundingClientRect().left>e.right+t){this._exItemMax.dataset.order=this._exOrderMax-i;var s=this._exTranslateMax-i*this._widthItem;this._exItemMax.dataset.translate=s,this._exItemMax.style.transform="translateX(".concat(s,"px)"),this._updateExProperties()}window.requestAnimationFrame(this._balanceItems.bind(this))}}},{key:"_changeActiveItems",value:function(){var e=this;this._stateItems.forEach((function(i,n){i?e._elsItem[n].classList.add(t.CLASS_ITEM_ACTIVE):e._elsItem[n].classList.remove(t.CLASS_ITEM_ACTIVE),e._elsIndicator.length&&i?e._elsIndicator[n].classList.add(t.CLASS_INDICATOR_ACTIVE):e._elsIndicator.length&&!i&&e._elsIndicator[n].classList.remove(t.CLASS_INDICATOR_ACTIVE)}))}},{key:"_move",value:function(){var i="next"===this._direction?-this._widthItem:this._widthItem,n=this._transform+i;if(!this._config.loop){var s=this._widthItem*(this._elsItem.length-this._countActiveItems);if(n<-s||n>0)return;this._btnPrev&&(this._btnPrev.classList.remove(t.CLASS_CONTROL_HIDE),this._btnNext.classList.remove(t.CLASS_CONTROL_HIDE)),this._btnPrev&&n===-s?this._btnNext.classList.add(t.CLASS_CONTROL_HIDE):this._btnPrev&&0===n&&this._btnPrev.classList.add(t.CLASS_CONTROL_HIDE)}"next"===this._direction?this._stateItems=e(_)(this._stateItems.slice(-1)).concat(e(_)(this._stateItems.slice(0,-1))):this._stateItems=e(_)(this._stateItems.slice(1)).concat(e(_)(this._stateItems.slice(0,1))),this._changeActiveItems(),this._transform=n,this._elItems.style.transform="translateX(".concat(n,"px)"),this._elItems.dispatchEvent(new CustomEvent("itcslider-start",{bubbles:!0}))}},{key:"_moveTo",value:function(e){var t=this._stateItems.reduce((function(t,i,n){var s=i?e-n:t;return Math.abs(s)<Math.abs(t)?s:t}),this._stateItems.length);if(0!==t){this._direction=t>0?"next":"prev";for(var i=0;i<Math.abs(t);i++)this._move()}}},{key:"_setInitialValues",value:function(){var e=this;if(this._transform=0,this._stateItems=[],this._isBalancing=!1,this._widthItem=this._elsItem[0].getBoundingClientRect().width,this._widthWrapper=this._elWrapper.getBoundingClientRect().width,this._countActiveItems=Math.round(this._widthWrapper/this._widthItem),this._elsItem.forEach((function(t,i){t.dataset.index=i,t.dataset.order=i,t.dataset.translate=0,t.style.transform="",e._stateItems.push(i<e._countActiveItems?1:0)})),this._config.loop){var i=this._elsItem.length-1,n=-(i+1)*this._widthItem;this._elsItem[i].dataset.order=-1,this._elsItem[i].dataset.translate=n,this._elsItem[i].style.transform="translateX(".concat(n,"px)"),this._updateExProperties()}else this._btnPrev&&this._btnPrev.classList.add(t.CLASS_CONTROL_HIDE);this._changeActiveItems(),this._autoplay()}},{key:"_reset",value:function(){var e=this,i=this._elsItem[0].getBoundingClientRect().width,n=this._elWrapper.getBoundingClientRect().width,s=Math.round(n/i);i===this._widthItem&&s===this._countActiveItems||(this._autoplay("stop"),this._elItems.classList.add(t.TRANSITION_OFF),this._elItems.style.transform="translateX(0)",this._setInitialValues(),window.requestAnimationFrame((function(){e._elItems.classList.remove(t.TRANSITION_OFF)})))}},{key:"_updateExProperties",value:function(){var t,i,n=Object.values(this._elsItem).map((function(e){return e})),s=n.map((function(e){return Number(e.dataset.order)}));this._exOrderMin=(t=Math).min.apply(t,e(_)(s)),this._exOrderMax=(i=Math).max.apply(i,e(_)(s));var r=s.indexOf(this._exOrderMin),a=s.indexOf(this._exOrderMax);this._exItemMin=n[r],this._exItemMax=n[a],this._exTranslateMin=Number(this._exItemMin.dataset.translate),this._exTranslateMax=Number(this._exItemMax.dataset.translate)}},{key:"next",value:function(){this._direction="next",this._move()}},{key:"prev",value:function(){this._direction="prev",this._move()}},{key:"moveTo",value:function(e){this._moveTo(e)}},{key:"reset",value:function(){this._reset()}}],[{key:"createInstances",value:function(){var e=this;document.querySelectorAll('[data-slider="itc-slider"]').forEach((function(i){var n=e;if(!e.contains.find((function(e){return e.el===i}))){var s=i.dataset,r={};Object.keys(s).forEach((function(e){if("slider"!==e){var t=s[e];t="false"!==(t="true"===t||t)&&t,t=Number.isNaN(Number(t))?Number(t):t,r[e]=t}})),e.contains.push({el:i,slider:new t(i,r)}),i.dataset.sliderId=e.contains.length,i.querySelectorAll(".slider__control").forEach((function(e){e.dataset.sliderTarget=n.contains.length}))}}))}}]),t}();e(l)(I,"CLASS_CONTROL","slider__control"),e(l)(I,"CLASS_CONTROL_HIDE","slider__control_hide"),e(l)(I,"CLASS_ITEM_ACTIVE","slider__item_active"),e(l)(I,"CLASS_INDICATOR_ACTIVE","active"),e(l)(I,"SEL_WRAPPER",".slider__wrapper"),e(l)(I,"SEL_ITEM",".slider__item"),e(l)(I,"SEL_ITEMS",".slider__items"),e(l)(I,"SEL_PREV",'.slider__control[data-slide="prev"]'),e(l)(I,"SEL_NEXT",'.slider__control[data-slide="next"]'),e(l)(I,"SEL_INDICATOR",".slider__indicators>li"),e(l)(I,"TRANSITION_OFF","slider_disable-transition"),e(l)(I,"contains",[]),document.addEventListener("DOMContentLoaded",(function(){I.createInstances()}))}();
//# sourceMappingURL=index.d83efc33.js.map
