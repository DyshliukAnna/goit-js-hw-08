!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function g(e,t,n){var r,o,a,u,l,f,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function x(e){return c=e,l=setTimeout(S,t),d?g(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function S(){var e=y();if(j(e))return O(e);l=setTimeout(S,function(e){var n=t-(e-f);return s?p(n,a-(e-c)):n}(e))}function O(e){return l=void 0,m&&r?g(e):(r=o=void 0,u)}function h(){var e=y(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return x(f);if(s)return l=setTimeout(S,t),g(f)}return void 0===l&&(l=setTimeout(S,t)),u}return t=E(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(E(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},h.flush=function(){return void 0===l?u:O(y())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function E(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var x="feedback-form-state",j=JSON.parse(localStorage.getItem(x))||{},S={formEl:document.querySelector("form"),emailEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};S.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:S.emailEl.value,message:S.textareaEl.value}),""!==S.emailEl.value||""!==S.textareaEl.value?(S.formEl.reset(),localStorage.removeItem(x),j={}):alert("Будь ласка заповніть всі поля форми")})),S.formEl.addEventListener("input",e(t)((function(){j={email:S.emailEl.value,message:S.textareaEl.value},localStorage.setItem(x,JSON.stringify(j))}),500)),j&&(S.emailEl.value=j.email||"",S.textareaEl.value=j.message||"")}();
//# sourceMappingURL=03-feedback.fd7f9feb.js.map
