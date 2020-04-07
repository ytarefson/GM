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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

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
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("footer", {
  className: "jsx-2510472162" + " " + "footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "gaz-mash",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "dots-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "white-stripe",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "row m-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "footer-logo-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "/images/logo-big.png",
  alt: "\u041E\u041E\u041E \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  title: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2510472162" + " " + "footer-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 15
  }
})))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2510472162" + " " + "link-map-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: as,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 19
  }
}, label)))), __jsx("a", {
  href: "/calculator",
  className: "jsx-2510472162" + " " + "footer-button calc-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), __jsx("a", {
  href: "/askForm",
  className: "jsx-2510472162" + " " + "footer-button askForm-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }
}, "\u0423\u0441\u043B\u0443\u0433\u0438:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 11
  }
}, _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => __jsx("li", {
  key: item.key,
  className: "jsx-2510472162" + " " + "link-map-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/uslugi/${item.href}`,
  as: `/uslugi/${item.as}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 19
  }
}, item.label)))))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "contacts-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "adres-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://yandex.ru/maps/-/CBFyIKsQPB",
  target: "_blank",
  className: "jsx-2510472162" + " " + "adres-map-link pb-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 15
  }
}, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", __jsx("br", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "adres-phones",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "tel:+74852260368",
  className: "jsx-2510472162" + " " + "phone-link phone-link-big",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 17
  }
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 22
  }
}, "(4852)"), " 26-03-68"), __jsx("a", {
  href: "tel:+74852267960",
  className: "jsx-2510472162" + " " + "phone-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 22
  }
}, "(4852)"), " 26-79-60"))), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "mailto:market@gmenergo.ru",
  className: "jsx-2510472162" + " " + "adres-email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 15
  }
}, "market@gmenergo.ru")), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 13
  }
})), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 11
  }
}, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 11
  }
}, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "intersell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }
}, __jsx("a", {
  href: "http://intersell.su/",
  className: "jsx-2510472162" + " " + "interlink",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 11
  }
}, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 11
  }
}, "intersell.su")), __jsx("div", {
  className: "jsx-2510472162" + " " + "logo-cont",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 11
  }
}, "IS")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "rights-reserved",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2510472162",
  __self: undefined
}, ".text-grey.jsx-2510472162{color:#e5e5e5;}.footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}.footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}.footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}.footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}.footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdnQixBQUd1QixBQUlBLEFBYUYsQUFJSSxBQVFFLEFBY0wsQUFPQyxBQU1nQixBQVdoQixBQUlDLEFBTUwsQUFHQyxBQVNBLEFBSW1CLEFBVWhCLEFBTWdCLEFBVWQsQUFNTixBQUlJLEFBUUQsQUFHRixBQVNPLEFBZVAsQUFLRCxBQUdlLEFBY2YsQUFXSSxBQVlKLEFBU0ksQUFRQSxBQVdJLEFBR0QsQUFHYyxBQUdiLEFBR0EsQUFNQSxBQUdGLEFBU0EsQUFlRyxBQUdILEFBWUksQUFVWCxBQVNPLEFBTUosQUFJTSxBQUdELEFBR2MsQUFHWixBQUtELEFBTUEsQUFHRixPQXpDTixHQXRPWixBQWdEb0IsQUE0Q3BCLEFBaUJ5QixBQXVCQSxBQWlIUCxDQWxQRixBQVNBLEFBbURFLEFBd0JMLENBbkorQixDQXdINUMsQ0F6SUEsQUFJYyxBQThDRCxBQWlCQyxBQW9DRCxBQTBCRyxBQW9FSSxBQXFCSixBQVFBLEFBZ0NFLEFBU0ksQUFrQkEsQUErQlAsQUFpQ0csQ0F0UkgsQUF5S2IsQUFvRVUsQUFxQlYsQ0FwVGdCLEFBa0dELEFBc0hmLEFBU0EsQUFHaUIsQUFNakIsQUF1RUEsQUFjaUIsQUFNakIsQ0FoRUEsQUFxRGtCLENBbFRKLEFBd0hILEFBb0pHLElBcElKLENBZ0pHLENBY2IsQ0FoUlksQUE4QkcsQUFTakIsQUFjb0IsQUFvRUosQUFpSkEsQ0F4VEYsQUErRGQsQ0F5RW9CLENBZnBCLEFBSWEsQUF5RkssQUFRQSxBQWdDSCxBQTJGQSxDQXhNSyxBQTZGbEIsQUF5RkEsQ0FwUmMsQUFxQ0EsQUFnQkEsQUE2TEMsQ0FsTEYsQUFrSUUsQUEyRkEsQ0EvVEUsQUFRUCxBQXdJWixBQWdDYSxBQXNFSSxBQWtCRixDQWtERyxDQTFCRCxHQWxRSSxBQTBRRSxDQXhURSxDQTZIUixBQTBDRyxBQXVGQSxBQTJGQSxDQTdRRixFQW5EVCxDQTBFUSxBQThGUCxBQXdGbUIsQUFZakIsQ0FsUEMsQUFxQ0csQUFnQkgsQUE4R00sQUFRUSxDQXRGYixBQStISCxFQXRIQSxBQWdLZ0IsQUEwQnpCLEVBMVRvQixBQVNaLEVBZFYsQUFzTFcsQUFvR0csQ0E5QlMsRUExSUwsQ0ExRUksQUFxREEsQUFzSkgsQUEyRkMsQ0EzU3BCLEFBOEJtQixBQXFFVCxBQXVLUixDQTlSUSxBQThHSSxBQStCRixDQS9FTSxBQVdsQixFQStGYSxDQWxNTyxBQXNOSCxBQWdGQSxHQXBKRixDQXZIWSxFQTZJZixDQWlIRSxDQXhRaUQsQUF3SHBELEFBcUZNLENBaEdFLEFBaUlDLENBNUROLEFBcUVRLEFBa0ZILEVBN1FELENBekNPLEFBcURSLEFBOE1ILENBblBPLEFBcURBLENBOEdFLENBOUNWLENBL0JDLEFBZ0pBLENBelJBLElBbU1PLENBMkJGLEFBeUU4QyxFQXhDNUMsQUEyRkEsQ0E1TnJCLENBMkNhLEFBaUhBLENBMU5XLEFBYUQsQUFZRixBQStLRixDQTlIbkIsQ0F6SXFCLEFBa0xXLEFBdUJoQixNQWlGSixFQWpIRSxFQXFESSxDQTNCZ0IsQ0E0RGhDLEFBMkZBLENBbEZjLENBeEpRLEFBMEZKLEFBd0NNLEFBeUNmLEFBa0RlLEtBNVVQLENBeUtDLENBa0hKLElBbkJLLENBMUNyQixJQTVDb0IsRUF3QlAsQ0FrRlgsR0EzUmtCLENBY0EsQUErUjJDLENBcEkvQyxJQStGQSxDQTlERixJQTNEVyxDQW1DTixJQVJDLEVBektPLEFBd1F6QixBQTRCQSxDQXRSRixBQTRMbUIsTUFuTE4sSUEySk8sS0FSVyxFQWxKaEIsQUFtTGYsSUE5SXFCLENBYkosQUFxREEsRUFwR0MsR0ErQkcsQ0FtSkwsRUExSkQsQ0EwTGYsS0E3SG1CLENBckNBLEFBcURBLEFBUW5CLEFBa0lFLEFBMkZBLEdBelVGLEFBNERBLENBK09FLENBekhlLENBMUo2QyxDQWdEOUQsU0FhZ0IsQ0FyQ0ssQUFxRE0sR0E4RVEsSUFZVixNQXpHekIsTUFyQzJCLE1BcUQzQixFQW1FQSxHQXVCQSxPQW5EeUIsT0EzRnpCLEtBekIwQixpQkFNYixPQUxiLElBTWlCLEFBb0pqQixlQW5KQSxzREE2R2MsWUFDQSxZQUNBLFlBQ1csdUJBQ0Msb0ZBQzFCIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgc2VydmljZUxpc3QgZnJvbSAnLi90YWJsZXMvc2VydmljZUxpc3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhei1tYXNoXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90cy1yaWdodFwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLXN0cmlwZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLWJpZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ29cIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwi0J7QntCeINCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCb0L7Qs9C+0YLQuNC/IC0g0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTMgbGluay1tYXBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstbWFwLWhlYWRlclwiPtCa0LDRgNGC0LAg0YHQsNC50YLQsDo8L3NwYW4+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGluay1tYXAtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rLW1hcC1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntsYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gY2FsYy1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0JrQsNC70YzQutGD0LvRj9GC0L7RgFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXNrRm9ybVwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gYXNrRm9ybS1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRglxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy01IGxpbmstbWFwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLW1hcC1oZWFkZXJcIj7Qo9GB0LvRg9Cz0Lg6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmstbWFwLWxpc3RcIj5cclxuICAgICAgICAgICAge3NlcnZpY2VMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluay1tYXAtaXRlbVwiIGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2x1Z2kvJHtpdGVtLmhyZWZ9YH0gYXM9e2AvdXNsdWdpLyR7aXRlbS5hc31gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntpdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RzLWhlYWRlclwiPtCa0L7QvdGC0LDQutGC0Ys6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFkcmVzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly95YW5kZXgucnUvbWFwcy8tL0NCRnlJS3NRUEJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRyZXMtbWFwLWxpbmsgcGItM1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDE1MDA2Miwg0KDQvtGB0YHQuNGPLCDQsy4g0K/RgNC+0YHQu9Cw0LLQu9GMLFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICDQv9GALdGCLiZuYnNwO9CQ0LLQuNCw0YLQvtGA0L7Qsi0xNTVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcmVzLXBob25lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorNzQ4NTIyNjAzNjhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG9uZS1saW5rIHBob25lLWxpbmstYmlnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgKzcgPGIgY2xhc3NOYW1lPVwidGV4dC1ncmV5XCI+KDQ4NTIpPC9iPiAyNi0wMy02OFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNzQ4NTIyNjc5NjBcIiBjbGFzc05hbWU9XCJwaG9uZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICs3IDxiIGNsYXNzTmFtZT1cInRleHQtZ3JleVwiPig0ODUyKTwvYj4gMjYtNzktNjBcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWFya2V0QGdtZW5lcmdvLnJ1XCIgY2xhc3NOYW1lPVwiYWRyZXMtZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIG1hcmtldEBnbWVuZXJnby5ydVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIC8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay0xXCI+0LPRgNCw0YTQuNC6INGA0LDQsdC+0YLRizo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLTFcIj7Qv9C9LdC/0YI6IDk6MDAtMTg6MDA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyc2VsbFwiPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cDovL2ludGVyc2VsbC5zdS9cIiBjbGFzc05hbWU9XCJpbnRlcmxpbmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWRlc2NyaXB0aW9uXCI+0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1uYW1lXCI+aW50ZXJzZWxsLnN1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+SVM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodHMtcmVzZXJ2ZWRcIj5cclxuICAgICAgMjAwNiAtIDIwMTkg0J7QntCeIFwi0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCIgJmNvcHk7INCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90YsuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXItYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXItYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjMzUzNTM1IDAlLCAjMmYyZjJmIDEwMCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvYmctZ2F6LW1hc2gucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5mb290ZXItbG9nby1jb250YWluZXIgLmZvb3Rlci1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5jb250YWN0cy1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbC1ncmV5KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAubGluay0xIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLXBob25lcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1lbWFpbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWwtZ3JleSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IC5saW5rLW1hcC1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCAubGluay1tYXAtaXRlbSAubGluay1tYXAtbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluazpob3ZlciAubG9nby1jb250IHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rOmhvdmVyIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuaW50ZXJzZWxsIC5pbnRlcmxpbmsgLmxvZ28tY29udCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NTlkOTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4gMC4ycztcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAubG9nby1jb250OjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICMyNzU5ZDk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLW1hcC1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC53aGl0ZS1zdHJpcGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgIHRvcDogNThweDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuZG90cy1yaWdodCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xyXG4gICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICByaWdodDogLTUlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvZG90cy1iaWctd2hpdGUucG5nJykgMCUgMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLWdhei1tYXNoLnBuZycpIDUlIDEwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciAuZm9vdGVyLWxvZ28ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmNvbnRhY3RzLWhlYWRlciB7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3Qge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1waG9uZXMgLnBob25lLWxpbmsge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1oZWFkZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescription = 'Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.';
const defaultOGURL = 'https://gmenergo.ru';
const defaultOGImage = '/images/favicon.ico';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, props.title || 'Производство газопоршневых электростанций - Газовые Машины'), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  href: "/images/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/images/apple-touch-icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/images/favicon-32x32.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/images/favicon-16x16.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "manifest",
  href: "/images/site.webmanifest",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "mask-icon",
  href: "/images/safari-pinned-tab.svg",
  color: "#5bbad5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:title",
  content: props.title || '',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }
}));

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

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
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = () => __jsx("nav", {
  className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "navbar-brand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("img", {
  src: "/images/logo-grey.png",
  title: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
  alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2809465157",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}))), __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-2809465157" + " " + "navbar-toggler",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "navbar-toggler-icon-mine",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
})), __jsx("div", {
  id: "navbarNav",
  className: "jsx-2809465157" + " " + "collapse navbar-collapse",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx("ul", {
  className: "jsx-2809465157" + " " + "navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2809465157" + " " + "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  activeClassName: "active",
  href: href,
  as: as,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 15
  }
}, label)))), __jsx("li", {
  className: "jsx-2809465157" + " " + "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-2809465157" + " " + "contacts-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "lorem",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), __jsx("span", {
  className: "jsx-2809465157" + " " + "tel",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, "+7 (4852) 26\xB703\xB768, 26\xB779\xB760"), __jsx("span", {
  className: "jsx-2809465157" + " " + "pochta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}, "market@gmenergo.ru"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2809465157",
  __self: undefined
}, "body{margin:0;}.navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUdrQixBQUlpQixBQVlaLEFBSUksQUFHTCxBQU9LLEFBWUYsQUFHQSxBQUdFLEFBUUosQUFNQSxBQUtHLEFBT0YsQUFNUyxBQUdOLEFBaUJQLEFBR3dCLEFBSXZCLEFBSUssQUFRTixBQVNGLEFBS1UsQUFJRixBQUdBLEFBR1UsQUFNUixBQVFILEFBS0csQUFPSixBQU9lLEFBSWQsQUFJTCxBQUdNLEFBS0UsQUFJSCxBQUdDLEFBSUcsQUFNRCxBQVFILEFBUUcsQUFPRixTQXZPbkIsQUFnSUEsQUF3REUsRUFwRkYsQUFtQm9CLENBWk4sRUEzRkEsQUF3Q0csQUFNQyxBQStGRSxBQXVCSixBQWdCZCxBQXFCaUIsQ0EvSUQsQUErRGhCLEFBR0EsQUErQ0EsQUFZa0IsQUFpQ0UsQ0E5THRCLEFBR0EsQ0FzQmlCLEFBNENKLEFBc0JXLEFBZ0JOLEFBYUMsQUE4QmpCLEFBaUJnQixBQWdCQyxDQTdNbkIsQUFVb0IsQUFrQkEsQUFtQ1AsQUF3SFEsTUEzSHJCLEFBNEJBLENBbUNzQixDQTNJZCxBQWFSLEFBb0tFLEVBckVXLEFBZ0VzQixDQXZIZCxBQTJCTCxBQW9DSCxBQWtHUSxDQTNKUCxBQStGVyxDQW5GVCxBQTJFSSxBQWtEbEIsQUFVa0IsQ0E3TVgsQUErRE8sQUErRkUsQUErREEsQ0FPaEIsRUFsSTJCLEFBcUdQLENBN0tJLEFBa0JELENBcUZ2QixFQWhJUSxBQTJHTSxDQVFILEVBekRiLENBcUJXLEFBMkRVLEVBcEVELENBUE0sQUErRk4sQUF1REEsQUFRQSxDQTVOUCxBQWdKTSxBQTREQSxJQXpGQSxDQXBDTixDQTRCTyxBQTJGQyxLQXJNSCxDQTBDQyxBQStIakIsQ0FqSlMsQUFpSFUsRUF6Q3JCLEFBZ0R1QixBQWFBLEFBK0NFLEFBUUMsQUFRSCxDQXZKdkIsQUFVVyxLQW9DRixDQTFGRSxDQXFDVSxBQXdJbkIsQ0EzRkYsQ0EzQlcsRUEvRVUsQUFjRyxBQWtKRCxDQTdDYixDQXpFWSxDQStGcEIsQ0FoSDJCLEdBdURBLEVBb0M3QixVQW5IaUMsR0EwQ2Isa0JBQ3BCLFFBS2dCLEVBL0NFLE9Bb0poQixLQXBHRixJQS9DbUQsR0E4SnRCLFNBbEpKLEdBaUlQLEFBYWhCLEFBK0RBLFFBOUpGLEFBOElrQixJQVFBLEVBbkVoQixFQXZIZSxHQTREZCxHQXVIRCxJQVFBLEtBak5GLEFBdUJrQixnQkFDNEIsc0NBc0k1QyxHQXJJcUIsUUFiWCxVQUNRLGNBc0VFLElBckV0Qiw0Q0FzRUEscUJBMURBIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tZ3JleS5wbmdcIlxyXG4gICAgICAgICAgdGl0bGU9XCLQn9C10YDQtdC50YLQuCDQvdCwINCz0LvQsNCy0L3Rg9GOXCJcclxuICAgICAgICAgIGFsdD1cItCb0L7Qs9C+0YLQuNC/INCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcclxuICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXHJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb24tbWluZVwiIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtocmVmfSBhcz17YXN9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvcmVtXCI+0K3QvdC10YDQs9C10YLQuNGH0LXRgdC60L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbFwiPlxyXG4gICAgICAgICAgICAgICs3ICg0ODUyKSAyNiZtaWRkb3Q7MDMmbWlkZG90OzY4LCAyNiZtaWRkb3Q7NzkmbWlkZG90OzYwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9jaHRhXCI+bWFya2V0QGdtZW5lcmdvLnJ1PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzNXB4IDMwcHggLTMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICfQvdC+0LLQuNC90LrQsCc7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjJweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLmxvcmVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC50ZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLnBvY2h0YSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICM1MjUyNTI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDApIDAlLFxyXG4gICAgICAgICAgcmdiKDIxMSwgMjAsIDIwKSA1MCUsXHJcbiAgICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMCkgMTAwJVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICB3aWR0aDogMjFweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YmVmb3JlLFxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLmxvcmVtIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLnRlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIucG9jaHRhIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI25hdmJhck5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAubG9yZW0ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2EzYTNhMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAudGVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC5wb2NodGEge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtY2FsYy1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\nav.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/projects/projectsListPlate.js":
/*!**************************************************!*\
  !*** ./components/projects/projectsListPlate.js ***!
  \**************************************************/
/*! exports provided: ProjectsListPlate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListPlate", function() { return ProjectsListPlate; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables_projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables/projectList */ "./components/tables/projectList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class ProjectsListPlate extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const data = _tables_projectList__WEBPACK_IMPORTED_MODULE_2__["default"];
    const shortData = [];
    return __jsx("div", {
      className: "jsx-4121176423" + " " + "project-cards-small-plate"
    }, data.map(({
      key,
      id,
      city,
      energy,
      tenergy,
      client,
      year,
      label,
      as,
      img
    }) => __jsx("div", {
      key: key,
      className: "jsx-4121176423" + " " + "project-card-small-container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/proekti?id=${id}`,
      as: `/proekti/${id}`
    }, __jsx("a", {
      className: "jsx-4121176423" + " " + "project-card-small"
    }, __jsx("div", {
      className: "jsx-4121176423" + " " + "project-card-header-container"
    }, __jsx("div", {
      className: "jsx-4121176423" + " " + "flex-top"
    }, __jsx("span", {
      className: "jsx-4121176423" + " " + "project-card-header"
    }, label), __jsx("span", {
      className: "jsx-4121176423" + " " + "project-card-city"
    }, city))), __jsx("div", {
      className: "jsx-4121176423" + " " + "project-card-button-container"
    }, __jsx("div", {
      className: "jsx-4121176423" + " " + "button-container"
    }, __jsx("div", {
      className: "jsx-4121176423" + " " + "button-min"
    }))), __jsx("div", {
      className: "jsx-4121176423" + " " + "project-card-energy"
    }, energy), __jsx("div", {
      className: "jsx-4121176423" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/projects/${img}`,
      alt: `${label} - ${client}`,
      title: `${label} - ${client}`,
      className: "jsx-4121176423" + " " + "project-card-img"
    })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4121176423"
    }, ".projects-list-plate{position:relative;}.projects-list-plate .project-cards-small-plate{display:grid;grid-gap:15px;grid-template-columns:1fr;grid-template-rows:165px 165px 165px 165px 165px 165px 165px 165px 165px;}.projects-list-plate .project-cards-small-plate .project-card-small-container:first-child{grid-column:1 / 2;grid-row:1 / 3;}.projects-list-plate .project-cards-small-plate .project-card-small-container{display:block;margin:0 auto;width:100%;height:100%;border-radius:10px;box-shadow:var(--box-shadow);-webkit-transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;overflow:hidden;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small{display:block;width:100%;height:100%;position:relative;padding:0;margin:0;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small::after{display:block;position:absolute;content:'';bottom:0;left:0;right:0;height:40%;background:linear-gradient( to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) );}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container{z-index:1;position:absolute;display:block;bottom:10%;left:10%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#fff;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-header{font-size:18px;line-height:18px;font-weight:700;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-city{color:var(--accent-red);font-size:15px;line-height:22px;font-weight:500;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-button-container{display:block;position:absolute;z-index:1;bottom:0;right:0;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-energy{display:none;position:absolute;z-index:2;width:auto;padding:10px 25px 13px;line-height:14px;font-size:14px;font-weight:700;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:auto;color:var(--accent-red);background-color:white;border-bottom-right-radius:35px;border-bottom-left-radius:35px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .img-container{position:absolute;z-index:0;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .img-container .project-card-img{z-index:-1;width:100%;height:auto;}.text-area{display:block;margin-top:30px;}.referenc-list-container{text-align:center;width:100%;margin-bottom:45px;}.referenc-list-container .referenc-list-unit{box-shadow:var(--box-shadow);display:block;width:100%;margin-top:30px;padding:10px;background:var(--accent-red);color:white;font-size:16px;font-weight:700;cursor:pointer;-webkit-transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;}.referenc-list-container .referenc-list-unit:hover{box-shadow:var(--box-shadow);}.referenc-list-container .referenc-list-unit .referenc-list{color:white;}@media (min-width:576px){.projects-list-plate{position:relative;}.projects-list-plate .project-cards-small-plate{display:grid;grid-gap:15px;grid-template-columns:1fr 1fr;grid-template-rows:140px 140px 140px 140px 140px;}.projects-list-plate .project-cards-small-plate .project-card-small-container:first-child{grid-column:1 / 2;grid-row:1 / 3;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small::after{display:block;position:absolute;content:'';bottom:0;left:0;right:0;height:40%;background:linear-gradient( to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) );}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container{bottom:10%;left:10%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-header{font-size:18px;line-height:18px;font-weight:700;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-city{font-size:15px;line-height:22px;font-weight:700;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-shadow:0 0 7px rgba(0,0,0,0.5);}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-button-container{display:block;position:absolute;z-index:1;bottom:0;right:0;}}@media (min-width:768px){.projects-list-plate{position:relative;}.projects-list-plate .project-cards-small-plate{display:grid;grid-gap:30px;grid-template-columns:1fr 1fr;grid-template-rows:170px 170px 170px 170px 170px;}.projects-list-plate .project-cards-small-plate .project-card-small-container:first-child{grid-column:1 / 2;grid-row:1 / 3;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container{bottom:10%;left:10%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-header{font-size:20px;line-height:18px;font-weight:700;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;padding-bottom:5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-city{font-size:15px;line-height:22px;font-weight:700;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;text-shadow:0 0 7px rgba(0,0,0,0.5);}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-button-container{display:block;position:absolute;z-index:1;bottom:0;right:0;}}@media (min-width:992px){.projects-list-plate{position:relative;}.projects-list-plate .project-cards-small-plate{display:grid;grid-gap:30px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:170px 170px 170px;}.projects-list-plate .project-cards-small-plate .project-card-small-container:first-child{grid-column:1 / 1;grid-row:1 / 3;}.projects-list-plate .project-cards-small-plate .project-card-small-container:hover{box-shadow:0px 15px 30px rgba(0,0,0,0.3);}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container{bottom:10%;left:10%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-header{font-size:20px;line-height:18px;font-weight:700;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;padding-bottom:5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-city{font-size:14px;text-transform:uppercase;line-height:22px;font-weight:700;text-shadow:0 0 7px rgba(0,0,0,0.5);}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-button-container{display:block;position:absolute;z-index:1;bottom:0;right:0;}.referenc-list-container .referenc-list-unit:hover{box-shadow:0px 15px 30px -15px rgba(0,0,0,0.7);}}@media (min-width:1200px){.projects-list-plate{position:relative;}.projects-list-plate .project-cards-small-plate{display:grid;grid-gap:30px;grid-template-columns:1fr 1fr 1fr;grid-template-rows:200px 200px 200px;}.projects-list-plate .project-cards-small-plate .project-card-small-container:first-child{grid-column:1 / 2;grid-row:1 / 3;}.projects-list-plate .project-cards-small-plate .project-card-small-container{display:block;margin:0 auto;width:100%;height:100%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container{z-index:1;position:absolute;display:block;bottom:10%;left:10%;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#fff;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-header{font-size:22px;line-height:22px;font-weight:900;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;padding-bottom:5px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-header-container .flex-top .project-card-city{font-size:15px;line-height:22px;font-weight:700;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-button-container{display:block;position:absolute;z-index:1;bottom:0;right:0;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .project-card-energy{display:none;position:absolute;z-index:2;width:auto;padding:10px 25px 13px;line-height:14px;font-size:14px;font-weight:700;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:auto;color:var(--accent-red);background-color:white;border-bottom-right-radius:35px;border-bottom-left-radius:35px;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .img-container{position:absolute;z-index:0;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.projects-list-plate .project-cards-small-plate .project-card-small-container .project-card-small .img-container .project-card-img{z-index:-1;width:100%;height:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9qZWN0c1xccHJvamVjdHNMaXN0UGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQyQixBQUcrQixBQUdMLEFBUUssQUFNSixBQWFBLEFBV0EsQUFrQkosQUFZRyxBQVdFLEFBWVMsQUFXVixBQVdELEFBcUJLLEFBaUJQLEFBS0csQUFJSSxBQUtXLEFBYUEsQUFHakIsQUFJUSxBQUdMLEFBUUssQUFPSixBQWtCSCxBQVVJLEFBWUEsQUFXRCxBQVVJLEFBR0wsQUFRSyxBQVFQLEFBVUksQUFhQSxBQVdELEFBVUksQUFHTCxBQVNLLEFBTTBCLEFBT2pDLEFBVUksQUFhQSxBQVdELEFBT29DLEFBTWhDLEFBR0wsQUFRSyxBQU1KLEFBVUosQUFZRyxBQVdFLEFBYUEsQUFVRCxBQVdELEFBcUJLLEFBaUJQLFVBaGRLLEFBa1hFLENBblJULEFBc0VBLEFBOERBLEFBcUVBLEFBeUtFLENBcFZmLENBckxnQixBQWlISSxBQTJFRixBQStFQSxBQStEQSxBQXdFQSxBQWlGSSxDQXJkTixBQWFILEFBV08sQUFnRUEsQUFzREYsQUErQ0ksQUFtREEsQUErREEsQUFxRUEsQUE4QkosQUF3REksQ0F6WUgsQUF3SkUsQUFZQSxBQWtEQSxBQWFBLEFBd0RBLEFBYVEsQUEwRVIsQUFhQSxHQWpkckIsQUFXaUIsQUE4SEwsQUEwQkMsQUF5QlgsQUFXaUIsQUFvRWpCLEFBV2lCLEFBb0RqQixBQVlpQixBQTREakIsQUFXaUIsQUE4RkwsRUExUlosQUE4REEsQUFxRUEsRUF6TVksQUFrWEUsRUEvYUMsQ0EvREgsRUEzQmMsQUE0TE0sQUErRUEsQUErREksQUF3RUEsQ0FwWXpCLEFBMENHLEFBOEVSLEFBMFJPLEFBVUcsQUE4RVIsQ0F4VlcsQUFJTCxBQWFoQixDQXJCQSxDQTNDWSxBQWtYRSxDQTdiRCxBQXlDSyxBQXVCTixBQXFHRyxBQTRCSyxBQVlBLEFBV04sQUF1Q00sQUFhQSxBQVdOLEFBNkNNLEFBd0JOLEFBK0RNLEFBYUEsQUFVTixDQWhkZCxBQTRMRSxBQStFQSxBQWdFQSxBQXVFQSxDQW5SUyxBQWlCWCxBQWlXYSxBQWlCWCxHQTlla0IsRUFiTixBQTRFSyxBQXNVSCxDQTFDSyxDQXJRUixBQXNPWCxBQTRJYSxDQTNhRixBQThDRixBQXdKRSxBQStEQSxBQXFFQSxBQXdDRSxBQThDRixDQWxiRixBQWlHRixBQTZCSSxBQXVDQSxBQThTRixJQWxIVCxDQXhUcUIsQUFpRnZCLEFBdUV5QixBQVlBLEFBa0RBLEFBYUEsQUF3REEsQUF1RkEsQUFhQyxFQXRVaEIsQUFrWEUsQ0EzZVMsQUF3RlgsQUF3SkUsQUErREEsQUFxRUEsQUE4QlYsQUF3RFUsQ0FsYkgsQUEyRWdCLEFBMEZkLEFBd1JnQixDQXBlZ0QsQUF5RGhFLEFBa1hFLENBdFFLLENBeklOLENBK0RNLENBaUdtQyxBQStFQSxBQTRHakMsQ0E5T0wsQUFrWEUsQ0FuZFAsQUFnRVYsQUFxR1ksQUFtRFYsQUErREEsQUFxRUEsQUFzRkEsRUFoSnVDLEFBd0VBLENBeFZ6QyxBQWtYRSxHQS9ZUyxFQVlFLEFBcUtFLEdBOUxnQixBQXNKaEIsRUExRVEsQ0E0Um9CLENBMVYzQyxBQW9Dd0IsQUFrWEUsQ0FqVVAsQUFrWEUsR0F2YmxCLEFBcUtFLEtBNUMwQixTQW5EZCxBQWtYRSxNQTNKakIsQUF3RUEsQ0FsWW1DLE9BNEtuQyxBQStFQSxDQXZKZ0IsQUFrWEUsRUE5R2xCLEdBak5ZLFdBbERILEFBa1hFLENBL1RJLEVBeEtqQixNQXNINkIsQUFtQkosQUErVk0sQUFtQkosT0FsVlQsVUExRmxCLEFBd0pFLEFBWXlDLEFBa0RwQixBQWFvQixBQXdEcEIsQUF1RkEsQ0FuWnZCLEFBcUtFLEVBakpXLEFBa1hFLENBMEJiLEVBcFNlLFFBdkdqQixBQWtYRSxLQS9JQSxBQXFFQSxBQXVGQSxFQXZSbUMsR0EvRXJDLElBM0VrQixRQW1PaEIsQUErREEsUUFqU0YsZ0NBcUdjLEFBa1hFLE1BL1ZLLEFBa1hFLE1BcFlHLEFBa1hFLFdBOVQ1QixhQW5EeUIsQUFrWEUsdUJBalhPLEFBa1hFLGdDQWpYSCxBQWtYRSxRQWxXakIsQUFrWEUsZ0JBalhwQixBQWtYRSxPQWxZRixBQWtYRSIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xccHJvamVjdHNcXHByb2plY3RzTGlzdFBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb2plY3RMaXN0IGZyb20gJy4uL3RhYmxlcy9wcm9qZWN0TGlzdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHNMaXN0UGxhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9qZWN0TGlzdDtcclxuICAgIGNvbnN0IHNob3J0RGF0YSA9IFtdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVwiPlxyXG4gICAgICAgIHtkYXRhLm1hcChcclxuICAgICAgICAgICh7XHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgIGVuZXJneSxcclxuICAgICAgICAgICAgdGVuZXJneSxcclxuICAgICAgICAgICAgY2xpZW50LFxyXG4gICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgIGltZyxcclxuICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZWt0aT9pZD0ke2lkfWB9IGFzPXtgL3Byb2VrdGkvJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWhlYWRlclwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtY2l0eVwiPntjaXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLW1pblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1lbmVyZ3lcIj57ZW5lcmd5fTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9wcm9qZWN0cy8ke2ltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtsYWJlbH0gLSAke2NsaWVudH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake2xhYmVsfSAtICR7Y2xpZW50fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGUgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTY1cHggMTY1cHggMTY1cHggMTY1cHggMTY1cHggMTY1cHggMTY1cHggMTY1cHggMTY1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIHRvIHRvcCxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlci1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtdG9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1jaXR5IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtZW5lcmd5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4IDEzcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2plY3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LWFyZWEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZWZlcmVuYy1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVmZXJlbmMtbGlzdC1jb250YWluZXIgLnJlZmVyZW5jLWxpc3QtdW5pdCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZWZlcmVuYy1saXN0LWNvbnRhaW5lciAucmVmZXJlbmMtbGlzdC11bml0OmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVmZXJlbmMtbGlzdC1jb250YWluZXIgLnJlZmVyZW5jLWxpc3QtdW5pdCAucmVmZXJlbmMtbGlzdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE0MHB4IDE0MHB4IDE0MHB4IDE0MHB4IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIHRvcCxcclxuICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC41KSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1jaXR5IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3MHB4IDE3MHB4IDE3MHB4IDE3MHB4IDE3MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBib3R0b206IDEwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1jaXR5IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA3cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAxNzBweCAxNzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDE7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlci1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtY2l0eSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZWZlcmVuYy1saXN0LWNvbnRhaW5lciAucmVmZXJlbmMtbGlzdC11bml0OmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAzMHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZSAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMjAwcHggMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1oZWFkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1jaXR5IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9qZWN0cy1saXN0LXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZHMtc21hbGwtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGxcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdHMtbGlzdC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmRzLXNtYWxsLXBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkLXNtYWxsXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1lbmVyZ3kge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4IDEzcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3RzLWxpc3QtcGxhdGVcclxuICAgICAgICAgICAgICAucHJvamVjdC1jYXJkcy1zbWFsbC1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9qZWN0LWNhcmQtc21hbGwtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1zbWFsbFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2plY3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNMaXN0UGxhdGU7XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\projects\\\\projectsListPlate.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsListPlate);

/***/ }),

/***/ "./components/tables/projectList.js":
/*!******************************************!*\
  !*** ./components/tables/projectList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const projectList = [{
  label: "«Энергоцентр ЯМЗ»",
  id: 0,
  img: "project-avtodisel.jpg",
  galery: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg"],
  as: "/yamz",
  energy: "1500 кВт",
  tenergy: "1825 кВт",
  class: "Энергоцентр",
  city: "Ярославль",
  client: "ЕвросибЭнерго",
  year: "2018",
  description: "Электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производства средних рядных двигателей ЯМЗ электрической и тепловой энергией в режиме паралелльной работы с электрическими сетями. Электрическая энергия передается на объект с напряжением 10,5 кВ. Проект реализован «под ключ». Нашими специалистами выполнены предпроектные работы, инженерные изыскания, строительно-монтажные работы, производство генерирующего оборудования, пуско-наладочные работы, сдача объекта в эксплуатацию. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Невская ратуша",
  id: 1,
  img: "project-nevskaya.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/nevskaya-ratusha",
  energy: "1200 кВт",
  tenergy: "",
  class: "Энергоцентр",
  city: "Санкт-Петербург",
  client: "Банк «ВТБ»",
  year: "2016",
  description: "Надежность электроснабжения комплекса обеспечивается четырьмя газовыми электростанциями производства компании «Газовые машины» суммарной мощностью 1 200 кВт. Электростанции, на базе газовых двигателей Doosan DDP 222 в капотированном исполнении, размещены на крыше административного корпуса и в полном объеме резервируют электроснабжение комплекса зданий на случай отказа централизованной системы электроснабжения."
}, {
  label: "Кирпичный завод",
  id: 2,
  img: "project-smolensk.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/cmolenskiy-kirpichniy-zavod",
  energy: "500 кВт",
  tenergy: "650 кВт",
  class: "Энергоцентр",
  city: "Смоленск",
  client: "Смоленский кирпичный завод",
  year: "2017",
  description: "Первый проект с газовым двигателем Liebherr G 9512 на территории РФ. Электростанция на базе двигателя Liebherr G 9512  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнен проект энергоцентра, производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Аккус Актобе",
  id: 3,
  img: "project-akkus.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/akkus-aktobe",
  energy: "840 кВт",
  tenergy: "",
  class: "Энергоцентр",
  city: "Актобэ, Казахстан",
  client: "Птицефабрика «Аккус»",
  year: "2015",
  description: "Электростанции на базе двигателей MAN E 2842  предназначены для обеспечения птицефабрики электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы."
}, {
  label: "Ледовая арена",
  id: 4,
  img: "project-arena.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/ledovaya-arena",
  energy: "240 кВт",
  tenergy: "360 кВт",
  class: "Энергоцентр",
  city: "Казань",
  client: "Ледовый дворец «Пестрецы-Арена»",
  year: "2014",
  description: "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения спортивного объекта электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Фос-Агро",
  id: 5,
  img: "project-fosagro.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/fos-agro",
  energy: "800 кВт",
  tenergy: "",
  class: "Энергоцентр",
  city: "Череповец",
  client: "Производственная компания",
  year: "2013",
  description: "Три электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производственного корпуса на территории комбината «Фос-Агро» электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство трех энергоблоков, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, // {
//   label: "Водоканал",
//   id: 2,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/vodokanal",
//   energy: "1500 кВт",
//   tenergy: "",
//   class: "Энергоцентр",
//   city: "Череповец",
//   client: "МУП «Водоканал» Череповец",
//   year: "2018",
//   description:
//     "Пять электростанций на базе двигателей ЯМЗ  предназначены для обеспечения работы объектов инфраструктуры (очистные сооружения, насосные станции) МУП «Водоканал» Череповец электрической энергией. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// },
// {
//   label: "Артак Обувь",
//   id: 4,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/artak-obuv",
//   energy: "400 кВт",
//   tenergy: "460 кВт",
//   class: "Энергоцентр",
//   city: "Кострома",
//   client: "ООО «Артак обувь»",
//   year: "2017",
//   description:
//     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// },
{
  label: "Животноводческий комплекс",
  id: 6,
  img: "project-agro.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/mersi-agro",
  energy: "2000 кВт",
  tenergy: "2600 кВт",
  class: "Энергоцентр",
  city: "Таранай, Сахалин",
  client: "Мерси-Агро",
  year: "2017",
  description: "Первый проект на территории РФ с применением газовых двигателей MAN E 3262. Электростанции на базе двигателей MAN E3262  предназначены для обеспечения комплексов репродукции и откорма  электрической и тепловой энергией в островном режиме. Резервирование электроснабжения осуществляется с применением дизельных электростанций. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "СтройГазМонтаж",
  id: 7,
  img: "project-sgm.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/stroy-gaz-montazh",
  energy: "500 кВт",
  tenergy: "",
  class: "Энергоцентр",
  city: "Новый Уренгой",
  client: "«СтройГазМонтаж»",
  year: "2017",
  description: "Электростанция на базе двигателя MAN E3262 предназначена для обеспечения вахтового жилого поселка электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
} // ,
// {
//   label: "Ростов-арена",
//   id: 10,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/rostov-arena",
//   energy: "240 кВт",
//   tenergy: "112 кВт",
//   class: "Энергоцентр",
//   city: "Ростов-на-Дону",
//   client: "«Ростов-арена»",
//   year: "2014",
//   description:
//     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения  объекта чемпионата мира по футболу 2018 электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (projectList);

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

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_projects_projectsListPlate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects/projectsListPlate */ "./components/projects/projectsListPlate.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const message = 'С 2006 года до настоящего времени, компанией выпущено 75 электростанций суммарной мощностью более 21 МВт. В производственной линейке газовые электростанции MAN, Liebherr и ЯМЗ единичной мощностью до 1 МВт и напряжением до 10,5 кВ, работающие на природном, сжиженном газе, пропан-бутановой смеси, попутном нефтяном газе.';

class Projects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-1392981438"
    }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u043C\u0430\u043B\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438 \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\"",
      description: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u043C\u0438\u044F\u043C\u0438"
    }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
      className: "jsx-1392981438" + " " + "container-fluid projects"
    }, __jsx("div", {
      className: "jsx-1392981438" + " " + "mycontainer"
    }, __jsx("div", {
      className: "jsx-1392981438" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1392981438" + " " + "col-12"
    }, __jsx("h1", {
      className: "jsx-1392981438" + " " + "header-min-colored mb-3 mt-5"
    }, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B ", __jsx("br", {
      className: "jsx-1392981438"
    }), __jsx("span", {
      className: "jsx-1392981438" + " " + "dark-color"
    }, "\u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439"))), __jsx("div", {
      className: "jsx-1392981438" + " " + "col-12 col-xl-9"
    }, __jsx("p", {
      className: "jsx-1392981438" + " " + "text mb-5"
    }, "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 12 \u043B\u0435\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u041E\u041E\u041E \u201C\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\u201D \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \"\u043F\u043E\u0434 \u043A\u043B\u044E\u0447\" \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0445 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0446\u0435\u043D\u0442\u0440\u043E\u0432 \u043D\u0430 \u0431\u0430\u0437\u0435 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0441 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u043A\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u0442\u0440\u0438\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438.")), __jsx("div", {
      className: "jsx-1392981438" + " " + "col-12 projects-list-plate"
    }, __jsx(_components_projects_projectsListPlate__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("div", {
      className: "jsx-1392981438" + " " + "col-12 col-xl-12 text-area"
    }, __jsx("p", {
      className: "jsx-1392981438" + " " + "text"
    }, "\u0421 2006 \u0433\u043E\u0434\u0430 \u0434\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0432\u044B\u043F\u0443\u0449\u0435\u043D\u043E 75 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0441\u0443\u043C\u043C\u0430\u0440\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E \u0431\u043E\u043B\u0435\u0435 21 \u041C\u0412\u0442. \u0412 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043B\u0438\u043D\u0435\u0439\u043A\u0435 \u0433\u0430\u0437\u043E\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 MAN, Liebherr \u0438 \u042F\u041C\u0417 \u0435\u0434\u0438\u043D\u0438\u0447\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E \u0434\u043E 1 \u041C\u0412\u0442 \u0438 \u043D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435\u043C \u0434\u043E 10,5 \u043A\u0412, \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0435 \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u043C, \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u043E\u043C \u0433\u0430\u0437\u0435, \u043F\u0440\u043E\u043F\u0430\u043D-\u0431\u0443\u0442\u0430\u043D\u043E\u0432\u043E\u0439 \u0441\u043C\u0435\u0441\u0438, \u043F\u043E\u043F\u0443\u0442\u043D\u043E\u043C \u043D\u0435\u0444\u0442\u044F\u043D\u043E\u043C \u0433\u0430\u0437\u0435.")), __jsx("div", {
      className: "jsx-1392981438" + " " + "col-12 referenc-list-container"
    }, __jsx("div", {
      className: "jsx-1392981438" + " " + "referenc-list-unit"
    }, __jsx("a", {
      href: "/docs/referenc-list-converted.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "jsx-1392981438" + " " + "referenc-list"
    }, "\u041E\u0431\u0449\u0438\u0439 \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0446-\u043B\u0438\u0441\u0442..."))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1392981438"
    }, ".projects.jsx-1392981438{position:relative;padding-bottom:50px;}.projects.jsx-1392981438::after{z-index:-2;position:absolute;content:'';display:block;width:100%;height:55%;left:0;top:55%;left:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background:url('/images/bg-projects.jpg') 50% 50% no-repeat;background-size:cover;box-shadow:inset 0px 25px 70px -40px rgba(0,0,0,0.4), inset 0px -25px 70px -40px rgba(0,0,0,0.4);}.projects.jsx-1392981438 .mycontainer.jsx-1392981438 .row.jsx-1392981438{padding-left:15px;padding-right:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxwYWdlc1xccHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VvQixBQUcrQixBQUlQLEFBZ0JPLFdBZkEsT0FKRSxBQW9CRCxXQWZSLFFBZ0JiLENBcEJBLEVBS2dCLGNBQ0gsV0FDQSxXQUNKLE9BQ0MsUUFDRCxPQUNvQiw2RkFDaUMsNERBQ3RDLHNCQUV5QixpR0FDakQiLCJmaWxlIjoiRzpcXE9TUGFuZWxcXGRvbWFpbnNcXGdtbmV4dDlcXHBhZ2VzXFxwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7XHJcbmltcG9ydCBQcm9qZWN0c0xpc3RQbGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzTGlzdFBsYXRlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBtZXNzYWdlID1cclxuICAn0KEgMjAwNiDQs9C+0LTQsCDQtNC+INC90LDRgdGC0L7Rj9GJ0LXQs9C+INCy0YDQtdC80LXQvdC4LCDQutC+0LzQv9Cw0L3QuNC10Lkg0LLRi9C/0YPRidC10L3QviA3NSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC5INGB0YPQvNC80LDRgNC90L7QuSDQvNC+0YnQvdC+0YHRgtGM0Y4g0LHQvtC70LXQtSAyMSDQnNCS0YIuINCSINC/0YDQvtC40LfQstC+0LTRgdGC0LLQtdC90L3QvtC5INC70LjQvdC10LnQutC1INCz0LDQt9C+0LLRi9C1INGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40LggTUFOLCBMaWViaGVyciDQuCDQr9Cc0Jcg0LXQtNC40L3QuNGH0L3QvtC5INC80L7RidC90L7RgdGC0YzRjiDQtNC+IDEg0JzQktGCINC4INC90LDQv9GA0Y/QttC10L3QuNC10Lwg0LTQviAxMCw1INC60JIsINGA0LDQsdC+0YLQsNGO0YnQuNC1INC90LAg0L/RgNC40YDQvtC00L3QvtC8LCDRgdC20LjQttC10L3QvdC+0Lwg0LPQsNC30LUsINC/0YDQvtC/0LDQvS3QsdGD0YLQsNC90L7QstC+0Lkg0YHQvNC10YHQuCwg0L/QvtC/0YPRgtC90L7QvCDQvdC10YTRgtGP0L3QvtC8INCz0LDQt9C1Lic7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZFxyXG4gICAgICAgICAgdGl0bGU9J9Ce0LHRitC10LrRgtGLINC80LDQu9C+0Lkg0Y3QvdC10YDQs9C10YLQuNC60Lgg0LLQstC10LTRkdC90L3Ri9C1INCyINGN0LrRgdC/0LvRg9Cw0YLQsNGG0LjRjiDQntCe0J4gXCLQk9Cw0LfQvtCy0YvQtSDQvNCw0YjQuNC90YtcIidcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPSfQmtCw0YLQsNC70L7QsyDQv9GA0L7QtdC60YLQvtCyINCz0LDQt9C+0L/QvtGA0YjQvdC10LLRi9GFINGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40LksINGA0LXQsNC70LjQt9C+0LLQsNC90L3Ri9GFINCe0J7QniBcItCT0LDQt9C+0LLRi9C1INC80LDRiNC40L3Ri1wiINGBINC+0L/QuNGB0LDQvdC40LXQvCDQuCDRhNC+0YLQvtCz0YDQsNC80LjRj9C80LgnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGVyLW1pbi1jb2xvcmVkIG1iLTMgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCg0LXQsNC70LjQt9C+0LLQsNC90L3Ri9C1INC/0YDQvtC10LrRgtGLIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhcmstY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINCz0LDQt9C+0L/QvtGA0YjQvdC10LLRi9GFINGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40LlcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC05XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCSINGC0LXRh9C10L3QuNC4IDEyINC70LXRgiDQvtGB0L3QvtCy0L3Ri9C8INC/0YDQvtGE0LjQu9C10Lwg0LTQtdGP0YLQtdC70YzQvdC+0YHRgtC4INCe0J7QniDigJzQk9Cw0LfQvtCy0YvQtVxyXG4gICAgICAgICAgICAgICAgICAgINC80LDRiNC40L3Ri+KAnSDRj9Cy0LvRj9C10YLRgdGPINC/0YDQvtC10LrRgtC40YDQvtCy0LDQvdC40LUsINC/0YDQvtC40LfQstC+0LTRgdGC0LLQviDQuCDQv9C+0YHRgtCw0LLQutCwXHJcbiAgICAgICAgICAgICAgICAgICAgXCLQv9C+0LQg0LrQu9GO0YdcIiDQsNCy0YLQvtC90L7QvNC90YvRhSDRjdC90LXRgNCz0LXRgtC40YfQtdGB0LrQuNGFINGG0LXQvdGC0YDQvtCyINC90LAg0LHQsNC30LVcclxuICAgICAgICAgICAgICAgICAgICDQs9Cw0LfQvtC/0L7RgNGI0L3QtdCy0YvRhSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC5INGBINGC0LXRhdC90L7Qu9C+0LPQuNGP0LzQuCDQutC+0LPQtdC90LXRgNCw0YbQuNC4INC4XHJcbiAgICAgICAgICAgICAgICAgICAg0YLRgNC40LPQtdC90LXRgNCw0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHByb2plY3RzLWxpc3QtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPFByb2plY3RzTGlzdFBsYXRlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC0xMiB0ZXh0LWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINChIDIwMDYg0LPQvtC00LAg0LTQviDQvdCw0YHRgtC+0Y/RidC10LPQviDQstGA0LXQvNC10L3QuCwg0LrQvtC80L/QsNC90LjQtdC5INCy0YvQv9GD0YnQtdC90L4gNzVcclxuICAgICAgICAgICAgICAgICAgICDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC5INGB0YPQvNC80LDRgNC90L7QuSDQvNC+0YnQvdC+0YHRgtGM0Y4g0LHQvtC70LXQtSAyMSDQnNCS0YIuINCSXHJcbiAgICAgICAgICAgICAgICAgICAg0L/RgNC+0LjQt9Cy0L7QtNGB0YLQstC10L3QvdC+0Lkg0LvQuNC90LXQudC60LUg0LPQsNC30L7QstGL0LUg0Y3Qu9C10LrRgtGA0L7RgdGC0LDQvdGG0LjQuCBNQU4sXHJcbiAgICAgICAgICAgICAgICAgICAgTGllYmhlcnIg0Lgg0K/QnNCXINC10LTQuNC90LjRh9C90L7QuSDQvNC+0YnQvdC+0YHRgtGM0Y4g0LTQviAxINCc0JLRgiDQuCDQvdCw0L/RgNGP0LbQtdC90LjQtdC8INC00L5cclxuICAgICAgICAgICAgICAgICAgICAxMCw1INC60JIsINGA0LDQsdC+0YLQsNGO0YnQuNC1INC90LAg0L/RgNC40YDQvtC00L3QvtC8LCDRgdC20LjQttC10L3QvdC+0Lwg0LPQsNC30LUsXHJcbiAgICAgICAgICAgICAgICAgICAg0L/RgNC+0L/QsNC9LdCx0YPRgtCw0L3QvtCy0L7QuSDRgdC80LXRgdC4LCDQv9C+0L/Rg9GC0L3QvtC8INC90LXRhNGC0Y/QvdC+0Lwg0LPQsNC30LUuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcmVmZXJlbmMtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZlcmVuYy1saXN0LXVuaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVmZXJlbmMtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2RvY3MvcmVmZXJlbmMtbGlzdC1jb252ZXJ0ZWQucGRmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQntCx0YnQuNC5INGA0LXRhNC10YDQtdC90YYt0LvQuNGB0YIuLi5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnByb2plY3RzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9qZWN0czo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiA1NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLXByb2plY3RzLmpwZycpIDUwJSA1MCUgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMjVweCA3MHB4IC00MHB4IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAgICAgICAgICAgICBpbnNldCAwcHggLTI1cHggNzBweCAtNDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvamVjdHMgLm15Y29udGFpbmVyIC5yb3cge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\pages\\\\projects.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\OSPanel\domains\gmnext9\pages\projects.js */"./pages/projects.js");


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
//# sourceMappingURL=projects.js.map