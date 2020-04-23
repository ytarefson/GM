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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yjHN");


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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "tXcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
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

/* harmony default export */ __webpack_exports__["a"] = (Head);

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

/***/ "yjHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/head.js
var head = __webpack_require__("tXcZ");

// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/common/TextFieldGroup.js
var __jsx = external_react_default.a.createElement;



const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return __jsx("div", {
    className: "form-group pt-1 pb-0"
  }, label ? __jsx("label", {
    className: "label-title",
    htmlFor: name
  }, label) : "", __jsx("input", {
    type: type,
    className: external_classnames_default()("form-control form-control-lg", {
      "is-invalid": error
    }),
    placeholder: placeholder,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled
  }), info && __jsx("small", {
    className: "from-text text-muted"
  }, info), error && __jsx("div", {
    className: "invalid-feedback"
  }, error));
};

TextFieldGroup.defaultProps = {
  type: "text"
};
/* harmony default export */ var common_TextFieldGroup = (TextFieldGroup);
// CONCATENATED MODULE: ./components/common/RadioInputGroup.js
var RadioInputGroup_jsx = external_react_default.a.createElement;




class RadioInputGroup_RadioInputGroup extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      other: '',
      ckecked: false
    };
    this.onChange = this.onChange.bind(this);
    this.onOtherSelect = this.onOtherSelect.bind(this);
  }

  onChange(e) {
    this.setState({
      other: e.target.value
    });
    this.props.onSelect(e);
  }

  onOtherSelect(e) {
    this.setState({
      other: e.target.value
    });
  }

  render() {
    const {
      values,
      name,
      label,
      onSelect,
      otherlabel,
      askother,
      type,
      error
    } = this.props;
    let radioInputContent;
    radioInputContent = values.map((item, index) => RadioInputGroup_jsx("div", {
      className: "radio-input-field",
      key: `radioItem-${index}`
    }, RadioInputGroup_jsx("input", {
      type: type,
      id: `item-${item}`,
      name: name,
      value: item,
      onClick: onSelect.bind(this)
    }), RadioInputGroup_jsx("label", {
      htmlFor: `item-${item}`
    }, item)));
    return RadioInputGroup_jsx("div", {
      className: "radio-input-group"
    }, RadioInputGroup_jsx("span", {
      className: "label-title"
    }, label), radioInputContent, askother && RadioInputGroup_jsx("div", null, RadioInputGroup_jsx("div", {
      className: "radio-input-field"
    }, RadioInputGroup_jsx("input", {
      className: "radio-input-div",
      type: type,
      id: `${otherlabel}-other`,
      name: name,
      value: this.state.other //onClick={onSelect.bind(this)}

    }), RadioInputGroup_jsx("label", {
      className: "radio-label-div",
      htmlFor: `${otherlabel}-other`
    }, otherlabel)), RadioInputGroup_jsx(common_TextFieldGroup, {
      name: name,
      placeholder: "\u0414\u0440\u0443\u0433\u043E\u0435",
      value: this.state.other,
      onChange: this.onChange,
      error: error
    })), error && RadioInputGroup_jsx("div", {
      className: "invalid-feedback"
    }, error));
  }

}

RadioInputGroup_RadioInputGroup.defaultProps = {
  type: 'radio'
};
/* harmony default export */ var common_RadioInputGroup = (RadioInputGroup_RadioInputGroup);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./actions/types.js
// All action types should live here
const GET_ERRORS = 'GET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./actions/formActions.js


 // validate email

const validateFormData = data => dispatch => {
  external_axios_default.a.post('/api/form-validation', data).then(res => {
    console.log(res);
    console.log('Successfully sent');
    router_default.a.push('/confirm-askform');
  }).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
};
// CONCATENATED MODULE: ./components/form/AskForm.js

var AskForm_jsx = external_react_default.a.createElement;






class AskForm_AskForm extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      organizationname: '',
      organizationadres: '',
      personname: '',
      personstatus: '',
      personemail: '',
      personphone: '',
      personmobile: '',
      locationparams: '',
      projectmountadres: '',
      projectdescription: '',
      operationmode: '',
      proposedmodel: '',
      electricpower: '',
      connectiontype: '',
      minimalload: '',
      energyloadgraph: '',
      installationsettings: '',
      fueltype: '',
      utilsystem: '',
      reqheatpower: '',
      chefmontage: '',
      stafflearning: '',
      otherworks: '',
      gasprice: '',
      currentenergytarif: '',
      currentheattarif: '',
      commentary: '',
      errors: {}
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSelect(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const askFormData = {
      organizationname: this.state.organizationname,
      organizationadres: this.state.organizationadres,
      personname: this.state.personname,
      personstatus: this.state.personstatus,
      personemail: this.state.personemail,
      personphone: this.state.personphone,
      personmobile: this.state.personmobile,
      locationparams: this.state.locationparams,
      projectmountadres: this.state.projectmountadres,
      projectdescription: this.state.projectdescription,
      operationmode: this.state.operationmode,
      proposedmodel: this.state.proposedmodel,
      electricpower: this.state.electricpower,
      connectiontype: this.state.connectiontype,
      minimalload: this.state.minimalload,
      energyloadgraph: this.state.energyloadgraph,
      installationsettings: this.state.installationsettings,
      fueltype: this.state.fueltype,
      utilsystem: this.state.utilsystem,
      reqheatpower: this.state.reqheatpower,
      chefmontage: this.state.chefmontage,
      stafflearning: this.state.stafflearning,
      otherworks: this.state.otherworks,
      gasprice: this.state.gasprice,
      currentenergytarif: this.state.currentenergytarif,
      currentheattarif: this.state.currentheattarif,
      commentary: this.state.commentary
    };
    this.props.validateFormData(askFormData);
    window.scrollTo(0, 0);
  }

  render() {
    const {
      errors
    } = this.state;
    return AskForm_jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-4153203840"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel ask-form"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("h1", {
      className: "jsx-4153203840" + " " + "header-min-colored mb-2"
    }, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel razdel-contacts"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("span", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "1. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043B\u0438\u0446\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0435\u0433\u043E \u043E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_TextFieldGroup, {
      name: "organizationname",
      placeholder: "\u041E\u041E\u041E '\u0412\u0430\u0448\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F'",
      label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:",
      value: this.state.organizationname,
      onChange: this.onChange,
      error: errors.organizationname,
      info: ""
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "organizationadres",
      placeholder: "123456 \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C, \u0434\u043E\u043C, \u043A\u043E\u0440\u043F\u0443\u0441, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435...",
      label: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:",
      value: this.state.organizationadres,
      onChange: this.onChange,
      error: errors.organizationadres
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "personname",
      placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447",
      label: "\u0424\u0418\u041E:",
      value: this.state.personname,
      onChange: this.onChange,
      error: errors.personname
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "personstatus",
      placeholder: "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
      label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:",
      value: this.state.personstatus,
      onChange: this.onChange,
      error: errors.personstatus
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "personemail",
      placeholder: "mail@mail.ru",
      label: "e-mail:",
      value: this.state.personemail,
      onChange: this.onChange,
      error: errors.personemail
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "personphone",
      placeholder: "8-4852-12-34-56",
      label: "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:",
      value: this.state.personphone,
      onChange: this.onChange,
      error: errors.personphone
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "personmobile",
      placeholder: "8-903-123-45-67",
      label: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:",
      value: this.state.personmobile,
      onChange: this.onChange,
      error: errors.personmobile
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel project-description"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("h2", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "2. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_TextFieldGroup, {
      name: "locationparams",
      placeholder: "\u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435, \u0436\u0438\u043B\u0430\u044F \u0437\u043E\u043D\u0430, \u0434\u0440.",
      label: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043C\u0435\u0441\u0442\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F:",
      value: this.state.locationparams,
      onChange: this.onChange,
      error: errors.locationparams
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "projectmountadres",
      placeholder: "\u0430\u0434\u0440\u0435\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",
      label: "\u0410\u0434\u0440\u0435\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 (\u0433\u043E\u0440\u043E\u0434 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438): ",
      value: this.state.projectmountadres,
      onChange: this.onChange,
      error: errors.projectmountadres
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "projectdescription",
      placeholder: "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
      label: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435: ",
      value: this.state.projectdescription,
      onChange: this.onChange,
      error: errors.projectdescription
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel parametres"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("h2", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "3. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_RadioInputGroup, {
      name: "operationmode",
      label: "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F: ",
      values: ['Резервный генератор (аварийный)', 'Посменный длительный режим', 'Постоянный режим работы (круглосуточный)'],
      askother: true,
      otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0439",
      onSelect: this.onSelect,
      error: errors.operationmode
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "proposedmodel",
      placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \xAB2  \u043F\u043E 400 \u043A\u0412\u0442\xBB: ",
      label: "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C (\u0435\u0434\u0438\u043D\u0438\u0447\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C) \r \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A: ",
      value: this.state.proposedmodel,
      onChange: this.onChange,
      error: errors.proposedmodel
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "electricpower",
      placeholder: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043A\u0412\u0442): ",
      label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043A\u0412\u0442): ",
      value: this.state.electricpower,
      onChange: this.onChange,
      error: errors.electricpower
    }), AskForm_jsx(common_RadioInputGroup, {
      name: "connectiontype",
      label: "\u0412\u0438\u0434 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F: ",
      values: ['Один генератор на изолированную нагрузку (изолированно от централизованной сети)', 'Параллельная работа нескольких генераторов на общую нагрузку (изолированно от сети )', 'Параллельная работа с централизованной сетью (с запретом экспорта электроэнергии в сеть)'],
      askother: true,
      otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0435",
      onSelect: this.onSelect,
      error: errors.connectiontype
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "minimalload",
      placeholder: "\u043A\u0412\u0442",
      label: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430: ",
      value: this.state.minimalload,
      onChange: this.onChange,
      error: errors.minimalload
    }), AskForm_jsx(common_RadioInputGroup, {
      name: "installationsettings",
      label: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A: ",
      values: ['Поставка в открытом исполнении (монтаж в здании)', 'Поставка в шумозащитном кожухе на улице', 'Поставка в шумозащитном кожухе в здании', 'В контейнере (монтажная площадка расположена на улице)'],
      askother: true,
      otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0435",
      onSelect: this.onSelect,
      error: errors.installationsettings
    }), AskForm_jsx(common_RadioInputGroup, {
      name: "fueltype",
      label: "\u0422\u0438\u043F \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0433\u043E \u0442\u043E\u043F\u043B\u0438\u0432\u0430: ",
      values: ['Магистральный природный газ (метан)'],
      askother: true,
      otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0439 (\u043F\u043E\u043F\u0443\u0442\u043D\u044B\u0439 \u0433\u0430\u0437, \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u043F\u0430\u043D-\u0431\u0443\u0442\u0430\u043D, \u0431\u0438\u043E\u0433\u0430\u0437, \u0434\u0440.) \r (\u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u0430\u0437\u0430 \u043A\u0440\u043E\u043C\u0435 \u043C\u0435\u0442\u0430\u043D\u0430, \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432)\r ",
      onSelect: this.onSelect,
      error: errors.fueltype
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel heat-params"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("h2", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "4. \u0422\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_TextFieldGroup, {
      name: "utilsystem",
      placeholder: "\u0434\u0430 / \u043D\u0435\u0442",
      label: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0422\u0435\u043F\u043B\u0430 (\u0421\u0423\u0422): ",
      value: this.state.utilsystem,
      onChange: this.onChange,
      error: errors.utilsystem
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "reqheatpower",
      placeholder: "\u043A\u0412\u0442",
      label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ",
      value: this.state.reqheatpower,
      onChange: this.onChange,
      error: errors.reqheatpower
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel add-works"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("h2", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "5. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_TextFieldGroup, {
      name: "chefmontage",
      placeholder: "\u0428\u0435\u0444-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u041F\u0443\u0441\u043A\u043E-\u043D\u0430\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B: ",
      label: "\u0428\u0435\u0444-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u041F\u0443\u0441\u043A\u043E-\u043D\u0430\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B: ",
      value: this.state.chefmontage,
      onChange: this.onChange,
      error: errors.chefmontage
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "stafflearning",
      placeholder: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430: ",
      label: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430: ",
      value: this.state.stafflearning,
      onChange: this.onChange,
      error: errors.stafflearning
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "otherworks",
      placeholder: "\u041F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438: ",
      label: "\u041F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438: ",
      value: this.state.otherworks,
      onChange: this.onChange,
      error: errors.otherworks
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel economic-params"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "razdel"
    }, AskForm_jsx("h2", {
      className: "jsx-4153203840" + " " + "razdel-title"
    }, "6. \u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"), AskForm_jsx("span", {
      className: "jsx-4153203840" + " " + "title-description"
    }, "(\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u043E-\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F)"), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "fields"
    }, AskForm_jsx(common_TextFieldGroup, {
      name: "gasprice",
      placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C 1000 \u043C3 \u0433\u0430\u0437\u0430 (\u0440\u0443\u0431./1000 \u043C3): ",
      label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C 1000 \u043C3 \u0433\u0430\u0437\u0430 (\u0440\u0443\u0431./1000 \u043C3): ",
      value: this.state.gasprice,
      onChange: this.onChange,
      error: errors.gasprice
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "currentenergytarif",
      placeholder: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u043A\u0412\u0442*\u0447\u0430\u0441: ",
      label: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u043A\u0412\u0442*\u0447\u0430\u0441: ",
      value: this.state.currentenergytarif,
      onChange: this.onChange,
      error: errors.currentenergytarif
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "currentheattarif",
      placeholder: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u0413\u043A\u0430\u043B: ",
      label: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u0413\u043A\u0430\u043B: ",
      value: this.state.currentheattarif,
      onChange: this.onChange,
      error: errors.currentheattarif
    }), AskForm_jsx(common_TextFieldGroup, {
      name: "commentary",
      placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438: ",
      label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438: ",
      value: this.state.commentary,
      onChange: this.onChange,
      error: errors.commentary
    }))))))), AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container-fluid form-razdel button-section pb-5"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "container"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "row"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "col"
    }, AskForm_jsx("div", {
      className: "jsx-4153203840" + " " + "button-container"
    }, AskForm_jsx("button", {
      type: "submit",
      className: "jsx-4153203840" + " " + "button-submit"
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435")))))), AskForm_jsx(style_default.a, {
      id: "4153203840"
    }, [".razdel-title.jsx-4153203840{display:block;text-transform:uppercase;font-size:17px;font-weight:900;color:var(--accent-grey);line-height:23px;margin-bottom:0px;}", ".title-description.jsx-4153203840{font-size:14px;line-height:12px;}", ".form-razdel.jsx-4153203840{padding-top:30px;padding-bottom:15px;}", ".fields.jsx-4153203840{padding-top:15px;padding-bottom:15px;}", ".fields.jsx-4153203840 .label-title.jsx-4153203840{display:block;font-size:16px;line-height:20px;font-weight:700;margin-top:7px;margin-bottom:5px;}", ".fields.jsx-4153203840 .form-control.jsx-4153203840{font-size:16px;padding-left:10px;font-weight:300;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .label-title.jsx-4153203840{margin-bottom:10px;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:8px;padding-left:25px;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 input.jsx-4153203840{width:100%;height:inherit;position:absolute;left:0;z-index:1;opacity:0;margin-right:10px;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 input.jsx-4153203840:checked+label.jsx-4153203840::after{opacity:1;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 label.jsx-4153203840{position:relative;font-size:14px;line-height:16px;margin-bottom:0;margin-left:5px;font-weight:300;cursor:pointer;}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 label.jsx-4153203840::before{position:absolute;display:block;content:'';top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-30px;width:20px;height:20px;border-radius:13px;border:1px solid rgba(0,0,0,0.4);}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 label.jsx-4153203840::after{position:absolute;display:block;content:'';top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-25px;width:10px;height:10px;border-radius:13px;background:var(--accent-red);opacity:0;}", ".radio.jsx-4153203840:checked+label.jsx-4153203840:after{opacity:1;}", ".radio.jsx-4153203840:focus+label.jsx-4153203840:before{box-shadow:0 0 0 3px rgba(255,255,0,0.7);}", ".fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840:last-child{display:block;}", ".form-razdel.jsx-4153203840:nth-child(even){background-color:#fff;}", ".button-section.jsx-4153203840 .button-submit.jsx-4153203840{display:block;margin:0 auto;display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:12px 20px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto;box-shadow:var(--box-shadow-up);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".button-section.jsx-4153203840 .button-submit.jsx-4153203840:hover{cursor:pointer;box-shadow:var(--box-shadow);}", "@media (min-width:768px){.razdel-title.jsx-4153203840{display:block;text-transform:uppercase;font-size:21px;font-weight:300;color:var(--accent-grey);line-height:28px;margin-bottom:0px;}.title-description.jsx-4153203840{font-size:16px;line-height:12px;}.form-razdel.jsx-4153203840{padding-top:30px;padding-bottom:15px;}.fields.jsx-4153203840{padding-top:15px;padding-bottom:15px;}.fields.jsx-4153203840 .label-title.jsx-4153203840{display:block;font-size:20px;line-height:24px;font-weight:700;margin-top:7px;margin-bottom:10px;}.fields.jsx-4153203840 .form-control.jsx-4153203840{font-size:16px;padding-left:10px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .label-title.jsx-4153203840{margin-bottom:12px;font-size:20px;line-height:24px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:12px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 input.jsx-4153203840{margin-right:10px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 label.jsx-4153203840{font-size:16px;line-height:18px;margin-bottom:0;font-weight:300;}}", "@media (min-width:1200px){.razdel-title.jsx-4153203840{display:block;text-transform:uppercase;font-size:27px;font-weight:300;color:var(--accent-grey);line-height:34px;margin-bottom:0px;padding-right:300px;}.title-description.jsx-4153203840{font-size:16px;line-height:12px;}.form-razdel.jsx-4153203840{padding-top:30px;padding-bottom:15px;}.fields.jsx-4153203840{padding-top:15px;padding-bottom:15px;}.fields.jsx-4153203840 .label-title.jsx-4153203840{display:block;font-size:22px;line-height:24px;font-weight:700;margin-top:10px;margin-bottom:7px;}.fields.jsx-4153203840 .form-control.jsx-4153203840{font-size:18px;padding-left:15px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .label-title.jsx-4153203840{margin-bottom:15px;font-size:22px;line-height:24px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 input.jsx-4153203840{margin-right:10px;}.fields.jsx-4153203840 .radio-input-group.jsx-4153203840 .radio-input-field.jsx-4153203840 label.jsx-4153203840{font-size:18px;line-height:18px;margin-bottom:0;font-weight:300;}}"]));
  }

}

const mapStateToProps = state => ({
  errors: state.errors
});

/* harmony default export */ var form_AskForm = (Object(external_react_redux_["connect"])(mapStateToProps, {
  validateFormData: validateFormData
})(AskForm_AskForm));
// CONCATENATED MODULE: ./pages/askForm.js
var askForm_jsx = external_react_default.a.createElement;





class askForm_Home extends external_react_["Component"] {
  static getInitialProps({
    reduxStore,
    req
  }) {
    return {};
  }

  render() {
    return askForm_jsx("div", {
      className: "home"
    }, askForm_jsx(head["a" /* default */], {
      title: "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
      description: "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0433\u0430\u0437\u043E\u0432\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 (\u043C\u0438\u043D\u0438-\u0422\u042D\u0426)"
    }), askForm_jsx(Layout["a" /* default */], null, askForm_jsx(form_AskForm, null)));
  }

}

/* harmony default export */ var askForm = __webpack_exports__["default"] = (askForm_Home);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });