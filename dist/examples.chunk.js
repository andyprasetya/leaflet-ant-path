(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{851:function(e,t,n){"use strict";n.r(t);var r,o,a=n(0),c=n.n(a),i=n(38),l=n(294),u=n.n(l),s=n(295),f=n(857),p="DRIVING",m="TRANSIT";function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){return"berlin-postdam_".concat(e)},w=(E(r={},p,"red"),E(r,m,"purple"),r),O=(E(o={},g(p),{color:w[p],delay:800}),E(o,g(m),{color:w[m],delay:300}),o),_=function(e){function t(){return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),e=this,!(n=h(t).apply(this,arguments))||"object"!==y(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n;var e,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.PureComponent),n=t,o=[{key:"_allRoutesLoaded",value:function(e){return e.data[g(p)]&&e.data[g(m)]}}],(r=[{key:"componentWillMount",value:function(){var e=this;[p,m].forEach(function(t){return e.props.loadRoute(g(t))})}},{key:"render",value:function(){var e,n=this.props.routes;return t._allRoutesLoaded(n)&&(e=[].concat(b(n.data[g(p)]),b(n.data[g(m)]))),c.a.createElement(f.a,{title:"Defining the faster route: car vs. public transport"},e?c.a.createElement(s.a,{latLngBounds:e},Object.keys(n.data).map(function(e){return c.a.createElement(u.a,{key:e,positions:n.data[e],options:O[e]})})):null,c.a.createElement("div",{className:"trip-type is-pulled-right"},c.a.createElement("small",{style:{color:w[p]}},c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fa fa-car"}))," Car"),c.a.createElement("small",{style:{color:w[m]}},c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fa fa-train"}))," Public Transport")))}}])&&d(n.prototype,r),o&&d(n,o),t}(),j=n(140),S=Object(i.b)(function(e){return{routes:e.routes}},function(e){return{loadRoute:function(t){return e(Object(j.a)(t))}}})(_),N=n(21);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,R(t).call(this,e))).state={open:!1},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this,n=this.props,r=n.hash,o=n.title,a=n.description,i=this.state.open?null:["Load Example"];return c.a.createElement(f.a,{title:o,footerItems:i,onClick:function(){return e.setState({open:!0})}},this.state.open?c.a.createElement("iframe",{width:"100%",height:400,scrolling:"no",src:t._src("rubenspgcavalcante",r),frameBorder:"no",allowTransparency:"true",allowFullScreen:"true",style:{height:400,width:"100%"}}):c.a.createElement("div",{className:"content"},a))}}])&&k(n.prototype,r),t}();function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}C(x,"propTypes",{hash:N.string.isRequired,title:N.string.isRequired,description:N.string}),C(x,"_profile",function(e){return"//codepen.io/".concat(e)}),C(x,"_src",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:400,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"js,result",o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"dark";return"".concat(x._profile(e),"/embed/").concat(t,"/?height=").concat(n,"&theme-id=").concat(o,"&default-tab=").concat(r,"&embed-version=2")});var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,L(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,a.PureComponent),n=t,(r=[{key:"render",value:function(){return c.a.createElement("div",{className:"examples"},c.a.createElement("h1",{className:"title"},"Examples"),c.a.createElement("h2",{className:"subtitle"},"Multiple paths"),c.a.createElement(S,null),c.a.createElement("hr",null),c.a.createElement("h1",{className:"title"},"Try by yourself"),c.a.createElement("h2",{className:"subtitle"},"Editable examples"),c.a.createElement(x,{title:"Stopping and Resuming Route",hash:"BYdgXR",description:"You can stop and resume the animation any time"}),c.a.createElement(x,{title:"Reverse Route",hash:"MvdJbb",description:"You can reverse the route flux"}))}}])&&I(n.prototype,r),t}();n.d(t,"Component",function(){return M});var M=J},857:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(21),c=function(e){var t=e.title,n=e.icon,r=e.footerItems,a=e.onClick,c=e.children;return o.a.createElement("div",{className:"card"},t?o.a.createElement("header",{className:"card-header"},o.a.createElement("p",{className:"card-header-title"},t),o.a.createElement("a",{className:"card-header-icon"},n?o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"fa fa-".concat(n)})):null)):null,o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"content"},c)),r?o.a.createElement("footer",{className:"card-footer"},r.map(function(e){return o.a.createElement("a",{key:e,className:"card-footer-item",onClick:function(t){return a(e)}},e)})):null)};c.propTypes={title:a.string,icon:a.string},t.a=c}}]);
//# sourceMappingURL=examples.chunk.js.map