!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,l,f,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function x(e){return c=e,l=setTimeout(h,t),d?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=a}function h(){var e=y();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return v?p(n,a-(e-c)):n}(e))}function w(e){return l=void 0,s&&r?b(e):(r=i=void 0,u)}function S(){var e=y(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return x(f);if(v)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=E(t)||0,g(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(E(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},S.flush=function(){return void 0===l?u:w(y())},S}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var x,j="feedback-form-state",h={formEl:document.querySelector("form"),emailEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};h.formEl.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(j),""!==h.emailEl.value&&""!==h.textareaEl.value?(console.log({email:h.emailEl.value,name:h.textareaEl.value}),h.formEl.reset()):alert("Будь ласка заповніть всі поля форми")})),h.textareaEl.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(j,t)}),500)),(x=localStorage.getItem(j))&&(h.textareaEl.value=x)}();
//# sourceMappingURL=03-feedback.3700e528.js.map