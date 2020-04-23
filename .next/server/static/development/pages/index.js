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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-yandex-metrika */ "react-yandex-metrika");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { Spring } from 'react-spring';
// import * as gtag from '../lib/gtag';


 // Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4___default()('hit', next_router__WEBPACK_IMPORTED_MODULE_1___default.a.router.asPath);
  }

  render() {
    return __jsx("div", null, __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
      className: "header-block"
    }), __jsx(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__["YMInitializer"], {
      accounts: [51052037],
      options: {
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true
      },
      version: "2"
    }), this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout); // export default ({ children }) => (
//   <div>
//     <Nav />
//     <YMInitializer
//       accounts={[51052037]}
//       options={{
//         defer: true,
//         webvisor: true,
//         clickmap: true,
//         trackLinks: true,
//         accurateTrackBounce: true,
//         trackHash: true
//       }}
//       version="2"
//     />
//     {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
//       {props => <div style={props}>{children}</div>}
//     </Spring> */}
//     {children}
//     <Footer />
//   </div>
// );

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/calcAdv.js":
/*!*******************************!*\
  !*** ./components/calcAdv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (CalcAdv => __jsx("div", {
  className: "jsx-1837874551" + " " + "container-fluid calcAdv"
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-1837874551" + " " + "dots-left"
}), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
  left: true
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "arrow-left-yellow"
})), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
  right: true
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "arrow-right-red"
})), __jsx("div", {
  className: "jsx-1837874551" + " " + "container calcAdv-container"
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "row"
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "col-12"
}, __jsx("div", {
  className: "jsx-1837874551" + " " + "wrapper"
}, __jsx("h3", {
  className: "jsx-1837874551" + " " + "header-min-colored"
}, __jsx("span", {
  className: "jsx-1837874551" + " " + "dark-color"
}, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u0441\u043A\u043E\u043B\u044C\u043A\u043E "), "\u043C\u044B \u0434\u043B\u044F \u0432\u0430\u0441 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043C?"), __jsx("span", {
  className: "jsx-1837874551" + " " + "calc-desc"
}, "\u0412\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u043E\u0439, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0443\u0437\u043D\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/calculator",
  as: "/calculator"
}, __jsx("a", {
  className: "jsx-1837874551" + " " + "calc-link"
}, __jsx("span", {
  className: "jsx-1837874551"
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1837874551"
}, [".calcAdv.jsx-1837874551{overflow-x:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}", ".calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;top:0;right:0;opacity:0.5;background:url('/images/dots-min-white.png') 0% 0% no-repeat;}", ".calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 0% no-repeat;}", ".calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:0;top:50px;left:-310px;width:350px;height:310px;opacity:1;-webkit-clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);border-radius:3px;background-color:#d57c29;}", ".calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:0;top:50px;right:-310px;width:350px;height:310px;opacity:1;-webkit-clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);border-radius:3px;background-color:#c42729;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:410px;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:230px;margin:0 auto;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:27px;margin-bottom:45px;text-align:center;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:14px;font-weight:400;line-height:22px;margin-bottom:30px;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:170px;height:40px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:15px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:40px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:#ffffff;box-shadow:var(--box-shadow);}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}", ".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}", "@media (min-width:768px){.calcAdv.jsx-1837874551{overflow-x:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}.calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;top:-15%;right:0;opacity:0.3;background:url('/images/dots-min-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:-1;top:50px;left:-100px;width:350px;height:310px;opacity:0;-webkit-clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);border-radius:3px;background-color:#d57c29;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:-1;top:50px;right:-100px;width:350px;height:310px;opacity:0;-webkit-clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);border-radius:3px;background-color:#c42729;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:410px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:230px;margin:0 auto;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:28px;margin-bottom:60px;text-align:center;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:14px;font-weight:400;line-height:22px;margin-bottom:30px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:170px;height:40px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:15px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:40px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:#ffffff;box-shadow:var(--box-shadow);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}}", "@media (min-width:1200px){.calcAdv.jsx-1837874551{overflow:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}.calcAdv.jsx-1837874551::after{display:block;position:absolute;content:'';z-index:-1;top:50%;left:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551::before{display:block;position:absolute;content:'';z-index:0;top:50%;right:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:460px;height:560px;top:-60%;right:0;opacity:0.1;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:460px;height:560px;left:0;bottom:-60%;opacity:0.1;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:-1;top:35px;left:0;width:330px;height:437px;-webkit-clip-path:polygon(0 0,88% 0,100% 45%,88% 100%,0 100%);clip-path:polygon(0 0,88% 0,100% 45%,88% 100%,0 100%);border-radius:3px;background-color:#d57c29;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:-1;top:35px;right:0px;width:330px;height:437px;-webkit-clip-path:polygon(12% 0,100% 0,100% 100%,12% 100%,0 50%);clip-path:polygon(12% 0,100% 0,100% 100%,12% 100%,0 50%);border-radius:3px;background-color:#c42729;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:510px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:580px;margin:0 auto;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:36px;margin-bottom:45px;text-align:center;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:22px;font-weight:500;line-height:30px;margin-bottom:30px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{position:relative;font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:270px;height:60px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:21px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:60px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551::before{position:absolute;display:block;content:'';top:7px;left:7px;right:7px;bottom:7px;border-radius:3px;border:2px solid white;-webkit-transition:all 0.2s ease-in 0.2s;transition:all 0.2s ease-in 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{box-shadow:var(--box-shadow);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover.jsx-1837874551::before{top:12px;left:25px;right:25px;bottom:12px;opacity:0;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}}", "@media (min-width:1400px){.calcAdv.jsx-1837874551::after{display:block;position:absolute;content:'';top:50%;left:-20px;width:540px;height:285px;}.calcAdv.jsx-1837874551::before{top:50%;right:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{top:35px;left:0;width:475px;height:437px;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{top:35px;right:0px;width:475px;height:437px;}}"])));

/***/ }),

/***/ "./components/energyDecisions.js":
/*!***************************************!*\
  !*** ./components/energyDecisions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (EnergyDecisions => __jsx("section", {
  className: "jsx-3921389519" + " " + "container-fluid energyDecisions"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "row"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "col-12"
}, __jsx("h2", {
  className: "jsx-3921389519" + " " + "header-common"
}, "\u0418\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0438 \u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0435 \u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0420\u0435\u0448\u0435\u043D\u0438\u044F \u0441 \u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u0438 \u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u042D\u043D\u0435\u0440\u0433\u0438\u0435\u0439")))), __jsx("div", {
  className: "jsx-3921389519" + " " + "container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "row"
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("div", {
  className: "jsx-3921389519" + " " + "col-12 cards-plate"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card-container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "card-img-container"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBolt"],
  size: "4x",
  color: "#d57d29",
  className: "icon"
})), __jsx("div", {
  className: "jsx-3921389519" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-3921389519" + " " + "card-heading"
}, "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), __jsx("p", {
  className: "jsx-3921389519" + " " + "card-desc"
}, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u043B\u044E\u0431\u044B\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0445.")))), __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card-container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "card-img-container"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSun"],
  size: "4x",
  color: "#d57d29",
  className: "icon"
})), __jsx("div", {
  className: "jsx-3921389519" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-3921389519" + " " + "card-heading"
}, "\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435"), __jsx("p", {
  className: "jsx-3921389519" + " " + "card-desc"
}, "\u0414\u0435\u0448\u0451\u0432\u043E\u0435 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u0446\u0438\u0438.")))), __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card-container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "card-img-container"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSnowflake"],
  size: "4x",
  color: "#d57d29",
  className: "icon"
})), __jsx("div", {
  className: "jsx-3921389519" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-3921389519" + " " + "card-heading"
}, "\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435"), __jsx("p", {
  className: "jsx-3921389519" + " " + "card-desc"
}, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u0442\u0435\u043F\u043B\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F.")))), __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card-container"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "smart-card"
}, __jsx("div", {
  className: "jsx-3921389519" + " " + "card-img-container"
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRubleSign"],
  size: "4x",
  color: "#d57d29",
  className: "icon"
})), __jsx("div", {
  className: "jsx-3921389519" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-3921389519" + " " + "card-heading"
}, "\u0412\u044B\u0433\u043E\u0434\u0430"), __jsx("p", {
  className: "jsx-3921389519" + " " + "card-desc"
}, "\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 - \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F 50% \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C\u0438 \u043E\u0431\u044A\u0451\u043C\u0430\u043C\u0438.")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3921389519"
}, [".energyDecisions.jsx-3921389519{padding-left:15px;padding-right:15px;padding-top:30px;padding-bottom:90px;background:url('/images/mini-map.png') -20% 39% no-repeat;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519{margin-top:45px;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;grid-gap:30px;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519{text-align:center;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519{z-index:1;padding-bottom:15px;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519{bottom:0;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519 .icon.jsx-3921389519{-webkit-filter:drop-shadow(3px 3px 5px rgba(0,0,0,0.25));filter:drop-shadow(3px 3px 5px rgba(0,0,0,0.25));}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519{margin:0 auto;max-width:270px;z-index:10;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-heading.jsx-3921389519{z-index:10;font-family:var(--molot-font);display:block;font-size:21px;color:#7e7e7e;margin-top:15px;margin-bottom:5px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}", ".energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-desc.jsx-3921389519{font-size:14px;}", "@media (min-width:576px){.energyDecisions.jsx-3921389519{padding-left:15px;padding-right:15px;padding-top:90px;padding-bottom:90px;background:url('/images/mini-map.png') -20% 39% no-repeat;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519{margin-top:45px;display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-gap:30px;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519{text-align:center;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519{bottom:0;position:relative;width:100%;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519 .icon.jsx-3921389519{bottom:0;left:25%;}}", "@media (min-width:768px){.energyDecisions.jsx-3921389519{padding-left:15px;padding-right:15px;padding-top:90px;padding-bottom:90px;background:url('/images/mini-map.png') -20% 39% no-repeat;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519{margin-top:60px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;grid-gap:30px;grid-row-gap:60px;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519{text-align:center;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519{bottom:0;position:relative;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519 .icon.jsx-3921389519{position:relative;display:block;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-heading.jsx-3921389519{margin-top:0;font-size:24px;color:#7e7e7e;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-desc.jsx-3921389519{font-size:16px;}}", "@media (min-width:1200px){.energyDecisions.jsx-3921389519{padding-left:15px;padding-right:15px;padding-top:90px;padding-bottom:180px;background:url('/images/bg-map-left.png') 0% 60% no-repeat, url('/images/bg-map-right.png') 100% 65% no-repeat;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519{margin-top:90px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-gap:30px;grid-row-gap:60px;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519{text-align:center;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519{bottom:0;position:relative;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .card-img-container.jsx-3921389519 .icon.jsx-3921389519{position:relative;display:block;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-heading.jsx-3921389519{margin-top:15px;font-size:24px;color:#7e7e7e;}.energyDecisions.jsx-3921389519 .container.jsx-3921389519 .row.jsx-3921389519 .cards-plate.jsx-3921389519 .smart-card-container.jsx-3921389519 .smart-card.jsx-3921389519 .text-container.jsx-3921389519 .card-desc.jsx-3921389519{font-size:16px;}}"])));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables/serviceList */ "./components/tables/serviceList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("footer", {
  className: "jsx-2510472162" + " " + "footer"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "gaz-mash"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "white-stripe"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "container"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "row m-0"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/"
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "footer-logo-container"
}, __jsx("img", {
  src: "/images/logo-big.png",
  alt: "\u041E\u041E\u041E \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  title: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2510472162" + " " + "footer-logo"
})))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: as
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, label)))), __jsx("a", {
  href: "/calculator",
  className: "jsx-2510472162" + " " + "footer-button calc-link"
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), __jsx("a", {
  href: "/askForm",
  className: "jsx-2510472162" + " " + "footer-button askForm-link"
}, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u0423\u0441\u043B\u0443\u0433\u0438:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => __jsx("li", {
  key: item.key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/uslugi/${item.href}`,
  as: `/uslugi/${item.as}`
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, item.label)))))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "contacts-header"
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "adres-list"
}, __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("a", {
  href: "https://yandex.ru/maps/-/CBFyIKsQPB",
  target: "_blank",
  className: "jsx-2510472162" + " " + "adres-map-link pb-3"
}, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", __jsx("br", {
  className: "jsx-2510472162"
}), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "adres-phones"
}, __jsx("a", {
  href: "tel:+74852260368",
  className: "jsx-2510472162" + " " + "phone-link phone-link-big"
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-03-68"), __jsx("a", {
  href: "tel:+74852267960",
  className: "jsx-2510472162" + " " + "phone-link"
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-79-60"))), __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("a", {
  href: "mailto:market@gmenergo.ru",
  className: "jsx-2510472162" + " " + "adres-email"
}, "market@gmenergo.ru")), __jsx("li", {
  className: "jsx-2510472162"
})), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "intersell"
}, __jsx("a", {
  href: "http://intersell.su/",
  className: "jsx-2510472162" + " " + "interlink"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-description"
}, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-name"
}, "intersell.su")), __jsx("div", {
  className: "jsx-2510472162" + " " + "logo-cont"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo"
}, "IS")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "rights-reserved"
}, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2510472162"
}, [".text-grey.jsx-2510472162{color:#e5e5e5;}", ".footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}", ".footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}", ".footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}", ".footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}", ".footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}", ".footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}", "@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}", "@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}"]));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class FormPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPhone: '',
      isEmailEmpty: true,
      isPhoneEmpty: true,
      isFormFullfiled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        product: this.props.product,
        phone: this.state.userPhone
      })
    }).then(res => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/confirm-email'));
  }

  handleChangeEmail(e) {
    this.setState({
      userEmail: e.target.value
    });
  }

  handleChangePhone(e) {
    this.setState({
      userPhone: e.target.value
    });
  }

  render() {
    return __jsx("div", {
      className: "jsx-3691667022" + " " + "container-fluid form-bg"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "container"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "col-12"
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-3691667022" + " " + "forma"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "dots-left"
    }), __jsx("div", {
      className: "jsx-3691667022" + " " + "form-group"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "form-left colform"
    }, __jsx("div", {
      className: "jsx-3691667022" + " " + "form-context"
    }, __jsx("p", {
      className: "jsx-3691667022" + " " + "text-common form-cta-title"
    }, "\u0417\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0430?"), __jsx("p", {
      className: "jsx-3691667022" + " " + "form-cta-text-2"
    }, "C\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043B\u044E\u0431\u044B\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"))), __jsx("div", {
      className: "jsx-3691667022" + " " + "form-mid colform"
    }, __jsx("p", {
      className: "jsx-3691667022" + " " + "text-common form-text-or"
    }, "\u0418\u041B\u0418")), __jsx("div", {
      className: "jsx-3691667022" + " " + "form-right colform"
    }, __jsx("p", {
      className: "jsx-3691667022" + " " + "text-common form-cta-text-2 form-cta-text-22 mb-3"
    }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438!"), __jsx("input", {
      onChange: this.handleChangeEmail,
      type: "email",
      id: "userEmail",
      "aria-describedby": "emailHelp",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail:",
      required: true,
      className: "jsx-3691667022" + " " + "userEmail text-common"
    }), __jsx("input", {
      onChange: this.handleChangePhone,
      type: "phone",
      id: "userPhone",
      "aria-describedby": "phoneHelp",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438:",
      required: true,
      className: "jsx-3691667022" + " " + "userEmail text-common"
    }), __jsx("button", {
      className: "jsx-3691667022" + " " + "form-button"
    }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3691667022"
    }, [".form-bg.jsx-3691667022{margin-top:30px;padding-left:15px;padding-right:15px;}", ".forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:30px;border-radius:var(--border-radius);background:linear-gradient( to bottom, #fafafa 0%, #fff 20%, #fff 80%, #fafafa 100% );border:1px solid #dcdcdc;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);color:var(--accent-dark);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;text-align:center;position:relative;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:24px;line-height:30px;color:var(--accent-dark);padding-bottom:15px;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;border-radius:50px;padding-left:15px;width:100%;font-size:14px;height:40px;margin-bottom:15px;background-color:#e6e6e6;border:none;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:10px 15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow-up);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:16px;font-weight:500;line-height:20px;color:var(--sub-color);}", "@media (min-width:576px){.forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:60px;border-radius:var(--border-radius);}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:34px;text-align:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:34px;line-height:34px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{margin-bottom:20px;height:45px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:15px 30px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:18px;padding-right:80px;line-height:22px;font-weight:700;}}", "@media (min-width:768px){.forma.jsx-3691667022{padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 10fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:36px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:none;position:absolute;content:'';width:2px;height:180px;top:-120px;left:50%;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{display:none;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-weight:700;font-size:36px;line-height:40px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:15px;width:230px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .callTime.jsx-3691667022{display:block;border-radius:30px;padding-left:15px;width:230px;height:42px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:15px 20px;margin:0 auto 20px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:17px;line-height:20px;padding-right:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:20px;padding-left:20px;}}", "@media (min-width:992px){.forma.jsx-3691667022{overflow:hidden;padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{padding-left:30px;display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 11fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:44px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;border:4px solid white;padding:30px;border-radius:var(--border-radius);box-shadow:45px 0px 60px -30px rgba(255,255,255,0.4), -45px 0px 60px -30px rgba(255,255,255,0.4);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:block;position:absolute;content:'';width:2px;height:200px;top:-200px;left:50%;-webkit-transform:translateX(-50%) rotate(0deg);-ms-transform:translateX(-50%) rotate(0deg);transform:translateX(-50%) rotate(0deg);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';display:block;left:50%;top:100px;width:2px;height:173px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-size:44px;line-height:48px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:30px;height:60px;width:300px;margin:0 auto 20px;font-size:16px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:18px 20px;margin:15px auto 0px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:22px;line-height:27px;padding-right:100px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:50px;padding-left:50px;margin-bottom:15px;}}", "@media (min-width:1400px){.forma.jsx-3691667022{margin-left:15px;margin-right:15px;}}"]));
  }

}

FormPage.defaultProps = {
  product: ''
};
/* harmony default export */ __webpack_exports__["default"] = (FormPage);

/***/ }),

/***/ "./components/generalServices.js":
/*!***************************************!*\
  !*** ./components/generalServices.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tables_serviceList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/serviceList */ "./components/tables/serviceList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (GeneralServices => __jsx("div", {
  className: "jsx-2845153093" + " " + "container-fluid generalServices"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "dots-left"
}), __jsx("div", {
  className: "jsx-2845153093" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-2845153093" + " " + "container"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "row"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "col-12"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "text-container"
}, __jsx("h3", {
  className: "jsx-2845153093" + " " + "header-min-colored"
}, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 ", __jsx("br", {
  className: "jsx-2845153093"
}), __jsx("span", {
  className: "jsx-2845153093" + " " + "dark-color"
}, "\u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439")), __jsx("p", {
  className: "jsx-2845153093" + " " + "text"
}, "\u0412\u0441\u0435 \u044D\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0442\u0435\u0441\u043D\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0441 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u043E\u043F\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447. \u041C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u0438 \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u0430\u043A \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443, \u0442\u0430\u043A \u0438 \u043F\u0440\u0438\u0446\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441\u043B\u0430\u0431\u044B\u0435 \u043C\u0435\u0441\u0442\u0430 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u043E\u0435\u043A\u0442\u0430."))))), __jsx("div", {
  className: "jsx-2845153093" + " " + "container"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "row"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "col-12 cards-container"
}, _tables_serviceList__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  label,
  text,
  img,
  href,
  as,
  key
}) => __jsx("div", {
  key: key,
  className: "jsx-2845153093" + " " + "teh-plate"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: `/uslugi/${as}`
}, __jsx("a", {
  className: "jsx-2845153093" + " " + "teh-card"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "teh-image-container"
}, __jsx("img", {
  src: img,
  alt: label,
  title: label,
  className: "jsx-2845153093" + " " + "teh-image"
}), __jsx("div", {
  className: "jsx-2845153093" + " " + "teh-content"
}, __jsx("p", {
  className: "jsx-2845153093" + " " + "teh-desc"
}, text))), __jsx("div", {
  className: "jsx-2845153093" + " " + "header-container"
}, __jsx("h3", {
  className: "jsx-2845153093" + " " + "teh-header"
}, label)))))))), __jsx("div", {
  className: "jsx-2845153093" + " " + "row"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "col-12"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "button-grey-container"
}, __jsx("div", {
  className: "jsx-2845153093" + " " + "button-grey"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/services",
  as: "/uslugi"
}, __jsx("a", {
  className: "jsx-2845153093"
}, ' ', __jsx("span", {
  className: "jsx-2845153093"
}, "\u0423\u0441\u043B\u0443\u0433\u0438"), ' '))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2845153093"
}, [".generalServices.jsx-2845153093{overflow-x:hidden;position:relative;padding-top:30px;}", ".generalServices.jsx-2845153093 .dots-left.jsx-2845153093{position:absolute;display:block;width:213px;height:259px;left:-40%;top:25px;opacity:0.5;background:url('/images/dots-min-red.png') 0% 0% no-repeat;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093{padding-bottom:30px;text-align:left;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .header-min-colored.jsx-2845153093{padding-bottom:15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:23px;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .text.jsx-2845153093{text-align:left;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto auto;grid-gap:15px;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093{display:block;width:100%;-webkit-transition:all 0.2s;transition:all 0.2s;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093{box-shadow:var(--box-shadow);overflow:hidden;position:relative;-webkit-transition:all 0.2s;transition:all 0.2s;background:linear-gradient( to right, #cfcfcf 0%, #d0d0d0 50%, #cfcfcf 100% );}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093::after{content:'';display:block;position:absolute;z-index:3;width:100%;height:100%;top:0;background-image:linear-gradient( to bottom, rgba(255,0,0,0) 0%, rgba(255,0,0,0) 50%, rgba(255,0,0,0) 100% );-webkit-transition-duration:0.2s;transition-duration:0.2s;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-image.jsx-2845153093{display:block;margin:0 auto;width:auto;max-width:100%;height:145px;object-fit:cover;-webkit-transition:all 0.2s;transition:all 0.2s;position:relative;z-index:2;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-content.jsx-2845153093{display:none;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .button-container.jsx-2845153093{display:none;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093{z-index:4;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093{color:#353535;font-size:13px;line-height:18px;text-align:center;font-weight:700;font-family:var(--noto-font);height:40%;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093:hover{background:transparent;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093{margin-top:0;padding-bottom:30px;}", ".generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093 .button-grey.jsx-2845153093 span.jsx-2845153093{color:white;font-size:16px;}", "@media (min-width:576px){.generalServices.jsx-2845153093{overflow-x:hidden;position:relative;padding-top:30px;}.generalServices.jsx-2845153093 .dots-left.jsx-2845153093{left:0;top:25px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093{padding-bottom:30px;text-align:left;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .header-min-colored.jsx-2845153093{padding-bottom:15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:23px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .text.jsx-2845153093{text-align:left;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto auto;grid-gap:30px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093{display:block;width:100%;-webkit-transition:all 0.2s;transition:all 0.2s;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093{box-shadow:var(--box-shadow);overflow:hidden;position:relative;-webkit-transition:all 0.2s;transition:all 0.2s;background:linear-gradient( to right, #cfcfcf 0%, #d0d0d0 50%, #cfcfcf 100% );}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093::after{content:'';display:block;position:absolute;z-index:3;width:100%;height:100%;top:0;background-image:linear-gradient( to bottom, rgba(255,0,0,0) 0%, rgba(255,0,0,0) 50%, rgba(255,0,0,0) 100% );-webkit-transition-duration:0.2s;transition-duration:0.2s;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-image.jsx-2845153093{height:160px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-content.jsx-2845153093{display:none;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .button-container.jsx-2845153093{display:none;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093{z-index:4;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093{color:#353535;font-size:16px;line-height:22px;text-align:center;font-weight:700;font-family:var(--noto-font);height:40%;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093:hover{background:transparent;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093{padding-bottom:30px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093 .button-grey.jsx-2845153093 span.jsx-2845153093{color:white;}}", "@media (min-width:768px){.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093{padding-bottom:30px;text-align:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .header-min-colored.jsx-2845153093{padding-bottom:15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:23px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .text.jsx-2845153093{text-align:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto auto auto;grid-gap:30px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093{display:block;width:100%;-webkit-transition:all 0.2s;transition:all 0.2s;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093{box-shadow:var(--box-shadow);overflow:hidden;position:relative;-webkit-transition:all 0.2s;transition:all 0.2s;background:linear-gradient( to right, #cfcfcf 0%, #d0d0d0 50%, #cfcfcf 100% );}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093::after{content:'';display:block;position:absolute;z-index:3;width:100%;height:100%;top:0;background-image:linear-gradient( to bottom, rgba(255,0,0,0) 0%, rgba(255,0,0,0) 50%, rgba(255,0,0,0) 100% );-webkit-transition-duration:0.2s;transition-duration:0.2s;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-image.jsx-2845153093{height:160px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-content.jsx-2845153093{display:none;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .button-container.jsx-2845153093{display:none;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093{z-index:4;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093{color:#353535;font-size:16px;line-height:22px;text-align:center;font-weight:700;font-family:var(--noto-font);height:40%;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093:hover{background:transparent;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093{padding-bottom:90px;}}", "@media (min-width:992px){.generalServices.jsx-2845153093{margin-top:60px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093{padding-bottom:30px;text-align:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .header-min-colored.jsx-2845153093{padding-bottom:15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:27px;line-height:34px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .text.jsx-2845153093{text-align:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093{margin-top:30px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto auto;grid-gap:30px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-image.jsx-2845153093{height:170px;}}", "@media (min-width:1200px){.jsx-2845153093{.generalServices .container .cards-container .teh-plate:hover;.generalServices .container .cards-container .teh-plate:hover .teh-image-container;.generalServices .container .cards-container .teh-plate:hover .teh-image-container .teh-content;}.generalServices.jsx-2845153093{margin-top:60px;padding-top:60px;padding-bottom:60px;position:relative;}.generalServices.jsx-2845153093 .dots-left.jsx-2845153093{position:absolute;display:block;width:460px;height:560px;left:-10%;bottom:0;top:-250px;opacity:0.05;background:url('/images/dots-big-red.png') 0% 0% no-repeat;}.generalServices.jsx-2845153093 .dots-right.jsx-2845153093{position:absolute;display:block;width:460px;height:560px;right:-15%;bottom:0%;left:auto;top:300px;opacity:0.05;background:url('/images/dots-big-red.png') 0% 0% no-repeat;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093{display:block;padding-bottom:45px;text-align:left;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .header-min-colored.jsx-2845153093{font-size:36px;line-height:46px;padding-left:0px;padding-right:110px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .text-container.jsx-2845153093 .text.jsx-2845153093{text-align:left;font-weight:300;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093{position:relative;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093{box-shadow:var(--box-shadow);overflow:hidden;position:relative;-webkit-transition:all 0.2s;transition:all 0.2s;border-radius:var(--border-radius);}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-image.jsx-2845153093{display:block;position:relative;margin:0 auto;width:auto;max-width:100%;height:170px;object-fit:cover;-webkit-transition:all 0.2s;transition:all 0.2s;z-index:0;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-content.jsx-2845153093{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1;top:0px;left:0px;right:0px;bottom:25%;opacity:0;background:linear-gradient( to bottom, rgba(119,119,119,0.6) 0%, rgba(119,119,119,0.6) 60%, rgba(119,119,119,0.1) 100% );-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .teh-image-container.jsx-2845153093 .teh-content.jsx-2845153093 .teh-desc.jsx-2845153093{text-align:center;padding:0 10px;z-index:1;color:#ffffff;font-size:14px;line-height:20px;font-weight:700;opacity:0;-webkit-transition:all 0.2s ease-in 0.2s;transition:all 0.2s ease-in 0.2s;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093{z-index:4;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093{color:#353535;font-size:19px;line-height:22px;text-align:center;font-weight:700;font-family:var(--noto-font);height:40%;padding-left:15px;padding-right:15px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .cards-container.jsx-2845153093 .teh-plate.jsx-2845153093 .teh-card.jsx-2845153093 .header-container.jsx-2845153093 .teh-header.jsx-2845153093:hover{background:transparent;}.teh-image-container.jsx-2845153093{box-shadow:var(--box-shadow-up);}.teh-content.jsx-2845153093{bottom:0px;opacity:1;}.teh-desc.jsx-2845153093{opacity:1;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093{margin-top:15px;padding-bottom:0px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093 .button-grey.jsx-2845153093{line-height:40px;}.generalServices.jsx-2845153093 .container.jsx-2845153093 .button-grey-container.jsx-2845153093 .button-grey.jsx-2845153093 span.jsx-2845153093{color:white;}}"])));

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const defaultDescription = 'Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.';
const defaultOGURL = 'https://gmenergo.ru';
const defaultOGImage = '/images/favicon.ico';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, props.title || 'Производство газопоршневых электростанций - Газовые Машины'), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
}), __jsx("link", {
  rel: "icon",
  href: "/images/favicon.ico"
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/images/apple-touch-icon.png"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/images/favicon-32x32.png"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/images/favicon-16x16.png"
}), __jsx("link", {
  rel: "manifest",
  href: "/images/site.webmanifest"
}), __jsx("link", {
  rel: "mask-icon",
  href: "/images/safari-pinned-tab.svg",
  color: "#5bbad5"
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  property: "og:title",
  content: props.title || ''
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image"
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200"
}), __jsx("meta", {
  property: "og:image:height",
  content: "630"
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/mainAdv.js":
/*!*******************************!*\
  !*** ./components/mainAdv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import Router from 'next/router';


/* harmony default export */ __webpack_exports__["default"] = (MainAdv => __jsx("div", {
  className: "jsx-756459149" + " " + "container-fluid mainAdv"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "dots-left"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "gaz-mash"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "border-left"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "border-right"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "container main-container"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "row"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "col-12 col-md-6"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-756459149" + " " + "main-heading"
}, "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447"), __jsx("div", {
  className: "jsx-756459149" + " " + "spartners"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "logos-container"
}), __jsx("span", {
  className: "jsx-756459149" + " " + "descr-min"
}, "\u043C\u044B \u044F\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u043C\u0438 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430\u043C\u0438")), __jsx("h1", {
  className: "jsx-756459149" + " " + "main-desc"
}, "\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0438 \u043C\u0438\u043D\u0438 \u0422\u042D\u0426."))), __jsx("div", {
  className: "jsx-756459149" + " " + "col-12 col-md-6"
}, __jsx("div", {
  className: "jsx-756459149" + " " + "promo-fon"
}), __jsx("div", {
  className: "jsx-756459149" + " " + "img-container"
}, __jsx("img", {
  src: "/images/about-2.jpg",
  alt: "\u0424\u043E\u0442\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430",
  title: "\u042D\u043D\u0435\u0440\u0433\u043E\u0446\u0435\u043D\u0442\u0440 \u042F\u041C\u0417",
  className: "jsx-756459149" + " " + "img-main"
}))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "756459149"
}, [".mainAdv.jsx-756459149{overflow:hidden;background:linear-gradient(to right,#e1e1e1 0%,#b1b1b1 100%);display:block;min-height:500px;z-index:0;position:relative;}", ".mainAdv.jsx-756459149 .dots-right.jsx-756459149{position:absolute;display:block;width:213px;height:259px;top:0;right:0;background:url('/images/dots-min.png') 100% -50% no-repeat;}", ".mainAdv.jsx-756459149 .dots-left.jsx-756459149{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 120% no-repeat;}", ".mainAdv.jsx-756459149 .gaz-mash.jsx-756459149{position:absolute;display:block;z-index:-1;left:0;right:0;top:30px;opacity:0.3;width:auto;height:150px;background:url('/images/bg-gaz-mash.png') 0% 0% no-repeat;background-size:contain;}", ".mainAdv.jsx-756459149 .border-left.jsx-756459149{display:block;position:absolute;z-index:-1;top:50%;left:-35px;width:50px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:5px solid rgba(255,255,255,0.5);border-radius:3px;}", ".mainAdv.jsx-756459149 .border-right.jsx-756459149{display:block;position:absolute;z-index:-1;top:50%;right:-35px;width:50px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:5px solid rgba(255,255,255,0.5);border-radius:3px;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100%;height:500px;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-heading.jsx-756459149{display:block;font-family:var(--molot-font);font-size:28px;line-height:32px;text-shadow:3px 3px 2px #8f8f8f;color:white;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:15px;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149{margin-bottom:20px;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .logos-container.jsx-756459149{width:100%;height:30px;margin:0;background:url('/images/liebherr.png') 0 50% no-repeat;background-size:contain;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .descr-min.jsx-756459149{display:block;margin-top:3px;font-size:10px;line-height:10px;font-weight:300;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-desc.jsx-756459149{font-size:16px;font-weight:500;color:#383838;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}", ".mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149 .img-main.jsx-756459149{border:5px solid white;margin-top:15px;display:block;height:130px;width:auto;}", "@media (min-width:768px){.mainAdv.jsx-756459149{overflow:hidden;display:block;min-height:500px;z-index:0;position:relative;}.mainAdv.jsx-756459149 .dots-right.jsx-756459149{position:absolute;display:block;width:213px;height:259px;top:0;right:0;background:url('/images/dots-min.png') 100% 0% no-repeat;}.mainAdv.jsx-756459149 .dots-left.jsx-756459149{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 100% no-repeat;}.mainAdv.jsx-756459149 .gaz-mash.jsx-756459149{right:0;top:30px;width:auto;height:150px;background:url('/images/bg-gaz-mash.png') 0% 0% no-repeat;background-size:contain;}.mainAdv.jsx-756459149 .border-left.jsx-756459149{display:block;position:absolute;top:50%;left:-35px;width:80px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:5px solid rgba(255,255,255,0.5);border-radius:3px;}.mainAdv.jsx-756459149 .border-right.jsx-756459149{display:block;position:absolute;top:50%;right:-35px;width:80px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:5px solid rgba(255,255,255,0.5);border-radius:3px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100%;height:500px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-heading.jsx-756459149{display:block;font-family:var(--molot-font);font-size:48px;line-height:48px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin-bottom:18px;z-index:10;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149{margin-bottom:25px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .logos-container.jsx-756459149{height:35px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .descr-min.jsx-756459149{margin-top:5px;font-size:11px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-desc.jsx-756459149{font-size:18px;line-height:23px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149 .img-main.jsx-756459149{z-index:-1;border:5px solid white;margin-top:15px;display:block;height:230px;width:auto;}}", "@media (min-width:1200px){.mainAdv.jsx-756459149{overflow:hidden;background:linear-gradient( to right, rgba(207,207,207,0.4) 0%, rgba(182,182,182,0.9) 50%, rgba(177,177,177,0.6) 100% ), url('/images/bg-projects.jpg') 50% 50% no-repeat;background-size:cover;display:block;min-height:630px;max-height:750px;z-index:0;height:65vh;position:relative;border-bottom:15px solid white;box-shadow:inset 0 0 15px rgba(0,0,0,0.2);}.mainAdv.jsx-756459149 .dots-right.jsx-756459149{width:460px;height:560px;top:50%;right:-200px;opacity:0.15;z-index:-1;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.mainAdv.jsx-756459149 .dots-left.jsx-756459149{left:30px;bottom:-450px;width:460px;height:560px;z-index:-1;opacity:0.15;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.mainAdv.jsx-756459149 .gaz-mash.jsx-756459149{position:absolute;display:block;opacity:0.2;left:30px;right:0;top:30px;width:auto;height:200px;background:url('/images/bg-gaz-mash.png') 0% 0% no-repeat;background-size:contain;}.mainAdv.jsx-756459149 .border-left.jsx-756459149{display:block;position:absolute;top:50%;left:-40px;width:60px;height:400px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);border-radius:3px;}.mainAdv.jsx-756459149 .border-right.jsx-756459149{display:block;position:absolute;top:50%;right:-40px;width:60px;height:400px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);border-radius:3px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149{height:100%;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149{margin-top:15px;padding-left:0px;padding-right:30px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-heading.jsx-756459149{font-size:60px;line-height:64px;text-shadow:3px 3px 2px #838383;color:white;margin-bottom:10px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149{margin-bottom:25px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .logos-container.jsx-756459149{height:50px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .spartners.jsx-756459149 .descr-min.jsx-756459149{margin-top:7px;font-size:14px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .text-container.jsx-756459149 .main-desc.jsx-756459149{font-size:23px;font-weight:500;line-height:32px;padding-top:15px;border-top:2px solid white;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .promo-fon.jsx-756459149{position:absolute;top:0;bottom:0;left:45px;right:15px;background:linear-gradient(87deg,#fff 0%,#fff 100%);-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);box-shadow:0 0 15px rgba(0,0,0,0.2);}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149{position:relative;margin-left:30px;height:100%;width:100%;overflow:hidden;background-color:grey;border-left:15px solid #fff;border-right:15px solid #fff;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:120px;}.mainAdv.jsx-756459149 .main-container.jsx-756459149 .row.jsx-756459149 .col-12.jsx-756459149 .img-container.jsx-756459149 .img-main.jsx-756459149{-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);border:none;margin-top:0;display:block;height:100%;width:auto;}}"])));

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = [{
  label: "Главная",
  href: "/",
  as: "/"
}, {
  label: "Аренда и лизинг",
  href: "/arenda",
  as: "/arenda-i-lizing"
}, // {
//   label: "Распределенная генерация",
//   href: "/rasGen",
//   as: "/raspredelennaya-generaciya"
// },
{
  label: "Новости",
  href: "/news",
  as: "/novosti"
}, {
  label: "Проекты",
  href: "/projects",
  as: "/proekti"
}, {
  label: "Каталог",
  href: "/products",
  as: "/products"
}, {
  label: "Услуги",
  href: "/services",
  as: "/uslugi"
}, {
  label: "Проектировщикам",
  href: "/page-documents",
  as: "/page-documents"
}, {
  label: "О компании",
  href: "/about",
  as: "/about"
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = () => __jsx("nav", {
  className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light"
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/"
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "navbar-brand"
}, __jsx("img", {
  src: "/images/logo-grey.png",
  title: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
  alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2809465157"
}))), __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-2809465157" + " " + "navbar-toggler"
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "navbar-toggler-icon-mine"
})), __jsx("div", {
  id: "navbarNav",
  className: "jsx-2809465157" + " " + "collapse navbar-collapse"
}, __jsx("ul", {
  className: "jsx-2809465157" + " " + "navbar-nav"
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2809465157" + " " + "nav-item"
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  activeClassName: "active",
  href: href,
  as: as
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "nav-link"
}, label)))), __jsx("li", {
  className: "jsx-2809465157" + " " + "nav-item"
}, __jsx("div", {
  className: "jsx-2809465157" + " " + "contacts-container"
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "lorem"
}, "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), __jsx("span", {
  className: "jsx-2809465157" + " " + "tel"
}, "+7 (4852) 26\xB703\xB768, 26\xB779\xB760"), __jsx("span", {
  className: "jsx-2809465157" + " " + "pochta"
}, "market@gmenergo.ru"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2809465157"
}, ["body{margin:0;}", ".navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}", ".navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}", "@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}", "@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}", "@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}"]));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/newsAdv.js":
/*!*******************************!*\
  !*** ./components/newsAdv.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsAdv; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables_newsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables/newsList */ "./components/tables/newsList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class NewsAdv extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const news = _tables_newsList__WEBPACK_IMPORTED_MODULE_2__["default"].slice(-3);
    let newsContent;

    if (news) {
      newsContent = news.reverse().map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: `/novosti?id=${item.id}`,
        as: `/novosti/${item.id}`,
        key: index
      }, __jsx("a", {
        className: "col-12 col-md-4 col-xl-3 newsAdv-col news-item"
      }, __jsx("span", {
        className: "news-title"
      }, item.label), __jsx("span", {
        className: "news-date"
      }, item.created_at))));
    }

    return __jsx("div", {
      className: "jsx-2999977706"
    }, __jsx("div", {
      className: "jsx-2999977706" + " " + "container-fluid newsAdv"
    }, __jsx("div", {
      className: "jsx-2999977706" + " " + "container"
    }, __jsx("div", {
      className: "jsx-2999977706" + " " + "row"
    }, __jsx("div", {
      className: "jsx-2999977706" + " " + "col-12 col-xl-3 newsAdv-col news-title-col"
    }, __jsx("span", {
      className: "jsx-2999977706" + " " + "news-title-1"
    }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438:")), newsContent))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2999977706"
    }, [".newsAdv.jsx-2999977706{margin-top:30px;padding-top:30px;padding-bottom:30px;background-color:#fff;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;}", ".newsAdv.jsx-2999977706 .newsAdv-col.jsx-2999977706{color:#353535;}", ".newsAdv.jsx-2999977706 .newsAdv-col.jsx-2999977706 .news-title-1.jsx-2999977706{font-family:var(--molot-font);font-size:21px;color:#6d6d6d;}", ".newsAdv.jsx-2999977706 .news-item.jsx-2999977706{border-bottom:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:15px;}", ".newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-title.jsx-2999977706{display:block;font-size:15px;line-height:19px;}", ".newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-date.jsx-2999977706{display:block;text-align:right;margin-top:7px;font-size:12px;}", "@media (min-width:768px){.newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-title.jsx-2999977706{display:block;font-size:15px;line-height:19px;}.newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-date.jsx-2999977706{display:block;text-align:left;margin-top:7px;font-size:12px;}}", "@media (min-width:1200px){.newsAdv.jsx-2999977706{margin-top:30px;padding-top:15px;padding-bottom:15px;background-color:#fff;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;}.newsAdv.jsx-2999977706 .newsAdv-col.jsx-2999977706{color:#353535;}.newsAdv.jsx-2999977706 .newsAdv-col.jsx-2999977706 .news-title-1.jsx-2999977706{font-family:var(--molot-font);font-size:30px;color:#6d6d6d;}.newsAdv.jsx-2999977706 .news-title-col.jsx-2999977706{border-right:1px solid #dcdcdc;padding-top:5px;}.newsAdv.jsx-2999977706 .news-item.jsx-2999977706{border-bottom:none;padding-left:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-title.jsx-2999977706{display:block;font-size:15px;}.newsAdv.jsx-2999977706 .news-item.jsx-2999977706 .news-date.jsx-2999977706{display:block;text-align:right;margin-top:5px;padding-right:15px;}}"]));
  }

}

/***/ }),

/***/ "./components/portfolioLinks.js":
/*!**************************************!*\
  !*** ./components/portfolioLinks.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import Router from 'next/router';

const portfolio = [{
  label: 'Энергоцентр ЯМЗ',
  company: 'Энергоцентр',
  img: 'project-avtodisel.jpg',
  href: '#',
  id: '0',
  as: '/yamz'
}, {
  label: 'Невская ратуша',
  company: 'Энергоцентр',
  img: 'project-nevskaya.jpg',
  href: '#',
  id: '1',
  as: '/nevskaya-ratusha'
}, {
  label: 'Аккус Актобэ',
  company: 'Энергоцентр',
  img: 'project-akkus.jpg',
  href: '#',
  id: '3',
  as: '/akkus-aktobe'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const PortfolioLinks = () => __jsx("section", {
  className: "jsx-416145262" + " " + "container-fluid portfolio-links"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "container"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "row"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "col-12"
}, __jsx("h3", {
  className: "jsx-416145262" + " " + "header-min-colored"
}, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 ", __jsx("span", {
  className: "jsx-416145262" + " " + "dark-color"
}, " \u043F\u0440\u043E\u0435\u043A\u0442\u044B:"))))), __jsx("div", {
  className: "jsx-416145262" + " " + "container bg-container"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "row"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "col-12"
}, __jsx("ul", {
  className: "jsx-416145262" + " " + "portfolio-cards-plate"
}, portfolio.map(({
  key,
  id,
  label,
  img,
  company
}) => __jsx("li", {
  key: key,
  className: "jsx-416145262" + " " + "card-container"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/proekti/${id}`
}, __jsx("a", {
  className: "jsx-416145262" + " " + "portfolio-card"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "img-container"
}, __jsx("img", {
  src: `/images/${img}`,
  alt: (company, label),
  title: `Проект - ${label}`,
  className: "jsx-416145262" + " " + "portfolio-img"
})), __jsx("span", {
  className: "jsx-416145262" + " " + "portfolio-link"
}, label), __jsx("span", {
  className: "jsx-416145262" + " " + "portfolio-company"
}, company))))))))), __jsx("div", {
  className: "jsx-416145262" + " " + "container"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "row"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "col-12"
}, __jsx("div", {
  className: "jsx-416145262" + " " + "button-grey-container"
}, __jsx("a", {
  href: "/proekti",
  className: "jsx-416145262" + " " + "button-grey"
}, __jsx("span", {
  className: "jsx-416145262"
}, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "416145262"
}, [".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .header-min-colored.jsx-416145262{display:block;margin-top:15px;margin-bottom:15px;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262{margin:0;padding:0;padding-top:15px;display:grid;grid-gap:15px;grid-template-columns:1fr;grid-template-rows:auto auto auto;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262{padding:0;margin:0;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262{width:100%;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .img-container.jsx-416145262{display:block;height:auto;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .img-container.jsx-416145262 .portfolio-img.jsx-416145262{box-shadow:var(--box-shadow);display:block;width:100%;height:auto;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-link.jsx-416145262{color:#353535;margin-top:15px;display:block;text-align:center;font-size:16px;font-weight:900;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}", ".portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-company.jsx-416145262{color:#353535;display:block;text-align:center;font-size:14px;font-weight:500;line-height:14px;margin-bottom:15px;}", "@media (min-width:576px){.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .header-min-colored.jsx-416145262{display:block;margin-top:20px;margin-bottom:15px;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262{margin:0;padding:0;padding-top:15px;display:grid;grid-gap:15px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;}}", "@media (min-width:768px){.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .header-min-colored.jsx-416145262{display:block;margin-top:15px;margin-bottom:15px;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262{margin:0;padding:0;padding-top:15px;display:grid;grid-gap:15px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-link.jsx-416145262{margin-top:10px;display:block;text-align:center;font-size:16px;font-weight:900;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-company.jsx-416145262{display:block;text-align:center;font-size:14px;font-weight:500;line-height:14px;margin-bottom:15px;}}", "@media (min-width:1200px){.jsx-416145262{.portfolio-links .container .row .col-12 .portfolio-cards-plate .card-container .portfolio-card:hover .img-container;}.portfolio-links.jsx-416145262{margin-top:30px;padding-bottom:60px;position:relative;}.portfolio-links.jsx-416145262::before{position:absolute;display:block;content:'';left:0;top:0px;height:90px;width:300px;background-color:var(--l-grey);-webkit-clip-path:polygon(0 0,95% 0,100% 50%,95% 100%,0 100%);clip-path:polygon(0 0,95% 0,100% 50%,95% 100%,0 100%);}.portfolio-links.jsx-416145262::after{position:absolute;display:block;z-index:-1;content:'';right:0;bottom:0px;height:90px;width:300px;background-color:var(--l-grey);-webkit-clip-path:polygon(5% 0,100% 0,100% 100%,6% 100%,0 50%);clip-path:polygon(5% 0,100% 0,100% 100%,6% 100%,0 50%);}.portfolio-links.jsx-416145262 .bg-container.jsx-416145262{position:relative;background-color:white;border:1px solid #dcdcdc;z-index:0;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .header-min-colored.jsx-416145262{display:block;margin-top:0px;margin-bottom:25px;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262{margin:0;padding:22px 8px;display:grid;grid-gap:20px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:auto;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262{padding:0;margin:0;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262{width:100%;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .img-container.jsx-416145262{display:block;border-radius:7px;height:auto;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .img-container.jsx-416145262 .portfolio-img.jsx-416145262{border-radius:var(--border-radius);box-shadow:var(--box-shadow);display:block;width:100%;height:auto;-webkit-transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-link.jsx-416145262{margin-top:15px;display:block;text-align:center;font-size:16px;font-weight:900;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.portfolio-links.jsx-416145262 .container.jsx-416145262 .row.jsx-416145262 .col-12.jsx-416145262 .portfolio-cards-plate.jsx-416145262 .card-container.jsx-416145262 .portfolio-card.jsx-416145262 .portfolio-company.jsx-416145262{display:block;text-align:center;font-size:14px;font-weight:500;line-height:14px;margin-bottom:0px;}.portfolio-img.jsx-416145262{box-shadow:var(--box-shadow-up);display:block;width:100%;height:auto;}}", "@media (min-width:1400px){.portfolio-links.jsx-416145262{margin-top:0px;padding-top:75px;padding-bottom:75px;position:relative;border-top:15px solid #fff;border-bottom:15px solid #fff;}.portfolio-links.jsx-416145262::before{box-shadow:inset 0px 0px 15px rgba(0,0,0,1);position:absolute;display:block;content:'';left:0;top:0px;bottom:0;height:100%;width:100%;background:url('/images/bg-promo-stripe-white.jpg') 100% 50% no-repeat, rgba(200,200,200,0.5);background-size:cover;-webkit-clip-path:none;clip-path:none;-webkit-filter:grayscale(1);filter:grayscale(1);opacity:0.2;}.portfolio-links.jsx-416145262::after{display:none;}}"]));

/* harmony default export */ __webpack_exports__["default"] = (PortfolioLinks);

/***/ }),

/***/ "./components/productsAdv.js":
/*!***********************************!*\
  !*** ./components/productsAdv.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (ProductsAdv => __jsx("div", {
  className: "jsx-581115221" + " " + "container-fluid productsAdv"
}, __jsx("div", {
  className: "jsx-581115221" + " " + "dots-left"
}), __jsx("div", {
  className: "jsx-581115221" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-581115221" + " " + "container"
}, __jsx("div", {
  className: "jsx-581115221" + " " + "row"
}, __jsx("div", {
  className: "jsx-581115221" + " " + "col-12 col-md-6 col-lg-5 col-xl-5"
}, __jsx("span", {
  className: "jsx-581115221" + " " + "header-min-colored"
}, "\u041D\u0430\u0448\u0430 ", __jsx("span", {
  className: "jsx-581115221" + " " + "dark-color"
}, " \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F:")), __jsx("p", {
  className: "jsx-581115221" + " " + "text-big"
}, "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u0437\u044F\u0442\u044C \u043B\u044E\u0431\u0443\u044E \u043D\u0430\u0448\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0432 \u043B\u0438\u0437\u0438\u043D\u0433"), __jsx("p", {
  className: "jsx-581115221" + " " + "text"
}, "\u0410\u041E \xAB\u0420\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u0437\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438\xBB \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0412\u0430\u043C \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439 \u043B\u044C\u0433\u043E\u0442\u043D\u043E\u0433\u043E \u043B\u0438\u0437\u0438\u043D\u0433\u0430 \u043D\u0430 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438 \u043C\u0430\u043B\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E \u0441\u0442\u0430\u0432\u043A\u0435 \u043E\u0442 6,5%."), __jsx("div", {
  className: "jsx-581115221" + " " + "button-grey-container"
}, __jsx("a", {
  href: "/products",
  className: "jsx-581115221" + " " + "button-grey"
}, ' ', __jsx("span", {
  className: "jsx-581115221"
}, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"), ' '), __jsx("a", {
  href: "/arenda-i-lizing",
  className: "jsx-581115221" + " " + "arenda-button"
}, ' ', __jsx("span", {
  className: "jsx-581115221"
}, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0438 \u043B\u0438\u0437\u0438\u043D\u0433"), ' '))), __jsx("div", {
  className: "jsx-581115221" + " " + "col-12 col-md-6 offset-xl-1"
}, __jsx("div", {
  className: "jsx-581115221" + " " + "p-cards-plate"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: {
    pathname: '/products/MAN',
    query: '1'
  },
  as: "/products/MAN/1"
}, __jsx("a", {
  className: "jsx-581115221" + " " + "p-card"
}, __jsx("span", {
  className: "jsx-581115221" + " " + "title"
}, "MAN ", __jsx("span", {
  className: "jsx-581115221" + " " + "red"
}, "250"), ' '), __jsx("div", {
  className: "jsx-581115221" + " " + "img-container"
}, __jsx("img", {
  src: "/images/products/MAN250.jpg",
  title: "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F MAN 250",
  alt: "MAN 250",
  className: "jsx-581115221" + " " + "p-img"
})))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: {
    pathname: '/products/MAN',
    query: '5'
  },
  as: "/products/MAN/5"
}, __jsx("a", {
  className: "jsx-581115221" + " " + "p-card"
}, __jsx("span", {
  className: "jsx-581115221" + " " + "title"
}, "MAN ", __jsx("span", {
  className: "jsx-581115221" + " " + "red"
}, "500"), ' '), __jsx("div", {
  className: "jsx-581115221" + " " + "img-container"
}, __jsx("img", {
  src: "/images/products/MAN500.jpg",
  title: "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F MAN 500",
  alt: "MAN 500",
  className: "jsx-581115221" + " " + "p-img"
})))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: {
    pathname: '/products/JENBACHER',
    query: '41'
  },
  as: "/products/JENBACHER/41"
}, __jsx("a", {
  className: "jsx-581115221" + " " + "p-card"
}, __jsx("span", {
  className: "jsx-581115221" + " " + "title"
}, "JENBACHER ", __jsx("span", {
  className: "jsx-581115221" + " " + "red"
}, "1000"), ' '), __jsx("div", {
  className: "jsx-581115221" + " " + "img-container"
}, __jsx("img", {
  src: "/images/products/jenbacher-1000.jpg",
  title: "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F Jenbacher 1000",
  alt: "Jenbacher 1000",
  className: "jsx-581115221" + " " + "p-img"
})))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: {
    pathname: '/products/MTU',
    query: '33'
  },
  as: "/products/MTU/33"
}, __jsx("a", {
  className: "jsx-581115221" + " " + "p-card"
}, __jsx("span", {
  className: "jsx-581115221" + " " + "title"
}, "MTU ", __jsx("span", {
  className: "jsx-581115221" + " " + "red"
}, "2020"), ' '), __jsx("div", {
  className: "jsx-581115221" + " " + "img-container"
}, __jsx("img", {
  src: "/images/products/M2020.jpg",
  title: "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F MTU 2020",
  alt: "Liebher 1000",
  className: "jsx-581115221" + " " + "p-img"
})))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "581115221"
}, [".productsAdv.jsx-581115221{overflow:hidden;padding-top:30px;padding-bottom:30px;position:relative;}", ".productsAdv.jsx-581115221 .dots-left.jsx-581115221{position:absolute;display:block;width:213px;height:259px;left:-40%;bottom:0;opacity:0.5;background:url('/images/dots-min-red.png') 0% 0% no-repeat;}", ".productsAdv.jsx-581115221 .container.jsx-581115221{background-color:#e5e5e5;border:1px solid #dcdcdc;border-radius:3px;padding-bottom:30px;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .header-min-colored.jsx-581115221{display:block;margin-top:15px;margin-bottom:15px;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .text-big.jsx-581115221{padding-bottom:15px;text-transform:uppercase;font-size:14px;line-height:22px;font-weight:700;color:#404040;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .text.jsx-581115221{padding-bottom:45px;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221{display:grid;grid-gap:15px;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221{font-size:17px;color:#353535;font-family:var(--molot-font);}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221 .red.jsx-581115221{color:var(--accent-red);}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221{width:100%;height:120px;border-radius:var(--border-radius);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221 .p-img.jsx-581115221{border-radius:var(--border-radius);width:auto;max-width:100%;display:block;height:auto;}", ".productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .button-grey-container.jsx-581115221{display:none;}", "@media (min-width:576px){.productsAdv.jsx-581115221{padding-top:30px;padding-bottom:90px;position:relative;}.productsAdv.jsx-581115221 .dots-left.jsx-581115221{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;}.productsAdv.jsx-581115221 .container.jsx-581115221{background-color:#e5e5e5;border:1px solid #dcdcdc;border-radius:3px;padding-bottom:30px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .header-min-colored.jsx-581115221{display:block;margin-top:30px;margin-bottom:15px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221{display:grid;grid-gap:30px;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221{font-size:21px;color:#353535;font-family:var(--molot-font);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221 .red.jsx-581115221{color:var(--accent-red);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221{width:100%;height:150px;box-shadow:2px 2px 3px rgba(0,0,0,0.25);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221 .p-img.jsx-581115221{width:auto;max-width:100%;display:block;height:auto;}}", "@media (min-width:768px){.productsAdv.jsx-581115221{padding-top:30px;padding-bottom:90px;position:relative;}.productsAdv.jsx-581115221 .dots-left.jsx-581115221{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;}.productsAdv.jsx-581115221 .container.jsx-581115221{background-color:#e5e5e5;border:1px solid #dcdcdc;border-radius:3px;padding-bottom:30px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .header-min-colored.jsx-581115221{display:block;margin-top:30px;margin-bottom:15px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221{margin-top:30px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221{display:block;margin-bottom:5px;font-size:19px;color:#353535;font-family:var(--molot-font);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221 .red.jsx-581115221{color:var(--accent-red);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221{width:100%;height:112px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .button-grey-container.jsx-581115221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:0px;}}", "@media (min-width:992px){.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .header-min-colored.jsx-581115221{display:block;margin-top:30px;margin-bottom:15px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221{margin-top:30px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221{display:block;margin-bottom:5px;font-size:19px;color:#353535;font-family:var(--molot-font);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221 .red.jsx-581115221{color:var(--accent-red);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221{width:100%;height:150px;}}", "@media (min-width:1200px){.jsx-581115221{.productsAdv .container .row .col-12 .p-cards-plate .p-card:hover;}.productsAdv.jsx-581115221{padding-bottom:30px;}.productsAdv.jsx-581115221 .dots-left.jsx-581115221{display:none;}.productsAdv.jsx-581115221 .container.jsx-581115221{padding-top:0px;background-color:rgba(0,0,0,0);border:none;border-radius:0;padding-bottom:30px;position:relative;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .header-min-colored.jsx-581115221{display:block;margin-top:30px;margin-bottom:15px;position:relative;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .text-big.jsx-581115221{font-size:17px;line-height:26px;font-weight:300;-webkit-letter-spacing:0.4px;-moz-letter-spacing:0.4px;-ms-letter-spacing:0.4px;letter-spacing:0.4px;color:var(--accent-red);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221{margin-top:30px;grid-gap:30px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221{font-size:24px;color:#535353;font-family:var(--molot-font);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .title.jsx-581115221 .red.jsx-581115221{color:var(--accent-red);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221{margin-top:4px;-webkit-transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;height:190px;}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .p-cards-plate.jsx-581115221 .p-card.jsx-581115221 .img-container.jsx-581115221 .p-img.jsx-581115221{width:auto;max-width:100%;display:block;height:auto;}.img-container.jsx-581115221{box-shadow:var(--box-shadow-up);}.productsAdv.jsx-581115221 .container.jsx-581115221 .row.jsx-581115221 .col-12.jsx-581115221 .button-grey-container.jsx-581115221{margin-top:0px;}}"])));

/***/ }),

/***/ "./components/tables/newsList.js":
/*!***************************************!*\
  !*** ./components/tables/newsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newsList = [{
  label: 'Льготный лизинг энергетического оборудования',
  id: 0,
  img: 'news/lizing.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Информируем Вас о новом формате поддержки производственных предприятий - льготном лизинге энергетического оборудования.',
  description: '<p>Информируем Вас о новом формате поддержки производственных предприятий - льготном лизинге энергетического оборудования.</p><br><p>При участии АО «Федеральная корпорация по развитию малого и среднего предпринимательства» в Российской Федерации созданы 4 региональные лизинговые компании.</p><br><p>АО «Региональная лизинговая компания Ярославской области» находиться в г. Ярославль и преимущественно работает по центральному и северо-западному федеральному округу. Руководитель компании - Филиппов Илья Олегович .</p><br><p>АО «Региональная лизинговая компания Ярославской области» предлагает  Вам  воспользоваться программой льготного лизинга на приобретение нового оборудования для субъектов индивидуального и малого предпринимательства.</p><br><p><b>Условия предоставления льготного лизинга:</b></p><br><table class="tg"><tr><th class="tg-0lax"><span>процентная ставка</span></th><th class="tg-0lax"><span>6% годовых - для российского оборудования</span><br><span>8% годовых - для иностранного оборудования</span></th></tr><tr><td class="tg-0lax"><span>авансовый платеж</span></td><td class="tg-0lax"><span>от 15% стоимости предмета лизинга</span></td></tr><tr><td class="tg-0lax"><span>сумма финансирования</span></td><td class="tg-0lax"><span>от 5 млн. рублей до 200 млн. рублей</span></td></tr><tr><td class="tg-0lax"><span>срок финансирования</span></td><td class="tg-0lax"><span>от 13 месяцев до 5 лет</span></td></tr></table><br><p><b>Предмет лизинга:</b></p><br><ul class="news-ul"><li>Высокотехнологичное и инновационное оборудование</li><li>Промышленное оборудование</li><li>Оборудование в сфере переработки и хранения с/х продукции</li></ul><br><p>С более детальной информацией о нашей компании и предоставляемых услугах Вы можете ознакомиться в ООО «Газовые машины», либо позвонить по телефону: <b>8 (4852) 58-80-84.</b></p>'
}, {
  label: 'Расширение гарантии и Увеличение межсервисных интервалов на газопоршневые электростанции MAN',
  id: 1,
  img: 'news/interval.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'В результате совместной работы с инженерами концерна MAN, направленной на  реализацию комплекса мероприятий по улучшению качества выпускаемых газопоршневых электростанций с двигателями MAN...',
  description: '<p>В результате совместной работы с инженерами концерна MAN, направленной на  реализацию комплекса мероприятий по улучшению качества выпускаемых газопоршневых электростанций с двигателями MAN, увеличен гарантийный срок на электростанции нашего производства до 24 месяцев.</p><br><p>Кроме того, согласовано расширение межсервисных интервалов на электростанции MAN 200 - 250 с 1 000 до 1500 моточасов, MAN 300-500 c 900 до 1000 моточасов, что позволяет нашим заказчикам существенно экономить на эксплуатационных расходах.</p>'
}, {
  label: 'Изготовлен первый образец газопоршневой электростанции с двигателем ЯМЗ 530 CNG',
  id: 2,
  img: 'news/first-maid.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ООО «Газовые машины» совместно с ПАО «Автодизель» изготовлен первый серийный образец газовой электростанции',
  description: '<p>ООО «Газовые машины» совместно с ПАО «Автодизель» изготовлен первый серийный образец газовой электростанции мощностью 150 кВт на базе нового перспективного семейства газопоршневых рядных двигателей ЯМЗ 530 CNG.</p><br><p>На базе этого семейства двигателей «Газовые машины» совместно с «Группой ГАЗ» планируют выпускать модельный ряд газопоршневых электростанций мощностью от 30 до 150 кВт экологического класса 5. </p><br><p>4-х и 6-цилиндровые модели ЯМЗ-530 CNG разработаны совместно с компанией Westport – мировым лидером в создании газовых двигателей для коммерческого транспорта (изделия компаний Cummins, Caterpillar, GM, Kenworth, Hyundai, Volvo, Weichai).</p><br><p>ЯМЗ-530 CNG по техническим характеристикам и потребительским качествам не уступают лучшим мировым аналогам, обеспечивает выполнение экологических параметров euro-5 и ресурс до капитального ремонта на уровне лучших мировых образцов (не менее 50 000 моточасов).</p><br><p>Изготовление газовых двигателей ЯМЗ-530 CNG осуществляется на современном производстве средних рядных двигателей в едином потоке с дизельными моделями с обеспечением мирового уровня качества. Компоненты CNG крупнейших мировых производителей Federal Mogul, Bosch, Nikki, MotorTech, KarlDungs</p><br><p>Семейство двигателей представлено 4-х и 6-ти цилиндровыми газовыми двигателями (CNG) семейства ЯМЗ-530, 4-тактные, с рядным расположением цилиндров, жидкостной системой охлаждения, турбонаддувом и охлаждением наддувочного воздуха. Степень сжатия 12. По выбросам вредных веществ соответствуют экологическому классу 5 – ТР ТС 018/2011, Правила ООН № 49-05В2 (G) - Euro 5.</p><br><p>Инженерами ООО «Газовые машины», совместно с компанией Motortech (Германия) проведены работы по адаптации транспортной версии газового двигателя для применения в составе стационарных электростанций. </p><br><p>17 августа 2017 г. электростанции были презентованы Президентом Группы ГАЗ Вадимом Сорокиным Генеральному директору ПАО «Россети» Олегу Бударину.<br>Первые единицы электростанций уже отгружены потребителям.</p>'
}, {
  label: 'Проведен аудит производства концерном MAN',
  id: 3,
  img: 'news/audit-man.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Завершен ежегодный технический аудит производства ООО «Газовые машины» техническими специалистами концерна MAN.',
  description: '<p>Завершен ежегодный технический аудит производства ООО «Газовые машины» техническими специалистами концерна MAN. В ходе аудита поставлена высокая оценка качеству выпускаемых нашей компанией газопоршневых электростанций с применением двигателей MAN. По результатам аудита действие сертификата производителя техники с двигателями MAN для нашей компании продлено на год, до 06 сентября 2019 г.</p>'
}, {
  label: 'Прошли обучение в концерне Liebherr',
  id: 4,
  img: 'news/libherr-study.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Бюль (Швейцария) в учебном центре концерна Liebherr.',
  description: '<p>Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Бюль (Швейцария) в учебном центре концерна Liebherr. Полученные знания значительно расширили возможности нашей компании по производству электростанций с применением двигателей Liebherr, а также по сервисному обслуживанию и ремонту техники Liebherr.</p>'
}, {
  label: 'Прошли обучение в концерне MAN',
  id: 5,
  img: 'news/man-study.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Нюрнберг в учебном центре концерна MAN. ',
  description: '<p>Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Нюрнберг в учебном центре концерна MAN. Полученные знания значительно расширили возможности нашей компании по производству электростанций с применением двигателей MAN, а также по сервисному обслуживанию и ремонту техники MAN.</p>'
}, {
  label: 'Генеральный директор ООО «Газовые машины» В.Г. Жуков избран в состав Общественного Совета Ярославской области.',
  id: 6,
  img: 'news/zhukov.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Приказом департамента инвестиций и промышленности Ярославской области от 18 декабря 2017 года № 313-ОД утвержден состав Общественного совета при департаменте департамента инвестиций и промышленности Ярославской области.',
  description: '<p>Приказом департамента инвестиций и промышленности Ярославской области от 18 декабря 2017 года № 313-ОД утвержден состав Общественного совета при департаменте департамента инвестиций и промышленности Ярославской области. Число членов Общественного совета – 9 человек.</p><br><p>В состав совета включены: Бердичевская Виктория Олеговна, Брюханов Дмитрий Юрьевич, Галагаев ВладА.В.Хухаревич, Жуков Владимир Геннадьевич, Можейко Леонид Чеславович, Николаев Валерий Юрьевич, Поляков Сергей Валерьевич, Симонов ВладА.В.Хухаревич, Шелкошвейн Петр Алексеевич</p><br><p> Срок полномочий – до декабря 2020 года.</p><br><p>Общественный совет является постоянно действующим консультативно-согласовательным органом, образованным в целях обеспечения участия граждан в выработке и реализации государственной политики в сфере, относящейся к полномочиям департамента инвестиций и промышленности Ярославской области.</p>'
}, {
  label: 'Введен в эксплуатацию энергоцентр ПАО «Автодизель» (ПСРД)',
  id: 7,
  img: 'news/avtodisel.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ООО «Газовые машины» по договору генерального подряда завершило работы по внедрению «под ключ» автономного энергоцентра для ПАО «Автодизель».',
  description: '<p>ООО «Газовые машины» по договору генерального подряда завершило работы по внедрению «под ключ» автономного энергоцентра для ПАО «Автодизель». В ходе выполнения EPC контракта нашими специалистами проведен сбор технических условий, комплекс инженерных изысканий, выполнены работы по проектированию, изготовлено основное оборудование для генерации. Проведен комплекс строительно-монтажных работ: строительство фундаментов, монтаж металлоконструкций и эстакад, монтаж теплотрассы и газопровода, монтаж узлов учета тепловой электрической энергии, газа. Выполнены прокладка кабельных линий и сетей связи и автоматики. Проведены пуско-наладочные работы.</p><br><p>Энергоцентр создан на базе пяти энергоблоков 300 кВт производства ООО «Газовые машины». В основе газопоршневых установок используются двигатели Э8502.10 производства ЯМЗ электрической мощностью 300 кВт., тепловой мощностью  470 кВт.</p><br><p>Тепловая энергия станции будет использоваться для производства горячей воды. Оборудование размещается на открытой площадке, в непосредственной близости от котельной. Станция работает в режиме   синхронизации с сетью. Топливо – природный газ. </p><br><p>В составе станции смонтированы ГРПШ и КТП. Действуют системы АСКУЭ,- локальной и удаленной диспетчеризации технологического оборудования. <i>«ЯМЗ» – одно из крупнейших российских предприятий по производству дизельных двигателей многоцелевого назначения, сцеплений, коробок передач, запасных частей к ним, а также стационарных агрегатов на их базе. Ярославскими двигателями оснащаются несколько сотен моделей транспортных средств, изделий специального назначения, ДГУ и ГПУ производимых в России и Белоруссии.</i></p>'
}, {
  label: 'Генеральный директор ООО «Газовые машины» В.Г. Жуков в составе делегации Ярославской области посетил респ. Крым',
  id: 8,
  img: 'news/visit-krim.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Делегация Ярославской области во главе с губернатором Дмитрием Мироновым прибыла с рабочим визитом в Республику Крым. Регион также представляют председатель Правительства Дмитрий Степаненко, его заместители, руководители промышленных и сельскохозяйственных предприятий, ректоры вузов.',
  description: '<p>Делегация Ярославской области во главе с губернатором Дмитрием Мироновым прибыла с рабочим визитом в Республику Крым. Регион также представляют председатель Правительства Дмитрий Степаненко, его заместители, руководители промышленных и сельскохозяйственных предприятий, ректоры вузов.</p><br><p>В Министерстве промышленной политики республики прошел круглый стол по межрегиональному торгово-экономическому взаимодействию, где представители правительства Ярославского региона и руководители промышленных предприятий вместе с крымскими коллегами обсудили вопросы расширения поставок в Крым ярославской продукции. На круглом столе в Министерстве промышленности республики Крым продукцию ярославской компании «Ангстрем» представил генеральный директор предприятия Евгений Завитухин.</p><br><p>«Задача наших электролабораторий в том, чтобы электроэнергия, которая передается потребителю, была качественной, – пояснил Евгений Завитухин. – У нас есть в том числе и уникальные системы, которые в России и странах СНГ раньше не производились. Продукцию мы уже поставляли на несколько предприятий Крыма и сейчас продолжаем искать партнеров, которые смогли бы обслуживать наши лаборатории».</p><br><p>На сегодняшний день в Крыму функционируют энергокомплексы на базе газопоршневых установок ЯМЗ производства ООО «Газовые машины» на объектах в г. Алушта. Кроме того, газопоршневые электростанции ООО «Газовые машины» обеспечивают электроэнергией добычу природного газа на шельфе Черного моря. </p><br><p>В тот же день в Симферополе состоялась встреча членов официальной делегации Ярославской области с и. о. ректора Крымского федерального университета имени В.И. Вернадского Андреем Фалалеевым. Регион представляли руководитель аппарата губернатора Кирилл Сорокин и руководители трех вузов: ЯрГУ – Александр Русаков, ЯГСХА – Светлана Гусар и ЯГТУ – Елена Степанова.</p><br><p>Ярославцы представили крымским коллегам опыт создания регионального Агентства технологического развития: в него вошли три вуза в рамках работы по созданию научно-технологической платформы. Заведующие основными кафедрами Крымского университета рассказали о своей работе, показали, как функционируют лаборатории.</p><br><p>Итогом мероприятия стало подписание двусторонних соглашений о сотрудничестве между тремя ярославскими вузами и Крымским федеральным университетом. Документами предусмотрена реализация совместных образовательных программ, содействие организации практического обучения студентов на предприятиях регионов, совместная научная работа, стажировки, научные и молодежные проекты.</p><br><p>О перспективах сотрудничества Ярославской области и Крыма в сфере агропромышленного комплекса и потребительского рынка говорили также на круглом столе, прошедшем в  Министерстве сельского хозяйства республики.</p><br><p>«Наблюдается положительная динамика увеличения поставок ярославской продукции в Республику Крым, – отметил заместитель председателя Правительства Ярославской области Валерий Холодов. – Объем товарооборота продукции АПК в 2016 году составлял почти 35 миллионов рублей, в конце 2017-го был увеличен до 101 миллиона».</p><br><p>В 2018 году планируется, что объем товарооборота по сравнению с 2016 годом будет увеличен в 5 раз и достигнет 181 миллиона рублей.</p>'
}, {
  label: 'ООО «Газовые машины» участвовало в выставке «Собственная генерация-Юг» (Краснодар)',
  id: 9,
  img: 'news/sobsvennaya-generaciya.jpg',
  category: 'Наука и техника',
  created_at: '01.07.2014',
  updated_at: '12.12.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ВЦ «КубаньЭкспоцентр», г. Краснодар, состоялся I Форум-выставка Юга России «Собственная генерация на предприятии',
  description: '<p>1-2 июля 2014 г. в ВЦ «КубаньЭкспоцентр», г. Краснодар, состоялся I Форум-выставка Юга России «Собственная генерация на предприятии: ставка на энергоэффективность, бесперебойность и снижение затрат». Организатором Форума является компания Redenex – профессиональный организатор деловых мероприятий международного уровня.</p><br><p>Собственная выработка электричества позволяет предприятиям не только серьезно сократить расходы на электроэнергию, но и обеспечить ее бесперебойность, удовлетворить растущие потребности в новых мощностях, а в ряде отраслей – утилизировать отходы производства.</p><br><p>Целью Форума-выставки послужило содействие внедрению и эксплуатации объектов малой и средней генерации на предприятиях Юга России, а также продвижение технологических решений в сфере распределенной энергетики. </p><br><p>Программа мероприятия включала в себя двухдневный форум, выставку энергооборудования, мастер-классы и опыт предприятий, работу центра Business Connect, консультации юристов и ежедневные экскурсии на действующие энергообъекты. Мы надеемся, что знакомство с последними тенденциями в области распределенной энергетики и примерами успешной реализации проектов по созданию и использованию собственной генерации будет способствовать повышению эффективности и развитию вашего бизнеса, а также и экономики региона в целом». </p><br><p>Первая дискуссия была посвящена перспективам развития распределенной энергетики на Юге России. «Собственная генерация – насущная тема для многих предприятий России. В то время, когда растут тарифы на электроэнергию, предприятия, у которых электроэнергия занимает большую долю в себестоимости, это очень сильно ощущают.</p><br><p>Кроме того, в первый день обсуждались такие вопросы как взаимодействие субъектов энергетической отрасли и юридические аспекты внедрения собственной генерации. Достойным завершением первого дня стал визит на уникальную ГГЭС предприятия ООО «Центр Соя», функционирующую на биомассе из лузги в сплоченном виде.</p><br><p>Второй день Форума был посвящен вопросам финансирования и сокращению издержек проектов по внедрению собственной генерации. Также участники сравнили эффективность проектов с использованием отечественных дизельных и газопоршневых генераторов и электрических агрегатов для малой энергетики. Особый интерес аудитории вызвали мастер-классы и выступления экспертов, поделившихся практическим опытом внедрения собственной генерации на производстве.</p><br><p>В завершение Форума участники смогли посетить действующий энергоцентр компании ЗАО «Тандер» (сеть магазинов «Магнит»). Энергоцентр мощностью 17.2 МВт с когенерацией и выработкой СО2 из выхлопных газов обеспечивает энергоснабжение крупнейшего на юге России тепличного комплекса «Зеленая линия» и административных помещений компании Магнит. </p><br><p>Параллельно с деловой программой работала выставка, где все посетители могли ознакомиться с различными видами оборудования: генерирующим, энергосберегающим, оборудованием, работающим на органических видах топлива, системами бесперебойного электроснабжения, сервисным оборудованием для малой генерации и др. </p><br><p>За два дня работы Форум посетили более 200 делегатов, среди которых руководители и главные энергетики таких компаний, как: Лукойл, Роснефть, РЖД, Нипигазпереработка, Сибур, Евроцемент, Тандер (сеть магазинов Магнит), Еврохим, Сад Гигант, Юг Руси, Макс Моторс, Ростовтеплоэлектропроект и многие другие. </p><br><p>На площадке Форума работала система Business Connect, которая в очередной раз доказала свою эффективность в организации деловых переговоров, – было проведено более 150 встреч, которые безусловно стали основой для длительного и взаимовыгодного сотрудничества.'
}, {
  label: 'Выработка электрической энергии из свалочного газа',
  id: 10,
  img: 'news/bio-energy.jpg',
  category: 'Наука и техника',
  created_at: '21.01.2019',
  updated_at: '21.01.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'Мусор при гниении выделяет свалочный газ, 50% которого составляет метан –  горючий газ. Для извлечения метана используется расположенная в теле полигона газосборная система...',
  description: 'Газа, вырабатываемого из содержимого одной городской мусорной свалки среднего размера, достаточно для обеспечения электроэнергией целого городского микрорайона. Европейские компании осуществляют утилизацию свалочного газа по этой технологии уже много лет. Свободное распространение свалочного газа приводит к загрязнению атмосферы токсичными и дурно пахнущими соединениями, кроме того, в определенных концентрациях свалочный газ может представлять опасность для человека. Для устранения этой угрозы свалочный газ необходимо утилизировать.<br><br>Суть технологии состоит в том, чтобы исключить проникновение продуктов распада отходов глубоко в грунт и, затем в груновые воды, путем укладки на дно котлована геомембраны. Для исключения массового выхода свалочных газов, по всей поверхности полигона устраивается экран из глины, который дополнительно перекрывает доступ кислорода вглубь полигона. Мусор при гниении выделяет свалочный газ, 50% которого составляет метан –  горючий газ. Для извлечения метана используется расположенная в теле полигона газосборная система,  состоящая из разветвлённой сети трубопроводов и колодцев-накопителей в местах скопления.<br><br>По системе трубопроводов свалочный газ поступает в накопители и далее сжигается в газопоршневых двигателях,  генераторы вырабатывают электроэнергию. Давление газа в системе поддерживается комплексом компрессорных установок. Новые технологии не только позволяют получать электроэнергию из свалочного газа, но и существенно улучшают экологическую обстановку в районе.<br><br>Следует отметить, что поступление свалочного газа не стабильно, и для обеспечения полной его утилизации целесообразно на полигоне смонтировать установку для подмешивания в свалочный газ природного, либо сжиженного газа. Это обеспечит утилизацию свалочного газа в полном объеме даже в периоды, когда его будет недостаточно для стабильной работы газопоршневого двигателя.<br>Компания «Газовые машины» предлагает полностью комплектные решения для утилизации свалочных газов, основанные на применение модульных газопоршневых электростанций собственного производства 100% заводской готовности.<br><br>Двигатели электростанций полностью адаптированы для работы на свалочном газе в заводских условиях.'
}, {
  label: 'Лизинг газопоршневых установок',
  id: 11,
  img: 'news/lizing-rlk.jpg',
  category: 'Наука и техника',
  created_at: '13.03.2019',
  updated_at: '13.03.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'РЛК ЯО будет осуществлять финансирование проектов, направленных на внедрение автономных энергоцентров на базе модульного энергетического оборудования производства компании «Газовые машины».',
  description: '13 марта 2019 года подписано соглашение о сотрудничестве Региональной лизинговой компании Ярославской области (РЛК ЯО) и ООО «Газовые машины».<br><br>Согласно подписанного документа РЛК ЯО будет осуществлять финансирование проектов, направленных на внедрение автономных энергоцентров на базе модульного энергетического оборудования производства компании «Газовые машины».<br><br>Первый контракт заключен с сельхозпредприятием из Ростовского района. Благодаря специальной программе финансирования Заказчик получил возможность приобрести оборудование в лизинг под 6% годовых.<br><br>«Газовые машины» не только изготовят для Заказчика когенерационную установку MAN мощностью 260 кВт, но и осуществят доставку оборудования, монтаж и пуско-наладочные работы. Когенерационная установка MAN будет обеспечивать электроэнергией и теплом животноводческий комплекс.<br><br>Решение о финансировании этого проекта нами уже принято - сообщил генеральный директор РЛК ЯО Илья Филиппов.<br><br>Сотрудничество между РЛК ЯО и «Газовыми машинами» открывает для малого и среднего бизнеса возможность для существенного сокращения производственных затрат за счет снижения стоимости энергоресурсов. Так в настоящее время, средняя стоимость 1 кВт.ч электрической энергии для малого бизнеса составляет более 6 рублей, стоимость 1 Гкал тепловой энергии более 2 000 рублей.<br><br>Применение высокоэффективных когенерационных установок производства «Газовые машины» позволяет заказчикам получить себестоимость электрической энергии на уровне 2 рублей за 1 кВт.ч, при этом тепловая энергия получается без дополнительных затрат.<br><br>Доступные цены на выпускаемое нами оборудование, в совокупности с выгодным финансированием проектов со стороны РЛК ЯО, позволяют сформировать уникальное предложение для организаций малого и среднего бизнеса, нуждающихся в оптимизации энергозатрат, - отметил генеральный директор ООО «Газовые машины» Владимир Жуков.'
}, {
  label: 'Запасные части и комплектующие компании Motortech',
  id: 12,
  img: 'news/parts-motortech.jpg',
  category: 'Наука и техника',
  created_at: '22.03.2019',
  updated_at: '22.03.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'Прямые поставки от производителя любых комплектующих компании Motortech со склада в г. Ярославле',
  description: 'Уважаемые потребители, с текущего года, наша компания имеет возможность предложить Вам оригинальные комплектующие и запасные части к газопоршневых двигателям MAN, Jenbacher, MTU, MWM, Liebherr, Cummins, Caterpillar, Waukesha, Perkins, производства компании Motortech GMBH (Мотортех, Германия).<br><br>Прямые поставки от производителя позволяют нам в оперативные сроки и по низкой цене осуществить поставку любых комплектующих компании Motortech со склада в г.Ярославле.<br><br>В номенклатуре:<br>- Свечи зажигания и свечные наконечники (высоковольтные провода) Motortech GE 2-3, GI 3-4, GK 3-7, GL 3-4, MHP, MBP, MPC, IPC, XT, XTL;<br>- Масляные фильтра;<br>- Катушки зажигания Motortech и Altronic;<br>- Блоки управления зажиганием и комплектные системы MIC 3, MIC 4, MIC 5, MIC 6, PowerView 3, Alpharail,  триггерные диски;<br>- Системы контроля детонации Detcon20, Alpharail;<br>- Модули температурного контроля TempScan20;<br>- Дроссельные заслонки ITB Throttle Body, дроссельные заслонки для газовых двигателей;<br>- Газовоздушные смесители VariFuel 2 и блоки управления VariStep 3;<br>- Системы контроля эмиссии EmCon 5;<br>- Системы управления генераторными установками All In One;<br><br>Наши специалисты, подберут для Вас необходимые комплектующие и проведут работы по их монтажу на Вашем объекте.'
}, {
  label: 'Газовые двигатели MAN для применения в составе когенерационных установок',
  id: 13,
  img: 'news/MAN-E-3268-LE-242.jpg',
  category: 'Наука и техника',
  created_at: '31.03.2019',
  updated_at: '31.03.2019:13.34',
  author: 'А.В. Хухарев',
  preview_text: 'MAN Engines производит малозагрязненные газовые двигатели для когенерационных установок мощностью от...',
  description: 'MAN Engines производит малозагрязненные газовые двигатели для когенерационных установок мощностью от 37 кВт до 500 кВт на природном газе и от 68 кВт до 500 кВт на специальном газом (биогаз, свалочный газ, канализационный газ). Двигатели МАН, разработанные специально для работы на  природном и специальных газах, обладают высочайшей надежностью и самым  высоким КПД. Оптимальный процесс сгорания позволяет достигать общей эффективности свыше 90 процентов. Благодаря широкому ассортименту атмосферных двигателей с невысокой стоимостью технического обслуживания самые низкие уровни выбросов могут быть достигнуты за счет использования 3-ходового каталитического нейтрализатора.<br><br>Газовые двигатели МАН положительно зарекомендовали себя благодаря своей надежности в сочетании с устойчивой работой в период пиковых нагрузок и непрерывной работой, в сельском хозяйстве, муниципальной сфере, в гостиницах и больницах, а также во многих других отраслях. Длинные интервалы обслуживания и высокий срок службы газовых двигателей МАН обеспечивают низкую общую стоимость владения.<br><br><b>Технические характеристики двигателей полностью подтверждены ресурсными испытаниями</b><br><br>Двигатели MAN для работы природного газа и специального газа (биогаз, свалочный газ, канализационный газ) гарантируют безопасность применения. Испытанные и оптимизированные по результатам в полевых испытаний, они доказывают свою надежность при эксплуатации в самых неблагоприятных условиях окружающей среды. Выбирая двигатель МАН Вы можете быть уверены в использовании полностью разработанного продукта, на который вы можете рассчитывать. Портфолио двигателей покрывает ряд мощности от 37 до 500 kW. Это делает двигатели МАН идеальным поставщиком энергии для самого широкого спектра операций в когенерации – для коммунальных предприятий, сельскохозяйственных и промышленных предприятий.<br><br><b>Гибкость и индивидуальность</b><br><br>МАН знает: каждое решение должно быть индивидуальным, так как задачи разные. Компетенция компании «Газовые машины» дает Вам возможность применения различных систем управления или дополнительных компонент, что позволяет выбрать наилучший вариант компоновки энергоустановки для Вашего объекта с учетом любых индивидуальных особенностей.<br><br><b>Прочная и одновременно компактная конструкция</b><br><br>Компактность с высокой производительностью: специальные газовые двигатели МАН объединяют оба эти преимущества. При работе в непрерывном режиме, они гарантированно поставляют энергию, в течение всего длительного срока службы. При выполнения регламента обслуживания гарантированный срок службы двигателей МАН до капитального ремонта составляет 50 000 моточасов. Общий ресурс двигателей МАН составляет не менее 100 000 моточасов. Конструкция двигателей МАН позволяет легко поддерживать их в исправном состоянии, оперативно, эффективно, и по низким ценам.<br><br><b>Эффективность благодаря длинным межсервисным интервалам</b><br><br>Двигатели МАН обладают простотой и надежностью конструкции, что позволяет в значительной мере сократить эксплуатационные расходы. Компактная и легко доступная конструкция облегчает и ускоряет операции обслуживания.<br><br><b>Низкие уровни выбросов</b><br><br>Газовые двигатели МАН имеют низкий уровень загрязнения окружающей среды. В соответствии со строгими директивами по выбросам TA-Luft и TA-Luft½, очистка выхлопных газов зачастую даже не требуется. На специальных газовых двигателях, предназначенных для работы на биогазе, может потребоваться применение каталитического нейтрализатора. 3 - полюсный каталитический нейтрализатор достаточен для атмосферных двигателей, работающих на природном газе. Таким образом, вы можете рассчитать низкие затраты на покупку.<br><br>Низкий уровень загрязняющих веществ и оснащенные современной технологией сжигания, газовые и специальные двигатели MAN прокладывают путь к будущему когенерации. Энергоснабжение является важным компонентом экономического успеха. Поэтому, конечно, вы всегда можете рассчитывать на нашу корпорацию после покупки, если вы нуждаетесь в помощи.<br><br>МАН и «Газовые машины» предлагают вам, индивидуальную концепцию обслуживания. Наши компании регулярно проводят учебные курсы для обучения персонала обслуживанию когенерационных установок с применением двигателей МАН, используя глубокие и проверенные знания МАН: надежные и эффективные – так же, как газовый двигатель МАН. '
}, {
  label: 'Паровые турбины MAN для выработки энергии из отходов',
  id: 14,
  img: 'news/turbina.jpg',
  category: 'Наука и техника',
  created_at: '07.04.2019',
  updated_at: '08.04.2019:10.21',
  author: 'А.В. Хухарев',
  preview_text: 'Производство электроэнергии основанное на переработке отходов является классическим примером применения паровых турбин МАН',
  description: 'Отходы в энергию (WtE) - это переработка и преобразование отходов в электричество или тепло. На комплексах WtE цель состоит в том, чтобы генерировать энергию путем сжигания отходов.<br><br>Тепло, выделяемое в результате этого процесса обязательств, используется для производства электроэнергии, что приводит к дополнительной прибыли для оператора. Деятельность WtE в Европе значительно активизировалась после принятия в 2005 году Директивы ЕС, запрещающей захоронение неочищенных отходов.<br><br><b>Паровые турбины для WtE</b><br><br>В зависимости от требований заказчика, компания "Газовые машины» подберет паротурбинные генераторы «МАН Энерджи Солюшнс" для установок WtE. Объем поставки также может включать оборудование водо-парового цикла, такого как, отопительные конденсаторы, конденсаторы воздушного охлаждения, предпусковые подогреватели, обходные станции и соединительные трубы.<br><br><b>Классическое применение турбин МАН</b><br><br>Производство электроэнергии основанное на переработке отходов является классическим примером применения паровых турбин МАН. Недавно компания ONE Energy Solutions поставила самую большую паротурбинную генераторную установку для завода WtE в Великобритании мощностью 80 МВт.<br><br>'
}, {
  label: 'Газопоршневые электростанции Liebherr на страже энергетической эффективности.',
  id: 15,
  img: 'news/liebherr-gaz.jpg',
  category: 'Наука и техника',
  created_at: '15.04.2019',
  updated_at: '16.04.2019:15.44',
  author: 'А.В. Хухарев',
  preview_text: 'Газовые электростанции совместного производства Liebherr и Газовых машин используются в построении децентрализованных систем выработки тепловой и электроэнергии...',
  description: 'С увеличением численности населения стремительно растет мировой спрос на энергоносители. Вместе с тем увеличивается потребность в использовании возобновляемых энергоресурсов и экологически безопасных технологий. Перспективной видится идея выработки энергии там, где она фактически используется. Это позволит не только сократить потери при транспортировке, но и уменьшить затраты на инфраструктуру.<br><br>Компания Liebherr вносит свой вклад в развитие данного направления, создавая газовые электростанции для экологически безопасной выработки энергии на автономных блочных тепловых электростанциях и генераторных установках. Двигатель может работать на разных видах газа, обеспечивая эффективную утилизацию отходов — например, на биогазовых или очистных установках.<br><br>Газовые электростанции совместного производства Liebherr и Газовых машин используются в построении децентрализованных систем выработки тепловой и электроэнергии, и применяются в различных сферах деятельности:<br><br>⦁	Использование в жилищной сфере (многоквартирных домах, жилых постройках и т.п.)<br><br>⦁	Использование в сфере обслуживания и производства (отелях, ресторанах, крупных предприятиях, центрах электронной обработки данных и т.п.)<br><br>⦁	Использование в социальной сфере (вокзалы, бассейны, больницы)<br><br>⦁	Биогазовые установки<br><br>⦁	Очистные установки<br><br>⦁	Сельскохозяйственные предприятия<br><br>⦁	Насосные станции<br><br>Газовые электростанции Liebherr отличаются безотказной работой, высоким КПД и простотой установки. Для обеспечения этих преимуществ они поставляются полностью укомплектованными.<br><br><b>Высокая производительность благодаря оптимизированной системной интеграции</b><br><br>Механический КПД газовых двигателей Liebherr составляет более 43%. Это лучший показатель для двигателей данного класса мощности. Такой эффективности удалось достичь благодаря многолетнему опыту, интенсивным проектно-конструкторским работам, тщательному подбору компонентов и высокой степени системной интеграции аппаратного и программного обеспечения.<br><br>Модульные газовые электростанции Liebherr поставляются в собранном виде и сразу готовы к установке.<br><br><b>Оптимизированное оборудование</b><br><br>Все компоненты оборудования тщательно подобраны и оптимизированы для этих электростанций. Они проходят длительные испытания и строгую проверку качества. Систему можно без особых усилий и с высокой точностью откалибровать для конкретных условий использования.<br><br><b>Электронные компоненты</b><br><br>Наши газовые электростанции оснащены полностью автоматической системой управления, легко интегрируемой в общие системы управления предприятием. Программное обеспечение уже настроено должным образом<br><br><b>ПО и настройка параметров электростанции</b><br><br>В поставляемом программном обеспечении уже настроены все необходимые параметры. Тщательная проверка на соответствие и регулировка значений параметров позволяет обеспечить гарантированно высокую производительность двигателей Liebherr. Кроме того, существует достаточно возможностей выполнить точную настройку в условиях эксплуатации.<br><br>Производственная линейка газовых двигателей Liebherr охватывает широкий спектр моделей от 4-цилиндровых рядных двигателей до 20-цилиндровых V-образных двигателей. Помимо полностью оборудованных и готовых к установке комплектов, мы также поставляем базовые модели повышенной прочности, которые могут использоваться в биогазовых установках.<br><br>Мощностной ряд электростанции Liebherr составляет от 50 до  1 000 кВт.'
}, {
  label: 'Как выбрать электростанцию? Энергоснабжение обособленных и удаленных объектов.',
  id: 16,
  img: 'news/energy-choise.jpg',
  category: 'Наука и техника',
  created_at: '21.04.2019',
  updated_at: '22.04.2019:12.24',
  author: 'А.В. Хухарев',
  preview_text: 'Что выбрать: дизельная или газовая электростанция, работающая на сжиженном газе? Аспекты выбора электростанций.',
  description: '<b>Энергоснабжение обособленных и удаленных объектов, аспекты выбора, дизельная электростанция или газовая электростанция, работающая на сжиженном газе.</b><br><br>В настоящее время энергоснабжение многих небольших вахтовых поселков, строительных городков и т.п., производится от дизельных электростанций. В условиях роста цен на дизельное топливо электроснабжение таких объектов влетает в копеечку.<br><br>Например, максимальная потребность в электрической энергии городка на 500 человек (при условии применения электрического отопления) составляет порядка 1 300 кВт.час. При стоимости дизельного топлива 50 руб. за 1 литр, затраты на выработку 1 кВт.час. электрической энергии составят  11,5 руб. или 14 950 руб. в час. (без учета затрат на сервисное обслуживание оборудования). Кроме того, не секрет, что легкий доступ к дизельному топливу создает предпосылки для несанкционированной заправки транспортных средств за счет топлива, предназначенного для работы дизельной электростанции. В результате, на практике, затраты на выработку 1 кВт.часа электрической энергии дизельной электростанцией достигает 15 руб. После чего, многие руководители вахтовых поселков и городков, задумываются об альтернативных вариантах организации электроснабжения.<br><br>Наиболее надежным из них, является генерация с применением газопоршневой электростанции. При цене природного газа 6 руб. за 1 куб.м. себестоимость 1 кВт.час. электрической энергии при выработке электростанцией 500 кВт. составит 2,12 руб. (включая стоимость сервисного обслуживания и затраты на текущий и капитальный ремонты).<br><br><b>В разрезе месяца экономия от применения ГПУ на объекте с постоянным потреблением электроэнергии 500 кВт составит 4 636 800 руб. Срок окупаемости инвестиций в приобретение ГПУ составляет менее 1 года.</b><br><br>Положительный опыт применения ГПУ в качестве источника энергоснабжения получен нами совместно с компанией «СтройТрансГаз». Электроснабжение вахтового поселка Сывьдарьма уже более года осуществляется газовой электростанцией MAN 500 кВт производства компании «Газовые машины». До запуска газовой электростанции поселок обеспечивался электрической энергией от дизельных электростанций. Ежемесячные расходы на покупку дизельного топлива составляли 4,5 млн. рублей. После запуска газовой электростанции расходы на выработку электрической энергии были снижены до 650 тыс. руб. в месяц.<br><br>Вместе с тем, при проработке такого варианта, наши клиенты сталкиваются со следующими задачами. Зачастую объекты, требующие электроснабжения носят временный характер, и прокладка магистрального газопровода к ним экономически не оправдана. В таких условиях, возможно применение газопоршневых установок, работающие на пропан-бутановой смеси, которую можно доставлять на объект по мере необходимости. Здесь возникает следующий вопрос, большинство европейских производителей газопоршневых электростанций не согласовывает применение своего оборудования при работе на пропан-бутановой смеси. А опыт применения электростанций на базе ДВС российского или китайского производства, свидетельствует о крайне низкой надежности и нестабильной работе этого оборудования на пропан-бутановой смеси.<br><br>Для решения этой ситуации инженеры концерна «МАН» (Германия) совместно со специалистами компании «Газовые машины», разработали модульную газопоршневую электростанцию, адаптированную для работы на пропан-бутановой смеси. Газопоршневой двигатель, выпускается с завода в Германии, предварительно настроенный для работы на пропан-бутановой смеси. Программное обеспечение, разработанное специалистами компании «Газовые машины» позволяет электростанции работать стабильно и устойчиво, не зависимо от меняющегося состава топливной смеси, без ухода в режимы детонации.<br><br>В настоящее время для поставки доступны две модели модульных электростанций, мощностью 250 и 500 кВт. Модуля поставляются полной заводской готовности.'
}, {
  label: 'Используем аэрационный газ для газопоршневых установок',
  id: 17,
  img: 'news/utilizaciya.jpg',
  category: 'Наука и техника',
  created_at: '12.05.2019',
  updated_at: '13.05.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'Существует эффективный способ утилизации газа от очистных сооружений путем использования его в качестве топлива для когенерационных установок...',
  description: 'В процессе очистки сточных вод путем анаэробного брожения на очистных сооружения крупных городов вырабатывается в большом количестве аэрационный (канализационный) биогаз. При этом, в большинстве случаев он не используется и выбрасывается в атмосферу, загрязняя окружающую среду.<br><br>Вместе с тем, по своему составу этот газ пригоден для утилизации (содержание метана до 70 %), которая осуществляется в основном путем сжигания в котлах и использования тепла на нужды отопления. Но в летний период времени утилизация биогаза этим способом не востребована не в полном объеме, так как превышает потребности очистных сооружений в тепловой энергии.<br><br>Компания «Газовые машины» предлагает более эффективный способ утилизации газа от очистных сооружений путем использования его в качестве топлива для когенерационной установки, вырабатывающей электрическую и тепловую энергию.<br><br>Высокий КПД газопоршневой мини-тэц (до 90 %) позволяет эффективно использовать биогаз  от очистных сооружений и частично обеспечивать их работу даже при аварии централизованного электроснабжения. Тепло вырабатываемое от мини-тэс используется для поддержания рабочих процессов в метантенках.<br><br>Таким образом, применение когенерационной установки для утилизации биогаза от очистных сооружений позволяет решить следующие задачи:<br><br>⦁	снизить энергозатраты на очистку сточных вод;<br><br>⦁	снизить нагрузку на электрические сети в населенном пункте;<br><br>⦁	улучшить экологическую ситуацию в населенном пункте.<br><br>Компания «Газовые машины» предлагает к поставке модельный ряд модульных когенерационных установок, адаптированных для работы на биогазе от очистных сооружений, мощностью от 250 до 2 000 кВт, на базе двигателей MAN, Liebherr, Jenbacher.<br><br><b>Срок окупаемости инвестиций в биогазовую мини-тэц (с  учетом приобретения оборудования по подготовке топливного газа) составляет не более 5 лет.</b>'
}, {
  label: 'Новый газопоршневый двигатель MAN E3268. Электрическая эффективность 41,7%!',
  id: 18,
  img: 'news/MAN-E3268.jpg',
  category: 'Наука и техника',
  created_at: '15.07.2019',
  updated_at: '15.07.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'Новая модель двигателя E3268 LE242 разработана как усиленная 4-х тактная версия газового двигателя с 8 цилиндрами , расположенными в форме V-образной версии.',
  description: '40% электрической эффективности в деятельности природного газа-смешение природного газа с 250 мг оксида азота  с соблюдением  требований технических инструкций по качеству контроля воздуха только с катализатором окисления.<br><br><b>Концерн МАН будет презентовать  модель газового двигателя MAN E3268 мощностью 320kw на выставке EnergyDecentral.</b><br><br>На выставке EnergyDecentral 2018 Концерн МАН впервые будет представлен газовый двигатель MAN E3268 мощностью 320kw и частотой в 50 Гц. Двигатель MAN E3268 LE242 разработан на базе двигателя E3268 with 370 kW, который был представлен в 2013 г. и впоследствии доработан и протестирован. 8-ми цилиндровый двигатель является оптимизированным вариантом для работы на природном газе с коэффициентом сжатия в ε 12 : 1 и может быть также использован для биогаза с коэффициентом сжатия ε 13.6 : 1.<br><br>Использование отрегулированной версии тока (в сочетании тепла и энергии) может применяться,  начиная с промышленных и коммерческих областей  до  муниципальных и развлекательных секторов.<br><br><b>Новая модель двигателя E3268 LE242 разработана как усиленная 4-х тактная версия газового двигателя с 8 цилиндрами , расположенными в форме V-образной версии.<br><br>Благодаря цилиндрическому отверстию в 132мм и удару в 157 мм двигатель E3268 LE242 предлагает 17,2 л цилиндрическую способность.</b><br><br>Для достижения выходной мощности  в 320 Kw c частотой вращения 1500 мин -1  перезарядка была значительно оптимизирована. Это оказало полезное воздействие на электрическую эффективность, которая возрасла до 41.7 % для природного газа.<br><br>«Эта отличный механический показатель эффективности   позволяет достичь волшебного значения в 40 % преобразования энергетической эффективности. В некоторых странах это достигается тяжело из-за сокращения субсидий», говорит Гюнтер Зайбс, глава концерна MAN.<br><br>Двигатель E3268 LE242 мощностью 320 kw вытеснит двигатель E2848 LE322 предыдущей серии и cокращает мощностной разрыв  с 220 до 370 kw среди турбированных двигателей MAN. Испытанная система регистрации данных со стандартными сенсорами и кабелем дает дополнительную выгоду для покупателей. Через СAN монитор важные параметры такие как охлаждение, потребление масла и температура исходящих газов также как и уровень заряда и масляного давления обеспечивается системой контроля с минимальными усилиями.<br><br>Двигатель E3268 LE242 прекрасно оснащен под будущие требования по выбросам благодаря разработке варианта с уровнем оксида азота в 250 mg/Nm3 NOx (5% O2).<br><br>В тоже время выходная мощность в 320 kw двигателя MAN,оснащенная оксидным катализатором отвечает требованиями технических инструкций воздушного контроля качества (TA Luft)½<br><br>Для потребителей с частотой в 60 Гц двигатели MAN также предлагает эксплуатационный вариант двигателя E3268 LE242 для природного газ с частотой вращения 1800 мин-1<br><br>Этот двигатель имеет выходную мощность в 340 kw  и достигает механической степени эффективности в 40,3 % и термической эффективности в 48,2%, в сумме 88,5%.<br><br>Двигатель E3268 LE242 будет доступен начиная с первого квартала 2019 и представлен впервые на выставке EnergyDecentral - Международная выставка по инновациям в энергетической сфере в Ганновере.'
}, {
  label: 'Касательно применения двухопорных генераторов в газовых электростанциях MAN',
  id: 19,
  img: 'news/man-generator.png',
  category: 'Важно',
  created_at: '13.09.2019',
  updated_at: '13.09.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'По данному вопросу получен однозначный ответ от Руководителя инженерной поддержки продаж и сервисного обслуживания MAN Engines г-на Бенджамина Круга.',
  description: 'В связи с регулярно поступающими обращениями от наших Заказчиков, в отношении применения двухопорных синхронных генераторов в газовых электростанциях MAN сообщаем следующую информацию.<br><br>По данному вопросу получен однозначный ответ от Руководителя инженерной поддержки продаж и сервисного обслуживания MAN Engines г-на Бенджамина Круга.<br><br>В своем письме Б. Круг допускает применение как однопоорных, так и двухопорных генераторов в газопоршневых электростанциях  MAN, без каких либо ограничений по ресурсу двигателя и генератора.<br><br>При этом, для сохранения гарантии на двигатель MAN производитель электростанции должен соблюдать следующие условия:<br><br>- при применении одноопорного генератора вес его ротора не должен превышать 630 кг и момент инерции 11 кг. (что позволяет применять без ограничения синхронные генераторы мощностью до 530 кВт);<br><br>- при применении двухопорного генератора, производитель должен произвести расчет размеров муфты, а также выполнить расчет крутильных колебаний и согласовать все эти расчеты с компанией MAN.'
}, {
  label: 'Приглашаем всех на выставку Heat&Power 2019.',
  id: 20,
  img: 'news/expo.jpg',
  category: 'Наука и техника',
  created_at: '16.09.2019',
  updated_at: '16.09.2019:06.31',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» приглашает всех заинтересованных во внедрении объектов автономной энергетики, а также организации, эксплуатирующие объекты распределенной малой генерации, посетить наш стенд.',
  description: 'Компания «Газовые машины» приглашает всех заинтересованных во внедрении объектов автономной энергетики, а также организации эксплуатирующие объекты распределенной малой генерации посетить наш стенд C 201 в период с 22 по 24 октября в «Крокус-Экспо» (Москва) в рамках 4-ой международной выставки промышленного котельного, теплообменного, электрогенерирующего оборудования и трубопроводных систем для тепловых сетей «Heat&Power 2019».<br><br>В ходе выставки Вы можете получить бесплатную консультацию специалистов нашей компании по вопросам, связанным с оценкой вариантов создания на Вашем объекте, автономного источника энергии. Подготовить предпроектные решения для Вашего объекта. Подобрать оптимальное энергетическое оборудование. Получить информацию о актуальных ценах на оборудование для собственной генерации. Договорится о поставке материалов и запасных частей для сервисного обслуживания энергетического оборудования.<br><br>Также на выставке Вы сможете задать свои вопросы непосредственно техническим руководителям концерна MAN, отвечающим за производство промышленных газовых двигателей.<br><br><b>Ждем Вас на выставке!</b>'
}, {
  label: 'Газовые машины – сервисный партнер «Карл Дунгс»',
  id: 21,
  img: 'news/dungs.jpg',
  category: 'Наука и техника',
  created_at: '07.10.2019',
  updated_at: '07.10.2019:10.45',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» получила статус официального сервисного партнера известной немецкой компании – производителя газорегулирующего оборудования «Карл Дунгс» (Урбах, Германия).',
  description: 'Компания «Газовые машины» получила статус официального сервисного партнера известной немецкой компании – производителя газорегулирующего оборудования «Карл Дунгс» (Урбах, Германия).<br><br>Компания «Карл Дунгс» основана в 1945 г., численность сотрудников 670 человек, годовой оборот компании 129 млн. Евро.<br><br>«Карл Дунгс» является заводом-изготовителем атмосферных и вентиляторных теплогенераторов, конденсационных установок, паяльных горелок, газорегулирующего оборудования газовых двигателей и промышленных тепловых топочных установок.<br><br>«Газовые машины» и «Карл Дунгс» сотрудничают с 2012 г. В текущем году статус сотрудничества обновлен. Это дает нашим клиентам ряд дополнительных преимуществ, таких как:<br><br><ul><li>расширение линейки оборудования «Карл Дунгс» на нашем складе;</li><li>оперативный доступ к складу сервисных запасных частей;</li><li>оперативное сервисное обслуживание оборудования «Карл Дунгс»;</li><li>услуги по модернизации газорегулирующего оборудования на действующих объектах;</li></ul>   <br><br>По вопросам связанным, с оборудованием «Карл Дунгс» Вы можете обращаться в наш отдел продаж по тел.: <b>+7 (4852) 26–79–60.</b>'
}, {
  label: 'Электроэнергия для сельского хозяйства',
  id: 22,
  img: 'news/village.png',
  category: 'Наука и техника',
  created_at: '05.03.2020',
  updated_at: '16.03.2020:10.45',
  author: 'А.В. Хухарев',
  preview_text: 'Модульная газовая мини-ТЭЦ мощностью 260 кВт обеспечивает электрической энергией и теплом животноводческий комплекс на 2 000 голов крупного рогатого скота.',
  description: 'Компания «Газовые машины», при партнерстве с Региональной лизинговой компанией Ярославской области запустила газовую мини-ТЭЦ на животноводческом комплексе сельхозпредприятия «Красный Маяк» (д. Марково, Ярославской области). Сотрудничество с региональной лизинговой компанией Ярославской области позволяет нашим клиентам приобретать оборудование в лизинг по рекордно низким ставкам от 6,5 % годовых.<br><br>Модульная газовая мини-ТЭЦ мощностью 260 кВт обеспечивает электрической энергией и теплом животноводческий комплекс на 2 000 голов крупного рогатого скота.<br><br>Линейка премиальных Мини-ТЭЦ базе индустриальных газовых двигателей MAN разработана компанией «Газовые машины» в 2012 г. Все мини-ТЭЦ выпускаются в унифицированных заводских модулях полной готовности, что обеспечивает быстрый запуск в эксплуатацию в течении 2-3 дней с даты поставки оборудования на объект<br><br>В настоящее время компания «Газовые машины» предлагает услуги по внедрению автономных энергокомплексов на природном газе мощностью до 24 МВт на условиях «под ключ». На нашем производстве в г. Ярославле Вы можете ознакомиться с образцами продукции в удобное для Вас время. При посещении вы также можете получить квалифицированные консультации специалистов по проектированию и эксплуатации газовых мини-ТЭЦ. Ждем Вас.'
}].map(link => {
  link.key = `nav-link-${link.id}-${link.id}`;
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (newsList);

/***/ }),

/***/ "./components/tables/serviceList.js":
/*!******************************************!*\
  !*** ./components/tables/serviceList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const serviceList = [{
  label: 'Поставка вспомогательного оборудования',
  title: 'Оборудование для газовых электростанций',
  imgDetail: '/images/servises-detail/oborud.jpg',
  text: 'Оборудование для газопоршневых и дизельных установок от лучших европейских производителей.',
  img: '/images/service-image-1.jpg',
  href: '/postavka-vspomogatelnogo-oborudovaniya',
  as: 'postavka-vspomogatelnogo-oborudovaniya'
}, {
  label: 'Проектирование автономных энергоцентров',
  title: 'Работы по проектированию автономных энергоцентров',
  imgDetail: '/images/servises-detail/proekt.jpg',
  text: 'Полный спектр работ по подготовке разрешительной и эксплуатационной документации.',
  img: '/images/service-image-2.jpg',
  href: '/proektirovanie-avtonomnih-energocentrov',
  as: 'proektirovanie-avtonomnih-energocentrov'
}, {
  label: 'Изготовление и поставка мини-ТЭС',
  title: 'Изготовление газовых электростанций под технические условия заказчика',
  imgDetail: '/images/servises-detail/izgotov.jpg',
  text: 'Изготовление и поставка газопоршневых электростанций единичной мощностью от 250 до 2000 кВт.',
  img: '/images/service-image-3.jpg',
  href: '/izgotovlenie-i-postavka-mini-tec',
  as: 'izgotovlenie-i-postavka-mini-tec'
}, {
  label: 'Расчёт экономической эффективности',
  title: 'Расчёт экономической эффективности при переходе на оборудование собственной генерации.',
  imgDetail: '/images/servises-detail/raschet.jpg',
  text: 'А так же срока окупаемости мини-электростанций для каждого конкретного объекта.',
  img: '/images/service-image-4.jpg',
  href: '/racshet-ekonomicheskoi-effektivnosti',
  as: 'racshet-ekonomicheskoi-effektivnosti'
}, {
  label: 'Подбор оптимальных агрегатов',
  title: 'Помощ при подборе оптимальных комплектующих при проектировании или замене износившихся агрегатов.',
  imgDetail: '/images/servises-detail/help.jpg',
  text: 'для мини-электростанций из имеющегося у нас модельного ряда для их наиболее эффективного использования.',
  img: '/images/service-image-5.jpg',
  href: '/podbor-optimalnih-agregatov',
  as: 'podbor-optimalnih-agregatov'
}, {
  label: 'Поставка запасных частей',
  title: 'Поставки оборудования для ремонта и обслуживания газовых электростанций',
  imgDetail: '/images/servises-detail/zapchasti.jpg',
  text: 'Весь необходимый спектр качественных запасных частей и расходных материалов.',
  img: '/images/service-image-6.jpg',
  href: '/postavka-zapasnih-chastei',
  as: 'postavka-zapasnih-chastei',
  doc: 'motortech-catalog.pdf',
  docname: 'Каталог продукции Motortech (11Мб)'
}, {
  label: 'Работы пуско-наладочные',
  title: 'Настройка и ввод в эксплуатацию газопоршневых электростанций',
  imgDetail: '/images/servises-detail/nastroika.jpg',
  text: 'Работы по пуско-наладке газопоршневых и дизельных установок.',
  img: '/images/service-image-7.jpg',
  href: '/pusko-naladochnie-raboti',
  as: 'pusko-naladochnie-raboti'
}, {
  label: 'Шеф-монтаж',
  h1: 'Техническое сопровождение монтажа газопоршневых и дизельных установок',
  imgDetail: '/images/servises-detail/montaj.jpg',
  text: 'Проверка качества монтажа и сборки энергоустановки',
  img: '/images/service-image-8.jpg',
  href: '/chef-montazh',
  as: 'chef-montazh'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (serviceList);

/***/ }),

/***/ "./components/textBlock.js":
/*!*********************************!*\
  !*** ./components/textBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBlock; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class TextBlock extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-3881076949"
    }, __jsx("div", {
      className: "jsx-3881076949" + " " + "container-fluid textBlock"
    }, __jsx("div", {
      className: "jsx-3881076949" + " " + "container"
    }, __jsx("div", {
      className: "jsx-3881076949" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3881076949" + " " + "col-12 header-min-colored mb-3"
    }, "\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B - \u043C\u0438\u0441\u0441\u0438\u044F"), __jsx("div", {
      className: "jsx-3881076949" + " " + "col-12 col-md-9 col-lg-8"
    }, __jsx("p", {
      className: "jsx-3881076949" + " " + "text-mission"
    }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0431\u0438\u0437\u043D\u0435\u0441\u0443, \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0441\u0435\u043B\u044C\u0441\u043A\u043E\u043C\u0443 \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0434\u0435\u0448\u0451\u0432\u043E\u0439 \u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0445 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u043E\u0432 \u043D\u0430 \u0431\u0430\u0437\u0435 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0445."), __jsx("p", {
      className: "jsx-3881076949" + " " + "text-mission"
    }, "\u041C\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0435\u043C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435 \u043B\u044E\u0431\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0432 \u0447\u0435\u0440\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0433\u0430\u0437\u043E\u0432\u043E\u0439 \u0432\u0435\u0442\u043A\u0438 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C, \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438."), __jsx("p", {
      className: "jsx-3881076949" + " " + "text-mission"
    }, "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0438\u043C\u043E\u0439 \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043E\u0442\u0430\u043F\u043B\u0438\u0432\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F, \u0430 \u043B\u0435\u0442\u043E\u043C \u043C\u043E\u0433\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u0438 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043E\u0437\u0434\u0443\u0445. \u041F\u0440\u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0435, \u043D\u0430\u0448\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043E\u043A\u0443\u043F\u0430\u044E\u0442 \u0441\u0435\u0431\u044F \u0437\u0430 2 \u0433\u043E\u0434\u0430, \u0430 \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B \u0440\u0443\u0431\u043B\u0435\u0439 \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u043E \u0435\u0449\u0435 \u043C\u043D\u043E\u0433\u043E \u043B\u0435\u0442.")), __jsx("div", {
      className: "jsx-3881076949" + " " + "col-12 d-none d-md-block col-md-3 offset-lg-1"
    }, __jsx("div", {
      className: "jsx-3881076949" + " " + "text-img-container"
    }, __jsx("img", {
      src: "/images/text-img.png",
      alt: "\u0414\u0435\u0448\u0435\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",
      title: "\u0414\u0435\u0448\u0435\u0432\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F",
      className: "jsx-3881076949" + " " + "text-img"
    })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3881076949"
    }, [".textBlock.jsx-3881076949{padding-top:60px;padding-bottom:30px;}", ".textBlock.jsx-3881076949 .text-mission.jsx-3881076949{font-size:15px;font-weight:300;line-height:19px;padding-bottom:15px;}", "@media (min-width:768px){.textBlock.jsx-3881076949 .text-img-container.jsx-3881076949{width:100%;height:100%;background-color:#fff;border:1px solid #dcdcdc;border-radius:var(--border-radius);padding:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.textBlock.jsx-3881076949 .text-img-container.jsx-3881076949 .text-img.jsx-3881076949{width:100%;}}", "@media (min-width:992px){.textBlock.jsx-3881076949{padding-top:75px;}.textBlock.jsx-3881076949 .text-mission.jsx-3881076949{font-size:16px;font-weight:300;line-height:20px;padding-bottom:15px;}}", "@media (min-width:1200px){.textBlock.jsx-3881076949{padding-top:75px;padding-bottom:30px;}.textBlock.jsx-3881076949 .text-mission.jsx-3881076949{font-size:18px;font-weight:300;line-height:25px;padding-bottom:15px;}.text-img-container.jsx-3881076949{width:100%;height:auto;background-color:#fff;border:1px solid #dcdcdc;padding:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-img-container.jsx-3881076949 .text-img.jsx-3881076949{width:100%;}}"]));
  }

}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_mainAdv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mainAdv */ "./components/mainAdv.js");
/* harmony import */ var _components_portfolioLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/portfolioLinks */ "./components/portfolioLinks.js");
/* harmony import */ var _components_energyDecisions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/energyDecisions */ "./components/energyDecisions.js");
/* harmony import */ var _components_calcAdv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/calcAdv */ "./components/calcAdv.js");
/* harmony import */ var _components_generalServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/generalServices */ "./components/generalServices.js");
/* harmony import */ var _components_productsAdv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/productsAdv */ "./components/productsAdv.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_textBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/textBlock */ "./components/textBlock.js");
/* harmony import */ var _components_newsAdv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/newsAdv */ "./components/newsAdv.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://gmenergo.ru",
    ogImage: "/images/favicon.ico"
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_components_mainAdv__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_productsAdv__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_portfolioLinks__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_textBlock__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_generalServices__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_newsAdv__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_energyDecisions__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_calcAdv__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\OSPanel\domains\gmnext9\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-yandex-metrika":
/*!***************************************!*\
  !*** external "react-yandex-metrika" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-yandex-metrika");

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
//# sourceMappingURL=index.js.map