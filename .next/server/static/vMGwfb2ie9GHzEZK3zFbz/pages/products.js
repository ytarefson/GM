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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("auAi");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5U/F":
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__("YNhk");

// CONCATENATED MODULE: ./components/menu.js
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
/* harmony default export */ var components_menu = (menu);
// CONCATENATED MODULE: ./components/nav.js

var __jsx = external_react_default.a.createElement;




const Nav = () => __jsx("nav", {
  className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light"
}, __jsx(Link["a" /* default */], {
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
}, components_menu.map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2809465157" + " " + "nav-item"
}, __jsx(Link["a" /* default */], {
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
}, "market@gmenergo.ru"))))), __jsx(style_default.a, {
  id: "2809465157"
}, ["body{margin:0;}", ".navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}", ".navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}", "@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}", "@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}", "@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}"]));

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/tables/serviceList.js
var serviceList = __webpack_require__("vu88");

// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;





const Footer = () => footer_jsx("footer", {
  className: "jsx-2510472162" + " " + "footer"
}, footer_jsx("div", {
  className: "jsx-2510472162" + " " + "gaz-mash"
}), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "dots-right"
}), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "white-stripe"
}), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "container"
}, footer_jsx("div", {
  className: "jsx-2510472162" + " " + "row m-0"
}, footer_jsx("div", {
  className: "jsx-2510472162" + " " + "col-12"
}, footer_jsx(link_default.a, {
  href: "/"
}, footer_jsx("a", {
  className: "jsx-2510472162" + " " + "footer-logo-container"
}, footer_jsx("img", {
  src: "/images/logo-big.png",
  alt: "\u041E\u041E\u041E \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  title: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2510472162" + " " + "footer-logo"
})))), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map"
}, footer_jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), footer_jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, components_menu.map(({
  key,
  href,
  label,
  as
}) => footer_jsx("li", {
  key: key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, footer_jsx(link_default.a, {
  href: href,
  as: as
}, footer_jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, label)))), footer_jsx("a", {
  href: "/calculator",
  className: "jsx-2510472162" + " " + "footer-button calc-link"
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), footer_jsx("a", {
  href: "/askForm",
  className: "jsx-2510472162" + " " + "footer-button askForm-link"
}, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map"
}, footer_jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u0423\u0441\u043B\u0443\u0433\u0438:"), footer_jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, serviceList["a" /* default */].map(item => footer_jsx("li", {
  key: item.key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, footer_jsx(link_default.a, {
  href: `/uslugi/${item.href}`,
  as: `/uslugi/${item.as}`
}, footer_jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, item.label)))))), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4"
}, footer_jsx("span", {
  className: "jsx-2510472162" + " " + "contacts-header"
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), footer_jsx("ul", {
  className: "jsx-2510472162" + " " + "adres-list"
}, footer_jsx("li", {
  className: "jsx-2510472162"
}, footer_jsx("a", {
  href: "https://yandex.ru/maps/-/CBFyIKsQPB",
  target: "_blank",
  className: "jsx-2510472162" + " " + "adres-map-link pb-3"
}, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", footer_jsx("br", {
  className: "jsx-2510472162"
}), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), footer_jsx("li", {
  className: "jsx-2510472162"
}, footer_jsx("div", {
  className: "jsx-2510472162" + " " + "adres-phones"
}, footer_jsx("a", {
  href: "tel:+74852260368",
  className: "jsx-2510472162" + " " + "phone-link phone-link-big"
}, "+7 ", footer_jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-03-68"), footer_jsx("a", {
  href: "tel:+74852267960",
  className: "jsx-2510472162" + " " + "phone-link"
}, "+7 ", footer_jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-79-60"))), footer_jsx("li", {
  className: "jsx-2510472162"
}, footer_jsx("a", {
  href: "mailto:market@gmenergo.ru",
  className: "jsx-2510472162" + " " + "adres-email"
}, "market@gmenergo.ru")), footer_jsx("li", {
  className: "jsx-2510472162"
})), footer_jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), footer_jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "intersell"
}, footer_jsx("a", {
  href: "http://intersell.su/",
  className: "jsx-2510472162" + " " + "interlink"
}, footer_jsx("div", {
  className: "jsx-2510472162" + " " + "text-container"
}, footer_jsx("span", {
  className: "jsx-2510472162" + " " + "logo-description"
}, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), footer_jsx("span", {
  className: "jsx-2510472162" + " " + "logo-name"
}, "intersell.su")), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "logo-cont"
}, footer_jsx("span", {
  className: "jsx-2510472162" + " " + "logo"
}, "IS")))), footer_jsx("div", {
  className: "jsx-2510472162" + " " + "rights-reserved"
}, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), footer_jsx(style_default.a, {
  id: "2510472162"
}, [".text-grey.jsx-2510472162{color:#e5e5e5;}", ".footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}", ".footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}", ".footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}", ".footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}", ".footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}", ".footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}", "@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}", "@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}"]));

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "react-yandex-metrika"
var external_react_yandex_metrika_ = __webpack_require__("vHBd");
var external_react_yandex_metrika_default = /*#__PURE__*/__webpack_require__.n(external_react_yandex_metrika_);

// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;



 // import { Spring } from 'react-spring';
// import * as gtag from '../lib/gtag';


 // Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class Layout_Layout extends external_react_["Component"] {
  componentDidMount() {
    external_react_yandex_metrika_default()('hit', router_default.a.router.asPath);
  }

  render() {
    return Layout_jsx("div", null, Layout_jsx(nav, null), Layout_jsx("div", {
      className: "header-block"
    }), Layout_jsx(external_react_yandex_metrika_["YMInitializer"], {
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
    }), this.props.children, Layout_jsx(footer, null));
  }

}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout); // export default ({ children }) => (
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

/***/ "6du2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class OtherNews extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      otherNews: []
    };
  }

  componentDidMount() {
    const {
      news
    } = this.props;
    let max = news.length - 1;
    let min = 1;
    let array = [];

    for (array.length; array.length < 4; false) {
      let index = Math.floor(Math.random() * (max - min + 1)) + min;
      let newItem = news[index];

      if (!array.includes(newItem)) {
        array.push(newItem);
      }
    }

    this.setState({
      otherNews: array
    });
  }

  render() {
    const {
      otherNews
    } = this.state;
    let otherNewsContent = 'Загрузка...';
    otherNewsContent = otherNews.map(item => __jsx("div", {
      className: "  ",
      key: `other-${item.id}`
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/novosti?id=${item.id}`,
      as: `/novosti/${item.id}`,
      key: `other-${item.id}`
    }, __jsx("a", {
      className: "other-new"
    }, __jsx("div", {
      className: "img-container"
    }, __jsx("img", {
      className: "detail-img",
      src: `/images/${item.img}`,
      alt: item.label,
      title: item.label
    })), __jsx("span", {
      className: "other-new-title"
    }, item.label)))));
    return __jsx("div", {
      className: "jsx-4011291110" + " " + "row"
    }, __jsx("div", {
      className: "jsx-4011291110" + " " + "col-12"
    }, __jsx("span", {
      className: "jsx-4011291110" + " " + "subheading-common"
    }, "\u041B\u0435\u043D\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439:")), __jsx("div", {
      className: "jsx-4011291110" + " " + "col-12 other-new-plate"
    }, otherNewsContent), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4011291110"
    }, [".other-new-plate{display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:30px;}", ".other-new-plate .other-new{display:block;}", ".other-new-plate .other-new .img-container{border-radius:var(--border-radius);overflow:hidden;margin-bottom:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}", ".other-new-plate .other-new .img-container .detail-img{max-width:100%;}", ".other-new-plate .other-new .other-new-title{color:var(--accent-dark);-webkit-text-decoration:none;text-decoration:none;display:block;margin-top:2px;font-size:14px;line-height:17px;}", ".other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "@media (min-width:576px){.other-new-plate{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;margin-bottom:15px;}.other-new-plate .other-new .img-container{height:150px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}}", "@media (min-width:768px){.other-new .img-container{height:230px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.other-new .img-container .detail-img{max-width:100%;}}", "@media (min-width:992px){.other-new-plate{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:30px;margin-bottom:30px;}.other-new-plate .other-new .img-container{height:155px;overflow:hidden;border-radius:var(--border-radius);}.other-new-plate .other-new .img-container .detail-img{display:block;min-width:105%;height:105%;}}", "@media (min-width:1200px){.subheading-common{display:block;margin-top:30px;}.other-new-plate{padding-top:15px;}.other-new-plate .other-new .img-container{height:160px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{margin-top:7px;font-size:15px;line-height:20px;font-weight:300;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (OtherNews);

/***/ }),

/***/ "CrcA":
/***/ (function(module, exports) {

module.exports = require("video-react");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "NudO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables_projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yl2K");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class PromoProjects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.randomArray = this.randomArray.bind(this);
  }

  randomArray(arr, count) {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let temp;
    let index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }

    return shuffled.slice(min);
  }

  render() {
    const {
      itemsCount
    } = this.props;
    let projectsZero = [];
    let promoprojects = [];
    let content = '';
    _tables_projectList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].map(item => {
      if (item.id !== 0) {
        projectsZero.push(item);
      }
    });
    promoprojects = this.randomArray(projectsZero, itemsCount);
    content = promoprojects.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: `${index}-promoproj`,
      href: `/proekti/${item.id}`
    }, __jsx("a", {
      key: `${index}-promoproj`,
      className: "d-block promoproj-card"
    }, __jsx("div", {
      className: "proj-img"
    }, __jsx("img", {
      src: `/images/projects/${item.img}`,
      alt: item.label,
      title: item.label,
      className: "w-100"
    })), __jsx("span", {
      className: "text-common"
    }, item.label))));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h4", {
      className: "jsx-2158328390" + " " + "header-min-colored"
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B:"), __jsx("div", {
      className: "jsx-2158328390" + " " + "proj-feed"
    }, content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2158328390"
    }, [".promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}", ".promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:15px;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}", "@media (min-width:576px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:30px;display:grid;grid-template:auto auto / 1fr 1fr;grid-gap:15px;}}", "@media (min-width:768px){.promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{grid-gap:30px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:12px;padding-left:0px;padding-right:35px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:18px;}}", "@media (min-width:992px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;}}", "@media (min-width:1200px){.promo-projects.jsx-2158328390{padding:0;padding-left:40px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-top:31px;margin-bottom:15px;font-size:19px;text-align:right;border-bottom:1px solid rgba(0,0,0,0.125);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding:0px;display:grid;grid-template:1fr / 1fr;grid-auto-flow:row;grid-gap:30px;grid-gap:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;cursor:pointer;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:10px;overflow:hidden;box-shadow:3px 3px 2px rgba(0,0,0,0.2);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;margin-top:0px;text-align:right;padding-right:0;}}"]));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PromoProjects);

/***/ }),

/***/ "R5wU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oLQh");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "n4w_VCaN6C8",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (YoutubeVideo);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YNhk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
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

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "YTqd":
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

/***/ "auAi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: ./components/tables/productsList.js
var productsList = __webpack_require__("b7GJ");

// EXTERNAL MODULE: external "video-react"
var external_video_react_ = __webpack_require__("CrcA");

// EXTERNAL MODULE: ./components/YoutubeVideo.js
var YoutubeVideo = __webpack_require__("R5wU");

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// CONCATENATED MODULE: ./components/YoutubeVideoMan.js

var __jsx = external_react_default.a.createElement;



class YoutubeVideoMan_YoutubeVideoMan extends external_react_default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_youtube_default.a, {
      className: "myVideo",
      videoId: "aySXIrHSjHY",
      opts: opts,
      onReady: this._onReady
    }), __jsx(style_default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ var components_YoutubeVideoMan = (YoutubeVideoMan_YoutubeVideoMan);
// CONCATENATED MODULE: ./components/YoutubeVideoMan2.js

var YoutubeVideoMan2_jsx = external_react_default.a.createElement;



class YoutubeVideoMan2_YoutubeVideoMan2 extends external_react_default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return YoutubeVideoMan2_jsx(external_react_default.a.Fragment, null, YoutubeVideoMan2_jsx(external_react_youtube_default.a, {
      className: "myVideo",
      videoId: "iELYVfffzHQ",
      opts: opts,
      onReady: this._onReady
    }), YoutubeVideoMan2_jsx(style_default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ var components_YoutubeVideoMan2 = (YoutubeVideoMan2_YoutubeVideoMan2);
// CONCATENATED MODULE: ./components/YoutubeVideo1.js

var YoutubeVideo1_jsx = external_react_default.a.createElement;



class YoutubeVideo1_YoutubeVideo1 extends external_react_default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return YoutubeVideo1_jsx(external_react_default.a.Fragment, null, YoutubeVideo1_jsx(external_react_youtube_default.a, {
      className: "myVideo",
      videoId: "Fx49gM4Hubo",
      opts: opts,
      onReady: this._onReady
    }), YoutubeVideo1_jsx(style_default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ var components_YoutubeVideo1 = (YoutubeVideo1_YoutubeVideo1);
// CONCATENATED MODULE: ./components/YoutubeVideoLiebherr2.js

var YoutubeVideoLiebherr2_jsx = external_react_default.a.createElement;



class YoutubeVideoLiebherr2_YoutubeVideoLiebherr2 extends external_react_default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return YoutubeVideoLiebherr2_jsx(external_react_default.a.Fragment, null, YoutubeVideoLiebherr2_jsx(external_react_youtube_default.a, {
      className: "myVideo",
      videoId: "90qHCKkm7s0",
      opts: opts,
      onReady: this._onReady
    }), YoutubeVideoLiebherr2_jsx(style_default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ var components_YoutubeVideoLiebherr2 = (YoutubeVideoLiebherr2_YoutubeVideoLiebherr2);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__("YNhk");

// CONCATENATED MODULE: ./components/products/ProductsNewContainer.js
var ProductsNewContainer_jsx = external_react_default.a.createElement;










class ProductsNewContainer_ProductsNew extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList["a" /* default */],
      categorySelected: 'MTU',
      itemsSelected: [{
        label: 'MTU 700',
        id: 24,
        img: 'mtu700.jpg',
        as: '/mtu-700',
        motorMark: 'MTU 8V4000 GS L32',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '776',
        thermalPower: '886',
        electricEfficiency: '41,9',
        thermalEfficiency: '46,7',
        overallEfficiency: '88,6',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '210',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer, Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 800',
        id: 25,
        img: 'mtu800.jpg',
        as: '/mtu-800',
        motorMark: 'MTU 8V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '854',
        thermalPower: '891',
        electricEfficiency: '42,8',
        thermalEfficiency: '44,8',
        overallEfficiency: '87,6',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '230',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1000',
        id: 26,
        img: 'mtu1000.jpg',
        as: '/mtu-1000',
        motorMark: 'MTU 8V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '1013',
        thermalPower: '969',
        electricEfficiency: '43,4',
        thermalEfficiency: '42,6',
        overallEfficiency: '86',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '273',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1100',
        id: 27,
        img: 'mtu1100.jpg',
        as: '/mtu-1100',
        motorMark: 'MTU 12V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1169',
        thermalPower: '1228',
        electricEfficiency: '42,8',
        thermalEfficiency: '45,0',
        overallEfficiency: '87,8',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '330',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1200',
        id: 28,
        img: 'mtu1200.jpg',
        as: '/mtu-1200',
        motorMark: 'MTU 12V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1286',
        thermalPower: '1323',
        electricEfficiency: '43,2',
        thermalEfficiency: '44,5',
        overallEfficiency: '87,7',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '347',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1500',
        id: 29,
        img: 'mtu1500.jpg',
        as: '/mtu-1500',
        motorMark: 'MTU 12V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1521',
        thermalPower: '1403',
        electricEfficiency: '44,3',
        thermalEfficiency: '40,8',
        overallEfficiency: '85,1',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '410',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1600',
        id: 30,
        img: 'mtu1600.jpg',
        as: '/mtu-1600',
        motorMark: 'MTU 16V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1560',
        thermalPower: '1662',
        electricEfficiency: '42,8',
        thermalEfficiency: '45,6',
        overallEfficiency: '88,4',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '420',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1700',
        id: 31,
        img: 'mtu1700.jpg',
        as: '/mtu-1700',
        motorMark: 'MTU 16V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1718',
        thermalPower: '1795',
        electricEfficiency: '43',
        thermalEfficiency: '45',
        overallEfficiency: '88',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '464',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 2000',
        id: 32,
        img: 'mtu2000.jpg',
        as: '/mtu-2000',
        motorMark: 'MTU 16V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '2028',
        thermalPower: '1901',
        electricEfficiency: '44,3',
        thermalEfficiency: '41,6',
        overallEfficiency: '85,9',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '527',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 2020',
        id: 33,
        img: 'mtu2000.jpg',
        as: '/mtu-2000',
        motorMark: 'MTU 20V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '2145',
        thermalPower: '2239',
        electricEfficiency: '43',
        thermalEfficiency: '44,9',
        overallEfficiency: '87,9',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '579',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }]
    };
  }

  handleClick(e, category) {
    let itemsSelected = [];
    e.preventDefault();

    for (const productsCategory in this.state.items) {
      if (this.state.items.hasOwnProperty(productsCategory)) {
        const products = this.state.items[productsCategory];

        if (products.category == category) {
          itemsSelected = products.products;
        }
      }
    }

    this.setState({
      categorySelected: category,
      itemsSelected: itemsSelected
    });
  }

  render() {
    const data = this.state.itemsSelected;
    const category = this.state.categorySelected;
    const brand = this.props.brand;
    console.log('brand is ' + brand);
    return ProductsNewContainer_jsx("div", {
      className: "container-fluid products"
    }, ProductsNewContainer_jsx("div", {
      className: "container"
    }, ProductsNewContainer_jsx("div", {
      className: "row"
    }, ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-3 col-lg-2"
    }, ProductsNewContainer_jsx("span", {
      className: "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), ProductsNewContainer_jsx("ul", {
      className: "category-list"
    }, ProductsNewContainer_jsx("li", {
      className: category == 'MTU' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx("a", {
      onClick: e => this.handleClick(e, 'MTU'),
      className: "category-link"
    }, "MTU")), ProductsNewContainer_jsx("li", {
      className: category == 'MAN' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx("a", {
      onClick: e => this.handleClick(e, 'MAN'),
      className: "category-link"
    }, "MAN")), ProductsNewContainer_jsx("li", {
      className: category == 'LIEBHERR' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx("a", {
      onClick: e => this.handleClick(e, 'LIEBHERR'),
      className: "category-link"
    }, "Liebherr")), ProductsNewContainer_jsx("li", {
      className: category == 'YAMZ' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx("a", {
      onClick: e => this.handleClick(e, 'YAMZ'),
      className: "category-link"
    }, "\u042F\u041C\u0417")), ProductsNewContainer_jsx("li", {
      className: category == 'JENBACHER' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx("a", {
      onClick: e => this.handleClick(e, 'JENBACHER'),
      className: "category-link"
    }, "JENBACHER")), ProductsNewContainer_jsx("li", {
      className: category == 'MTU' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx(Link["a" /* default */], {
      href: "/products?brand=MTU",
      scroll: false
    }, ProductsNewContainer_jsx("a", {
      className: "category-link"
    }, "MTU"))), ProductsNewContainer_jsx("li", {
      className: category == 'MAN' ? 'category-li active' : 'category-li'
    }, ProductsNewContainer_jsx(Link["a" /* default */], {
      href: "/products?brand=MAN",
      scroll: false
    }, ProductsNewContainer_jsx("a", {
      className: "category-link"
    }, "MAN"))))), ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-9 col-lg-10 product-card-plate"
    }, data.map(item => ProductsNewContainer_jsx("div", {
      className: "product-card-container",
      key: item.id
    }, ProductsNewContainer_jsx(Link["a" /* default */], {
      href: `/products/${category}/${item.id}`,
      key: item.key
    }, ProductsNewContainer_jsx("a", {
      className: "product-card"
    }, ProductsNewContainer_jsx("div", {
      className: "img-container"
    }, ProductsNewContainer_jsx("img", {
      src: `/images/products/thumb-${item.img}`,
      alt: item.label,
      className: "product-card-img"
    })), ProductsNewContainer_jsx("div", {
      className: "text-container"
    }, ProductsNewContainer_jsx("div", {
      className: "flex-top"
    }, ProductsNewContainer_jsx("span", {
      className: "product-name"
    }, item.label)), ProductsNewContainer_jsx("div", {
      className: "flex-bot"
    }, ProductsNewContainer_jsx("div", {
      className: "flex-row"
    }, ProductsNewContainer_jsx("span", {
      className: "product-card-motor-title"
    }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), ProductsNewContainer_jsx("span", {
      className: "product-card-motor"
    }, item.motorMark)), ProductsNewContainer_jsx("div", {
      className: "flex-row"
    }, ProductsNewContainer_jsx("span", {
      className: "product-card-power-title"
    }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), ProductsNewContainer_jsx("span", {
      className: "product-card-power"
    }, item.electricPower, " \u043A\u0412\u0442"), ProductsNewContainer_jsx("span", {
      className: "product-card-details"
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435...")))))))))), category == 'LIEBHERR' && ProductsNewContainer_jsx("div", {
      className: "row mt-5 m-0 d-flex flex-column"
    }, ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-10 offset-md-2"
    }, ProductsNewContainer_jsx(components_YoutubeVideo1, {
      className: "myVideo"
    })), ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-10 offset-md-2"
    }, ProductsNewContainer_jsx(components_YoutubeVideoLiebherr2, {
      className: "myVideo"
    }))), category == 'MAN' && ProductsNewContainer_jsx("div", {
      className: "row mt-5 m-0"
    }, ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-10 col-xl-6"
    }, ProductsNewContainer_jsx(components_YoutubeVideoMan, {
      className: "myVideo"
    })), ProductsNewContainer_jsx("div", {
      className: "col-12 col-md-10 col-xl-6"
    }, ProductsNewContainer_jsx(components_YoutubeVideoMan2, {
      className: "myVideo"
    })))));
  }

}

ProductsNewContainer_ProductsNew.defaultProps = {
  brand: 'MTU'
};
/* harmony default export */ var ProductsNewContainer = (ProductsNewContainer_ProductsNew);
// EXTERNAL MODULE: external "react-input-range"
var external_react_input_range_ = __webpack_require__("5U/F");
var external_react_input_range_default = /*#__PURE__*/__webpack_require__.n(external_react_input_range_);

// CONCATENATED MODULE: ./components/products/Filter.js

var Filter_jsx = external_react_default.a.createElement;



class Filter_Filter extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        min: 100,
        max: 4000
      }
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(value) {
    this.props.onFilterChange(this.state.value.min, this.state.value.max);
    this.setState({
      value
    });
  }

  render() {
    const {
      foundItems
    } = this.props;
    return Filter_jsx(external_react_default.a.Fragment, null, Filter_jsx("div", {
      className: "jsx-3784398479" + " " + "text-container"
    }, Filter_jsx("span", {
      className: "jsx-3784398479" + " " + "filter-text"
    }, "\u0412\u044B\u0431\u043E\u0440 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438")), Filter_jsx("div", {
      className: "jsx-3784398479" + " " + "filter-block"
    }, Filter_jsx("div", {
      className: "jsx-3784398479" + " " + "input-block"
    }, Filter_jsx(external_react_input_range_default.a, {
      maxValue: 5000,
      minValue: 100,
      step: 100,
      value: this.state.value,
      onChange: value => this.onChangeHandle(value),
      draggableTrack: true
    }))), Filter_jsx(style_default.a, {
      id: "3784398479"
    }, [".input-range .input-range__track{position:relative;height:22px;}", ".input-range .input-range__track--active{background:grey;margin-left:11px;}", ".input-range .input-range__track--background{background:red;}", ".input-range .input-range__slider{background:white;width:22px;height:22px;border-radius:50%;}", ".input-range .input-range__slider-container{top:-22px;}"]));
  }

}

/* harmony default export */ var products_Filter = (Filter_Filter);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/products/ProductItems.js
var ProductItems_jsx = external_react_default.a.createElement;


 // import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ProductItems(props) {
  const {
    0: result,
    1: setResult
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    setResult(props.data);
  }, [props]);
  let plateClass = external_classnames_default()('col-12 col-md-9 col-lg-10 product-card-plate ', props.view);
  return ProductItems_jsx("div", {
    className: plateClass
  }, result ? result.map(item => ProductItems_jsx("div", {
    key: item.id,
    className: "product-card-container"
  }, ProductItems_jsx(link_default.a, {
    href: `/products/${item.category}/${item.id}`,
    key: `key0-${item.id}`
  }, ProductItems_jsx("a", {
    className: "product-card"
  }, ProductItems_jsx("div", {
    className: "img-container"
  }, ProductItems_jsx("img", {
    src: `/images/products/thumb-${item.img}`,
    alt: item.label,
    className: "product-card-img"
  })), ProductItems_jsx("div", {
    className: "text-container"
  }, ProductItems_jsx("div", {
    className: "flex-top"
  }, ProductItems_jsx("span", {
    className: "product-name"
  }, item.label)), ProductItems_jsx("div", {
    className: "flex-bot"
  }, ProductItems_jsx("div", {
    className: "flex-row"
  }, ProductItems_jsx("span", {
    className: "product-card-motor-title"
  }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), ProductItems_jsx("span", {
    className: "product-card-motor"
  }, item.motorMark)), ProductItems_jsx("div", {
    className: "flex-row"
  }, ProductItems_jsx("span", {
    className: "product-card-power-title"
  }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), ProductItems_jsx("span", {
    className: "product-card-power"
  }, item.electricPower, " \u043A\u0412\u0442")), ProductItems_jsx("span", {
    className: "product-card-details"
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))))) : '');
}
// CONCATENATED MODULE: ./components/products/ProductPlate.js
var ProductPlate_jsx = external_react_default.a.createElement;



class ProductPlate_ProductsPlate extends external_react_["Component"] {
  render() {
    const {
      brand,
      minValue,
      maxValue,
      data,
      view
    } = this.props; // Формирование начального массива продуктов по бренду

    let productItems = []; // Если все - то добавляем все продукты в массив

    if (brand == "ALL") {
      data.map(category => {
        category.map(item => {
          productItems.push(item);
        });
      });
    } else {
      // Иначе копируем продукты из пропсов
      productItems = data;
    } // Работа с фильтром


    const result = productItems.filter(item => item.electricPower <= maxValue && item.electricPower >= minValue);
    result.sort(function (a, b) {
      return a.electricPower - b.electricPower;
    });
    return ProductPlate_jsx(ProductItems, {
      data: result,
      view: view
    });
  }

}

ProductPlate_ProductsPlate.defaultProps = {
  minValue: 100,
  maxValue: 4000,
  view: "list"
};
/* harmony default export */ var ProductPlate = (ProductPlate_ProductsPlate);
// CONCATENATED MODULE: ./components/products/Catalog.js

var Catalog_jsx = external_react_default.a.createElement;













class Catalog_Catalog extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList["a" /* default */],
      itemsSelected: [],
      minValue: 100,
      maxValue: 4000,
      view: 'list',
      foundItems: 0
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onViewTypeChange = this.onViewTypeChange.bind(this);
  }

  componentDidMount() {
    const brand = this.props.brand;
    let itemsSelected = [];

    if (brand == 'ALL') {
      this.state.items.map(category => {
        itemsSelected.push(category.products);
      });
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];

          if (products.category == brand) {
            itemsSelected = products.products;
          }
        }
      }
    }

    this.setState({
      itemsSelected: itemsSelected
    });
  }

  onFilterChange(minValue, maxValue) {
    this.setState({
      minValue,
      maxValue
    });
  }

  onViewTypeChange(view) {
    this.setState({
      view
    });
  }

  render() {
    // const data = this.state.itemsSelected;
    const category = this.props.brand;
    const brand = this.props.brand;
    const {
      minValue,
      maxValue,
      foundItems
    } = this.state;
    let data = [];

    if (brand == 'ALL') {
      this.state.items.map(category => {
        data.push(category.products);
      });
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];

          if (products.category == brand) {
            data = products.products;
          }
        }
      }
    }

    let view = true;

    if (this.state.view == 'list') {
      view = true;
    } else {
      view = false;
    }

    let buttonListClass = external_classnames_default()('view-item list-icon ', {
      active: view
    });
    let buttonPlateClass = external_classnames_default()('view-item plate-icon ', {
      active: !view
    });
    return Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "container-fluid products"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "container"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "row filter"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "filter-component"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "filter-group"
    }, Catalog_jsx(products_Filter, {
      foundItems: foundItems,
      onFilterChange: this.onFilterChange
    })), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "button-group"
    }, Catalog_jsx("button", {
      onClick: () => this.onViewTypeChange('plate'),
      className: "jsx-4268982151" + " " + (buttonPlateClass || "")
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-1"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-2"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-3"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-4"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-5"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-6"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-7"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-8"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block block-9"
    })), Catalog_jsx("button", {
      onClick: () => this.onViewTypeChange('list'),
      className: "jsx-4268982151" + " " + (buttonListClass || "")
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-1"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-2"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-3"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-4"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-5"
    }), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-6"
    })))))), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "row"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-3 col-lg-2"
    }, Catalog_jsx("span", {
      className: "jsx-4268982151" + " " + "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), Catalog_jsx("ul", {
      className: "jsx-4268982151" + " " + "category-list"
    }, Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'ALL' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=ALL",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "\u0412\u0441\u0435"))), Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'MTU' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=MTU",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "MTU"))), Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'MAN' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=MAN",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "MAN"))), Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'LIEBHERR' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=LIEBHERR",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "Liebherr"))), Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'YAMZ' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=YAMZ",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "\u042F\u041C\u0417"))), Catalog_jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'JENBACHER' ? 'category-li active' : 'category-li') || "")
    }, Catalog_jsx(Link["a" /* default */], {
      href: "/products?brand=JENBACHER",
      scroll: false
    }, Catalog_jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "Jenbacher"))))), Catalog_jsx(ProductPlate, {
      data: data,
      brand: brand,
      minValue: minValue,
      maxValue: maxValue,
      view: this.state.view,
      onFoundChange: this.onFoundChange
    })), category == 'LIEBHERR' && Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "row mt-5 m-0 d-flex flex-column"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 offset-md-2"
    }, Catalog_jsx(components_YoutubeVideo1, {
      className: "myVideo"
    })), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 offset-md-2"
    }, Catalog_jsx(components_YoutubeVideoLiebherr2, {
      className: "myVideo"
    }))), category == 'MAN' && Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "row mt-5 m-0"
    }, Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 col-xl-6"
    }, Catalog_jsx(components_YoutubeVideoMan, {
      className: "myVideo"
    })), Catalog_jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 col-xl-6"
    }, Catalog_jsx(components_YoutubeVideoMan2, {
      className: "myVideo"
    })))), Catalog_jsx(style_default.a, {
      id: "4268982151"
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

}

Catalog_Catalog.defaultProps = {
  brand: 'ALL'
};
/* harmony default export */ var products_Catalog = (Catalog_Catalog);
// CONCATENATED MODULE: ./components/products/ProductsTextSections.js
var ProductsTextSections_jsx = external_react_default.a.createElement;


function ProductsTextSections() {
  return ProductsTextSections_jsx("div", null, ProductsTextSections_jsx("section", {
    className: "products-text"
  }, ProductsTextSections_jsx("div", {
    className: "container-fluid"
  }, ProductsTextSections_jsx("div", {
    className: "container"
  }, ProductsTextSections_jsx("div", {
    className: "row"
  }, ProductsTextSections_jsx("div", {
    className: "col-12 col-lg-7 col-xl-8"
  }, ProductsTextSections_jsx("div", {
    className: "text-wrapper"
  }, ProductsTextSections_jsx("h2", {
    className: "header-min-colored"
  }, "\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430"), ProductsTextSections_jsx("span", {
    className: "subheading-common mb-2"
  }, "\u041D\u043E\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), ProductsTextSections_jsx("p", {
    className: "text"
  }, "\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430 \u043C\u0430\u043B\u044B\u0445 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u043E\u0433\u0440\u043E\u043C\u0435\u043D. \u041E\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438. \u042D\u0442\u043E\u0442 \u0444\u0430\u043A\u0442\u043E\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 5\xA0\u041C\u0412\u0442. \u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u0420\u0424", ' ', ProductsTextSections_jsx("b", null, "\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0438\u0436\u0435 2\xA0\u041C\u0412"), ' ', "\u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u044D\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438\u0441\u043A\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), ProductsTextSections_jsx("p", {
    className: "text"
  }, "\u041D\u0435\u043C\u0430\u043B\u043E\u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0434\u043B\u044F \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0441\u044B\u0433\u0440\u0430\u043B\u043E \u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \u2116442 \u043E\u0442 04.05.2012\u0433., \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043E\u043D\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0442\u0435\u0432\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u043E", ' ', ProductsTextSections_jsx("b", null, "\u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B"), " \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u0440\u0438 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0438\u0437\u043B\u0438\u0448\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0432 \u0441\u0435\u0442\u044C.", ' '), ProductsTextSections_jsx("p", {
    className: "text"
  }, "\u0412 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043D\u0435\u0440\u0433\u043E\u0434\u0435\u0444\u0438\u0446\u0438\u0442\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u043E\u0432. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043C\u043E\u0436\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0445 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438.", ' '))))))));
}
// CONCATENATED MODULE: ./components/products/ProductsUsage.js

var ProductsUsage_jsx = external_react_default.a.createElement;

function ProductsUsage() {
  return ProductsUsage_jsx("div", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("div", {
    className: "jsx-1695318915" + " " + "container-fluid usage"
  }, ProductsUsage_jsx("div", {
    className: "jsx-1695318915" + " " + "container"
  }, ProductsUsage_jsx("div", {
    className: "jsx-1695318915" + " " + "row"
  }, ProductsUsage_jsx("div", {
    className: "jsx-1695318915" + " " + "col"
  }, ProductsUsage_jsx("div", {
    className: "jsx-1695318915" + " " + "usage-wrapper"
  }, ProductsUsage_jsx("h4", {
    className: "jsx-1695318915" + " " + "header-min-colored pb-1 pb-md-3"
  }, "\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439"), ProductsUsage_jsx("p", {
    className: "jsx-1695318915" + " " + "text text-bold"
  }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E, \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u0438\u043B\u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u043F\u043B\u0430 \u043D\u0430:"), ProductsUsage_jsx("ul", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445,")), ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0411\u0443\u0440\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445, \u0441\u043A\u0432\u0430\u0436\u0438\u043D\u0430\u0445 \u0438 \u0448\u0430\u0445\u0442\u0430\u0445,")), ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u041E\u0447\u0438\u0441\u0442\u043D\u044B\u0445 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u044F\u0445,")), ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0412 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435,")), ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0443\u0447\u0435\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u0445,")), ProductsUsage_jsx("li", {
    className: "jsx-1695318915"
  }, ProductsUsage_jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0410\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0430\u0445, \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u0430\u0445, \u0443\u0437\u043B\u0430\u0445 \u0441\u0432\u044F\u0437\u0438, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u0436\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0442. \u043F."))), ProductsUsage_jsx("p", {
    className: "jsx-1695318915" + " " + "text-bold pt-3 pb-3"
  }, "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438\u043C\u0435\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u041A\u041F\u0414, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043B\u0438\u044F\u043D\u0438\u0435 \u043D\u0430 \u041A\u041F\u0414 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u0430 \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u043C\u0438\u043A\u0440\u043E\u0442\u0443\u0440\u0431\u0438\u043D\u0430\u043C\u0438, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u044B\u0445\u043B\u043E\u043F\u0430 \u0432 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443.")))))), ProductsUsage_jsx(style_default.a, {
    id: "1695318915"
  }, [".usage.jsx-1695318915{background-color:var(--l-grey);padding-top:30px;padding-bottom:30px;}", ".usage.jsx-1695318915 .text-bold.jsx-1695318915{color:var(--accent-grey);font-weight:300;}", ".usage.jsx-1695318915 ul.jsx-1695318915{padding:0;margin-top:30px;width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915{position:relative;padding:0;padding-top:5px;padding-bottom:5px;padding-left:35px;margin-bottom:5px;}", ".usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915::before{display:block;content:'';position:absolute;width:14px;height:14px;background-color:var(--accent-red);border-radius:10px;left:0px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915 .text.jsx-1695318915{line-height:20px;}", "@media (min-width:768px){.usage.jsx-1695318915{padding-top:45px;padding-bottom:45px;}.usage.jsx-1695318915 .text-bold.jsx-1695318915{line-height:25px;font-size:19px;}.usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915 .text.jsx-1695318915{font-size:19px;line-height:20px;}}", "@media (min-width:992px){.usage.jsx-1695318915{background-color:#fafafa;padding-top:30px;padding-bottom:30px;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915{padding:45px;background-color:transparent;background:linear-gradient( to right, #fff 25%, rgba(255,255,255,0.85) ), url('/images/IMG_2.jpg') 100% 100% no-repeat;border-radius:10px;box-shadow:3px 3px 4px rgba(0,0,0,0.15);}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 .text-bold.jsx-1695318915{line-height:26px;font-size:18px;color:var(--text);font-weight:500;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915{position:relative;padding:0;padding-top:10px;padding-bottom:10px;padding-left:35px;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915::before{display:block;content:'';position:absolute;width:14px;height:14px;background-color:var(--accent-red);border-top-left-radius:10px;left:0px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);box-shadow:3px 3px 3px rgba(0,0,0,0.2);}}"]));
}
// EXTERNAL MODULE: ./components/tables/newsList.js
var newsList = __webpack_require__("jKLG");

// EXTERNAL MODULE: ./components/news/OtherNews.js
var OtherNews = __webpack_require__("6du2");

// EXTERNAL MODULE: ./components/products/PromoProjects.js
var PromoProjects = __webpack_require__("NudO");

// CONCATENATED MODULE: ./components/products/ProductsListPlate.js

var ProductsListPlate_jsx = external_react_default.a.createElement;


class ProductsListPlate_ProductsListPlate extends external_react_["Component"] {
  render() {
    const data = this.props.data.data[0];
    const category = this.props.data.data[1];
    return ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-2"
    }, ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), ProductsListPlate_jsx("ul", {
      className: "jsx-1400608521" + " " + "category-list"
    }, ProductsListPlate_jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, ProductsListPlate_jsx(Link["a" /* default */], {
      activeClassName: "active",
      href: "/products?category=mtu"
    }, ProductsListPlate_jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "MTU"))), ProductsListPlate_jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, ProductsListPlate_jsx(Link["a" /* default */], {
      activeClassName: "active",
      href: "/products?category=man"
    }, ProductsListPlate_jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "MAN"))), ProductsListPlate_jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, ProductsListPlate_jsx(Link["a" /* default */], {
      activeClassName: "active",
      href: "/products?category=liebherr"
    }, ProductsListPlate_jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "Liebherr"))), ProductsListPlate_jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, ProductsListPlate_jsx(Link["a" /* default */], {
      activeClassName: "active",
      href: "/products?category=yamz"
    }, ProductsListPlate_jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "\u042F\u041C\u0417"))))), ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-10 product-card-plate"
    }, data.map(item => ProductsListPlate_jsx("div", {
      key: item.key,
      className: "jsx-1400608521" + " " + "product-card-container"
    }, ProductsListPlate_jsx(Link["a" /* default */], {
      href: {
        pathname: '/product',
        query: {
          category: category,
          id: item.id
        }
      },
      as: `/products/${category}/${item.id}`,
      key: item.key
    }, ProductsListPlate_jsx("a", {
      className: "jsx-1400608521" + " " + "product-card"
    }, ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "img-container"
    }, ProductsListPlate_jsx("img", {
      src: `/images/products/thumb-${item.img}`,
      alt: item.label,
      title: item.label,
      className: "jsx-1400608521" + " " + "product-card-img"
    })), ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "flex-top"
    }, ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-name"
    }, item.label)), ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "flex-bot"
    }, ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "flex-row"
    }, ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-motor-title"
    }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-motor pb-1"
    }, item.motorMark)), ProductsListPlate_jsx("div", {
      className: "jsx-1400608521" + " " + "flex-row"
    }, ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-power-title"
    }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-power"
    }, item.electricPower, " \u043A\u0412\u0442"), ProductsListPlate_jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-details"
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435...")))))))))), ProductsListPlate_jsx(style_default.a, {
      id: "1400608521"
    }, [".enter{opacity:0;}", ".enter-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:1;}", ".enter-done{opacity:1;}", ".exit{opacity:1;}", ".exit-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:0;}", ".products-promo{background:linear-gradient(to right,#e1e1e1 0%,#b1b1b1 100%);padding-top:30px;padding-bottom:30px;box-shadow:inset 0 10px 15px -5px rgba(0,0,0,0.2);}", ".products-promo .text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:27px;line-height:32px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}", ".products-promo .text-container .text-min{display:block;margin-bottom:15px;line-height:18px;}", ".products-promo .cards-plate{display:none;}", ".products{padding-top:30px;}", ".products .category-header{font-family:var(--molot-font);font-size:20px;color:grey;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}", ".products .filter .filter-component{margin-bottom:40px;margin-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".products .filter .filter-component .filter-group{width:70%;}", ".products .filter .filter-component .filter-group .text-container{display:none;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;font-size:12px;bottom:-35px;left:0;color:var(--sub-color);font-weight:300;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;font-size:12px;bottom:-35px;right:0;color:var(--sub-color);font-weight:300;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;height:15px;border-radius:15px;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:15px;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(35%);-ms-transform:translateY(35%);transform:translateY(35%);}", ".products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:1px solid rgba(0,0,0,0.125);}", ".products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:22px;height:24px;background-color:transparent;border:none;margin-left:8px;cursor:pointer;outline:none;}", ".products .filter .filter-component .button-group .active{background-color:var(--accent-red);border-radius:3px;}", ".products .filter .filter-component .button-group .active .block{background-color:#fff !important;}", ".products .filter .filter-component .button-group .active .block-min,.block-max{background-color:#fff !important;}", ".products .filter .filter-component .button-group .plate-icon{position:relative;}", ".products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}", ".products .filter .filter-component .button-group .plate-icon .block-1{top:2px;left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-2{top:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-3{top:2px;right:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-7{bottom:2px;left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-8{bottom:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-9{bottom:2px;right:2px;}", ".products .filter .filter-component .button-group .list-icon{position:relative;}", ".products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}", ".products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;background-color:#bababa;width:12px;height:4px;}", ".products .filter .filter-component .button-group .list-icon .block-1{top:2px;left:2px;}", ".products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .list-icon .block-3{bottom:2px;left:2px;}", ".products .filter .filter-component .button-group .list-icon .block-4{top:2px;right:2px;}", ".products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .list-icon .block-6{bottom:2px;right:2px;}", ".products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;}", ".products .category-list .category-li{border-radius:30px;border:1px solid grey;cursor:pointer;margin:5px;}", ".products .category-list .category-li .category-link{display:block;width:100%;height:100%;font-weight:300;font-size:14px;text-transform:uppercase;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;color:grey;}", ".products .category-list .active{background-color:var(--accent-red);border:none;}", ".products .category-list .active .category-link{color:white;}", ".products .plate{padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".products .plate .product-card-container{width:100%;height:100%;}", ".products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:var(--border-radius);display:block;margin:0 auto;background:#fff;max-width:230px;width:100%;height:245px;box-shadow:var(--box-shadow);box-shadow:3px 3px 4px rgba(0,0,0,0.25);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}", ".products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}", ".products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;width:100%;overflow:hidden;border-radius:7px 7px 0 0;}", ".products .plate .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}", ".products .plate .product-card-container .product-card .text-container{height:120px;padding:15px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:10px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}", ".products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:#313131;display:block;padding-bottom:2px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:#313131;display:block;padding-bottom:2px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}", ".products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}", ".products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:0;display:grid;grid-template-columns:2fr 3fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}", ".products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;overflow:hidden;}", ".products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}", ".products .list .product-card-container .product-card .text-container{padding:0px 15px;display:block;}", ".products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:20px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}", ".products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:var(--sub-color);display:block;padding-bottom:2px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:13px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:black;display:block;line-height:14px;margin-bottom:5px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:var(--sub-color);display:block;padding-bottom:2px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:13px;font-weight:700;color:black;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:9px;text-align:right;display:none;color:var(--accent-red);}", ".products-text{display:block;margin-top:15px;margin-bottom:15px;overflow:hidden;}", ".products-text .text-wrapper .header-min-colored{margin:0;}", ".products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}", ".products-text .text-wrapper .text{margin-top:15px;margin-bottom:15px;line-height:20px;}", ".promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}", ".promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;}", ".promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}", ".promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:5px;font-size:13px;line-height:15px;}", "@media (min-width:576px){.products-promo{padding-top:60px;padding-bottom:60px;}.products-promo .promo-text-container .header-min-colored{font-size:36px;line-height:42px;margin-bottom:30px;}.products-promo .promo-text-container .text-min-container .text-min{font-size:20px;line-height:24px;padding-bottom:15px;}.products .plate{grid-row-gap:0;}.products .plate .product-card-container{padding:25px 15px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;height:380px;}.products .plate .product-card-container .product-card .img-container{height:160px;overflow:hidden;}.products .plate .product-card-container .product-card .img-container .product-card-img{width:100%;height:auto;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:35px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:25px;line-height:22px;margin-bottom:20px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:grey;display:block;line-height:14px;margin-bottom:10px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:12px;text-align:right;display:block;}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:grid;grid-template-columns:1fr 2fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:13px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products-text{display:block;margin-top:30px;margin-bottom:30px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{font-size:16px;line-height:21px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{box-shadow:3px 3px 4px rgba(0,0,0,0.25);border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:22px;}}", "@media (min-width:768px){.products-promo{padding-bottom:30px;}.products-promo .promo-text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .cards-plate{margin-top:30px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.products-promo .cards-plate .card-container .card{border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;}.products-promo .cards-plate .card-container .card .icon-container{margin-bottom:15px;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:17px;color:white;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:none;font-size:12px;line-height:15px;margin-bottom:0;}.products .filter{margin-bottom:30px;}.products .category-header{display:block;position:absolute;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;top:475px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);left:-72px;color:#d5d5d5;font-size:48px;line-height:26px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;position:relative;}.products .category-list .category-li{height:50px;cursor:pointer;margin-top:5px;margin-bottom:5px;}.products .category-list .category-li:first-child{margin-top:0;}.products .category-list .category-li .category-link{text-align:center;line-height:40px;font-weight:700;font-size:16px;color:#313131;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .active .category-link{color:white;}.products .plate{padding-left:30px;padding-right:15px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .plate .product-card-container .product-card{z-index:0;border-radius:var(--border-radius);height:100%;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:120px;width:100%;overflow:hidden;}.products .plate .product-card-container .product-card .text-container{height:auto;padding:20px 10px 15px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:15px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:11px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:11px;font-size:10px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 3fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:10px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:12px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:12px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:14px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products-text .text-wrapper .text{font-size:19px;line-height:25px;color:var(--accent-grey);}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:17px;line-height:22px;}}", "@media (min-width:992px){.products-promo{padding-bottom:30px;}.products{padding-bottom:30px;}.products .category-header{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:48px;}.products .filter .filter-component{box-shadow:none;border-radius:10px;padding:30px 15px 25px;margin-bottom:0px;margin-top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fafafa;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .filter-block{margin-left:90px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{font-size:16px;position:absolute;bottom:-2px;left:-74px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{font-size:16px;position:absolute;bottom:-2px;right:-90px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:26px;height:28px;border:none;margin-left:15px;cursor:pointer;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:4px;right:4px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:4px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:4px;right:4px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-4{top:4px;right:4px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:4px;right:4px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;}.products .category-list .category-li{height:50px;cursor:pointer;margin:5px 0px;border-radius:10px;border:1px solid #7b7b7b;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li .category-link{text-align:center;background-color:rgba(255,255,255,0.05);line-height:40px;font-weight:500;font-size:16px;color:var(--accent-grey);-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li:hover{border:1px solid transparent;box-shadow:3px 3px 2px rgba(0,0,0,0.2);background-color:rgba(255,255,255,0.9);}.products .category-list .category-li:hover .category-link{color:var(--accent-grey);}.products .category-list .active{box-shadow:5px 10px 15px rgba(210,74,67,0.45);background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{display:grid;padding-left:25px;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 5fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 2fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:23px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:12px;text-align:right;display:none;color:var(--accent-red);}.products-text{padding-bottom:60px;padding-top:60px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:19px;margin-bottom:15px;line-height:24px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') -60px 0 no-repeat;background-size:cover;content:'';top:0;right:-100px;height:95%;width:50%;border-radius:15px;box-shadow:-15px 25px 0px rgba(0,0,0,0.125);background-color:#fff;}.products-text .text-wrapper .text{font-size:18px;line-height:24px;color:var(--accent-grey);}}", "@media (min-width:1200px){{.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card:hover;}.products-promo{background:url('/images/products/bg-products.jpg') 50% 0% no-repeat;background-size:cover;padding:30px;border-bottom:15px solid white;}.products-promo .promo-text-container{display:block;height:100%;position:relative;}.products-promo .promo-text-container .header-min-colored{position:absolute;display:block;width:770px;top:30px;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .promo-text-container .text-min-container{top:150px;position:absolute;}.products-promo .promo-text-container .text-min-container .text-min{color:rgb(41,41,41);line-height:20px;font-size:16px;margin-top:20px;}.products-promo .cards-plate{margin-top:0px;display:grid;grid-template:125px 125px 125px / 330px 330px;grid-gap:15px;}.products-promo .cards-plate .card-container{-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;border-radius:var(--border-radius);}.products-promo .cards-plate .card-container:hover{box-shadow:10px 10px 15px rgba(0,0,0,0.2);}.products-promo .cards-plate .card-container:hover .card{background:rgba(255,255,255,0.25);}.products-promo .cards-plate .card-container:active{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.products-promo .cards-plate .card-container .card{background:rgba(255,255,255,0.05);border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .icon-container{width:120px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .text-container{margin-left:15px;padding-left:15px;border-left:1px solid white;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:19px;color:#fafafa;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:19px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:block;font-size:14px;line-height:17px;margin-bottom:0;}.products-promo .cards-plate .container-1{grid-column:2 / 3;grid-row:1 / 2;}.products-promo .cards-plate .container-2{grid-column:2 / 3;grid-row:2 / 3;}.products-promo .cards-plate .container-3{grid-column:2 / 3;grid-row:3 / 4;}.products-promo .cards-plate .container-4{grid-column:1 / 2;grid-row:3 / 4;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.products-promo .cards-plate .container-4 .card{background:rgba(255,255,255,0.15);}.products{padding-top:18px;}.products .filter .filter-component{box-shadow:1px 1px 2px rgba(0,0,0,0.2);border-radius:10px;padding:20px 15px 17px 25px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;}.products .filter .filter-component .filter-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.products .filter .filter-component .filter-group .text-container{display:block;padding-right:25px;border-right:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .filter-group .text-container .filter-text{display:block;color:var(--sub-color);font-weight:700;font-size:15px;line-height:18px;margin-bottom:0px;}.products .filter .filter-component .filter-group .text-container .search-text{font-size:12px;color:var(--sub-color);}.products .filter .filter-component .filter-group .text-container .search-text-value{font-size:12px;color:var(--accent-red);}.products .filter .filter-component .filter-group .filter-block{width:45%;margin-left:110px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;bottom:-2px;left:-78px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;bottom:-2px;right:-85px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border:none;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.2);border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(231,172,117);opacity:1;height:22px;box-shadow:inset 1px 1px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(0,0,0,0.15), 1px 1px 1px rgba(0,0,0,0.2);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-7px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);text-shadow:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .category-list .category-li{height:50px;cursor:pointer;}.products .category-list .category-li .category-link{font-size:18px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-transform:uppercase;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.products .plate{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-auto-rows:auto;grid-gap:25px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;}.products .plate .product-card-container .product-card .img-container{height:197px;}.products .plate .product-card-container .product-card .img-container .product-card-img{max-width:100%;width:auto;height:100%;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:25px 20px 25px 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:21px;line-height:22px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#c4c4c4;display:block;font-weight:300;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:var(--accent-grey);display:block;line-height:14px;margin-bottom:12px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#c4c4c4;font-weight:300;display:block;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:var(--accent-grey);-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .product-card-details{color:var(--accent-red);width:100%;font-size:12px;text-align:right;display:block;font-weight:700;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:10px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 7fr;width:100%;height:100px;min-height:100px;padding-bottom:0px;border-radius:var(--border-radius);box-shadow:var(--card-shadow);border:none;-webkit-transition:box-shadow 0.15s ease-out;transition:box-shadow 0.15s ease-out;background-color:#fff;}.products .list .product-card-container .product-card:hover{box-shadow:0px 10px 20px rgba(0,0,0,0.15);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;height:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 3fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--noto-font);font-size:18px;font-weight:900;line-height:24px;color:var(--accent-grey);margin-bottom:0px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot{display:grid;grid-template-columns:2fr 1fr 1fr;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:300;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:900;color:var(--text);-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{padding:10px 15px;font-size:12px;line-height:14px;text-align:center;display:inline-block;color:white;background-color:var(--accent-red);border-radius:3px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') 0 0 no-repeat;background-size:cover;content:'';top:auto;bottom:15px;right:-100px;height:80%;width:40%;border-radius:15px;box-shadow:-15px 15px 0px rgba(0,0,0,0.125);box-shadow:-3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.products-text .text-wrapper .text{font-size:17px;line-height:25px;color:#313131;}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-gap:30px;}.proj-img{box-shadow:0 10px 15px rgba(0,0,0,0.225);}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:10px;overflow:hidden;-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:23px;}}", "@media (min-width:1500px){.products-text::before{display:block;position:absolute;background:url('/images/IMG_2.jpg') 25% 0 no-repeat;background-size:cover;content:'';top:0px;left:-100px;height:80%;width:18%;border-radius:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.promo-projects-product-page{margin-top:60px;margin-bottom:30px;padding-bottom:15px;}}"]));
  }

}
/* harmony default export */ var products_ProductsListPlate = (ProductsListPlate_ProductsListPlate);
// CONCATENATED MODULE: ./pages/products.js

var products_jsx = external_react_default.a.createElement;

 // import Head from '../components/head';













class products_Products extends external_react_["Component"] {
  render() {
    const {
      data
    } = this.props;
    const {
      brand
    } = this.props;
    return products_jsx("div", {
      className: "jsx-1400608521"
    }, products_jsx(head_default.a, null, products_jsx("title", {
      className: "jsx-1400608521"
    }, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0435 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438 \u043C\u0438\u043D\u0438-\u0442\u044D\u0446. \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\""), products_jsx("meta", {
      name: "description",
      content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0438 \u043C\u0438\u043D\u0438-\u0442\u044D\u0446 \u043D\u0430 \u0431\u0430\u0437\u0435 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u0435\u0439: MAN, LIEBHERR, MTU, JENBACHER \u0438 \u042F\u041C\u0417.",
      className: "jsx-1400608521"
    }), products_jsx("link", {
      rel: "canonical",
      href: "https://gmenergo.ru/products",
      className: "jsx-1400608521"
    })), products_jsx(Layout["a" /* default */], null, products_jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid products-promo"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-11 col-xl-5"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "promo-text-container"
    }, products_jsx("h1", {
      className: "jsx-1400608521" + " " + "header-min-colored"
    }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0438 \u043C\u0438\u043D\u0438-\u0422\u042D\u0421"), products_jsx("div", {
      className: "jsx-1400608521" + " " + "text-min-container"
    }, products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min"
    }, "\u041C\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0441\u0431\u043E\u0440\u043A\u043E\u0439 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 12 \u043B\u0435\u0442 \u0438 \u0437\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u0438 \u0441\u0445\u0435\u043C \u0441\u0431\u043E\u0440\u043A\u0438, \u0438 \u0441\u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0439\u0442\u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u043C\u0438\u043D\u0438\u043C\u0443\u043C\u0435 \u0437\u0430\u0442\u0440\u0430\u0442."), products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min"
    }, "\u0421\u0438\u043B\u043E\u0432\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0433\u0430\u0437\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439, \u043F\u0440\u043E\u0448\u043B\u0438 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u044E\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0432 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u044E\u0442 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0433\u0438\u0445 \u043B\u0435\u0442.")))), products_jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-xl-7"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "cards-plate"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-1"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, products_jsx("img", {
      src: "/images/icon-1.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), products_jsx("div", {
      className: "jsx-1400608521" + " " + "text-container "
    }, products_jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u043B\u044E\u0431\u044B\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0445.")))), products_jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-2"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, products_jsx("img", {
      src: "/images/icon-3.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), products_jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, products_jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435"), products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u0442\u0435\u043F\u043B\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F.")))), products_jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-3"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, products_jsx("img", {
      src: "/images/icon-2.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), products_jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, products_jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435"), products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0414\u0435\u0448\u0451\u0432\u043E\u0435 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u0446\u0438\u0438.")))), products_jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-4"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, products_jsx("img", {
      src: "/images/icon-4.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), products_jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, products_jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u0412\u044B\u0433\u043E\u0434\u0430"), products_jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 - \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F 50% \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C\u0438 \u043E\u0431\u044A\u0451\u043C\u0430\u043C\u0438 g\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F."))))))))), products_jsx(products_Catalog, {
      brand: brand
    }), products_jsx(ProductsTextSections, null), products_jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid promo-projects-product-page"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "col"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "section-wrapper"
    }, products_jsx(PromoProjects["a" /* default */], {
      itemsCount: 4
    })))))), products_jsx(ProductsUsage, null), products_jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid"
    }, products_jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, products_jsx(OtherNews["a" /* default */], {
      news: newsList["a" /* default */]
    })))), products_jsx(style_default.a, {
      id: "1400608521"
    }, [".enter{opacity:0;}", ".enter-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:1;}", ".enter-done{opacity:1;}", ".exit{opacity:1;}", ".exit-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:0;}", ".products-promo{background:linear-gradient(to right,#e1e1e1 0%,#b1b1b1 100%);padding-top:30px;padding-bottom:30px;box-shadow:inset 0 10px 15px -5px rgba(0,0,0,0.2);}", ".products-promo .text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:27px;line-height:32px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}", ".products-promo .text-container .text-min{display:block;margin-bottom:15px;line-height:18px;}", ".products-promo .cards-plate{display:none;}", ".products{padding-top:30px;}", ".products .category-header{font-family:var(--molot-font);font-size:20px;color:grey;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}", ".products .filter .filter-component{margin-bottom:40px;margin-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".products .filter .filter-component .filter-group{width:70%;}", ".products .filter .filter-component .filter-group .text-container{display:none;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;font-size:12px;bottom:-35px;left:0;color:var(--sub-color);font-weight:300;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;font-size:12px;bottom:-35px;right:0;color:var(--sub-color);font-weight:300;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;height:15px;border-radius:15px;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:15px;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}", ".products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(35%);-ms-transform:translateY(35%);transform:translateY(35%);}", ".products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:1px solid rgba(0,0,0,0.125);}", ".products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:22px;height:24px;background-color:transparent;border:none;margin-left:8px;cursor:pointer;outline:none;}", ".products .filter .filter-component .button-group .active{background-color:var(--accent-red);border-radius:3px;}", ".products .filter .filter-component .button-group .active .block{background-color:#fff !important;}", ".products .filter .filter-component .button-group .active .block-min,.block-max{background-color:#fff !important;}", ".products .filter .filter-component .button-group .plate-icon{position:relative;}", ".products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}", ".products .filter .filter-component .button-group .plate-icon .block-1{top:2px;left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-2{top:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-3{top:2px;right:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-7{bottom:2px;left:2px;}", ".products .filter .filter-component .button-group .plate-icon .block-8{bottom:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".products .filter .filter-component .button-group .plate-icon .block-9{bottom:2px;right:2px;}", ".products .filter .filter-component .button-group .list-icon{position:relative;}", ".products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}", ".products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;background-color:#bababa;width:12px;height:4px;}", ".products .filter .filter-component .button-group .list-icon .block-1{top:2px;left:2px;}", ".products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .list-icon .block-3{bottom:2px;left:2px;}", ".products .filter .filter-component .button-group .list-icon .block-4{top:2px;right:2px;}", ".products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".products .filter .filter-component .button-group .list-icon .block-6{bottom:2px;right:2px;}", ".products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;}", ".products .category-list .category-li{border-radius:30px;border:1px solid grey;cursor:pointer;margin:5px;}", ".products .category-list .category-li .category-link{display:block;width:100%;height:100%;font-weight:300;font-size:14px;text-transform:uppercase;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;color:grey;}", ".products .category-list .active{background-color:var(--accent-red);border:none;}", ".products .category-list .active .category-link{color:white;}", ".products .plate{padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".products .plate .product-card-container{width:100%;height:100%;}", ".products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:var(--border-radius);display:block;margin:0 auto;background:#fff;max-width:230px;width:100%;height:245px;box-shadow:var(--box-shadow);box-shadow:3px 3px 4px rgba(0,0,0,0.25);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}", ".products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}", ".products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;width:100%;overflow:hidden;border-radius:7px 7px 0 0;}", ".products .plate .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}", ".products .plate .product-card-container .product-card .text-container{height:120px;padding:15px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:10px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}", ".products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:#313131;display:block;padding-bottom:2px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:#313131;display:block;padding-bottom:2px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}", ".products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}", ".products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}", ".products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:0;display:grid;grid-template-columns:2fr 3fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}", ".products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;overflow:hidden;}", ".products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}", ".products .list .product-card-container .product-card .text-container{padding:0px 15px;display:block;}", ".products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:20px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}", ".products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:var(--sub-color);display:block;padding-bottom:2px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:13px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:black;display:block;line-height:14px;margin-bottom:5px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:var(--sub-color);display:block;padding-bottom:2px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:13px;font-weight:700;color:black;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;}", ".products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:9px;text-align:right;display:none;color:var(--accent-red);}", ".products-text{display:block;margin-top:15px;margin-bottom:15px;overflow:hidden;}", ".products-text .text-wrapper .header-min-colored{margin:0;}", ".products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}", ".products-text .text-wrapper .text{margin-top:15px;margin-bottom:15px;line-height:20px;}", ".promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}", ".promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;}", ".promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}", ".promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:5px;font-size:13px;line-height:15px;}", "@media (min-width:576px){.products-promo{padding-top:60px;padding-bottom:60px;}.products-promo .promo-text-container .header-min-colored{font-size:36px;line-height:42px;margin-bottom:30px;}.products-promo .promo-text-container .text-min-container .text-min{font-size:20px;line-height:24px;padding-bottom:15px;}.products .plate{grid-row-gap:0;}.products .plate .product-card-container{padding:25px 15px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;height:380px;}.products .plate .product-card-container .product-card .img-container{height:160px;overflow:hidden;}.products .plate .product-card-container .product-card .img-container .product-card-img{width:100%;height:auto;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:35px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:25px;line-height:22px;margin-bottom:20px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:grey;display:block;line-height:14px;margin-bottom:10px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:12px;text-align:right;display:block;}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:grid;grid-template-columns:1fr 2fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:13px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products-text{display:block;margin-top:30px;margin-bottom:30px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{font-size:16px;line-height:21px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{box-shadow:3px 3px 4px rgba(0,0,0,0.25);border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:22px;}}", "@media (min-width:768px){.products-promo{padding-bottom:30px;}.products-promo .promo-text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .cards-plate{margin-top:30px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.products-promo .cards-plate .card-container .card{border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;}.products-promo .cards-plate .card-container .card .icon-container{margin-bottom:15px;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:17px;color:white;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:none;font-size:12px;line-height:15px;margin-bottom:0;}.products .filter{margin-bottom:30px;}.products .category-header{display:block;position:absolute;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;top:475px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);left:-72px;color:#d5d5d5;font-size:48px;line-height:26px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;position:relative;}.products .category-list .category-li{height:50px;cursor:pointer;margin-top:5px;margin-bottom:5px;}.products .category-list .category-li:first-child{margin-top:0;}.products .category-list .category-li .category-link{text-align:center;line-height:40px;font-weight:700;font-size:16px;color:#313131;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .active .category-link{color:white;}.products .plate{padding-left:30px;padding-right:15px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .plate .product-card-container .product-card{z-index:0;border-radius:var(--border-radius);height:100%;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:120px;width:100%;overflow:hidden;}.products .plate .product-card-container .product-card .text-container{height:auto;padding:20px 10px 15px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:15px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:11px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:11px;font-size:10px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 3fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:10px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:12px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:12px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:14px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products-text .text-wrapper .text{font-size:19px;line-height:25px;color:var(--accent-grey);}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:17px;line-height:22px;}}", "@media (min-width:992px){.products-promo{padding-bottom:30px;}.products{padding-bottom:30px;}.products .category-header{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:48px;}.products .filter .filter-component{box-shadow:none;border-radius:10px;padding:30px 15px 25px;margin-bottom:0px;margin-top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fafafa;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .filter-block{margin-left:90px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{font-size:16px;position:absolute;bottom:-2px;left:-74px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{font-size:16px;position:absolute;bottom:-2px;right:-90px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:26px;height:28px;border:none;margin-left:15px;cursor:pointer;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:4px;right:4px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:4px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:4px;right:4px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-4{top:4px;right:4px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:4px;right:4px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;}.products .category-list .category-li{height:50px;cursor:pointer;margin:5px 0px;border-radius:10px;border:1px solid #7b7b7b;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li .category-link{text-align:center;background-color:rgba(255,255,255,0.05);line-height:40px;font-weight:500;font-size:16px;color:var(--accent-grey);-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li:hover{border:1px solid transparent;box-shadow:3px 3px 2px rgba(0,0,0,0.2);background-color:rgba(255,255,255,0.9);}.products .category-list .category-li:hover .category-link{color:var(--accent-grey);}.products .category-list .active{box-shadow:5px 10px 15px rgba(210,74,67,0.45);background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{display:grid;padding-left:25px;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 5fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 2fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:23px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:12px;text-align:right;display:none;color:var(--accent-red);}.products-text{padding-bottom:60px;padding-top:60px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:19px;margin-bottom:15px;line-height:24px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') -60px 0 no-repeat;background-size:cover;content:'';top:0;right:-100px;height:95%;width:50%;border-radius:15px;box-shadow:-15px 25px 0px rgba(0,0,0,0.125);background-color:#fff;}.products-text .text-wrapper .text{font-size:18px;line-height:24px;color:var(--accent-grey);}}", "@media (min-width:1200px){{.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card:hover;}.products-promo{background:url('/images/products/bg-products.jpg') 50% 0% no-repeat;background-size:cover;padding:30px;border-bottom:15px solid white;}.products-promo .promo-text-container{display:block;height:100%;position:relative;}.products-promo .promo-text-container .header-min-colored{position:absolute;display:block;width:770px;top:30px;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .promo-text-container .text-min-container{top:150px;position:absolute;}.products-promo .promo-text-container .text-min-container .text-min{color:rgb(41,41,41);line-height:20px;font-size:16px;margin-top:20px;}.products-promo .cards-plate{margin-top:0px;display:grid;grid-template:125px 125px 125px / 330px 330px;grid-gap:15px;}.products-promo .cards-plate .card-container{-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;border-radius:var(--border-radius);}.products-promo .cards-plate .card-container:hover{box-shadow:10px 10px 15px rgba(0,0,0,0.2);}.products-promo .cards-plate .card-container:hover .card{background:rgba(255,255,255,0.25);}.products-promo .cards-plate .card-container:active{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.products-promo .cards-plate .card-container .card{background:rgba(255,255,255,0.05);border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .icon-container{width:120px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .text-container{margin-left:15px;padding-left:15px;border-left:1px solid white;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:19px;color:#fafafa;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:19px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:block;font-size:14px;line-height:17px;margin-bottom:0;}.products-promo .cards-plate .container-1{grid-column:2 / 3;grid-row:1 / 2;}.products-promo .cards-plate .container-2{grid-column:2 / 3;grid-row:2 / 3;}.products-promo .cards-plate .container-3{grid-column:2 / 3;grid-row:3 / 4;}.products-promo .cards-plate .container-4{grid-column:1 / 2;grid-row:3 / 4;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.products-promo .cards-plate .container-4 .card{background:rgba(255,255,255,0.15);}.products{padding-top:18px;}.products .filter .filter-component{box-shadow:1px 1px 2px rgba(0,0,0,0.2);border-radius:10px;padding:20px 15px 17px 25px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;}.products .filter .filter-component .filter-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.products .filter .filter-component .filter-group .text-container{display:block;padding-right:25px;border-right:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .filter-group .text-container .filter-text{display:block;color:var(--sub-color);font-weight:700;font-size:15px;line-height:18px;margin-bottom:0px;}.products .filter .filter-component .filter-group .text-container .search-text{font-size:12px;color:var(--sub-color);}.products .filter .filter-component .filter-group .text-container .search-text-value{font-size:12px;color:var(--accent-red);}.products .filter .filter-component .filter-group .filter-block{width:45%;margin-left:110px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;bottom:-2px;left:-78px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;bottom:-2px;right:-85px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border:none;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.2);border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(231,172,117);opacity:1;height:22px;box-shadow:inset 1px 1px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(0,0,0,0.15), 1px 1px 1px rgba(0,0,0,0.2);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-7px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);text-shadow:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .category-list .category-li{height:50px;cursor:pointer;}.products .category-list .category-li .category-link{font-size:18px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-transform:uppercase;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.products .plate{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-auto-rows:auto;grid-gap:25px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;}.products .plate .product-card-container .product-card .img-container{height:197px;}.products .plate .product-card-container .product-card .img-container .product-card-img{max-width:100%;width:auto;height:100%;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:25px 20px 25px 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:21px;line-height:22px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#c4c4c4;display:block;font-weight:300;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:var(--accent-grey);display:block;line-height:14px;margin-bottom:12px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#c4c4c4;font-weight:300;display:block;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:var(--accent-grey);-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .product-card-details{color:var(--accent-red);width:100%;font-size:12px;text-align:right;display:block;font-weight:700;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:10px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 7fr;width:100%;height:100px;min-height:100px;padding-bottom:0px;border-radius:var(--border-radius);box-shadow:var(--card-shadow);border:none;-webkit-transition:box-shadow 0.15s ease-out;transition:box-shadow 0.15s ease-out;background-color:#fff;}.products .list .product-card-container .product-card:hover{box-shadow:0px 10px 20px rgba(0,0,0,0.15);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;height:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 3fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--noto-font);font-size:18px;font-weight:900;line-height:24px;color:var(--accent-grey);margin-bottom:0px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot{display:grid;grid-template-columns:2fr 1fr 1fr;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:300;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:900;color:var(--text);-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{padding:10px 15px;font-size:12px;line-height:14px;text-align:center;display:inline-block;color:white;background-color:var(--accent-red);border-radius:3px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') 0 0 no-repeat;background-size:cover;content:'';top:auto;bottom:15px;right:-100px;height:80%;width:40%;border-radius:15px;box-shadow:-15px 15px 0px rgba(0,0,0,0.125);box-shadow:-3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.products-text .text-wrapper .text{font-size:17px;line-height:25px;color:#313131;}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-gap:30px;}.proj-img{box-shadow:0 10px 15px rgba(0,0,0,0.225);}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:10px;overflow:hidden;-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:23px;}}", "@media (min-width:1500px){.products-text::before{display:block;position:absolute;background:url('/images/IMG_2.jpg') 25% 0 no-repeat;background-size:cover;content:'';top:0px;left:-100px;height:80%;width:18%;border-radius:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.promo-projects-product-page{margin-top:60px;margin-bottom:30px;padding-bottom:15px;}}"]));
  }

}

products_Products.getInitialProps = async function (context, query) {
  let brand = context.query.brand;

  if (context.query.category !== undefined) {
    const category = context.query.category.toUpperCase();
    const data = [];
    data.category = '';

    if (context.query && context.query.brand) {
      data.brand = context.query.brand;
    }

    for (const cat in productsList["a" /* default */]) {
      if (productsList["a" /* default */].hasOwnProperty(cat)) {
        const element = productsList["a" /* default */][cat];

        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }

    return {
      data,
      brand
    };
  } else {
    const category = 'MAN';
    let data = [];
    data.category = '';

    if (context.query && context.query.brand) {
      data.brand = context.query.brand;
    }

    for (const cat in productsList["a" /* default */]) {
      if (productsList["a" /* default */].hasOwnProperty(cat)) {
        const element = productsList["a" /* default */][cat];

        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }

    return {
      data,
      brand
    };
  }
};

/* harmony default export */ var products = __webpack_exports__["default"] = (products_Products);

/***/ }),

/***/ "b7GJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const productsList = [{
  category: 'MTU',
  products: [{
    label: 'MTU 700',
    price: '',
    category: 'MTU',
    id: 24,
    img: 'mtu700.jpg',
    galery: ['mtu700.jpg', 'mtu700.jpg', 'mtu700.jpg', 'mtu700.jpg'],
    as: '/mtu-700',
    motorMark: 'MTU 8V4000 GS L32',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 776,
    thermalPower: '886',
    electricEfficiency: '41,9',
    thermalEfficiency: '46,7',
    overallEfficiency: '88,6',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '175',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.',
    descriptionThree: 'Области использования: буровые платформы и скважины, шахты, очистные сооружения, в качестве резервного, вспомогательного или основного источника электроэнергии на предприятиях, в строительстве, административных и медицинских учреждениях, аэропортах, гостиницах, узлах связи, системах жизнеобеспечения и т. п. в автономном режиме или совместно с централизованными системами электроснабжения и тепла.\nПо сравнению с микротурбинами у газопоршневых электростанций высокие показатели КПД, отсутствие влияние на КПД температуры окружающего воздуха, меньшее потребление газа по сравнении с микротурбинами, соответственно меньше выхлопа в окружающую среду. Стоимость газопоршневой электростанции обходится более чем в 2 раза дешевле чем у микротурбин.'
  }, {
    label: 'MTU 800',
    price: '',
    category: 'MTU',
    id: 25,
    img: 'mtu800.jpg',
    galery: ['mtu800.jpg', 'mtu800.jpg', 'mtu800.jpg', 'mtu800.jpg'],
    as: '/mtu-800',
    motorMark: 'MTU 8V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 854,
    thermalPower: '891',
    electricEfficiency: '42,8',
    thermalEfficiency: '44,8',
    overallEfficiency: '87,6',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '199',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.',
    descriptionThree: 'Области использования: буровые платформы и скважины, шахты, очистные сооружения, в качестве резервного, вспомогательного или основного источника электроэнергии на предприятиях, в строительстве, административных и медицинских учреждениях, аэропортах, гостиницах, узлах связи, системах жизнеобеспечения и т. п. в автономном режиме или совместно с централизованными системами электроснабжения и тепла.\nПо сравнению с микротурбинами у газопоршневых электростанций высокие показатели КПД, отсутствие влияние на КПД температуры окружающего воздуха, меньшее потребление газа по сравнении с микротурбинами, соответственно меньше выхлопа в окружающую среду. Стоимость газопоршневой электростанции обходится более чем в 2 раза дешевле чем у микротурбин.'
  }, {
    label: 'MTU 1000',
    price: '',
    category: 'MTU',
    id: 26,
    img: 'mtu1000.jpg',
    galery: ['mtu1000.jpg', 'mtu1000.jpg', 'mtu1000.jpg', 'mtu1000.jpg'],
    as: '/mtu-1000',
    motorMark: 'MTU 8V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 1013,
    thermalPower: '969',
    electricEfficiency: '43,4',
    thermalEfficiency: '42,6',
    overallEfficiency: '86',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '273',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1100',
    price: '',
    category: 'MTU',
    id: 27,
    img: 'mtu1100.jpg',
    galery: ['mtu1100.jpg', 'mtu1100.jpg', 'mtu1100.jpg', 'mtu1100.jpg'],
    as: '/mtu-1100',
    motorMark: 'MTU 12V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1169,
    thermalPower: '1228',
    electricEfficiency: '42,8',
    thermalEfficiency: '45,0',
    overallEfficiency: '87,8',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '273',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1200',
    price: '',
    category: 'MTU',
    id: 28,
    img: 'mtu1200.jpg',
    galery: ['mtu1200.jpg', 'mtu1200.jpg', 'mtu1200.jpg', 'mtu1200.jpg'],
    as: '/mtu-1200',
    motorMark: 'MTU 12V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1286,
    thermalPower: '1323',
    electricEfficiency: '43,2',
    thermalEfficiency: '44,5',
    overallEfficiency: '87,7',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '298',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1500',
    price: '',
    category: 'MTU',
    id: 29,
    img: 'mtu1500.jpg',
    galery: ['mtu1500.jpg', 'mtu1500.jpg', 'mtu1500.jpg', 'mtu1500.jpg'],
    as: '/mtu-1500',
    motorMark: 'MTU 12V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1521,
    thermalPower: '1403',
    electricEfficiency: '44,3',
    thermalEfficiency: '40,8',
    overallEfficiency: '85,1',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '344',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1600',
    price: '',
    category: 'MTU',
    id: 30,
    img: 'mtu1600.jpg',
    galery: ['mtu1600.jpg', 'mtu1600.jpg', 'mtu1600.jpg', 'mtu1600.jpg'],
    as: '/mtu-1600',
    motorMark: 'MTU 16V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1560,
    thermalPower: '1662',
    electricEfficiency: '42,8',
    thermalEfficiency: '45,6',
    overallEfficiency: '88,4',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '365',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1700',
    price: '',
    category: 'MTU',
    id: 31,
    img: 'mtu1700.jpg',
    galery: ['mtu1700.jpg', 'mtu1700.jpg', 'mtu1700.jpg', 'mtu1700.jpg'],
    as: '/mtu-1700',
    motorMark: 'MTU 16V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1718,
    thermalPower: '1795',
    electricEfficiency: '43',
    thermalEfficiency: '45',
    overallEfficiency: '88',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '399',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 2000',
    price: '',
    category: 'MTU',
    id: 32,
    img: 'mtu2000.jpg',
    galery: ['mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg'],
    as: '/mtu-2000',
    motorMark: 'MTU 16V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 2028,
    thermalPower: '1901',
    electricEfficiency: '44,3',
    thermalEfficiency: '41,6',
    overallEfficiency: '85,9',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '457',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 2145',
    price: '',
    category: 'MTU',
    id: 33,
    img: 'mtu2000.jpg',
    galery: ['mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg'],
    as: '/mtu-2000',
    motorMark: 'MTU 20V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 2145,
    thermalPower: '2239',
    electricEfficiency: '43',
    thermalEfficiency: '44,9',
    overallEfficiency: '87,9',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '499',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'MAN',
  products: [{
    label: 'MAN 200',
    price: '9 000 000',
    category: 'MAN',
    id: 0,
    img: 'MAN200.jpg',
    galery: ['MAN200.jpg', 'MAN200.jpg', 'MAN200.jpg', 'MAN200.jpg'],
    as: '/man-200',
    motorMark: 'MAN E 3262 E 302',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1',
    voltage: '400',
    electricPower: 200,
    thermalPower: '316',
    electricEfficiency: '36,7',
    thermalEfficiency: '56,3',
    overallEfficiency: '93',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '59.6',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 250',
    price: '9 500 000',
    category: 'MAN',
    id: 1,
    img: 'MAN250.jpg',
    galery: ['MAN250.jpg', 'MAN250.jpg', 'MAN250.jpg', 'MAN250.jpg'],
    as: '/man-250',
    motorMark: 'MAN E 3262 E 302',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1',
    voltage: '400',
    electricPower: 250,
    thermalPower: '380',
    electricEfficiency: '38',
    thermalEfficiency: '54,8',
    overallEfficiency: '92,8',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '67',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 300',
    price: '11 600 000',
    category: 'MAN',
    id: 2,
    img: 'MAN300.jpg',
    galery: ['MAN300.jpg', 'MAN300.jpg', 'MAN300.jpg', 'MAN300.jpg'],
    as: '/man-300',
    motorMark: 'MAN E 3268 LE 242',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,7',
    voltage: '400',
    electricPower: 300,
    thermalPower: '350',
    electricEfficiency: '41,7',
    thermalEfficiency: '47,5',
    overallEfficiency: '89,2',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '78',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 350',
    price: '12 000 000',
    category: 'MAN',
    id: 3,
    img: 'MAN350.jpg',
    galery: ['MAN350.jpg', 'MAN350.jpg', 'MAN350.jpg', 'MAN350.jpg'],
    as: '/man-350',
    motorMark: 'MAN E 3268 LE 202',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,69',
    voltage: '400',
    electricPower: 350,
    thermalPower: '445',
    electricEfficiency: '40,2',
    thermalEfficiency: '50,1',
    overallEfficiency: '90,3',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '91',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 430',
    price: '',
    category: 'MAN',
    id: 4,
    img: 'MAN500.jpg',
    galery: ['MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg'],
    as: '/man-430',
    motorMark: 'MAN E3262 LE232',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,6',
    voltage: '400',
    electricPower: 430,
    thermalPower: '505',
    electricEfficiency: '39,7',
    thermalEfficiency: '50,6',
    overallEfficiency: '90,3',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '107',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 530',
    price: '',
    category: 'MAN',
    id: 5,
    img: 'MAN500.jpg',
    galery: ['MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg'],
    as: '/man-500',
    motorMark: 'MAN E3262 LE 202',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,63',
    voltage: '400, 6 300, 10 500',
    electricPower: 500,
    thermalPower: '652',
    electricEfficiency: '40,6',
    thermalEfficiency: '49,8',
    overallEfficiency: '90,4',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '135',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'LIEBHERR',
  products: [{
    label: 'LIEBHERR 230',
    price: '',
    category: 'LIEBHERR',
    id: 10,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-230',
    motorMark: 'Liebherr G946',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,74',
    voltage: '400',
    electricPower: 230,
    thermalPower: '262',
    electricEfficiency: '41,5',
    thermalEfficiency: '44,2',
    overallEfficiency: '85,7',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '59.2',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 300',
    price: '',
    category: 'LIEBHERR',
    id: 11,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-300',
    motorMark: 'Liebherr G9508',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,7',
    voltage: '400',
    electricPower: 300,
    thermalPower: '340',
    electricEfficiency: '40',
    thermalEfficiency: '42',
    overallEfficiency: '82',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '78',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 500',
    price: '',
    category: 'LIEBHERR',
    id: 12,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-500',
    motorMark: 'Liebherr G9512',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.7',
    voltage: '400, 6 300, 10 500',
    electricPower: 500,
    thermalPower: '652',
    electricEfficiency: '40,6',
    thermalEfficiency: '49,8',
    overallEfficiency: '90,4',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '135',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 1000',
    price: '',
    category: 'LIEBHERR',
    id: 13,
    img: 'liebherr-1000.jpg',
    galery: ['liebherr-1000-1.jpg', 'liebherr-1000-2.jpg', 'liebherr-1000-1.jpg', 'liebherr-1000-2.jpg'],
    as: '/LIEBHERR-1000',
    motorMark: 'Liebherr G9620',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.7',
    voltage: '400, 6 300, 10 500',
    electricPower: 1000,
    thermalPower: '1 100',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '20-200',
    nominalGazConsumption: '265',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'YAMZ',
  products: [{
    label: 'ЯМЗ 100',
    price: '3 500 000',
    category: 'YAMZ',
    id: 20,
    img: 'YAMZ100.jpg',
    galery: ['YAMZ100.jpg', 'yamz-100-1.jpg', 'YAMZ100.jpg', 'yamz-100-1.jpg'],
    as: '/yamz-100',
    motorMark: 'ЯМЗ 536 CNG',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 100,
    thermalPower: '100',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '31.9',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 140',
    price: '4 000 000',
    category: 'YAMZ',
    id: 21,
    img: 'YAMZ140.jpg',
    galery: ['YAMZ140.jpg', 'YAMZ140.jpg', 'YAMZ140.jpg', 'YAMZ140.jpg'],
    as: '/yamz-140',
    motorMark: 'ЯМЗ 536 CNG',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 140,
    thermalPower: '190',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '40',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 200',
    price: '4 500 000',
    category: 'YAMZ',
    id: 22,
    img: 'YAMZ200.jpg',
    galery: ['YAMZ200.jpg', 'YAMZ200.jpg', 'YAMZ200.jpg', 'YAMZ200.jpg'],
    as: '/yamz-200',
    motorMark: 'ТМЗ 8425',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 200,
    thermalPower: '280',
    electricEfficiency: '29',
    thermalEfficiency: '40,6',
    overallEfficiency: '69,6',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '66',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 300',
    price: '',
    category: 'YAMZ',
    id: 23,
    img: 'YAMZ300.jpg',
    galery: ['YAMZ300.jpg', 'YAMZ300.jpg', 'YAMZ300.jpg', 'YAMZ300.jpg'],
    as: '/yamz-300',
    motorMark: 'ЯМЗ 850.10',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 280,
    thermalPower: '450',
    electricEfficiency: '30',
    thermalEfficiency: '47',
    overallEfficiency: '77',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '90',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'JENBACHER',
  products: [{
    label: 'JENBACHER 630',
    price: '',
    category: 'JENBACHER',
    id: 40,
    img: 'jenbacher-630.jpg',
    galery: ['jenbacher630.jpg', 'jenbacher630.jpg', 'jenbacher630.jpg', 'jenbacher630.jpg'],
    as: '/jenbacher-630',
    motorMark: 'GE JENBACHER J312 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 635,
    thermalPower: '739',
    electricEfficiency: '40.8',
    thermalEfficiency: '47.4',
    overallEfficiency: '88.2',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '2-4',
    nominalGazConsumption: '164',
    oilconsumption: '0.2',
    airconsumption: '3279',
    noiseLevel: '123',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 1000',
    price: '',
    category: 'JENBACHER',
    id: 41,
    img: 'jenbacher-1000.jpg',
    galery: ['jenbacher-1000.jpg', 'jenbacher-1000.jpg', 'jenbacher-1000.jpg', 'jenbacher-1000.jpg'],
    as: '/jenbacher-1000',
    motorMark: 'GE JENBACHER J320 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 1067,
    thermalPower: '1241',
    electricEfficiency: '40.9',
    thermalEfficiency: '47.6',
    overallEfficiency: '88.5',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '2-4',
    nominalGazConsumption: '274',
    oilconsumption: '0.33',
    airconsumption: '5 485',
    noiseLevel: '130',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 1500',
    price: '',
    category: 'JENBACHER',
    id: 42,
    img: 'jenbacher-1500.jpg',
    galery: ['jenbacher-1500.jpg', 'jenbacher-1500.jpg', 'jenbacher-1500.jpg', 'jenbacher-1500.jpg'],
    as: '/jenbacher-1500',
    motorMark: 'GE JENBACHER J420 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 1497,
    thermalPower: '1546',
    electricEfficiency: '43.3',
    thermalEfficiency: '44.7',
    overallEfficiency: '88.0',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '0,12-0,2',
    nominalGazConsumption: '364',
    oilconsumption: '0.31',
    airconsumption: '7 831',
    noiseLevel: '123',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 2000',
    price: '',
    category: 'JENBACHER',
    id: 43,
    img: 'jenbacher-2000.jpg',
    galery: ['jenbacher-2000.jpg', 'jenbacher-2000.jpg', 'jenbacher-2000.jpg', 'jenbacher-2000.jpg'],
    as: '/jenbacher-2000',
    motorMark: 'GE JENBACHER J612 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 2004,
    thermalPower: '1 883',
    electricEfficiency: '45.5',
    thermalEfficiency: '42.8',
    overallEfficiency: '88.3',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '4-8',
    nominalGazConsumption: '464',
    oilconsumption: '0.41',
    airconsumption: '10 906',
    noiseLevel: '80',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 4000',
    price: '',
    category: 'JENBACHER',
    id: 44,
    img: 'jenbacher-4000.jpg',
    galery: ['jenbacher-4000.jpg', 'jenbacher-4000.jpg', 'jenbacher-4000.jpg', 'jenbacher-4000.jpg'],
    as: '/jenbacher-4000',
    motorMark: 'GE JENBACHER J624 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 4404,
    thermalPower: '4 050 ',
    electricEfficiency: '46.6',
    thermalEfficiency: '42.9',
    overallEfficiency: '89.5',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '6-8',
    nominalGazConsumption: '994',
    oilconsumption: '0.9',
    airconsumption: '994',
    noiseLevel: '131',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'TDPS',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}].map(link => {
  link.key = `nav-link-${link.id}-${link.electricPower}`;
  return link;
});
/* harmony default export */ __webpack_exports__["a"] = (productsList);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "jKLG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
}, {
  label: "Энергоцентр для ТРЦ Виконда (500 кВт)",
  id: 23,
  img: 'news/GPES-500.jpg',
  category: 'Наука и техника',
  created_at: '13.11.2020',
  updated_at: '24.11.2020:11.35',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» завершила комплекс работ по запуску автономного энергоцентра на базе газопоршневых когенерационных установок мощностью 500 кВт для Торгово-развлекательного центра «Виконда» в г. Рыбинске.',
  description: 'Компания «Газовые машины» завершила комплекс работ по запуску автономного энергоцентра на базе газопоршневых когенерационных установок мощностью 500 кВт для Торгово-развлекательного центра «Виконда» в г. Рыбинске.<br><br>Инженерной службой нашей компании разработан уникальный проект, позволяющий эксплуатировать оборудование в условиях плотной городской застройки, не нарушая требования экологического законодательства по шуму и вредным выбросам.<br><br>Для снижения уровня шумового давления оборудование смонтировано в бетонные модуля заводской готовности, также применены высокоэффективные глушители компании «Апровис» (Германия). Такое решение позволило обеспечить уровень шума менее 70 Дб. в 1 метре от энергоцентра.<br><br>Разработанная нашими специалистами проектная документация успешно прошла государственную экспертизу.<br><br>В качестве основного генерирующего оборудования выбраны газовые электростанции MAN, единичной мощностью 500 кВт. Эти машины отличаются легендарной надежностью  и невысокой стоимостью обслуживания порядка 0,4 коп. на 1 кВт/час выработанной электрической энергии.<br><br>Применение технологии когенерации позволяет повысить КПД газовой электростанции до 90 %. По результатам трех месяцев эксплуатации энергоцентра, собственником принято решение отказаться от эксплуатации блочно-модульной котельной, ранее отапливавшей часть помещений энергоцентра.<br><br>Нашими специалистами осуществляется круглосуточный мониторинг работы энергоцентра и его гарантийное и сервисное обслуживание.<br><br>Полный цикл сборки газовых электростанции с двигателями MAN осуществляется на производственных площадях компании «Газовые машины» в г. Ярославле, по адресу: пр. Авиаторов 155. Посетить его Вы можете в любое удобное для Вас время. Сборка электростанций осуществляется строго в соответствии  с требованиями концерна MAN при проведении регулярного инспекционного контроля со стороны наших немецких партнеров.<br><br>На сегодняшний день гарантия на газовые электростанции с двигателями MAN составляет 36 месяцев.<br><br>'
}, {
  label: "Газовые мини-ТЭС MAN производства «Газовые машины»",
  id: 24,
  img: 'news/mini-tec-man.jpg',
  category: 'Наука и техника',
  created_at: '03.12.2020',
  updated_at: '03.12.2020:12.35',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» является авторизованным партнером концерна MAN по производству газопоршневых мини-ТЭС с двигателями MAN',
  description: 'Мини-ТЭС серии MAN выпускаются по согласованной с MAN документации под строгим контролем технических специалистов концерна MAN. Ежегодно проводится аудит производства инженерами концерна MAN, по результатам которого выдается сертификат подтверждающий качество, выпускаемых нами мини-ТЭС MAN. <br/><br/>MAN Engines производит газовые двигатели для когенерационных установок мощностью от 37 кВт до 500 кВт на природном газе и от 68 кВт до 500 кВт на специальном газом (биогаз, свалочный газ, канализационный газ). Двигатели МАN, разработанные специально для  работы на  природном и специальных газах, обладают высочайшей надежностью и самым  высоким КПД. Оптимальный процесс сгорания позволяет достигать общей эффективности свыше 90 процентов. Благодаря широкому ассортименту атмосферных двигателей с невысокой стоимостью технического обслуживания самые низкие уровни выбросов могут быть достигнуты за счет использования 3-ходового каталитического нейтрализатора. <br/><br/>Газовые двигатели МАN положительно зарекомендовали себя благодаря своей надежности в сочетании с устойчивой работой в период пиковых нагрузок и непрерывной работой,  в сельском хозяйстве, муниципальной сфере, в гостиницах и больницах, а также во многих других отраслях. Длинные интервалы обслуживания и высокий срок службы газовых двигателей МАN обеспечивают низкую общую стоимость владения. Технические характеристики двигателей полностью подтверждены ресурсными испытаниями. Двигатели MAN для работы природного газа и специального газа (биогаз, свалочный газ, канализационный газ) гарантируют безопасность применения. Испытанные и оптимизированные по результатам в полевых испытаний, они доказывают свою надежность при эксплуатации в самых неблагоприятных условиях окружающей среды. <br/><br/> Выбирая двигатель МАN Вы можете быть уверены в использовании полностью разработанного продукта, на который вы можете рассчитывать. Мы знаем: каждое решение должно быть индивидуальным, так как задачи разные. Компетенция компании «Газовые машины» дает Вам возможность применения различных систем управления или дополнительных компонент, что позволяет выбрать наилучший вариант компоновки энергоустановки для Вашего объекта с учетом любых индивидуальных особенностей. <br/><br/> Компактность с высокой производительностью: газовые мини-ТЭС МАN производства нашей компании объединяют оба эти преимущества. При работе в непрерывном режиме, они гарантированно поставляют энергию, в течение всего длительного срока службы. При выполнения регламента обслуживания гарантированный срок службы мини-ТЭС МАN до капитального ремонта составляет 50 000 моточасов. Общий ресурс мини-ТЭС МАN составляет не менее 100 000 моточасов. Конструкция мини-ТЭС, от компании Газовые машины, позволяет легко поддерживать их в исправном состоянии, оперативно, эффективно, и по низким ценам.<br/><br/>Газовые мини-ТЭС МАN имеют низкий уровень загрязнения окружающей среды. В соответствии со строгими директивами по выбросам TA-Luft и TA-Luft½, очистка выхлопных газов зачастую даже не требуется. На специальных газовых двигателях, предназначенных для работы на биогазе, может потребоваться применение каталитического нейтрализатора. 3 - полюсный каталитический нейтрализатор достаточен для атмосферных двигателей, работающих на природном газе. Таким образом, вы можете рассчитать низкие затраты на покупку. <br/><br/>Энергоснабжение является важным компонентом экономического успеха. Поэтому, конечно, вы всегда можете рассчитывать на нашу компанию после покупки, если вы нуждаетесь в помощи. <br/><br/>МАN и «Газовые машины» предлагают вам, индивидуальную концепцию обслуживания. Наши компании регулярно проводят учебные курсы для обучения персонала обслуживанию когенерационных установок с применением двигателей МАN, используя глубокие и проверенные знания МАN: надежные и эффективные – так же, как газовый двигатель МАN.'
}, {
  label: "Пуск энергоцентра АО «Элдин»",
  id: 25,
  img: 'news/gruppa-1.png',
  category: 'Наука и техника',
  created_at: '10.12.2020',
  updated_at: '10.12.2020:12.22',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» запустила в эксплуатацию автономный энергоцентр для нужд АО «Элдин»',
  description: 'Компания «Газовые машины» запустила в эксплуатацию автономный энергоцентр для нужд АО «Элдин». В составе энергоцентра 4 модуля с газопоршневыми когенерационными электростанциями MAN мощностью 500 кВт каждая.<br/><br/>Энергоцентр в автоматическом режиме обеспечивает электрической и тепловой энергией предприятие в объеме 2 МВт.<br/><br/>Проект реализован компанией «Газовые машины» на условиях «под ключ». Все работы, начиная от разработки и согласования проектно-сметной документации, производства комплекта оборудования (включая модульную трансформаторную подстанция), строительно-монтажных и пуско-наладочных работ.<br/><br/>Ожидаемая экономия от внедрения энергоцентра для АО «Элдин» составит не менее 38 млн. руб. в год, при инвестиционных затратах 44 тыс. рублей на 1 кВт/ч.<br/><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/aXzy1N9zX04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}].map(link => {
  link.key = `nav-link-${link.id}-${link.id}`;
  return link;
});
/* harmony default export */ __webpack_exports__["a"] = (newsList);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "oLQh":
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "qOIg":
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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "vHBd":
/***/ (function(module, exports) {

module.exports = require("react-yandex-metrika");

/***/ }),

/***/ "vu88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (serviceList);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yl2K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (projectList);

/***/ })

/******/ });