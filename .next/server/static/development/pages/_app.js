module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/global */ "./style/global.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import '../styles/style.scss';

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  componentDidMount() {
    // Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('service worker registration successful');
      }).catch(err => {
        console.warn('service worker registration failed', err.message);
      });
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Component, pageProps), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _style_global__WEBPACK_IMPORTED_MODULE_3__["default"].__hash
    }, _style_global__WEBPACK_IMPORTED_MODULE_3__["default"]));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./style/global.js":
/*!*************************!*\
  !*** ./style/global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = ["@font-face{font-family:'Molot';src:url('/fonts/Molot/MolotRegular/MolotRegular.woff') format('woff'), url('/fonts/Molot/MolotRegular/MolotRegular.ttf') format('ttf'), url('/fonts/Molot/MolotRegular/MolotRegular.eot') format('eot');font-weight:700;font-style:bold;}", "@font-face{font-family:'MuseoSans';src:url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.woff') format('woff'), url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.ttf') format('ttf'), url('/fonts/MuseoSans/MuseoSansBold/MuseoSansBold.eot') format('eot');font-weight:700;font-style:bold;}", "@font-face{font-family:'MuseoSans';src:url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.woff') format('woff'), url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.ttf') format('ttf'), url('/fonts/MuseoSans/MuseoSansBlack/MuseoSansBlack.eot') format('eot');font-weight:900;font-style:black;}", "@font-face{font-family:'MuseoSans';src:url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.woff') format('woff'), url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.ttf') format('ttf'), url('/fonts/MuseoSans/MuseoSansMedium/MuseoSansMedium.eot') format('eot');font-weight:500;font-style:medium;}", "@font-face{font-family:'MuseoSans';src:url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.woff') format('woff'), url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.ttf') format('ttf'), url('/fonts/MuseoSans/MuseoSansRegular/MuseoSansRegular.eot') format('eot');font-weight:300;font-style:bold;}", "@font-face{font-family:'MuseoSans';src:url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.woff') format('woff'), url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.ttf') format('ttf'), url('/fonts/MuseoSans/MuseoSansItalic/MuseoSansItalic.eot') format('eot');font-weight:500;font-style:italic;}", "body,html{--noto-font:'MuseoSans',sans-serif;--molot-font:'Molot',serif;--accent:#b3a764;--accent-red:rgb(245,61,64);--orange-color:rgb(242,125,14);--accent-dark:#3f3f3f;--l-grey:#e1e1e1;--sub-color:#9b9b9b;--wall-color:#ebebeb;--accent-grey:#727272;--text:#333;--border-radius:7px;--new-gradient:linear-gradient( to right, rgb(242,125,14) 0%, rgb(237,27,61) 100% );--yel-red-gradient:linear-gradient(to right,#eecf32 0%,#c22328 100%);--red-gradient:linear-gradient(to left,#dc4622 0%,#b63b1d 100%);--card-shadow:3px 3px 2px rgba(0,0,0,0.1), -3px 3px 2px rgba(0,0,0,0.1);--box-shadow:3px 3px 4px rgba(0,0,0,0.25);--box-shadow-up:5px 23px 20px -15px rgba(0,0,0,0.35);font-family:var(--noto-font);background:#fafafa;min-height:100vh;--grid-gutter-width:30px;--grid-columns:12;--grid-breakpoints:(xs:0,sm:576px,md:768px,lg:992px,xl:1200px);--container-max-widths:(sm:540px,md:720px,lg:960px,xl:1140px);--gutter:var(--grid-gutter-width);}", "p{margin:0;padding:0;}", "nav{text-align:center;padding-top:5px;}", "ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "nav>ul{padding:4px 16px;}", "li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}", "a{color:#c94f28;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}", "a:hover{-webkit-text-decoration:none;text-decoration:none;color:#cb4828;}", "b{font-weight:700;}", ".header-block{height:71px;}", "body::-webkit-scrollbar{width:1.2em;}", "body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0px 0 3px rgba(0,0,0,0.2);background-color:#a8a8a8;}", "body::-webkit-scrollbar-thumb{background-color:#fafafa;box-shadow:0px 10px 5px -5px rgba(0,0,0,0.2), 0px -7px 5px -5px rgba(255,0,0,0.2);border-radius:3px;outline:1px solid slategrey;}", ".home{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".button-grey-container{margin-top:30px;}", ".button-grey-container .button-grey{position:relative;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;padding:0;display:block;font-weight:300;text-align:center;width:170px;height:50px;border-radius:30px;background-color:var(--accent-red);color:#ffffff;font-size:16px;line-height:50px;margin:0 auto;box-shadow:var(--box-shadow-up);-webkit-transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;z-index:1;}", ".button-grey-container .button-grey:hover{box-shadow:var(--box-shadow);}", ".button-grey-container .button-grey:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}", ".button-grey-container .arenda-button{position:relative;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;padding:0;display:block;font-weight:300;text-align:center;width:170px;height:40px;border-radius:30px;background:rgba(255,255,255,0.05);color:#6d6d6d;font-size:16px;line-height:40px;margin:0 0 0 30px;box-shadow:0 0 3px rgba(0,0,0,0.2);-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".button-grey-container .arenda-button:hover{background:rgba(255,255,255,1);box-shadow:0 0 15px rgba(0,0,0,0.1);}", ".button-container{position:relative;z-index:1;}", ".button-container .button-min{z-index:0;display:block;position:absolute;width:50px;height:50px;bottom:0;right:0;border-top-left-radius:15px;background-color:var(--accent-red);box-shadow:inset 5px 5px 7px rgba(0,0,0,0.5);-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".button-container .button-min::before{position:absolute;display:block;content:'';top:50%;left:50%;-webkit-transform:translate(-50%,-50%) rotateZ(45deg);-ms-transform:translate(-50%,-50%) rotateZ(45deg);transform:translate(-50%,-50%) rotateZ(45deg);width:11px;height:11px;background-color:rgba(0,0,0,0);border-top:2px solid white;border-right:2px solid white;}", ".button-container .button-min:hover{width:90px;}", ".header-common{font-family:var(--noto-font);color:#7e7e7e;display:block;font-size:15px;font-weight:500;line-height:24px;text-align:center;margin-top:30px;}", ".header-red{font-family:var(--noto-font);display:block;font-size:23px;font-weight:700;line-height:26px;margin-bottom:20px;-webkit-letter-spacing:-0.15px;-moz-letter-spacing:-0.15px;-ms-letter-spacing:-0.15px;letter-spacing:-0.15px;}", ".header-razdel{font-size:20px;font-weight:700;line-height:30px;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;}", ".header-min-colored{font-family:var(--molot-font);font-size:21px;font-weight:700;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;color:#474747;line-height:24px;}", ".header-sections{font-family:var(--noto-font);color:#7e7e7e;display:block;font-size:17px;font-weight:500;line-height:24px;text-align:center;margin-top:30px;margin-bottom:30px;}", ".subheading-common{display:block;font-family:var(--noto-font);color:#313131;font-size:14px;line-height:24px;margin-bottom:30px;margin-top:40px;}", ".subheading-common-2{display:block;color:rgb(82,82,82);font-size:14px;line-height:24px;margin-bottom:15px;margin-top:15px;font-weight:700;padding-left:15px;padding-right:15px;}", ".subheading-common-3{display:block;color:#313131;font-size:15px;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;font-weight:300;line-height:25px;margin-bottom:30px;padding-left:15px;padding-right:15px;}", ".subheading-red-bottom{color:var(--accent-red);display:block;margin-bottom:30px;font-weight:700;}", ".subheading-red-top{color:var(--accent-red);display:block;margin-top:30px;font-weight:700;}", ".text-common{display:block;font-family:var(--noto-font);color:#3b3b3b;font-size:14px;font-weight:400;line-height:22px;-webkit-letter-spacing:-0.35px;-moz-letter-spacing:-0.35px;-ms-letter-spacing:-0.35px;letter-spacing:-0.35px;margin-bottom:0px;}", ".text{display:block;font-family:var(--noto-font);color:#535353;font-size:15px;font-weight:300;line-height:23px;margin-bottom:0px;}", ".text-min{display:block;font-family:var(--noto-font);color:#3b3b3b;font-size:14px;font-weight:300;line-height:20px;margin-bottom:0px;}", ".text-bold{display:block;font-family:var(--noto-font);color:#313131;font-size:15px;font-weight:900;line-height:22px;}", ".text-italic{font-family:var(--noto-font);font-style:italic;font-size:15px;line-height:17px;}", ".text-black{color:#353535;}", ".section-plate{margin:7px auto 7px;padding:0 15px;}", ".bg-container{background-color:#e5e5e5;border:1px solid #dcdcdc;border-radius:3px;}", ".breadcrumbs{margin-top:15px;margin-bottom:12px;margin-left:15px;font-family:var(--molot-font);line-height:15px;}", ".breadcrumbs .crambs{display:inline-block;font-size:13px;font-weight:500;text-transform:uppercase;padding-right:3px;color:#3f3f3f;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".breadcrumbs .cramb-main{color:var(--accent-red);}", ".mycontainer{width:100%;}", ".color-section{background:#fff;box-shadow:0 0 15px rgba(0,0,0,0.075);}", ".white-section{background-color:#fff;}", "@media (min-width:576px){.mycontainer{max-width:540px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.header-razdel{width:90%;}.header-common{font-size:20px;font-weight:700;line-height:32px;}.header-sections{font-size:22px;font-weight:500;line-height:24px;margin-top:30px;margin-bottom:30px;}.subheading-common{display:block;font-family:var(--noto-font);color:var(--accent-grey);font-size:16px;line-height:24px;margin-bottom:15px;margin-top:15px;}}", "@media (min-width:768px){.header-common{font-size:20px;line-height:30px;}.header-sections{font-size:28px;font-weight:500;line-height:24px;margin-top:30px;margin-bottom:30px;}.header-red{font-size:26px;}.header-min-colored{font-size:23px;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;}.subheading-common{font-size:16px;line-height:28px;margin-bottom:15px;}.mycontainer{max-width:720px;padding-left:15px;padding-right:15px;}.header-razdel{font-size:26px;font-weight:700;line-height:36px;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;}.breadcrumbs{margin-left:15px;}.breadcrumbs .crambs{font-size:14px;padding-right:3px;}}", "@media (min-width:992px){.header-block{height:90px;}.header-common{font-size:30px;line-height:40px;padding-left:100px;padding-right:100px;}.tm-cont{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header-red{font-size:30px;line-height:32px;}.header-min-colored{font-size:27px;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:32px;}.subheading-common{margin-bottom:0px;font-size:18px;line-height:36px;}.subheading-common-2{display:block;font-family:var(--noto-font);font-size:20px;line-height:32px;margin-bottom:30px;padding-left:15px;padding-right:15px;}.subheading-common-3{display:block;font-family:var(--noto-font);color:#313131;font-size:18px;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;font-weight:300;line-height:32px;margin-bottom:30px;padding-left:15px;padding-right:15px;}.mycontainer{max-width:960px;}.text-common{font-size:16px;font-weight:300;line-height:28px;}.text-italic{font-family:var(--noto-font);font-style:italic;font-size:18px;line-height:17px;}.text{display:block;font-family:var(--noto-font);color:#3b3b3b;font-size:18px;font-weight:300;line-height:26px;margin-bottom:0px;}.text-min{font-size:16px;line-height:23px;}.text-bold{font-size:16px;font-weight:700;line-height:26px;}.breadcrumbs{margin-top:30px;margin-bottom:12px;margin-left:15px;font-family:var(--molot-font);line-height:15px;}.breadcrumbs .crambs{display:inline-block;font-size:15px;font-weight:500;text-transform:uppercase;padding-right:3px;color:#3f3f3f;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.breadcrumbs .cramb-main{color:var(--accent-red);}}", "@media (min-width:1200px){.header-block{height:120px;}.button-grey-container{margin-top:30px;}.button-grey-container .button-grey{background-color:var(--accent-red);color:#ffffff;font-size:17px;line-height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:220px;height:60px;box-shadow:15px 25px 20px -15px rgba(237,27,61,0.15), -15px 25px 20px -15px rgba(242,125,14,0.25);}.button-grey-container .arenda-button{position:relative;width:220px;height:60px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:300;border-radius:30px;background:rgba(255,255,255,0.05);color:#6d6d6d;font-size:16px;margin:0 0 0 15px;box-shadow:0 0 3px rgba(0,0,0,0.2), inset 0 0 15px rgba(255,255,255,1);}.mycontainer{max-width:1140px;}.header-common{font-size:36px;line-height:52px;}.header-sections{font-size:36px;font-weight:500;line-height:24px;margin-top:45px;margin-bottom:30px;}.header-razdel{font-size:36px;font-weight:700;line-height:36px;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;}.header-red{font-size:40px;line-height:40px;font-weight:500;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;}.header-min-colored{font-size:30px;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:36px;}.subheading-common{font-size:18px;line-height:36px;}.text{display:block;font-family:var(--noto-font);color:#3b3b3b;color:#212529;font-size:18px;font-weight:300;line-height:28px;margin-bottom:0px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}.text-min{display:block;font-family:var(--noto-font);color:#3b3b3b;font-size:17px;font-weight:300;line-height:25px;margin-bottom:0px;}.text-italic{font-family:var(--noto-font);font-style:italic;font-size:21px;line-height:22px;}.text-common{font-size:18px;line-height:36px;}.text-bold{font-size:21px;line-height:33px;}.breadcrumbs{margin-left:15px;margin-top:20px;margin-bottom:20px;}.breadcrumbs .crambs{font-size:19px;line-height:22px;padding-right:3px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}}", "@media (min-width:1400px){.header-common:after{width:350px;left:-400px;}}", "@-webkit-keyframes closeWindow{0%{opacity:1;}100%{opacity:0;}}", "@keyframes closeWindow{0%{opacity:1;}100%{opacity:0;}}", ".ril__outer{background-color:rgba(0,0,0,0.85);outline:none;top:0;left:0;right:0;bottom:0;z-index:1000;width:100%;height:100%;-ms-content-zooming:none;-ms-user-select:none;-ms-touch-select:none;touch-action:none;}", ".ril__outerClosing{opacity:0;}", ".ril__inner{position:absolute;top:0;left:0;right:0;bottom:0;}", ".ril__image,.ril__imagePrev,.ril__imageNext{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;max-width:none;-ms-content-zooming:none;-ms-user-select:none;-ms-touch-select:none;touch-action:none;}", ".ril__imageDiscourager{background-repeat:no-repeat;background-position:center;background-size:contain;}", ".ril__navButtons{border:none;position:absolute;top:0;bottom:0;width:20px;height:34px;padding:40px 30px;margin:auto;cursor:pointer;opacity:0.7;}", ".ril__navButtons:hover{opacity:1;}", ".ril__navButtons:active{opacity:0.7;}", ".ril__navButtonPrev{left:0;background:rgba(0,0,0,0.2) url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==') no-repeat center;}", ".ril__navButtonNext{right:0;background:rgba(0,0,0,0.2) url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+') no-repeat center;}", ".ril__downloadBlocker{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');background-size:cover;}", ".ril__caption,.ril__toolbar{background-color:rgba(0,0,0,0.5);position:absolute;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".ril__caption{bottom:0;max-height:150px;overflow:auto;}", ".ril__captionContent{padding:10px 20px;color:#fff;}", ".ril__toolbar{top:0;height:50px;}", ".ril__toolbarSide{height:50px;margin:0;}", ".ril__toolbarLeftSide{padding-left:20px;padding-right:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;overflow:hidden;text-overflow:ellipsis;}", ".ril__toolbarRightSide{padding-left:0;padding-right:20px;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}", ".ril__toolbarItem{display:inline-block;line-height:50px;padding:0;color:#fff;font-size:120%;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}", ".ril__toolbarItemChild{vertical-align:middle;}", ".ril__builtinButton{width:40px;height:35px;cursor:pointer;border:none;opacity:0.7;}", ".ril__builtinButton:hover{opacity:1;}", ".ril__builtinButton:active{outline:none;}", ".ril__builtinButtonDisabled{cursor:default;opacity:0.5;}", ".ril__builtinButtonDisabled:hover{opacity:0.5;}", ".ril__closeButton{background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=') no-repeat center;}", ".ril__zoomInButton{background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+') no-repeat center;}", ".ril__zoomOutButton{background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=') no-repeat center;}", ".ril__outerAnimating{-webkit-animation-name:closeWindow;animation-name:closeWindow;}", "@-webkit-keyframes pointFade{0%,19.999%,100%{opacity:0;}20%{opacity:1;}}", "@keyframes pointFade{0%,19.999%,100%{opacity:0;}20%{opacity:1;}}", ".ril__loadingCircle{width:60px;height:60px;position:relative;}", ".ril__loadingCirclePoint{width:100%;height:100%;position:absolute;left:0;top:0;}", ".ril__loadingCirclePoint::before{content:'';display:block;margin:0 auto;width:11%;height:30%;background-color:#fff;border-radius:30%;-webkit-animation:pointFade 800ms infinite ease-in-out both;animation:pointFade 800ms infinite ease-in-out both;}", ".ril__loadingCirclePoint:nth-of-type(1){-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}", ".ril__loadingCirclePoint:nth-of-type(7){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".ril__loadingCirclePoint:nth-of-type(1)::before,.ril__loadingCirclePoint:nth-of-type(7)::before{-webkit-animation-delay:-800ms;animation-delay:-800ms;}", ".ril__loadingCirclePoint:nth-of-type(2){-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg);}", ".ril__loadingCirclePoint:nth-of-type(8){-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg);}", ".ril__loadingCirclePoint:nth-of-type(2)::before,.ril__loadingCirclePoint:nth-of-type(8)::before{-webkit-animation-delay:-666ms;animation-delay:-666ms;}", ".ril__loadingCirclePoint:nth-of-type(3){-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg);}", ".ril__loadingCirclePoint:nth-of-type(9){-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg);}", ".ril__loadingCirclePoint:nth-of-type(3)::before,.ril__loadingCirclePoint:nth-of-type(9)::before{-webkit-animation-delay:-533ms;animation-delay:-533ms;}", ".ril__loadingCirclePoint:nth-of-type(4){-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}", ".ril__loadingCirclePoint:nth-of-type(10){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}", ".ril__loadingCirclePoint:nth-of-type(4)::before,.ril__loadingCirclePoint:nth-of-type(10)::before{-webkit-animation-delay:-400ms;animation-delay:-400ms;}", ".ril__loadingCirclePoint:nth-of-type(5){-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg);}", ".ril__loadingCirclePoint:nth-of-type(11){-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg);}", ".ril__loadingCirclePoint:nth-of-type(5)::before,.ril__loadingCirclePoint:nth-of-type(11)::before{-webkit-animation-delay:-266ms;animation-delay:-266ms;}", ".ril__loadingCirclePoint:nth-of-type(6){-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg);}", ".ril__loadingCirclePoint:nth-of-type(12){-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg);}", ".ril__loadingCirclePoint:nth-of-type(6)::before,.ril__loadingCirclePoint:nth-of-type(12)::before{-webkit-animation-delay:-133ms;animation-delay:-133ms;}", ".ril__loadingCirclePoint:nth-of-type(7){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".ril__loadingCirclePoint:nth-of-type(13){-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}", ".ril__loadingCirclePoint:nth-of-type(7)::before,.ril__loadingCirclePoint:nth-of-type(13)::before{-webkit-animation-delay:0ms;animation-delay:0ms;}", ".ril__loadingContainer{position:absolute;top:0;right:0;bottom:0;left:0;}", ".ril__imagePrev .ril__loadingContainer,.ril__imageNext .ril__loadingContainer{display:none;}", ".ril__errorContainer{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}", ".ril__imagePrev .ril__errorContainer,.ril__imageNext .ril__errorContainer{display:none;}", ".ril__loadingContainer__icon{color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);}"];
_defaultExport.__hash = "4230751277";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map