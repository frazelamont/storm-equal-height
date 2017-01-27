/**
 * @name storm-equal-height: Layout helper to equalise the height of a set of DOM elements
 * @version 0.7.0: Fri, 27 Jan 2017 14:12:09 GMT
 * @author mjbp
 * @license MIT
 */
!function t(e,n,i){function o(u,a){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(r)return r(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[u]={exports:{}};e[u][0].call(l.exports,function(t){var n=e[u][1][t];return o(n?n:t)},l,l.exports,t,e,n,i)}return n[u].exports}for(var r="function"==typeof require&&require,u=0;u<i.length;u++)o(i[u]);return o}({1:[function(t,e,n){var i=t("./_root"),o=i.Symbol;e.exports=o},{"./_root":6}],2:[function(t,e,n){function i(t){return null==t?void 0===t?c:a:(t=Object(t),f&&f in t?r(t):u(t))}var o=t("./_Symbol"),r=t("./_getRawTag"),u=t("./_objectToString"),a="[object Null]",c="[object Undefined]",f=o?o.toStringTag:void 0;e.exports=i},{"./_Symbol":1,"./_getRawTag":4,"./_objectToString":5}],3:[function(t,e,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(t,e,n){function i(t){var e=u.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[c]=n:delete t[c]),o}var o=t("./_Symbol"),r=Object.prototype,u=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;e.exports=i},{"./_Symbol":1}],5:[function(t,e,n){function i(t){return r.call(t)}var o=Object.prototype,r=o.toString;e.exports=i},{}],6:[function(t,e,n){var i=t("./_freeGlobal"),o="object"==typeof self&&self&&self.Object===Object&&self,r=i||o||Function("return this")();e.exports=r},{"./_freeGlobal":3}],7:[function(t,e,n){function i(t,e,n){function i(e){var n=y,i=m;return y=m=void 0,_=e,O=t.apply(i,n)}function l(t){return _=t,x=setTimeout(b,e),T?i(t):O}function s(t){var n=t-w,i=t-_,o=e-n;return E?f(o,j-i):o}function d(t){var n=t-w,i=t-_;return void 0===w||n>=e||n<0||E&&i>=j}function b(){var t=r();return d(t)?v(t):void(x=setTimeout(b,s(t)))}function v(t){return x=void 0,S&&y?i(t):(y=m=void 0,O)}function p(){void 0!==x&&clearTimeout(x),_=0,y=w=m=x=void 0}function h(){return void 0===x?O:v(r())}function g(){var t=r(),n=d(t);if(y=arguments,m=this,w=t,n){if(void 0===x)return l(w);if(E)return x=setTimeout(b,e),i(w)}return void 0===x&&(x=setTimeout(b,e)),O}var y,m,j,O,x,w,_=0,T=!1,E=!1,S=!0;if("function"!=typeof t)throw new TypeError(a);return e=u(e)||0,o(n)&&(T=!!n.leading,E="maxWait"in n,j=E?c(u(n.maxWait)||0,e):j,S="trailing"in n?!!n.trailing:S),g.cancel=p,g.flush=h,g}var o=t("./isObject"),r=t("./now"),u=t("./toNumber"),a="Expected a function",c=Math.max,f=Math.min;e.exports=i},{"./isObject":8,"./now":11,"./toNumber":13}],8:[function(t,e,n){function i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}e.exports=i},{}],9:[function(t,e,n){function i(t){return null!=t&&"object"==typeof t}e.exports=i},{}],10:[function(t,e,n){function i(t){return"symbol"==typeof t||r(t)&&o(t)==u}var o=t("./_baseGetTag"),r=t("./isObjectLike"),u="[object Symbol]";e.exports=i},{"./_baseGetTag":2,"./isObjectLike":9}],11:[function(t,e,n){var i=t("./_root"),o=function(){return i.Date.now()};e.exports=o},{"./_root":6}],12:[function(t,e,n){function i(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError(u);return r(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),o(t,e,{leading:i,maxWait:e,trailing:a})}var o=t("./debounce"),r=t("./isObject"),u="Expected a function";e.exports=i},{"./debounce":7,"./isObject":8}],13:[function(t,e,n){function i(t){if("number"==typeof t)return t;if(r(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=f.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):c.test(t)?u:+t}var o=t("./isObject"),r=t("./isSymbol"),u=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=i},{"./isObject":8,"./isSymbol":10}],14:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=t("lodash/throttle"),r=i(o),u={minWidth:768},a={init:function(){return this.throttledEqualise=(0,r.default)(this.equalise,16),window.setTimeout(this.equalise.bind(this),0),window.addEventListener("resize",this.throttledEqualise.bind(this),!1),this},equalise:function(){var t=0;this.DOMElements.forEach(function(e){e.style.height="auto",e.offsetHeight>t&&(t=e.offsetHeight)}),window.innerWidth<this.settings.minWidth||this.DOMElements.forEach(function(e){e.style.height=t+"px"})}},c=function(t,e){var n=[].slice.call(document.querySelectorAll(t));if(!n.length)throw new Error("Equal Height cannot be initialised, no augmentable elements found");return n.map(function(t){return Object.assign(Object.create(a),{DOMElements:[].slice.call(t.children),settings:Object.assign({},u,e)}).init()})};n.default={init:c}},{"lodash/throttle":12}]},{},[14]);