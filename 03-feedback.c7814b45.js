function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,f=setTimeout(w,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=m();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function O(e){return f=void 0,g&&o?b(e):(o=r=void 0,a)}function T(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(m())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};var b={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}};const h=document.querySelector(".feedback-form"),j={};!function(){const e=b.load("feedback-form-state");if(console.log(e),void 0===e)return;for(const t in e)e.hasOwnProperty(t)&&(h.elements[t].value=e[t],j[t]=e[t])}(),h.addEventListener("input",e(t)((function(e){const t=e.target,n=t.name,o=t.value;j[n]=o,b.save("feedback-form-state",j)}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(j),e.currentTarget.reset(),b.remove("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c7814b45.js.map
